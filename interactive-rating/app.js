var conn= document.getElementById("thqstate")
var score=document.getElementById("score")
var one=document.getElementById("one")
function clik(){
          
   conn.style.visibility="visible"
}

function show(event){
    score.textContent=event.target.textContent
}
