import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

// async await
async function loadPage() {
    //try catch
    try {
        // throw 'error1';
        await loadProductsFetch();

        const vlaue = await new Promise((resolve, reject) => {
            // throw 'error2';
            loadCart(() => {
                // reject('error3');
                resolve('value3');
            });
            // loadCart();
        });
    } catch (error) {
        console.log('Unexpected error. Please try again later.');
    }
    // console.log(vlaue);
    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();

//promiseAll
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});

//promise
// new Promise((resolve) => {
//     loadProducts(() => {
//         resolve();
//     });
// }).then(() => {
//     return new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         });
//     });
// }).then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// });

//nested callback
// loadProducts(() => {
//     loadCart(() => {
//         renderOrderSummary();
//         renderPaymentSummary();
//     });
// });
