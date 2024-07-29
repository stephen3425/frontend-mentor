const errtext=document.getElementById("error")
const emil=document.getElementById("ipbox")
const errimg=document.getElementById('errorimg')


function clic(){
    const emailval=emil.value
    console.log(validateEmail(emailval))
    if(!validateEmail(emailval)){
        errtext.innerText="Please provide a valid email"
        errimg.style.visibility='visible'

        setTimeout(hidetext,3000);
    }else{
        errtext.innerText='Email recevied'
        errtext.style.color=' hsl(110, 93%, 68%)'
        errtext.style.fontWeight='600'
        setTimeout(hidetext,3000);
    }
}

function hidetext(){
     errtext.innerText=''
     emil.value=''
     errimg.style.visibility='hidden'


}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

