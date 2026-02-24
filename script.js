document.addEventListener("DOMContentLoaded", () => {
    const jugadores = {
        jude: { name: "Jude Sharp", gender: "♂", level: 16, img: "images/Captura de pantalla 2026-02-10 094257.png", pe: 34, peMax: 58, pt: 32, ptMax: 78, stats: { tiro: 27, fisico: 29, control: 30, defensa: 24, rapidez: 28, valor: 26 }, tecnicas: ["Espejismo de Balon", "Remate Combinado", "Ruptura R.", "Remate Combinado F"] },
        axel: { name: "Axel Blaze", gender: "♂", level: 18, img: "images/CartaAxel.png", pe: 40, peMax: 60, pt: 45, ptMax: 80, stats: { tiro: 46, fisico: 32, control: 25, defensa: 20, rapidez: 34, valor: 30 }, tecnicas: ["Tornado de Fuego", "Tormenta de Fuego", "Torbellino de Fuego", "Corte Flamígero"] },
        mark: { name: "Mark Evans", gender: "♂", level: 17, img: "images/CartaMark.png", pe: 38, peMax: 60, pt: 36, ptMax: 70, stats: { tiro: 28, fisico: 27, control: 33, defensa: 63, rapidez: 30, valor: 31 }, tecnicas: ["Mano Celestial", "Puño de Furia", "Cabezazo Megatón", "Parada Celestial"] },
        gabi: { name: "Gabi G.", gender: "♀", level: 15, img: "images/CartaGabi.png", pe: 30, peMax: 50, pt: 25, ptMax: 60, stats: { tiro: 25, fisico: 22, control: 28, defensa: 30, rapidez: 27, valor: 24 }, tecnicas: ["La Niebla", "Cruz del Sur", "La Flamme", "Niebla Mística"] },
        jack: { name: "Jack Wall", gender: "♂", level: 16, img: "images/CartaJack.png", pe: 33, peMax: 55, pt: 30, ptMax: 65, stats: { tiro: 26, fisico: 27, control: 29, defensa: 21, rapidez: 25, valor: 28 }, tecnicas: ["El Muro","La Montaña", "Superarmadillo", "Trampolín Relámpago"] },
        shawn: { name: "Shawn F.", gender: "♂", level: 17, img: "images/CartaShawn.png", pe: 36, peMax: 58, pt: 34, ptMax: 70, stats: { tiro: 30, fisico: 28, control: 27, defensa: 25, rapidez: 29, valor: 27 }, tecnicas: ["Ventisca Eterna", "Aullido de Lobo", "Ángel de Nieve", "Paisaje Helado"] },
        ricardo: { name: "Ricardo D.", gender: "♂", level: 15, img: "images/CartaRicardo.png", pe: 28, peMax: 50, pt: 26, ptMax: 60, stats: { tiro: 24, fisico: 23, control: 26, defensa: 21, rapidez: 25, valor: 22 }, tecnicas: ["Pentagrama", "Clave de Sol", "Impulso Efímero", "Himno de Athenea"] },
        nosaka: { name: "Nosaka", gender: "♂", level: 16, img: "images/CartaNosaka.png", pe: 32, peMax: 55, pt: 28, ptMax: 60, stats: { tiro: 27, fisico: 26, control: 38, defensa: 22, rapidez: 27, valor: 36 }, tecnicas: ["Lancero Real", "Taconazo Flamenco"] },
        sol: { name: "Sol D.", gender: "♂", level: 17, img: "images/Sol.png", pe: 35, peMax: 60, pt: 30, ptMax: 65, stats: { tiro: 31, fisico: 28, control: 49, defensa: 24, rapidez: 30, valor: 29 }, tecnicas: ["Llamarada Solar", "Tormenata Eléctrica", "Avance Chispeante", "Cañon de Meteoritos"] },
        byron: { name: "Byron L.", gender: "♂", level: 16, img: "images/Byron.png", pe: 33, peMax: 55, pt: 28, ptMax: 60, stats: { tiro: 29, fisico: 27, control: 28, defensa: 22, rapidez: 27, valor: 25 }, tecnicas: ["Sabiduría Divina", "Vuelo de Ícaro", "Hora Celestial", "Remate Caótico"] },
        hiroto: { name: "Hiroto", gender: "♂", level: 17, img: "images/Hiroto.png", pe: 36, peMax: 58, pt: 34, ptMax: 70, stats: { tiro: 30, fisico: 29, control: 31, defensa: 25, rapidez: 28, valor: 27 }, tecnicas: ["Detonador", "Pingüino Ángel y Demonio"] },
        terry: { name: "Terry A.", gender: "♂", level: 14, img: "images/Terry.png", pe: 28, peMax: 50, pt: 24, ptMax: 55, stats: { tiro: 25, fisico: 23, control: 24, defensa: 20, rapidez: 22, valor: 23 }, tecnicas: ["Parada en Mate", "Mate del dragón", "Tótem"] },
        nathan: { name: "Nathan S.", gender: "♂", level: 14, img: "images/Nathan.png", pe: 27, peMax: 50, pt: 22, ptMax: 55, stats: { tiro: 24, fisico: 22, control: 23, defensa: 21, rapidez: 43, valor: 21 }, tecnicas: ["Danza del Viento", "El Huracán", "Pájaro de Fuego"] },
        goldie: { name: "Goldie L.", gender: "♂", level: 15, img: "images/Goldie.png", pe: 30, peMax: 55, pt: 26, ptMax: 60, stats: { tiro: 28, fisico: 26, control: 25, defensa: 22, rapidez: 27, valor: 24 }, tecnicas: ["Grumo Pegapasta", "Tornado de Fuego DT", "Miximax: Reina Dragones"] },
        arion: { name: "Arion S.", gender: "♂", level: 15, img: "images/Arion.png", pe: 29, peMax: 55, pt: 25, ptMax: 60, stats: { tiro: 27, fisico: 25, control: 26, defensa: 21, rapidez: 26, valor: 23 }, tecnicas: ["Tiro Vendaval", "Brisa Deslizante", "Robo Fantástico", "Tótem"] },
        fei: { name: "Fei R.", gender: "♂", level: 15, img: "images/Fei.png", pe: 28, peMax: 50, pt: 24, ptMax: 55, stats: { tiro: 26, fisico: 23, control: 25, defensa: 22, rapidez: 25, valor: 22 }, tecnicas: ["Tiro Rebotado", "Ultraluna", "Pasos Aéreos", "Miximax: T-Rex"] }
    };

    function cambiarCarta(id) {
        const jugador = jugadores[id];
        if (!jugador) return;

        document.getElementById("card-img").src = jugador.img;
        document.getElementById("card-name").textContent = jugador.name;
        document.getElementById("card-gender").textContent = jugador.gender;
        document.getElementById("card-level").textContent = "Nv. " + jugador.level;

        document.getElementById("card-hp-text").textContent = `${jugador.pe} / ${jugador.peMax}`;
        document.getElementById("card-mp-text").textContent = `${jugador.pt} / ${jugador.ptMax}`;
        document.getElementById("card-hp-bar").style.width = (jugador.pe / jugador.peMax * 100) + "%";
        document.getElementById("card-mp-bar").style.width = (jugador.pt / jugador.ptMax * 100) + "%";

        document.getElementById("stat-tiro").textContent = jugador.stats.tiro;
        document.getElementById("stat-fisico").textContent = jugador.stats.fisico;
        document.getElementById("stat-control").textContent = jugador.stats.control;
        document.getElementById("stat-defensa").textContent = jugador.stats.defensa;
        document.getElementById("stat-rapidez").textContent = jugador.stats.rapidez;
        document.getElementById("stat-valor").textContent = jugador.stats.valor;

        const container = document.getElementById("supertecnicas-container");
        container.innerHTML = "";
        jugador.tecnicas.forEach(t => {
            const div = document.createElement("div");
            div.className = "card__supertecnica";
            div.innerHTML = `<h2 class="card__supertecnica--title">${t}</h2>`;
            container.appendChild(div);
        });
    }

    document.querySelectorAll("[data-player]").forEach(el => {
        el.addEventListener("click", e => {
            e.preventDefault();
            cambiarCarta(el.dataset.player);
        });
    });
    cambiarCarta("jude");
});