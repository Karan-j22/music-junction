// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)

const nameTag = document.createElement("h1");
nameTag.textContent = "Bro";
document.body.append(nameTag);

//const myList = document.querySelector("#fruit");
//const listItem = document.createElement("li");
//listItem.textContent = "mango";
//myList.append(listItem);
//myList.prepend(listItem);
//myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);

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
//     <ul id="fruit">
//         <li>apple</li>
//         <li>orange</li>
//         <li>banana</li>
//     </ul>
//     <script src="index.js"></script>
// </body>
// </html>