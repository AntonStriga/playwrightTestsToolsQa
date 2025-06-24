import { ElementsItems } from '../../appUI/commonElements/accordionChapters.js'
import { test } from '../../fixtures/app-base.js'
import { expect } from '@playwright/test'
import { TEXT_BOX_LABELS, TEXT_BOX_TEST_DATA } from '../../testData/textBoxData.js'

test.describe('Elements -> Text Box', () => {
    test('01 Check Text box title', async ({ mainPage, accordion, textBoxPage }) => {
        await mainPage.openElements()
        await accordion.elements.openElementsUnitByName(ElementsItems.TextBox)
        await expect(textBoxPage.title, 'Expect: text box page title has text').toHaveText(TEXT_BOX_LABELS.title)
    })
    test('02 Check fields presence', async ({ mainPage, accordion, textBoxPage }) => {
        await mainPage.openElements()
        await accordion.elements.openElementsUnitByName(ElementsItems.TextBox)

        await expect(textBoxPage.fullNameLable, 'Expect: name field label is visible').toHaveText(
            TEXT_BOX_LABELS.nameField,
        )
        await expect(textBoxPage.emailLable, 'Expect: enali field label is visible').toHaveText(
            TEXT_BOX_LABELS.emailField,
        )
        await expect(textBoxPage.currentAddressLable, 'Expect: current address field label is visible').toHaveText(
            TEXT_BOX_LABELS.currentAddressField,
        )
        await expect(textBoxPage.permanentAddressLable, 'Expect: permanent address field label is visible').toHaveText(
            TEXT_BOX_LABELS.permanentAddressField,
        )
        await expect(textBoxPage.submitButton, 'Expect: submit button is nisible').toBeVisible()
    })
    test('03 Check info submitting', async ({ mainPage, accordion, textBoxPage }) => {
        await mainPage.openElements()
        await accordion.elements.openElementsUnitByName(ElementsItems.TextBox)

        await textBoxPage.fullNameInput.fill(TEXT_BOX_TEST_DATA.fullNameText)
        await textBoxPage.emailInput.fill(TEXT_BOX_TEST_DATA.emailText)
        await textBoxPage.currentAddressInput.fill(TEXT_BOX_TEST_DATA.currentAddressText)
        await textBoxPage.permanentAddressInput.fill(TEXT_BOX_TEST_DATA.permanentAddressText)
        await textBoxPage.submitButton.click()

        await expect(textBoxPage.outputName, 'Expect: full name in output box is correct').toContainText(
            TEXT_BOX_TEST_DATA.fullNameText,
        )
        await expect(textBoxPage.outputEmail, 'Expect: full name in output box is correct').toContainText(
            TEXT_BOX_TEST_DATA.emailText,
        )
        await expect(textBoxPage.outputCurrentAddress, 'Expect: full name in output box is correct').toContainText(
            TEXT_BOX_TEST_DATA.currentAddressText,
        )
        await expect(textBoxPage.outputPermanentAddress, 'Expect: full name in output box is correct').toContainText(
            TEXT_BOX_TEST_DATA.permanentAddressText,
        )
    })
    test('04 Check info submitting - with fails', async ({ mainPage, accordion, textBoxPage }) => {
        await mainPage.openElements()
        await accordion.elements.openElementsUnitByName(ElementsItems.TextBox)

        await textBoxPage.fullNameInput.fill(TEXT_BOX_TEST_DATA.fullNameText)
        await textBoxPage.emailInput.fill(TEXT_BOX_TEST_DATA.emailText)
        await textBoxPage.currentAddressInput.fill(TEXT_BOX_TEST_DATA.currentAddressText)
        await textBoxPage.permanentAddressInput.fill(TEXT_BOX_TEST_DATA.permanentAddressText)
        await textBoxPage.submitButton.click()

        await expect(textBoxPage.outputName, 'Expect: full name in output box is correct').toHaveText(
            `Name:${TEXT_BOX_TEST_DATA.fullNameText}`,
        )
        await expect(textBoxPage.outputEmail, 'Expect: full name in output box is correct').toHaveText(
            `${TEXT_BOX_LABELS.emailField}:${TEXT_BOX_TEST_DATA.emailText}`,
        )
        await expect(textBoxPage.outputCurrentAddress, 'Expect: full name in output box is correct').toHaveText(
            `${TEXT_BOX_LABELS.currentAddressField}:${TEXT_BOX_TEST_DATA.currentAddressText}`,
        )
        await expect(textBoxPage.outputPermanentAddress, 'Expect: full name in output box is correct').toHaveText(
            `${TEXT_BOX_LABELS.permanentAddressField}:${TEXT_BOX_TEST_DATA.permanentAddressText}`,
        )
    })
})
