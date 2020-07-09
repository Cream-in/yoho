var ses=document.querySelectorAll(".nav-box>ul>li")

for(var i=0;i<ses.length;i++){
    ses[i].onmouseover=function(){
     this.lastElementChild.style.display="block"
    // console.log( this.lastChild)
    }
    ses[i].onmouseout=function(){
        this.lastElementChild.style.display="none"
       // console.log( this.lastChild)
       }
}