# PowerVolt Website Redesign Plan
**Version:** 1.0  
**Date:** 2026-05-11  
**Project Manager:** PowerVolt PM Agent  
**Source:** https://powervolt.it/ (analyzed 2026-05-11)

---

## Nota Metodologica

Questa analisi si basa su:
1. Crawl diretto di https://powervolt.it/ tramite WebFetch
2. Ricerca Google per estrarre la meta-description indicizzata del sito
3. Analisi comparativa di competitor italiani nel settore impianti elettrici
4. Best practice 2025/2026 per SEO, GEO, performance e accessibilità

**Dato verificato dal sito attuale (Google SERP snippet):**
> "Powervolt realizza impianti elettrici civili e industriali, automazioni, domotica, quadri elettrici, impianti di sicurezza e reti dati, nel rispetto delle normative CEI."

**Dato verificato (meta title):**
> "Powervolt | Impianti elettrici civili e industriali, automazione e domotica"

**Limitazione tecnica:** Il sito attuale è quasi certamente una Single Page Application (SPA) o un sito con rendering JavaScript pesante. Il crawler WebFetch ha potuto estrarre solo il tag `<title>` — il corpo della pagina non viene servito staticamente. Questo è di per sé un problema tecnico critico che questa analisi affronta nella Sezione 10.

---

## 1. Struttura Attuale del Sito

### Stato Rilevato

