/* alert("你吃了吗？亲") */
// change images
var myImage = document.querySelector('img');
myImage.onclick = function(){
  var mySrc = myImage.getAttribute('src');
  if(mySrc === "imgs/11.png"){
    myImage.setAttribute('src', 'imgs/22.png')
  }else{
    myImage.setAttribute('src', 'imgs/11.png')
  }
}

//click html the words pop out
document.querySelector('HTML').onclick = function() {
  alert("stop please----")
}

//monitor on button
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
