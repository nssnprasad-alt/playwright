test.beforeAll(async () => {
    const apiContext = await request.newContext();

    const loginResponse = await apiContext.post(
        "https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: loginPayLoad
        }
    );

    expect(loginResponse.ok()).toBeTruthy();

    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token;

    const orderResponse = await apiContext.post(
        "https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data: orderPayLoad,
            headers: {
                Authorization: token,
                "Content-Type": "application/json"
            }
        }
    );

    // ✅ Move these lines here
    const orderResponseJson = await orderResponse.json();
    console.log(orderResponseJson);

    ordersId = orderResponseJson.orders[0];
});