**Pagine indicizzate da Google:** 1 sola (homepage: https://powervolt.it/)

**Struttura probabile attuale:**
- Il sito appare come un sito single-page (SPA) oppure un sito con pochissime pagine
- Non esiste un sitemap.xml accessibile (`/sitemap.xml` → 404)
- Non esiste un robots.txt accessibile (`/robots.txt` → 404)
- Nessuna pagina di profondità è indicizzata (né `/chi-siamo`, `/servizi`, `/contatti`, `/domotica`, `/automazione`)
- Il sito non utilizza WordPress o non ha l'API REST abilitata (`/wp-json/wp/v2/pages` → 404)

**Servizi confermati dalla meta-description (Google index):**
1. Impianti elettrici civili
2. Impianti elettrici industriali
3. Automazioni
4. Domotica
5. Quadri elettrici
6. Impianti di sicurezza
7. Reti dati

**Conformita dichiarata:** Normative CEI

### Criticita Identificate

| Problema | Impatto | Priorita |
|---|---|---|
| Solo 1 pagina indicizzata | Traffico organico quasi nullo | CRITICA |
| Nessun sitemap.xml | Google non conosce le pagine del sito | CRITICA |
| Nessun robots.txt | Segnale di sito non curato per SEO | ALTA |
| Rendering JS-only | Google non riesce a leggere il contenuto | CRITICA |
| Nessuna pagina servizio dedicata | Perdita di keyword a coda lunga | ALTA |
| Nessuna pagina contatti indicizzata | Frizione nel percorso di conversione | ALTA |

---

## 2. Pagine Mancanti e Opportunita SEO

### Analisi delle Gap

Il sito perde visibilita su tutte le keyword transazionali e informazionali relative ai propri servizi. Di seguito le opportunita piu rilevanti:

### Keyword ad Alto Potenziale (mercato italiano)

**Impianti elettrici civili:**
- "impianti elettrici civili [citta]"
- "elettricista [citta]"
- "preventivo impianto elettrico casa"
- "rifacimento impianto elettrico costi"
- "messa a norma impianto elettrico"
- "certificazione impianto elettrico DM 37/08"
- "dichiarazione di conformita impianto elettrico"

**Impianti elettrici industriali:**
- "impianti elettrici industriali [citta]"
- "quadri elettrici industriali"
- "impianti elettrici capannone"
- "manutenzione impianti elettrici industriali"
- "verifica periodica impianti elettrici DPR 462"

**Automazione:**
- "automazione industriale impianti"
- "automazione edifici"
- "PLC programmazione [citta]"
- "automazione cancelli e porte"

**Domotica:**
- "domotica casa [citta]"
- "impianti domotici prezzi"
- "smart home installazione"
- "domotica KNX BTicino"
- "casa intelligente [citta]"

**Sicurezza e reti:**
- "impianti di sicurezza [citta]"
- "antifurto impianto [citta]"
- "reti dati cablaggio strutturato"
- "videosorveglianza installazione"

### Pagine Mancanti Prioritarie

1. Pagina servizio: Impianti Elettrici Civili
2. Pagina servizio: Impianti Elettrici Industriali
3. Pagina servizio: Automazione
4. Pagina servizio: Domotica
5. Pagina servizio: Quadri Elettrici
6. Pagina servizio: Impianti di Sicurezza
7. Pagina servizio: Reti Dati
8. Pagina Chi Siamo
9. Pagina Contatti con modulo
10. Pagina Preventivo dedicata
11. ⚠️ Pagine locali per citta servite — **Dato non presente nel sito attuale — necessaria conferma prima di procedere.**
12. Blog / Articoli tecnici (per SEO a lungo termine)

---

## 3. Sitemap Consigliata

### Struttura URL Proposta

```
/ (Homepage)
├── /chi-siamo
├── /servizi/
│   ├── /servizi/impianti-elettrici-civili
│   ├── /servizi/impianti-elettrici-industriali
│   ├── /servizi/automazione
│   ├── /servizi/domotica
│   ├── /servizi/quadri-elettrici
│   ├── /servizi/impianti-sicurezza
│   └── /servizi/reti-dati
├── /progetti/ (portfolio lavori realizzati)
│   └── /progetti/[slug-progetto]
├── /preventivo (pagina di conversione dedicata)
├── /contatti
├── /blog/
│   └── /blog/[slug-articolo]
├── /privacy-policy
├── /cookie-policy
└── /sitemap.xml
```

**⚠️ Pagine locali (da aggiungere se confermata area operativa):**
```
├── /elettricista-[citta-1]
├── /elettricista-[citta-2]
```
Dato non presente nel sito attuale — necessaria conferma delle zone servite prima di procedere.

### File Tecnici da Creare

- `/sitemap.xml` — indice XML di tutte le pagine
- `/robots.txt` — con `Sitemap:` directive
- `/.well-known/security.txt` (buona pratica)

---

## 4. Struttura Homepage Consigliata

### Ordine delle Sezioni

```
[1] HERO
[2] NUMERI / TRUST BAR
[3] SERVIZI IN EVIDENZA
[4] CHI SIAMO (sommario)
[5] PERCHE SCEGLIERCI
[6] PROGETTI RECENTI
[7] TESTIMONIANZE
[8] FAQ
[9] BANNER CTA FINALE
[10] FOOTER
```

### Dettaglio Sezioni

**[1] Hero Section**
- H1 chiaro: es. "Impianti Elettrici Civili e Industriali — Professionali e Certificati"
- Sottotitolo: breve descrizione del valore (chi siete, dove operate, cosa fate)
- CTA primario: "Richiedi Preventivo Gratuito" (link a /preventivo)
- CTA secondario: "Scopri i Servizi" (scroll o link a sezione)
- Sfondo: immagine di alta qualita di un impianto professionale o cantiere
- Numero di telefono cliccabile ben visibile

**[2] Trust Bar (strip di segnali di fiducia)**
- Conforme alle normative CEI
- ⚠️ Anni di esperienza — non verificato sul sito attuale
- ⚠️ Numero di progetti realizzati — non verificato
- ⚠️ Certificazioni possedute — non verificate
- Indicare solo i dati confermati dal cliente

**[3] Servizi in Evidenza**
- 6–7 card servizio con icona, titolo, breve descrizione, link alla pagina dedicata
- Servizi: Impianti Civili, Impianti Industriali, Automazione, Domotica, Quadri Elettrici, Sicurezza, Reti Dati

**[4] Chi Siamo (Sommario)**
- 3–4 righe di testo: identita aziendale, approccio professionale, conformita CEI
- Link "Scopri di piu" a /chi-siamo
- Foto del team o dello studio (se disponibile)

**[5] Perche Sceglierci**
- 4 blocchi: Professionalita / Conformita CEI / Puntualita / Assistenza Post-Lavoro
- ⚠️ Eventuali certificazioni specifiche — necessaria conferma

**[6] Progetti Recenti**
- Gallery o card con 3–6 lavori rappresentativi
- Ogni progetto: titolo, servizio, breve descrizione
- ⚠️ Immagini e descrizioni progetti — necessaria fornitura dal cliente

**[7] Testimonianze**
- ⚠️ Dato non presente nel sito attuale — necessaria conferma prima di procedere.
- Struttura pronta per recensioni Google Business Profile o testimonianze dirette del cliente

**[8] FAQ**
- 6–8 domande frequenti sui servizi (es. "Come richiedo un preventivo?", "Operate nelle zone di...?", "Rilasciate dichiarazione di conformita?")
- Fondamentale per SEO e GEO (vedi Sezione 6)

**[9] Banner CTA Finale**
- Messaggio urgenza/azione: "Hai bisogno di un impianto professionale? Contattaci oggi."
- CTA: numero telefono cliccabile + pulsante form preventivo

**[10] Footer**
- Logo PowerVolt
- Navigazione rapida
- NAP completo (Nome, Indirizzo, Telefono)
- ⚠️ Indirizzo fisico — non verificato sul sito attuale — necessaria conferma
- Social media links (se presenti)
- P.IVA
- Privacy Policy / Cookie Policy links
- Copyright

---

## 5. Pagine Servizio Dedicate Consigliate

Ogni servizio merita una pagina dedicata perche:
1. Consente il posizionamento su keyword specifiche ad alta intenzione commerciale
2. Fornisce contenuto dettagliato che aumenta la credibilita
3. Facilita la navigazione dell'utente che cerca un servizio specifico
4. E fondamentale per la visibilita nei motori AI (GEO)

### Schema per ogni Pagina Servizio

```
H1: [Nome Servizio] — PowerVolt
├── Introduzione al servizio (2–3 paragrafi)
├── Cosa includiamo (lista puntata)
├── Per chi e adatto (civile/industriale/entrambi)
├── Il nostro approccio (processo, norme CEI)
├── ⚠️ Marche/prodotti utilizzati — necessaria conferma
├── FAQ specifiche del servizio (4–5 domande)
├── Galleria foto lavori (se disponibile)
└── CTA: "Richiedi Preventivo per [Servizio]"
```

### Priorita delle Pagine Servizio

| Priorita | Pagina | Motivazione |
|---|---|---|
| 1 | Impianti Elettrici Civili | Servizio core, alta domanda di ricerca |
| 2 | Domotica | Trend crescente, alta competitivita online |
| 3 | Impianti Elettrici Industriali | Target B2B ad alto valore |
| 4 | Automazione | Differenziatore competitivo |
| 5 | Quadri Elettrici | Keyword tecnica specifica |
| 6 | Impianti di Sicurezza | Cross-selling con impianti elettrici |
| 7 | Reti Dati | Completamento offerta |

---

## 6. Ottimizzazione GEO / Ricerca AI

### Contesto

I motori AI (ChatGPT, Gemini, Perplexity) rispondono a domande come "chi installa impianti elettrici a [citta]?" o "azienda impianti domotici [regione]" citando siti web che presentano:
- Informazioni chiare e strutturate
- Schema markup JSON-LD
- FAQ con risposte dirette
- NAP completo e consistente
- Presenza su directory autorevoli

### Azioni Specifiche per PowerVolt

**1. Schema Markup JSON-LD (priorita massima)**

Implementare su ogni pagina uno schema `LocalBusiness` / `ElectricalContractor`:

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ElectricalContractor"],
  "name": "PowerVolt",
  "description": "PowerVolt realizza impianti elettrici civili e industriali, automazioni, domotica, quadri elettrici, impianti di sicurezza e reti dati, nel rispetto delle normative CEI.",
  "url": "https://powervolt.it",
  "telephone": "⚠️ DA CONFERMARE",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "⚠️ DA CONFERMARE",
    "addressLocality": "⚠️ DA CONFERMARE",
    "addressRegion": "⚠️ DA CONFERMARE",
    "postalCode": "⚠️ DA CONFERMARE",
    "addressCountry": "IT"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servizi di Impiantistica Elettrica",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Impianti Elettrici Civili"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Impianti Elettrici Industriali"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Automazione"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Domotica"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Quadri Elettrici"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Impianti di Sicurezza"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Reti Dati"}}
    ]
  }
}
```

**2. FAQ Section (ogni pagina)**
- Formattare con schema `FAQPage` JSON-LD
- Rispondere in modo diretto, con risposta completa nei primi 2–3 periodi
- Esempio domande per la homepage:
  - "Cosa fa PowerVolt?"
  - "PowerVolt rilascia dichiarazione di conformita?"
  - "In quali zone opera PowerVolt?"
  - "Come si richiede un preventivo a PowerVolt?"
  - "PowerVolt lavora per privati e aziende?"

**3. Presenza su Directory Autorevoli**
- Google Business Profile (priorita assoluta)
- PagineBianche.it
- Kompass.it
- Impresaitaliana.it
- Directory ENEA/CEI se applicabile

**4. Contenuto Strutturato per AI**
- Ogni sezione deve avere un H2/H3 descrittivo
- Il primo paragrafo di ogni pagina deve contenere la risposta diretta alla domanda implicita
- Evitare testo vago ("siamo i migliori") — preferire affermazioni verificabili

**5. Google Business Profile**
- Compilare al 100%: orari, descrizione, categorie, foto, servizi, risposte alle FAQ
- Raccogliere e rispondere a tutte le recensioni
- ⚠️ Verificare se esiste gia un profilo Google Business — necessaria conferma

---

## 7. Ottimizzazione della Conversione

### Obiettivo Primario
Massimizzare il numero di richieste di preventivo e contatti telefonici ricevuti dal sito.

### Mappa dei Touchpoint di Conversione

**Ogni pagina del sito deve avere:**
1. Numero di telefono cliccabile (tel:) nell'header — sempre visibile
2. CTA "Richiedi Preventivo" nell'header (sticky su mobile)
3. CTA nel corpo pagina (almeno 1 per pagina lunga)
4. CTA finale in fondo pagina
5. Footer con numero, email e form link

### Form di Preventivo (/preventivo)
Campi consigliati:
- Nome e Cognome
- Telefono (campo principale)
- Email
- Tipo di servizio (dropdown: Civile / Industriale / Domotica / Automazione / Sicurezza / Reti Dati / Altro)
- Breve descrizione lavoro (textarea)
- ⚠️ Campo citta/zona — da confermare zone operative
- Privacy e consenso GDPR

**Best practice form:**
- Max 6–7 campi visibili
- Bottone CTA chiaro: "Invia Richiesta di Preventivo"
- Messaggio di conferma immediato dopo l'invio
- Auto-risposta email con tempi di risposta attesi

### Trust Signals (Segnali di Fiducia)
- Badge "Conforme normative CEI" su ogni pagina
- ⚠️ Certificazioni professionali — necessaria conferma
- ⚠️ Anni di attivita — necessaria conferma
- ⚠️ Numero di clienti serviti — necessaria conferma
- Loghi marchi partner (es. BTicino, Legrand, ABB, Schneider — se utilizzati)
- Garanzia sul lavoro svolto (se applicabile)

### Urgency e Proximity Signals
- "Risposta entro [X] ore" — ⚠️ da confermare
- "Sopralluogo gratuito" — ⚠️ da confermare
- Badge WhatsApp per contatto immediato
- Orari di disponibilita visibili

### WhatsApp Button
- Floating button in basso a destra su ogni pagina
- Link diretto a `https://wa.me/39XXXXXXXXXX` — ⚠️ numero da confermare

