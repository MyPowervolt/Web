import type { Service } from "@/types";

/**
 * Master list of PowerVolt services.
 *
 * All 7 services are confirmed from the Google SERP snippet of https://powervolt.it/
 * Source meta-description: "Powervolt realizza impianti elettrici civili e industriali,
 * automazioni, domotica, quadri elettrici, impianti di sicurezza e reti dati,
 * nel rispetto delle normative CEI."
 *
 * Order reflects SEO priority from REDESIGN_PLAN.md §5.
 */
export const SERVICES: Service[] = [
  {
    slug: "impianti-elettrici-civili",
    name: "Impianti Elettrici Civili",
    shortDescription:
      "Progettazione e realizzazione di impianti elettrici per abitazioni, condomini e uffici. Conformi alle normative CEI e DM 37/08.",
    fullDescription:
      "PowerVolt progetta e realizza impianti elettrici civili per abitazioni private, condomini, uffici e locali commerciali. Ogni impianto viene realizzato nel pieno rispetto delle normative CEI vigenti e del DM 37/08. Al termine dei lavori viene rilasciata la dichiarazione di conformita (DiCo), documento obbligatorio che certifica la regolarita dell'impianto. PowerVolt si occupa di messa a norma, rifacimento completo, ampliamento e manutenzione programmata.",
    icon: "Home",
    keywords: [
      "impianti elettrici civili",
      "impianto elettrico casa",
      "messa a norma impianto elettrico",
      "rifacimento impianto elettrico",
      "dichiarazione di conformita impianto elettrico",
      "DM 37/08",
      "elettricista",
    ],
    faq: [
      {
        question: "Cosa comprende un impianto elettrico civile realizzato da PowerVolt?",
        answer:
          "Un impianto civile completo include il quadro elettrico con protezioni magnetotermiche e differenziali, le linee dedicate per cucina e climatizzazione, l'impianto di terra, la protezione da sovratensioni e la predisposizione per sistemi domotici. PowerVolt realizza impianti a Bologna e provincia nel pieno rispetto delle normative CEI 64-8 e del DM 37/08.",
      },
      {
        question: "Installate reti dati LAN e cablaggio Ethernet durante i lavori elettrici?",
        answer:
          "Sì. Parallelamente all'impianto elettrico realizziamo reti dati strutturate con cablaggio Ethernet Cat.6 o superiore, predisponendo prese RJ45 in ogni locale. Integrare la rete dati durante i lavori evita la necessità di riaprire muri e canalizzazioni in un secondo momento.",
      },
      {
        question: "Come garantite la protezione da sovratensioni e l'impianto di terra?",
        answer:
          "Il quadro elettrico viene equipaggiato con scaricatori di sovratensione (SPD) conformi alla norma CEI 64-8, abbinati a un impianto di dispersione a terra dimensionato correttamente. Questo sistema protegge le apparecchiature elettroniche da scariche atmosferiche indirette e fluttuazioni della rete di distribuzione.",
      },
      {
        question: "Realizzate linee dedicate per climatizzatori, forno e piano cottura?",
        answer:
          "Sì. Le normative CEI 64-8 richiedono circuiti separati per carichi ad alta potenza come climatizzatori, forni, piani cottura a induzione e lavatrici. PowerVolt dimensiona e installa queste linee in fase di progettazione, garantendo sicurezza elettrica e conformità normativa.",
      },
      {
        question: "Realizzate impianti di illuminazione LED per abitazioni, negozi e uffici?",
        answer:
          "Sì. PowerVolt progetta e installa impianti di illuminazione LED per uso residenziale e commerciale, ottimizzando i consumi energetici e il comfort visivo. Su richiesta la gestione luci può essere integrata in un sistema domotico con automazioni e controllo remoto.",
      },
      {
        question: "Rilasciate la dichiarazione di conformità DM 37/08 al termine dei lavori?",
        answer:
          "Sì, al termine di ogni intervento PowerVolt rilascia la dichiarazione di conformità (DiCo) prevista dal Decreto Ministeriale 37/08. Il documento è obbligatorio per legge, certifica che l'impianto è stato eseguito da impresa abilitata e nel rispetto delle normative CEI vigenti.",
      },
    ],
    schemaType: "Service",
    path: "/servizi/impianti-elettrici-civili",
    target: "B2C",
  },
  {
    slug: "domotica",
    name: "Domotica",
    shortDescription:
      "Sistemi di automazione domestica per il controllo intelligente di luci, climatizzazione, sicurezza e risparmio energetico.",
    fullDescription:
      "PowerVolt installa sistemi domotici avanzati che trasformano la tua abitazione o il tuo ufficio in un ambiente intelligente. Grazie alla domotica puoi controllare luci, tende, climatizzazione, irrigazione e sistema di sicurezza da smartphone, tablet o pannello murale. PowerVolt progetta soluzioni su misura sia per nuove costruzioni che per ristrutturazioni, con compatibilita con i principali standard e protocolli del settore.",
    icon: "Smartphone",
    keywords: [
      "domotica",
      "casa intelligente",
      "smart home",
      "domotica installazione",
      "automazione domestica",
      "controllo luci smartphone",
      "domotica KNX",
    ],
    faq: [
      {
        question: "Cosa posso controllare con un sistema domotico?",
        answer:
          "Con un sistema domotico PowerVolt puoi controllare illuminazione e scenari luce, tapparelle, tende, veneziane, climatizzazione, riscaldamento e irrigazione del giardino — tutto da smartphone, tablet o pannello murale.",
      },
      {
        question: "Potete installare un sistema domotico in una casa già costruita?",
        answer:
          "Sì. PowerVolt progetta soluzioni domotiche sia per nuove costruzioni che per ristrutturazioni a Bologna e provincia, scegliendo le tecnologie più adatte all'impianto esistente per limitare le opere murarie.",
      },
      {
        question: "È possibile creare scenari automatici per luci e tapparelle?",
        answer:
          "Sì. Un sistema domotico permette di impostare scenari personalizzati: luci che si regolano in base all'orario, tapparelle che si chiudono al tramonto, ambienti preconfigurati con un solo tocco dal pannello o dallo smartphone.",
      },
      {
        question: "Gestite anche l'irrigazione automatica del giardino?",
        answer:
          "Sì. PowerVolt integra il controllo dell'irrigazione del giardino nel sistema domotico, permettendo di programmare e gestire gli impianti da remoto insieme agli altri sistemi dell'abitazione.",
      },
      {
        question: "Dopo l'installazione viene fornita formazione sull'uso del sistema?",
        answer:
          "Sì. Al termine dell'installazione PowerVolt fornisce formazione dedicata sull'utilizzo del sistema domotico installato, per permettere al cliente di sfruttarne appieno le funzionalità fin da subito.",
      },
    ],
    schemaType: "Service",
    path: "/servizi/domotica",
    target: "B2C+B2B",
  },
  {
    slug: "impianti-elettrici-industriali",
    name: "Impianti Elettrici Industriali",
    shortDescription:
      "Impianti elettrici per capannoni, industrie e ambienti produttivi. Progettazione, installazione e manutenzione secondo normative CEI.",
    fullDescription:
      "PowerVolt realizza impianti elettrici industriali per capannoni, stabilimenti produttivi, magazzini e ambienti a rischio specifico. L'esperienza di PowerVolt nel settore industriale comprende progettazione e realizzazione in bassa tensione, cablaggio potenza e controllo, sistemi di illuminazione industriale e impianti di terra industriali. Ogni intervento e accompagnato da documentazione tecnica completa e dichiarazione di conformita.",
    icon: "Factory",
    keywords: [
      "impianti elettrici industriali",
      "impianto elettrico capannone",
      "impianti elettrici stabilimento",
      "manutenzione impianti elettrici industriali",
      "verifica periodica DPR 462",
    ],
    faq: [
      {
        question: "Che impianti elettrici realizzate per capannoni e stabilimenti?",
        answer:
          "PowerVolt realizza impianti elettrici industriali completi a Bologna e provincia: quadri di distribuzione, cablaggio potenza e controllo, illuminazione industriale, percorsi cavi in plastica o metallo, blindo luce e potenza. Ogni intervento include documentazione tecnica completa e dichiarazione di conformità.",
      },
      {
        question: "Realizzate impianti di alimentazione bordo macchina?",
        answer:
          "Sì. PowerVolt realizza impianti di alimentazione bordo macchina per linee produttive e macchinari industriali, con cablaggio dedicato e protezioni adeguate all'utilizzo specifico.",
      },
      {
        question: "Installate anche l'illuminazione delle uscite di sicurezza?",
        answer:
          "Sì. PowerVolt realizza e installa impianti di illuminazione per le uscite di sicurezza negli ambienti industriali, nel rispetto delle normative CEI vigenti.",
      },
      {
        question: "Offrite manutenzione programmata degli impianti industriali?",
        answer:
          "Sì. PowerVolt esegue manutenzione programmata e straordinaria degli impianti elettrici industriali, garantendo continuità operativa e conformità degli impianti nel tempo.",
      },
      {
        question: "Rilasciate la dichiarazione di conformità per gli impianti industriali?",
        answer:
          "Sì. Al termine di ogni intervento PowerVolt rilascia la documentazione tecnica completa e la dichiarazione di conformità (DiCo), certificando che l'impianto è stato realizzato nel rispetto delle normative CEI applicabili.",
      },
    ],
    schemaType: "Service",
    path: "/servizi/impianti-elettrici-industriali",
    target: "B2B",
  },
  {
    slug: "automazioni",
    name: "Automazioni",
    shortDescription:
      "Sistemi di automazione per edifici e impianti industriali: cancelli, porte, barriere, PLC e controllo motori.",
    fullDescription:
      "PowerVolt progetta e installa sistemi di automazione per applicazioni civili e industriali. In ambito civile realizziamo automazioni per cancelli, basculanti, tapparelle e serrande per negozi. In ambito industriale sviluppiamo quadri di automazione con PLC, sistemi di controllo motori e gestione di linee produttive. Le nostre soluzioni permettono di ottimizzare i processi, migliorare l'efficienza energetica e aumentare la sicurezza degli ambienti di lavoro.",
    icon: "Settings",
    keywords: [
      "automazioni",
      "automazione industriale",
      "PLC programmazione",
      "automazione cancelli",
      "porte automatiche",
      "controllo motori",
      "sistemi SCADA",
      "automazione edifici",
    ],
    faq: [
      {
        question: "Che automazioni civili realizza PowerVolt?",
        answer:
          "PowerVolt realizza automazioni per cancelli, basculanti, tapparelle e serrande per negozi, con soluzioni adatte ad abitazioni, condomini e attività commerciali.",
      },
      {
        question: "Realizzi anche automazioni industriali con PLC?",
        answer:
          "Sì. PowerVolt realizza quadri di automazione con PLC, sistemi di controllo e soluzioni per la gestione di macchine e linee produttive.",
      },
      {
        question: "Offri assistenza su macchine a controllo numerico e isole robotizzate?",
        answer:
          "Sì. PowerVolt interviene per assistenza guasti su macchine a controllo numerico e isole robotizzate, valutando il problema e il tipo di impianto presente.",
      },
      {
        question: "È possibile mettere a norma un sistema automatico esistente?",
        answer:
          "Sì. PowerVolt si occupa anche della messa a norma di sistemi automatici esistenti, verificando sicurezza, cablaggi, protezioni e conformità dell'impianto.",
      },
      {
        question: "Serve un sopralluogo per un sistema di automazione?",
        answer:
          "Sì. Ogni automazione richiede una valutazione diretta per capire spazi, motori, quadro elettrico, sicurezza e modalità di utilizzo.",
      },
    ],
    schemaType: "Service",
    path: "/servizi/automazioni",
    target: "B2C+B2B",
  },
  {
    slug: "quadri-elettrici",
    name: "Quadri Elettrici",
    shortDescription:
      "Progettazione e costruzione di quadri elettrici civili e industriali. Quadri di distribuzione, automazione e bordo macchina.",
    fullDescription:
      "PowerVolt progetta e costruisce quadri elettrici per ogni applicazione: quadri di distribuzione civili, quadri di automazione industriale e quadri bordo macchina. Ogni quadro è realizzato su progetto specifico, con componentistica certificata di primarie marche. PowerVolt realizza quadri conformi alla norma CEI EN 61439.",
    icon: "Cpu",
    keywords: [
      "quadri elettrici",
      "quadro elettrico industriale",
      "quadro di distribuzione",
      "quadro automazione",
      "bordo macchina",
      "CEI EN 61439",
      "costruzione quadri elettrici",
    ],
    faq: [
      {
        question: "Che tipi di quadri elettrici realizzate?",
        answer:
          "PowerVolt progetta e costruisce quadri elettrici civili e industriali su misura: quadri di distribuzione per abitazioni, uffici e ambienti industriali BT, quadri di automazione con PLC e quadri bordo macchina. Ogni quadro viene realizzato su progetto dedicato, con componentistica certificata di primarie marche.",
      },
      {
        question: "Cosa si intende per quadro di distribuzione civile?",
        answer:
          "Un quadro di distribuzione civile è il quadro elettrico principale di un'abitazione, ufficio o locale commerciale. Gestisce la distribuzione dell'energia verso i vari circuiti dell'impianto e integra le protezioni magnetotermiche e differenziali previste dalle normative CEI vigenti.",
      },
      {
        question: "Costruite quadri bordo macchina per macchinari industriali?",
        answer:
          "Sì. PowerVolt realizza quadri bordo macchina su specifica del cliente, progettati per comandare, proteggere e gestire macchinari industriali. Ogni quadro viene cablato con componentistica certificata e collegato direttamente all'impianto elettrico della macchina.",
      },
      {
        question: "Realizzate quadri di automazione con PLC?",
        answer:
          "Sì. Costruiamo quadri di automazione con PLC per la gestione automatica di impianti, macchinari e linee produttive. La logica di controllo viene sviluppata sulla base delle esigenze operative del cliente, con possibilità di supervisione remota.",
      },
      {
        question: "Eseguite modifiche o ampliamenti su quadri elettrici esistenti?",
        answer:
          "Sì. PowerVolt interviene su quadri elettrici esistenti per modifiche, ampliamenti, sostituzione di componenti o adeguamento normativo. Prima di ogni intervento viene effettuata una valutazione tecnica per verificare lo stato dell'impianto.",
      },
      {
        question: "Che componentistica utilizzate per la costruzione dei quadri?",
        answer:
          "Utilizziamo componentistica certificata di primarie marche come Schneider Electric, ABB, Siemens e Legrand, selezionata in base alla tipologia e alle esigenze del quadro. La scelta garantisce affidabilità, durata e sicurezza dell'impianto nel tempo.",
      },
    ],
    schemaType: "Service",
    path: "/servizi/quadri-elettrici",
    target: "B2C+B2B",
  },
  {
    slug: "reti-dati",
    name: "Reti Dati",
    shortDescription:
      "Cablaggio strutturato, reti LAN/Wi-Fi, fibra ottica e infrastrutture dati per uffici, aziende e ambienti industriali.",
    fullDescription:
      "PowerVolt progetta e realizza infrastrutture di rete dati per uffici, aziende e ambienti industriali a Bologna e provincia. I servizi comprendono: cablaggio strutturato Cat.6/Cat.6A/Cat.7, installazione rack e patch panel, reti Wi-Fi enterprise e stesura fibra ottica (monomodale e multimodale).",
    icon: "Network",
    keywords: [
      "reti dati",
      "cablaggio strutturato",
      "rete LAN",
      "rete Wi-Fi",
      "fibra ottica",
      "Cat.6",
      "Cat.6A",
      "infrastruttura di rete",
      "rack dati",
    ],
    faq: [
      {
        question: "Che tipo di cablaggio strutturato realizzate?",
        answer:
          "PowerVolt realizza impianti di cablaggio strutturato con cavi Cat.6, Cat.6A e Cat.7 per reti LAN ad alta velocità. Il cablaggio viene dimensionato in base al numero di postazioni, alla tipologia di utilizzo e alle esigenze dell'impianto.",
      },
      {
        question: "Per quali ambienti realizzate reti dati?",
        answer:
          "Realizziamo infrastrutture di rete dati per uffici, studi professionali, negozi, aziende e ambienti industriali a Bologna e provincia. Il progetto viene adattato alle caratteristiche dell'edificio e alle esigenze operative del cliente.",
      },
      {
        question: "Installate rack e patch panel?",
        answer:
          "Sì. PowerVolt installa rack da muro o da pavimento e patch panel per la gestione ordinata di tutte le connessioni di rete. Il rack centralizza il cablaggio e semplifica la manutenzione e gli eventuali ampliamenti futuri.",
      },
      {
        question: "Installate reti Wi-Fi per uffici e aziende?",
        answer:
          "Sì. Progettiamo e installiamo reti Wi-Fi enterprise con access point professionali per garantire copertura uniforme in tutti gli ambienti, anche su più piani o zone separate. La rete Wi-Fi può essere integrata con la rete LAN cablata.",
      },
      {
        question: "Realizzate stesura di fibra ottica?",
        answer:
          "Sì. PowerVolt stende cavi in fibra ottica monomodale e multimodale per connessioni ad alta velocità all'interno degli edifici o tra edifici dello stesso complesso, come sedi aziendali, capannoni o piani diversi di un ufficio.",
      },
      {
        question: "È necessario un sopralluogo prima di realizzare una rete dati?",
        answer:
          "Sì. Un sopralluogo tecnico è fondamentale per valutare il layout degli ambienti, le canalizzazioni disponibili, il numero di punti rete necessari e la copertura Wi-Fi ottimale. PowerVolt esegue il sopralluogo prima di proporre qualsiasi soluzione o preventivo.",
      },
    ],
    schemaType: "Service",
    path: "/servizi/reti-dati",
    target: "B2C+B2B",
  },
];

/** Lookup a service by its URL slug */
export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

/** All service slugs — used by generateStaticParams */
export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}
