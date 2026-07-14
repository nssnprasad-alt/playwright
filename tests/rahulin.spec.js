import { test, expect } from '@playwright/test';

test('@web Radio button handling', async ({ page }) => {

    await page.goto('https://demoqa.com/radio-button');

    // Click using label (more reliable)
    await page.locator('label[for="yesRadio"]').click();

    // Validate YES is selected
    await expect(page.locator('#yesRadio')).toBeChecked();

    // Select another radio (Impressive)
    await page.locator('label[for="impressiveRadio"]').click();

    // Validate Impressive is selected
    await expect(page.locator('#impressiveRadio')).toBeChecked();

    // Validate YES is now unselected
    await expect(page.locator('#yesRadio')).not.toBeChecked();

});