---

## 8. Miglioramenti Mobile UX

### Contesto
Oltre il 60% delle ricerche di elettricisti e impiantisti proviene da dispositivi mobili. Il sito PowerVolt deve essere ottimizzato per utenti che cercano un elettricista dallo smartphone, spesso in situazioni di urgenza.

### Raccomandazioni Specifiche

**Navigazione Mobile:**
- Hamburger menu accessibile con area tap minima 44x44px
- Numero di telefono nel header: grande, visibile, cliccabile (non solo testo)
- Sticky header con CTA "Chiama Ora" sempre visibile durante lo scroll
- Max 5 voci di menu principale

**Hero Section Mobile:**
- Testo H1 leggibile senza zoom (min 24px)
- CTA buttons larghi almeno 48px in altezza
- Non sovrapporre testo su immagini scure — garantire contrasto AA (4.5:1)
- Nessun elemento orizzontale che causa scroll laterale

**Contenuto Mobile:**
- Paragrafi brevi (max 3–4 righe su mobile)
- Accordion per FAQ invece di testo lungo
- Tabelle responsive o sostituite da card
- Form con campi a tutta larghezza, label visibili, font input min 16px (evita zoom iOS)

**Performance Mobile:**
- Immagini in formato WebP o AVIF
- Lazy loading su tutte le immagini below the fold
- No font pesanti o icone non ottimizzate
- Target: LCP < 2.5s su connessione 4G mobile

