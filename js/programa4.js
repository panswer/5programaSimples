let btn = document.getElementById('btn');
let colores = {
    fondo: 'white',
    letter: 'black',
    status: 1
}
btn.addEventListener('click', e => {
    e.preventDefault();
    let pagina = document.querySelector(':root');
    switch (colores.status) {
        case 1:
            colores.fondo = 'black';
            colores.letter = 'white';
            colores.status = 2;
            break;
        case 2:
            colores.fondo = 'white';
            colores.letter = 'black';
            colores.status = 1;
            break;
        default:
            colores.status = 1;
    }
    pagina.style = `background-color:${colores.fondo};color:${colores.letter};`;
});