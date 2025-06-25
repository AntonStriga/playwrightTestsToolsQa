import { ElementsItems } from '../../appUI/commonElements/accordionChapters.js'
import { test } from '../../fixtures/app-base.js'
import { expect } from '@playwright/test'
import { BUTTONS_LABELS } from '../../testData/buttonsData.js'

test.describe('Elements -> Buttons', () => {
    test('01 Check Buttons title', async ({ mainPage, accordion, buttonsPage }) => {
        await mainPage.openElements()
        await accordion.elements.openElementsUnitByName(ElementsItems.Buttons)
        await expect(buttonsPage.title, 'Expect: Buttons page title has text').toHaveText(BUTTONS_LABELS.title)
    })
    test('02 Check Dynamic click', async ({ mainPage, accordion, buttonsPage }) => {
        await mainPage.openElements()
        await accordion.elements.openElementsUnitByName(ElementsItems.Buttons)
        await buttonsPage.clickMeButton.click()
        await expect(buttonsPage.clickMeResult, 'Expect: click me result is shown').toHaveText(
            BUTTONS_LABELS.clickMeText,
        )
    })
    test('03 Check Right click', async ({ mainPage, accordion, buttonsPage }) => {
        await mainPage.openElements()
        await accordion.elements.openElementsUnitByName(ElementsItems.Buttons)
        await buttonsPage.rightClickButton.click({ button: 'right' })
        await expect(buttonsPage.rightClickMeResult, 'Expect: right click me result is shown').toHaveText(
            BUTTONS_LABELS.rightClickMeText,
        )
    })
    test('04 Check Double click', async ({ mainPage, accordion, buttonsPage }) => {
        await mainPage.openElements()
        await accordion.elements.openElementsUnitByName(ElementsItems.Buttons)
        await buttonsPage.doubleClickButton.click({ clickCount: 2 })
        await expect(buttonsPage.doubleClickResult, 'Expect: double click result is shown').toHaveText(
            BUTTONS_LABELS.doubleClickMeText,
        )
    })
})
