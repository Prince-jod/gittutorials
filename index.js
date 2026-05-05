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