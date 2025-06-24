import { ElementsItems } from '../../appUI/commonElements/accordionChapters.js'
import { test } from '../../fixtures/app-base.js'
import { expect } from '@playwright/test'
import { CheckBoxLabels } from '../../testData/checkBoxData.js'

test.describe('Elements -> Check Box', () => {
    test('01 Check Check box title', async ({ mainPage, accordion, checkBoxPage }) => {
        await mainPage.openElements()
        await accordion.elements.openElementsUnitByName(ElementsItems.CheckBox)
        await expect(checkBoxPage.title, 'Expect: check box page title has text').toHaveText(CheckBoxLabels.title)
    })
})
