function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador;


while (contador < listaDeTeclas.lenght) {

    const tecla = listaDeTeclas [contador];
    const instrumento = tecla.classList [1]

    listadeTeclas [contador].onclick = tocaSom;

        tecla.onclick = function () {

            tocaSom('#toca_som_pom';        
    };

    contador = contador +1;

    console.log(contador);
};
