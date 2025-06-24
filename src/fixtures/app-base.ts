import { test as base } from '@playwright/test'
import { Accordion } from '../appUI/commonElements/accordion.js'
import { MainPage } from '../appUI/mainPage/mainPage.js'
import { testUrls } from '../testData/testUrls.js'
import { TextBoxPage } from '../appUI/elementsPage/textBoxPage.js'
import { CheckBoxPage } from '../appUI/elementsPage/checkBoxPage.js'

type MyFixtures = {
    mainPage: MainPage
    accordion: Accordion
    textBoxPage: TextBoxPage
    checkBoxPage: CheckBoxPage
}

export const test = base.extend<MyFixtures>({
    mainPage: async ({ page }, use) => {
        await page.goto(testUrls.base)
        await use(new MainPage(page))
    },
    accordion: async ({ page }, use) => {
        await use(new Accordion(page))
    },
    textBoxPage: async ({ page }, use) => {
        await use(new TextBoxPage(page))
    },
    checkBoxPage: async ({ page }, use) => {
        await use(new CheckBoxPage(page))
    },
})
