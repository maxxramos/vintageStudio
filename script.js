/* ============================================================
   VINTAGE STUDIO — script.js
   ============================================================ */

/* ======================== SERVICE DATA ======================== */
const serviceData = {
    barberia: {
        icon: '<i class="fa-solid fa-scissors"></i>',
        title: 'Barbería',
        desc: `
            <p>En Vintage Studio, la barbería es mucho más que un corte de cabello: es un ritual. Cada visita comienza con un análisis personalizado de tu estilo y tipo de rostro, asegurándonos de que el resultado sea exactamente lo que buscás.</p>
            <p>Utilizamos productos profesionales de primera línea para garantizar el mejor acabado y la experiencia más satisfactoria.</p>
            <strong>¿Qué incluye?</strong>
            <ul>
                <li>Corte personalizado según tipo de rostro</li>
                <li>Atención para niños y adultos</li>
                <li>Productos premium de acabado</li>
                <li>Ambiente relajado y profesional</li>
                <li>Asesoramiento de estilo incluido</li>
            </ul>
        `
    },
    clasicos: {
        icon: '<i class="fa-solid fa-crown"></i>',
        title: 'Cortes Clásicos',
        desc: `
            <p>Los cortes clásicos son nuestra firma y nuestra pasión. Tijera a mano, peinados atemporales y siluetas impecables para quienes valoran la elegancia por encima de las tendencias pasajeras.</p>
            <p>Un look que nunca falla y que refleja carácter, distinción y personalidad.</p>
            <strong>¿Qué incluye?</strong>
            <ul>
                <li>Corte a tijera artesanal</li>
                <li>Peinados vintage y undercuts clásicos</li>
                <li>Acabado con productos de fijación profesional</li>
                <li>Asesoramiento de estilo personalizado</li>
                <li>Ideal para quienes buscan distinción y elegancia</li>
            </ul>
        `
    },
    fade: {
        icon: '<i class="fa-solid fa-sliders"></i>',
        title: 'Fade',
        desc: `
            <p>El fade es el corte más solicitado de la barbería contemporánea, y en Vintage Studio lo dominamos a la perfección. Degradado suave y progresivo con transiciones impecables que llevan tu estilo al siguiente nivel.</p>
            <p>Disponible en todas sus variantes, adaptado a tu morfología y preferencias.</p>
            <strong>¿Qué incluye?</strong>
            <ul>
                <li>High fade, mid fade y low fade</li>
                <li>Transición perfecta y precisa entre cada nivel</li>
                <li>Compatible con cualquier largo en la parte superior</li>
                <li>Acabado de película y bordes bien definidos</li>
                <li>Resultado duradero y con carácter</li>
            </ul>
        `
    },
    lineas: {
        icon: '<i class="fa-solid fa-pen-ruler"></i>',
        title: 'Corte y Líneas',
        desc: `
            <p>Un corte con líneas bien definidas marca la diferencia entre un look bueno y uno extraordinario. En Vintage Studio trazamos cada línea con precisión milimétrica, creando diseños personalizados que realzan tu imagen.</p>
            <p>Porque los detalles son los que hacen la diferencia en el resultado final.</p>
            <strong>¿Qué incluye?</strong>
            <ul>
                <li>Líneas rectas y precisas en entradas, nuca y patillas</li>
                <li>Diseño personalizado según tu estilo y fisionomía</li>
                <li>Herramientas de precisión profesional</li>
                <li>Acabado limpio, moderno y definido</li>
                <li>Compatible con fade o cualquier tipo de corte</li>
            </ul>
        `
    },
    barba: {
        icon: '<i class="fa-solid fa-user-tie"></i>',
        title: 'Corte y Barba',
        desc: `
            <p>El dúo perfecto. Un corte impecable combinado con una barba prolija y bien trabajada es el sello del caballero que cuida su imagen. En Vintage Studio ofrecemos este servicio integral para que salgas con un look 100% coordinado.</p>
            <p>Porque un caballero siempre cuida su imagen de la cabeza a la barba.</p>
            <strong>¿Qué incluye?</strong>
            <ul>
                <li>Corte personalizado a medida</li>
                <li>Perfilado y definición de contorno de barba</li>
                <li>Recorte y arreglo integral de la barba</li>
                <li>Hidratación y acondicionamiento con aceites premium</li>
                <li>Resultado coordinado y de alta presentación</li>
            </ul>
        `
    },
    micropigmentacion: {
        icon: '<i class="fa-solid fa-droplet"></i>',
        title: 'Barba y Micropigmentación Capilar',
        desc: `
            <p>La micropigmentación capilar es la solución estética más avanzada para quienes buscan recuperar la apariencia de un cuero cabelludo denso, simular entradas más definidas o corregir zonas con pérdida de cabello.</p>
            <p>En Vintage Studio combinamos esta técnica especializada con el servicio completo de barba para un resultado integral e impactante.</p>
            <strong>¿Qué incluye?</strong>
            <ul>
                <li>Consulta y análisis personalizado previo</li>
                <li>Micropigmentación que imita el folículo capilar de forma natural</li>
                <li>Ideal para entradas pronunciadas y densidad reducida</li>
                <li>Resultado duradero con aspecto 100% natural</li>
                <li>Sesión de barba completa incluida</li>
            </ul>
        `
    }
};

