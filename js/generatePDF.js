function generatePDF() {
    // // Choose the element that our invoice is rendered in.
    // const element = document.getElementById("invoice");
    // // Choose the element and save the PDF for our user.
    // html2pdf()
    //   .from(element)
    //   .save();

    var element = document.getElementById('invoice');
    var opt = {
        margin:       1,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 1 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // New Promise-based usage:
    html2pdf().set(opt).from(element).save();
  }