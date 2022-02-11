function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    //calsulate total
    calculateTotal();
};


function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
};


// calculate Total
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax
    //update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = totalPrice;
};


// phone increase decrease events
document.getElementById('case-iphone-positive').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});
document.getElementById('case-iphone-negative').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});


//handle product increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});
document.getElementById('case-negative').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})
