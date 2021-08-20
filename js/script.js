const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

const art = document.getElementById("art");

const desc = document.getElementById("desc");

const price = document.getElementById("price");

first.addEventListener('click', function () {
    art.src = "images/1.jpg";
    desc.innerText = "First - is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    price.innerText = 750;

})

second.addEventListener('click', function () {
    art.src = "images/2.jpg";
    desc.innerText = "Second - is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    price.innerText = 550;
})

third.addEventListener('click', function () {
    art.src = "images/3.jpg";
    desc.innerText = "Third - is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    price.innerText = 300;
})
