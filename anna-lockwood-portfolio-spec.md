# Anna Lockwoodová — Portfolio Web: Kompletná Špecifikácia
> Verzia 1.0 | Pripravené ako podklad pre vývoj v HTML + CSS + JavaScript + GitHub Pages

---

## 0. PRÍSTUP K PRÁCI — ZÁVÄZNÉ PRAVIDLO

> **Počas celej realizácie tohto webu — od prvej čiary v CSS až po posledný commit — musíš pracovať ako senior UI/UX web designer, ktorý myslí out of the box a má silné umelecké cítenie.**

Nie ako kódič, ktorý plní zadanie po bodoch. Nie ako generátor šablón. Ako niekto, kto:

- **Vidí kompozíciu skôr než kód.** Každá sekcia má rytmus, váhu, dýchanie. Whitespace je dizajn, nie prázdne miesto.
- **Myslí v typografických hierarchiách.** Veľkosti, váhy, letter-spacing a riadkovanie sú nástroje, nie default hodnoty. Special Elite, Cormorant Garamond a DM Sans musia spolu žiť ako trio — nie sa prekrikovať.
- **Pracuje s farbou ako maliarka.** Modrá paleta nie je rovnaká modrá v hero, v karte a v footeri. Tóny sa volia podľa svetla okolo nich. Červená sa použije max. 2× — ako akcent, ktorý dýchne, nie kričí.
- **Hľadá out-of-the-box riešenia.** Tam, kde iný developer dá `box-shadow: 0 4px 12px rgba(0,0,0,0.1)`, ty hľadáš, či by tam nebola jemná akvarelová tieňová textúra. Tam, kde iný dá `border-radius: 8px`, ty zvažuješ, či by tvar nemohol kresliť ručná čiara.
- **Animácie nie sú ozdoba — sú reč.** Typewriter efekt, parallax listov, marquee, custom kurzor — každá animácia má dôvod. Ak nemá, vyhoď ju.
- **Dekoratívny systém akvarelových listov je posvätný.** Nie clipart. Fragmenty sa umiestňujú s citom — ako podpis maliarky na obraze. Nikdy symetricky, nikdy zámerne. Vždy ako keby tam vyrástli.
- **Detaily robia rozdiel.** Hover stavy, focus stavy, prázdne stavy, error stavy, loading stavy. Mobilná verzia nie je „zmenšenina" — je to vlastná kompozícia. Tlačidlo má 4 stavy, nie 1.
- **Web je živý objekt, nie dokument.** Reaguje na pohyb, scroll, čas, preferencie používateľa (`prefers-reduced-motion`, `prefers-color-scheme` ak má zmysel). Nikdy nie je statický PDF v prehliadači.
- **Estetika a funkčnosť nie sú protiklady.** Krásny prvok, ktorý nie je použiteľný, je neúspech. Použiteľný prvok, ktorý je škaredý, je tiež neúspech. Cieľ je oboje — vždy.
- **Pýtaš sa „prečo" pri každom prvku.** Prečo je to tu? Prečo táto veľkosť? Prečo táto farba? Ak odpoveď je „lebo to tak robia ostatní", skús niečo iné.

**Tento web je manifest.** Nie portfólio v zmysle „tu sú moje práce". Je to dôkaz, že krásny web a funkčný web sú jedna a tá istá vec — a že existuje niekto, kto vie oboje urobiť rukou jednej osoby.

Ak v ktoromkoľvek momente realizácie cítiš, že riešenie je „dosť dobré" — nie je. Choď ešte o krok ďalej.

---

## 1. IDENTITA & BRANDING

### Meno
**Anna Lockwoodová**
Webová dizajnérka & umelkyňa

### Hlavný slogan (Hero tagline)
```
Tvorím weby tak ako maľujem —
zámer, detail, cit.
```
*Animácia: typewriter efekt, píše sa slovo po slove, pauza pred každou čiarkou*

### Podtitulok (pod tagline)
```
Nikdy som umenie nevymenila za dizajn. Robím oboje —
a práve to robí rozdiel.
```

### Jazyková verzia
- Primárny jazyk: **slovenčina**
- Sekundárny: **angličtina** (toggle v navigácii: SK / EN)

---

## 2. FAREBNÁ PALETA

| Názov | HEX | Použitie |
|---|---|---|
| Čistá biela | `#FFFFFF` | Primárne pozadie |
| Off-white | `#F8F7F4` | Sekcie, karty |
| Modrá — hlavná | `#3A5FA0` | Nadpisy, akcenty, odkazy |
| Modrá — svetlá | `#7BA7D4` | Hover stavy, dekorácie |
| Modrá — najsvetlejšia | `#D6E6F5` | Jemné pozadie sekcií |
| Atramentová | `#1A2F52` | Telo textu, footer |
| Červená — doplnková | `#C0392B` | **Výnimočne** — max. 2× na celom webe (napr. jeden CTA button, jeden dekoratívny prvok) |
| Sivá — text | `#6B7280` | Popis, metadata, dátumy |

