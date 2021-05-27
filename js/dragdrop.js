function drop(e) {
    e.preventDefault();
    e.stopPropagation();
    var dt = e.dataTransfer
    var files = dt.files
    console.log(files)
    handleFiles(files);
}

function allowDrop(e) {
    e.preventDefault();
    e.stopPropagation()
    console.log(e)
}
  
function handleFiles(files){
    files = [...files]
    files.forEach(previewFile)
}

function previewFile(file) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function() {
      let img = document.createElement('img')
      img.src = reader.result
      document.getElementById('gallery').appendChild(img)
    }
}