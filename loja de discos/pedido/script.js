var totalGlobal;

function comecar(){
    var nome = document.getElementById("exampleFormControlInput1").value;
    show(nome);
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("select-div");
    if(nome && nome.trim() !== ""){
        div.style.display = "flex"
        document.getElementById("exampleFormControlInput1").style.background = "none"
    }else{
        document.getElementById("error").style.display = "block"
    }
}

function fechar(){
    document.getElementById("error").style.display = "none"
    document.getElementById("exampleFormControlInput1").style.background = "lightpink";
}


function calcularTotal() {
    var selectRock = document.getElementById("selectRock");
    var selectMetal = document.getElementById("selectMetal");
    var selectJazz = document.getElementById("selectJazz");
    var selectMPB = document.getElementById("selectMPB");
    var selectBlues = document.getElementById("selectBlues")
    var resultadoSpan = document.getElementById("resultado");

    var total = 0;

    {
        switch (selectRock.value) {
            case "The Bends":
                total += 119.99;
                Rock = 119.99;
                break;
            case "Pablo Honey":
                total += 119.99;
                Rock = 119.99;
                break;
            case "Ok Computer":
                total += 119.99;
                Rock = 119.99;
                break;
            case "The Colour And The Shape":
                total += 119.99;
                Rock = 119.99;
                break;
            case "Killers":
                total += 119.99;
                Rock = 119.99;
                break;        
        }
        switch (selectMPB.value) {
            case "Fa-Tal-gal":
                total += 119.99;
                MPB = 119.99;
                break;
            case "Tropicalia":
                total += 119.99;
                MPB = 119.99;
                break;
            case "Clube da Esquina":
                total += 119.99;
                MPB = 119.99;
                break;
            case "Transa":
                total += 119.99;
                MPB = 119.99;
                break;
            case "Samba Esquema Novo":
                total += 119.99;
                MPB = 119.99;
                break;      
        }
        switch (selectMetal.value) {
            case "Sacrament":
                total += 119.99;
                Metal = 119.99;
                break;
            case "Epicus Doomicus Metallicus":
                total += 119.99;
                Metal = 119.99;
                break;
            case "The Sound Of Perseverance":
                total += 119.99;
                Metal = 119.99;
                break;
            case "Rust In Peace":
                total += 119.99;
                Metal = 119.99;
                break;
            case "Holy Land":
                total += 119.99;
                Metal = 119.99;
                break;
        }
        switch (selectJazz.value) {
            case "Head Hunters":
                total += 119.99;
                Jazz = 119.99;
                break;
            case "Kind Of Blue":
                total += 119.99;
                Jazz = 119.99;
                break;
            case "Tune Up":
                total += 119.99;
                Jazz = 119.99;
                break;
            case "Bird And Diz":
                total += 119.99;
                Jazz = 119.99;
                break;
            case "Saxophone Colossus":
                total += 119.99;
                Jazz = 119.99;
                break;
        }
        switch (selectBlues.value) {
            case "Born Under a Bad Sign":
                total += 119.99;
                Blues = 119.99;
                break;
            case "King of the Delta Blues Singers":
                total += 119.99;
                Blues = 119.99;
                break;
            case "Muddy Waters at Newport":
                total += 119.99;
                Blues = 119.99;
                break;
            case "B.B. King Live at the Regal":
                total += 119.99;
                Blues = 119.99;
                break;
            case "John Lee Hooker House of the Blues":
                total += 119.99;
                Blues = 119.99;
                break;
        }

    resultadoSpan.textContent = "R$ " + total.toFixed(2);

    totalGlobal = total;
}
}


const limpar = () => {
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("selectRock").value = "Selecione seu album de Rock";
    document.getElementById("selectMetal").value = "Selecione seu album de Metal";
    document.getElementById("selectJazz").value = "Selecione seu album de Jazz";
    document.getElementById("selectMPB").value = "Selecione seu album de MPB";
    document.getElementById("Rock-Pronto").textContent = "";
    document.getElementById("Metal-Pronto").textContent = "";
    document.getElementById("Jazz-Pronto").textContent = "";
    document.getElementById("MPB-Pronto").textContent = "";
    document.getElementById("Albuns-Pronto").textContent = "";
}

// Função para enviar o total via WhatsApp
function enviarWhatsApp() {
    var numeroTelefone = "5541998812400";
    var mensagem = "O total do pedido é: ";
    
    if (typeof totalGlobal !== 'undefined') {
        mensagem += "R$ " + totalGlobal.toFixed(2);
    } else {
        mensagem += "total não calculado";
    }

    var mensagemEncoded = encodeURIComponent(mensagem);

    var linkWhatsApp = `https://wa.me/${numeroTelefone}?text=${mensagemEncoded}`;

    window.open(linkWhatsApp, "_blank");
}