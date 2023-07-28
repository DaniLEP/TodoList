var limite = 100;
document.getElementsByName("descricao")[0].maxLength = limite;
document.getElementById("contador").innerHTML = limite;

function abas(aba) {
    if (aba == 1) {
        document.getElementById("F").className = "active";
        document.getElementById("N").className = "";
        document.getElementById("feitas").className = "active";
        document.getElementById("naoFeitas").className = "";
    }

    else {
        document.getElementById("F").className = "";
        document.getElementById("N").className = "active";
        document.getElementById("feitas").className = "";
        document.getElementById("naoFeitas").className = "active";
    }
}


function contador() {

    var caracteresDigitados = document.getElementsByName("descricao")[0].value;
    console.log(caracteresDigitados);

    //var a = new String(caracteresDigitados);
    var reduzir = caracteresDigitados.length;
    // console.log(a.length);
    if (reduzir => 1) {
        document.getElementById("enviar").className = "";
    }

    else {
        document.getElementById("enviar").style.display = "btn-disable";
    }

    if (reduzir >= limite) {
        document.getElementById("erro").style.display = "block";
        //document.getElementsByName("descricao")[0].disabled = true;
        document.getElementById("contador").innerHTML = 0;
    }

    else {
        var caracteresRestantes = limite - reduzir;
        document.getElementById("contador").innerHTML = caracteresRestantes;
        document.getElementById("erro").style.display = "none";
        //document.getElementsByName("descricao")[0].disabled = false;
    }
}
function proximoN(x, tipo) {
    var pai = document.getElementById(x);
    for (var i = 0; i < pai.children.length; i++) {
        // var x =i;
        if (!document.getElementById(tipo+i)) {
            return i;
        }
    }

    return i;
}


function addTarefa(data) {
    var i = proximoN("naoF", "n");
    // console.log(i);
    var node = document.createElement("LI");
    node.setAttribute("id","n"+ i);
    var node2 = document.createElement("LABEL");

    var input = document.createElement("input");
    input.type = "checkbox";
    input.name = "tarefas[1][feito]";
    input.setAttribute("data-index", 1);
    input.setAttribute("onclick", "tarefaFeita('n"+i+"')");
    input.value = "n"+i;
    node2.appendChild(input);
    var node3 = document.createElement("P");
    var texto = document.getElementsByName("descricao")[0].value;
    var textnode = document.createTextNode(texto);
    var node4 = document.createElement("a");
    node4.setAttribute("href", "#");
    node4.setAttribute("title", "x");
    node4.setAttribute("data-index", 1);
    node4.setAttribute("onclick", "deletarTarefa('n"+i+"')");
    var textnode4 = document.createTextNode("x");
    node4.appendChild(textnode4);
    node3.appendChild(textnode);
    node3.appendChild(node4)
    node2.appendChild(node3);
    node.appendChild(node2);
    document.getElementById("naoF").appendChild(node);
}

function deletarTarefa(x) {
    var node = document.getElementById(x);
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
}

function tarefaFeita(x) {
    var i = proximoN("f", "f");
    var node = document.createElement("LI");
    node.setAttribute("id","f"+i);
    var node2 = document.createElement("label");
    var input = document.createElement("input");

    input.type = "checkbox";
    input.name = "tarefas[1][feito]";
    input.setAttribute("data-index", 1);
    input.setAttribute("onclick", "tarefaDesfeita('f"+i+"')");
    input.setAttribute("checked", "checked");
    input.value = "f"+i;
    node2.appendChild(input);
    var node3 = document.createElement("P");

    var c = document.getElementById(x).textContent.slice(0,-1);
    console.log(c);
    var textnode = document.createTextNode(c);

    var node4 = document.createElement("A");

    node4.setAttribute("href", "#");
    node4.setAttribute("title", "x");
    node4.setAttribute("data-index", 1);
    node4.setAttribute("onclick", "deletarTarefa('f"+i+"')");

    var textnode4 = document.createTextNode("x");
    node4.appendChild(textnode4);
    node3.appendChild(textnode);
    node3.appendChild(node4)
    node2.appendChild(node3);
    node.appendChild(node2);
    document.getElementById("f").appendChild(node);
    deletarTarefa(x);
}

function tarefaDesfeita(x){
    var c = document.getElementById(x).textContent;

    addTarefa(c);
    deletarTarefa(x);
}