const myLabel = document.getElementById("myLabel");

update();
setInterval(update, 1000);

function update(){

    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hours >= 12 ? "pm" : "am";

        hours = (hours % 12) || 12;

        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);

        return `${hours}:${minutes}:${seconds} ${amOrPm}`;
    }
    function formatZeroes(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}

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
//     <label id="myLabel"></label>
//     <script src="index.js"></script>
// </body>
// </html>