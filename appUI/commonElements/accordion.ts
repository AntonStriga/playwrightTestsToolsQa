import { Locator, Page } from "@playwright/test";
import { AccordionChapters, ElementsChapters } from "./accordionChapters";

const accordionChapters = [
    AccordionChapters.Elements,
    AccordionChapters.Forms,
    AccordionChapters.Alerts,
    AccordionChapters.Widgets,
    AccordionChapters.Interactions,
    AccordionChapters.BookStore,
]
const elementsChapters = [
    ElementsChapters.TextBox,
    ElementsChapters.CheckBox,
    ElementsChapters.RadioButton,
    ElementsChapters.WebTables,
    ElementsChapters.Buttons,
    ElementsChapters.Links,
    ElementsChapters.BrokenLinks,
    ElementsChapters.UploadAndDownload,
    ElementsChapters.DynamicProperties,
]

export class Accordion {
    readonly mainLocator
    readonly groupElement
    readonly elementsAccordion

    constructor(page: Page) {
        this.mainLocator = page.locator('.accordion')
        this.groupElement = this.mainLocator.locator('.element-group')
        this.elementsAccordion = new ElementsAccordion(this.getGroupElementByName(accordionChapters[0]))
    }

    getGroupElementByName(name: AccordionChapters) {
        return this.groupElement.locator(`nth=${accordionChapters.indexOf(name)}`)
    }

    async expandElement(element: AccordionChapters) {
        const elementLocator = this.getGroupElementByName(element)
        await elementLocator.click()
    }
    async closeElement(element: AccordionChapters) {
        const elementLocator = this.getGroupElementByName(element)
        await elementLocator.click()
    }
}

export class ElementsAccordion {
    readonly mainLocator

    constructor(baseLocator: Locator) {
        this.mainLocator = baseLocator.locator('.element-list')
    }

    async expand() {
        await this.mainLocator.click()
    }
    async close() {
        await this.mainLocator.click()
    }
    getElementsUnitByName(name: ElementsChapters) {
        return this.mainLocator.locator(`id=item-${elementsChapters.indexOf(name)}`)
    }
    async openElementsUnitByName(name: ElementsChapters) {
        this.getElementsUnitByName(name).click()
    }
}