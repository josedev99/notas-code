const url = URL.createObjectURL(response.data);
window.open(url, '_blank');

setTimeout(() => URL.revokeObjectURL(url), 1000);

//Response
