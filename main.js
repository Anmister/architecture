window.onload = function() {

    document.body.classList.add('loader')

   setTimeout(function() {

    Draggable.create('.gallery', {
        bounds:'body',
        inertia: true
    })/*перемещаем картинки*/ 
   })
}
