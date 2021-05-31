function generatePDF() {
    let element = document.getElementById('review-form');

    let opt = {
        margin: 0, 
        filename: 'AOG_PH_FORM.pdf', 
        image: {type: 'jpg', quality: 0.50}, 
        html2canvas: {scale: 1.2, dpi: 192, letterRendering: true, useCORS: true}, 
        jsPDF: {unit: 'in', format: [8.50, 14.00], orientation: 'portrait'
   }};

    // New Promise-based usage:
    html2pdf().set(opt).from(element).save();
  }