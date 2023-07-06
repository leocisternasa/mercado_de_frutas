console.log("me cargueeee");
let validate = localStorage.getItem("carrito", JSON.stringify([]));
const imagenes = document.querySelectorAll("img");

if (!validate) {
  localStorage.setItem("carrito", JSON.stringify([]));
}

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", (event) => {
    const id = event.target.id;
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    if (!carrito.includes(id)) {
      carrito.push(id);
      event.target.style.opacity = 0.5
    } else {
        let index = carrito.findIndex(item => item == id)
        carrito.splice(index,1)
        event.target.style.opacity = 1
    }
    
    let html = carrito.map(item => {
        return `<img src="/assets/img/${item}.png"/>`
    })
    document.querySelector(".modal-body").innerHTML = html
    localStorage.setItem("carrito", JSON.stringify(carrito));
  });
});

  function ifOnLocalStorage(){
    const carrito = JSON.parse(localStorage.getItem("carrito"))
    carrito.forEach(item =>{
        document.getElementById(item).style.opacity = 0.5
        document.querySelector(".modal-body").innerHTML += `<img src="/assets/img/${item}.png" />`
    
    })
  }

  ifOnLocalStorage()
