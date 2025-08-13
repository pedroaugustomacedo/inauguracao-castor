document.getElementById('knowMoreBtn').addEventListener('click', function() {
    window.location.href = 'https://wa.me/+5534984119669';
});

// Configuração partículas
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 40, "density": { "enable": true, "value_area": 900 } },
        "color": { "value": "#FFD700" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": true },
        "size": { "value": 5, "random": true },
        "line_linked": { "enable": false },
        "move": { "enable": true, "speed": 0.6, "direction": "none", "random": true, "straight": false }
    },
    "interactivity": {
        "events": {
            "onhover": { "enable": false },
            "onclick": { "enable": false }
        }
    },
    "retina_detect": true
});
