document.getElementById("menu").onclick = exibeMenu;
let [menuOpen,funcaoTrancada]=[false,false];
const estiloNavegacao = document.getElementById("naveg").style;
function exibeMenu(){
    if(funcaoTrancada===false){
        estiloNavegacao.display="flex";
        setTimeout(()=>estiloNavegacao.opacity="1",1);
        funcaoTrancada=true;
    }else{
        estiloNavegacao.opacity="0";
        setTimeout(()=>{funcaoTrancada===false?estiloNavegacao.display="none":false},500);
        funcaoTrancada=false;
    }
}
// let descset1 = 0;let descset2 = 0; let descset3 = 0; let descset4 = 0; let descset5 = 0;

// function apareceDesc(desc){
//     if(desc == 1){
//         if(descset1==0){
//             document.getElementById("javasc").style.height="125px";
//             descset1=1;
//         }else{
//             document.getElementById("javasc").style.height="45px";
//             descset1=0;
//         }
//     }
//     if(desc == 2){
//         if(descset2==0){
//             document.getElementById("html5").style.height="147px";
//             descset2=1;
//         }else{
//             document.getElementById("html5").style.height="45px";
//             descset2=0;
//         }
//     }
//     if(desc == 3){
//         if(descset3==0){
//             document.getElementById("css3").style.height="185px";
//             descset3=1;
//         }else{
//             document.getElementById("css3").style.height="45px";
//             descset3=0;
//         }
//     }
//     if(desc == 4){
//         if(descset4==0){
//             document.getElementById("git").style.height="145px";
//             descset4=1;
//         }else{
//             document.getElementById("git").style.height="45px";
//             descset4=0;
//         }
//     }
//     if(desc == 5){
//         if(descset5==0){
//             document.getElementById("github").style.height="188px";
//             descset5=1;
//         }else{
//             document.getElementById("github").style.height="45px";
//             descset5=0;
//         }
//     }
// }
var typed = new Typed(".input", {
    strings:["front-end"],
    typeSpeed: 120,
    backSpeed: 110
})