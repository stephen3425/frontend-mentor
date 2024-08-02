var mamt = document.getElementById('mamt')
var years=document.getElementById('years')
var intrate=document.getElementById('intrate')
var repayment=document.getElementById('repayment')
var interest=document.getElementById('interest')
var prefinal=document.getElementById('prefinal')
var monthrepay=document.getElementById('monthrepay')
var totalrepay=document.getElementById('totalrepay')
var bottom=document.getElementById('bottom')












 function calc(){
    prefinal.style.visibility='hidden'
    var mamtval=mamt.valueAsNumber
    var yearsval=years.valueAsNumber
    var intrateval=intrate.valueAsNumber
    var repaymentval=repayment.checked
    var interestval=interest.checked   
    var month=yearsval*12
    var interestamt=(mamtval*intrateval*yearsval)/100
  
    var totalamt=interestamt+mamtval
    var monrepay=totalamt/month
    var checkbox2=document.getElementById('int')
    var checkbox1=document.getElementById('rep')

   
    

    if(repaymentval){
        monthrepay.innerText="€"+monrepay.toFixed(2)
        totalrepay.innerText=totalamt.toFixed(2)
        checkbox1.classList.add("selected")
        

    }else if(interestval){
        monthrepay.innerText="€"+interestamt.toFixed(2)
        totalrepay.innerText=totalamt.toFixed(2)
        checkbox2.classList.add("selected")

    }else{
        monthrepay.innerText="\"Please choose the mortgage type !!!\""
        monthrepay.style.fontSize='25px'
        bottom.style.visibility='hidden'
    }


 }