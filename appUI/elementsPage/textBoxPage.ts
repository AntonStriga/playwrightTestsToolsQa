import { Page } from "@playwright/test";
import { TextBoxLabels } from "../../testData/textBoxData.js";

export class TextBoxPage {
    readonly mainLocator;
    readonly title;
    readonly userForm;
    readonly fullNameLable;
    readonly fullNameInput;
    readonly emailLable;
    readonly emailInput;
    readonly currentAddressLable;
    readonly currentAddressInput;
    readonly permanentAddressLable;
    readonly permanentAddressInput;
    readonly submitButton;
    readonly outputBox;
    readonly outputName;
    readonly outputEmail;
    readonly outputCurrentAddress;
    readonly outputPermanentAddress;

    constructor(page: Page) {
        this.title = page.getByRole('heading', {name: TextBoxLabels.title});
        this.mainLocator = this.title.locator('xpath=./parent::div');
        this.userForm = this.mainLocator.locator('[id="userForm"]');
        this.fullNameLable = this.userForm.locator('label[id="userName-label"]');
        this.fullNameInput = this.userForm.locator('input[id="userName"]');
        this.emailLable = this.userForm.locator('label[id="userEmail-label"]');
        this.emailInput = this.userForm.locator('input[id="userEmail"]');
        this.currentAddressLable = this.userForm.locator('label[id="currentAddress-label"]');
        this.currentAddressInput = this.userForm.locator('textarea[id="currentAddress"]');
        this.permanentAddressLable = this.userForm.locator('label[id="permanentAddress-label"]');
        this.permanentAddressInput = this.userForm.locator('textarea[id="permanentAddress"]');
        this.submitButton = this.userForm.getByRole('button', {name: TextBoxLabels.submitButton});
        this.outputBox = this.userForm.locator('[id="output"]');
        this.outputName = this.outputBox.locator('[id="name"]');
        this.outputEmail = this.outputBox.locator('[id="email"]');
        this.outputCurrentAddress = this.outputBox.locator('[id="currentAddress"]');
        this.outputPermanentAddress = this.outputBox.locator('[id="permanentAddress"]');
    }
    
}