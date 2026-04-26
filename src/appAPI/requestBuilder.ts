export type ResponseType = 'arraybuffer' | 'json' | 'text' | 'blob'
type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'

export const requestBuilder = (baseUrl: string) => {
    const methods: HttpMethod[] = ['get', 'post', 'put', 'patch', 'delete']
    return (endpoint: string) => {
        const url = `${baseUrl}${endpoint}`
        const requestObject: {
            [key: string]: <T>(responseType: ResponseType, config?: RequestInit, token?: string) => Promise<T>
        } = {}
        for (const method of methods) {
            requestObject[method] = async <T>(
                responseType: ResponseType,
                config: RequestInit = {},
                token: string = '',
            ) => {
                try {
                    const headers = { ...((config.headers ?? {}) as Record<string, string>) }
                    if (token) {
                        headers['Authorization'] = `Bearer ${token}`
                    }

                    const response = await fetch(url, {
                        method: method.toUpperCase(),
                        ...config,
                        headers,
                    })
                    switch (responseType) {
                        case 'arraybuffer':
                            return (await response.arrayBuffer()) as T
                        case 'json':
                            return (await response.json()) as T
                        case 'text':
                            return (await response.text()) as T
                        case 'blob':
                            return (await response.blob()) as T
                        default:
                            throw new Error('Unknown response type')
                    }
                } catch (error) {
                    console.error('Request failed:', error)
                    throw error
                }
            }
        }
        return requestObject
    }
}

export type RequestFunction = ReturnType<ReturnType<typeof requestBuilder>>
