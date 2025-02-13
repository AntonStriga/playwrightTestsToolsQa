import { test as base } from '@playwright/test';
import { Accordion } from "../appUI/commonElements/accordion";
import { MainPage } from "../appUI/mainPage/mainPage";
import { testUrls } from '../testData/testUrls';
import { TextBoxPage } from '../appUI/elementsPage/textBoxPage';

type MyFixtures = {
    mainPage: MainPage;
    accordion: Accordion;
    textBoxPage: TextBoxPage;
};

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
})