/* ======================== DOM REFERENCES ======================== */
const hamburger     = document.getElementById('hamburger');
const navLinks      = document.getElementById('navLinks');
const navbar        = document.getElementById('navbar');
const modalOverlay  = document.getElementById('modalOverlay');
const modalClose    = document.getElementById('modalClose');
const modalCTA      = document.getElementById('modalCTA');
const modalIcon     = document.getElementById('modalIcon');
const modalTitle    = document.getElementById('modalTitle');
const modalDesc     = document.getElementById('modalDesc');
const carouselTrack = document.getElementById('carouselTrack');
const prevBtn       = document.getElementById('prevBtn');
const nextBtn       = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('carouselDots');

/* ======================== HAMBURGER MENU ======================== */
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

/* ======================== NAVBAR ON SCROLL ======================== */
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ======================== ACTIVE NAV LINK ON SCROLL ======================== */
const sections   = document.querySelectorAll('section[id], div[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
        const top    = section.offsetTop;
        const height = section.offsetHeight;
        const id     = section.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
            navAnchors.forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href') === `#${id}`) {
                    a.classList.add('active');
                }
            });
        }
    });
}, { passive: true });

/* ======================== SCROLL REVEAL ======================== */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.10 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ======================== SERVICE MODALS ======================== */
function openModal(key) {
    const data = serviceData[key];
    if (!data) return;

    modalIcon.innerHTML  = data.icon;
    modalTitle.textContent = data.title;
    modalDesc.innerHTML  = data.desc;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelectorAll('.service-card[data-service]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.service));
    card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal(card.dataset.service);
        }
    });
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
});

modalClose.addEventListener('click', closeModal);

modalCTA.addEventListener('click', () => {
    closeModal();
    const contacto = document.getElementById('contacto');
    if (contacto) {
        const top = contacto.offsetTop - 72;
        window.scrollTo({ top, behavior: 'smooth' });
    }
});

modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});

/* ======================== REVIEWS CAROUSEL ======================== */
const cards      = Array.from(carouselTrack.querySelectorAll('.review-card'));
const total      = cards.length;
let current      = 0;
let autoplayTimer = null;

/* Build dots */
cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    dot.setAttribute('aria-label', `Ir a reseña ${i + 1}`);
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = Array.from(dotsContainer.querySelectorAll('.dot'));

function goToSlide(index) {
    cards[current].classList.remove('active');
    dots[current].classList.remove('active');

    current = (index + total) % total;

    cards[current].classList.add('active');
    dots[current].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    goToSlide(current - 1);
    resetAutoplay();
});

nextBtn.addEventListener('click', () => {
    goToSlide(current + 1);
    resetAutoplay();
});

/* Autoplay */
function startAutoplay() {
    autoplayTimer = setInterval(() => goToSlide(current + 1), 4500);
}

function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
}

startAutoplay();

/* Pause on hover */
const carouselEl = document.querySelector('.carousel');
carouselEl.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
carouselEl.addEventListener('mouseleave', startAutoplay);

/* Touch swipe support */
let touchStartX = 0;

carouselEl.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

carouselEl.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 40) {
        goToSlide(diff > 0 ? current + 1 : current - 1);
        resetAutoplay();
    }
}, { passive: true });
