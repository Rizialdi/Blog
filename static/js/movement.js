(function () {
    var container = document.querySelectorAll('.carte-body')
    const cible = document.querySelectorAll('.carte-content')
    for (let i = 0; i < container.length; i++) {
        container[i].addEventListener('mousemove', function (event) {const x = event.pageX
            const y = event.pageY
            const targetCoords = cible[i].getBoundingClientRect()
            
            const targetX = targetCoords.left + (cible[i].offsetWidth / 2)
            const targetY = targetCoords.top + (cible[i].offsetWidth / 2)
            
            const angleX = (targetY - y) / 15
            const angleY = (targetX - x) / 15
            
            cible[i].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`
        })

        container[i].addEventListener('mouseout', function (event) {
            cible[i].style.transform = `rotateX(${0}deg) rotateY(${0}deg)`
        })

    }
})()