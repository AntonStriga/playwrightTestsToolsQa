import { Page } from "@playwright/test";

export class MainPage {
    readonly mainLocator;
    readonly categoryCards;
    readonly elementsCard;
    constructor(page: Page) {
        this.mainLocator = page.locator('.home-content');
        this.categoryCards = this.mainLocator.locator('.category-cards');
        this.elementsCard = this.categoryCards.locator('.card >> nth=0');
    }

    async openElements() {
        await this.elementsCard.click();
    }
}