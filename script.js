/* =========================================================================
   Bacchavaga QR — i18n script
   - German is default; Arabic second
   - Section titles + paragraphs + advice translated for 10 languages
   ========================================================================= */

/* ----- Languages meta (dir + flag + name) ----- */
const LANGS = {
  de: { flag:"🇩🇪", name:"Deutsch",   dir:"ltr" },
  ar: { flag:"🇹🇳", name:"العربية",   dir:"rtl" }, // Tunisian Arabic
  en: { flag:"🇬🇧", name:"English",   dir:"ltr" },
  fr: { flag:"🇫🇷", name:"Français",  dir:"ltr" },
  it: { flag:"🇮🇹", name:"Italiano",  dir:"ltr" },
  es: { flag:"🇪🇸", name:"Español",   dir:"ltr" },
  tr: { flag:"🇹🇷", name:"Türkçe",    dir:"ltr" },
  nl: { flag:"🇳🇱", name:"Nederlands",dir:"ltr" },
  pl: { flag:"🇵🇱", name:"Polski",    dir:"ltr" },
  ru: { flag:"🇷🇺", name:"Русский",   dir:"ltr" },
};
/* Deterministic order in the selector */
const ORDER = ["de","ar","en","fr","it","es","tr","nl","pl","ru"];

/* ----- Translations ----- */
const translations = {
  /* ========== GERMAN (default) ========== */
  de:{
    label:"DE", dir:"ltr",
    titles:{
      hero:"Premium Bio-Olivenöl aus Tunesien – Das Erbe von Vaga",
      organic:"Organische Olivenbäume",
      harvest:"Traditionelle Ernte",
      awards:"Auszeichnungen & Anerkennung",
      sustainability:"Nachhaltigkeit",
      vision:"Unsere Vision",
      contact:"Kontakt",
      astuce:"Bacchavagas Profi-Tipps – So wählen Sie herausragendes Olivenöl"
    },
    story:`Seit Jahrhunderten bewirtschaftet unsere Familie in Béja (der antiken Stadt Vaga) Olivenhaine auf fruchtbaren, mediterranen Böden. Von Vater zu Sohn weitergegeben, beruht unser Erbe auf traditioneller Landwirtschaft – mit Geduld, Respekt vor der Natur und tiefem Wissen über das Land. Heute führt Bacchavaga diese Tradition fort und verbindet überliefte Handwerkskunst mit moderner Abfüllung, um ein authentisches Olivenöl zu liefern, das für Geschichte, Reinheit und Exzellenz steht.`,
    organic:`Tunesien ist die Heimat einiger der ältesten Bio-Olivenbäume der Welt, die vielerorts ganz natürlich – ohne Chemie und künstliche Bewässerung – gedeihen. Unsere Haine sind Teil dieses einzigartigen Ökosystems und bringen Oliven hervor, die reich an Geschmack und Nährstoffen sind. Jeder Tropfen Bacchavaga spiegelt diese Echtheit wider: zertifiziert bio, unverfälscht und mit Sorgfalt kultiviert.`,
    harvest:`Unsere Oliven werden von Hand geerntet – nach Methoden, die seit Generationen weitergegeben werden. Bäuerinnen und Bauern aus unserer Gemeinschaft pflücken jede Olive behutsam, um ihre Qualität zu bewahren. Innerhalb weniger Stunden werden die Früchte kalt gepresst – für höchste Frische und Güte in jeder Flasche.`,
    awards:`Tunesisches Olivenöl wird weltweit gefeiert und erhält regelmäßig Auszeichnungen in New York, London, Tokio und darüber hinaus. Bacchavaga ist stolz darauf, Teil dieser Erfolgsgeschichte zu sein – als Botschafter tunesischer Spitzenqualität, Geschmacksfülle und Tradition.`,
    sustainability:`Wir engagieren uns für eine nachhaltige Zukunft: Schutz des Bodens, sparsamer Umgang mit Wasser und Unterstützung der lokalen Landwirtschaft. Jede Flasche Bacchavaga trägt zu diesem Ziel bei – Traditionen lebendig zu halten und gleichzeitig kommenden Generationen Tunesiens Olivenkulturerbe zu sichern.`,
    vision:`Bacchavaga ist mehr als Olivenöl – es ist eine Geschichte von Familie, Herkunft und Stolz. Von den alten Hainen Vagas bis auf Ihren Tisch laden wir Sie ein, an einem Weg teilzuhaben, der über Jahrhunderte gepflegt wurde.`,
    contact:`Anfragen: <a href="mailto:info@bacchavaga.de">info@bacchavaga.de</a>`,
    astuce:[
      "Immer „Extra Nativ“ (kaltgepresst, ohne Chemie) wählen – reich an Polyphenolen.",
      "Opake/dunkle Flasche bevorzugen: Licht schadet Aroma und Inhalt.",
      "Erntedatum prüfen: am besten binnen eines Jahres genießen; geöffnet in 3–4 Monaten.",
      "Auf klare Herkunft/ Zertifizierung (g.U./g.g.A.) oder Single-Origin achten.",
      "Niedrige Säure < 0,8 % (Top-Öle ~0,3 %) ist Qualitätszeichen.",
      "Polyphenole & Gesundheit: frisches EVOO unterstützt Herz und schützt vor Oxidation.",
      "Mischungen meiden – Single-Origin bewahrt den Charakter des Hains."
    ]
  },

  /* ========== ARABIC (Tunisia) ========== */
  ar:{
    label:"AR", dir:"rtl",
    titles:{
      hero:"زيت زيتون عضوي فاخر من تونس — إرث فاغا",
      organic:"أشجار الزيتون العضوية",
      harvest:"الجني التقليدي",
      awards:"الجوائز والتقدير",
      sustainability:"الاستدامة",
      vision:"رؤيتنا",
      contact:"تواصل معنا",
      astuce:"نصيحة خبراء Bacchavaga — كيف تختار زيتًا استثنائيًا"
    },
    story:`لِقرونٍ طويلة دَأبت عائلتنا في باجة (المدينة الرومانية القديمة «فاغا») على رعاية بساتين الزيتون فوق تربة متوسطية خصبة. ورثنا هذا الإرث أبًا عن جد، قائمًا على الزراعة التقليدية التي تحترم الإيقاع الطبيعي للأرض. اليوم نواصل في Bacchavaga هذا النهج، فنمزج الحكمة المتوارثة بتقنيات تعبئة حديثة لنقدّم زيتًا أصيلاً يعبّر عن التاريخ والنقاء والتميّز.`,
    organic:`تحتضن تونس بعضًا من أقدم أشجار الزيتون العضوية في العالم، والتي تنمو طبيعيًا دون مبيدات أو ريّ اصطناعي. بساتيننا جزء من هذا النظام البيئي الفريد، فتمنح ثمارًا غنيّة بالنكهات والعناصر الغذائية. كل قطرة من Bacchavaga شهادة على هذه الأصالة: عضوية معتمدة ونقاوة واهتمام في كل مرحلة.`,
    harvest:`نجني الزيتون يدويًا وفق أساليب متوارثة؛ حيث تقوم نساءٌ ورجال من مجتمعنا بانتقاء الثمار بعناية للحفاظ على جودتها. خلال ساعات قليلة تُعصر الثمار على البارد لضمان أعلى درجات الطزاجة والنكهة في كل زجاجة.`,
    awards:`يحظى زيت الزيتون التونسي بتقدير عالمي ويحصد جوائز في نيويورك ولندن وطوكيو وغيرها. نفخر في Bacchavaga بأن نكون جزءًا من هذه القصة — قصة تميّز في المذاق والجودة والتقاليد.`,
    sustainability:`نلتزم بمستقبل مستدام: حماية التربة وترشيد المياه ودعم المزارعين المحليين. مع كل زجاجة من Bacchavaga نُبقي التقاليد حيّة ونضمن أن تستمر الأجيال القادمة في الاستمتاع بإرث الزيتون التونسي.`,
    vision:`Bacchavaga ليست مجرد زيت زيتون؛ إنها حكاية عائلة وجذور وفخر. من بساتين فاغا العريقة إلى موائدكم، ندعوكم لمشاركة رحلةٍ صيغت عبر القرون.`,
    contact:`للاستفسار: <a href="mailto:info@bacchavaga.de">info@bacchavaga.de</a>`,
    astuce:[
      "اختر دائمًا البِكر الممتاز (عصر بارد، دون كيميائيات) — غني بالبوليفينولات.",
      "فضّل زجاجة معتمة/داكنة لأن الضوء يفسد النكهة والقيمة.",
      "تحقّق من تاريخ الحصاد؛ يُستحسن الاستهلاك خلال سنة و3–4 أشهر بعد الفتح.",
      "ابحث عن منشأ مُعتمد (PDO/PGI) أو مصدر واحد واضح.",
      "حموضة أقل من ‎0.8‎‏% (الأفضل نحو ‎0.3‎‏%) علامة على العناية السريعة بالعصر.",
      "فكّر في البوليفينولات والصحة — الزيت الطازج يدعم القلب ويقلّل الأكسدة.",
      "تجنّب الخلطات؛ مصدر واحد يحافظ على هوية البستان."
    ]
  },

  /* ========== ENGLISH ========== */
  en:{
    label:"EN", dir:"ltr",
    titles:{
      hero:"Premium Organic Olive Oil from Tunisia – The Heritage of Vaga",
      organic:"Organic Olive Trees",
      harvest:"Traditional Harvest",
      awards:"Awards & Recognition",
      sustainability:"Sustainability",
      vision:"Our Vision",
      contact:"Contact",
      astuce:"Bacchavaga’s Expert Advice – Choose Exceptional Olive Oil"
    },
    story:`For centuries, our family in Béja (the ancient city of Vaga) has cultivated olive trees on the rich Mediterranean soil of Tunisia. Passed down from father to son, our heritage is rooted in traditional farming – where patience, respect for nature, and knowledge of the land guide every step. Today, Bacchavaga carries this legacy forward, combining ancestral wisdom with modern bottling to bring you authentic olive oil that speaks of history, purity, and excellence.`,
    organic:`Tunisia is home to some of the world’s oldest organic olive trees, many of which still grow naturally without chemicals or artificial irrigation. Our groves are part of this unique ecosystem – producing olives rich in flavor and nutrients. Each drop of Bacchavaga olive oil reflects this authenticity: certified organic, pure, and cultivated with care.`,
    harvest:`Our olives are harvested by hand, using traditional methods passed down through generations. Farmers – including many women of our community – carefully pick each olive to preserve its integrity. Within hours, the olives are cold-pressed, ensuring the highest quality and freshness in every bottle.`,
    awards:`Tunisian olive oil is celebrated worldwide and has received numerous international awards in New York, London, Tokyo, and beyond. Bacchavaga is proud to be part of this story – representing Tunisia’s excellence in taste, quality, and tradition.`,
    sustainability:`We are committed to a sustainable future: protecting our soil, preserving water, and supporting the local farming community. Every bottle of Bacchavaga contributes to this mission — keeping traditions alive while ensuring future generations can continue to enjoy Tunisia’s olive heritage.`,
    vision:`Bacchavaga is more than olive oil — it is a story of family, heritage, and pride. From the ancient groves of Vaga to your table, we invite you to share in a journey that has been nurtured for centuries.`,
    contact:`For inquiries: <a href="mailto:info@bacchavaga.de">info@bacchavaga.de</a>`,
    astuce:[
      "Always choose extra virgin: cold-pressed and chemical-free; highest in natural polyphenols.",
      "Prefer an opaque bottle — light degrades flavour and nutrients.",
      "Check the harvest date: enjoy within a year; 3–4 months after opening.",
      "Trust clearly stated origin or certification (PDO/PGI) or single origin.",
      "Look for low acidity (< 0.8% — top oils ≈ 0.3%).",
      "Think polyphenols & health: fresh EVOO supports heart health.",
      "Avoid blends: single-origin preserves the grove’s character."
    ]
  },

  /* ========== FRENCH ========== */
  fr:{
    label:"FR", dir:"ltr",
    titles:{
      hero:"Huile d’olive biologique premium de Tunisie – L’héritage de Vaga",
      organic:"Oliviers biologiques",
      harvest:"Récolte traditionnelle",
      awards:"Prix & Reconnaissance",
      sustainability:"Durabilité",
      vision:"Notre vision",
      contact:"Contact",
      astuce:"Conseils d’Expert Bacchavaga – Bien choisir son huile d’olive"
    },
    story:`Depuis des siècles, notre famille à Béja (l’ancienne Vaga) cultive des oliviers sur une terre méditerranéenne généreuse. Transmis de père en fils, notre savoir-faire repose sur une agriculture traditionnelle, respectueuse du rythme de la nature. Aujourd’hui, Bacchavaga perpétue cet héritage en alliant sagesse ancestrale et mise en bouteille moderne pour offrir une huile authentique, synonyme d’histoire, de pureté et d’excellence.`,
    organic:`La Tunisie abrite certains des plus anciens oliviers biologiques au monde, poussant naturellement sans intrants chimiques ni irrigation artificielle. Nos oliveraies s’inscrivent dans cet écosystème unique et donnent des fruits riches en arômes et en nutriments. Chaque goutte de Bacchavaga reflète cette authenticité : certifiée bio, pure et cultivée avec soin.`,
    harvest:`Nos olives sont récoltées à la main selon des méthodes transmises de génération en génération. Les agriculteurs — notamment de nombreuses femmes de notre communauté — cueillent chaque olive avec délicatesse pour préserver sa qualité. Dans les heures qui suivent, les fruits sont pressés à froid pour garantir fraîcheur et excellence en bouteille.`,
    awards:`L’huile d’olive tunisienne est saluée dans le monde entier et régulièrement primée à New York, Londres, Tokyo, etc. Bacchavaga est fière de contribuer à cette renommée — l’expression du goût, de la qualité et de la tradition tunisienne.`,
    sustainability:`Nous œuvrons pour un avenir durable : protection des sols, préservation de l’eau et soutien aux producteurs locaux. Chaque bouteille Bacchavaga participe à cette mission — faire vivre les traditions tout en préservant l’héritage oléicole de la Tunisie pour les générations futures.`,
    vision:`Bacchavaga est plus qu’une huile d’olive : c’est une histoire de famille, de patrimoine et de fierté. Des oliveraies de Vaga à votre table, partagez un voyage nourri depuis des siècles.`,
    contact:`Demandes : <a href="mailto:info@bacchavaga.de">info@bacchavaga.de</a>`,
    astuce:[
      "Choisir l’extra-vierge (pressée à froid, sans chimie).",
      "Privilégier une bouteille opaque pour protéger l’huile.",
      "Vérifier la date de récolte : à consommer dans l’année, 3–4 mois après ouverture.",
      "Origine certifiée (AOP/IGP) ou monocru clairement indiqué.",
      "Acidité < 0,8 % (meilleures ~0,3 %).",
      "Polyphénols & santé : protection cardiovasculaire.",
      "Éviter les mélanges : le monocru préserve l’identité du terroir."
    ]
  },

  /* ========== ITALIAN ========== */
  it:{
    label:"IT", dir:"ltr",
    titles:{
      hero:"Olio extravergine biologico dalla Tunisia – L’eredità di Vaga",
      organic:"Ulivi biologici",
      harvest:"Raccolta tradizionale",
      awards:"Premi & Riconoscimenti",
      sustainability:"Sostenibilità",
      vision:"La nostra visione",
      contact:"Contatti",
      astuce:"Consigli dell’Esperto Bacchavaga – Come scegliere un olio eccezionale"
    },
    story:`Da secoli la nostra famiglia a Béja (l’antica Vaga) coltiva ulivi sui fertili terreni mediterranei della Tunisia. Un’eredità tramandata di padre in figlio, fondata su un’agricoltura tradizionale che rispetta i ritmi della natura. Oggi Bacchavaga porta avanti questa tradizione unendo la sapienza di sempre a un’imbottigliamento moderno per offrirti un olio autentico, sinonimo di storia, purezza ed eccellenza.`,
    organic:`La Tunisia ospita alcuni dei più antichi ulivi biologici al mondo, che crescono naturalmente senza chimica né irrigazione artificiale. I nostri uliveti fanno parte di questo ecosistema unico, producendo olive ricche di gusto e nutrienti. Ogni goccia di Bacchavaga riflette questa autenticità: biologico certificato, puro e coltivato con cura.`,
    harvest:`Raccogliamo le olive a mano secondo metodi tramandati da generazioni. Agricoltori — tra cui molte donne della nostra comunità — selezionano con delicatezza ogni frutto per preservarne l’integrità. Nel giro di poche ore le olive vengono spremute a freddo per garantire massima qualità e freschezza.`,
    awards:`L’olio tunisino è apprezzato nel mondo e pluripremiato a New York, Londra, Tokyo e oltre. Bacchavaga è orgogliosa di rappresentare questa eccellenza di gusto, qualità e tradizione.`,
    sustainability:`Siamo impegnati in un futuro sostenibile: proteggiamo il suolo, preserviamo l’acqua e sosteniamo gli agricoltori locali. Ogni bottiglia Bacchavaga contribuisce a questa missione — mantenere vive le tradizioni e tutelare l’eredità olivicola tunisina per le generazioni future.`,
    vision:`Bacchavaga è più di un olio d’oliva: è una storia di famiglia, radici e orgoglio. Dagli uliveti antichi di Vaga alla tua tavola, condividiamo un percorso custodito per secoli.`,
    contact:`Richieste: <a href="mailto:info@bacchavaga.de">info@bacchavaga.de</a>`,
    astuce:[
      "Scegli sempre extravergine (spremitura a freddo, senza chimica).",
      "Preferisci bottiglia opaca: la luce degrada l’olio.",
      "Controlla la data di raccolta: entro un anno, 3–4 mesi dopo l’apertura.",
      "Origine certificata (DOP/IGP) o single-origin.",
      "Acidità < 0,8% (top ~0,3%).",
      "Polifenoli & salute.",
      "Evita i blend: il single-origin preserva il carattere del frutteto."
    ]
  },

  /* ========== SPANISH ========== */
  es:{
    label:"ES", dir:"ltr",
    titles:{
      hero:"Aceite de oliva orgánico premium de Túnez – El legado de Vaga",
      organic:"Olivos orgánicos",
      harvest:"Cosecha tradicional",
      awards:"Premios y Reconocimientos",
      sustainability:"Sostenibilidad",
      vision:"Nuestra visión",
      contact:"Contacto",
      astuce:"Consejos de Expertos Bacchavaga – Cómo elegir un aceite excepcional"
    },
    story:`Durante siglos, nuestra familia en Béja (la antigua Vaga) ha cultivado olivos en los fértiles suelos mediterráneos de Túnez. Este legado, transmitido de padres a hijos, se basa en la agricultura tradicional, el respeto por la naturaleza y el conocimiento de la tierra. Hoy, Bacchavaga combina esa sabiduría con un envasado moderno para ofrecer un aceite auténtico que habla de historia, pureza y excelencia.`,
    organic:`Túnez alberga algunos de los olivos orgánicos más antiguos del mundo, que crecen de forma natural sin químicos ni riego artificial. Nuestros olivares forman parte de este ecosistema único y producen aceitunas ricas en sabor y nutrientes. Cada gota de Bacchavaga refleja esa autenticidad: orgánico certificado, puro y cultivado con esmero.`,
    harvest:`Cosechamos a mano con métodos tradicionales transmitidos por generaciones. Agricultores —incluidas muchas mujeres de nuestra comunidad— seleccionan cuidadosamente cada aceituna para preservar su calidad. En pocas horas, las aceitunas se prensan en frío para garantizar la máxima frescura y calidad.`,
    awards:`El aceite tunecino es reconocido en todo el mundo y acumula premios en Nueva York, Londres, Tokio y más. En Bacchavaga nos enorgullece formar parte de esta historia de excelencia en sabor, calidad y tradición.`,
    sustainability:`Nos comprometemos con un futuro sostenible: proteger el suelo, preservar el agua y apoyar a los agricultores locales. Cada botella de Bacchavaga contribuye a esta misión — mantener vivas las tradiciones y salvaguardar el patrimonio olivarero de Túnez para las próximas generaciones.`,
    vision:`Bacchavaga es más que aceite de oliva: es una historia de familia, herencia y orgullo. Desde los antiguos olivares de Vaga hasta tu mesa, te invitamos a compartir un camino cultivado durante siglos.`,
    contact:`Consultas: <a href="mailto:info@bacchavaga.de">info@bacchavaga.de</a>`,
    astuce:[
      "Elige siempre virgen extra (prensado en frío, sin químicos).",
      "Prefiere botella opaca: la luz degrada el aceite.",
      "Comprueba la fecha de cosecha: consumir dentro del año; 3–4 meses tras abrir.",
      "Origen certificado (DOP/IGP) o de un solo origen.",
      "Acidez < 0,8% (mejores ~0,3%).",
      "Polifenoles & salud: protege el corazón.",
      "Evita mezclas: el single-origin preserva el carácter del olivar."
    ]
  },

  /* ========== TURKISH ========== */
  tr:{
    label:"TR", dir:"ltr",
    titles:{
      hero:"Tunus’tan Premium Organik Zeytinyağı – Vaga Mirası",
      organic:"Organik Zeytin Ağaçları",
      harvest:"Geleneksel Hasat",
      awards:"Ödüller ve Tanınırlık",
      sustainability:"Sürdürülebilirlik",
      vision:"Vizyonumuz",
      contact:"İletişim",
      astuce:"Bacchavaga Uzman Tavsiyesi – Olağanüstü zeytinyağı nasıl seçilir"
    },
    story:`Yüzyıllardır ailemiz, Béja’daki (antik Vaga) bereketli Akdeniz topraklarında zeytin yetiştiriyor. Babadan oğula aktarılan bu miras; sabır, doğaya saygı ve toprağın dilini bilmeye dayanır. Bacchavaga bugün bu geleneği modern şişeleme ile birleştirerek tarihten, saflıktan ve mükemmeliyetten söz eden gerçek bir zeytinyağı sunuyor.`,
    organic:`Tunus, dünyanın en eski organik zeytin ağaçlarından bazılarına ev sahipliği yapar; birçoğu kimyasal ve yapay sulama olmadan doğal şekilde büyür. Bizim zeytinliklerimiz de bu ekosistemin bir parçasıdır ve lezzet ile besin değeri yüksek zeytinler verir. Bacchavaga’nın her damlası bu özgünlüğü yansıtır: sertifikalı organik, saf ve özenle yetiştirilmiş.`,
    harvest:`Zeytinlerimiz nesiller boyu aktarılan yöntemlerle elle toplanır. Topluluğumuzdaki birçok kadın çiftçi de dâhil olmak üzere, her zeytin özenle seçilir. Saatler içinde soğuk sıkıma alınarak tazelik ve kalite korunur.`,
    awards:`Tunus zeytinyağı dünya çapında takdir görür; New York, Londra, Tokyo gibi yarışmalarda sürekli ödüller kazanır. Bacchavaga bu başarı hikâyesinin bir parçası olmaktan gurur duyar — lezzet, kalite ve geleneğin elçisi.`,
    sustainability:`Toprağı koruyan, suyu gözeten ve yerel çiftçiyi destekleyen sürdürülebilir bir gelecek için çalışıyoruz. Her Bacchavaga şişesi bu misyona katkı sağlar — gelenekleri yaşatır ve gelecek nesiller için Tunus zeytin mirasını güvence altına alır.`,
    vision:`Bacchavaga sadece bir zeytinyağı değildir; aile, kökler ve gururun hikâyesidir. Vaga’nın kadim zeytinliklerinden sofranıza uzanan, yüzyıllardır beslenen bir yolculuğa davet ediyoruz.`,
    contact:`İletişim: <a href="mailto:info@bacchavaga.de">info@bacchavaga.de</a>`,
    astuce:[
      "Daima sızma (soğuk sıkım, kimyasal yok) tercih edin.",
      "Opak/koyu şişe ışığa karşı korur.",
      "Hasat tarihini kontrol edin: 1 yıl içinde, açıldıktan sonra 3–4 ayda tüketin.",
      "Açık menşe veya PDO/PGI sertifikası / tek menşei arayın.",
      "Düşük asit < %0,8 (en iyiler ~%0,3).",
      "Polifenoller & sağlık — kalp dostu.",
      "Karışımlardan kaçının; tek menşei bahçenin karakterini korur."
    ]
  },

  /* ========== DUTCH ========== */
  nl:{
    label:"NL", dir:"ltr",
    titles:{
      hero:"Premium biologische olijfolie uit Tunesië – De erfenis van Vaga",
      organic:"Biologische olijfbomen",
      harvest:"Traditionele oogst",
      awards:"Prijzen & Erkenning",
      sustainability:"Duurzaamheid",
      vision:"Onze visie",
      contact:"Contact",
      astuce:"Bacchavaga’s Expertadvies – Zo kies je een uitzonderlijke olijfolie"
    },
    story:`Al eeuwenlang cultiveert onze familie in Béja (het oude Vaga) olijfbomen op vruchtbare mediterrane grond. Dit erfgoed, van vader op zoon doorgegeven, is geworteld in traditionele landbouw — met respect voor de natuur en kennis van het land. Vandaag zet Bacchavaga deze lijn voort door tijdloze vakmanschap te combineren met moderne botteling, voor een authentieke olie die staat voor geschiedenis, puurheid en topkwaliteit.`,
    organic:`Tunesië herbergt enkele van ’s werelds oudste biologische olijfbomen die nog altijd natuurlijk groeien, zonder chemicaliën of kunstmatige irrigatie. Onze boomgaarden maken deel uit van dit unieke ecosysteem en leveren olijven boordevol smaak en voedingsstoffen. Elke druppel Bacchavaga weerspiegelt die authenticiteit: gecertificeerd bio, puur en met zorg geteeld.`,
    harvest:`Onze olijven worden met de hand geplukt volgens generaties oude tradities. Boeren — waaronder veel vrouwen uit onze gemeenschap — selecteren elke olijf zorgvuldig. Binnen enkele uren worden de olijven koud geperst voor maximale versheid en kwaliteit.`,
    awards:`Tunesische olijfolie wordt wereldwijd geprezen en wint prijzen in New York, Londen, Tokio en verder. Bacchavaga is trots om deel uit te maken van dit verhaal — een toonbeeld van smaak, kwaliteit en traditie.`,
    sustainability:`Wij zetten ons in voor een duurzame toekomst: bodem beschermen, water sparen en lokale boeren steunen. Elke fles Bacchavaga draagt daaraan bij — tradities levend houden en het olijferfgoed van Tunesië veiligstellen voor de volgende generaties.`,
    vision:`Bacchavaga is meer dan olijfolie — het is een verhaal van familie, erfgoed en trots. Van de oude boomgaarden van Vaga tot aan uw tafel: deel in een reis die eeuwenlang is gekoesterd.`,
    contact:`Vragen: <a href="mailto:info@bacchavaga.de">info@bacchavaga.de</a>`,
    astuce:[
      "Kies altijd extra vierge (koud geperst, zonder chemicaliën).",
      "Gebruik bij voorkeur een ondoorzichtige fles.",
      "Controleer de oogstdatum: binnen een jaar gebruiken; 3–4 maanden na openen.",
      "Gecertificeerde herkomst (AOP/IGP) of single-origin.",
      "Lage zuurgraad < 0,8% (top ~0,3%).",
      "Polyfenolen & gezondheid — goed voor het hart.",
      "Vermijd blends: single-origin bewaart het karakter van de boomgaard."
    ]
  },

  /* ========== POLISH ========== */
  pl:{
    label:"PL", dir:"ltr",
    titles:{
      hero:"Organiczna oliwa premium z Tunezji – Dziedzictwo Vaga",
      organic:"Organiczne drzewa oliwne",
      harvest:"Tradycyjne zbiory",
      awards:"Nagrody i wyróżnienia",
      sustainability:"Zrównoważony rozwój",
      vision:"Nasza wizja",
      contact:"Kontakt",
      astuce:"Porady Eksperta Bacchavaga – Jak wybrać wyjątkową oliwę"
    },
    story:`Od wieków nasza rodzina w Béja (dawnej Vadze) uprawia oliwki na żyznych, śródziemnomorskich glebach Tunezji. To dziedzictwo, przekazywane z pokolenia na pokolenie, opiera się na tradycyjnym rolnictwie, szacunku do natury i znajomości ziemi. Dziś Bacchavaga łączy tę mądrość z nowoczesnym rozlewem, oferując autentyczną oliwę mówiącą o historii, czystości i doskonałości.`,
    organic:`Tunezja jest domem jednych z najstarszych na świecie organicznych drzew oliwnych, rosnących naturalnie — bez chemii i sztucznego nawadniania. Nasze gaje są częścią tego wyjątkowego ekosystemu i dają oliwki bogate w smak i składniki odżywcze. Każda kropla Bacchavaga odzwierciedla tę autentyczność: certyfikowany produkt ekologiczny, czysty i uprawiany z troską.`,
    harvest:`Zbieramy oliwki ręcznie, tradycyjnymi metodami przekazywanymi przez pokolenia. Rolnicy — w tym liczne kobiety z naszej społeczności — selekcjonują każdy owoc z najwyższą starannością. W ciągu kilku godzin oliwki są tłoczone na zimno, co gwarantuje świeżość i jakość w każdej butelce.`,
    awards:`Tunezyjska oliwa zdobywa liczne międzynarodowe nagrody w Nowym Jorku, Londynie, Tokio i nie tylko. Bacchavaga z dumą współtworzy tę historię — symbol smaku, jakości i tradycji.`,
    sustainability:`Dbamy o zrównoważoną przyszłość: chronimy glebę, oszczędzamy wodę i wspieramy lokalnych rolników. Każda butelka Bacchavaga pomaga podtrzymywać tradycje i zachować oliwne dziedzictwo Tunezji dla przyszłych pokoleń.`,
    vision:`Bacchavaga to coś więcej niż oliwa z oliwek — to opowieść o rodzinie, korzeniach i dumie. Od starożytnych gajów Vagi aż po Twój stół — zapraszamy do podróży pielęgnowanej przez stulecia.`,
    contact:`Kontakt: <a href="mailto:info@bacchavaga.de">info@bacchavaga.de</a>`,
    astuce:[
      "Zawsze wybieraj extra virgin (tłoczenie na zimno, bez chemii).",
      "Butelka nieprzezroczysta najlepiej chroni olej.",
      "Sprawdź datę zbioru: zużyj w rok; 3–4 miesiące po otwarciu.",
      "Certyfikowane pochodzenie (ChNP/ChOG) lub jedno źródło.",
      "Kwasowość < 0,8% (najlepsze ~0,3%).",
      "Polifenole & zdrowie — wsparcie dla serca.",
      "Unikaj mieszanek — single-origin zachowuje charakter gaju."
    ]
  },

  /* ========== RUSSIAN ========== */
  ru:{
    label:"RU", dir:"ltr",
    titles:{
      hero:"Премиальное органическое оливковое масло из Туниса — Наследие Ваги",
      organic:"Органические оливковые деревья",
      harvest:"Традиционный сбор",
      awards:"Награды и признание",
      sustainability:"Устойчивое развитие",
      vision:"Наша философия",
      contact:"Контакты",
      astuce:"Советы экспертов Bacchavaga — как выбрать отличное масло"
    },
    story:`Столетиями наша семья в Бедже (древней Ваге) выращивает оливы на плодородной средиземноморской земле Туниса. Наследие, передаваемое из поколения в поколение, основано на традиционном земледелии, уважении к природе и глубоких знаниях о земле. Сегодня Bacchavaga соединяет эту мудрость с современным розливом, чтобы дарить подлинное масло, олицетворяющее историю, чистоту и превосходство.`,
    organic:`Тунис — родина одних из самых древних органических олив в мире; многие деревья растут естественно, без химии и искусственного орошения. Наши рощи — часть этой уникальной экосистемы и дают плоды, богатые вкусом и полезными веществами. Каждая капля Bacchavaga — это подлинность: сертифицированный органический продукт, выращенный с заботой.`,
    harvest:`Мы собираем оливки вручную, по традиционным методам. Фермеры — в том числе многие женщины — бережно отбирают каждый плод. В течение нескольких часов после сбора оливки холодного отжима попадают на пресс, что обеспечивает максимальную свежесть и качество.`,
    awards:`Тунисское масло регулярно получает международные награды в Нью-Йорке, Лондоне, Токио и других городах. Bacchavaga гордится тем, что является частью этой истории — символа вкуса, качества и традиций.`,
    sustainability:`Мы бережём почву и воду, поддерживаем местных фермеров и думаем о будущем. Каждая бутылка Bacchavaga помогает сохранять традиции и оливковое наследие Туниса для следующих поколений.`,
    vision:`Bacchavaga — это больше, чем масло. Это история семьи, корней и гордости. От древних рощ Ваги — к вашему столу. Присоединяйтесь к путешествию, которое длится веками.`,
    contact:`Запросы: <a href="mailto:info@bacchavaga.de">info@bacchavaga.de</a>`,
    astuce:[
      "Выбирайте extra virgin (холодный отжим, без химии).",
      "Непрозрачная тёмная бутылка — защита от света.",
      "Проверяйте дату урожая: использовать в течение года; 3–4 месяца после открытия.",
      "Сертифицированное происхождение (PDO/PGI) или single-origin.",
      "Кислотность < 0,8% (лучшие ~0,3%).",
      "Полифенолы и здоровье — поддержка сердца.",
      "Избегайте смесей — single-origin сохраняет характер рощи."
    ]
  }
};

