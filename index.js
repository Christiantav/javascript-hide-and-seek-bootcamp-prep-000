function getFirstSelector(selector) {
return document.querySelector(selector);
}
function nestedTarget() {
return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
var lis = document.querySelectorAll('#app ul.ranked-list li')
for(let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
}
}

function deepestChild() {
var deepestDiv = document.querySelectorAll('#grand-node div')
return deepestDiv[deepestDiv.length - 1]
}
