var InputElement = document.querySelector('input');
console.log(InputElement);

var elementTest = document.querySelector('.history-search');

console.log(elementTest);

function CreateBox(getText){
    var node = document.createElement("div");
    node.setAttribute("class","box");
    elementTest.appendChild(node);
    var nodeHistory = document.createElement("div");
    node.appendChild(nodeHistory);
    nodeHistory.setAttribute("class","history-search");
    var icon_1 = document.createElement("i");
    nodeHistory.appendChild(icon_1);
    icon_1.setAttribute("class","fa-solid fa-clock");
    var historyText = document.createElement("span");
    nodeHistory.appendChild(historyText);
    var textSearch = document.createTextNode(getText);
    historyText.appendChild(textSearch);
    var icon_2 = document.createElement("i");
    nodeHistory.appendChild(icon_2);
    icon_2.setAttribute("class","fa-solid fa-trash");
}

InputElement.onchange = function(){
    var getText = InputElement.value;
    CreateBox(getText);
    console.log(getText);
}

function Search(){
    
}