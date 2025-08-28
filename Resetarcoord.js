(function() {
    const id = "painelResetAtacadas";

    if (document.getElementById(id)) return; // evita duplicar

    const content = `
        <div style="text-align:center; padding:15px;">
            <h3 style="margin-bottom:15px;">⚔️ Resetar coordenadas</h3>
            <div style="display:flex; justify-content:center; gap:10px;">
                <button class="btn btn-confirm-yes" id="btnResetAtual">Resetar aldeia atual</button>
                <button class="btn btn-confirm-no" id="btnResetTodas">Resetar todas</button>
            </div>
        </div>
    `;

    Dialog.show(id, content);

    // Botão: resetar apenas a aldeia atual
    document.getElementById("btnResetAtual").onclick = () => {
        const key = "coordsAtacadas_" + game_data.world + "_" + game_data.village.id;
        localStorage.removeItem(key);
        UI.InfoMessage("Reset feito para aldeia atual!", 3000, "success");
    };

    // Botão: resetar todas as aldeias
    document.getElementById("btnResetTodas").onclick = () => {
        Object.keys(localStorage).forEach(k => {
            if (k.startsWith("coordsAtacadas_")) localStorage.removeItem(k);
        });
        UI.InfoMessage("Reset feito para todas as aldeias!", 3000, "success");
    };
})();
