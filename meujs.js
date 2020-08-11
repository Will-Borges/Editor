// $(function() {

//     $('#upload').change(function() {
//         console.log($(this))
//     })
// })

function trocarImg() {

    var imagem = document.querySelector('input[name=imagem]').files[0];
    var preview = document.querySelector('img');

    var reader = new FileReader();

    reader.onloadend = function() {
        preview.scr = reader.result;
    }

    // se for true
    if (imagem) {
        reader.readAsDataURL(imagem);
        // console.log('ta funcionando pae');
    } else {
        preview.src = "";
    }


}


// --------------------- net ----------------------

function ImagePreview(input) {

    if (input.files && input.files[0]) {

        var r = new FileReader();

        r.onload = function(e) {
            $("#img_preview").show();
            $("#img_preview").attr("src", e.target.result);
        }

        r.readAsDataURL(input.files[0]);

    }
}

$().ready(function() {

    hide_empty_image = false;
    set_blank_to_empty_image = false;
    set_image_border = true;

    if (hide_empty_image)
        $("#img_preview").hide();

    if (set_blank_to_empty_image)
        $("#img_preview").attr("src", "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=");

    if (set_image_border)
        $("#img_preview").css("border", "1px solid #05bbcc");

    $("#img_preview").css("width", "100%");
    $("#img_preview").css("height", "auto");
    $("#img_preview").css("background-color", "rgba(0, 0, 0, 0.7)");
    $("#img_preview").css("opacity", "0.5");


    $("#img_input").change(function() {
        ImagePreview(this);
    });

});

var tamanho = 100;

function diminuirImg() {

    tamanho = tamanho - 25;
    var txtTamanho = tamanho + '%'
    $("#img_preview").css("width", txtTamanho);
    $("#img_preview").css("height", "auto");
}

function aumentarImg() {

    tamanho = tamanho + 25;
    var txtTamanho = tamanho + '%'
    $("#img_preview").css("width", txtTamanho);
    $("#img_preview").css("height", "auto");
}


// ------------------- TEXTO -------------------
var altura = 90;
var esquerda = 5;

function criaTexto() {

    var txtAltura = altura + 'px';
    var txtEsquerda = esquerda + 'px';
    var texto = document.getElementById("novoTexto").value;

    var campoTexto = document.getElementById('texto');
    campoTexto.innerHTML = texto;


    $("#texto").css("color", "#ffff");
    $("#texto").css("position", "absolute");
    $("#texto").css("text-align", "center");
    $("#texto").css("width", "50%");
    $("#texto").css("line-height", "30px");
    $("#texto").css("margin-top", txtAltura);
    $("#texto").css("left", txtEsquerda);

}

function baixoTexto() {

    altura = altura + 5;
    var txtAltura = altura + 'px';
    $("#texto").css("margin-top", txtAltura);

}

function cimaTexto() {

    altura = altura - 5;
    var txtAltura = altura + 'px';
    $("#texto").css("margin-top", txtAltura);

}

function esquerdaTexto() {

    esquerda = esquerda - 5;
    var txtEsquerda = esquerda + 'px';
    $("#texto").css("left", txtEsquerda);

}

function direitaTexto() {

    esquerda = esquerda + 5;
    var txtEsquerda = esquerda + 'px';
    $("#texto").css("left", txtEsquerda);

}

function centerTexto() {

    var txtTamanho = tamanho + '%'

    if (tamanho < 100) {
        $("#texto").css("width", txtTamanho);
    } else {
        $("#texto").css("width", "99%");
    }

    $("#texto").css("text-align", center);

}