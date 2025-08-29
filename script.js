/* ---------- LANGUAGE META (flags + names) ---------- */
const LANGS = {
  de: { flag:"🇩🇪", name:"Deutsch",  dir:"ltr" },
  ar: { flag:"🇹🇳", name:"العربية",  dir:"rtl" }, // Tunisian Arabic second
  en: { flag:"🇬🇧", name:"English",  dir:"ltr" },
  fr: { flag:"🇫🇷", name:"Français", dir:"ltr" },
  it: { flag:"🇮🇹", name:"Italiano", dir:"ltr" },
  es: { flag:"🇪🇸", name:"Español",  dir:"ltr" },
  tr: { flag:"🇹🇷", name:"Türkçe",   dir:"ltr" },
  nl: { flag:"🇳🇱", name:"Nederlands", dir:"ltr" },
  pl: { flag:"🇵🇱", name:"Polski",   dir:"ltr" },
  ru: { flag:"🇷🇺", name:"Русский",  dir:"ltr" }
};

/* ---------- TRANSLATIONS (FULL TEXTS) ---------- */
const translations = {
  en:{ label:"EN", dir:"ltr",
    titles:{ hero:"Premium Organic Olive Oil from Tunisia – The Heritage of Vaga",
      organic:"Organic Olive Trees", harvest:"Traditional Harvest",
      awards:"Awards & Recognition", sustainability:"Sustainability",
      vision:"Our Vision", contact:"Contact",
      astuce:"Bacchavaga’s Expert Advice – Choose Exceptional Olive Oil" },
    story:"For centuries, our family in Béja (the ancient city of Vaga) has cultivated olive trees on the rich Mediterranean soil of Tunisia. Passed down from father to son, our heritage is rooted in traditional farming — where patience, respect for nature, and knowledge of the land guide every step. Today, Bacchavaga carries this legacy forward, combining ancestral wisdom with modern bottling to bring you authentic olive oil that speaks of history, purity, and excellence.",
    organic:"Tunisia is home to some of the world’s oldest organic olive trees, many of which still grow naturally without chemicals or artificial irrigation. Our groves are part of this unique ecosystem — producing olives rich in flavor and nutrients. Each drop of Bacchavaga olive oil reflects this authenticity: pure, carefully cultivated, and proudly organic.",
    harvest:"Our olives are harvested by hand, using traditional methods passed down through generations. Farmers — including many women in our community — carefully pick each olive to preserve its integrity. Within hours, the olives are cold-pressed, ensuring the highest quality and freshness in every bottle.",
    awards:"Tunisian olive oil is celebrated worldwide and regularly wins gold medals in competitions such as NYIOOC and Mario Solinas. Bacchavaga is proud to carry this spirit of excellence — representing Tunisia’s remarkable taste, quality, and tradition.",
    sustainability:"We are committed to a sustainable future: protecting our soil, preserving water, and supporting local farmers. Every bottle of Bacchavaga contributes to this mission — keeping traditions alive while ensuring future generations can continue to enjoy Tunisia’s olive heritage.",
    vision:"Bacchavaga is more than olive oil — it is a story of family, heritage, and pride. From the ancient groves of Vaga to your table, we invite you to share in a journey that has been nurtured for centuries.",
    contact:"For inquiries: info@bacchavaga.de",
    astuce:[
      "Always choose extra virgin: cold-pressed and chemical-free.",
      "Prefer an opaque bottle — light degrades flavor and nutrients.",
      "Check the harvest date: enjoy within a year; 3–4 months after opening.",
      "Trust clearly stated origin or certification (PDO/PGI).",
      "Look for low acidity (< 0.8% — top oils around 0.3%).",
      "Think polyphenols & health: fresh EVOO supports heart health.",
      "Avoid blends: single-origin preserves the grove’s character."
    ]
  },

  de:{ label:"DE", dir:"ltr",
    titles:{ hero:"Premium Bio-Olivenöl aus Tunesien – Das Erbe von Vaga",
      organic:"Organische Olivenbäume", harvest:"Traditionelle Ernte",
      awards:"Auszeichnungen & Anerkennung", sustainability:"Nachhaltigkeit",
      vision:"Unsere Vision", contact:"Kontakt",
      astuce:"Bacchavagas Expertentipps – So wählen Sie ein außergewöhnliches Olivenöl" },
    story:"Seit Jahrhunderten bewirtschaftet unsere Familie in Béja (dem antiken Vaga) Olivenbäume auf fruchtbaren mediterranen Böden. Von Generation zu Generation weitergegeben, beruht unser Erbe auf traditioneller Landwirtschaft — Geduld, Respekt vor der Natur und Wissen über das Land prägen jeden Schritt. Heute führt Bacchavaga dieses Vermächtnis fort und verbindet überliefertes Wissen mit moderner Abfüllung, um Ihnen ein authentisches Olivenöl zu bieten, das von Geschichte, Reinheit und Exzellenz erzählt.",
    organic:"Tunesien beheimatet einige der ältesten Bio-Olivenbäume der Welt, die vielerorts ohne Chemie und künstliche Bewässerung gedeihen. Unsere Haine sind Teil dieses einzigartigen Ökosystems und liefern aromatische, nährstoffreiche Oliven. Jeder Tropfen Bacchavaga spiegelt diese Authentizität wider: sorgsam kultiviert, organisch und naturrein.",
    harvest:"Unsere Oliven werden von Hand geerntet — mit traditionellen Methoden, die seit Generationen überliefert sind. Bäuerinnen und Bauern — darunter viele Frauen unserer Gemeinschaft — pflücken jede Olive behutsam, damit ihre Qualität gewahrt bleibt. Innerhalb weniger Stunden erfolgt die Kaltpressung für maximale Frische und Qualität.",
    awards:"Tunesisches Olivenöl wird weltweit gefeiert und gewinnt regelmäßig Gold bei Wettbewerben wie NYIOOC und Mario Solinas. Bacchavaga steht für diesen Geist der Exzellenz — für Geschmack, Qualität und Tradition aus Tunesien.",
    sustainability:"Wir engagieren uns für eine nachhaltige Zukunft: Schutz der Böden, sorgsamer Umgang mit Wasser und Unterstützung der lokalen Landwirtschaft. Jede Flasche Bacchavaga trägt zu dieser Mission bei — Traditionen lebendig zu halten und künftigen Generationen das Olivenerbe Tunesiens zu sichern.",
    vision:"Bacchavaga ist mehr als ein Öl — es ist eine Geschichte von Familie, Erbe und Stolz. Von den alten Hainen Vagas bis auf Ihren Tisch laden wir Sie ein, an einer seit Jahrhunderten gepflegten Reise teilzuhaben.",
    contact:"Anfragen: info@bacchavaga.de",
    astuce:[
      "Immer „extra nativ“ wählen — kaltgepresst, ohne Chemie.",
      "Opake/dunkle Flasche bevorzugen — Licht schadet dem Öl.",
      "Erntedatum prüfen: am besten innerhalb eines Jahres genießen; 3–4 Monate nach Anbruch.",
      "Auf klare Herkunft oder Siegel (g.U./g.g.A.) achten.",
      "Niedrige Säure < 0,8 % (Top-Öle ~0,3 %).",
      "Auf Polyphenole & Gesundheit achten.",
      "Mischungen meiden — Single-Origin bewahrt den Charakter."
    ]
  },

  fr:{ label:"FR", dir:"ltr",
    titles:{ hero:"Huile d’olive biologique premium de Tunisie – L’héritage de Vaga",
      organic:"Oliviers biologiques", harvest:"Récolte traditionnelle",
      awards:"Prix & Reconnaissance", sustainability:"Durabilité",
      vision:"Notre vision", contact:"Contact",
      astuce:"Conseil d’expert Bacchavaga – Bien choisir une huile exceptionnelle" },
    story:"Depuis des siècles, notre famille à Béja (l’ancienne Vaga) cultive des oliviers sur les terres méditerranéennes de Tunisie. Transmis de père en fils, notre héritage repose sur l’agriculture traditionnelle — patience, respect de la nature et connaissance du terroir guident chaque geste. Aujourd’hui, Bacchavaga perpétue ce savoir en l’associant à une mise en bouteille moderne pour offrir une huile authentique, synonyme d’histoire, de pureté et d’excellence.",
    organic:"La Tunisie abrite certains des plus anciens oliviers biologiques au monde, qui poussent naturellement sans produits chimiques ni irrigation artificielle. Nos vergers s’inscrivent dans cet écosystème unique et donnent des olives riches en arômes et en nutriments. Chaque goutte de Bacchavaga reflète cette authenticité: pure, biologique et cultivée avec soin.",
    harvest:"La récolte est effectuée à la main, par des femmes et des hommes de notre communauté. Les olives sont pressées à froid dans les heures qui suivent pour garantir fraîcheur et qualité.",
    awards:"L’huile d’olive tunisienne est reconnue dans le monde entier et remporte régulièrement des médailles d’or (NYIOOC, Mario Solinas). Bacchavaga s’inscrit dans cet esprit d’excellence — alliant goût, qualité et tradition.",
    sustainability:"Nous nous engageons pour un avenir durable: protection des sols, préservation de l’eau et soutien des producteurs locaux. Chaque bouteille Bacchavaga contribue à cette mission — préserver les traditions tout en assurant l’avenir de l’héritage oléicole tunisien.",
    vision:"Bacchavaga est plus qu’une huile: c’est une histoire de famille, d’héritage et de fierté. Des anciens oliviers de Vaga jusqu’à votre table, partagez un voyage patiemment cultivé depuis des siècles.",
    contact:"Demandes: info@bacchavaga.de",
    astuce:[
      "Choisissez toujours l’extra-vierge, pressée à froid.",
      "Privilégiez une bouteille opaque (verre foncé ou bidon).",
      "Vérifiez la date de récolte: à consommer idéalement dans l’année; 3–4 mois après ouverture.",
      "Origine claire ou certification (AOP/IGP).",
      "Acidité < 0,8 % (meilleurs ~0,3 %).",
      "Polyphénols & santé (antioxydants naturels).",
      "Évitez les assemblages: le single-origin préserve le terroir."
    ]
  },

  it:{ label:"IT", dir:"ltr",
    titles:{ hero:"Olio extravergine biologico dalla Tunisia – L’eredità di Vaga",
      organic:"Ulivi biologici", harvest:"Raccolta tradizionale",
      awards:"Premi & Riconoscimenti", sustainability:"Sostenibilità",
      vision:"La nostra visione", contact:"Contatti",
      astuce:"Consiglio d’esperto Bacchavaga – Scegliere un olio eccezionale" },
    story:"Da secoli la nostra famiglia a Béja (l’antica Vaga) coltiva ulivi sui fertili terreni mediterranei della Tunisia. Tramandato di padre in figlio, il nostro patrimonio si fonda su pratiche tradizionali: pazienza, rispetto della natura e conoscenza del territorio. Oggi Bacchavaga porta avanti questa eredità, unendo saggezza ancestrale e imbottigliamento moderno per offrirti un olio autentico, sinonimo di storia, purezza ed eccellenza.",
    organic:"La Tunisia ospita alcuni tra gli ulivi biologici più antichi al mondo, che crescono naturalmente senza chimica né irrigazione artificiale. I nostri uliveti fanno parte di questo ecosistema unico e producono olive ricche di aromi e nutrienti. Ogni goccia di Bacchavaga riflette questa autenticità: pura, biologica e curata con attenzione.",
    harvest:"Raccogliamo le olive a mano con metodi tradizionali tramandati da generazioni. Gli agricoltori — molte sono donne della nostra comunità — selezionano ogni oliva con delicatezza per preservarne l’integrità. Entro poche ore dalla raccolta, effettuiamo l’estrazione a freddo per garantire massima freschezza e qualità.",
    awards:"L’olio tunisino è apprezzato in tutto il mondo e vince regolarmente ori in concorsi come NYIOOC e Mario Solinas. Bacchavaga incarna questo spirito di eccellenza — gusto, qualità e tradizione.",
    sustainability:"Siamo impegnati in un futuro sostenibile: proteggiamo il suolo, preserviamo l’acqua e sosteniamo i produttori locali. Ogni bottiglia di Bacchavaga contribuisce a questa missione — mantenere vive le tradizioni e assicurare il futuro dell’eredità olivicola tunisina.",
    vision:"Bacchavaga è più di un olio: è una storia di famiglia, eredità e orgoglio. Dagli antichi uliveti di Vaga alla tua tavola, condividi un viaggio coltivato per secoli.",
    contact:"Richieste: info@bacchavaga.de",
    astuce:[
      "Scegli sempre extravergine, spremuto a freddo.",
      "Preferisci una bottiglia opaca (vetro scuro o latta).",
      "Controlla la data di raccolta: meglio entro un anno; 3–4 mesi dopo l’apertura.",
      "Origine chiara o certificazione (DOP/IGP).",
      "Acidità < 0,8% (top ~0,3%).",
      "Polifenoli & salute.",
      "Evita i blend: il single-origin preserva il carattere del luogo."
    ]
  },

  es:{ label:"ES", dir:"ltr",
    titles:{ hero:"Aceite de oliva orgánico premium de Túnez – El legado de Vaga",
      organic:"Olivos orgánicos", harvest:"Cosecha tradicional",
      awards:"Premios y reconocimientos", sustainability:"Sostenibilidad",
      vision:"Nuestra visión", contact:"Contacto",
      astuce:"Consejo experto de Bacchavaga – Cómo elegir un aceite excepcional" },
    story:"Durante siglos, nuestra familia en Béja (la antigua Vaga) ha cultivado olivos en suelos mediterráneos fértiles. Transmitido de padres a hijos, nuestro legado se basa en la agricultura tradicional: paciencia, respeto por la naturaleza y conocimiento del terruño. Hoy, Bacchavaga mantiene viva esta herencia y la combina con un embotellado moderno para ofrecer un aceite auténtico que habla de historia, pureza y excelencia.",
    organic:"Túnez alberga algunos de los olivos orgánicos más antiguos del mundo, que crecen de forma natural sin químicos ni riego artificial. Nuestros olivares forman parte de este ecosistema único y producen aceitunas ricas en sabor y nutrientes. Cada gota de Bacchavaga refleja esta autenticidad: pura, orgánica y cuidadosamente elaborada.",
    harvest:"Recolectamos las aceitunas a mano con métodos tradicionales transmitidos por generaciones. Agricultores —incluidas muchas mujeres de nuestra comunidad— seleccionan cada fruto con cuidado para preservar su calidad. A las pocas horas, realizamos extracción en frío para garantizar frescura y máxima calidad.",
    awards:"El aceite de oliva tunecino es reconocido mundialmente y gana regularmente oros en NYIOOC y Mario Solinas. Bacchavaga encarna este espíritu de excelencia — sabor, calidad y tradición.",
    sustainability:"Nos comprometemos con un futuro sostenible: proteger el suelo, preservar el agua y apoyar a los agricultores locales. Cada botella de Bacchavaga contribuye a esta misión — mantener vivas las tradiciones y asegurar el futuro del patrimonio olivarero tunecino.",
    vision:"Bacchavaga es más que aceite: es una historia de familia, herencia y orgullo. Desde los antiguos olivares de Vaga hasta tu mesa, comparte un viaje cultivado durante siglos.",
    contact:"Consultas: info@bacchavaga.de",
    astuce:[
      "Elige siempre virgen extra, prensado en frío.",
      "Prefiere botella opaca (vidrio oscuro o lata).",
      "Comprueba la cosecha: ideal dentro de un año; 3–4 meses tras abrir.",
      "Origen claro o certificación (DOP/IGP).",
      "Acidez < 0,8% (mejores ~0,3%).",
      "Polifenoles & salud.",
      "Evita mezclas: single-origin conserva el carácter."
    ]
  },

  tr:{ label:"TR", dir:"ltr",
    titles:{ hero:"Tunus’tan Premium Organik Zeytinyağı – Vaga Mirası",
      organic:"Organik Zeytin Ağaçları", harvest:"Geleneksel Hasat",
      awards:"Ödüller ve Tanınırlık", sustainability:"Sürdürülebilirlik",
      vision:"Vizyonumuz", contact:"İletişim",
      astuce:"Bacchavaga Uzman Tavsiyesi – Olağanüstü zeytinyağı nasıl seçilir" },
    story:"Yüzyıllardır ailemiz, antik Vaga kenti Béja’da verimli Akdeniz topraklarında zeytin yetiştiriyor. Babadan oğula aktarılan mirasımız; sabır, doğaya saygı ve toprağı tanıma kültürü üzerine kurulu. Bugün Bacchavaga, bu birikimi modern şişeleme ile buluşturur; tarih, saflık ve mükemmeliyeti anlatan gerçek bir zeytinyağı sunar.",
    organic:"Tunus, dünyanın en eski organik zeytin ağaçlarından bazılarına ev sahipliği yapar; ağaçlar çoğunlukla kimyasalsız ve yapay sulama olmadan doğal şekilde büyür.",
    harvest:"Zeytinlerimiz el ile toplanır; topluluktaki birçok kadın da sürece dahildir. Zeytinler birkaç saat içinde soğuk sıkılır.",
    awards:"Tunus zeytinyağı dünya çapında takdir görür; NYIOOC ve Mario Solinas gibi yarışmalarda altın madalyalar kazanır.",
    sustainability:"Toprağı korumak, suyu gözetmek ve yerel çiftçiyi desteklemek — sürdürülebilir bir gelecek için.",
    vision:"Sadece yağ değil; aile, kökler ve gururun hikâyesi — Vaga’dan sofranıza.",
    contact:"İletişim: info@bacchavaga.de",
    astuce:[
      "Daima natürel sızma (soğuk sıkım) tercih edin.",
      "Işıktan koruyan opak/koyu şişe kullanın.",
      "Hasat tarihini kontrol edin (12–18 ay).",
      "Açık menşe veya PDO/PGI sertifikası arayın.",
      "Düşük asit (<%0,8; en iyiler ~%0,3).",
      "Polifenoller & sağlık.",
      "Karışımlardan kaçının."
    ]
  },

  nl:{ label:"NL", dir:"ltr",
    titles:{ hero:"Premium biologische olijfolie uit Tunesië – De erfenis van Vaga",
      organic:"Biologische olijfbomen", harvest:"Traditionele oogst",
      awards:"Prijzen & erkenning", sustainability:"Duurzaamheid",
      vision:"Onze visie", contact:"Contact",
      astuce:"Bacchavaga’s expertadvies – Zo kies je uitzonderlijke olijfolie" },
    story:"Al eeuwenlang teelt onze familie in Béja (het oude Vaga) olijfbomen op de vruchtbare mediterrane bodems van Tunesië. Van vader op zoon doorgegeven: geduld, respect voor de natuur en kennis van het land staan centraal. Vandaag verenigt Bacchavaga deze erfenis met modern bottelen om een authentieke olie te brengen die staat voor geschiedenis, zuiverheid en excellentie.",
    organic:"Tunesië herbergt enkele van ’s werelds oudste biologische olijfbomen, die natuurlijk groeien zonder chemicaliën of kunstmatige irrigatie.",
    harvest:"Onze olijven worden met de hand geplukt; veel vrouwen uit de gemeenschap doen mee. Binnen enkele uren volgt koude persing.",
    awards:"Tunesische olijfolie wordt wereldwijd geroemd en wint geregeld goud (NYIOOC, Mario Solinas).",
    sustainability:"We beschermen bodem en water en steunen lokale boeren — voor een duurzame toekomst.",
    vision:"Meer dan olie: familie, erfgoed en trots — van Vaga naar uw tafel.",
    contact:"Vragen: info@bacchavaga.de",
    astuce:[
      "Kies altijd extra vierge (koud geperst).",
      "Ondoorzichtige fles beschermt tegen licht.",
      "Controleer de oogstdatum (12–18 maanden).",
      "Gecertificeerde herkomst / single-origin.",
      "Lage zuurgraad (<0,8%; top ~0,3%).",
      "Denk aan polyfenolen & gezondheid.",
      "Vermijd blends."
    ]
  },

  pl:{ label:"PL", dir:"ltr",
    titles:{ hero:"Organiczna oliwa premium z Tunezji – Dziedzictwo Vaga",
      organic:"Organiczne drzewa oliwne", harvest:"Tradycyjne zbiory",
      awards:"Nagrody i wyróżnienia", sustainability:"Zrównoważony rozwój",
      vision:"Nasza wizja", contact:"Kontakt",
      astuce:"Porada ekspercka Bacchavaga – Jak wybrać wyjątkową oliwę" },
    story:"Od wieków nasza rodzina w Béja (starożytnej Vadze) uprawia oliwki na żyznych, śródziemnomorskich glebach Tunezji. Dziedzictwo przekazywane z ojca na syna opiera się na tradycyjnym rolnictwie — cierpliwości, szacunku do natury i znajomości ziemi. Dziś Bacchavaga łączy tę mądrość z nowoczesnym rozlewem, oferując autentyczną oliwę mówiącą o historii, czystości i doskonałości.",
    organic:"Tunezja jest domem jednych z najstarszych organicznych drzew oliwnych na świecie, rosnących naturalnie bez chemii i sztucznego nawadniania.",
    harvest:"Zbieramy oliwki ręcznie; wiele kobiet z lokalnej społeczności uczestniczy w pracach. W ciągu kilku godzin tłoczymy na zimno.",
    awards:"Tunezyjska oliwa jest doceniana na całym świecie i zdobywa złote medale (NYIOOC, Mario Solinas).",
    sustainability:"Chronimy glebę i wodę, wspieramy lokalnych rolników — dla zrównoważonej przyszłości.",
    vision:"To więcej niż oliwa — to rodzina, dziedzictwo i duma — z Vagi na Twój stół.",
    contact:"Kontakt: info@bacchavaga.de",
    astuce:[
      "Zawsze wybieraj extra virgin (tłoczenie na zimno).",
      "Nieprzezroczysta butelka chroni przed światłem.",
      "Sprawdź datę zbioru (12–18 miesięcy).",
      "Certyfikowane pochodzenie / single-origin.",
      "Niska kwasowość (<0,8%; top ~0,3%).",
      "Polifenole & zdrowie.",
      "Unikaj mieszanek."
    ]
  },

  ru:{ label:"RU", dir:"ltr",
    titles:{ hero:"Премиальное органическое оливковое масло из Туниса — Наследие Ваги",
      organic:"Органические оливковые деревья", harvest:"Традиционный сбор",
      awards:"Награды и признание", sustainability:"Устойчивое развитие",
      vision:"Наша философия", contact:"Контакты",
      astuce:"Совет экспертов Bacchavaga — как выбрать отличное масло" },
    story:"На протяжении веков наша семья в Бедже (древней Ваге) выращивает оливы на плодородных средиземноморских землях Туниса. Наследие, передаваемое из поколения в поколение, основано на традиционном земледелии — терпении, уважении к природе и знании земли. Сегодня Bacchavaga объединяет эту мудрость с современным розливом, предлагая подлинное масло, олицетворяющее историю, чистоту и качество.",
    organic:"В Тунисе растут одни из самых древних органических оливковых деревьев — без химии и искусственного орошения.",
    harvest:"Мы собираем оливки вручную; в сборе участвуют и женщины нашей общины. В течение нескольких часов выполняется холодное извлечение.",
    awards:"Тунисское масло признано во всём мире и получает золото на NYIOOC и Mario Solinas.",
    sustainability:"Мы защищаем почву и воду и поддерживаем местных фермеров — ради устойчивого будущего.",
    vision:"Bacchavaga — это больше, чем масло: семья, наследие и гордость — от Ваги к вашему столу.",
    contact:"Запросы: info@bacchavaga.de",
    astuce:[
      "Выбирайте extra virgin (холодный отжим).",
      "Непрозрачная бутылка защищает от света.",
      "Смотрите на дату урожая (12–18 мес.).",
      "Сертифицированное происхождение / single-origin.",
      "Низкая кислотность (<0,8%; лучшие ~0,3%).",
      "Полифенолы и здоровье.",
      "Избегайте смесей."
    ]
  },

  ar:{ label:"AR", dir:"rtl",
    titles:{ hero:"زيت زيتون عضوي فاخر من تونس — إرث فاغا",
      organic:"أشجار زيتون عضوية", harvest:"جني تقليدي",
      awards:"جوائز وتقدير", sustainability:"الاستدامة",
      vision:"رؤيتنا", contact:"تواصل معنا",
      astuce:"نصيحة خبراء Bacchavaga — كيف تختار زيتًا استثنائيًا" },
    story:"لِقرون طويلة ظلّت عائلتنا في باجة (فاغا القديمة) تزرع أشجار الزيتون على تربة تونس المتوسطية الخصبة. إرثٌ يتناقله الآباء للأبناء قائم على الزراعة التقليدية — الصبر واحترام الطبيعة ومعرفة الأرض. اليوم تواصل Bacchavaga هذه المسيرة، فتجمع حكمة الأجداد مع تعبئة حديثة لتقدّم زيتًا أصيلًا يحكي عن التاريخ والنقاء والتميّز.",
    organic:"تحتضن تونس بعضًا من أقدم أشجار الزيتون العضوية في العالم، تنمو طبيعيًا دون مواد كيميائية أو ريٍّ اصطناعي.",
    harvest:"نَجني الزيتون يدويًا — وتشارك نساء المجتمع المحلي في الحصاد. يتم العصر البارد خلال ساعات للحفاظ على الجودة والانتعاش.",
    awards:"يحظى الزيت التونسي بتقدير عالمي ويفوز بميداليات ذهبية في مسابقات مثل NYIOOC وMario Solinas.",
    sustainability:"نلتزم بمستقبل مستدام: حماية التربة، ترشيد المياه، ودعم المزارعين المحليين.",
    vision:"أكثر من زيت: قصة عائلة وإرث وفخر — من فاغا إلى مائدتكم.",
    contact:"للاستفسار: info@bacchavaga.de",
    astuce:[
      "اختر دائمًا البكر الممتاز، مُعصَرًا على البارد.",
      "زجاجة معتمة تحمي الزيت من الضوء.",
      "تحقّق من تاريخ الحصاد: الأفضل خلال عام؛ 3–4 أشهر بعد الفتح.",
      "منشأ واضح أو شهادات (PDO/PGI).",
      "حموضة أقل من ‎0.8% (الأفضل ~0.3%).",
      "البوليفينولات وصحة القلب.",
      "تجنّب الخلطات — المصدر الواحد يحفظ الطابع."
    ]
  }
};

