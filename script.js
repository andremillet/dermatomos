const dermatomeData = {
    "cabeça": { dermatomo: "C2-C3", lesoes: ["nervo occipital maior", "nervo trigêmeo"] },
    "pescoço": { dermatomo: "C3-C4", lesoes: ["plexo cervical"] },
    "braço direito": { dermatomo: "C5-T1", lesoes: ["nervo radial", "nervo ulnar", "nervo mediano"] },
    "braço esquerdo": { dermatomo: "C5-T1", lesoes: ["nervo radial", "nervo ulnar", "nervo mediano"] },
    "tronco": { dermatomo: "T4-T12", lesoes: ["nervos intercostais"] },
    "perna direita": { dermatomo: "L2-S1", lesoes: ["nervo ciático", "nervo femoral", "nervo tibial"] },
    "perna esquerda": { dermatomo: "L2-S1", lesoes: ["nervo ciático", "nervo femoral", "nervo tibial"] }
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('exam-form');
    const regionInput = document.getElementById('region');
    const output = document.getElementById('output');
    const svg = document.getElementById('body-map');

    // Handle map clicks
    svg.addEventListener('click', (e) => {
        const target = e.target;
        if (target.hasAttribute('data-region')) {
            regionInput.value = target.getAttribute('data-region');
        }
    });

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const region = regionInput.value.trim().toLowerCase();
        const dor = document.querySelector('input[name="dor"]:checked').value;
        const temperatura = document.querySelector('input[name="temperatura"]:checked').value;
        const vibracao = document.querySelector('input[name="vibracao"]:checked').value;
        const propriocepcao = document.querySelector('input[name="propriocepcao"]:checked').value;

        let suggestions = [];
        if (dor !== 'normal') {
            suggestions.push(`${dor} da sensibilidade dolorosa na ${region}`);
        }
        if (temperatura !== 'normal') {
            suggestions.push(`${temperatura} da sensibilidade térmica na ${region}`);
        }
        if (vibracao !== 'normal') {
            suggestions.push(`${vibracao} da sensibilidade vibratória na ${region}`);
        }
        if (propriocepcao !== 'normal') {
            suggestions.push(`${propriocepcao} da propriocepção na ${region}`);
        }

        if (suggestions.length > 0) {
            const data = dermatomeData[region];
            if (data) {
                output.innerHTML = `<p>${suggestions.join('; ')}.</p><p>Dermátomo: ${data.dermatomo}. Possíveis lesões: ${data.lesoes.join(', ')}.</p>`;
            } else {
                output.innerHTML = `<p>${suggestions.join('; ')}.</p><p>Região não mapeada para dermátomo específico.</p>`;
            }
        } else {
            output.innerHTML = '<p>Nenhuma alteração detectada.</p>';
        }
    });
});