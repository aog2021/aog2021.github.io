let filesUploaded = 0;

function drop(e) {
    e.preventDefault();
    e.stopPropagation();
    let dt = e.dataTransfer
    let files = dt.files;
    console.log(files)
    handleFiles(files);
}
  
function handleFiles(files){
    let $fileUpload = $("input[type='file']");
    filesUploaded += parseInt($fileUpload.get(0).files.length);

    if(filesUploaded > 4){
        filesUploaded -= parseInt($fileUpload.get(0).files.length);
        return alert("You are only allowed to upload a maximum of 4 files");
    }

    files = [...files]
    files.forEach(previewFile)
}

function previewFile(file) {
    if(file.size > 2097152)
        return alert("File is too big!");

    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function() {
    // <button type="button" class="remove-btn" onclick="removeFile('${file.name}')">Remove</button>
      let upload = `
        <div>
            <img src=${reader.result} id=${file.name}>
        </div>
      `
      $("#gallery").append(upload);
      $("#review-uploads").append(upload);
      $("#review-uploads-PDF").append(upload);
    }
}

function removeFile(file){
    let removeFile = $(`#${file}`);
    console.log(removeFile);
    // console.log(file)
}