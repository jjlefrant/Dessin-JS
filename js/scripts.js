window.onload = () => {
    document.querySelectorAll("#palette div").forEach(element =>{
        element.style.backgroundColor = element.dataset.color

        element.addEventListener("click", ()=>{
            canvas.setColor(element.dataset.color)
        })

    })

    let canvas = new Dessin("#feuille")

    document.querySelector("#plus").addEventListener("click" , ()=> {
        canvas.biggerStroke()
    })

    document.querySelector("#moins").addEventListener("click" , ()=> {
        canvas.smallerStroke()
    })
    
    document.querySelector("#gomme").addEventListener("click" , ()=> {
        canvas.setColor("white")
    })

    document.querySelector("#effacer").addEventListener("click" , ()=> {
        canvas.erase()
    })

}