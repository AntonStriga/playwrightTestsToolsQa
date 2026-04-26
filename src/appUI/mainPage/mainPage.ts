import { Page } from '@playwright/test'
import { MAIN_PAGE_TEXTS } from '../../testData/testTexts.js'

export class MainPage {
    readonly mainLocator
    readonly categoryCards
    readonly elementsCard
    readonly bookStoreCard
    constructor(page: Page) {
        this.mainLocator = page.locator('.home-content')
        this.categoryCards = this.mainLocator.locator('.category-cards')
        this.elementsCard = this.categoryCards.locator('.card').filter({ hasText: MAIN_PAGE_TEXTS.elementsCard })
        this.bookStoreCard = this.categoryCards.locator('.card').filter({ hasText: MAIN_PAGE_TEXTS.bookStoreCard })
    }

    async openElements() {
        await this.elementsCard.click()
    }
    async openBookStore() {
        await this.bookStoreCard.click()
    }
}