/* ---------- DOM REFS ---------- */
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

/* ---------- HELPERS ---------- */
function setText(node, txt){ if(node) node.textContent = txt; }
function setHTML(node, html){ if(node) node.innerHTML = html; }

/* Build the menu with German first, Arabic second */
function buildMenu(){
  els.sel.innerHTML = "";
  const order = ["de","ar","en","fr","it","es","tr","nl","pl","ru"];
  order.forEach(code=>{
    const {flag, name} = LANGS[code];
    const opt = document.createElement("option");
    opt.value = code;
    opt.textContent = `${flag} ${name}`;
    els.sel.appendChild(opt);
  });
}

/* ---------- RENDER ---------- */
function render(lang){
  const t = translations[lang] || translations.de; // fallback to German
  const meta = LANGS[lang] || LANGS.de;

  document.documentElement.lang = lang;
  document.documentElement.dir  = t.dir || meta.dir || "ltr";

  setText(els.tHero, t.titles.hero);          setText(els.pStory, t.story);
  setText(els.tOrganic, t.titles.organic);    setText(els.pOrganic, t.organic);
  setText(els.tHarvest, t.titles.harvest);    setText(els.pHarvest, t.harvest);
  setText(els.tAwards, t.titles.awards);      setText(els.pAwards, t.awards);
  setText(els.tSust, t.titles.sustainability);setText(els.pSust, t.sustainability);
  setText(els.tVision, t.titles.vision);      setText(els.pVision, t.vision);
  setText(els.tContact, t.titles.contact);

  const email = "info@bacchavaga.de";
  const body = t.contact.includes("@") ? t.contact : `${t.contact.replace(/[:：]\s*$/,'')}: ${email}`;
  setHTML(els.pContact, body.replace(email, `<a href="mailto:${email}">${email}</a>`));

  if (els.tAstuce) setText(els.tAstuce, t.titles.astuce || "");
  const tips = t.astuce || [];
  [els.a1, els.a2, els.a3, els.a4, els.a5, els.a6, els.a7].forEach((el, i)=> {
    if (el) setText(el, tips[i] || "");
  });

  // Localize label
  const LABELS = { de:"Sprache", ar:"اللغة", en:"Language", fr:"Langue", it:"Lingua", es:"Idioma", tr:"Dil", nl:"Taal", pl:"Język", ru:"Язык" };
  if(els.label) els.label.textContent = LABELS[lang] || "Sprache";
}

/* ---------- INIT ---------- */
(function(){
  if(!els.sel) return;
  buildMenu();

  // Preferred language: saved > German default > Arabic > browser > German
  let saved = null;
  try{ saved = localStorage.getItem("lang"); }catch(e){}
  let start;
  if (saved && LANGS[saved]) {
    start = saved;
  } else {
    const browser = (navigator.language || "de").slice(0,2).toLowerCase();
    start = LANGS[browser] ? browser : "de"; // default to German
  }

  els.sel.value = start;
  render(start);

  els.sel.addEventListener("change", e=>{
    const lang = e.target.value;
    try{ localStorage.setItem("lang", lang); }catch(e){}
    render(lang);
  });
})();
