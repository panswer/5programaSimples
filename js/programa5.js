let canvas = document.getElementById('lienzo');
let ctx = canvas.getContext('2d');
class figura {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    getInfo() {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height
        }
    }
    MoverDerecha(dist) {
        this.x += dist;
    }
    MoverIzquierda(dist) {
        this.x -= dist;
    }
    MoverArriba(dist) {
        this.y -= dist;
    }
    MoverAbajo(dist) {
        this.y += dist;
    }
}
let cuadrado = new figura(0, 0, 20, 20);
window.addEventListener('load', () => {
    ctx.fillRect(cuadrado.x, cuadrado.y, cuadrado.width, cuadrado.height);
});
window.addEventListener('keyup', e => {
    /* 
        a=65
        d=68
        s=83
        w=87
    */
    let info;
    if (e.keyCode == 65) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cuadrado.MoverIzquierda(10);
        info = cuadrado.getInfo();
        ctx.fillRect(info.x, info.y, info.width, info.height);
    }
    if (e.keyCode == 68) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cuadrado.MoverDerecha(10);
        info = cuadrado.getInfo();
        ctx.fillRect(info.x, info.y, info.width, info.height);
    }
    if (e.keyCode == 83) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cuadrado.MoverAbajo(10);
        info = cuadrado.getInfo();
        ctx.fillRect(info.x, info.y, info.width, info.height);
    }
    if (e.keyCode == 87) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cuadrado.MoverArriba(10);
        info = cuadrado.getInfo();
        ctx.fillRect(info.x, info.y, info.width, info.height);
    }

});