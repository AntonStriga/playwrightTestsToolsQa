import { Page } from "@playwright/test";
import { CheckBoxLabels } from "../../testData/checkBoxData";

export class CheckBoxPage {
    readonly mainLocator;
    readonly title;

    constructor(page: Page) {
        this.title = page.getByRole('heading', {name: CheckBoxLabels.title});
        this.mainLocator = this.title.locator('xpath=./parent::div');

    }
}