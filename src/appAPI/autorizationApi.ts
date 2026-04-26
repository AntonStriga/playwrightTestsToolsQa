import { AppApi } from './appApi.js'

export type TokenRequest = {
    token: string
    expires: string
    status: string
    result: string
}

export class AutorizationApi {
    constructor(private readonly api: AppApi) {}

    async isUserAutorized(userName: string, userPass: string) {
        return this.api.autorizationApi.post<boolean>('json', {
            body: JSON.stringify({
                userName: userName,
                password: userPass,
            }),
        })
    }

    async generateToken(userName: string, userPass: string) {
        return this.api.autorizationApi.post<TokenRequest>('json', {
            body: JSON.stringify({
                userName: userName,
                password: userPass,
            }),
        })
    }
}
