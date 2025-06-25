import { Page } from '@playwright/test'
import { BUTTONS_LABELS } from '../../testData/buttonsData.js'

export class ButtonsPage {
    readonly mainLocator
    readonly title
    readonly clickMeButton
    readonly rightClickButton
    readonly doubleClickButton
    readonly clickMeResult
    readonly rightClickMeResult
    readonly doubleClickResult

    constructor(page: Page) {
        this.title = page.getByRole('heading', { name: BUTTONS_LABELS.title })
        this.mainLocator = this.title.locator('xpath=./parent::div')
        this.clickMeButton = this.mainLocator.getByRole('button', { name: BUTTONS_LABELS.clickMeButton, exact: true })
        this.rightClickButton = this.mainLocator.getByRole('button', { name: BUTTONS_LABELS.rightClickMe, exact: true })
        this.doubleClickButton = this.mainLocator.getByRole('button', {
            name: BUTTONS_LABELS.doubleClickMe,
            exact: true,
        })
        this.clickMeResult = this.mainLocator.locator('[id="dynamicClickMessage"]')
        this.rightClickMeResult = this.mainLocator.locator('[id="rightClickMessage"]')
        this.doubleClickResult = this.mainLocator.locator('[id="doubleClickMessage"]')
    }
}