/* ----- DOM Refs ----- */
const $ = id => document.getElementById(id);
const els = {
  tHero: $("t-hero"),        pStory: $("p-story"),
  tOrganic: $("t-organic"),  pOrganic: $("p-organic"),
  tHarvest: $("t-harvest"),  pHarvest: $("p-harvest"),
  tAwards: $("t-awards"),    pAwards: $("p-awards"),
  tSust: $("t-sustainability"), pSust: $("p-sustainability"),
  tVision: $("t-vision"),    pVision: $("p-vision"),
  tContact: $("t-contact"),  pContact: $("p-contact"),
  tAstuce: $("t-astuce"),
  a1: $("a1"), a2: $("a2"), a3: $("a3"), a4: $("a4"),
  a5: $("a5"), a6: $("a6"), a7: $("a7"),
  sel: $("languageSwitcher"),
  label: document.querySelector("label[for='languageSwitcher']")
};

/* ----- Helpers ----- */
function setText(el, txt){ if(el) el.textContent = txt; }
function setHTML(el, html){ if(el) el.innerHTML = html; }

/* Build language menu in fixed ORDER */
function buildMenu(){
  els.sel.innerHTML = "";
  ORDER.forEach(code=>{
    const {flag, name} = LANGS[code];
    const opt = document.createElement("option");
    opt.value = code;
    opt.textContent = `${flag} ${name}`;
    els.sel.appendChild(opt);
  });
}

