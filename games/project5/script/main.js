

const inputBox=document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

// this function to add task after clicking the button
function addTask(){
    if(inputBox.value===''){
        alert("Write somthing!")
    }else{
        let li =document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();

}

listContainer.addEventListener("click",function(e){
    // line check the task
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");

    }//removing the task
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);


    // saving in the local Storge
const saveData=()=>{

    localStorage.setItem("data",listContainer.innerHTML);

}


const showTask=()=>{
    listContainer.innerHTML=localStorage.getItem("data");

}
showTask();

