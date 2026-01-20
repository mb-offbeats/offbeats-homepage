export type Lang = 'en' | 'de';

interface TranslationSchema {
  nav: { modernization: string; architecture: string; development: string; about: string; contact: string };
  hero: { title: string; subtitle: string; cta: string };
  keywords: {
    curious: string;
    courageous: string;
    untypical: string;
    modern: string;
    vibrant: string;
  },
  products: {
    saasShowcase: string,
    visionInCode: string,
    subtitle: string,
    terrazzoAssistent: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
      feature1Title: string;
      feature1Desc: string;
      feature2Title: string;
      feature2Desc: string;
      cta: string;
    }
  },
  startProject: {
    badge: string;
    title: string;
    desc: string;
    cta: string;
    emailSubject: string;
    emailBody: string;
  },
  services: {
    preview: {
      title: string;
      modernization: { title: string; description: string };
      architecture: { title: string; description: string };
      development: { title: string; description: string };
    },
    architecture: {
      badge: string;
      title: { line1: string, line2: string },
      description: string;
      cta: string;
      microFrontends: { title: string, description: string, },
      microservices: { title: string, description: string, },
      asynchronousCommunication: { title: string, description: string, },
      scale: { title: string, description: string, },
      questionsTitle: string,
      questionsDesc: string,
    },
    development: {
      badge: string;
      title: { line1: string, line2: string },
      description: string;
      cta: string;
      outOfTheBoxTitle: string;
      outOfTheBoxDesc: string;
      fullStackTitle: string;
      fullStackDesc: string;
      modernStackTitle: string;
      modernStackDesc: string;
    },
    modernization: {
      badge: string;
      title: { line1: string, line2: string },
      description1: string;
      description2: string;
      evolutionTitle: string;
      evolutionDesc: string;
      investmentTitle: string;
      investmentDesc: string;
      cta: string;
    }
  },
  contactPage: {
    title: string;
    subtitle: string;
    companyName: string;
    address: string;
    email: string;
  },
  aboutUs: {
    headline: string;
    inspiredBy: string;
    mission: string;
    whyTitle: string;
    whyText: string;
    inspirationTitle: string;
    inspirationText: string;

    valuesList: {
      title: string;
      subtitle: string;
      courage: { title: string; text: string };
      collaboration: { title: string; text: string };
      craftsmanship: { title: string; text: string };
    }
  },
  imprint: {
    title: string;
    companyName: string;
    address: string;
    contact: string;
    ceo: string;
    registerNum: string;
    registerCourt: string;
    memberOf: string;
    tradeAssoc: string;
    supervisoryAuth: string;
    vatId: string;
    legal: { title: string; text: string };
    disclaimer: { title: string; content: string; links: string };
  };
  notFound: { title: string; subtitle: string; desc: string; cta: string };
}

