/*
let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";
*/
/*
let fruits = document.getElementsByName("fruits");
fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value);
    }
})
*/
/*
let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "lightgreen";
*/

let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "lightgreen";


let element = document.querySelector("[for]");
element.style.backgroundColor = "lightgreen";


let elements = document.querySelectorAll("[for]");
elements.forEach(element => {
    element.style.backgroundColor = "lightgreen";
})

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>

//     <h1 id="myTitle">This is the Menu</h1>

//     <input type="radio" name="fruits" value="apple">
//     <label for="apple">apple</label><br>
//     <input type="radio" name="fruits" value="orange">
//     <label for="orange">orange</label><br>
//     <input type="radio" name="fruits" value="banana">
//     <label for="banana">banana</label><br>

//     <ul>
//         <li>carrots</li>
//         <li>potatoes</li>
//         <li>onions</li>
//     </ul>

//     <div class="desserts">ice cream</div>
//     <div class="desserts">cake</div>
//     <div class="desserts">pie</div>
    
//     <script src="index.js"></script>
// </body>
// </html>