type EndpointMap = {
    [key: string]: string
}

export const ENDPOINTS: EndpointMap = {
    tokenApi: 'Account/v1/GenerateToken',
    autorizationApi: 'Account/v1/Authorized',
    loginApi: 'Account/v1/Login',
    booksApi: 'BookStore/v1/Books',
    bookApi: 'BookStore/v1/Book',
    userApi: 'Account/v1/User',
} as const
