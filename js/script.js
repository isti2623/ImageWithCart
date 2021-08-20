const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

const art = document.getElementById("art");

const desc = document.getElementById("desc");

const price = document.getElementById("price");


const free = document.getElementById("free");
const express = document.getElementById("express");


const shipping = document.getElementById("shipping");

const total = document.getElementById("total");

function updateTotal() {
    const shippingCharge = Number(shipping.innerText);
    const productPrice = Number(price.innerText);
    const grandTotal = shippingCharge + productPrice;
    total.innerText = grandTotal;

}


free.addEventListener('click', function () {
    shipping.innerText = 5;
    updateTotal();

})

express.addEventListener('click', function () {
    shipping.innerText = 30;

    updateTotal();
})






first.addEventListener('click', function () {
    art.src = "images/1.jpg";
    desc.innerText = "First - is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    price.innerText = 750;
    updateTotal();


})

second.addEventListener('click', function () {
    art.src = "images/2.jpg";
    desc.innerText = "Second - is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    price.innerText = 550;
    updateTotal();

})

third.addEventListener('click', function () {
    art.src = "images/3.jpg";
    desc.innerText = "Third - is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    price.innerText = 300;
    updateTotal();

})