> ⚠️ **Pravidlo červenej:** Červená sa používa absolútne minimálne — maximálne na dvoch miestach celého webu. Jej sila spočíva v vzácnosti.

---

## 3. TYPOGRAFIA

### Nadpisy (H1, H2)
**Font: `Special Elite`** (Google Fonts)
- Charakter: typewriter, vintage, umelecký — evokuje písací stroj aj rukou písané poznámky
- Váha: 400 (Regular) — font má vlastnú expresiu, nepotrebuje bold
- Farba: `#1A2F52`

### Podnadpisy (H3, H4)
**Font: `Cormorant Garamond`** — Italic 300
- Charakter: elegantný, knižný, umelecký
- Používa sa na citáty, popis projektov, sekciu About

### Telo textu
**Font: `DM Sans`** — 400 Regular
- Čistý, moderný, veľmi čitateľný
- Veľkosť: 16px / line-height: 1.75
- Farba: `#1A2F52`

### Metadata, labely, navigácia
**Font: `DM Sans`** — 300 Light, letter-spacing: 0.12em, uppercase
- Veľkosť: 11–13px

### Importy (Google Fonts)
```html
<link href="https://fonts.googleapis.com/css2?family=Special+Elite&family=Cormorant+Garamond:ital,wght@1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```

---

## 4. DEKORATÍVNY SYSTÉM — AKVAREL ILUSTRÁCIA LISTOV

Vychádza z dodanej akvarely ilustrácie modrých listov (čierné pozadie — pri použití na webe sa vyizolujú jednotlivé fragmenty na **bielom/transparentnom pozadí**).

### Ako pracovať s ilustráciou
1. Ilustrácia sa **nikdy nepoužíva celá** — iba vybrané fragmenty (vetvy, skupiny 3–5 listov, jednotlivé lístky)
2. Vždy na **bielom alebo off-white pozadí** — nikdy na tmavom
3. Fragmenty môžu byť:
   - **Polo-priehľadné** (`opacity: 0.35–0.6`) ako jemný dekoratívny podklad
   - **Plná opacity** ako výraznejší dekoratívny prvok (iba 1–2× na stránke)
4. Pozície: rohy sekcií, okraje kariet, prechodové zóny medzi sekciami

### Konkrétne použitia listov na webe
| Miesto | Fragment | Opacity | Pozícia |
|---|---|---|---|
| Hero sekcia | Veľká vetva vľavo dole | 0.40 | `position: absolute, bottom-left` |
| About sekcia | Skupina 4–5 lístkov | 0.35 | `top-right corner` |
| Portfolio grid | Malý lístok | 0.30 | Nad kartou projektu |
| Footer | Roztiahnutá vetva | 0.25 | Cez celú šírku, bottom |
| Oddeľovač sekcií | Tenká vetva horizontálne | 0.50 | Medzi sekciami |

### Technická implementácia
```css
.leaf-decor {
  position: absolute;
  pointer-events: none;
  user-select: none;
  z-index: 0;
}
.leaf-decor--faint { opacity: 0.35; }
.leaf-decor--medium { opacity: 0.50; }
```

---

## 5. ANIMÁCIE & INTERAKCIE

Portfolio má bohaté animácie — každý prvok má dôvod na pohyb.

### 5.1 Globálne animačné pravidlá
- Všetky animácie rešpektujú `prefers-reduced-motion: reduce`
- Easing: `cubic-bezier(0.25, 0.1, 0.25, 1)` pre väčšinu, `cubic-bezier(0.34, 1.56, 0.64, 1)` pre "spring" efekty
- Farba prechodov: vždy plynulá, nikdy trhavá

### 5.2 Hero sekcia
```
ANIMÁCIA: Typewriter efekt na slogane
- Text sa píše znak po znaku: "Tvorím weby tak ako maľujem —"
- Pauza 600ms
- Ďalší riadok: "zámer, detail, cit."
- Blikajúci kurzor "|" na konci (3× blikne, potom zmizne)
- Trvanie celej sekvencie: ~3s
- Font: Special Elite 48–64px
```

```
ANIMÁCIA: Fade-in mena
- "Anna Lockwoodová" sa objaví ako prvé (opacity 0 → 1, translateY 20px → 0)
- Trvanie: 800ms, delay: 200ms
```

```
ANIMÁCIA: Leaf parallax v pozadí
- Fragment listov v ľavom dolnom rohu sa pomaly posúva pri scrollovaní
- Rate: scrollY * 0.15 (jemný efekt, nesmie byť rušivý)
```

### 5.3 Navigácia
```
- Sticky nav: na scroll sa objaví jemné pozadie (backdrop-filter: blur(12px), bg: rgba(255,255,255,0.85))
- Hover na nav linkoch: podčiarknutie sa kreslí sprava doľava (CSS clip-path animácia)
- Aktívna sekcia: modrá bodka (•) pred textom linku
```