export const TRANSLATIONS: Record<Lang, TranslationSchema> = {
  en: {
    nav: {
      modernization: 'Modernization',
      architecture: 'Architecture',
      development: 'Development',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'offbeats',
      subtitle: 'We build the software others don\'t dare to touch.',
      cta: 'Discover Our Services'
    },
    keywords: {
      curious: 'curious',
      courageous: 'courageous',
      untypical: 'untypical',
      modern: 'modern',
      vibrant: 'vibrant'
    },
    products: {
      saasShowcase: 'SaaS Showcase',
      visionInCode: 'Vision in Code',
      subtitle: 'From our passion for innovation, we developed our own suite of tools.',
      terrazzoAssistent: {
        badge: 'NEW',
        title: 'Terrazzo Assistent',
        subtitle: 'Terrazzo-Design Simulator',
        description: 'A perfect example of our philosophy: From craftsmanship to cloud solution. We digitized the sample production and realized it as a SaaS platform.',
        feature1Title: 'Real-time Simulation',
        feature1Desc: 'Create designs directly in the browser instead of producing samples at great expense.',
        feature2Title: 'SaaS Platform',
        feature2Desc: 'Central management of all Terrazzo designs via the cloud.',
        cta: 'To the Product'
      }
    },
    startProject: {
      badge: 'Let\'s make noise',
      title: 'Ready to Build Something Different?',
      desc: 'Let\'s collaborate to create software that\'s not just functional, but exceptional. We\'re ready to bring a new rhythm to your project.',
      cta: 'Start a Project',
      emailSubject: 'Project Inquiry',
      emailBody: 'Hey offbeats Team,%0D%0A%0D%0Alet\'s start something great together! 🚀'
    },
    services: {
      preview: {
        title: 'Our Expertise',
        modernization: {
          title: 'Software Modernization',
          description: "Transforming legacy monoliths into future-proof assets. Don't rewrite—evolve."
        },
        architecture: {
          title: 'Architecture',
          description: 'Micro-Frontends, Microservices & Distributed Systems. Scalability by design.'
        },
        development: {
          title: 'Development',
          description: 'For the enthusiasts. We experiment, we build, we create special software for special needs.'
        }
      },
      architecture: {
        badge: 'System Design',
        title: {
          line1: 'We don\'t just write code.',
          line2: 'We design systems.'
        },
        description: 'We specialize in <strong>distributed systems</strong>. We develop architectures that transform complex requirements into scalable and resilient platforms.',
        cta: 'Discuss Architecture',
        microFrontends: {
          title: 'Micro-Frontends',
          description: 'Independent development and deployment of frontend functionalities.'
        },
        microservices: {
          title: 'Microservices',
          description: 'Autonomous development of distributed, scalable, and modular systems.'
        },
        asynchronousCommunication: {
          title: 'Asynchronous Communication',
          description: 'Decoupling systems through seamless asynchronous communication.'
        },
        scale: {
          title: 'Scalability',
          description: 'Architectures designed to grow dynamically with your business success.'
        },
        questionsTitle: 'Questions about Software Architecture?',
        questionsDesc: 'Unsure if your current structure is future-proof? Let’s take a look at it together.',
      },
      development: {
        badge: 'Creation',
        title: {line1: 'Software Development', line2: 'für Visionäre.'},
        description: 'We don’t just write code – we live it. For us, software development is modern craftsmanship. Instead of rigid off-the-shelf tools, we build <strong>bespoke digital platforms</strong> that start exactly where your business needs the decisive edge.',
        cta: 'Start Your Project',
        outOfTheBoxTitle: 'When "Out-of-the-Box" isn’t enough.',
        outOfTheBoxDesc: 'Do you have a business process so unique that standard solutions can’t capture it? That’s exactly where we come in. <strong>We develop tailored applications</strong> that integrate seamlessly into your enterprise environment.',
        fullStackTitle: 'Full-Stack Competence',
        fullStackDesc: 'We don’t do things by halves. We develop the <strong>entire software solution</strong> – from database architecture to pixel-perfect frontends. Everything from a single source, perfectly synchronized.',
        modernStackTitle: 'Modern Technology Stack',
        modernStackDesc: 'Standing still is not an option. We constantly challenge ourselves and test new technologies. That’s the only way to stay ahead and <strong>create something great</strong> instead of just meeting standards.'
      },
      modernization: {
        badge: 'Service Detail',
        title: {
          line1: 'Software',
          line2: 'Modernization'
        },
        description1: 'Is your software getting a bit long in the tooth and you are planning to rewrite it? A complete rewrite is often risky, expensive, and jeopardizes years of accumulated process knowledge.',
        description2: '<strong>We see it differently</strong>: Legacy code is the proven foundation of your daily operations. We don’t throw this capital away; we transform it. Through <strong>evolutionary modernization</strong>, we bring your software up to the latest state of the art.',
        cta: 'Discuss Strategy',
        evolutionTitle: 'Evolution over Revolution',
        evolutionDesc: 'We transform and revitalize your existing software into a modern platform using contemporary strategies and migration techniques.',
        investmentTitle: 'Investment Protection',
        investmentDesc: 'Keep the business logic that makes your company unique. We modernize the architecture, refactor the code, and make your software scalable.'
      }
    },
    contactPage: {
      title: 'Contact Us',
      subtitle: 'Whatever you are aiming for, we are here to help you achieve it.',
      companyName: 'Company Name',
      address: 'Address',
      email: 'Email'
    },

    aboutUs: {
      headline: 'About Us',
      inspiredBy: 'Inspired by Jazz.',
      mission:
        'Our mission is to explore new technological ground, embrace experimentation and courage, to develop software that is not only functional, but truly innovative.',
      whyTitle: 'Why "offbeats"?',
      whyText:
        'Because we deliberately take unconventional paths – but never without a plan: We question standards, systematically evaluate alternatives and implement new solutions where they bring real added value. <strong class="text-brand-accent">Our principles are: bold in experimentation, uncompromising in quality and reliability.</strong>',
      inspirationTitle: 'Our Inspiration',
      inspirationText:
        'And yes: we love listening to jazz. The offbeats – those unexpected accents – remind us that real innovation often happens when you don\'t rigidly follow the beat.',
      valuesList: {
        title: 'Our Principles',
        subtitle: 'The rhythm behind our code',
        courage: {
          title: 'Courage',
          text: 'We have the courage to venture into the unknown. Innovation requires the courage to try new technologies.'
        },
        collaboration: {
          title: 'Collaboration',
          text: 'Like a jazz ensemble, we listen. The best results emerge when we develop ideas together.'
        },
        craftsmanship: {
          title: 'Resilience',
          text: 'Robust craftsmanship. We build architectures that withstand changes and grow with you.'
        }
      },
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
      title: '404',
      subtitle: 'Lost in the rhythm?',
      desc: 'The page you are looking for doesn\'t exist or has been moved to another track.',
      cta: 'Back to Main Stage'
    },
  },
  de: {
    nav: {
      modernization: 'Modernisierung',
      architecture: 'Architektur',
      development: 'Entwicklung',
      about: 'Über uns',
      contact: 'Kontakt'
    },
    hero: {
      title: 'offbeats',
      subtitle: 'Wir bauen die Software, an die sich andere nicht herantrauen.',
      // cta: 'Kontaktiere uns'
      cta: 'Unsere Leistungen entdecken'
    },
    keywords: {
      curious: 'neugierig',
      courageous: 'mutig',
      untypical: 'untypisch',
      modern: 'modern',
      vibrant: 'lebendig'
    },
    products: {
      saasShowcase: 'SaaS Showcase',
      visionInCode: 'Vision in Code',
      subtitle: 'Aus unserer Leidenschaft für Innovation haben wir unsere eigenen Tools entwickelt.',
      terrazzoAssistent: {
        badge: 'NEU',
        title: 'Terrazzo Assistent',
        subtitle: 'Terrazzo-Design Simulator',
        description: 'Ein perfektes Beispiel für unsere Philosophie: Vom Handwerk zur Cloud-Lösung. Wir haben die aufwändige Musterherstellung digitalisiert und als SaaS-Plattform realisiert.',
        feature1Title: 'Echtzeit-Simulation',
        feature1Desc: 'Designs direkt im Browser kreieren, statt aufwendig Muster herstellen.',
        feature2Title: 'SaaS-Plattform',
        feature2Desc: 'Zentrale Verwaltung aller Terrazzo-Designs über die Cloud.',
        cta: 'Zum Produkt'
      }
    },
    startProject: {
      badge: 'Let\'s make noise',
      title: 'Bereit, etwas Besonderes zu bauen?',
      desc: 'Lassen Sie uns gemeinsam Software entwickeln, die nicht nur funktional, sondern außergewöhnlich ist. Wir sind bereit, neuen Rhythmus in Ihr Projekt zu bringen.',
      cta: 'Projekt starten',
      emailSubject: 'Projektanfrage',
      emailBody: 'Hey offbeats-Team,%0D%0A%0D%0Alass uns gemeinsam etwas Großartiges starten! 🚀'
    },
    services: {
      preview: {
        title: 'Unsere Expertise',
        modernization: {
          title: 'Software-Modernisierung',
          description: 'Wir verwandeln veraltete Monolithen in zukunftssichere Assets. Nicht neu schreiben – weiterentwickeln.'
        },
        architecture: {
          title: 'Architektur',
          description: 'Micro-Frontends, Microservices & Distributed Systems. Skalierbarkeit als Design-Prinzip.'
        },
        development: {
          title: 'Entwicklung',
          description: 'Für Visionäre. Wir experimentieren und bauen Spezial-Software für besondere Anforderungen.'
        }
      },
      architecture: {
        badge: 'System Design',
        title: {
          line1: 'Wir schreiben nicht nur Code.',
          line2: 'Wir entwerfen Systeme.'
        },
        description: 'Wir sind spezialisiert auf <strong>Distributed Systems</strong>. Wir entwickeln Architekturen, die komplexe Anforderungen in skalierbare und widerstandsfähige Plattformen verwandeln.',
        cta: 'Architektur besprechen',
        microFrontends: {
          title: 'Micro-Frontends',
          description: 'Unabhängige Entwicklung der Frontend-Application Funktionalitäten.'
        },
        microservices: {
          title: 'Microservices',
          description: 'Unabhängige Entwicklung von verteilten, skalierbaren und modularen Systemen.'
        },
        asynchronousCommunication: {
          title: 'Asynchrone Kommunikation',
          description: 'Entkoppelung von Systemen durch asynchrone Kommunikation.'
        },
        scale: {
          title: 'Skalierbarkeit',
          description: 'Systeme, die dynamisch mit Ihrem geschäftlichen Erfolg mitwachsen.'
        },
        questionsTitle: 'Fragen zu Software-Architektur?',
        questionsDesc: 'Sie sind unsicher, ob Ihre aktuelle Struktur zukunftssicher ist? Werfen wir gemeinsam einen Blick darauf.',
      },
      development: {
        badge: 'Creation',
        title: {
          line1: 'Softwareentwicklung',
          line2: 'für Visionäre.'
        },
        description: 'Wir schreiben Code nicht einfach runter – wir leben ihn. Für uns ist Software-Entwicklung modernes Handwerk. Statt starrer Standard-Tools bauen wir <strong>digitale Plattformen nach Maß</strong>, die exakt dort ansetzen, wo Ihr Business den entscheidenden Vorsprung braucht.',
        cta: 'Besprechen wir Ihr Projekt',
        outOfTheBoxTitle: 'Wenn "Out-of-the-Box" nicht reicht.',
        outOfTheBoxDesc: 'Haben Sie einen Geschäftsprozess, der so einzigartig ist, dass Standardlösungen ihn nicht abbilden können? Genau da kommen wir ins Spiel. <strong>Wir entwickeln maßgeschneiderte Applikationen</strong>, die sich nahtlos in Ihre Enterprise-Umgebung einfügen.',
        fullStackTitle: 'Full-Stack Kompetenz',
        fullStackDesc: 'Wir liefern keine halben Sachen. Wir entwickeln die <strong>gesamte Softwarelösung</strong> – von der Datenbank-Architektur bis zum Pixel-perfect Frontend. Alles aus einer Hand, alles perfekt abgestimmt.',
        modernStackTitle: 'Moderner Technologie-Stack',
        modernStackDesc: 'Stillstand ist keine Option. Wir fordern uns selbst ständig heraus und testen neue Technologien. Nur so bleiben wir am Puls der Zeit und können <strong>Großartiges schaffen</strong>, statt nur Standards zu erfüllen.'
      },
      modernization: {
        badge: 'Service Detail',
        title: {
          line1: 'Software',
          line2: 'Modernisierung'
        },
        description1: 'Ihre Software ist schon etwas in die Jahre gekommen und Sie planen die Software neu zu schreiben? Ein kompletter Rewrite der Software ist oft riskant, teuer und gefährdet Jahre an gewachsenem Prozesswissen.',
        description2: '<strong>Wir sehen das anders</strong>: Legacy-Code ist das bewährte Fundament Ihres täglichen Arbeitens. Wir werfen dieses Kapital nicht weg, sondern transformieren es. Durch <strong>evolutionäre Modernisierung</strong> heben wir Ihre Software auf den neuesten Stand der Technik.',
        cta: 'Strategie besprechen',
        evolutionTitle: 'Evolution statt Revolution',
        evolutionDesc: 'Wir transformieren und revitalisieren Ihre bestehende Software in eine moderne Plattform mit modernen Strategien und Migrationstechniken.',
        investmentTitle: 'Investitionsschutz',
        investmentDesc: 'Behalten Sie die Business-Logik, die Ihr Unternehmen einzigartig macht. Wir modernisieren die Architektur, refactoren den Code und machen Ihre Software skalierbar.'
      }
    },
    contactPage: {
      title: 'Kontaktiere uns',
      subtitle: 'Was auch immer Ihr Ziel ist – wir helfen Ihnen dabei, es sicher zu erreichen.',
      companyName: 'Firmenname',
      address: 'Adresse',
      email: 'E-Mail'
    },
    aboutUs: {
      headline: 'Über uns',
      inspiredBy: 'Inspiriert von Jazz.',
      mission:
        'Unsere Mission ist es, technologisches Neuland zu erkunden, Experimentierfreude und Mut zu zeigen, um Software zu entwickeln, die nicht nur funktional, sondern wahrhaft innovativ ist.',
      whyTitle: 'Warum „offbeats“?',
      whyText:
        'Weil wir bewusst untypische Wege gehen – aber niemals planlos: Wir hinterfragen Standards, evaluieren Alternativen systematisch und setzen dort neue Lösungen ein, wo sie echten Mehrwert bringen. <strong class="text-brand-accent">Dabei gilt: mutig im Experiment, kompromisslos in Qualität und Verlässlichkeit.</strong>',
      inspirationTitle: 'Unsere Inspiration',
      inspirationText:
        'Und ja: wir hören am liebsten Jazz. Die Offbeats – diese unerwarteten Akzente – erinnern uns daran, dass echte Innovation oft dort entsteht, wo man nicht stur dem Takt folgt.',
      valuesList: {
        title: 'Unsere Prizipien',
        subtitle: 'Der Rhythmus hinter unserem Code',
        courage: {
          title: 'Mut',
          text: 'Wir haben den Mut, ins Unbekannte aufzubrechen. Innovation braucht den Mut, neue Technologien auszuprobieren.'
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
      title: '404',
      subtitle: 'Aus dem Takt geraten?',
      desc: 'Die Seite, nach der Sie suchen, existiert nicht oder wurde auf eine andere Bühne verschoben.',
      cta: 'Zurück zur Startseite'
    },
  }
}
