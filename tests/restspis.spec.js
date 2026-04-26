import { test, expect, request } from '@playwright/test';
const loginPayLoad = {
    userEmail: "nssnprasad@gmail.com",
    userPassword: "N@vya09618"
};

const orderPayLoad = {
    orders: [{ country: "India", productOrderedId: "6960eac0c941646b7a8b3e68" }]
};

let token;
let ordersId;

test.beforeAll(async () => {
    const apiContext = await request.newContext();

    // Login
    const loginResponse = await apiContext.post(
        "https://rahulshettyacademy.com/api/ecom/auth/login",
        { data: loginPayLoad }
    );

    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token;
    console.log(token);

    // Create Order
    const orderResponse = await apiContext.post(
        "https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data: orderPayLoad,
            headers: {
                'Authorization': token,
                'Content-Type': "application/json"  // ✅ Fix 2: Removed space in header key
            }
        }
    );

    // ✅ Fix 1: Moved inside beforeAll where orderResponse is in scope
    const orderResponseJson = await orderResponse.json();
    console.log(orderResponseJson);
    ordersId = orderResponseJson.orders[0];
});

test("Rahul's Test", async ({ page }) => {

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);

   
});