**Touch Targets:**
- Tutti i link e bottoni: minimo 44x44px area toccabile
- Spaziatura minima tra elementi toccabili: 8px
- Evitare link testo ravvicinati nel footer

**Considerazioni Layout:**
- Single-column layout su mobile per quasi tutto il contenuto
- Card servizi: 1 colonna su mobile, 2 su tablet, 3–4 su desktop
- Form: single column, label sopra il campo

---

## 9. Direzione Design Moderna

### Brand Identity Attuale
⚠️ La palette colori, il logo e lo stile visivo attuale non sono stati verificabili tramite crawl (SPA non renderizzata). Le raccomandazioni seguenti sono basate su best practice di settore e devono essere validate con il cliente.

### Palette Colori Consigliata

**Opzione A — Autorita e Professionalita (raccomandato per B2B/B2C ibrido):**
- Primario: `#1A2C5B` (blu notte — fiducia, professionalita)
- Secondario: `#F5A623` (arancio ambra — energia, azione, elettricita)
- Neutro chiaro: `#F8F9FA` (sfondo sezioni alternate)
- Neutro scuro: `#2D2D2D` (testo corpo)
- Accent: `#2ECC71` (verde conferma/successo — form, badge)

**Opzione B — Moderno e Tecnico:**
- Primario: `#0D1B2A` (blu quasi nero)
- Secondario: `#00A8E8` (azzurro elettrico)
- Accent: `#FFD60A` (giallo ad alto contrasto)
- Neutro: `#FFFFFF` / `#F0F4F8`

