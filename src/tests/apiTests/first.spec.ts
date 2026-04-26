import { expect } from '@playwright/test'
import { test } from '../../fixtures/api-fixture.js'

test.describe('API tests', () => {
    test('first api test', async ({ autorizationApi }) => {
        expect(await autorizationApi.isUserAutorized('user_test', 'P@ssw0rd'), '').toBeFalsy()
    })
})
