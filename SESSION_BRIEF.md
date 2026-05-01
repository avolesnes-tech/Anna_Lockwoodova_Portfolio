# Brief pre novú session — Stavba portfólia Anna Lockwoodová

> Skopíruj a vlož celý tento súbor (alebo ho otvor v novej session) ako prvú správu.

---

## Kontext

Som **Anna Lockwoodová** — webová dizajnérka a umelkyňa z Bratislavy. Začínam stavať svoje prezentačné portfólio, ktoré bude moja vizitka pre budúcich klientov.

Mám už pripravený **kompletný špecifikačný dokument** v tomto priečinku. Tvojou úlohou je postaviť web podľa neho — ale predtým, než napíšeš jediný riadok kódu, **prečítaj si dokument celý**. Obzvlášť **sekciu 0 (Prístup k práci)** — to nie je odporúčanie, to je záväzné pravidlo pre celú realizáciu.

---

## Pracovný priečinok

```
/Users/annalockwoodova/Documents/GitHub/Anna_Portfolio/
```

V ňom nájdeš:
- `anna-lockwood-portfolio-spec.md` — **kompletná špecifikácia webu** (čítaj prvé!)
- Fotky a obrázky (postupne ich budem dopĺňať počas práce)
- Tu budeme stavať web

---

## Tech stack (záväzné)

- **HTML5 + CSS3 + Vanilla JavaScript** — žiadne frameworky, žiadny build step
- **GitHub Pages** ako hosting
- **Doména:** zakúpim cez WebSupport.sk po finalizácii
- Súborová štruktúra je definovaná v sekcii 12 spec dokumentu

---

## Moje predošlé projekty (referencie pre tvoje pochopenie môjho štýlu)

Než začneš, pozri si tieto **3 case studies**, ktoré budú v portfóliu — aby si chytil môj rukopis:

1. **Mapa Spomienok / anna-senselova** (live)
   - URL: https://avolesnes-tech.github.io/anna-senselova/index.html
   - Lokálny zdroj: `/Users/annalockwoodova/Documents/GitHub/anna-senselova/`
   - Štýl: storytelling, kultúrne dedičstvo, custom typografia, interaktívna mapa, galérie, privacy-first

2. **ExpatEase Slovakia** (live)
   - URL: https://expatease-final.pages.dev/
   - Štýl: webová aplikácia, AI prekladač dokumentov, adresár 500+ profesionálov, freemium model, SK/EN

3. **LumenGlass** (WordPress, klientsky projekt)
   - Lokálny zdroj: `/Users/annalockwoodova/Documents/LumenGlass Web/lg-write-v91.zip`
   - Štýl: komerčný WordPress + Elementor, vlastný WP plugin, 10 produktových podstránok, SEO + performance tuning, premium dizajn (Playfair + Outfit, zlato/krémová/čierna)

Tieto tri svety — kultúrne dedičstvo, expat platforma, remeselná firma — sú dôkazom, že ovládam široké spektrum. **Portfólio musí toto reflektovať.**

---

## Branding & identita (zhrnutie zo spec)

- **Meno:** Anna Lockwoodová
- **Pozícia:** Webová dizajnérka & umelkyňa
- **Hlavný slogan:** *„Tvorím weby tak ako maľujem — zámer, detail, cit."*
- **Jazyk:** primárne SK, sekundárne EN (toggle)
- **Farby:** biela, off-white, modrá paleta (`#3A5FA0`, `#7BA7D4`, `#1A2F52`), červená MAX 2× na celom webe
- **Fonty:** Special Elite (nadpisy), Cormorant Garamond Italic (podnadpisy/citáty), DM Sans (telo)
- **Dekoratívny systém:** fragmenty akvarelovej ilustrácie modrých listov — fragmenty, nie celá ilustrácia, vždy na bielom/off-white pozadí, opacity 0.25–0.50

---

## Ako pracovať

### Pred kódom
1. Prečítaj celý `anna-lockwood-portfolio-spec.md` — nielen prelietnuť
2. Pozri si moje 3 referenčné projekty (vyššie) aby si chytil rukopis
3. Skontroluj aké fotky/assety už mám v priečinku
4. Navrhni mi poradie sekcií, ktoré budeme stavať (typicky: setup → design tokeny + globálne CSS → hero → marquee → portfolio → o mne → služby → ateliér preview → referencie → kontakt → footer → detail stránky projektov → /atelier)

### Počas kódovania
- **Pracuj ako senior UI/UX designer s umeleckým cítením** (sekcia 0 v spec)
- Stavaj sekciu po sekcii, nie všetko naraz
- Po každej hotovej sekcii mi povedz čo si urobil a čo nasleduje
- **Testuj v prehliadači** — nielen tvrdiť že "funguje". Spusti dev server, otvor preview, urob screenshot, ukáž mi.
- Mobilná verzia je samostatná kompozícia, nie zmenšenina — testuj responzívnosť priebežne
- Animácie rešpektujú `prefers-reduced-motion`
- Prístupnosť: alt texty, kontrast, keyboard nav

### Čo NIE
- Žiadne frameworky (React, Vue, Tailwind, Bootstrap…)
- Žiadne tracking skripty, cookies tretích strán
- Žiadne generické šablóny — všetko vlastné
- Žiadne ceny v sekcii Služby (pýtam si ich individuálne na vyžiadanie)
- Žiadne emoji v kóde ani v textoch (okrem ✓ pri form success a ♡ vo footeri ako je v spec)

---

## Čo mi povedz najprv (predtým než začneš kódovať)

1. Potvrď, že si si prečítal spec, vrátane sekcie 0
2. Povedz mi, ktoré assety/fotky už v priečinku vidíš a čo ešte budem musieť dodať
3. Navrhni mi poradie krokov — čo postavíme prvé, druhé, tretie
4. Ak máš out-of-the-box nápady, ktoré spec nepokrýva ale by sedeli k duchu projektu — povedz ich teraz, predtým než zafixujeme smer
5. Spýtaj sa ma na čokoľvek, čo je v spec nejasné

Až keď si toto odsúhlasíme, začneme kódovať.

---

## TODO assety (priebežne dodávam)

- ⏳ Akvarelová ilustrácia listov (na fragmenty)
- ⏳ Fotografia Anny pre sekciu O mne
- ⏳ Screenshoty 3 projektov (Mapa Spomienok je live, ExpatEase a LumenGlass čoskoro)
- ⏳ Fotografie ateliérových prác (akvarel, papier-mâché, výšivka)
- ⏳ OG image pre social sharing

Ak niečo ešte nemám, pracuj s placeholdermi (s jasným označením `placeholder--`) a poznač si to do TODO listu.

---

**Začni tým, že si prečítaš `anna-lockwood-portfolio-spec.md`. Potom mi odpíš podľa bodu „Čo mi povedz najprv".**
