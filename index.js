// Write your code below:
const heading = document.getElementById('main-heading');
heading.textContent = 'Fruit World';
heading.style.color = 'orange';
const div = document.getElementById('header');
div.style.background = 'green';
div.style.borderBottom = '2px solid orange';
const basket = document.getElementById('basket-heading');
basket.style.color = 'green';
const div1 = document.getElementById('thanks');
const para = document.createElement('p');
para.textContent = 'Please visit us again';
div1.appendChild(para);
// Write your code below:
const parent = document.getElementsByClassName("fruit");
let third = parent[2];
third.style.backgroundColor = "yellow";
for (let i = 0; i < parent.length; i++){
    parent[i].style.fontWeight = "bold";
}
