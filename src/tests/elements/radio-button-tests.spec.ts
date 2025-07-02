import { ElementsItems } from '../../appUI/commonElements/accordionChapters.js'
import { test } from '../../fixtures/app-base.js'
import { expect } from '@playwright/test'
import { RADIO_BUTTON_LABELS } from '../../testData/radioButtonData.js'

test.describe('Elements -> Check Box', () => {
    test('01 Check Radio button title', async ({ mainPage, accordion, radioButtonPage }) => {
        await mainPage.openElements()
        await accordion.elements.openElementsUnitByName(ElementsItems.RadioButton)
        await expect(radioButtonPage.title, 'Expect: Radio button page title has text').toHaveText(
            RADIO_BUTTON_LABELS.title,
        )
    })
    test.skip('02 Check Yes checkboxe select', async ({ mainPage, accordion, radioButtonPage }) => {
        await mainPage.openElements()
        await accordion.elements.openElementsUnitByName(ElementsItems.RadioButton)
        await radioButtonPage.yesRadioButton.check()
        await expect(radioButtonPage.textSuccess, 'Expect: success result is Yes').toHaveText(
            RADIO_BUTTON_LABELS.yesRadioButtonName,
        )
    })
})
