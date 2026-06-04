/* =============================================================
   i18n.js — Jazykový prekladač SK / EN
   Používa data-i18n (textContent) a data-i18n-html (innerHTML).
   setLang() je globálna funkcia volaná z HTML tlačidiel.
   ============================================================= */

(function () {
  'use strict';

  const translations = {
    sk: {
      'page.title': 'Anna Lockwoodová — Webový dizajn & UI/UX',
      'page.description': 'Navrhujem a tvorím weby, kde estetika a funkčnosť idú ruka v ruke. Webový dizajn, UI/UX — Bratislava.',

      'cursor.label': 'Zobraziť',

      'nav.projects': 'Projekty',
      'nav.dropdown.all': 'Všetky projekty',
      'nav.about': 'O mne',
      'nav.work': 'Tvorba',
      'nav.contact': 'Kontakt',
      'nav.logo.label': 'Anna Lockwoodová — domov',
      'nav.hamburger.label': 'Otvoriť menu',

      'hero.tagline': '<span class="hero__tagline-line">Robím weby ako umenie –</span><span class="hero__tagline-line">s dôrazom na zámer, cit a detail.</span>',
      'hero.subtitle': 'Web dizajn & UI/UX pre značky, ktoré veria, že detail rozhoduje.',
      'hero.cta.projects': 'Pozrieť projekty',
      'hero.cta.contact': 'Napíšte mi',

      'section.projects.label': 'Vybrané projekty',
      'section.projects.h2': 'Web dizajn.',

      'card.mapa.badge': 'Osobný projekt',
      'card.mapa.overlay': 'Otvoriť projekt ↗',
      'card.mapa.desc': 'Čo ak by mapa mohla uchovávať príbehy? Web venovaný Anne Šenšelovej a spolku Lipa som navrhla ako živý archív: interaktívna mapa zbiera spomienky na predkov od návštevníkov z celého Slovenska. Kultúrne dedičstvo, ktoré sa nestratí.',
      'card.mapa.link': 'Pozrieť projekt',

      'card.lumenglass.badge': 'Klient',
      'card.lumenglass.overlay': 'Otvoriť projekt ↗',
      'card.lumenglass.desc': 'Sklárska firma si zaslúži web, ktorý odráža precíznosť jej remesla. Klientsky projekt realizovaný na WordPresse — čistý, prehľadný a dôveryhodný dizajn, ktorý premieňa návštevníkov na zákazníkov.',
      'card.lumenglass.link': 'Pozrieť projekt',
      'card.cs.link': 'Čítať case study',

      'projects.callout.heading': 'Každý web sa dá zatvoriť. Ten správny sa zatvoriť nechce.',
      'projects.callout.body': 'Interaktivita nie je efekt pre efekt — je to rozdiel medzi stránkou, ktorú návštevník preskroluje, a stránkou, na ktorej zostane. Prvky, ktoré reagujú, prekvapujú a pozývajú ďalej, premieňajú pasívneho čitateľa na niekoho, kto si vás pamätá — a odporučí.',
      'projects.callout.cta': 'Napísať mi',

      'section.about.label': 'O mne',
      'section.about.h2': 'Taká som.',
      'about.p1': 'Nevyberám si medzi umením a dizajnom. Robím oboje — a práve to robí moju prácu inou.',
      'about.p2': 'Roky práce s tradičnými umeleckými technikami ako je akvarel, papier-mâché a výšivka, mi dali niečo, čo by som sa na dizajnérskych kurzoch nenaučila — cit vidieť, cit vnímať, cit práce s kompozíciou, farbou a rytmom.',
      'about.p3': 'Keď som objavila webový dizajn, zaujala ma možnosť preniesť ten istý prístup do digitálneho priestoru. Skombinovala som svoje estetické cítenie, kreativitu a poznatky z vysokoškolského štúdia marketingovej komunikácie a reklamy (UKF Nitra) a zistila som, že krásny a funkčný web nie sú protiklady, ale len dve strany tej istej mince.',
      'about.p4': 'Dnes navrhujem a tvorím weby, kde krása neoberá funkčnosť o priestor. A kde funkčnosť nepotlačí štýl.',
      'about.instagram': 'Moja staršia papierová tvorba žije na Instagrame',
      'about.skill.web': 'Webový dizajn',
      'about.skill.watercolour': 'Akvarel',
      'about.skill.embroidery': 'Výšivka',

      'section.services.label': 'Služby',
      'section.services.h2': 'Ako môžem pomôcť.',
      'services.intro': 'Každý projekt je iný svet — iná cieľovka, iný tón, iné technické nároky. Práve to ma baví. Tu je to, čo dnes viem ponúknuť.',

      'service1.title': 'Prezentačné weby<br>na mieru.',
      'service1.desc': 'Statické HTML weby alebo WordPress — podľa toho, čo dáva zmysel. Vlastný dizajn, žiadne šablóny. Rýchle, mobilné, pripravené pre Google.',
      'service1.target': '<strong>Pre koho</strong> malé firmy, remeselníci, ateliéry, butiky, freelanceri.',

      'service2.title': 'Storytelling &amp;<br>značkové weby.',
      'service2.desc': 'Weby pre značky, ktoré majú príbeh. Galérie, časové osi, interaktívne mapy, biografie, archívy. Vlastná typografia, privacy-first, bez tracking skriptov.',
      'service2.target': '<strong>Pre koho</strong> kultúrne projekty, neziskovky, múzeá, autori, umelci, rodinné firmy.',

      'service3.title': 'WordPress weby<br>na mieru.',
      'service3.desc': 'Komerčné WordPress weby navrhnuté pre konkrétne odvetvie. Multi-page weby s produktovými kategóriami, SEO optimalizáciou a performance tuningom.',
      'service3.target': '<strong>Pre koho</strong> remeselníci, sklárske a stolárske firmy, stavbári, interiérové štúdiá.',

      'service4.title': 'Webové aplikácie<br>a adresáre.',
      'service4.desc': 'Adresáre s filtrovaním a recenziami, membership weby, freemium platformy, multi-step formuláre, AI nástroje — realizované na moderných platformách.',
      'service4.target': '<strong>Pre koho</strong> komunity, oborové platformy, startupy, B2B portály.',

      'service5.title': 'UI / UX dizajn<br>&amp; redesign.',
      'service5.desc': 'Návrh rozhraní, ktoré sa používajú ľahko a s radosťou. Redesign existujúcich webov — od auditu po nový vzhľad. Wireframy, prototypy, dizajn systémy.',
      'service5.target': '<strong>Pre koho</strong> firmy s existujúcim webom, ktorý už nestíha. Startupy pred launchom.',

      'service6.title': 'Grafika, print<br>&amp; custom ilustrácie.',
      'service6.desc': 'Etikety, obaly, vizitky, plagáty a ďalšie tlačoviny navrhnuté s rovnakou starostlivosťou ako web. A keď treba niečo naozaj vlastné — ručne maľované akvarelové ilustrácie alebo digitálna kresba priamo pre váš projekt.',
      'service6.target': '<strong>Pre koho</strong> malé značky, vinárstva, kaviarne, kozmetika, módne projekty a každý, kto chce grafiku s dušou.',

      'services.note': 'Cenu pripravujem individuálne podľa rozsahu a charakteru projektu. Napíšte mi pár slov o tom, čo plánujete — pošlem nezáväznú ponuku do 48 hodín.',
      'services.note.cta': 'Napísať mi →',

      'skills.h2': 'Čo mám overené v praxi.',
      'skills.tagline': 'Veci, ktoré som si skutočne odskúšala — na reálnych projektoch, pre reálnych ľudí.',

      'skills.col1.title': 'Dizajn & Web',
      'skills.col1.li1': 'Weby navrhnuté na mieru — bez šablón',
      'skills.col1.li2': 'Vlastná typografia a vizuálny jazyk',
      'skills.col1.li3': 'Animácie, efekty pri scrollovaní, interaktivita',
      'skills.col1.li4': 'Ručné dekoratívne prvky (akvarele, ilustrácie)',
      'skills.col1.li5': 'Fungovanie na mobile, tablete aj desktope',

      'skills.col2.title': 'WordPress & CMS',
      'skills.col2.li1': 'WordPress s Elementorom — na mieru',
      'skills.col2.li2': 'Základy SEO — aby vás Google našiel',
      'skills.col2.li3': 'Rýchlosť a optimalizácia obrázkov',

      'skills.col3.title': 'Brand & Vizuál',
      'skills.col3.li1': 'Vizuálna identita — logo, farby, písmo',
      'skills.col3.li2': 'Akvarelové ilustrácie pre tlač aj web',
      'skills.col3.li3': 'Ľudové a prírodné motívy v modernom spracovaní',

      'diff.h2': 'Prečo si vybrať mňa.',
      'diff.card1.title': 'Dizajn aj web —<br>jedna osoba.',
      'diff.card1.desc': 'Nemusíte koordinovať dizajnéra a technické riešenie zvlášť. Celý web — od vzhľadu po spustenie — mám na starosti ja.',
      'diff.card2.title': 'Každá výzva<br>je vítaná.',
      'diff.card2.desc': 'Historická téma, moderný minimalizmus alebo klientska prezentácia — nebojím sa žánrov. Každý projekt dostane prístup šitý na mieru.',
      'diff.card3.title': 'Umelecké oko,<br>technická presnosť.',
      'diff.card3.desc': 'Moja celoživotná záľuba v umení sa priamo premieta do toho, ako vidím kompozíciu, farbu a rytmus. Pri mojich výsledných weboch to cítiť.',
      'diff.card4.title': 'Privacy-first<br>ako default.',
      'diff.card4.desc': 'Žiadne tracking skripty, žiadne cookies tretích strán, vlastné fonty. GDPR-friendly bez kompromisov.',

      'process.h2': 'Ako pracujeme spolu.',
      'process.step1.title': 'Brief & návrh',
      'process.step1.desc': 'Prejdeme spolu váš zámer, cieľovku, referencie a rozsah. Dostanete ponuku do 5 dní.',
      'process.step2.title': 'Dizajn & schválenie',
      'process.step2.desc': 'Pripravím vizuálny návrh kľúčových stránok. Iterujeme do schválenia.',
      'process.step3.title': 'Realizácia',
      'process.step3.desc': 'Realizujem web, optimalizujem rýchlosť, doplníme obsah a otestujeme na všetkých zariadeniach.',
      'process.step4.title': 'Spustenie & odovzdanie',
      'process.step4.desc': 'Web ide naživo. Naučím vás, ako si ho viete sami spravovať. Mesiac bezplatnej podpory po spustení.',

      'section.atelier.label': 'Ukážky mojich prác',
      'section.atelier.h2': 'Tvorba.',
      'section.atelier.tagline': 'Môj kreatívny svet, v ktorom sa spája digitálne aj tradičné umenie a ktorý poháňa aj moje web dizajnové riešenia.',

      'atelier.item1.tag': 'Akvarel',
      'atelier.item1.title': 'Portrét s listami',
      'atelier.item2.tag': 'Digitálna ilustrácia',
      'atelier.item2.title': 'Portrét',
      'atelier.item3.tag': 'Akvarel',
      'atelier.item3.title': 'Granátové jablko',
      'atelier.item4.tag': 'Výšivka',
      'atelier.item4.title': 'Žena so šípom',
      'atelier.item5.tag': 'Papier-mâché',
      'atelier.item5.title': 'Koláčiky',
      'atelier.item6.tag': 'Grafický dizajn',
      'atelier.item6.title': 'Etiketa na víno',

      'section.contact.label': 'Kontakt',
      'contact.heading.left': 'Začnime',
      'contact.heading.right': 'spoluprácu.',
      'contact.p1': 'Máte projekt, kde záleží na každom detaile? Napíšte mi. Rada si vypočujem, čo potrebujete, a poviem vám úprimne, ako vám viem pomôcť.',
      'contact.p2': 'Odpoviem do 48 hodín.',

      'form.name': 'Vaše meno *',
      'form.email': 'E-mail *',
      'form.type.label': 'O čo ide?',
      'form.type.new': 'Nový web od nuly',
      'form.type.redesign': 'Redesign existujúceho webu',
      'form.type.other': 'Niečo iné',
      'form.message': 'Správa *',
      'form.submit': 'Odoslať správu →',
      'form.success': '✓ Správa odoslaná. Ozvem sa do 48 hodín.',

      'footer.copy': '© 2026 Anna Lockwoodová · Všetky práva vyhradené',
      'footer.made': 'Vyrobené s citom',

      'lb.close': 'Zavrieť',
      'lb.prev': 'Predchádzajúci obrázok',
      'lb.next': 'Nasledujúci obrázok',
    },

    en: {
      'page.title': 'Anna Lockwoodová — Web Design & UI/UX',
      'page.description': 'I design and build websites where aesthetics and function go hand in hand. Web Design, UI/UX — Bratislava.',

      'cursor.label': 'View',

      'nav.projects': 'Projects',
      'nav.dropdown.all': 'All projects',
      'nav.about': 'About',
      'nav.work': 'Work',
      'nav.contact': 'Contact',
      'nav.logo.label': 'Anna Lockwoodová — home',
      'nav.hamburger.label': 'Open menu',

      'hero.tagline': '<span class="hero__tagline-line">I build websites like art —</span><span class="hero__tagline-line">with intention, feeling, and detail.</span>',
      'hero.subtitle': 'Web design & UI/UX for brands that believe detail makes the difference.',
      'hero.cta.projects': 'See projects',
      'hero.cta.contact': 'Write to me',

      'section.projects.label': 'Selected projects',
      'section.projects.h2': 'Web design.',

      'card.mapa.badge': 'Personal project',
      'card.mapa.overlay': 'Open project ↗',
      'card.mapa.desc': 'What if a map could hold stories? I designed this website dedicated to Anna Šenšelová and the Lipa Association as a living archive: an interactive map gathering memories of ancestors from visitors across Slovakia. Cultural heritage that won\'t be lost.',
      'card.mapa.link': 'View project',

      'card.lumenglass.badge': 'Client',
      'card.lumenglass.overlay': 'Open project ↗',
      'card.lumenglass.desc': 'A glass company deserves a website that reflects the precision of their craft. A client project built on WordPress — clean, clear and trustworthy design that turns visitors into customers.',
      'card.lumenglass.link': 'View project',
      'card.cs.link': 'Read case study',

      'projects.callout.heading': 'Every website can be closed. The right one makes you want to stay.',
      'projects.callout.body': 'Interactivity isn\'t effect for effect\'s sake — it\'s the difference between a page a visitor scrolls past and one they stay on. Elements that respond, surprise and invite further turn a passive reader into someone who remembers you — and recommends you.',
      'projects.callout.cta': 'Write to me',

      'section.about.label': 'About me',
      'section.about.h2': 'This is me.',
      'about.p1': 'I don\'t choose between art and design. I do both — and that\'s what makes my work different.',
      'about.p2': 'Years of working with traditional art techniques such as watercolour, papier-mâché and embroidery gave me something I couldn\'t have learned in design courses — the sense to see, the sense to feel, the sense of working with composition, colour and rhythm.',
      'about.p3': 'When I discovered web design, I was drawn to the possibility of bringing that same approach into the digital space. I combined my aesthetic sensibility, creativity and knowledge from my university studies in marketing communication and advertising (UKF Nitra) and discovered that a beautiful and functional website are not opposites — just two sides of the same coin.',
      'about.p4': 'Today I design and build websites where beauty doesn\'t take space from function. And where function doesn\'t suppress style.',
      'about.instagram': 'My older paper artwork lives on Instagram',
      'about.skill.web': 'Web Design',
      'about.skill.watercolour': 'Watercolour',
      'about.skill.embroidery': 'Embroidery',

      'section.services.label': 'Services',
      'section.services.h2': 'How I can help.',
      'services.intro': 'Every project is a different world — different audience, different tone, different technical requirements. That\'s what I enjoy. Here\'s what I can offer today.',

      'service1.title': 'Custom presentation<br>websites.',
      'service1.desc': 'Static HTML websites or WordPress — whichever makes sense. Custom design, no templates. Fast, mobile-ready, prepared for Google.',
      'service1.target': '<strong>For whom:</strong> small businesses, craftspeople, studios, boutiques, freelancers.',

      'service2.title': 'Storytelling &amp;<br>brand websites.',
      'service2.desc': 'Websites for brands with a story. Galleries, timelines, interactive maps, biographies, archives. Custom typography, privacy-first, no tracking scripts.',
      'service2.target': '<strong>For whom:</strong> cultural projects, non-profits, museums, authors, artists, family businesses.',

      'service3.title': 'WordPress websites<br>made to measure.',
      'service3.desc': 'Commercial WordPress websites designed for your specific industry. Multi-page websites with product categories, SEO optimisation and performance tuning.',
      'service3.target': '<strong>For whom:</strong> craftspeople, glasswork and carpentry companies, builders, interior studios.',

      'service4.title': 'Web applications<br>&amp; directories.',
      'service4.desc': 'Directories with filtering and reviews, membership websites, freemium platforms, multi-step forms, AI tools — delivered on modern platforms.',
      'service4.target': '<strong>For whom:</strong> communities, niche platforms, startups, B2B portals.',

      'service5.title': 'UI / UX design<br>&amp; redesign.',
      'service5.desc': 'Interface design that\'s easy and enjoyable to use. Redesign of existing websites — from audit to new look. Wireframes, prototypes, design systems.',
      'service5.target': '<strong>For whom:</strong> companies with an existing website that\'s falling behind. Startups before launch.',

      'service6.title': 'Graphics, print &amp;<br>custom illustrations.',
      'service6.desc': 'Labels, packaging, business cards, posters and other print materials designed with the same care as a website. And when something truly unique is needed — hand-painted watercolour illustrations or digital artwork made directly for your project.',
      'service6.target': '<strong>For whom:</strong> small brands, wineries, cafés, cosmetics, fashion projects and anyone who wants graphics with soul.',

      'services.note': 'I prepare pricing individually based on the scope and nature of the project. Write me a few words about what you\'re planning — I\'ll send a no-obligation quote within 48 hours.',
      'services.note.cta': 'Write to me →',

      'skills.h2': 'What I\'ve proven in practice.',
      'skills.tagline': 'Things I\'ve actually tested — on real projects, for real people.',

      'skills.col1.title': 'Design & Web',
      'skills.col1.li1': 'Websites designed to measure — no templates',
      'skills.col1.li2': 'Custom typography and visual language',
      'skills.col1.li3': 'Animations, scroll effects, interactivity',
      'skills.col1.li4': 'Handmade decorative elements (watercolours, illustrations)',
      'skills.col1.li5': 'Works on mobile, tablet and desktop',

      'skills.col2.title': 'WordPress & CMS',
      'skills.col2.li1': 'WordPress with Elementor — custom-built',
      'skills.col2.li2': 'Basic SEO — so Google can find you',
      'skills.col2.li3': 'Speed and image optimisation',

      'skills.col3.title': 'Brand & Visual',
      'skills.col3.li1': 'Visual identity — logo, colours, typeface',
      'skills.col3.li2': 'Watercolour illustrations for print and web',
      'skills.col3.li3': 'Folk and natural motifs in a modern treatment',

      'diff.h2': 'Why choose me.',
      'diff.card1.title': 'Design and web —<br>one person.',
      'diff.card1.desc': 'You don\'t need to coordinate design and technical delivery separately. The whole website — from look to launch — is my responsibility.',
      'diff.card2.title': 'Every challenge<br>is welcome.',
      'diff.card2.desc': 'Historical theme, modern minimalism or client presentation — I\'m not afraid of genres. Every project gets a tailored approach.',
      'diff.card3.title': 'Artistic eye,<br>technical precision.',
      'diff.card3.desc': 'My lifelong passion for art directly translates into how I see composition, colour and rhythm. You can feel it in my finished websites.',
      'diff.card4.title': 'Privacy-first<br>by default.',
      'diff.card4.desc': 'No tracking scripts, no third-party cookies, self-hosted fonts. GDPR-friendly without compromise.',

      'process.h2': 'How we work together.',
      'process.step1.title': 'Brief & proposal',
      'process.step1.desc': 'We go through your goals, audience, references and scope together. You get a quote within 5 days.',
      'process.step2.title': 'Design & approval',
      'process.step2.desc': 'I prepare a visual proposal for the key pages. We iterate until approval.',
      'process.step3.title': 'Development',
      'process.step3.desc': 'I deliver the website, optimise speed, add content and test on all devices.',
      'process.step4.title': 'Launch & handover',
      'process.step4.desc': 'The website goes live. I\'ll show you how to manage it yourself. One month of free support after launch.',

      'section.atelier.label': 'Samples of my work',
      'section.atelier.h2': 'Work.',
      'section.atelier.tagline': 'My creative world, where digital and traditional art meet — and which drives my web design solutions.',

      'atelier.item1.tag': 'Watercolour',
      'atelier.item1.title': 'Portrait with leaves',
      'atelier.item2.tag': 'Digital illustration',
      'atelier.item2.title': 'Portrait',
      'atelier.item3.tag': 'Watercolour',
      'atelier.item3.title': 'Pomegranate',
      'atelier.item4.tag': 'Embroidery',
      'atelier.item4.title': 'Woman with arrow',
      'atelier.item5.tag': 'Papier-mâché',
      'atelier.item5.title': 'Pastries',
      'atelier.item6.tag': 'Graphic design',
      'atelier.item6.title': 'Wine label',

      'section.contact.label': 'Contact',
      'contact.heading.left': 'Let\'s start',
      'contact.heading.right': 'working together.',
      'contact.p1': 'Have a project where every detail matters? Write to me. I\'d be happy to hear what you need and tell you honestly how I can help.',
      'contact.p2': 'I\'ll reply within 48 hours.',

      'form.name': 'Your name *',
      'form.email': 'E-mail *',
      'form.type.label': 'What\'s it about?',
      'form.type.new': 'New website from scratch',
      'form.type.redesign': 'Redesign of existing website',
      'form.type.other': 'Something else',
      'form.message': 'Message *',
      'form.submit': 'Send message →',
      'form.success': '✓ Message sent. I\'ll be in touch within 48 hours.',

      'footer.copy': '© 2026 Anna Lockwoodová · All rights reserved',
      'footer.made': 'Made with love',

      'lb.close': 'Close',
      'lb.prev': 'Previous image',
      'lb.next': 'Next image',
    }
  };

  function applyLang(lang) {
    const t = translations[lang];
    if (!t) return;

    // innerHTML — pre prvky obsahujúce HTML tagy (br, strong, &amp; atď.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // textContent — pre čistý text bez HTML
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // aria-label
    document.querySelectorAll('[data-i18n-label]').forEach(el => {
      const key = el.dataset.i18nLabel;
      if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
    });

    // radio value — pre form submission
    document.querySelectorAll('[data-i18n-value]').forEach(el => {
      const key = el.dataset.i18nValue;
      if (t[key] !== undefined) el.value = t[key];
    });

    // Marquee — oba spany naraz
    if (t['marquee.text']) {
      document.querySelectorAll('.marquee__text').forEach(el => {
        el.innerHTML = t['marquee.text'];
      });
    }

    // Page meta
    if (t['page.title']) document.title = t['page.title'];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && t['page.description']) metaDesc.setAttribute('content', t['page.description']);

    document.documentElement.lang = lang;
  }

  window.setLang = function (lang) {
    document.querySelectorAll('.nav__lang-btn').forEach(btn => {
      const isActive = btn.getAttribute('lang') === lang;
      btn.classList.toggle('nav__lang-btn--active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    applyLang(lang);
    localStorage.setItem('lang', lang);
  };

  // Obnov jazyk pri načítaní stránky
  document.addEventListener('DOMContentLoaded', function () {
    const saved = localStorage.getItem('lang');
    if (saved && saved !== 'sk') {
      setLang(saved);
    }
  });

})();
