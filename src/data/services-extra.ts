import type { Service } from "@/types";

/**
 * Servizi aggiuntivi con pagina dedicata (generata da /servizi/[slug]).
 * I testi restano generici di proposito: nessun prezzo, nessun incentivo,
 * nessuna certificazione oltre a CEI e DM 37/08.
 */

export interface ExtraPageCopy {
  metaTitle: string;
  metaDescription: string;
  badge: string;
  h1: string;
  subheadline: string;
  descHeading: string;
  scopeHeading: string;
  scopeItems: string[];
  faqHeading: string;
}

const sopralluogo =
  "Ogni lavoro parte da un sopralluogo sul posto: valuto gli ambienti, le esigenze e ti propongo una soluzione con tempi e costi definiti prima di iniziare.";

export const EXTRA_SERVICES: Service[] = [
  {
    slug: "fotovoltaico",
    name: "Fotovoltaico",
    shortDescription:
      "Impianti fotovoltaici per aziende e abitazioni, dimensionati sui consumi reali e integrati con l'impianto elettrico.",
    fullDescription:
      "PowerVolt realizza impianti fotovoltaici per aziende, capannoni e abitazioni a Bologna e provincia. L'impianto viene dimensionato sui consumi reali e collegato correttamente all'impianto elettrico esistente, con protezioni e quadri a norma CEI. " +
      sopralluogo,
    icon: "Sun",
    keywords: ["fotovoltaico Bologna", "impianto fotovoltaico", "fotovoltaico aziende", "fotovoltaico casa", "installazione pannelli solari"],
    faq: [
      {
        question: "Come si dimensiona un impianto fotovoltaico?",
        answer:
          "Si parte dai consumi reali di casa o azienda e dalle caratteristiche del tetto o dell'area disponibile. Durante il sopralluogo valuto esposizione, spazi e impianto elettrico esistente, poi propongo una soluzione adatta al tuo utilizzo.",
      },
      {
        question: "L'impianto fotovoltaico va collegato all'impianto elettrico esistente?",
        answer:
          "Sì. Il collegamento deve essere eseguito a regola d'arte, con quadri e protezioni adeguati e nel rispetto delle norme CEI. Per questo verifico sempre lo stato dell'impianto esistente prima di proporre l'intervento.",
      },
      {
        question: "Installate fotovoltaico sia per privati che per aziende?",
        answer:
          "Sì, realizzo impianti per abitazioni, capannoni, stabilimenti e uffici. Le esigenze sono diverse, per questo ogni progetto parte da un sopralluogo.",
      },
    ],
    schemaType: "Service",
    path: "/servizi/fotovoltaico",
    target: "B2C+B2B",
  },
  {
    slug: "videosorveglianza",
    name: "Videosorveglianza",
    shortDescription:
      "Telecamere IP, videoregistrazione e consultazione da remoto per proteggere aziende, abitazioni e strutture.",
    fullDescription:
      "PowerVolt installa impianti di videosorveglianza con telecamere IP e videoregistrazione, con possibilità di consultare le immagini da remoto. Gli impianti vengono progettati in base agli ambienti da proteggere e realizzati nel rispetto della normativa sulla privacy. " +
      sopralluogo,
    icon: "Camera",
    keywords: ["videosorveglianza Bologna", "telecamere IP", "impianto videosorveglianza", "telecamere casa", "videosorveglianza aziende"],
    faq: [
      {
        question: "Posso guardare le telecamere dal telefono?",
        answer:
          "Sì. Gli impianti IP permettono di consultare le immagini in diretta e le registrazioni da smartphone e computer, anche quando non sei sul posto.",
      },
      {
        question: "Per le telecamere servono adempimenti sulla privacy?",
        answer:
          "Sì, in particolare per aziende e luoghi aperti al pubblico servono cartellonistica e un corretto trattamento delle immagini. Durante il sopralluogo ti spiego cosa è necessario nel tuo caso.",
      },
      {
        question: "Dove si posizionano le telecamere?",
        answer:
          "Dipende dagli ambienti e da cosa vuoi proteggere: accessi, perimetro, aree interne. Il posizionamento si decide insieme durante il sopralluogo.",
      },
    ],
    schemaType: "Service",
    path: "/servizi/videosorveglianza",
    target: "B2C+B2B",
  },
  {
    slug: "automazioni-bb",
    name: "Automazioni per B&B e strutture ricettive",
    shortDescription:
      "Self check-in, serrature elettroniche, gestione di luci e clima per camera per B&B e strutture ricettive.",
    fullDescription:
      "PowerVolt realizza automazioni per B&B, case vacanza e strutture ricettive: self check-in con serrature elettroniche, gestione di luci e climatizzazione per camera, per un'accoglienza autonoma e meno costi di gestione. " +
      sopralluogo,
    icon: "Building2",
    keywords: ["automazioni B&B", "self check-in", "serrature elettroniche", "domotica strutture ricettive", "automazione casa vacanza"],
    faq: [
      {
        question: "Cos'è il self check-in?",
        answer:
          "È un sistema che permette agli ospiti di entrare in autonomia, ad esempio con codice o serratura elettronica, senza dover essere accolti di persona. Ti serve per gestire gli arrivi a qualsiasi ora.",
      },
      {
        question: "Si può gestire il clima camera per camera?",
        answer:
          "Sì. Luci e climatizzazione possono essere gestite per singola camera, ad esempio attivandole solo quando la camera è occupata, per ridurre i consumi.",
      },
      {
        question: "Va bene anche per una struttura già esistente?",
        answer:
          "Sì, molte soluzioni si integrano in strutture già avviate. Durante il sopralluogo verifico cosa si può fare con l'impianto esistente.",
      },
    ],
    schemaType: "Service",
    path: "/servizi/automazioni-bb",
    target: "B2B",
  },
  {
    slug: "illuminazione-led",
    name: "Illuminazione LED",
    shortDescription:
      "Illuminazione LED industriale e residenziale: progetto illuminotecnico, efficienza energetica e comfort visivo.",
    fullDescription:
      "PowerVolt progetta e installa impianti di illuminazione LED industriale e residenziale, con attenzione a efficienza energetica e comfort visivo. Su richiesta la regolazione delle luci può essere integrata in un sistema di automazione. " +
      sopralluogo,
    icon: "Lightbulb",
    keywords: ["illuminazione LED Bologna", "illuminazione industriale LED", "impianto luci LED", "progetto illuminotecnico", "luci LED casa"],
    faq: [
      {
        question: "Conviene passare al LED in un capannone o in un'azienda?",
        answer:
          "In genere l'illuminazione LED consuma meno e richiede meno manutenzione. Dopo il sopralluogo ti spiego cosa si può migliorare nel tuo ambiente.",
      },
      {
        question: "Fate anche il progetto illuminotecnico?",
        answer:
          "Sì, valuto ambienti e utilizzo per scegliere punti luce e potenze adatti, in modo da avere una buona illuminazione senza sprechi.",
      },
      {
        question: "Le luci si possono regolare o automatizzare?",
        answer:
          "Sì. Regolazione dell'intensità e automazioni possono essere integrate nell'impianto, anche all'interno di un sistema domotico.",
      },
    ],
    schemaType: "Service",
    path: "/servizi/illuminazione-led",
    target: "B2C+B2B",
  },
  {
    slug: "wall-box",
    name: "Wall box per auto elettriche",
    shortDescription:
      "Installazione di wall box per la ricarica di auto elettriche in casa, in azienda e nelle strutture ricettive.",
    fullDescription:
      "PowerVolt installa wall box per la ricarica di auto elettriche in abitazioni, aziende e strutture ricettive a Bologna e provincia. La linea viene dimensionata sull'impianto esistente e realizzata a norma, con le protezioni adeguate. " +
      sopralluogo,
    icon: "Zap",
    keywords: ["installazione wall box Bologna", "colonnina ricarica auto elettrica", "wall box casa", "ricarica auto elettrica azienda"],
    faq: [
      {
        question: "Posso installare una wall box in casa?",
        answer:
          "Nella maggior parte dei casi sì. Va verificata la potenza disponibile e lo stato dell'impianto, e realizzata una linea dedicata con le protezioni adeguate. Lo verifico durante il sopralluogo.",
      },
      {
        question: "Serve una linea dedicata?",
        answer:
          "Di norma sì: la ricarica richiede una linea propria, dimensionata sulla potenza della wall box e protetta secondo le norme.",
      },
      {
        question: "Installate wall box anche per aziende e strutture ricettive?",
        answer:
          "Sì, per aziende, parcheggi e strutture ricettive. In questi casi il progetto considera numero di punti di ricarica e potenza disponibile.",
      },
    ],
    schemaType: "Service",
    path: "/servizi/wall-box",
    target: "B2C+B2B",
  },
  {
    slug: "citofoni-videocitofoni",
    name: "Citofoni e videocitofoni",
    shortDescription:
      "Impianti citofonici e videocitofonici per abitazioni, condomini e aziende, con apertura anche da remoto.",
    fullDescription:
      "PowerVolt installa impianti citofonici e videocitofonici per abitazioni, condomini e aziende: chi suona lo vedi, gli parli e apri anche da remoto. Realizzo nuovi impianti e sostituzioni di impianti esistenti. " +
      sopralluogo,
    icon: "Bell",
    keywords: ["installazione videocitofono Bologna", "citofono", "videocitofono", "impianto citofonico condominio"],
    faq: [
      {
        question: "Posso rispondere al videocitofono dal telefono?",
        answer:
          "Sì, con i sistemi adatti puoi vedere chi suona, parlare e aprire il cancello anche quando non sei in casa.",
      },
      {
        question: "Si può sostituire un citofono esistente?",
        answer:
          "Sì. Valuto l'impianto presente e propongo la sostituzione o l'aggiornamento più adatto, evitando lavori inutili.",
      },
      {
        question: "Installate videocitofoni anche nei condomini?",
        answer:
          "Sì, per condomini e aziende oltre che per abitazioni singole.",
      },
    ],
    schemaType: "Service",
    path: "/servizi/citofoni-videocitofoni",
    target: "B2C+B2B",
  },
  {
    slug: "postazioni-gaming",
    name: "Postazioni gaming e setup",
    shortDescription:
      "Linee dedicate, rete cablata a bassa latenza, cavi in ordine e illuminazione per postazioni gaming e streaming.",
    fullDescription:
      "PowerVolt realizza l'impianto per la tua postazione gaming o streaming: linee elettriche dedicate, rete cablata a bassa latenza, cavi in ordine e illuminazione scenografica. " +
      sopralluogo,
    icon: "Gamepad2",
    keywords: ["impianto postazione gaming", "setup gaming", "rete cablata gaming", "postazione streaming impianto elettrico"],
    faq: [
      {
        question: "Perché una rete cablata invece del Wi-Fi?",
        answer:
          "Il cavo offre una connessione più stabile e con meno latenza, utile per gioco online e streaming.",
      },
      {
        question: "Serve una linea elettrica dedicata?",
        answer:
          "Con più apparecchiature accese insieme conviene una linea dedicata con prese adeguate, per evitare sovraccarichi.",
      },
      {
        question: "Si possono sistemare anche i cavi?",
        answer:
          "Sì, canaline e passaggi ordinati fanno parte del lavoro, per una postazione pulita e sicura.",
      },
    ],
    schemaType: "Service",
    path: "/servizi/postazioni-gaming",
    target: "B2C",
  },
  {
    slug: "controllo-accessi",
    name: "Controllo accessi",
    shortDescription:
      "Badge, tastiere, lettori biometrici, tornelli e serrature elettroniche, con il registro di ogni accesso.",
    fullDescription:
      "PowerVolt installa sistemi di controllo accessi con badge, tastiere, lettori biometrici, tornelli e serrature elettroniche, per decidere chi entra, dove e quando, con il registro di ogni accesso. " +
      sopralluogo,
    icon: "KeyRound",
    keywords: ["controllo accessi Bologna", "lettori badge", "serrature elettroniche", "controllo accessi aziende", "tornelli"],
    faq: [
      {
        question: "Posso scegliere chi entra e in quali orari?",
        answer:
          "Sì. Ogni persona può avere permessi diversi per aree e fasce orarie, modificabili senza cambiare le serrature.",
      },
      {
        question: "Viene registrato chi è entrato?",
        answer:
          "Sì, il sistema tiene il registro degli accessi. Per l'uso dei dati valgono le regole sulla privacy, che ti spiego durante il sopralluogo.",
      },
      {
        question: "Va bene per uffici e aziende?",
        answer:
          "Sì, è pensato per aziende, uffici, capannoni e strutture. Il sistema si sceglie in base a numero di accessi e utenti.",
      },
    ],
    schemaType: "Service",
    path: "/servizi/controllo-accessi",
    target: "B2B",
  },
];

