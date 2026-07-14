# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: rahul.spec.js >>  @Web Rahul's Test
- Location: tests\rahul.spec.js:2:1

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /Rahul Shetty Academy/
Received string:  "Let's Shop"
Timeout: 5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × unexpected value "Let's Shop"

```

```yaml
- navigation:
  - link "Automation Automation Practice":
    - /url: ""
    - heading "Automation" [level=3]
    - paragraph: Automation Practice
  - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire":
    - /url: https://techsmarthire.com/
  - list:
    - listitem:
      - button " HOME"
    - listitem
    - listitem:
      - button " ORDERS"
    - listitem:
      - button " Cart"
    - listitem:
      - button "Sign Out"
- paragraph: Home | Search
- heading "Filters" [level=4]
- textbox "search"
- heading "Price Range" [level=6]
- textbox "Min Price"
- textbox "Max Price"
- heading "Categories" [level=6]
- text: 
- checkbox
- text: fashion
- checkbox
- text: electronics
- checkbox
- text: household
- heading "Sub Categories" [level=6]
- text: 
- checkbox
- text: t-shirts
- checkbox
- text: shirts
- checkbox
- text: shoes
- checkbox
- text: mobiles
- checkbox
- text: laptops
- heading "Search For" [level=6]
- text: 
- checkbox
- text: men
- checkbox
- text: women Showing 9 results | User can only see maximum 9 products on a page
- img
- heading "ADIDAS ORIGINAL" [level=5]
- text: $ 11500
- button "View"
- button " Add To Cart"
- img
- heading "ZARA COAT 3" [level=5]
- text: $ 11500
- button "View"
- button " Add To Cart"
- img
- heading "iphone 13 pro" [level=5]
- text: $ 55000
- button "View"
- button " Add To Cart"
- img
- heading "TestProduct" [level=5]
- text: $ 11500
- button "View"
- button " Add To Cart"
- img
- heading "qwerty" [level=5]
- text: $ 11500
- button "View"
- button " Add To Cart"
- img
- heading "qwerty" [level=5]
- text: $ 11500
- button "View"
- button " Add To Cart"
- img
- heading "qwerty" [level=5]
- text: $ 11500
- button "View"
- button " Add To Cart"
- img
- heading "qwerty" [level=5]
- text: $ 11500
- button "View"
- button " Add To Cart"
- img
- heading "qwerty" [level=5]
- text: $ 11500
- button "View"
- button " Add To Cart"
- list "Pagination":
  - listitem: « Previous page
  - listitem: You're on page 1
  - listitem: Next page »
- text: Design and Developed By - Kunal Sharma
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | test(" @Web Rahul's Test", async ({ page }) => {
  3  |     await page.goto("https://rahulshettyacademy.com/client");
  4  | 
  5  |     await page.locator("#userEmail").fill("anshika@gmail.com");
  6  |     await page.locator("#userPassword").fill("Iamking@000");
  7  |     await page.locator("#login").click();
  8  | 
> 9  |     await expect(page).toHaveTitle(/Rahul Shetty Academy/);
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  10 |     await page.waitForLoadState('networkidle');
  11 | 
  12 |     //await page.locatorlocator(".card-body b").first().click();
  13 | 
  14 |     await page.locator(".card-body b").first().waitFor();
  15 | 
  16 | 
  17 |     const productTitles = await page.locator(".card-body b").allTextContents();
  18 |     console.log(productTitles);
  19 | });
```