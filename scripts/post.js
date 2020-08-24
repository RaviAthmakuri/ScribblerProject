var obj = JSON.parse(sessionStorage.getItem("post-data"));

// console.log(obj);

var title = document.getElementById("title");
title.innerHTML=obj.comment1;

var owner = document.getElementById("owner");
owner.innerHTML=obj.name;


var owner = document.getElementById("owner");
owner.innerHTML=obj.name;

var para = document.getElementById("p");
para.innerHTML=obj.paragraph;


var edit = document.getElementById("edit");

edit.onclick = function(){
    // console.log(edit.innerHTML);
    var editpara = document.getElementById("editPara");
    // var edittitle = document.getElementById("title");
    if(edit.getAttribute("id")== "edit"){
     edit.innerHTML = 'Save <span><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>';
     edit.setAttribute("id","save");

    //  console.log(para);
     title.innerHTML = '<textarea class="form-control" id="paratext" rows="1"  required style="margin-bottom:10px">'+title.innerHTML+'</textarea>'
     editpara.innerHTML = '<textarea class="form-control" id="paratext" rows="5"  cols="50" required style="margin-bottom:10px">'+para.innerHTML+'</textarea>';

    }else{
        console.log("check");
        // var check = getElementById("paratext");
        var titletext =document.getElementsByTagName("textarea")[0];
        var textPara = document.getElementsByTagName("textarea")[1];
        title.innerHTML = titletext.value;
        editpara.innerHTML = '<p id="p">'+textPara.value+'</p>';
        edit.innerHTML = 'Edit <span><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>';
        edit.setAttribute("id","edit");
    }
}

var lbtn = document.getElementById("like-btn");

var likecount = 0;
lbtn.onclick = function(){
    likecount++;
    var likecomment = document.getElementById("like-comment");
    if(likecount ==1)
    likecomment.innerHTML = likecount + " person like this";
    else
    likecomment.innerHTML = likecount + " persons like this";
}

var cbtn = document.getElementById("comment-btn");
var ccount = 0;
cbtn.onclick = function(){
   var com = document.getElementById("commentSection");
    var commenttext = document.getElementById("comment");
    if(commenttext.value.length === 0 ){

    }else if(ccount ==0){
        com.innerHTML+='<label class="In-comments" id="comment-1">'+commenttext.value+'</label>';
        ccount++;
    }
  else{
    com.innerHTML+='<label class="In-comments">'+commenttext.value+'</label>';
    }
}



