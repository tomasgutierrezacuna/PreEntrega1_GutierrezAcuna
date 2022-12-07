for(let i=1;i<=3;i++){
    let user=prompt("Ingresa tu nombre de usuario");
    let password=prompt("Ingresa tu contraseña");
    if((user=="Tomas")&&(password=="678")){
        alert("Bienvenido Tomas al Sistema!");
        break;
    }else{
        alert("Algunos de los datos ingresados no son correctos");
    }
}

let ahorro=parseInt(prompt("BaiaBaia, queres irte de vacaciones... Cuanto tenes ahorrado?"));

if(ahorro > 1000000){
    alert("Anda armando las valijas!");
}else if(ahorro <1000000){
    alert("Ya casi casi estas! Un esfuerzo mas!");    
}else if(ahorro <700000){
    alert("Ya casi estas, dale que vos podes!");
}

