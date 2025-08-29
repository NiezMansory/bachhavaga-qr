/* =========================================================================
   Bacchavaga – Multilingual content + UI
   - Flag + language name in selector (🇬🇧 English, 🇩🇪 Deutsch, …)
   - Persists choice, sets <html lang/dir>, renders all sections
   - Safe: skips missing nodes without breaking
   ========================================================================= */

const flags = {
  en: "🇬🇧", de: "🇩🇪", fr: "🇫🇷", it: "🇮🇹", es: "🇪🇸",
  tr: "🇹🇷", nl: "🇳🇱", pl: "🇵🇱", ru: "🇷🇺", ar: "🇸🇦"
};

const translations = {
  en: {
    label: "English", ui: { changeLanguage: "Language" }, dir: "ltr",
    titles: {
      hero: "Premium Organic Olive Oil from Tunisia – The Heritage of Vaga",
      organic: "Organic Olive Trees",
      harvest: "Traditional Harvest",
      awards: "Awards & Recognition",
      sustainability: "Sustainability",
      vision: "Our Vision",
      contact: "Contact",
      astuce: "Bacchavaga’s Expert Advice – Choose Exceptional Olive Oil"
    },
    story: `For centuries, our family in Béja (the ancient city of Vaga) has cultivated olive trees on the rich Mediterranean soil of Tunisia. Passed down from father to son, our heritage is rooted in traditional farming – where patience, respect for nature, and knowledge of the land guide every step. Today, Bacchavaga carries this legacy forward, combining ancestral wisdom with modern bottling to bring you authentic olive oil that speaks of history, purity, and excellence.`,
    organic: `Tunisia is home to some of the world’s oldest organic olive trees, many of which still grow naturally without chemicals or artificial irrigation. Our groves are part of this unique ecosystem – producing olives rich in flavor and nutrients. Each drop of Bacchavaga olive oil reflects this authenticity: certified organic, pure, and cultivated with care.`,
    harvest: `Our olives are harvested by hand, using traditional methods passed down through generations. Farmers – including many women of our community – carefully pick each olive to preserve its integrity. Within hours, the olives are cold-pressed, ensuring the highest quality and freshness in every bottle.`,
    awards: `Tunisian olive oil is celebrated worldwide and has received numerous international awards in New York, London, Tokyo, and beyond. Bacchavaga is proud to be part of this story – representing Tunisia’s excellence in taste, quality, and tradition.`,
    sustainability: `We are committed to a sustainable future: protecting our soil, preserving water, and supporting the local farming community. Every bottle of Bacchavaga contributes to this mission – keeping traditions alive while ensuring future generations can continue to enjoy Tunisia’s olive heritage.`,
    vision: `Bacchavaga is more than olive oil – it is a story of family, heritage, and pride. From the ancient groves of Vaga to your table, we invite you to share in a journey that has been nurtured for centuries.`,
    contact: `For inquiries: info@bacchavaga.de`,
    astuce: [
      "Always choose extra virgin: cold-pressed, chemical-free; highest in natural antioxidants and polyphenols.",
      "Prefer an opaque bottle: light degrades flavour and nutrients; dark glass or tin protects the oil.",
      "Check the harvest date: oil doesn’t age like wine; choose the latest harvest; enjoy within a year and within 3–4 months after opening.",
      "Trust certified origin & traceability: PDO/PGI or clearly stated single origin.",
      "Look for low acidity: < 0.8% (top oils ~0.3%) — a sign of careful picking and fast cold-pressing.",
      "Think polyphenols & health: fresh, well-stored extra virgin supports heart health and reduces oxidative stress.",
      "Avoid blends: single-origin preserves the grove’s character — Bacchavaga is never blended."
    ],
  },

  de: {
    label: "Deutsch", ui: { changeLanguage: "Sprache" }, dir: "ltr",
    titles: {
      hero: "Premium Bio-Olivenöl aus Tunesien – Das Erbe von Vaga",
      organic: "Organische Olivenbäume",
      harvest: "Traditionelle Ernte",
      awards: "Auszeichnungen & Anerkennung",
      sustainability: "Nachhaltigkeit",
      vision: "Unsere Vision",
      contact: "Kontakt",
      astuce: "Bacchavagas Profi-Tipp – So wählen Sie ein herausragendes Olivenöl"
    },
    story: `Seit Jahrhunderten bewirtschaftet unsere Familie in Béja (der antiken Stadt Vaga) Olivenbäume im fruchtbaren mediterranen Boden Tunesiens. Von Vater zu Sohn weitergegeben, ist unser Erbe in der traditionellen Landwirtschaft verwurzelt – geprägt von Geduld, Respekt vor der Natur und tiefem Wissen um das Land. Heute führt Bacchavaga dieses Erbe fort, indem wir überliefte Weisheit mit moderner Abfüllung verbinden, um authentisches Olivenöl voller Geschichte, Reinheit und Exzellenz zu liefern.`,
    organic: `Tunesien ist Heimat einiger der ältesten Bio-Olivenbäume der Welt, die oft ohne Chemikalien oder künstliche Bewässerung gedeihen. Unsere Haine sind Teil dieses einzigartigen Ökosystems und bringen Oliven hervor, die reich an Geschmack und Nährstoffen sind. Jeder Tropfen Bacchavaga-Olivenöl spiegelt diese Authentizität wider: bio-zertifiziert, rein und mit Sorgfalt kultiviert.`,
    harvest: `Unsere Oliven werden von Hand geerntet – nach Methoden, die seit Generationen weitergegeben werden. Bäuerinnen und Bauern, darunter viele Frauen unserer Gemeinschaft, pflücken jede Olive sorgfältig, um ihre Qualität zu bewahren. Innerhalb weniger Stunden werden die Früchte kaltgepresst – für höchste Frische in jeder Flasche.`,
    awards: `Tunesisches Olivenöl wird weltweit gefeiert und hat zahlreiche internationale Auszeichnungen in New York, London, Tokio und darüber hinaus erhalten. Bacchavaga ist stolz, Teil dieser Geschichte zu sein – als Botschafter für Geschmack, Qualität und Tradition Tunesiens.`,
    sustainability: `Wir setzen uns für eine nachhaltige Zukunft ein: Wir schützen den Boden, bewahren Wasser und unterstützen die lokale Landwirtschaft. Jede Flasche Bacchavaga trägt dazu bei – Traditionen zu bewahren und kommenden Generationen das tunesische Olivenerbe zu sichern.`,
    vision: `Bacchavaga ist mehr als Olivenöl – es ist eine Familiengeschichte, ein Erbe und ein Stolz. Von den antiken Hainen von Vaga bis auf Ihren Tisch laden wir Sie ein, an einer seit Jahrhunderten gepflegten Reise teilzuhaben.`,
    contact: `Anfragen: info@bacchavaga.de`,
    astuce: [
      "Immer Extra Nativ wählen: kaltgepresst, ohne Chemie; am reichsten an Antioxidantien und Polyphenolen.",
      "Dunkle Flasche bevorzugen: Licht schadet Aroma und Nährstoffen; dunkles Glas oder Blech schützt.",
      "Erntedatum prüfen: Öl reift nicht wie Wein; neueste Ernte wählen; innerhalb eines Jahres und 3–4 Monate nach Öffnung genießen.",
      "Zertifizierte Herkunft & Rückverfolgbarkeit: g.U./g.g.A. oder klar ausgewiesener Single-Origin.",
      "Niedrige Säure suchen: < 0,8 % (Top-Öle ~0,3 %) — Zeichen für sorgfältige Ernte und schnelle Kaltpressung.",
      "An Polyphenole & Gesundheit denken: frisches, gut gelagertes Extra Nativ unterstützt das Herz und reduziert oxidativen Stress.",
      "Mischungen meiden: Single-Origin bewahrt den Charakter des Hains — Bacchavaga wird nicht gemischt."
    ],
  },

  fr: {
    label: "Français", ui: { changeLanguage: "Langue" }, dir: "ltr",
    titles: {
      hero: "Huile d’olive biologique premium de Tunisie – L’héritage de Vaga",
      organic: "Oliviers biologiques",
      harvest: "Récolte traditionnelle",
      awards: "Prix & Reconnaissance",
      sustainability: "Durabilité",
      vision: "Notre vision",
      contact: "Contact",
      astuce: "L’Astuce d’Expert Bacchavaga – Bien choisir son huile d’olive"
    },
    story: `Depuis des siècles, notre famille à Béja (l’ancienne ville de Vaga) cultive des oliviers sur les terres méditerranéennes de Tunisie. Transmis de père en fils, notre héritage s’enracine dans l’agriculture traditionnelle – patience, respect de la nature et connaissance du terroir. Aujourd’hui, Bacchavaga perpétue ce legs en mariant sagesse ancestrale et mise en bouteille moderne pour offrir une huile d’olive authentique, synonyme d’histoire, de pureté et d’excellence.`,
    organic: `La Tunisie abrite certains des plus anciens oliviers biologiques au monde, poussant naturellement sans produits chimiques ni irrigation artificielle. Nos oliveraies appartiennent à cet écosystème unique et donnent des olives riches en arômes et nutriments. Chaque goutte d’huile Bacchavaga reflète cette authenticité : certifiée bio, pure et cultivée avec soin.`,
    harvest: `Nos olives sont récoltées à la main selon des méthodes transmises de génération en génération. Les agriculteurs – dont de nombreuses femmes de notre communauté – cueillent chaque olive avec précaution pour préserver son intégrité. En quelques heures, elles sont pressées à froid afin de garantir une qualité et une fraîcheur optimales.`,
    awards: `L’huile d’olive tunisienne est célébrée dans le monde entier et a reçu de nombreux prix internationaux à New York, Londres, Tokyo et au-delà. Bacchavaga est fière de faire partie de cette histoire – l’excellence tunisienne en goût, qualité et tradition.`,
    sustainability: `Nous œuvrons pour un avenir durable : protection des sols, préservation de l’eau et soutien à la communauté agricole locale. Chaque bouteille Bacchavaga contribue à cette mission, pour que les générations futures profitent de l’héritage oléicole tunisien.`,
    vision: `Bacchavaga est plus qu’une huile d’olive – c’est une histoire de famille, d’héritage et de fierté. Des oliveraies antiques de Vaga jusqu’à votre table, partagez une aventure patiemment cultivée depuis des siècles.`,
    contact: `Demandes : info@bacchavaga.de`,
    astuce: [
      "Choisir l’extra-vierge : pressée à froid, sans solvants ; la plus riche en antioxydants et polyphénols.",
      "Privilégier une bouteille opaque : la lumière altère arômes et nutriments ; verre sombre ou métal protègent l’huile.",
      "Vérifier la date de récolte : l’huile ne se bonifie pas ; préférez une récolte récente ; consommez dans l’année et 3–4 mois après ouverture.",
      "Origine certifiée & traçabilité : AOP/IGP ou origine unique clairement indiquée.",
      "Acidité faible : < 0,8 % (les meilleures ~0,3 %) — signe de cueillette soignée et d’extraction rapide à froid.",
      "Polyphénols & santé : une extra-vierge fraîche et bien conservée soutient le cœur et réduit le stress oxydatif.",
      "Éviter les mélanges : l’origine unique préserve l’identité du terroir — Bacchavaga n’est jamais assemblée."
    ],
  },

  it: {
    label: "Italiano", ui: { changeLanguage: "Lingua" }, dir: "ltr",
    titles: {
      hero: "Olio extravergine biologico dalla Tunisia – L’eredità di Vaga",
      organic: "Ulivi biologici",
      harvest: "Raccolta tradizionale",
      awards: "Premi & Riconoscimenti",
      sustainability: "Sostenibilità",
      vision: "La nostra visione",
      contact: "Contatti",
      astuce: "Consiglio d’Esperto Bacchavaga – Come scegliere un olio eccezionale"
    },
    story: `Da secoli la nostra famiglia a Béja (l’antica Vaga) coltiva ulivi sul ricco suolo mediterraneo della Tunisia. Tramandato di padre in figlio, il nostro patrimonio affonda le radici nell’agricoltura tradizionale – pazienza, rispetto per la natura e conoscenza della terra. Oggi Bacchavaga porta avanti questo lascito unendo saggezza ancestrale e imbottigliamento moderno per offrirvi un olio autentico che parla di storia, purezza ed eccellenza.`,
    organic: `La Tunisia ospita alcuni dei più antichi ulivi biologici al mondo, che crescono naturalmente senza prodotti chimici né irrigazione artificiale. I nostri uliveti fanno parte di questo ecosistema unico e producono olive ricche di gusto e nutrienti. Ogni goccia di Bacchavaga riflette questa autenticità: certificata bio, pura e coltivata con cura.`,
    harvest: `Le nostre olive vengono raccolte a mano seguendo metodi tramandati da generazioni. I contadini – molte sono donne della nostra comunità – selezionano con attenzione ogni oliva per preservarne l’integrità. Nel giro di poche ore vengono spremute a freddo, garantendo la massima qualità e freschezza.`,
    awards: `L’olio tunisino è celebrato in tutto il mondo e ha ricevuto numerosi premi internazionali a New York, Londra, Tokyo e oltre. Bacchavaga è orgogliosa di far parte di questa storia, rappresentando l’eccellenza della Tunisia in gusto, qualità e tradizione.`,
    sustainability: `Ci impegniamo per un futuro sostenibile: proteggiamo il suolo, preserviamo l’acqua e sosteniamo l’agricoltura locale. Ogni bottiglia Bacchavaga contribuisce a questa missione, mantenendo vive le tradizioni e tutelando l’eredità olearia per le generazioni future.`,
    vision: `Bacchavaga è più di un olio – è una storia di famiglia, eredità e orgoglio. Dalle antiche campagne di Vaga alla vostra tavola, vi invitiamo a condividere un percorso coltivato per secoli.`,
    contact: `Richieste: info@bacchavaga.de`,
    astuce: [
      "Scegli sempre l’extravergine: spremitura a freddo, senza chimica; massima ricchezza di antiossidanti e polifenoli.",
      "Preferisci bottiglia opaca: la luce danneggia aromi e nutrienti; vetro scuro o lattina proteggono l’olio.",
      "Controlla la data di raccolta: l’olio non invecchia come il vino; scegli il raccolto più recente; consuma entro un anno e 3–4 mesi dall’apertura.",
      "Origine certificata e tracciabile: DOP/IGP o origine unica dichiarata.",
      "Acidità bassa: < 0,8% (i migliori ~0,3%) — segno di raccolta accurata ed estrazione rapida a freddo.",
      "Polifenoli & salute: extravergine fresco e ben conservato sostiene il cuore e riduce lo stress ossidativo.",
      "Evita i blend: il single-origin conserva il carattere dell’oliveto — Bacchavaga non è mai miscelato."
    ],
  },

  es: {
    label: "Español", ui: { changeLanguage: "Idioma" }, dir: "ltr",
    titles: {
      hero: "Aceite de oliva orgánico premium de Túnez – El legado de Vaga",
      organic: "Olivos orgánicos",
      harvest: "Cosecha tradicional",
      awards: "Premios y Reconocimientos",
      sustainability: "Sostenibilidad",
      vision: "Nuestra visión",
      contact: "Contacto",
      astuce: "Consejo Experto de Bacchavaga – Cómo elegir un aceite excepcional"
    },
    story: `Durante siglos, nuestra familia en Béja (la antigua ciudad de Vaga) ha cultivado olivos en la rica tierra mediterránea de Túnez. Transmitido de padres a hijos, nuestro legado se basa en la agricultura tradicional: paciencia, respeto por la naturaleza y conocimiento del terreno. Hoy, Bacchavaga mantiene vivo este legado uniendo la sabiduría ancestral con el embotellado moderno para ofrecer un aceite auténtico que habla de historia, pureza y excelencia.`,
    organic: `Túnez alberga algunos de los olivos orgánicos más antiguos del mundo, que crecen de forma natural sin químicos ni riego artificial. Nuestros olivares forman parte de este ecosistema único y producen aceitunas ricas en sabor y nutrientes. Cada gota de Bacchavaga refleja esta autenticidad: certificada orgánica, pura y cultivada con esmero.`,
    harvest: `Nuestras aceitunas se recogen a mano con métodos transmitidos de generación en generación. Los agricultores –incluidas muchas mujeres de nuestra comunidad– seleccionan cada aceituna con cuidado para preservar su calidad. A las pocas horas se prensan en frío para garantizar máxima frescura en cada botella.`,
    awards: `El aceite de oliva tunecino es reconocido en todo el mundo y ha recibido numerosos premios internacionales en Nueva York, Londres, Tokio y más. Bacchavaga se enorgullece de formar parte de esta historia, representando la excelencia de Túnez en sabor, calidad y tradición.`,
    sustainability: `Estamos comprometidos con un futuro sostenible: protegemos el suelo, preservamos el agua y apoyamos a la comunidad agrícola local. Cada botella de Bacchavaga contribuye a esta misión, manteniendo vivas las tradiciones y asegurando el legado oleícola para las generaciones futuras.`,
    vision: `Bacchavaga es más que aceite de oliva: es una historia de familia, herencia y orgullo. Desde los antiguos olivares de Vaga hasta tu mesa, te invitamos a compartir un camino cultivado durante siglos.`,
    contact: `Consultas: info@bacchavaga.de`,
    astuce: [
      "Elige siempre virgen extra: extracción en frío, sin químicos; más rico en antioxidantes y polifenoles.",
      "Prefiere botella opaca: la luz daña sabor y nutrientes; vidrio oscuro o lata protegen el aceite.",
      "Comprueba la fecha de cosecha: el aceite no envejece como el vino; elige la cosecha más reciente; consume en un año y 3–4 meses tras abrir.",
      "Origen certificado y trazabilidad: DOP/IGP u origen único claramente indicado.",
      "Acidez baja: < 0,8% (los mejores ~0,3%) — señal de recolección cuidadosa y prensado rápido en frío.",
      "Polifenoles & salud: un virgen extra fresco y bien conservado ayuda al corazón y reduce el estrés oxidativo.",
      "Evita mezclas: el origen único preserva el carácter del olivar — Bacchavaga no se mezcla."
    ],
  },

  tr: {
    label: "Türkçe", ui: { changeLanguage: "Dil" }, dir: "ltr",
    titles: {
      hero: "Tunus’tan Premium Organik Zeytinyağı – Vaga Mirası",
      organic: "Organik Zeytin Ağaçları",
      harvest: "Geleneksel Hasat",
      awards: "Ödüller ve Tanınırlık",
      sustainability: "Sürdürülebilirlik",
      vision: "Vizyonumuz",
      contact: "İletişim",
      astuce: "Bacchavaga Uzman Tavsiyesi – Olağanüstü Zeytinyağı Seçimi"
    },
    story: `Yüzyıllardır ailemiz, Tunus’un zengin Akdeniz topraklarında yer alan Béja’da (antik Vaga) zeytin ağaçları yetiştiriyor. Babadan oğula aktarılan mirasımız; sabır, doğaya saygı ve toprağı bilmeye dayalı geleneksel tarıma kök salmıştır. Bugün Bacchavaga, atalarımızın bilgisini modern şişeleme ile birleştirerek tarihe, saflığa ve mükemmelliğe seslenen gerçek zeytinyağını sunar.`,
    organic: `Tunus, dünyanın en eski organik zeytin ağaçlarından bazılarına ev sahipliği yapar; birçoğu kimyasal kullanmadan ve yapay sulama olmadan doğal biçimde büyür. Bacchavaga’nın her damlası bu özgünlüğü yansıtır: organik sertifikalı, saf ve özenle yetiştirilmiştir.`,
    harvest: `Zeytinlerimiz kuşaktan kuşağa aktarılan yöntemlerle **elle** toplanır. Topluluğumuzdaki birçok kadın çiftçi de dâhil olmak üzere her zeytin dikkatle seçilir. Saatler içinde soğuk sıkım yapılır; böylece her şişede en yüksek kalite ve tazelik korunur.`,
    awards: `Tunus zeytinyağı dünya çapında takdir görmekte ve çok sayıda uluslararası ödül almaktadır. Bacchavaga, Tunus’un lezzet, kalite ve gelenekteki mükemmelliğini temsil etmekten gurur duyar.`,
    sustainability: `Sürdürülebilir bir gelecek için çalışıyoruz: toprağı koruyor, suyu muhafaza ediyor ve yerel çiftçileri destekliyoruz.`,
    vision: `Bacchavaga sadece bir zeytinyağı değil; aile, miras ve gurur hikâyesidir.`,
    contact: `İletişim: info@bacchavaga.de`,
    astuce: [
      "Her zaman sızma yağ seçin: soğuk sıkım; en yüksek antioksidan/polifenol.",
      "Opak şişe: ışık zarar verir; koyu cam/teneke korur.",
      "Hasat tarihi: en yeni hasadı tercih edin; açıldıktan sonra 3–4 ay.",
      "Sertifikalı köken/izlenebilirlik.",
      "Düşük asit: <%0,8 (üst ~%0,3).",
      "Polifenoller & sağlık: kalp dostu, oksidatif stresi azaltır.",
      "Karışımlardan kaçının."
    ],
  },

  nl: {
    label: "Nederlands", ui: { changeLanguage: "Taal" }, dir: "ltr",
    titles: {
      hero: "Premium biologische olijfolie uit Tunesië – De erfenis van Vaga",
      organic: "Biologische olijfbomen",
      harvest: "Traditionele oogst",
      awards: "Prijzen & Erkenning",
      sustainability: "Duurzaamheid",
      vision: "Onze visie",
      contact: "Contact",
      astuce: "Bacchavaga’s Expertadvies – Zo kies je een uitzonderlijke olijfolie"
    },
    story: `Al eeuwenlang cultiveert onze familie in Béja (de antieke stad Vaga) olijfbomen op de vruchtbare mediterrane bodem van Tunesië…`,
    organic: `Tunesië herbergt enkele van ’s werelds oudste biologische olijfbomen…`,
    harvest: `Onze olijven worden met de hand geplukt volgens traditionele methoden…`,
    awards: `Tunesische olijfolie wordt wereldwijd geprezen…`,
    sustainability: `Wij zetten ons in voor een duurzame toekomst…`,
    vision: `Bacchavaga is meer dan olijfolie – een verhaal van familie en trots.`,
    contact: `Vragen: info@bacchavaga.de`,
    astuce: [
      "Kies extra vierge; koudgeperst.",
      "Ondoorzichtige fles beschermt.",
      "Check oogstdatum; vers is beter.",
      "Gecertificeerde herkomst/traceerbaar.",
      "Lage zuurgraad < 0,8%.",
      "Denk aan polyfenolen & gezondheid.",
      "Vermijd blends; single-origin."
    ],
  },

  pl: {
    label: "Polski", ui: { changeLanguage: "Język" }, dir: "ltr",
    titles: {
      hero: "Organiczna oliwa premium z Tunezji – Dziedzictwo Vaga",
      organic: "Organiczne drzewa oliwne",
      harvest: "Tradycyjne zbiory",
      awards: "Nagrody i wyróżnienia",
      sustainability: "Zrównoważony rozwój",
      vision: "Nasza wizja",
      contact: "Kontakt",
      astuce: "Porada Ekspercka Bacchavaga – Jak wybrać wyjątkową oliwę"
    },
    story: `Od wieków nasza rodzina w Béja (starożytna Vaga)…`,
    organic: `Tunezja jest domem jednych z najstarszych drzew oliwnych…`,
    harvest: `Oliwki zbieramy ręcznie…`,
    awards: `Tunezyjska oliwa zdobywa liczne nagrody…`,
    sustainability: `Dbamy o glebę, wodę i lokalną społeczność…`,
    vision: `Bacchavaga to więcej niż oliwa – to historia rodziny.`,
    contact: `Kontakt: info@bacchavaga.de`,
    astuce: [
      "Wybieraj extra virgin.",
      "Nieprzezroczysta butelka chroni.",
      "Sprawdzaj datę zbioru.",
      "Certyfikowane pochodzenie.",
      "Niska kwasowość < 0,8%.",
      "Polifenole wspierają zdrowie.",
      "Unikaj mieszanek."
    ],
  },

  ru: {
    label: "Русский", ui: { changeLanguage: "Язык" }, dir: "ltr",
    titles: {
      hero: "Премиальное органическое оливковое масло из Туниса — Наследие Ваґи",
      organic: "Органические оливковые деревья",
      harvest: "Традиционный сбор",
      awards: "Награды и признание",
      sustainability: "Устойчивое развитие",
      vision: "Наша философия",
      contact: "Контакты",
      astuce: "Совет экспертов Bacchavaga — как выбрать выдающееся масло"
    },
    story: `На протяжении столетий наша семья в Бедже (древней Ваґе)…`,
    organic: `Тунис — родина древних оливковых деревьев…`,
    harvest: `Мы собираем оливки вручную…`,
    awards: `Тунисское масло ценят во всем мире…`,
    sustainability: `Мы защищаем почву, бережем воду…`,
    vision: `Bacchavaga — больше чем масло: это история семьи.`,
    contact: `Запросы: info@bacchavaga.de`,
    astuce: [
      "Выбирайте extra virgin, холодный отжим.",
      "Непрозрачная бутылка защищает.",
      "Смотрите дату урожая.",
      "Сертифицированное происхождение.",
      "Низкая кислотность < 0,8%.",
      "Полифенолы полезны для сердца.",
      "Избегайте смесей."
    ],
  },

  ar: {
    label: "العربية", ui: { changeLanguage: "اللغة" }, dir: "rtl",
    titles: {
      hero: "زيت زيتون عضوي فاخر من تونس — إرث فاغا",
      organic: "أشجار زيتون عضوية",
      harvest: "جني تقليدي",
      awards: "جوائز وتقدير",
      sustainability: "الاستدامة",
      vision: "رؤيتنا",
      contact: "تواصل معنا",
      astuce: "نصيحة الخبراء من Bacchavaga — كيف تختار زيتًا استثنائيًا"
    },
    story: `لقرون طويلة دأبت عائلتنا في باجة (مدينة فاغا القديمة)…`,
    organic: `تضم تونس بعضاً من أقدم أشجار الزيتون العضوية…`,
    harvest: `نَجني الزيتون يدويًا وفق أساليب متوارثة…`,
    awards: `يحظى الزيت التونسي بتقدير عالمي…`,
    sustainability: `نحمي التربة ونحافظ على المياه…`,
    vision: `Bacchavaga ليست مجرد زيت زيتون؛ إنها قصة عائلة.`,
    contact: `للاستفسار: info@bacchavaga.de`,
    astuce: [
      "اختر دائمًا البِكر الممتاز؛ معصور على البارد.",
      "زجاجة معتمة أفضل لحماية الزيت.",
      "تحقق من تاريخ الحصاد.",
      "أصل معتمد وإمكانية تتبّع.",
      "حموضة منخفضة < ‎0.8%‎.",
      "البوليفينولات مفيدة للقلب.",
      "تجنّب الخلطات."
    ],
  },
};

