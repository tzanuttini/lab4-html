var primervalor;
var segundovalor;
var oper;
function valorBoton(valor) {
    var b = document.getElementById("visor");
    if (b.innerText.length < 10) {
        if (b.innerHTML != null) {
            b.innerText = b.innerText + valor;
        } else {
            b.innerText = valor;
        }
    } else {
        window.alert("Rescatate cuanto numero va a poner!");
    }
}
function operacion(valor) {
    primervalor = parseInt(document.getElementById("visor").innerText);
    document.getElementById("visor").innerText = "";
    if (segundovalor != null) {
        igual();
        segundovalor = primervalor;
    }
    
    oper = valor;
}
function igual() {
    var b = document.getElementById("visor");
    if (document.getElementById("visor").innerText != null) {
        segundovalor = parseInt(document.getElementById("visor").innerText);
        var result;
        switch (oper) {
            case '+':
                result = primervalor + segundovalor;
                b.innerText = result.toString();
                break;
            case '-':
                result = primervalor - segundovalor;
                b.innerText = result.toString();
                break;
            case '/':
                if (segundovalor != 0) {
                    result = primervalor / segundovalor;
                    b.innerText = result.toString();
                } else {
                    window.alert("Delirante no se puede divir por 0");
                }
                break;
            case '*':
                result = primervalor * segundovalor;
                b.innerText = result.toString();
                break;
        }
        var historial = document.getElementById("historial");
        var resultado = document.createElement("li");
        resultado.innerText = primervalor+oper+segundovalor+" = "+result;
        historial.append(resultado);
    } else {
        window.alert("Flaco pone un numero!");
    }
}