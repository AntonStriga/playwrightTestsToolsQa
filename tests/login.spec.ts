import { test, expect } from '@playwright/test';
import { testUrls } from '../testData/testUrls';
import { mainPageTexts } from '../testData/testTexts';
import { MainPage } from '../appUI/manePage/mainPage';
import { Accordion } from '../appUI/commonElements/accordion';
import { AccordionChapters, ElementsChapters } from '../appUI/commonElements/accordionChapters';

test.describe('Main page suite', () => {
    test('Open main page', async({page}) => {
        await page.goto(testUrls.base)
        await expect(page, 'Expect: title has to be').toHaveTitle(mainPageTexts.pageTitle)
    })
    test('Open elements page', async({page}) => {
        await page.goto(testUrls.base)
        await (new MainPage(page)).openElements()
        await expect(page, 'Expect: title has to be').toHaveURL(testUrls.elements)
    })
    test('Expand elements group', async({page}) => {
        await page.goto(testUrls.base)
        await (new MainPage(page)).openElements()
        const accPage = new Accordion(page)
        await accPage.expandElement(AccordionChapters.Elements)
        await expect(
            accPage.elementsAccordion.getElementsUnitByName(ElementsChapters.Buttons), 
            'Expect: elementsAccordion is expanded'
        ).toBeVisible()
    })
})