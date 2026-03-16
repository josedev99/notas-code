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

Swal.fire({
    icon: "warning",
    title: "Lista vacía",
    html: `
        <div style="font-size:14px; line-height:1.35; color:#475569;">
        No hay elementos en la lista para imprimir viñetas.
        <br><span style="color:#64748b;">Agregá al menos uno y volvé a intentar.</span>
        </div>
    `,
    confirmButtonText: "Entendido",
    confirmButtonColor: "#198754", // ámbar moderno
    background: "#ffffff",
    color: "#0f172a",
    customClass: {
        confirmButton: "btn btn-success px-3 py-2 fw-semibold rounded-3 shadow-sm btn-sm border-0",
    },
    width: 420,
    padding: "1.2rem",
    showClass: { popup: "animate__animated animate__fadeInDown animate__faster" },
    hideClass: { popup: "animate__animated animate__fadeOutUp animate__faster" }
});

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
    showClass: { popup: "animate__animated animate__fadeInDown animate__faster" },
    hideClass: { popup: "animate__animated animate__fadeOutUp animate__faster" }
}).then((result) => {
    if (result.isConfirmed) {
        impVinetaLote(dataOrdersImp);
    }
});


/* Swal spinner modern */
.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #4e73df;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.swal2-popup.modern-popup {
    border-radius: 1rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
}

.swal2-title.modern-title {
    font-weight: 600;
    color: #2e2e2e;
    font-size: 1.25rem;
}


Swal.fire({
        title: 'Generando...',
        html: `
            <div style="display: flex; align-items: center; flex-direction: column; gap: 15px;">
                <div class="spinner"></div>
                <span style="font-size: 14px; color: #555;">Por favor, espere un momento</span>
            </div>
        `,
        background: '#ffffff',
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        customClass: {
            popup: 'modern-popup',
            title: 'modern-title'
        }
    });
