var resultscr=document.getElementById('resultscreen');
var num='0'
var operator;
var value;
function clear(){
    num=0;
    console.log(num)
    resultscr.innerText=num
}
/*function sum(){
    num=num + '+';
    operator='+';
    console.log(num)
    resultscr.innerText=operator

}*/

function operation(){
    resul1=eval(num)
    var n=num.indexOf('.')
    console.log(n)
    if(n!=-1){
        resul1=parseFloat(eval(num)).toPrecision(num.length)
    }
    console.log(resul1)
    if(resul1==Infinity){
        resultscr.innerText='ERROR'
    }else{
    resultscr.innerText=resul1
    }}
var stringadd=function(str){
    
    if(num==0){
        var m=num.toString().indexOf('.')
        console.log(m)
        if(m==-1){
            num=str
        }else{
        num=num+str
        }
        resultscr.innerText=num
    }else{
    num=num+str
    resultscr.innerText=num
    }
    if(num[num.length-1]=='%'){
        num=parseInt(num)/100
        resultscr.innerText=num
        console.log('Hey')
    }
    console.log(num)
}
function signchange(){
    num=-1*num
    console.log(num,typeof(num))
    resultscr.innerText=num
}
var AcButton=document.querySelector('.ac')
var SumButton=document.querySelector('.sum')
var SevButton=document.querySelector('.seven')
var EigButton=document.querySelector('.eight')
var NineButton=document.querySelector('.nine')
var FourButton=document.querySelector('.four')
var FiveButton=document.querySelector('.five')
var SixButton=document.querySelector('.six')
var OneButton=document.querySelector('.one')
var TwoButton=document.querySelector('.two')
var ThreeButton=document.querySelector('.three')
var equalButton=document.querySelector('.equal')
var divButton=document.querySelector('.div')
var MulButton=document.querySelector('.mul')
var SubButton=document.querySelector('.sub')
var ZeroButton=document.querySelector('.zero')
var DecButton=document.querySelector('.dec')
var SigButton=document.querySelector('.sign')
var PerButton=document.querySelector('.perc')

AcButton.addEventListener('click',clear);
SigButton.addEventListener('click',signchange)
SumButton.addEventListener('click',function(){
    value=this.getAttribute('data-value');
    stringadd(value)
})
PerButton.addEventListener('click',function(){
    value=this.getAttribute('data-value');
    stringadd(value)
})
ZeroButton.addEventListener('click',function(){
    value=this.getAttribute('data-value');
    stringadd(value)
})

DecButton.addEventListener('click',function(){
    value=this.getAttribute('data-value');
    stringadd(value)
})
divButton.addEventListener('click',function(){
    value=this.getAttribute('data-value');
    stringadd(value)
})
MulButton.addEventListener('click',function(){
    value=this.getAttribute('data-value');
    stringadd(value)
})
SubButton.addEventListener('click',function(){
    value=this.getAttribute('data-value');
    stringadd(value)
})
SevButton.addEventListener('click', function(){
    value=this.getAttribute('data-value');
    stringadd(value)
})

equalButton.addEventListener('click',operation);
EigButton.addEventListener('click',function(){
    value=this.getAttribute('data-value');
    stringadd(value)
})

NineButton.addEventListener('click',function(){
    value=this.getAttribute('data-value');
    stringadd(value)
})
FourButton.addEventListener('click',function(){
    value=this.getAttribute('data-value');
    stringadd(value)
})
FiveButton.addEventListener('click',function(){
    value=this.getAttribute('data-value');
    stringadd(value)
})

SixButton.addEventListener('click',function(){
    value=this.getAttribute('data-value');
    stringadd(value)
})
OneButton.addEventListener('click',function(){
    value=this.getAttribute('data-value');
    stringadd(value)
})

TwoButton.addEventListener('click',function(){
    value=this.getAttribute('data-value');
    stringadd(value)
})

ThreeButton.addEventListener('click',function(){
    value=this.getAttribute('data-value');
    stringadd(value)
})

