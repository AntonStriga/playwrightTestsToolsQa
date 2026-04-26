import { ENDPOINTS } from './endpoints.js'
import { requestBuilder, RequestFunction } from './requestBuilder.js'

export class AppApi {
    private appRequest: (url: string) => RequestFunction

    public tokenApi: RequestFunction
    public autorizationApi: RequestFunction
    public loginApi: RequestFunction
    public booksApi: RequestFunction
    public bookApi: RequestFunction
    public userApi: RequestFunction

    constructor(baseUrl: string) {
        this.appRequest = requestBuilder(baseUrl)

        this.tokenApi = this.appRequest(ENDPOINTS.tokenApi)
        this.autorizationApi = this.appRequest(ENDPOINTS.autorizationApi)
        this.loginApi = this.appRequest(ENDPOINTS.loginApi)
        this.booksApi = this.appRequest(ENDPOINTS.booksApi)
        this.bookApi = this.appRequest(ENDPOINTS.bookApi)
        this.userApi = this.appRequest(ENDPOINTS.userApi)
    }
}
