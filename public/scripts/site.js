/**
 * Portfolio Astro - vanilla progresivo, MPA pura.
 * Solo: tema + idioma + scrollspy. Sin framework, sin router.
 * El tema inicial ya lo setea el inline anti-FOUC en <head>.
 */
(function () {
  function getGreeting(lang) {
    var h = new Date().getHours();
    if (lang === 'en') {
      if (h >= 5 && h < 12) return 'GOOD MORNING';
      if (h >= 12 && h < 20) return 'GOOD AFTERNOON';
      return 'GOOD EVENING';
    }
    if (h >= 5 && h < 12) return 'BUENOS DÍAS';
    if (h >= 12 && h < 20) return 'BUENAS TARDES';
    return 'BUENAS NOCHES';
  }

  var translations = {
    es: {
      'nav.home': 'inicio', 'nav.about': 'sobre mí', 'nav.projects': 'proyectos', 'nav.contact': 'contacto',
      'theme.selectTitle': 'SELECCIONAR TEMA / SELECT THEME',
      'hero.title1': 'Estudiante de Ingeniería', 'hero.title2': '& Profesor.',
      'hero.descMain': 'Fundador de la Academia Aprueba Sin Líos, especializada en física universitaria. Me dedico a la enseñanza y al desarrollo de aplicaciones para simplificar conceptos complejos.',
      'about.tag': 'PERFIL & TRAYECTORIA', 'about.title': 'Sobre Mí',
      'about.lead': 'Soy Manuel Lucena. Combino mi formación en Ingeniería con mi pasión por la enseñanza y la tecnología web para transmitir conocimiento de forma estructurada y eficaz.',
      'about.workTitle': 'Experiencia Laboral', 'about.w2026.role': 'Fundador & Profesor', 'about.w2026.company': 'Aprueba Sin Líos',
      'about.w2025.role': 'Profesor Independiente', 'about.w2025.company': 'Clases particulares de física & programación',
      'about.eduTitle': 'Estudios', 'about.c1': 'Certificación Avanzada de Inglés',
      'about.degree': 'Grado en Ingeniería Informática', 'about.degreeSub': 'Ingreso en la universidad',
      'about.b2': 'Certificación Intermedia-Avanzada de Inglés', 'about.bachiller': 'Matrícula de Honor',
      'about.bachillerSub': 'Excelencia académica en Bachillerato',
      'projects.tag': 'TRABAJOS DESTACADOS', 'projects.title': 'Proyectos',
      'projects.viewMore': 'Ver detalles del proyecto &rarr;',
      'projects.aslDesc': 'Plataforma complementaria para las clases de alumnos de física, con problemas, exámenes y reservas',
      'contact.tag': 'CONTACTO & REDES', 'contact.title': 'Contacto',
      'contact.lead': 'Gracias por interesarte por mí, aquí te dejo sitios donde podemos contactar:',

      'asl.back': 'Volver al portfolio',
      'asl.aboutTitle': 'Sobre el proyecto',
      'asl.p1': 'Aprueba Sin Líos es una plataforma creada con el fin de ayudar a estudiantes de ingeniería a aprobar asignaturas con una alta tasa de suspensos. Al principio empecé ofreciendo Física, Programación y Álgebra; sin embargo, decidí especializarme en física, pues aparte de ser la asignatura con mayor demanda, es la que mejor entiendo.',
      'asl.p2': 'Además de las clases, buscaba una plataforma que me diese la oportunidad de subir problemas resueltos, documentos y clases. El problema es que no había nada en el mercado que ofreciese lo que buscaba, entonces aproveché mis conocimientos para desarrollar una plataforma que cumpliera con lo que yo quería.',
      'asl.p3': 'Lo primero fue desarrollar problemas tipo de física para que los alumnos puedan practicar mientras no doy clases, la estructura es la siguiente:',
      'asl.p4': 'Primero quería mostrar el problema para que el estudiante intente resolverlo por su cuenta, y después ofrecer una solución detallada que tendría lo siguiente:',
      'asl.solItem1': 'Datos del problema recopilados',
      'asl.solItem2': 'Leyes utilizadas para la solución',
      'asl.solItem3': 'Solución paso a paso utilizando todo lo obtenido',
      'asl.p5': 'Además noté que solo con la solución no iba a ser suficiente, tenía que ayudar al alumno aunque no estuviera ahí, opté por implementar un asistente cuya función es guiar al alumno para entender la solución.',
      'asl.p6': 'He ido implementando más contenido complementario a las clases, formularios y exámenes propios que uso en las clases, los alumnos pueden acceder a ellos mientras explico la solución paso a paso.',
      'asl.p7': 'Por último tuve que implementar un sistema de reservas, pues fui estafado por una alumna y entendí que la solución era implementar un sistema que me permitiese tener el control de las clases.',
      'asl.p8': 'Sigo manteniendo la aplicación para que esté actualizada y cumpla tanto con mis necesidades como las de los alumnos; he intentado implementar nuevas funciones como un generador de problemas usando inteligencia artificial, pero aún está en fase beta.',
      'asl.invTitle': 'Inversiones en el negocio',
      'asl.p9': 'Lo que gano con las clases se reinvierte con el fin de mejorar el negocio, algunas inversiones fueron:',
      'asl.invItem1': 'Tablet para poder grabar las clases',
      'asl.invItem2': 'Micrófono para poder dar clases en línea',
      'asl.invItem3': 'Anuncios para poder promocionar las clases',
      'asl.invItem4': 'Formularios como lead magnet',
      'asl.visitBtn': 'Visitar apruebasinlios.es &rarr;'
    },
    en: {
      'nav.home': 'home', 'nav.about': 'about me', 'nav.projects': 'projects', 'nav.contact': 'contact',
      'theme.selectTitle': 'SELECT THEME',
      'hero.title1': 'Engineering Student', 'hero.title2': '& Educator.',
      'hero.descMain': 'Founder of Academia Aprueba Sin Líos, specializing in university physics. I focus on teaching and building applications to simplify complex concepts.',
      'about.tag': 'PROFILE & BACKGROUND', 'about.title': 'About Me',
      'about.lead': 'I am Manuel Lucena. I combine my engineering background with a passion for teaching and web technology to share technical knowledge in a structured, effective way.',
      'about.workTitle': 'Work Experience', 'about.w2026.role': 'Founder & Educator', 'about.w2026.company': 'Aprueba Sin Líos',
      'about.w2025.role': 'Independent Educator', 'about.w2025.company': 'Private tutoring in physics & programming',
      'about.eduTitle': 'Education', 'about.c1': 'Cambridge English C1 Advanced',
      'about.degree': 'B.Sc. Computer Engineering', 'about.degreeSub': 'University admission',
      'about.b2': 'Cambridge English B2 First', 'about.bachiller': 'High Honors',
      'about.bachillerSub': 'Academic excellence in High School Diploma',
      'projects.tag': 'FEATURED WORK', 'projects.title': 'Projects',
      'projects.viewMore': 'View project details &rarr;',
      'projects.aslDesc': "Complementary platform for physics students' classes, featuring problems, exams, and bookings",
      'contact.tag': 'CONTACT & SOCIAL', 'contact.title': 'Contact',
      'contact.lead': 'Thank you for your interest in my work. Here is how you can reach me:',

      'asl.back': 'Back to portfolio',
      'asl.aboutTitle': 'About the project',
      'asl.p1': 'Aprueba Sin Líos is a platform created to help engineering students pass subjects with high fail rates. Initially, I offered Physics, Programming, and Algebra; however, I decided to specialize in physics because, besides being the subject with highest demand, it is the one I understand best.',
      'asl.p2': 'In addition to classes, I was looking for a platform that would allow me to upload solved problems, documents, and video lessons. The problem was that nothing on the market offered what I needed, so I leveraged my skills to build a platform that fulfilled my requirements.',
      'asl.p3': 'First, I developed standard physics problem sets so students could practice outside of class hours. The structure is as follows:',
      'asl.p4': 'I wanted to present the problem first so the student could try solving it independently, followed by a detailed solution that includes the following:',
      'asl.solItem1': 'Collected problem data',
      'asl.solItem2': 'Laws and formulas applied',
      'asl.solItem3': 'Step-by-step solution utilizing all gathered data',
      'asl.p5': 'I also realized that offering just the solution wouldn\'t be enough — I needed to support students even when I wasn\'t present. So I opted to implement an assistant designed to guide students through understanding the solution.',
      'asl.p6': 'Over time, I\'ve added complementary content to the lessons: custom cheat sheets, formula guides, and past exams. Students can access them while following the step-by-step solutions.',
      'asl.p7': 'Finally, I had to implement a booking system after an incident where a student defrauded me, recognizing the need for a system that gives me full control over class bookings.',
      'asl.p8': 'I continuously maintain the platform to keep it up to date for both my needs and those of my students. I\'ve also attempted to implement new features, such as an AI-powered problem generator, currently in beta.',
      'asl.invTitle': 'Business Investments',
      'asl.p9': 'Earnings from tutoring are reinvested directly into expanding and improving the business. Some key investments were:',
      'asl.invItem1': 'Tablet to record class lectures',
      'asl.invItem2': 'Microphone for online teaching',
      'asl.invItem3': 'Advertising campaigns to promote classes',
      'asl.invItem4': 'Formula forms as lead magnets',
      'asl.visitBtn': 'Visit apruebasinlios.es &rarr;'
    }
  };

  function detectLang() {
    try {
      var saved = localStorage.getItem('portfolio_lang');
      if (saved === 'es' || saved === 'en') return saved;
    } catch (e) {}
    var sys = (navigator.language || 'es').toLowerCase();
    return sys.startsWith('en') ? 'en' : 'es';
  }

  var currentLang = detectLang();

  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    try { localStorage.setItem('portfolio_lang', lang); } catch (e) {}
    var code = document.getElementById('current-lang-code');
    if (code) code.textContent = lang.toUpperCase();
    var g = document.getElementById('hero-greeting');
    if (g) g.textContent = getGreeting(lang) + (lang === 'en' ? ", I'M MANU" : ', SOY MANU');
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][k]) el.innerHTML = translations[lang][k];
    });
  }

  function syncThemeCards() {
    var current = document.documentElement.getAttribute('data-theme') || 'classic-light';
    document.querySelectorAll('.theme-card').forEach(function (card) {
      card.classList.toggle('active', card.getAttribute('data-theme-id') === current);
    });
  }

  function applyTheme(id) {
    document.documentElement.setAttribute('data-theme', id);
    try { localStorage.setItem('portfolio_theme', id); } catch (e) {}
    syncThemeCards();
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(currentLang);
    syncThemeCards();

    var langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) langBtn.addEventListener('click', function () {
      applyLang(currentLang === 'es' ? 'en' : 'es');
    });

    var drawer = document.getElementById('theme-drawer');
    var openBtn = document.getElementById('open-theme-btn');
    var closeBtn = document.getElementById('close-theme-drawer');
    function setDrawer(open) {
      if (drawer) drawer.classList.toggle('open', open);
      if (openBtn) openBtn.setAttribute('aria-expanded', String(open));
    }
    if (openBtn && drawer) openBtn.addEventListener('click', function () {
      setDrawer(!drawer.classList.contains('open'));
    });
    if (closeBtn && drawer) closeBtn.addEventListener('click', function () {
      setDrawer(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setDrawer(false);
    });

    document.querySelectorAll('.theme-card').forEach(function (card) {
      card.addEventListener('click', function () {
        applyTheme(card.getAttribute('data-theme-id'));
      });
    });

    // ScrollSpy solo en landing (donde existen #home, #about, #projects, #contact).
    // En páginas de detalle no hay sections con id -> se respeta el active del servidor.
    var navLinks = document.querySelectorAll('.nav-link');
    var sections = document.querySelectorAll('main section[id]');
    function setActive(id) {
      navLinks.forEach(function (link) {
        var href = link.getAttribute('href') || '';
        var hash = href.indexOf('#') !== -1 ? href.slice(href.indexOf('#') + 1) : '';
        var navKey = link.getAttribute('data-nav') || '';
        link.classList.toggle('active', hash === id || navKey === id);
      });
    }
    if ('IntersectionObserver' in window && sections.length > 1) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          setActive(entry.target.id);
        });
      }, { rootMargin: '-20% 0px -50% 0px', threshold: 0.1 });
      sections.forEach(function (s) { obs.observe(s); });
      // Si se entra con hash directo (/​#projects), marcarlo ya
      if (window.location.hash) setActive(window.location.hash.slice(1));
    }
  });
})();
