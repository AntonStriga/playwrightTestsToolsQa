import { test as base } from '@playwright/test'
import { AppApi } from '../appAPI/appApi.js'
import { BASE_URL } from '../testData/testUrls.js'
import { AutorizationApi } from '../appAPI/autorizationApi.js'

type ApiFixture = {
    api: AppApi
    autorizationApi: AutorizationApi
}

export const test = base.extend<ApiFixture>({
    api: async ({}, use) => {
        const apiInstance = new AppApi(BASE_URL)
        await use(apiInstance)
    },

    autorizationApi: async ({ api }, use) => {
        const authApi = new AutorizationApi(api)
        await use(authApi)
    },
})