/* ---------- helpers ---------- */
const $ = (id) => document.getElementById(id);
const q = (sel) => document.querySelector(sel);

function set(node, text, isHTML=false){
  if(!node) return;
  if(isHTML) node.innerHTML = text;
  else node.textContent = text;
}

/* Build the language <select> with "🇬🇧 English" etc. */
function buildLanguageMenu(sel){
  sel.innerHTML = "";
  const order = ["en","de","fr","it","es","tr","nl","pl","ru","ar"];
  order.forEach(code=>{
    const t = translations[code];
    if(!t) return;
    const opt = document.createElement("option");
    opt.value = code;
    opt.textContent = `${flags[code] ?? ""} ${t.label}`;
    sel.appendChild(opt);
  });
}

/* ---- render all content ---- */
function render(lang){
  const t = translations[lang] || translations.en;

  // document language + direction
  document.documentElement.lang = lang;
  document.documentElement.dir  = t.dir || "ltr";

  // translate label “Language”
  const lab = q(".lang-label");
  if(lab) lab.textContent = t.ui?.changeLanguage || "Language";

  // Headline/sections
  set($("t-hero"), t.titles.hero);
  set($("p-story"), t.story);

  set($("t-organic"), t.titles.organic);
  set($("p-organic"), t.organic);

  set($("t-harvest"), t.titles.harvest);
  set($("p-harvest"), t.harvest);

  set($("t-awards"), t.titles.awards);
  set($("p-awards"), t.awards);

  set($("t-sustainability"), t.titles.sustainability);
  set($("p-sustainability"), t.sustainability);

  set($("t-vision"), t.titles.vision);
  set($("p-vision"), t.vision);

  // Contact (keep mailto link)
  const contactHTML = (t.contact || "info@bacchavaga.de")
    .replace(/info@bacchavaga\.de/gi, '<a href="mailto:info@bacchavaga.de">info@bacchavaga.de</a>');
  set($("t-contact"), t.titles.contact);
  set($("p-contact"), contactHTML, true);

  // Optional: Astuce section (only if exists in HTML)
  set($("t-astuce"), t.titles?.astuce || "");
  const tips = t.astuce || [];
  for(let i=1;i<=7;i++){
    set($(`a${i}`), tips[i-1] || "");
  }

  try{ localStorage.setItem("lang", lang); }catch(e){}
}

/* ---- boot ---- */
(function init(){
  const sel = $("languageSwitcher");
  if(!sel) return;

  buildLanguageMenu(sel);

  const saved = (()=>{ try{return localStorage.getItem("lang");}catch(e){return null;} })();
  const lang = saved || "en";
  render(lang);
  sel.value = lang;

  sel.addEventListener("change", e => render(e.target.value));
})();
