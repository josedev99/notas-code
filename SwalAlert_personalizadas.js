Swal.fire({
    icon: "warning",
    title: "¿Imprimir viñetas?",
    html: `
        <div style="font-size:13px; line-height:1.35; color:#475569;">
        Se generará un <b>PDF</b> con las viñetas de <b>envío al laboratorio</b>.
        <br><span style="color:#64748b;">¿Deseás continuar?</span>
        </div>
    `,
    showCancelButton: true,
    confirmButtonText: "Sí, imprimir",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#0ea5e9", // azul moderno
    reverseButtons: true,
    focusCancel: true,
    width: 430,
    padding: "1.2rem",
    background: "#ffffff",
    color: "#0f172a",
    customClass: {
        confirmButton: "btn btn-primary px-3 py-2 fw-semibold rounded-3 shadow-sm btn-sm border-0",
        cancelButton: "btn btn-outline-danger px-3 py-2 fw-semibold rounded-3 btn-sm border-0"
    },
    showClass: { popup: "animate_animated animatefadeInDown animate_faster" },
    hideClass: { popup: "animate_animated animatefadeOutUp animate_faster" }
}).then((result) => {
    if (result.isConfirmed) {
        impVinetaLote(dataOrdersImp);
    }
});
