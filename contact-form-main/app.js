var form=document.querySelector('form')
var fname=document.getElementById('fname')
var lname=document.getElementById('lname')
var email=document.getElementById('email')
var gen=document.querySelector('.genradio')
var sup=document.querySelector('.supradio')
var textbox=document.getElementById('textbox')
var checkbox=document.querySelector('.checkbox')


form.addEventListener('submit',(e)=>{
  
    if(!validate()){
      e.preventDefault()
     
      
    }else{
      e.preventDefault()
      submitte();
      
     

      
      
    }
   
})

function submitte(){
  var cntop =document.querySelector('.container-top')
  cntop.style.visibility='visible'
}


function validate(){
    var sucess=true
    var fnameval=fname.value;
    var lnameval=lname.value;
    var emailval=email.value;
    var msgval=textbox.value;
    var genval=gen.checked;
    var supval=sup.checked;
    var chkval=checkbox.checked;
    var genbox=document.querySelector('.gen')
    var supbox=document.querySelector('.sup')
    var errmsg=document.getElementById('errormsg')
    
      if(fnameval===''){
        seterror(fname,'This field is required ')
        sucess=false

      }else{
        setsuccess(fname,'valid')
        
      }
      if(lnameval===''){
        seterror(lname,'This field is required ')
        sucess=false

      }else{
        setsuccess(lname,'valid')
        
      }
      if(emailval==='' ){
        seterror(email,'This field is required ')
        sucess=false

      }
      else{
        setsuccess(email,'valid')

       
      }
      if(msgval===''){
        seterror(textbox,'This field is required ')
        sucess=false

      }else{
        setsuccess(textbox,'valid')
      
      }



      if(genval || supval){
        genbox.classList.add('success')
        supbox.classList.add('success') 
       
        
      }else{
        genbox.classList.add('error')
        var genpe=genbox.parentElement.parentElement
        var emg =genpe.querySelector('.errormsg')
        supbox.classList.add('error')
        var suppe=supbox.parentElement.parentElement
        var emge =suppe.querySelector('.errormsg')
        sucess=false
        emg.innerText='This field is required'


      }
      

      if(!chkval){
        var emss=checkbox.parentElement
        console.log(emss)
        var errmss=emss.querySelector('.errormsg')
        console.log(errmss)
        errmss.innerText="To submit this form, please consent to being contacted"
        sucess=false

      }
      return sucess


      


}

function seterror(element,message){
    var eelmt=element.parentElement
    var emsg=eelmt.querySelector('.errormsg')
    emsg.innerText=message
    element.classList.add('error')

}


function setsuccess(element,message){
    var eelmt=element.parentElement
    var emsg=eelmt.querySelector('.errormsg')
    emsg.innerText=message
    element.classList.add('success')
    emsg.style.color='green'

}


function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}