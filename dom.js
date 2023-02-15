/*
--------------
Dom Problems
--------------
*/

//1. You are given list of fruits and an urordered list html element. add a list for each to the unordered list
let fruits = ['Apple','Banana','Orange','Mango'];
let imgSrc1 = './images/player-1.png';
let imgSrc2 = './images/player-2.png';
let fruitListContainer = document.querySelector('#fruit-list');

document.getElementById('add-fruit').onclick = function () {
    fruits.forEach(fruit=>{
        let list = document.createElement('li');
        list.innerText = fruit;
        fruitListContainer.append(list)
    })
}


let imgContainer = document.getElementById('img-container');
let body = document.body;
let img = document.createElement('img');
let toggleBtn = document.createElement('button');

//2.Click a button to add image and create a toggle button for the image
document.getElementById('add-img').addEventListener('click', function() {
    
    img.src = imgSrc1;
    img.id = 'player-img'
    imgContainer.appendChild(img);
    toggleBtn.innerText = 'Toggle Image';
    body.append(toggleBtn);
    toggleBtn.id = 'toggle-btn';

    //3.Implement a toggle button for an image
    document.getElementById('toggle-btn').addEventListener('click', function(){
        if(img.src === imgSrc1) {
            img.src = imgSrc2
        }
    
        else {
            img.src = imgSrc2
        }
    })
    
})