### Tipografia

- **Heading:** Inter Bold o Montserrat Bold (650–700 weight) — moderno, tecnico, leggibile
- **Body:** Inter Regular o Source Sans 3 (400 weight) — altissima leggibilita a schermo
- **Scala tipografica desktop:** H1=48px, H2=36px, H3=24px, Body=16–18px
- **Scala tipografica mobile:** H1=32px, H2=24px, H3=20px, Body=16px

### Stile Visivo

- Layout pulito, molto spazio bianco (whitespace)
- Icone tecniche in stile line o solid (Phosphor Icons, Lucide, o Heroicons)
- Fotografie realistiche di cantieri e impianti (non stock generici)
- Sezioni alternate: sfondo bianco / sfondo grigio chiaro / sfondo blu scuro
- Micro-animazioni leggere sulle card (hover elevation) — NO animazioni pesanti
- Grafici o infografiche per comunicare il processo di lavoro

### Riferimenti Visivi (ispirazione da competitor di qualita)

I seguenti pattern sono stati identificati come efficaci per aziende di impianti elettrici in Italia:
- Hero con immagine di impianto professionale + overlay semitrasparente
- Card servizi con icona grande, titolo, 2 righe descrizione, link
- Timeline/processo "Come lavoriamo" in 4 step
- Sezione "I nostri progetti" con filtro per categoria
- Strip loghi dei brand partner (ABB, Legrand, BTicino, Schneider Electric)

