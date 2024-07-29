var form=document.getElementById('frm')
var fname=document.getElementById('fname')
var lname=document.getElementById('lname')
var mail =document.getElementById('mail')
var pass=document.getElementById('pass')
var frmgrp=document.getElementById('frmgrp')


form.addEventListener('submit',(e)=>{
    e.preventDefault()

    validateform();


})

function validateform(){
    var fnameval=fname.value
    var lnameval=lname.value
    var mailval=mail.value
    var passval=pass.value


    if(fnameval===''){
        seterror(fname,"First name cannot be empty")
    }else{
        setSuccess(fname,'valid')
    }

    if(lnameval===''){
        seterror(lname,"Last name cannot be empty")

       
    }else{
        setSuccess(lname,'valid')
    }
    if(mailval===''){
        seterror(mail,"mail cannot be empty")

       
    }else if (!validateEmail(mailval)) {
        seterror(mail,"mail is invalid")
        
    } else{
        setSuccess(mail,'vaild')
    }
    if(passval===''){
        seterror(pass,"password cannot be empty")
    }else{
        setSuccess(pass,'valid')     
    }

   
}
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function seterror(element,message){
      var frmgroup=element.parentElement;
      var emssg=frmgroup.querySelector('.eror')
        
        emssg.innerText=message
        emssg.classList.add('error')
        element.style.border='5px red solid'
        element.classList.add('err')
}

function setSuccess(element,message){
    var frmgroup=element.parentElement;
    var emssg=frmgroup.querySelector('.eror')
      
      emssg.innerText=message
      emssg.classList.add('success')
    
        element.style.border='5px green solid'
        element.classList.remove('err')
}



