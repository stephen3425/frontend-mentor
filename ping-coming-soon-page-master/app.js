var ipfld=document.getElementById('ipfld')
var etext=document.getElementById('error')

function clck(){
   

    validatefn()

}

function validatefn(){
    var emailval=ipfld.value
    if(!validateEmail(emailval)){
        etext.innerText='please provide a valid email address'
        
        ipfld.style.border='1px   hsl(354, 100%, 66%) solid'
        console.log('if')

    }else{
        etext.innerText=' '
        
        ipfld.style.border='1px grey solid'
        console.log("else")
        alert("Received")
    }
}



function validateEmail(email) {

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}