### 5.4 Pohyblivý text (marquee)
```
SEKCIA: Medzi Hero a Portfolio
TEXT: "Webový dizajn · UI & UX · Akvarel · Papier-mâché · Výšivka · Tvorba s citom ·"
- Text sa plynulo pohybuje zľava doprava, nekonečná slučka
- Rýchlosť: 40s pre jeden cyklus (pomalé, čitateľné)
- Font: Special Elite, veľkosť 13px, uppercase, letter-spacing: 0.2em
- Farba: #3A5FA0, pozadie: #F8F7F4
- Na hover sa pohyb zastaví (animation-play-state: paused)
```

### 5.5 Scroll-triggered animácie
```css
/* Každý content blok pri vstupe do viewportu */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
/* Implementácia cez IntersectionObserver */
```

```
Staggered efekt v portfolio grid:
- Karty projektov sa objavia jedna po druhej (delay: 0ms, 120ms, 240ms)
```

### 5.6 Kurzor (custom cursor)
```
Na desktope: vlastný kurzor
- Základný stav: malý modrý krúžok (12px, #3A5FA0, border: 1.5px solid)
- Hover na linkoch/kartách: kruž sa zväčší (28px), farba sa zmení na #7BA7D4
- Hover na obrázkoch: text "Zobraziť" sa objaví vnútri kurzora
- Animácia: cubic-bezier spring efekt, mierne zaostáva za myšou (lag: 80ms)
```

### 5.7 Projekt karty — hover
```
- Obrázok projektu: scale(1.04) + jemný overlay s názvom projektu
- Karta: translateY(-6px), box-shadow sa zosilní
- Trvanie: 350ms
```

### 5.8 Formulár kontaktu
```
- Inputy: pri focuse sa label animuje hore (floating label)
- Submit button: po kliknutí → loading state (bodky) → "Správa odoslaná ✓"
```

---

## 6. ŠTRUKTÚRA WEBU

### Stránky
```
/ ......................... Hlavná stránka (one-page scroll + sekcie)
/projekty/expatease ........ Detail projektu ExpatEase
/projekty/mapa-spomienok ... Detail projektu Mapa Spomienok
/projekty/lumenglass ....... Detail projektu LumenGlass
/atelier ................... Sekcia tradičného umenia (samostatná stránka)
```

---

## 7. SEKCIE HLAVNEJ STRÁNKY

### 7.1 NAVIGÁCIA

```
[Logo: "AL" — monogram, Special Elite font]    [Projekty] [O mne] [Ateliér] [Kontakt]    [SK / EN]
```

- Logo: monogram "AL" v Special Elite, modrá farba, subtle hover efekt
- Navigácia: DM Sans 300, uppercase, letter-spacing
- Mobilné menu: hamburger → fullscreen overlay s animovaným zobrazením linkov

---

### 7.2 HERO SEKCIA

**Layout:** Asymetrický — text zaberá 60% šírky, pravá strana voľná s dekoratívnym leaf fragmentom

**Obsah (v poradí animácie):**
```
[1] Anna Lockwoodová          ← Special Elite, 18px, modrá, fade-in
[2] ─────────────────         ← tenká linka, 60px, kreslí sa zľava
[3] Tvorím weby tak           ← Special Elite, 56px (desktop) / 36px (mobil)
    ako maľujem —             ← typewriter efekt
    zámer, detail, cit.       ← typewriter efekt s pauzou
[4] Webová dizajnérka &       ← DM Sans 300, 18px, #6B7280, fade-in
    umelkyňa z Bratislavy.
[5] [Pozrieť projekty ↓]      ← CTA button (modrý fill)
    [Napísať mi]              ← secondary button (outline)
```

**Pozadie:**
- Čisto biele
- Fragment listov, position: absolute, bottom-left, opacity: 0.40, parallax pri scrolle

---

### 7.3 MARQUEE (pohyblivý text — oddeľovač)

```
· Webový dizajn · UI & UX Design · Akvarel · Papier-mâché · Výšivka · Tvorba s citom · Bratislava ·
```
- Pozadie: `#F8F7F4`
- Výška: 48px
- Na hover zastaví

---

### 7.4 PORTFOLIO SEKCIA

