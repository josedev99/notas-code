const url = URL.createObjectURL(response.data);
window.open(url, '_blank');

setTimeout(() => URL.revokeObjectURL(url), 1000);

//Response backend laravel Dompdf
/* 
return response($pdfBinario)
            ->header('Content-Type', 'application/pdf')
            ->header('Content-Disposition', 'inline; filename="resultados.pdf"');

*/
