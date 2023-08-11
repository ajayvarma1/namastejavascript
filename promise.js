/** What is Promise ? 
 * 
 *  A promise is an object representing eventual completion or failure of asynchronous operation.
 *  
 * 
*/
console.log("Starting Promise Learning");

createOrder().then(function (orderId) {
    console.log(orderId);
    return orderId;
}).catch(function (err) {
    console.log(err.message);
}).then(function (orderId) {
    return processPaymentOrder(orderId)
}).then(function (res) {
    console.log(res);
}).catch(function (err) {
    console.log(err.message);
});

function processPaymentOrder(orderId) {
    return new Promise((resolve, reject) => {
        resolve("Payment Successful.");

    });
}

function createOrder() {

    return new Promise((resolve, reject) => {

        const orderId = "12345";
        if (validOrder(orderId)) {
            setTimeout(() => {
                resolve(orderId);
            }, 2000);
        } else {
            reject(new Error("Order not found"))
        }
    });
}

function validOrder(orderId) {
    return true;
}