/* Render UI */
function render(lang){
  const t = translations[lang] || translations.de; // default German
  const meta = LANGS[lang] || LANGS.de;

  document.documentElement.lang = lang;
  document.documentElement.dir  = t.dir || meta.dir || "ltr";

  setText(els.tHero, t.titles.hero);         setText(els.pStory, t.story);
  setText(els.tOrganic, t.titles.organic);   setText(els.pOrganic, t.organic);
  setText(els.tHarvest, t.titles.harvest);   setText(els.pHarvest, t.harvest);
  setText(els.tAwards, t.titles.awards);     setText(els.pAwards, t.awards);
  setText(els.tSust, t.titles.sustainability); setText(els.pSust, t.sustainability);
  setText(els.tVision, t.titles.vision);     setText(els.pVision, t.vision);
  setText(els.tAstuce, t.titles.astuce);

  // Advice bullets
  const tips = t.astuce || [];
  [els.a1,els.a2,els.a3,els.a4,els.a5,els.a6,els.a7].forEach((el,i)=>{
    setText(el, tips[i] || "");
  });

  // Contact line (already localized, includes mailto)
  setText(els.tContact, t.titles.contact);
  setHTML(els.pContact, t.contact);
}

/* Init */
(function(){
  if(!els.sel) return;
  buildMenu();

  // Start language: saved -> default 'de'
  let saved = null;
  try{ saved = localStorage.getItem("lang"); }catch(e){}
  const start = (saved && ORDER.includes(saved)) ? saved : "de";
  els.sel.value = start;
  render(start);

  // Localized label “Language”
  const LABELS = {
    de:"Sprache", ar:"اللغة", en:"Language", fr:"Langue", it:"Lingua",
    es:"Idioma", tr:"Dil", nl:"Taal", pl:"Język", ru:"Язык"
  };
  if(els.label) els.label.textContent = LABELS[start] || "Sprache";

  els.sel.addEventListener("change", e=>{
    const lang = e.target.value;
    try{ localStorage.setItem("lang", lang); }catch(e){}
    if(els.label) els.label.textContent = LABELS[lang] || "Sprache";
    render(lang);
  });
})();
