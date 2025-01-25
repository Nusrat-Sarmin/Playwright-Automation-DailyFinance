import { expect } from "@playwright/test";

export default class UserDailyCost {
    constructor(page){
        this.page = page;
        this.addCost = page.getByRole("button",{name : "Add Cost"});
        this.addItemName = page.getByLabel('Item Name');
        this.addProductQuantity = page.getByRole('button', { name: '+' });
        this.addProductAmount = page.getByLabel('Amount');
        this.submitBtn = page.getByRole('button', { name: 'Submit' });
        this.viewBtn = page.getByRole('button', { name: 'View' });
        this.editBtn = page.getByRole('button', { name: 'Edit' });
        this.updateBtn = page.getByRole('button', { name: 'Update' });
    }

    async addDailyCost(cost){
        await this.addCost.click();
        await this.addItemName.fill(cost.itemName);
        await this.addProductQuantity.click();
        await this.addProductAmount.fill(cost.productAmount);
        await this.submitBtn.click();
        await this.viewBtn.click();
        await this.editBtn.click();
        await this.updateBtn.click();

       }
}