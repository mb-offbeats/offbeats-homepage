export type Lang = 'en' | 'de';

export const TRANSLATIONS = {
  en: {
    nav: {whatWeDo: 'What We Do', about: 'About Us', products: 'Products', contact: 'Contact Us'},
    hero: {
      title: 'offbeats',
      subtitle: 'Architecting Software with Courage and Rhythm',
      cta: 'Let\'s Create Something!'
    },
    offbeatsTerms: {
      term1: 'curious',
      term2: 'experimental',
      term3: 'untypical',
    },
    expertise: {
      title: 'Our Expertise',
      arch: {
        title: 'Innovative Software Architecture',
        desc: 'Building resilient, forward-thinking software with courage.'
      },
      cloud: {
        title: 'Cloud-Native Solutions',
        desc: 'Leveraging the cloud to create scalable and efficient applications.'
      },
      legacy: {title: 'Legacy System Modernization', desc: 'Transforming and revitalizing your existing systems.'},
      bespokeDev: {
        title: 'Bespoke Software Development',
        desc: 'Custom software tailored to your unique business needs.'
      },
      keepScrolling: 'Keep Scrolling'
    },
    products: {
      title: 'Our own software products',
      desc: 'From our passion for innovation, we developed our own suite of tools.',
      cta: 'Discover'
    },
    startProject: {
      title: 'Ready to Build Something Different?',
      desc: 'Let\'s collaborate to create software that\'s not just functional, but exceptional. We\'re ready to bring a new rhythm to your project.',
      cta: 'Start a Project',
      emailSubject: 'Project Inquiry',
      emailBody: 'Hey offbeats Team,%0D%0A%0D%0Alet\'s start something great together! 🚀'
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      imprint: 'Imprint'
    },
    contactPage: {
      title: 'Contact Us',
      companyName: 'Company Name',
      address: 'Address',
      email: 'Email'
    },
    imprint: {
      title: 'Imprint',
      companyName: 'Company Name',
      address: 'Address',
      contact: 'Contact',
      ceo: 'CEO',
      registerNum: 'Commercial Register No.',
      registerCourt: 'Commercial Register Court',
      memberOf: 'Member of',
      tradeAssoc: 'Trade Association',
      supervisoryAuth: 'Supervisory Authority',
      vatId: 'VAT ID',
      legal: {
        title: 'Legal Notice',
        text: 'All rights reserved. Text, images, graphics, sound, animations and videos as well as their arrangement on this website are protected by copyright and other protective laws. The content of this website may not be copied, distributed, changed or made available to third parties for commercial purposes. Some pages may also contain images subject to third-party copyright.'
      },
      disclaimer: {
        title: 'Disclaimer',
        content: 'This website was compiled with the greatest possible care. Nevertheless, we cannot guarantee the correctness and accuracy of the information contained. Any liability for damages arising directly or indirectly from the use of this website is excluded.',
        links: 'The links to other websites on this page are beyond our control and influence. No liability and/or guarantee is assumed for the correctness and completeness of the information published on these websites.'
      }
    },
    notFound: {
      title: 'Page Not Found',
      desc: 'The page you are looking for doesn\'t exist or has been moved.',
      cta: 'Go Home'
    },
    values: {
      title: 'Crafting the Future of Software, Inspired by Jazz',
      desc: 'At offbeats, we believe software development is an art form. Like jazz musicians, we thrive on a blend of disciplined structure and creative improvisation. Our mission is to explore uncharted territories in technology, embracing experimentation and courage to build software that is not just functional, but truly innovative.',
      philosophy: {
        title: 'Our Philosophy',
        text: 'We see software architecture as the foundational rhythm section of any great digital product. It provides the steady beat that allows for creative solos—the innovative features and user experiences. Our approach is rooted in solid principles but always open to the "offbeat" ideas that lead to breakthroughs.'
      },
      valuesList: {
        title: 'Our Principles',
        subtitle: 'The rhythm behind our code',
        courage: {
          title: 'Courage',
          text: 'To step into the unknown. Innovation requires the bravery to experiment with new technologies.'
        },
        collaboration: {
          title: 'Collaboration',
          text: "Like a jazz ensemble, we listen. The best results come from building on each other's ideas."
        },
        craftsmanship: {
          title: 'Resilience',
          text: 'Robust craftsmanship. We build architectures designed to withstand time and change.'
        }
      },
      // NEW: copy for the "About" section on Home
      aboutUs: {
        headline: 'About Us',
        mission:
          'Our mission is to explore new technological ground with curiosity and courage — building software that is not only functional, but truly innovative.',
        whyTitle: 'Why “offbeats”?',
        whyText:
          'Because we deliberately take unconventional paths – but never without a plan: we question standards, systematically evaluate alternatives and implement new solutions where they bring real added value. Our principles are: bold in experimentation, uncompromising in quality and reliability.',
        inspirationTitle: 'Our Inspiration',
        inspirationText:
          'And yes: we love listening to jazz. The offbeats – those unexpected accents — remind us that real innovation often happens when you don’t follow the rhythm too strictly.'
      }
    }
  },
  de: {
    nav: {whatWeDo: 'Was wir tun', about: 'Über uns', products: 'Produkte', contact: 'Kontakt'},
    hero: {
      title: 'offbeats',
      subtitle: 'Software mit Mut und Rhythmus',
      // cta: 'Kontaktiere uns'
      cta: 'Lass uns etwas erschaffen!'
    },
    offbeatsTerms: {
      term1: 'neugierig',
      term2: 'experimentierfreudig',
      term3: 'untypisch',
    },
    expertise: {
      title: 'Unsere Expertise',
      arch: {
        title: 'Innovative Software-Architektur',
        desc: 'Wir bauen resiliente, zukunftsorientierte Software mit Mut.'
      },
      cloud: {title: 'Cloud-Native Lösungen', desc: 'Nutzung der Cloud für skalierbare und effiziente Anwendungen.'},
      legacy: {
        title: 'Modernisierung von Legacy-Systemen',
        desc: 'Transformation und Revitalisierung deiner bestehenden Systeme.'
      },
      bespokeDev: {
        title: 'Maßgeschneiderte Softwareentwicklung',
        desc: 'Individuelle Software, zugeschnitten auf deine einzigartigen Geschäftsanforderungen.'
      },
      keepScrolling: 'scrolle weiter'
    },
    products: {
      title: 'Unsere Software-Produkte',
      desc: 'Aus unserer Leidenschaft für Innovation haben wir eigene Tools entwickelt.',
      cta: 'Entdecken'
    },
    startProject: {
      title: 'Bereit, etwas Besonderes zu bauen?',
      desc: 'Lass uns gemeinsam Software entwickeln, die nicht nur funktional, sondern außergewöhnlich ist. Wir sind bereit, neuen Rhythmus in dein Projekt zu bringen.',
      cta: 'Projekt starten',
      emailSubject: 'Projektanfrage',
      emailBody: 'Hey offbeats-Team,%0D%0A%0D%0Alass uns gemeinsam etwas Großartiges starten! 🚀'
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
      privacy: 'Datenschutzerklärung',
      imprint: 'Impressum'
    },
    contactPage: {
      title: 'Kontaktiere uns',
      companyName: 'Firmenname',
      address: 'Adresse',
      email: 'E-Mail'
    },
    imprint: {
      title: 'Impressum',
      companyName: 'Firmenname',
      address: 'Adresse',
      contact: 'Kontakt',
      ceo: 'Geschäftsführer',
      registerNum: 'Firmenbuchnummer',
      registerCourt: 'Firmenbuchgericht',
      memberOf: 'Mitglied bei',
      tradeAssoc: 'Fachverband',
      supervisoryAuth: 'Aufsichtsbehörde',
      vatId: 'Umsatzsteuer-Identifikationsnummer',
      legal: {
        title: 'Rechtliche Hinweise',
        text: 'Alle Rechte vorbehalten. Text, Bilder, Grafiken, Sound, Animationen und Videos sowie deren Anordnung auf dieser Website unterliegen dem Schutz des Urheberrechts und anderer Schutzgesetze. Der Inhalt dieser Website darf nicht zu kommerziellen Zwecken kopiert, verbreitet, verändert oder Dritten zugänglich gemacht werden. Einige Seiten können außerdem Bilder enthalten, die dem Copyright Dritter unterliegen.'
      },
      disclaimer: {
        title: 'Abgrenzungen',
        content: 'Diese Website wurde mit größtmöglicher Sorgfalt zusammengestellt. Trotzdem können wir für die Fehlerfreiheit und Genauigkeit der enthaltenen Informationen nicht garantieren. Es wird jegliche Haftung für Schäden, die direkt oder indirekt aus der Benutzung dieser Website entstehen, ausgeschlossen.',
        links: 'Die auf dieser Seite befindlichen Verweise (Links) zu anderen Websites entziehen sich inhaltlicher Kontrolle und Einflussnahme. Es wird keine Haftung und/oder Garantie für die Richtigkeit und Vollständigkeit der auf diesen Websites veröffentlichten Informationen übernommen.'
      }
    },
    notFound: {
      title: 'Seite nicht gefunden',
      desc: 'Die Seite, nach der Sie suchen, existiert nicht oder wurde verschoben.',
      cta: 'Zur Startseite'
    },
    values: {
      title: 'Die Zukunft der Software gestalten, inspiriert vom Jazz',
      desc: 'Bei offbeats glauben wir, dass Softwareentwicklung eine Kunstform ist. Wie Jazzmusiker leben wir von einer Mischung aus disziplinierter Struktur und kreativer Improvisation. Unsere Mission ist es, technologisches Neuland zu erkunden, Experimentierfreude und Mut zu zeigen, um Software zu entwickeln, die nicht nur funktional, sondern wahrhaft innovativ ist.',
      philosophy: {
        title: 'Unsere Philosophie',
        text: 'Wir betrachten Softwarearchitektur als das rhythmische Fundament eines jeden großartigen digitalen Produkts. Sie liefert den stetigen Beat, der kreative Soli ermöglicht – die innovativen Funktionen und Benutzererlebnisse. Unser Ansatz wurzelt in soliden Prinzipien, ist aber immer offen für die "Offbeat"-Ideen, die zu Durchbrüchen führen.'
      },
      aboutUs: {
        headline: 'Über uns',
        mission:
          'Unsere Mission ist es, technologisches Neuland zu erkunden, Experimentierfreude und Mut zu zeigen, um Software zu entwickeln, die nicht nur funktional, sondern wahrhaft innovativ ist.',
        whyTitle: 'Warum „offbeats“?',
        whyText:
          'Weil wir bewusst untypische Wege gehen – aber niemals planlos: Wir hinterfragen Standards, evaluieren Alternativen systematisch und setzen dort neue Lösungen ein, wo sie echten Mehrwert bringen. Dabei gilt: mutig im Experiment, kompromisslos in Qualität und Verlässlichkeit.',
        inspirationTitle: 'Unsere Inspiration',
        inspirationText:
          'Und ja: wir hören am liebsten Jazz. Die Offbeats – diese unerwarteten Akzente – erinnern uns daran, dass echte Innovation oft dort entsteht, wo man nicht stur dem Takt folgt.'
      },
      valuesList: {
        title: 'Unsere Prizipien',
        subtitle: 'Der Rhythmus hinter unserem Code',
        courage: {
          title: 'Mut',
          text: 'ins Unbekannte aufzubrechen. Innovation braucht den Mut, neue Technologien auszuprobieren.'
        },
        collaboration: {
          title: 'Zusammenarbeit',
          text: 'Wie ein Jazz-Ensemble hören wir zu. Die besten Ergebnisse entstehen, wenn wir Ideen gemeinsam weiterentwickeln.'
        },
        craftsmanship: {
          title: 'Resilienz',
          text: 'Robustes Handwerk. Wir bauen Architekturen, die Veränderungen standhalten und mitwachsen.'
        }
      },
    }
  }
}
