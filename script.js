let screen=document.querySelector('.screen')
const btns=document.querySelectorAll('.btn')
let result=''
btns.forEach(button=>{
    button.addEventListener('click',(e)=>{
        
        let displayNum=e.target.innerText
        if(displayNum==='=') {
            screen.value=eval(result)
            result=screen.value
        }else if (displayNum==='C'){
            result=''
            screen.value=result
        }else if(displayNum==='Del'){
            screen.value=result.slice(0,-1)
            result=screen.value
        }
         else{
            result+=displayNum
            screen.value=result
         }  
       
    })
})