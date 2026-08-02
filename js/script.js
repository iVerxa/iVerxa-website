console.log("iVerxa Finds Loaded");
const giftAmount = document.getElementById("giftAmount");
const giftValue = document.getElementById("giftValue");
const payPrice = document.getElementById("payPrice");

const discountPrices = {
    "₹50": "₹49",
    "₹100": "₹98",
    "₹200": "₹196",
    "₹500": "₹490",
    "₹1000": "₹980"
};

giftAmount.addEventListener("change", function () {
    giftValue.textContent = this.value;
    payPrice.textContent = discountPrices[this.value];
});