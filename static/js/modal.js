(function () {
    if(document.cookie){
        document.querySelector(".modal-container").removeAttribute(".class")
        document.querySelector(".modal-container").classList.add('one')
    } 

    document.querySelector(".modal-container").addEventListener("click", () => {
        document.querySelector(".modal-container").classList.add('out');
    })
})()