export const EXTRA_PAGES: Record<string, ExtraPageCopy> = {
  fotovoltaico: {
    metaTitle: "Impianti fotovoltaici a Bologna per aziende e abitazioni",
    metaDescription:
      "Installazione di impianti fotovoltaici a Bologna e provincia per aziende e abitazioni, dimensionati sui consumi reali e integrati con l'impianto elettrico..",
    badge: "Fotovoltaico",
    h1: "Fotovoltaico a Bologna per Aziende e Abitazioni",
    subheadline:
      "Impianti dimensionati sui tuoi consumi reali e collegati a regola d'arte all'impianto elettrico, per ridurre i costi energetici.",
    descHeading: "Un Impianto Fotovoltaico Pensato sui Tuoi Consumi",
    scopeHeading: "Cosa Include il Servizio",
    scopeItems: [
      "Sopralluogo e analisi dei consumi",
      "Dimensionamento dell'impianto",
      "Installazione e collegamento all'impianto elettrico",
      "Quadri e protezioni a norma CEI",
      "Per aziende, capannoni e abitazioni",
      "Documentazione dell'impianto",
    ],
    faqHeading: "Domande Frequenti sul Fotovoltaico",
  },
  videosorveglianza: {
    metaTitle: "Videosorveglianza a Bologna: telecamere IP per casa e azienda",
    metaDescription:
      "Impianti di videosorveglianza a Bologna e provincia: telecamere IP, videoregistrazione e consultazione da remoto per aziende, abitazioni e strutture..",
    badge: "Videosorveglianza",
    h1: "Videosorveglianza a Bologna: Telecamere per Casa e Azienda",
    subheadline:
      "Telecamere IP, videoregistrazione e consultazione da remoto per proteggere ciò che conta.",
    descHeading: "Proteggi Casa, Azienda e Struttura",
    scopeItems: [
      "Sopralluogo e studio dei punti da controllare",
      "Telecamere IP e videoregistratore",
      "Consultazione da smartphone e computer",
      "Cablaggio e alimentazione a regola d'arte",
      "Indicazioni sulla normativa privacy",
      "Assistenza dopo l'installazione",
    ],
    scopeHeading: "Cosa Include il Servizio",
    faqHeading: "Domande Frequenti sulla Videosorveglianza",
  },
  "automazioni-bb": {
    metaTitle: "Automazioni per B&B e strutture ricettive a Bologna",
    metaDescription:
      "Self check-in, serrature elettroniche, luci e clima per camera: automazioni per B&B, case vacanza e strutture ricettive a Bologna e provincia.",
    badge: "Automazioni B&B",
    h1: "Automazioni per B&B e Strutture Ricettive",
    subheadline:
      "Accoglienza autonoma, gestione di luci e clima per camera e meno costi di gestione.",
    descHeading: "Accoglienza Autonoma per i Tuoi Ospiti",
    scopeItems: [
      "Self check-in con serrature elettroniche",
      "Gestione di luci e climatizzazione per camera",
      "Integrazione con l'impianto esistente",
      "Automazioni per ingressi e cancelli",
      "Controllo anche da remoto",
      "Assistenza dopo l'installazione",
    ],
    scopeHeading: "Cosa Include il Servizio",
    faqHeading: "Domande Frequenti sulle Automazioni per B&B",
  },
  "illuminazione-led": {
    metaTitle: "Illuminazione LED industriale e residenziale a Bologna",
    metaDescription:
      "Progetto e installazione di illuminazione LED industriale e residenziale a Bologna e provincia: efficienza energetica, comfort visivo e regolazione integrata.",
    badge: "Illuminazione LED",
    h1: "Illuminazione LED Industriale e Residenziale a Bologna",
    subheadline:
      "Efficienza energetica e comfort visivo, con regolazione e automazione integrate.",
    descHeading: "Luce Giusta, Consumi Più Bassi",
    scopeItems: [
      "Sopralluogo e valutazione degli ambienti",
      "Progetto dei punti luce",
      "Installazione di corpi illuminanti LED",
      "Regolazione dell'intensità",
      "Integrazione in sistemi di automazione e domotica",
      "Per capannoni, uffici, negozi e abitazioni",
    ],
    scopeHeading: "Cosa Include il Servizio",
    faqHeading: "Domande Frequenti sull'Illuminazione LED",
  },
  "wall-box": {
    metaTitle: "Installazione wall box per auto elettriche a Bologna",
    metaDescription:
      "Installazione di wall box per la ricarica di auto elettriche a Bologna e provincia, in casa, in azienda e nelle strutture ricettive. Impianto a norma.",
    badge: "Wall box",
    h1: "Installazione Wall Box a Bologna",
    subheadline:
      "Ricarica la tua auto elettrica in casa, in azienda o nella tua struttura, con un impianto dimensionato e a norma.",
    descHeading: "Ricarica Sicura, Impianto a Norma",
    scopeItems: [
      "Sopralluogo e verifica della potenza disponibile",
      "Linea dedicata con protezioni adeguate",
      "Installazione della wall box",
      "Per abitazioni, aziende e strutture ricettive",
      "Collegamento a regola d'arte",
      "Documentazione dell'impianto",
    ],
    scopeHeading: "Cosa Include il Servizio",
    faqHeading: "Domande Frequenti sulle Wall Box",
  },
  "citofoni-videocitofoni": {
    metaTitle: "Installazione citofoni e videocitofoni a Bologna",
    metaDescription:
      "Impianti citofonici e videocitofonici a Bologna e provincia per abitazioni, condomini e aziende, con apertura anche da remoto..",
    badge: "Citofoni e videocitofoni",
    h1: "Citofoni e Videocitofoni a Bologna",
    subheadline:
      "Chi suona lo vedi, gli parli e apri anche da remoto: per abitazioni, condomini e aziende.",
    descHeading: "Vedi Chi Suona, Apri Anche da Remoto",
    scopeItems: [
      "Nuovi impianti citofonici e videocitofonici",
      "Sostituzione e aggiornamento di impianti esistenti",
      "Apertura cancello e portone",
      "Risposta anche da smartphone",
      "Per abitazioni, condomini e aziende",
      "Assistenza dopo l'installazione",
    ],
    scopeHeading: "Cosa Include il Servizio",
    faqHeading: "Domande Frequenti su Citofoni e Videocitofoni",
  },
  "postazioni-gaming": {
    metaTitle: "Impianto per postazione gaming e streaming a Bologna",
    metaDescription:
      "Linee dedicate, rete cablata a bassa latenza, cavi in ordine e illuminazione per la tua postazione gaming o streaming a Bologna e provincia.",
    badge: "Gaming e setup",
    h1: "Postazioni Gaming e Setup: Impianto su Misura",
    subheadline:
      "Linee dedicate, rete cablata a bassa latenza, cavi in ordine e illuminazione scenografica.",
    descHeading: "Una Postazione Pulita, Stabile e Sicura",
    scopeItems: [
      "Linee elettriche dedicate e prese adeguate",
      "Rete cablata a bassa latenza",
      "Cavi in ordine con canaline e passaggi",
      "Illuminazione scenografica",
      "Per gaming, streaming e home office",
      "Sopralluogo e consigli sul setup",
    ],
    scopeHeading: "Cosa Include il Servizio",
    faqHeading: "Domande Frequenti sulle Postazioni Gaming",
  },
  "controllo-accessi": {
    metaTitle: "Controllo accessi a Bologna: badge, lettori e serrature elettroniche",
    metaDescription:
      "Sistemi di controllo accessi a Bologna e provincia: badge, tastiere, lettori biometrici, tornelli e serrature elettroniche, con registro degli accessi.",
    badge: "Controllo accessi",
    h1: "Controllo Accessi a Bologna per Aziende e Strutture",
    subheadline:
      "Decidi chi entra, dove e quando, con il registro di ogni accesso.",
    descHeading: "Chi Entra, Dove e Quando",
    scopeItems: [
      "Badge, tastiere e lettori biometrici",
      "Tornelli e serrature elettroniche",
      "Permessi per persone, aree e orari",
      "Registro degli accessi",
      "Per aziende, uffici, capannoni e strutture",
      "Assistenza dopo l'installazione",
    ],
    scopeHeading: "Cosa Include il Servizio",
    faqHeading: "Domande Frequenti sul Controllo Accessi",
  },
};
