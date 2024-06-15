console.log("Lavanya")
 function addNewSkillFeild(){
        let newNode=document.createElement("input")
        newNode.classList.add("form-control")
        newNode.classList.add("skillFeild");
        newNode.classList.add("mt-2");
        newNode.setAttribute("rows",2);
        newNode.setAttribute("placeholder","enter here")

        let skillobj= document.getElementById("skill");
        let skillbtn=document.getElementById("skillAddButton");
        skillobj.insertBefore(newNode,skillbtn);
 }

 function addNewWEFeild(){
    let newNode =document.createElement("textarea")
    newNode.classList.add("form-control")
    newNode.classList.add("weFeild")
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",2)
    newNode.setAttribute("placeholder","enter here")

    let weobj= document.getElementById("we");
    let weadbtn= document.getElementById("weAddButton")

    weobj.insertBefore(newNode,weadbtn);
}

function addAQFeild(){
    let newNode= document.createElement("textarea")
    newNode.classList.add("form-control");
    newNode.classList.add("aqFeild")
    newNode.setAttribute("placeholder" ,"enter here")
    newNode.setAttribute("rows",2)
    let aqobj= document.getElementById("AQ")
    let aqbtn= document.getElementById("weAddAQ")
    aqobj.insertBefore(newNode,aqbtn);
}

function genatorCV(){
    console.log("hello everyone")
    let namefield= document.getElementById("nameField").value
    let nameT= document.getElementById("nameT")
    nameT.innerHTML=namefield;
    let phonefield= document.getElementById("phoneField").value
    let phoneT= document.getElementById("phoneT")
    phoneT.innerHTML=phonefield;
    let result= namefield.toLocaleUpperCase();
    document.getElementById("nameT2").innerHTML=result;
    document.getElementById("objT").innerHTML= document.getElementById("objField").value
    // document.getElementById("Skills").innerHTML=document.getElementById("1stskills").value
    let skills = document.getElementsByClassName("skillFeild");
    let skilinfo="";
    for(let b of skills){
        skilinfo= skilinfo+`<li>${b.value}</li>`
    }
    document.getElementById("Skills").innerHTML=skilinfo;
    let workex= document.getElementsByClassName("weFeild");
 let infro =""
 for(let e of workex){
    infro= infro+`<li>${e.value}</li>`
 }
 document.getElementById("wrokeT").innerHTML=infro;
 let accadimic=document.getElementsByClassName("aqFeild");
 let infro1=" "
 for(let a of accadimic){
    infro1=infro1+`<li>${a.value}</li>`
 }
 document.getElementById("AcademicT").innerHTML=infro1;
 let file= document.getElementById("imginsert").files[0];
 //console.log(file)
 let reader= new FileReader()
 reader.readAsDataURL(file)
 //console.log(reader.result);
   //ing puting in templet
   reader.onloadend= function(){
    document.getElementById("imgtemplet").src=reader.result;
   }
document.getElementById('cv-form').style.display="none"
document.getElementById('cv-templeat').style.display="block"
document.getAnimations("Download").style.display="block"


}


function previewCV(){
   console.log("hello everyone")
   let namefield= document.getElementById("nameField").value
   let nameT= document.getElementById("nameT")
   nameT.innerHTML=namefield;
   let phonefield= document.getElementById("phoneField").value
   let phoneT= document.getElementById("phoneT")
   phoneT.innerHTML=phonefield;
   let result= namefield.toLocaleUpperCase();
   document.getElementById("nameT2").innerHTML=result;
   document.getElementById("objT").innerHTML= document.getElementById("objField").value
   // document.getElementById("Skills").innerHTML=document.getElementById("1stskills").value
   let skills = document.getElementsByClassName("skillFeild");
   let skilinfo="";
   for(let b of skills){
       skilinfo= skilinfo+`<li>${b.value}</li>`
   }
   document.getElementById("Skills").innerHTML=skilinfo;
   let workex= document.getElementsByClassName("weFeild");
let infro =""
for(let e of workex){
   infro= infro+`<li>${e.value}</li>`
}
document.getElementById("wrokeT").innerHTML=infro;
let accadimic=document.getElementsByClassName("aqFeild");
let infro1=" "
for(let a of accadimic){
   infro1=infro1+`<li>${a.value}</li>`
}
document.getElementById("AcademicT").innerHTML=infro1;
let file= document.getElementById("imginsert").files[0];
//console.log(file)
let reader= new FileReader()
reader.readAsDataURL(file)
//console.log(reader.result);
  //ing puting in templet
  reader.onloadend= function(){
   document.getElementById("imgtemplet").src=reader.result;
  }
document.getElementById('cv-form').style.display="none"
document.getElementById('cv-templeat').style.display="block"
document.getAnimations("Download").style.display="none"


}
function printCV(){
   window.print();
}