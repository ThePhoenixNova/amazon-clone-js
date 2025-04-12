import {formatCurrency} from "../../scripts/utils/money.js";

console.log('test suite: formatCurrency');
console.log("converts cents into dollars:");
if (formatCurrency(1209) === "12.09") {
    console.log("passed");
} else {
    console.log("failed");
}

console.log("work with 0:")
if (formatCurrency(0) === "0.00") {
    console.log("passed");
} else {
    console.log("failed");
}

console.log("rounded up to the nearest cent:");
if (formatCurrency(2000.5) === "20.01") {
    console.log("passed");
} else {
    console.log("failed");
}