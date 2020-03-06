let cubo = document.getElementById('cubo');
let left = document.getElementById('left');
let right = document.getElementById('right');
let color = document.getElementById('color');
class Cubo {
    constructor() {
        this.color = 'blue';
        this.rotate = 0;
        this.deg = 45;
    }
    RotateLeft() {
        this.rotate -= this.deg;
        cubo.style = `background-color:${this.color};transform: rotate(${this.rotate}deg);`;
    }
    RotateRight() {
        this.rotate += this.deg;
        cubo.style = `background-color:${this.color};transform: rotate(${this.rotate}deg);`;
    }
    ChangeColor() {
        if (this.color === 'blue') {
            this.color = 'red';
        } else {
            this.color = 'blue';
        }
        cubo.style = `background-color:${this.color};transform: rotate(${this.rotate}deg);`;
    }
    Attribute() {
        return {
            color: this.color,
            rotate: this.rotate,
            deg: this.deg
        }
    }
}
let figura = new Cubo();
left.addEventListener('click', e => {
    e.preventDefault();
    figura.RotateLeft();
});
right.addEventListener('click', e => {
    e.preventDefault();
    figura.RotateRight();
});
color.addEventListener('click', e => {
    e.preventDefault();
    figura.ChangeColor();
});