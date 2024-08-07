var s1=document.getElementById('s1')
var s2=document.getElementById('s2')
var s3=document.getElementById('s3')
var c1=document.getElementById('circle1')
var c2=document.getElementById('circle2')
var c3=document.getElementById('circle3')
var numb=document.getElementById('numb')
var sec=document.querySelector(".unread")
var n=3

function clr(){
    remadd(s1,c1)
    remadd(s2,c2)
    remadd(s3,c3)
    numb.innerText=0
}


function remadd(clor,crcl){
    clor.classList.add("read")
    crcl.classList.remove("circle")

}

 
function nclk(event){
    
    var elmt = event.target
    elmt.classList.add("read")   
    numb.innerText=n-1

}