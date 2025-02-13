import { ElementsItems } from '../../appUI/commonElements/accordionChapters';
import { test } from '../../fixtures/app-base';
import { expect } from '@playwright/test';
import { TextBoxLabels, TextBoxTestData } from '../../testData/textBoxData';

test.describe('Elements -> Text Box', () => {
    test('01 Check Text box title', async({mainPage, accordion, textBoxPage}) => {
        await mainPage.openElements();
        await accordion.elements.openElementsUnitByName(ElementsItems.TextBox);
        await expect(textBoxPage.title, 'Expect: text box page title has text').toHaveText(TextBoxLabels.title);
    })
    test('02 Check fields presence', async({mainPage, accordion, textBoxPage}) => {
        await mainPage.openElements();
        await accordion.elements.openElementsUnitByName(ElementsItems.TextBox);

        await expect(textBoxPage.fullNameLable, 'Expect: name field label is visible').toHaveText(TextBoxLabels.nameField);
        await expect(textBoxPage.emailLable, 'Expect: enali field label is visible').toHaveText(TextBoxLabels.emailField);
        await expect(textBoxPage.currentAddressLable, 'Expect: current address field label is visible').toHaveText(TextBoxLabels.currentAddressField);
        await expect(textBoxPage.permanentAddressLable, 'Expect: permanent address field label is visible').toHaveText(TextBoxLabels.permanentAddressField);
        await expect(textBoxPage.submitButton, 'Expect: submit button is nisible').toBeVisible()
    })
    test('03 Check info submitting', async({mainPage, accordion, textBoxPage}) => {
        await mainPage.openElements();
        await accordion.elements.openElementsUnitByName(ElementsItems.TextBox);
        
        await textBoxPage.fullNameInput.fill(TextBoxTestData.fullNameText);
        await textBoxPage.emailInput.fill(TextBoxTestData.emailText);
        await textBoxPage.currentAddressInput.fill(TextBoxTestData.currentAddressText);
        await textBoxPage.permanentAddressInput.fill(TextBoxTestData.permanentAddressText);
        await textBoxPage.submitButton.click();

        await expect(
            textBoxPage.outputName, 
            'Expect: full name in output box is correct'
        ).toContainText(TextBoxTestData.fullNameText);
        await expect(
            textBoxPage.outputEmail, 
            'Expect: full name in output box is correct'
        ).toContainText(TextBoxTestData.emailText);
        await expect(
            textBoxPage.outputCurrentAddress, 
            'Expect: full name in output box is correct'
        ).toContainText(TextBoxTestData.currentAddressText);
        await expect(
            textBoxPage.outputPermanentAddress, 
            'Expect: full name in output box is correct'
        ).toContainText(TextBoxTestData.permanentAddressText);
    })
    test('04 Check info submitting - with fails', async({mainPage, accordion, textBoxPage}) => {
        await mainPage.openElements();
        await accordion.elements.openElementsUnitByName(ElementsItems.TextBox);
        
        await textBoxPage.fullNameInput.fill(TextBoxTestData.fullNameText);
        await textBoxPage.emailInput.fill(TextBoxTestData.emailText);
        await textBoxPage.currentAddressInput.fill(TextBoxTestData.currentAddressText);
        await textBoxPage.permanentAddressInput.fill(TextBoxTestData.permanentAddressText);
        await textBoxPage.submitButton.click();

        await expect(
            textBoxPage.outputName, 
            'Expect: full name in output box is correct'
        ).toHaveText(`Name:${TextBoxTestData.fullNameText}`);
        await expect(
            textBoxPage.outputEmail, 
            'Expect: full name in output box is correct'
        ).toHaveText(`${TextBoxLabels.emailField}:${TextBoxTestData.emailText}`);
        await expect(
            textBoxPage.outputCurrentAddress, 
            'Expect: full name in output box is correct'
        ).toHaveText(`${TextBoxLabels.currentAddressField}:${TextBoxTestData.currentAddressText}`);
        await expect(
            textBoxPage.outputPermanentAddress, 
            'Expect: full name in output box is correct'
        ).toHaveText(`${TextBoxLabels.permanentAddressField}:${TextBoxTestData.permanentAddressText}`);
    })
})