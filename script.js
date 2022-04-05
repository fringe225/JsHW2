// let age = prompt('Enter your age');

// if(age<18){
//     alert('Get boyugun gelsin');
// }

let bodyTag = document.querySelector('body');
let checked = confirm('Make background dark?');

if(checked){
    bodyTag.style.backgroundColor='rgb(0,0,0,0.5)';
}