// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis=document.querySelectorAll("li");
// div.addEventListener("click",function(){
//     console.log("div was clicked");
// })
// ul.addEventListener("click",function(event){
//     event.stopPropagation();  // for stoping event bubling
//     console.log("unorder list clicked");
// })
// for(li of lis){
//     li.addEventListener("click",function(event){
//         event.stopPropagation();  // for stoping event bubling
//         console.log("li was clicked");
//     })
// }
// todo activity
let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    let button1=document.createElement("button");
    button1.innerText="delete";
    button1.classList.add("delete");
    item.innerText=inp.value;
    ul.appendChild(item);
    item.appendChild(button1);
    console.log("task added :",inp.value);



inp.value="";
// button1.addEventListener("dblclick",function(){
//     console.log("delete btn click");
//     item.remove()
//    }) 
   
})
// let button1=document.querySelectorAll(".delete");
// for(delbtn of button1){
// delbtn.addEventListener("click",function(){
//     console.log("delete btn click");
//     // item.remove();
//     let par=this.parentElement;
//     console.log(par);
//     par.remove();
// })
// }
// // event delegation
// ul.addEventListener("click",function(event){
//     // console.log(event.target.nodeName);
//     if(event.target.nodeName=="BUTTON"){
//         let listitem =event.target.parentElement;
//         // console.log(listitem);
//         listitem.remove();
//         console.log("delete");

//     }
//     // }else{
//     //     console.log("don not delete");
//     // }
//     // console.log("button click");
// })