---

## 10. Miglioramenti Tecnici

### Problema Critico n.1 — Rendering JavaScript

**Situazione:** Il sito attuale e molto probabilmente una SPA (Single Page Application) o usa heavy JavaScript rendering. Il risultato e che Google (e i motori AI) non riescono a leggere il contenuto.

**Soluzione:**
- Migrare a un framework con Server Side Rendering (SSR) o Static Site Generation (SSG)
- Opzioni consigliate: **Next.js** (SSR/SSG), **Nuxt.js** (SSR/SSG), oppure un CMS tradizionale come **WordPress** con tema ottimizzato
- Se si mantiene React/Vue, implementare SSR obbligatoriamente
- Alternativa low-code: **Webflow** con export statico o hosting Webflow

**Impatto se non risolto:** Nessuna pagina sara mai indicizzata correttamente. Tutto il lavoro SEO sara inutile.

### Problema Critico n.2 — Mancanza sitemap.xml e robots.txt

**Azioni:**
```xml
<!-- sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://powervolt.it/</loc><priority>1.0</priority></url>
  <url><loc>https://powervolt.it/chi-siamo</loc><priority>0.8</priority></url>
  <url><loc>https://powervolt.it/servizi/impianti-elettrici-civili</loc><priority>0.9</priority></url>
  <!-- etc. -->
</urlset>
```

```
# robots.txt
User-agent: *
Allow: /
Sitemap: https://powervolt.it/sitemap.xml
```

### Core Web Vitals — Target 2025/2026

| Metrica | Target "Good" | Azione Principale |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | Ottimizzare hero image, usare CDN |
| INP (Interaction to Next Paint) | < 200ms | Ridurre JavaScript bloccante |
| CLS (Cumulative Layout Shift) | < 0.1 | Definire dimensioni immagini, evitare font flash |
| TTFB (Time to First Byte) | < 800ms | Hosting veloce (es. Vercel, Cloudflare Pages) |

### Performance — Checklist Tecnica

- [ ] Immagini in formato WebP/AVIF con fallback JPEG
- [ ] Immagini con `width` e `height` attributi espliciti (previene CLS)
- [ ] Lazy loading (`loading="lazy"`) su immagini below the fold
- [ ] Hero image preloaded (`<link rel="preload" as="image">`)
- [ ] Font caricati con `font-display: swap`
- [ ] CSS critico inlined, CSS non critico caricato async
- [ ] Eliminare o differire JavaScript non necessario al primo caricamento
- [ ] Abilitare compressione Gzip/Brotli sul server
- [ ] CDN per assets statici
- [ ] HTTP/2 o HTTP/3 abilitato

### Accessibilita — WCAG 2.1 AA

- [ ] Contrasto colore testo/sfondo minimo 4.5:1 (testo normale), 3:1 (testo grande)
- [ ] Alt text descrittivo su tutte le immagini
- [ ] Navigazione keyboard-friendly (Tab order logico)
- [ ] ARIA labels su form, bottoni iconici, menu mobile
- [ ] Lingua della pagina dichiarata (`<html lang="it">`)
- [ ] Focus visibile su tutti gli elementi interattivi
- [ ] Struttura heading logica (un solo H1 per pagina)
- [ ] Skip navigation link ("Salta al contenuto principale")

### SEO Tecnico

- [ ] Meta title unico per ogni pagina (50–60 caratteri)
- [ ] Meta description unica per ogni pagina (150–160 caratteri)
- [ ] URL slug in italiano, lowercase, con trattini
- [ ] Canonical URL su ogni pagina
- [ ] Open Graph tags per condivisione social
- [ ] Hreflang se il sito e multilingua (non necessario se solo italiano)
- [ ] Schema markup JSON-LD su ogni pagina (vedi Sezione 6)
- [ ] Google Search Console verificato e sitemap inviata

