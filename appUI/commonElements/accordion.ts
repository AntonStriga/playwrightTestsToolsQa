import { Locator, Page } from "@playwright/test";
import { AccordionItems, ElementsItems } from "./accordionChapters";

export class Accordion {
    readonly mainLocator;
    readonly groupElement;
    readonly elements;

    constructor(page: Page) {
        this.mainLocator = page.locator('.accordion');
        this.groupElement = this.mainLocator.locator('.element-group');
        this.elements = new Elements(this.mainLocator);
    }

    getGroupElementByName(name: AccordionItems) {
        return this.groupElement.getByText(name)
    }

    async expandElement(element: AccordionItems) {
        const elementLocator = this.getGroupElementByName(element);
        await elementLocator.click()
    }
    async closeElement(element: AccordionItems) {
        const elementLocator = this.getGroupElementByName(element);
        await elementLocator.click();
    }
}

export class Elements {
    readonly mainLocator;

    constructor(baseLocator: Locator) {
        this.mainLocator = baseLocator.locator('.element-list');
    }

    getElementsUnitByName(name: ElementsItems) {
        return this.mainLocator.getByRole('listitem').filter({ hasText: name });
    }
    async openElementsUnitByName(name: ElementsItems) {
        await this.getElementsUnitByName(name).click();
    }
}