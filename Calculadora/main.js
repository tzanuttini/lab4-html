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
        switch (oper) {
            case '+':
                primervalor += segundovalor;
                b.innerText = primervalor.toString();
                break;
            case '-':
                primervalor -= segundovalor;
                b.innerText = primervalor.toString();
                break;
            case '/':
                if (segundovalor != 0) {
                    primervalor = primervalor / segundovalor;
                    b.innerText = primervalor.toString();
                } else {
                    window.alert("Delirante no se puede divir por 0");
                }
                break;
            case '*':
                primervalor *= segundovalor;
                b.innerText = primervalor.toString();
                break;
        }
    } else {
        window.alert("Flaco pone un numero!");
    }
}