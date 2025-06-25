import { TEST_URLS } from '../testData/testUrls.js'
import { MAIN_PAGE_TEXTS } from '../testData/testTexts.js'
import { AccordionItems, ElementsItems } from '../appUI/commonElements/accordionChapters.js'
import { test } from '../fixtures/app-base.js'
import { expect } from '@playwright/test'

test.describe('Main page suite', () => {
    test('Open main page', async ({ page }) => {
        await page.goto(TEST_URLS.base)
        await expect(page, 'Expect: title has to be').toHaveTitle(MAIN_PAGE_TEXTS.pageTitle)
    })
    test('Open elements page', async ({ page, mainPage }) => {
        await mainPage.openElements()
        await expect(page, 'Expect: title has to be').toHaveURL(TEST_URLS.elements)
    })
    test('Expand elements group', async ({ mainPage, accordion }) => {
        await mainPage.openElements()
        await accordion.expandElement(AccordionItems.Elements)
        await expect(
            accordion.elements.getElementsUnitByName(ElementsItems.Buttons),
            'Expect: elementsAccordion is expanded',
        ).toBeVisible()
    })
})
