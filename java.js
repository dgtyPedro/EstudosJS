
function info(){
    alert('Isso é um alerta de informação');
}

function conf(){
    var choice = confirm('Isso é um alerta de confirmação, por favor confirme (ou não)')
    if (choice == false){
        alert(`Você escolheu a opção cancelar :(`);
    }else{
        alert(`Obrigado por confirmar! :D`);
    }
    
}

function escrever(){
    var texto = window.prompt('Escreva qualquer coisa.');
    if (texto == null || texto ==''){
        var texto = window.prompt('Escreva qualquer coisa.');
    }else{
        alert(`Você escreveu ${texto}`);
    }

}


function escolha(){

    
    var valor1 = document.getElementById('primeiro').selectedIndex;
    var valor2 = document.getElementById('segundo').selectedIndex;
    if (valor2==1){
        var num='um';
    }
    if (valor2==2){
        var num='dois';
    }
    if (valor2==3){
        var num='tres';
    }
    if (valor2==4){
        var num='quatro';
    }
    if (valor2==5){
        var num='cinco';
    }
    
    if (valor1==0 || valor2==0){
        alert(`Coloque uma alternativa valida`);
    }else if (valor1==1){
        document.getElementById(num).style.backgroundColor = "rgb(55, 61, 67, 1)";
        setTimeout(() => {  document.getElementById(num).style.backgroundColor = "#121416"; }, 1500);
        
    }else if (valor1==2){
        document.getElementById(num).style.opacity = "0";
        setTimeout(() => {  document.getElementById(num).style.opacity = "1"; }, 1500);

    }else if (valor1==3){
        var div = document.getElementById(num)
        alert(div.innerHTML);
    }


}









