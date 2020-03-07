let player = 'x';
let Ganador = false;
let items = document.querySelectorAll('.table-item');
class IU {
    static EscribeMensaje(mensaje) {
        document.getElementById('ganador').innerHTML = mensaje
    }
    static ReiniciarJuego() {
        Ganador = false;
        items.forEach(item => {
            item.innerHTML = '';
        });
        document.getElementById('ganador').innerHTML = '';
    }
}
const DetectaWing = () => {
    /* 
        0   1   2
        3   4   5
        6   7   8
    */
    /* Horizontal */
    if (items[0].innerHTML != "") {
        if (items[0].innerHTML === items[1].innerHTML && items[1].innerHTML === items[2].innerHTML) {
            console.log(`Ganador ${items[0].innerHTML}`);
            Ganador = true;
            IU.EscribeMensaje(items[0].innerHTML);
        }
    }
    if (items[3].innerHTML != "") {
        if (items[3].innerHTML === items[4].innerHTML && items[4].innerHTML === items[5].innerHTML) {
            console.log(`Ganador ${items[3].innerHTML}`);
            Ganador = true;
            IU.EscribeMensaje(items[3].innerHTML);
        }
    }
    if (items[6].innerHTML != "") {
        if (items[6].innerHTML === items[7].innerHTML && items[7].innerHTML === items[8].innerHTML) {
            console.log(`Ganador ${items[6].innerHTML}`);
            Ganador = true;
            IU.EscribeMensaje(items[6].innerHTML);
        }
    }
    /* Vertical */
    if (items[0].innerHTML != "") {
        if (items[0].innerHTML === items[3].innerHTML && items[3].innerHTML === items[6].innerHTML) {
            console.log(`Ganador ${items[0].innerHTML}`);
            Ganador = true;
            IU.EscribeMensaje(items[0].innerHTML);
        }
    }
    if (items[1].innerHTML != "") {
        if (items[1].innerHTML === items[4].innerHTML && items[4].innerHTML === items[7].innerHTML) {
            console.log(`Ganador ${items[1].innerHTML}`);
            Ganador = true;
            IU.EscribeMensaje(items[1].innerHTML);
        }
    }
    if (items[2].innerHTML != "") {
        if (items[2].innerHTML === items[5].innerHTML && items[5].innerHTML === items[8].innerHTML) {
            console.log(`Ganador ${items[2].innerHTML}`);
            Ganador = true;
            IU.EscribeMensaje(items[2].innerHTML);
        }
    }
    /* Diagonales */
    if (items[0].innerHTML != "") {
        if (items[0].innerHTML === items[4].innerHTML && items[4].innerHTML === items[8].innerHTML) {
            console.log(`Ganador ${items[0].innerHTML}`);
            Ganador = true;
            IU.EscribeMensaje(items[0].innerHTML);
        }
    }
    if (items[2].innerHTML != "") {
        if (items[2].innerHTML === items[4].innerHTML && items[4].innerHTML === items[6].innerHTML) {
            console.log(`Ganador ${items[2].innerHTML}`);
            Ganador = true;
            IU.EscribeMensaje(items[2].innerHTML);
        }
    }
}
const CambiaPlayer = () => {
    switch (player) {
        case 'x':
            player = 'o';
            break;
        case 'o':
            player = 'x';
            break;
        default:
            console.error('Error en cambio de player');
    }
}
const Selecciona = (string, position) => {
    if (!items[position].innerHTML && !Ganador) {
        items[position].innerHTML = string;
        CambiaPlayer();
        DetectaWing();
    }
}

items.forEach((item, index) => {
    item.addEventListener('click', e => {
        Selecciona(player, index);
    });
});
document.getElementById('btn-reiniciar').addEventListener('click', e => {
    e.preventDefault();
    IU.ReiniciarJuego();
});