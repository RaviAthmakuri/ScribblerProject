
function deletePost(id) {
var modal = document.getElementById("myModal4");
modal.style.display="block";

console.log(id);

btn = document.getElementById("btn-yes");

btn.onclick = function() {
    id.style.display = "none";
    modal.style.display="none";
}

btn = document.getElementById("btn-no");

btn.onclick = function() {
    modal.style.display="none";
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
  }
  
}

function createPost(name1,comment1,p) {
console.log(name1);
console.log(comment1);
console.log(p);

var obj = {
    name:document.getElementById(name1.id).innerHTML,
    comment1:document.getElementById(comment1.id).innerHTML,
    paragraph:document.getElementById(p.id).innerHTML
}

console.log(obj);
sessionStorage.setItem("post-data",JSON.stringify(obj));

window.open("./post.html");

}






