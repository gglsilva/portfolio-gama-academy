function TypeWriter(elemento){
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra,i) =>{
      setTimeout(()=> elemento.innerHTML += letra, 110 * i);
    });
}

const titulo = document.querySelector('h1')
TypeWriter(titulo)