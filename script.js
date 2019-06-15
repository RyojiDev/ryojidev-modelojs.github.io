function carregar(){
var msg = window.document.getElementById("msg");
var img = window.document.getElementById( "imagem");
var data = new Date();
var hora = data.getHours();

msg.innerHTML = `Agora são ${hora} horas.`
 if(hora >= 0 && hora < 12){
     //BOM DIA
     document.body.style.background = '#FFF4C7'
     img.src = 'manha.png'
 }else if(hora >= 12 && hora <18){
    //boa tarde
    document.body.style.background = '#F8E9DC'
    img.src = 'tarde.png'
 }else{
     //boa noite
     document.body.style.background = '#2A3859'
     img.src = 'noite.png'
 }
}
