import { Page } from '@playwright/test'
import { CHECK_BOX_LABELS } from '../../testData/checkBoxData.js'

export class CheckBoxPage {
    readonly mainLocator
    readonly title

    constructor(page: Page) {
        this.title = page.getByRole('heading', { name: CHECK_BOX_LABELS.title })
        this.mainLocator = this.title.locator('xpath=./parent::div')
    }
}
