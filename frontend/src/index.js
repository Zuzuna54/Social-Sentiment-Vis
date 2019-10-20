var socket = require("io")();




document.addEventListener("DOMContentLoaded", () => {

    document.addEventListener("click", () =>  console.log("this"))

})



// $(function () {
//     $('form').submit(function (e) {
//         e.preventDefault(); // prevents page reloading
//         socket.emit('chat message', $('#m').val());
//         $('#m').val('');
//         return false;
//     });
// });


// io.on('connection', function (socket) {
//     socket.on('chat message', function (msg) {
//         console.log('message: ' + msg);
//     });
// });