function getMousePosition(event){
    let cuadrado = document.getElementById("cuadrado");
    cuadrado.style.top = `calc(${event.clientY}px - 25px)`
    cuadrado.style.left = `calc(${event.clientX}px - 25px)`;

    console.log(event.clientX);
    console.log(event.clientY);
}
document.addEventListener('click',getMousePosition);