**Nadpis sekcie:**
```
Vybrané projekty.
```
*(Special Elite, 42px, #1A2F52)*

**Grid: 3 karty (desktop: 3 stĺpce, tablet: 2, mobil: 1)**

---

#### KARTA 1 — ExpatEase Slovakia

```
[OBRÁZOK / SCREENSHOT — 16:10 ratio]
────────────────────────────────
Kategória:   · Web dizajn · UI/UX · Cloudflare · Supabase
Rok:         2025
────────────────────────────────
ExpatEase Slovakia

Anglicky hovoriaci lekár, právnik alebo elektrikár
v Bratislave? ExpatEase ich nájde za vás —
a ešte preloží každý slovenský formulár.

Plnohodnotná platforma, ktorú som navrhla
aj technicky realizovala od nuly: adresár
500+ overených odborníkov, AI prekladač
úradných dokumentov a komunitný blog
pre expat komunitu.

[Zobraziť projekt →]
```

**Karta — technický detail:**
- Obrázok: hover → scale(1.04) + overlay s textom "Pozrieť viac"
- Tag "Osobný projekt" — malý badge vpravo hore na obrázku

---

#### KARTA 2 — Mapa Spomienok

```
[OBRÁZOK / SCREENSHOT — 16:10 ratio]
────────────────────────────────
Kategória:   · Web dizajn · UI/UX · GitHub Pages · Storytelling
Rok:         2025
────────────────────────────────
Mapa Spomienok

Čo ak by mapa mohla uchovávať príbehy?

Web venovaný Anne Šenšelovej a spolku Lipa
som navrhla ako živý archív: interaktívna mapa
zbiera spomienky na predkov od návštevníkov
z celého Slovenska. Kultúrne dedičstvo,
ktoré sa nestratí.

[Zobraziť projekt →]
```

**Karta — špeciálny detail:**
- Výraznejší, poetickejší tón — tento projekt je osobný
- Badge: "Osobný projekt"

---

#### KARTA 3 — LumenGlass

```
[OBRÁZOK / SCREENSHOT — 16:10 ratio]
────────────────────────────────
Kategória:   · Web dizajn · WordPress · Klientsky projekt
Rok:         2025
────────────────────────────────
LumenGlass

Sklárska firma si zaslúži web,
ktorý odráža precíznosť jej remesla.

Klientsky projekt realizovaný na WordPresse —
čistý, prehľadný a dôveryhodný dizajn,
ktorý premieňa návštevníkov na zákazníkov.

[Zobraziť projekt →]          [Čoskoro online]
```

**Karta — špeciálny detail:**
- Badge "Čoskoro" v červenej (červená sa tu použije ako jedna z dvoch výnimiek)
- "Čoskoro online" nahradia živým linkom po spustení

---

### 7.5 O MNE SEKCIA

**Layout:** 2 stĺpce — text vľavo (60%), foto vpravo (40%)
*Fragment listov dekoratívne v pravom hornom rohu tejto sekcie*

**Nadpis:**
```
O mne.
```

**Text:**

```
Nikdy som si nevybrala medzi umením a dizajnom.
Robím oboje — a práve to robí moju prácu inak.

Roky práce s akvare­lom, papier-mâché a výšivkou
ma naučili niečo, čo sa na dizajnérskych kurzoch
neučí: ako vidieť. Ako pracovať s kompozíciou,
farbou a rytmom nie ako s pravidlami,
ale ako s citom.

Keď som objavila webový dizajn, zaujala ma
možnosť preniesť ten istý prístup do digitálneho
priestoru. Zistila som, že krásny web a funkčný
web nie sú protiklady — sú to dve strany
toho istého.

Dnes navrhujem a tvorím weby, kde estetika
neoberá funkčnosť o priestor. A kde funkčnosť
nepotlačí krásu.
```

**Skills / oblasť práce (vizuálne ako jemné tagy):**
```
[ Webový dizajn ]  [ UI & UX ]  [ Akvarel ]  [ Papier-mâché ]  [ Výšivka ]
```

**Foto placeholder:**
```html
<!-- Fotografia Anny — profesionálna, no priateľská -->
<!-- alt: "Anna Lockwoodová — webová dizajnérka a umelkyňa" -->
```

---

### 7.6 SLUŽBY SEKCIA

**Nadpis:**
```
Ako môžem pomôcť.
```

**Úvodný odstavec (Cormorant Garamond Italic, pod nadpisom):**
```
Tri projekty, tri svety — kultúrne dedičstvo, expat platforma
a remeselná firma. Každý si vyžiadal iný prístup, a každý
ma niečo naučil. Tu je to, čo dnes viem ponúknuť.
```

**6 kariet služieb (grid: desktop 3×2, tablet 2×3, mobil 1×6):**

---

#### KARTA 1 — Prezentačné weby na mieru

```
[ikona / drobný leaf ornament]

Prezentačné weby
na mieru.

Statické HTML weby alebo WordPress —
podľa toho, čo dáva zmysel.
Vlastný dizajn, žiadne šablóny.
Rýchle, mobilné, pripravené pre Google.

Pre koho:
malé firmy, remeselníci, ateliéry,
butiky, freelanceri.
```

---

#### KARTA 2 — Storytelling & značkové weby

```
[ikona / drobný leaf ornament]

Storytelling &
značkové weby.

Weby pre značky, ktoré majú príbeh.
Galérie, časové osi, interaktívne mapy,
biografie, archívy. Vlastná typografia,
privacy-first, bez tracking skriptov.

Pre koho:
kultúrne projekty, neziskovky, múzeá,
autori, umelci, rodinné firmy.
```

---

#### KARTA 3 — WordPress weby & Elementor

```
[ikona / drobný leaf ornament]

WordPress weby
a custom Elementor.

Komerčné WordPress weby s vlastnými
Elementor widgetmi. Multi-page weby
s produktovými kategóriami,
SEO optimalizáciou a performance
tuningom (preload, preconnect, WebP).

Pre koho:
remeselníci, sklárske a stolárske firmy,
stavbári, interiérové štúdiá, kuchynské
štúdiá, lokálne biznisy.
```

---

#### KARTA 4 — Webové aplikácie & adresáre

```
[ikona / drobný leaf ornament]

Webové aplikácie
a adresáre.

Adresáre s filtrovaním a recenziami,
membership weby, freemium platformy,
multi-step formuláre, AI nástroje
(prekladače, sumarizátory). Cloudflare
Pages + Supabase backend.

Pre koho:
komunity, oborové platformy, startupy,
B2B portály.
```

---

#### KARTA 5 — UI / UX dizajn & redesign

```
[ikona / drobný leaf ornament]

UI / UX dizajn
& redesign.

Návrh rozhraní, ktoré sa používajú
ľahko a s radosťou. Redesign existujúcich
webov — od auditu po nový vzhľad.
Wireframy, prototypy, dizajn systémy.

Pre koho:
firmy s existujúcim webom, ktorý
už nestíha. Startupy pred launchom.
```

---

#### KARTA 6 — SEO, performance & údržba

```
[ikona / drobný leaf ornament]

SEO, performance
& údržba.

Optimalizácia rýchlosti (preload,
preconnect, WebP, font tuning),
SEO základy (canonical, OG tags,
schema.org), Google Business profil.
Mesačná údržba a aktualizácie.

Pre koho:
firmy, ktoré už web majú, ale nie sú
spokojní s rýchlosťou alebo viditeľnosťou
v Google.
```

---

**Poznámka pod kartami služieb (Cormorant Garamond Italic, 16px, centered, #6B7280):**
```
Cenu pripravujem individuálne podľa rozsahu a charakteru projektu.
Napíšte mi pár slov o tom, čo plánujete — pošlem nezáväznú ponuku do 48 hodín.

[Napísať mi →]
```

---

### 7.6.A ČO KONKRÉTNE OVLÁDAM (technické zručnosti)

*Sekcia pre dôveru — drobnejším písmom pod kartami služieb. Layout: 3 stĺpce, jemné pozadie `#F8F7F4`, font DM Sans 300, 14px.*

**Nadpis (Special Elite, 28px):**
```
Čo mám overené v praxi.
```

**Podtitulok (Cormorant Garamond Italic, #6B7280):**
```
Nie zoznam buzzwordov — len to, čo som už reálne dodala.
```

**3 stĺpce:**

```
┌─────────────────────────┐  ┌─────────────────────────┐  ┌─────────────────────────┐
│ DIZAJN & FRONTEND       │  │ WORDPRESS & CMS         │  │ APLIKÁCIE & BACKEND     │
│                         │  │                         │  │                         │
│ • HTML5, CSS3, vanilla  │  │ • WordPress + Elementor │  │ • Cloudflare Pages      │
│   JavaScript            │  │ • Vlastné Elementor     │  │ • Supabase (DB, auth)   │
│ • Custom typografia     │  │   widgety (HTML+CSS)    │  │ • AI integrácie         │
│   a font tuning         │  │ • Vlastné WP pluginy    │  │   (preklad dokumentov,  │
│ • Akvarelové a ručné    │  │   (PHP) — zápis dát,    │  │   formulárové wizardy)  │
│   dekoratívne systémy   │  │   manipulácia Elementor │  │ • Multi-tier predplatné │
│ • Animácie, parallax,   │  │   JSON, cache, backups  │  │   (freemium model)      │
│   IntersectionObserver  │  │ • Migrácie a redesign   │  │ • Adresáre s filtrovaním│
│ • Custom kurzory,       │  │   existujúcich WP webov │  │   a recenziami          │
│   typewriter efekty,    │  │ • SEO meta + canonical  │  │ • Multi-step formuláre  │
│   marquee, scroll-      │  │   + OG tagy + schema    │  │ • Multi-jazyčnosť       │
│   triggered reveals     │  │ • Performance tuning    │  │   (SK / EN toggle)      │
│ • Prístupnosť (a11y),   │  │   (preload, preconnect, │  │ • GitHub Pages,         │
│   prefers-reduced-      │  │   WebP konverzie,       │  │   nasadenie a CI        │
│   motion, kontrast      │  │   font deferring)       │  │                         │
│ • Plne responzívne      │  │ • Backup a recovery     │  │                         │
│   (clamp, fluid grids)  │  │   stratégie             │  │                         │
└─────────────────────────┘  └─────────────────────────┘  └─────────────────────────┘
```

---

### 7.6.B PREČO JA — DIFERENCIÁTORY

*Sekcia hneď pod predchádzajúcou. 4 krátke „prečo body" — horizontálne, ikony nepovinné.*

**Nadpis (Special Elite, 32px):**
```
Prečo si vybrať mňa.
```

**4 dôvody (DM Sans 400, 16px, krátky text pod každým):**

```
┌────────────────────────────┐  ┌────────────────────────────┐
│ 01.                        │  │ 02.                        │
│ Dizajn aj kód —            │  │ Tri rozdielne svety,       │
│ jedna osoba.               │  │ jedna ruka.                │
│                            │  │                            │
│ Nemusíte hľadať dizajnérku │  │ Statický web pre kultúrnu  │
│ a developera zvlášť.       │  │ pamiatku, freemium         │
│ Robím oboje — a viem, kde  │  │ platforma pre expatov,     │
│ sa stretávajú.             │  │ WordPress pre sklársku     │
│                            │  │ firmu. Ten istý dôraz      │
│                            │  │ na detail.                 │
└────────────────────────────┘  └────────────────────────────┘

┌────────────────────────────┐  ┌────────────────────────────┐
│ 03.                        │  │ 04.                        │
│ Umelecké oko,              │  │ Privacy-first              │
│ technická presnosť.        │  │ ako default.               │
│                            │  │                            │
│ Roky práce s akvarelom,    │  │ Žiadne tracking skripty,   │
│ papier-mâché a výšivkou —  │  │ žiadne cookies tretích     │
│ nie ako koníček, ale       │  │ strán, vlastné fonty.      │
│ ako spôsob, akým vidím     │  │ GDPR-friendly bez          │
│ kompozíciu, farbu          │  │ kompromisov.               │
│ a rytmus.                  │  │                            │
└────────────────────────────┘  └────────────────────────────┘
```

---

### 7.6.C PROCES SPOLUPRÁCE

*Krátka sekcia — ako prebieha zákazka. Layout: horizontálna časová os, 4 kroky.*

**Nadpis (Special Elite, 32px):**
```
Ako pracujeme spolu.
```

**4 kroky (číslo, názov, krátky popis):**

```
01.                   02.                   03.                   04.
Brief & návrh         Dizajn & schválenie   Realizácia            Spustenie & odovzdanie
─────────────         ──────────────────    ──────────────        ──────────────────────
Prejdeme spolu        Pripravím vizuálny    Naprogramujem web,    Web ide naživo. Naučím
váš zámer, cieľovku,  návrh kľúčových       optimalizujem         vás, ako si ho viete
referencie a rozsah.  stránok. Iterujeme    rýchlosť, doplníme    sami spravovať. Mesiac
Dostanete ponuku      do schválenia.        obsah a otestujeme    bezplatnej podpory
do 5 dní.                                   na všetkých zariadeniach. po spustení.
```

---

### 7.7 ATELIÉR — PREVIEW SEKCIA

*(Plná stránka je na /atelier — tu je len preview na hlavnej)*

**Nadpis:**
```
Ateliér.
```

**Podtitulok (Cormorant Garamond Italic):**
```
Umenie, z ktorého vychádza moja digitálna tvorba.
```

**Layout:** Masonry / nepravidelná galéria — 4–6 thumbnailov
*(akvarel, papier-mâché, výšivka — placeholder pre reálne fotografie)*

**CTA:**
```
[Vstúpiť do ateliéru →]
```

---

### 7.8 REFERENCIE SEKCIA

**Nadpis:**
```
Čo hovoria klienti.
```

**3 placeholder karty:**

```
┌──────────────────────────────────────────┐
│ "                                        │
│  [Referencia bude doplnená]              │
│                                          │
│  — Meno Priezvisko, pozícia              │
│    Firma / Projekt                       │
└──────────────────────────────────────────┘
```

*Poznámka: Naplniť reálnymi referenciami po získaní spätnej väzby od klientov.*

---

### 7.9 KONTAKT SEKCIA

**Layout:** 2 stĺpce — text vľavo, formulár vpravo
*Fragment listov dekoratívne vľavo dole v tejto sekcii*

**Nadpis:**
```
Začnime spoluprácu.
```

**Text vľavo:**
```
Máte projekt, kde záleží na každom detaile?
Napíšte mi. Rada si vypočujem, čo potrebujete,
a poviem vám úprimne, ako vám viem pomôcť.

Odpoviem do 48 hodín.

[placeholder@email.com]
```

**Formulár vpravo:**
```
Vaše meno *
[                    ]

E-mail *
[                    ]

O čo ide?
( ) Nový web od nuly
( ) Redesign existujúceho webu
( ) UI/UX konzultácia
( ) Niečo iné

Správa *
[                              ]
[                              ]
[                              ]

[Odoslať správu →]   ← modrý fill button
```

**Po odoslaní:**
```
✓ Správa odoslaná. Ozvem sa do 48 hodín.
```

---

### 7.10 FOOTER

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [Leaf vetva — jemná, opacity 0.25, cez celú šírku]        │
│                                                             │
│  AL                                                         │
│  Anna Lockwoodová                                           │
│  Webová dizajnérka & umelkyňa                              │
│                                                             │
│  [Instagram ↗]  [Behance ↗]  [LinkedIn ↗]                  │
│  ← placeholdery, doplniť po vytvorení profilov             │
│                                                             │
│  Projekty    O mne    Ateliér    Kontakt                    │
│                                                             │
│  ─────────────────────────────────────────────────────     │
│  © 2025 Anna Lockwoodová · Všetky práva vyhradené          │
│                                 Vyrobené s citom ♡         │
└─────────────────────────────────────────────────────────────┘
```

---

## 8. DETAIL STRÁNKY PROJEKTU

*Štruktúra je rovnaká pre všetky 3 projekty, obsah sa líši.*

```
[← Späť na projekty]

KATEGÓRIA · ROK

# Názov projektu

Jeden silný, úderný podtitulok — max. 2 vety.

──────────────────────────────────────────────
Čo:      Webový dizajn, UI/UX, Vývoj
Pre:     [Osobný projekt / Klient]
Stack:   [Technológie]
Rok:     2025
──────────────────────────────────────────────

[HLAVNÝ SCREENSHOT — celá šírka]

## O projekte

[3–5 odsekov — čo bol problém, ako som ho riešila, výsledok]

## Čo som riešila

[Konkrétne výzvy a rozhodnutia]

## Výsledok

[Screenshot detail 1]    [Screenshot detail 2]

[Screenshot detail 3 — celá šírka]

## Kľúčové rozhodnutia

[3 karty s konkrétnymi dizajn/technickými rozhodnutiami]

──────────────────────────────────────────────
        Zaujal vás tento projekt?
        [Napíšme si →]
──────────────────────────────────────────────

[← Predchádzajúci]              [Nasledujúci →]
```

---

## 9. ATELIÉR — STRÁNKA /atelier

```
# Ateliér.

[Cormorant Garamond Italic, podtitulok:]
Miesto, kde všetko začína.

Digitálny dizajn tvorím s rovnakým prístupom,
s akým pracujem v ateliéri — rukou, citom
a pozornosťou k detailu. Tu je základ,
z ktorého všetko vychádza.

─────────────────────────────────────────

[ Filter: Všetko | Akvarel | Papier-mâché | Výšivka ]

[MASONRY GALÉRIA — placeholdery pre fotografie diel]

[Načítať viac ↓]
```

---

## 10. DETAIL PROJEKTOV — COPYWRITING

### ExpatEase Slovakia — Kompletný text

**Úvodný odstavec:**
> Expati v Bratislave vedia, aké to je: potrebujete lekára, ktorý hovorí anglicky, no google výsledky vás zavedú na stránky plné slovenčiny. Potrebujete vyplniť úradný formulár, no nerozumiete ani jednej otázke. ExpatEase vznikol ako odpoveď na presne tieto situácie.

**Čo som riešila:**
> Navrhla som a technicky realizovala plnohodnotnú platformu od nuly. Výzvou nebolo len vytvoriť pekné rozhranie — bolo treba premyslieť informačnú architektúru pre viac ako 500 záznamov, navrhnúť UX toku pre AI prekladač formulárov a zabezpečiť, aby sa celá platforma dala spravovať bez technických znalostí.

**Výsledok:**
> Platforma spustená na Cloudflare Pages so Supabase backendom. Adresár 12 kategórií, reálny AI nástroj na preklad úradných dokumentov a komunitný blog. Celé navrhnuté, nakódované a spustené ako osobný projekt.

---

### Mapa Spomienok — Kompletný text

**Úvodný odstavec:**
> Moja prateta Anna Šenšelová strávila celý život záchranou slovenského výšivkárstva. Keď som objavila jej príbeh, vedela som, že nechcem, aby sa stratil — tak ako sa strácajú tisíce iných príbehov starých rodičov a prastarých rodičov. Tak vznikla Mapa Spomienok.

**Čo som riešila:**
> Navrhla som web ako živý kultúrny archív. Kľúčovým prvkom je interaktívna mapa, kde návštevníci môžu sami pridávať spomienky na svojich predkov. K tomu som vytvorila rozsiahlu galériu výšiviek z pozostalosti Anny Šenšelovej a viacstránkový príbeh spolku Lipa.

**Výsledok:**
> Web beží na GitHub Pages. Spája historický dokument s participatívnym prvkom — ľudia sa nestávajú len čitateľmi, ale spoluautormi živého archívu slovenského dedičstva.

---

### LumenGlass — Kompletný text

**Úvodný odstavec:**
> Remeselná práca si zaslúži prezentáciu, ktorá jej zodpovedá. LumenGlass je sklárska firma, ktorej web nemal odrážať len produkty — mal odrážať precíznosť a charakter práce, ktorá za nimi stojí.

**Čo som riešila:**
> Kompletný webový dizajn a realizácia na WordPresse. Prioritou bol čistý, dôveryhodný vizuál, ktorý nič neprekričí, ale všetko vyjadrí. Dôraz na jednoduché použitie pre klienta po odovzdaní.

**Výsledok:**
> [Doplniť po spustení — výsledky, spätná väzba klienta]

---

## 11. META & SEO

```html
<!-- Hlavná stránka -->
<title>Anna Lockwoodová — Webový dizajn & UI/UX</title>
<meta name="description" content="Navrhujem a tvorím weby, kde estetika a funkčnosť idú ruka v ruke. Webový dizajn, UI/UX — Bratislava.">

<!-- Open Graph -->
<meta property="og:title" content="Anna Lockwoodová — Webový dizajn & UI/UX">
<meta property="og:description" content="Tvorím weby tak ako maľujem — zámer, detail, cit.">
<meta property="og:image" content="/og-image.jpg">
<meta property="og:type" content="website">
```

---

## 12. TECHNICKÉ POZNÁMKY

### Súborová štruktúra
```
/
├── index.html
├── atelier.html
├── projekty/
│   ├── expatease.html
│   ├── mapa-spomienok.html
│   └── lumenglass.html
├── css/
│   ├── main.css         (globálne štýly, premenné)
│   ├── components.css   (nav, karty, formulár, footer)
│   ├── animations.css   (všetky animácie)
│   └── responsive.css   (breakpointy)
├── js/
│   ├── main.js          (IntersectionObserver, scroll efekty)
│   ├── typewriter.js    (typewriter animácia)
│   ├── cursor.js        (custom cursor)
│   └── marquee.js       (pohyblivý text)
├── images/
│   ├── leaves/          (fragmenty akvarely ilustrácie)
│   ├── projects/        (screenshoty projektov)
│   └── atelier/         (fotografie umeleckých diel)
└── fonts/               (príp. lokálne kópie fontov)
```

### CSS Premenné (`:root`)
```css
:root {
  /* Farby */
  --color-white:        #FFFFFF;
  --color-off-white:    #F8F7F4;
  --color-blue-main:    #3A5FA0;
  --color-blue-light:   #7BA7D4;
  --color-blue-pale:    #D6E6F5;
  --color-ink:          #1A2F52;
  --color-red-accent:   #C0392B;
  --color-text-muted:   #6B7280;

  /* Typografia */
  --font-display:       'Special Elite', serif;
  --font-serif:         'Cormorant Garamond', serif;
  --font-body:          'DM Sans', sans-serif;

  /* Spacing */
  --section-padding:    120px 0;
  --container-width:    1200px;
  --container-padding:  0 40px;

  /* Animácie */
  --ease-default:       cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-spring:        cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration-fast:      200ms;
  --duration-mid:       400ms;
  --duration-slow:      700ms;
}
```

### Breakpointy
```css
/* Desktop:  > 1024px  — štandardné layout */
/* Tablet:   768–1024px — 2-stĺpcový grid */
/* Mobil:    < 768px   — 1 stĺpec, menší text */
```

### Prístupnosť
- Všetky obrázky majú `alt` popis
- Farebný kontrast: min. 4.5:1 pre telo textu
- Keyboard navigation: tab focus viditeľný
- `prefers-reduced-motion`: všetky animácie sa pri tejto preferencii vypnú

---

## 13. TODO — ČAKAJÚCE POLOŽKY

| Položka | Status |
|---|---|
| Fotografia Anny pre sekciu O mne | ⏳ Doplniť |
| Screenshoty ExpatEase | ⏳ Web čoskoro live |
| Screenshoty Mapa Spomienok | ✅ Web je live |
| Screenshoty LumenGlass | ⏳ Web čoskoro live |
| Fotografie ateliérových prác (akvarel, papier-mâché, výšivka) | ⏳ Doplniť |
| Referencie od klientov | ⏳ Doplniť |
| Email adresa pre kontaktný formulár | ⏳ Doplniť |
| Instagram profil | ⏳ Doplniť |
| Behance profil | ⏳ Doplniť |
| LinkedIn profil | ⏳ Doplniť |
| Živý link na ExpatEase | ⏳ ~1 mesiac |
| Živý link na LumenGlass | ⏳ ~1 mesiac |
| SK/EN preklady všetkých textov | ⏳ Doplniť |

---

*Špecifikácia pripravená pre vývoj: HTML + CSS + Vanilla JavaScript + GitHub Pages*
*Doména: zakúpiť cez WebSupport.sk po finalizácii webu*
