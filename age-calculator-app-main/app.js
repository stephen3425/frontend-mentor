
function clik(){    
    var days=document.getElementById('days')
    var months=document.getElementById('months')
    var years=document.getElementById('years')
    var ed=document.getElementById('errd')
    var bd=document.getElementById('day')
    var edt=document.getElementById('errday')
    var em=document.getElementById('errm')
    var emt=document.getElementById('errmonth')
    var ey=document.getElementById('erry')
    
    var eyt=document.getElementById('erryear')
    var bdv=bd.value
    var bm=document.getElementById('month')
    var bmv=bm.value
    var by=document.getElementById('year')
    var byv=by.value
    var dt=new Date();
        var pd=dt.getDate()
        var pm=1+dt.getMonth()
        var py=dt.getFullYear()
    var result=1

    console.log()

    if(bdv===''){
        seterror(bd,edt,ed)
        result=0
    }else if(bdv>=32){
        setinvalid(bd,edt,ed)
        console.log("hey")
        result=0
    }

    if(bmv===''){
        seterror(bm,emt,em)
        result=0
    }else if(bmv>12){
        setinvalid(bm,emt,em)
        result=0

    }

    if(byv===''){
        seterror(by,eyt,ey)
        result=0
       
    }else if( byv>=py){
        setinvalid(by,eyt,ey)
        console.log('year')
        result=0

    }


    function seterror(element,message,input){
        element.classList.add('error')
        input.style.color='hsl(0, 100%, 67%)'
        message.style.color='hsl(0, 100%, 67%)'
        message.innerText='this field is required'
        message.style.fontSize='15px'


    }
    function setinvalid(element,message,input){
        element.classList.add('error')
        input.style.color='hsl(0, 100%, 67%)'
        message.style.color='hsl(0, 100%, 67%)'
        if(message==edt){
            message.innerText='must be a vaild day'

        }
         if(message==emt){
            message.innerText='must be a vaild month'
        }
        if(message==eyt){
            message.innerText='must be a vaild year'

        }

        
        message.style.fontSize='15px'

    }




    if(result===1){
        
        var month=[31,28,31,30,31,30,31,31,30,31,30,31]
        if(bdv>pd){
            pd=pd+month[pm-1]
            pm=pm-1
        }
        if(bmv>pm){
            var bmvn=Number(bmv)
            console.log(typeof(bmv))
            console.log("")
            console.log(bmv)
            console.log(py)
            bmv=bmvn+12
            py=py-1
            console.log(bmv)
            console.log(py)
        }
    
      
        var d=pd-bdv

        
        var m=pm-bmv
        if(bmv>pm){
            var m=bmv-pm
            m-=5
            d+=5
            
        }
        
        var y=py-byv
        days.innerText=d
        months.innerText=m
        years.innerText=y
    
    }  


   

}