### Sicurezza e Compliance

- [ ] HTTPS forzato (redirect HTTP → HTTPS)
- [ ] Cookie banner GDPR-compliant (Cookiebot, Iubenda, o similari)
- [ ] Privacy Policy aggiornata al GDPR
- [ ] Form con validazione lato client e lato server
- [ ] CAPTCHA o honeypot sui form pubblici
- [ ] Header di sicurezza HTTP (CSP, X-Frame-Options, HSTS)
- [ ] Nessuna chiave API o credenziale esposta nel codice frontend

### Stack Tecnico Consigliato

**Opzione A — Massima Performance (raccomandato se sviluppo custom):**
- Framework: Next.js 14+ (App Router, SSG/ISR)
- Hosting: Vercel o Cloudflare Pages
- CMS: Sanity.io o Contentlayer (per blog/contenuti)
- Form: React Hook Form + servizio email (Resend, SendGrid)
- Analytics: Google Analytics 4 + Google Search Console

**Opzione B — Facilita di Gestione (raccomandato se il cliente gestisce contenuti):**
- CMS: WordPress con Gutenberg
- Tema: GeneratePress o Kadence (leggeri, SEO-ready)
- Hosting: Kinsta, WP Engine, o SiteGround (hosting ottimizzato WordPress)
- Plugin SEO: Rank Math o Yoast SEO
- Plugin Performance: WP Rocket + Cloudflare CDN
- Form: Contact Form 7 o WPForms

---

## Riepilogo Priorita di Esecuzione

### Fase 1 — Fondamenta Tecniche (settimane 1–2)
1. Risolvere il problema di rendering JS (SSR/SSG o migrazione CMS)
2. Creare sitemap.xml e robots.txt
3. Implementare HTTPS e redirect
4. Configurare Google Search Console e GA4

### Fase 2 — Contenuto Core (settimane 3–5)
5. Homepage con struttura consigliata (Sezione 4)
6. 7 pagine servizio con schema FAQ (Sezione 5)
7. Pagina Chi Siamo
8. Pagina Contatti + Form Preventivo

### Fase 3 — SEO e GEO (settimane 6–7)
9. Schema markup JSON-LD su tutte le pagine
10. Meta title e meta description ottimizzate
11. Google Business Profile completato
12. Presenza su directory autorevoli

### Fase 4 — Ottimizzazione e CRO (settimana 8)
13. Core Web Vitals: immagini, performance, CLS
14. A/B test CTA principali
15. WhatsApp button integrato
16. Accessibilita WCAG 2.1 AA

### Fase 5 — Contenuto Long-Term (ongoing)
17. Blog con articoli SEO (1–2 al mese)
18. Raccolta e pubblicazione recensioni
19. Aggiornamento portfolio progetti

---

## Dati Mancanti — Da Confermare con il Cliente

Prima di procedere con qualsiasi sviluppo, i seguenti dati **devono essere confermati**:

| Dato | Importanza | Dove Usato |
|---|---|---|
| Indirizzo fisico completo | CRITICA | Schema, footer, GBP |
| Numero di telefono | CRITICA | Header, footer, WhatsApp, Schema |
| Email di contatto | ALTA | Form, footer |
| Zone/citta servite | ALTA | Pagine locali, Schema, meta |
| Anni di attivita | MEDIA | Hero trust signals, Chi Siamo |
| Numero progetti realizzati | MEDIA | Trust bar homepage |
| Certificazioni specifiche | MEDIA | Trust signals, Chi Siamo |
| Marchi/prodotti utilizzati | MEDIA | Pagine servizio |
| Partita IVA / Ragione sociale | BASSA | Footer, Privacy policy |
| Profilo Google Business esistente | ALTA | Strategia GEO locale |
| Social media presenti | BASSA | Footer, link social |

---

*Documento generato da: PowerVolt PM Agent — 2026-05-11*  
*Fonte primaria analizzata: https://powervolt.it/*  
*Prossimo step: approvazione del piano e inizio Fase 1*
