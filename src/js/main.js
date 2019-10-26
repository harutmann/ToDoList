"use strict"; //вкл строг режим

let button = document.querySelector(".button");
var listItems = document.getElementsByTagName("li");

for (var i = 0; i < listItems.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("❌");
  span.className = "close";
  span.appendChild(txt);
  listItems[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(evt) {
  if (evt.target.tagName === 'LI') {
    evt.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement('li');
  var inputValue = document.getElementById('myInput').value;
  var content = document.createTextNode(inputValue);
  li.appendChild(content);

  if (inputValue === "") {
    alert('write something');
  } else {
    document.getElementById("myList").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("❌");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);



  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

button.addEventListener("click", function(evt) {
  evt.preventDefault();

  newElement();

});
