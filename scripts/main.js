let closeornot=1;
let opacitySet=0;
let displaySet=0;
function alteraDisplay(){
    if(displaySet==0){
        document.getElementById("naveg").style.display="flex";
        displaySet=1;
    }else{
        displaySet=0;
        document.getElementById("naveg").style.display="none";
    }
}
function alteraOpacity(){
    if(opacitySet==0){
        document.getElementById("naveg").style.opacity="1";
        opacitySet=1;
    }else{
        document.getElementById("naveg").style.opacity="0";
        opacitySet=0;
    }
}
function exibeMenu(){
    if(closeornot == 1){
        alteraDisplay();
        setTimeout(alteraOpacity,1);
        closeornot=2;
    }else{ 
        setTimeout(alteraDisplay,1000);
        setTimeout(alteraOpacity,1);         
        closeornot=1;
    }
};
let descset1 = 0;let descset2 = 0; let descset3 = 0; let descset4 = 0; let descset5 = 0;

function apareceDesc(desc){
    if(desc == 1){
        if(descset1==0){
            document.getElementById("javasc").style.height="125px";
            descset1=1;
        }else{
            document.getElementById("javasc").style.height="45px";
            descset1=0;
        }
    }
    if(desc == 2){
        if(descset2==0){
            document.getElementById("html5").style.height="147px";
            descset2=1;
        }else{
            document.getElementById("html5").style.height="45px";
            descset2=0;
        }
    }
    if(desc == 3){
        if(descset3==0){
            document.getElementById("css3").style.height="185px";
            descset3=1;
        }else{
            document.getElementById("css3").style.height="45px";
            descset3=0;
        }
    }
    if(desc == 4){
        if(descset4==0){
            document.getElementById("git").style.height="145px";
            descset4=1;
        }else{
            document.getElementById("git").style.height="45px";
            descset4=0;
        }
    }
    if(desc == 5){
        if(descset5==0){
            document.getElementById("github").style.height="188px";
            descset5=1;
        }else{
            document.getElementById("github").style.height="45px";
            descset5=0;
        }
    }
}
var typed = new Typed(".input", {
    strings:["front-end"],
    typeSpeed: 120,
    backSpeed: 110
})