'use strict';

const box = document.getElementById('box');

const btns = document.getElementsByTagName('button');

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

const wrapper = document.querySelector('.wrapper');

console.dir(box);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: green; width: 200px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';


//самый простой способ перебрать все эл только из querySelectorAll
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(elem => {
    elem.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
const text = document.createTextNode('Hello');

div.classList.add('black');

//document.body.append(div);

//добавление нового элемента в сущесвтующий div
wrapper.append(div);
// wrapper.prepend(div);

// hearts[0].after(div);
// circles[1].remove();
// hearts[2].replaceWith(circles[0]);

div.innerHTML = '<h1>Hello World</h1>';
//div.textContent = "Hellp"

div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');

