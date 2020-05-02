const ruleta = document.querySelector("#ruleta");
const reset = document.querySelector("#reset");

ruleta.addEventListener("click",girar);
reset.addEventListener("click",reseteo);

dinero = 50;

function girar(){
    if (dinero >= 20) {
    	let rand = Math.random()*7200; 
    	sumarPuntos(-20);
        calcular(rand);
    }  
    else {
    	alert("You don't have enough money");
    }
}
function sumarPuntos(p){
	dinero += p;
    document.querySelector("#dinero").innerHTML = "Money: $" + dinero + "USD";
}
function quiebraPuntos(){
	dinero = 0;
    document.querySelector("#dinero").innerHTML = "Money: $" + dinero + "USD";
}
function reseteo(){
    location.reload();
    return false;
}

function calcular(rand){
    valor = rand / 360;
    valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
    ruleta.style.transform = "rotate("+rand+"deg)";
    setTimeout(()=>{
    switch(true){
    	case valor > 0 && valor <= 15:
            alert("Congratulations! You’ve won $500 USD");
            sumarPuntos(500);
    	    break;
    	case valor > 15 && valor <= 30:
    	    alert("Congratulations! You’ve won $500 USD");
    	    sumarPuntos(500);
    	    break;
        case valor > 30 && valor <= 45:
            alert("You’ve won $100 USD");
            sumarPuntos(100);
            break; 
        case valor > 45 && valor <= 60:
            alert("You’ve won $50 USD");
            sumarPuntos(50);
            break;
        case valor > 60 && valor <= 75:
            alert("Loss all the money");
            quiebraPuntos();
            break;
        case valor > 75 && valor <= 90:
            alert("You’ve won $25 USD");
            sumarPuntos(25);
            break;
        case valor > 90 && valor <= 105:
            alert("Loss");
            break;
        case valor > 105 && valor <= 120:
            alert("You’ve won $50 USD");
            sumarPuntos(50);
            break;
        case valor > 120 && valor <= 135:
            alert("You’ve won $25 USD");
            sumarPuntos(25);
            break; 
        case valor > 135 && valor <= 150:
            alert("You’ve loss $20 USD");
            sumarPuntos(-20);
            break;   
        case valor > 150 && valor <= 165:
            alert("You’ve loss $20 USD");
            sumarPuntos(-200);
            break;   
        case valor > 150 && valor <= 165:
            alert("You’ve won $75 USD");
            sumarPuntos(75);
            break;
        case valor > 165 && valor <= 180:
            alert("Loss");
            break;
        case valor > 180 && valor <= 195:
            alert("You’ve won $100 USD");
            sumarPuntos(100);
            break;
        case valor > 195 && valor <= 210:
            alert("You’ve won $75 USD");
            sumarPuntos(75);
            break; 
        case valor > 210 && valor <= 225:
    	    alert("Congratulations! You’ve won $500 USD");
    	    sumarPuntos(500);
            break;   
        case valor > 225 && valor <= 240:
            alert("Loss all the money");
            quiebraPuntos();
            break;   
        case valor > 240 && valor <= 255:
            alert("You’ve won $50 USD");
            sumarPuntos(50);
            break;
        case valor > 255 && valor <= 270:
            alert("You’ve won $75 USD");
            sumarPuntos(75);
            break;
        case valor > 270 && valor <= 285:
            alert("You’ve won $150 USD");
            sumarPuntos(150);
            break; 
        case valor > 285 && valor <= 300:
            alert("You’ve won $50 USD");
            sumarPuntos(50);
            break;   
        case valor > 300 && valor <= 315:
            alert("You’ve won $75 USD");
            sumarPuntos(75);
            break;    
        case valor > 315 && valor <= 330:
            alert("Loss all the money");
            quiebraPuntos();
            break;   
        case valor > 330 && valor <= 345:
            alert("You’ve won $150 USD");
            sumarPuntos(150);
            break;                                                
    }},5000);
}