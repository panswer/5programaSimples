let consola = document.getElementById('consola');
let btn_encender = document.getElementById('btn-encender');
let btn_imprimir = document.getElementById('btn-imprimir');
let btn_reiniciar = document.getElementById('btn-reiniciar');
let btn_suspender = document.getElementById('btn-suspender');
let btn_apagar = document.getElementById('btn-apagar');

let time = 500;

let status = {
    estado: 'apagada',
    ejecutando: false
}

class PC {
    static Encender() {
        consola.innerHTML = 'Encendiendo !';
        status.ejecutando = true;
        window.setTimeout(() => {
            consola.innerHTML = '>';
            status.estado = 'encendida';
            status.ejecutando = false;
        }, time);
    }
    static ImprimirHola() {
        consola.innerHTML = `print("Hola mundo !")`;
        status.ejecutando = true;
        window.setTimeout(() => {
            consola.innerHTML = `'Hola mundo !'`;
            window.setTimeout(() => {
                consola.innerHTML = `>`;
                status.ejecutando = false;
            }, time);
        }, time);
    }
    static Reiniciar() {
        this.Apagar();
        window.setTimeout(() => {
            this.Encender();
        }, time);
    }
    static Suspender() {
        consola.innerHTML = `entrando en estado de suspension`;
        status.ejecutando = true;
        window.setTimeout(() => {
            consola.innerHTML = `suspendida`;
            status.estado = 'suspendida';
            status.ejecutando = false;
        }, time);
    }
    static Apagar() {
        consola.innerHTML = `Apagando !`;
        status.ejecutando = true;
        window.setTimeout(() => {
            consola.innerHTML = `Apagada`;
            status.estado = 'apagada';
            status.ejecutando = false;
        }, time);
    }
}
btn_encender.addEventListener('click', e => {
    e.preventDefault();
    if (!status.ejecutando) {
        if (status.estado == 'apagada' || status.estado == 'suspendida') {
            PC.Encender();
        }
    }
});
btn_imprimir.addEventListener('click', e => {
    e.preventDefault();
    if (!status.ejecutando) {
        if (status.estado == 'encendida') {
            PC.ImprimirHola();
        }
    }
});
btn_reiniciar.addEventListener('click', e => {
    e.preventDefault();
    if (!status.ejecutando) {
        if (status.estado == 'encendida') {
            PC.Reiniciar();
        }
    }
});
btn_suspender.addEventListener('click', e => {
    e.preventDefault();
    if (!status.ejecutando) {
        if (status.estado == 'encendida') {
            PC.Suspender();
        }
    }
});
btn_apagar.addEventListener('click', e => {
    e.preventDefault();
    if (!status.ejecutando) {
        if (status.estado === 'encendida') {
            PC.Apagar();
        }
    }
});