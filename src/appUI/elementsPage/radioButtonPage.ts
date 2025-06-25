import { Page } from '@playwright/test'
import { RADIO_BUTTON_LABELS } from '../../testData/radioButtonData.js'

export class RadioButtonPage {
    readonly mainLocator
    readonly title
    readonly yesRadioButton
    readonly noRadioButton
    readonly impressiveRadioButton
    readonly textSuccess

    constructor(page: Page) {
        this.title = page.getByRole('heading', { name: RADIO_BUTTON_LABELS.title })
        this.mainLocator = this.title.locator('xpath=./parent::div')
        this.yesRadioButton = page.getByRole('radio').first()
        this.noRadioButton = this.mainLocator.getByRole('radio', { name: RADIO_BUTTON_LABELS.noRadioButtonName })
        this.impressiveRadioButton = this.mainLocator.getByRole('radio', {
            name: RADIO_BUTTON_LABELS.impressiveRadioButtonName,
        })
        this.textSuccess = this.mainLocator.locator('.text-success')
    }
}
