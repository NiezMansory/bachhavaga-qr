/* ---------- FULL MULTI-LANGUAGE CONTENT + RENDER ---------- */

const translations = {
  en: {
    label: "EN", dir: "ltr",
    titles: {
      hero: "Premium Organic Olive Oil from Tunisia – The Heritage of Vaga",
      organic: "Organic Olive Trees",
      harvest: "Traditional Harvest",
      awards: "Awards & Recognition",
      sustainability: "Sustainability",
      vision: "Our Vision",
      contact: "Contact"
    },
    story: `For centuries, our family in Béja (the ancient city of Vaga) has cultivated olive trees on the rich Mediterranean soil of Tunisia. Passed down from father to son, our heritage is rooted in traditional farming – where patience, respect for nature, and knowledge of the land guide every step. Today, Bacchavaga carries this legacy forward, combining ancestral wisdom with modern bottling to bring you authentic olive oil that speaks of history, purity, and excellence.`,
    organic: `Tunisia is home to some of the world’s oldest organic olive trees, many of which still grow naturally without chemicals or artificial irrigation. Our groves are part of this unique ecosystem – producing olives rich in flavor and nutrients. Each drop of Bacchavaga olive oil reflects this authenticity: certified organic, pure, and cultivated with care.`,
    harvest: `Our olives are harvested by hand, using traditional methods passed down through generations. Farmers – including many women of our community – carefully pick each olive to preserve its integrity. Within hours, the olives are cold-pressed, ensuring the highest quality and freshness in every bottle.`,
    awards: `Tunisian olive oil is celebrated worldwide and has received numerous international awards in New York, London, Tokyo, and beyond. Bacchavaga is proud to be part of this story – representing Tunisia’s excellence in taste, quality, and tradition.`,
    sustainability: `We are committed to a sustainable future: protecting our soil, preserving water, and supporting the local farming community. Every bottle of Bacchavaga contributes to this mission – keeping traditions alive while ensuring future generations can continue to enjoy Tunisia’s olive heritage.`,
    vision: `Bacchavaga is more than olive oil – it is a story of family, heritage, and pride. From the ancient groves of Vaga to your table, we invite you to share in a journey that has been nurtured for centuries.`,
    contact: `For inquiries: info@bacchavaga.de`
  },

  de: {
    label: "DE", dir: "ltr",
    titles: {
      hero: "Premium Bio‑Olivenöl aus Tunesien – Das Erbe von Vaga",
      organic: "Organische Olivenbäume",
      harvest: "Traditionelle Ernte",
      awards: "Auszeichnungen & Anerkennung",
      sustainability: "Nachhaltigkeit",
      vision: "Unsere Vision",
      contact: "Kontakt"
    },
    story: `Seit Jahrhunderten bewirtschaftet unsere Familie in Béja (der antiken Stadt Vaga) Olivenbäume im fruchtbaren mediterranen Boden Tunesiens. Von Vater zu Sohn weitergegeben, ist unser Erbe in der traditionellen Landwirtschaft verwurzelt – geprägt von Geduld, Respekt vor der Natur und tiefem Wissen um das Land. Heute führt Bacchavaga dieses Erbe fort, indem wir überliefte Weisheit mit moderner Abfüllung verbinden, um authentisches Olivenöl voller Geschichte, Reinheit und Exzellenz zu liefern.`,
    organic: `Tunesien ist Heimat einiger der ältesten Bio‑Olivenbäume der Welt, die oft ohne Chemikalien oder künstliche Bewässerung gedeihen. Unsere Haine sind Teil dieses einzigartigen Ökosystems und bringen Oliven hervor, die reich an Geschmack und Nährstoffen sind. Jeder Tropfen Bacchavaga‑Olivenöl spiegelt diese Authentizität wider: bio‑zertifiziert, rein und mit Sorgfalt kultiviert.`,
    harvest: `Unsere Oliven werden von Hand geerntet – nach Methoden, die seit Generationen weitergegeben werden. Bäuerinnen und Bauern, darunter viele Frauen unserer Gemeinschaft, pflücken jede Olive sorgfältig, um ihre Qualität zu bewahren. Innerhalb weniger Stunden werden die Früchte kaltgepresst – für höchste Frische in jeder Flasche.`,
    awards: `Tunesisches Olivenöl wird weltweit gefeiert und hat zahlreiche internationale Auszeichnungen in New York, London, Tokio und darüber hinaus erhalten. Bacchavaga ist stolz, Teil dieser Geschichte zu sein – als Botschafter für Geschmack, Qualität und Tradition Tunesiens.`,
    sustainability: `Wir setzen uns für eine nachhaltige Zukunft ein: Wir schützen den Boden, bewahren Wasser und unterstützen die lokale Landwirtschaft. Jede Flasche Bacchavaga trägt dazu bei – Traditionen zu bewahren und kommenden Generationen das tunesische Olivenerbe zu sichern.`,
    vision: `Bacchavaga ist mehr als Olivenöl – es ist eine Familiengeschichte, ein Erbe und ein Stolz. Von den antiken Hainen von Vaga bis auf Ihren Tisch laden wir Sie ein, an einer seit Jahrhunderten gepflegten Reise teilzuhaben.`,
    contact: `Anfragen: info@bacchavaga.de`
  },

  fr: {
    label: "FR", dir: "ltr",
    titles: {
      hero: "Huile d’olive biologique premium de Tunisie – L’héritage de Vaga",
      organic: "Oliviers biologiques",
      harvest: "Récolte traditionnelle",
      awards: "Prix & Reconnaissance",
      sustainability: "Durabilité",
      vision: "Notre vision",
      contact: "Contact"
    },
    story: `Depuis des siècles, notre famille à Béja (l’ancienne ville de Vaga) cultive des oliviers sur les terres méditerranéennes de Tunisie. Transmis de père en fils, notre héritage s’enracine dans l’agriculture traditionnelle – patience, respect de la nature et connaissance du terroir. Aujourd’hui, Bacchavaga perpétue ce legs en mariant sagesse ancestrale et mise en bouteille moderne pour offrir une huile d’olive authentique, synonyme d’histoire, de pureté et d’excellence.`,
    organic: `La Tunisie abrite certains des plus anciens oliviers biologiques au monde, poussant naturellement sans produits chimiques ni irrigation artificielle. Nos oliveraies appartiennent à cet écosystème unique et donnent des olives riches en arômes et nutriments. Chaque goutte d’huile Bacchavaga reflète cette authenticité : certifiée bio, pure et cultivée avec soin.`,
    harvest: `Nos olives sont récoltées à la main selon des méthodes transmises de génération en génération. Les agriculteurs – dont de nombreuses femmes de notre communauté – cueillent chaque olive avec précaution pour préserver son intégrité. En quelques heures, elles sont pressées à froid afin de garantir une qualité et une fraîcheur optimales.`,
    awards: `L’huile d’olive tunisienne est célébrée dans le monde entier et a reçu de nombreux prix internationaux à New York, Londres, Tokyo et au‑delà. Bacchavaga est fière de faire partie de cette histoire – l’excellence tunisienne en goût, qualité et tradition.`,
    sustainability: `Nous œuvrons pour un avenir durable : protection des sols, préservation de l’eau et soutien à la communauté agricole locale. Chaque bouteille Bacchavaga contribue à cette mission, pour que les générations futures profitent de l’héritage oléicole tunisien.`,
    vision: `Bacchavaga est plus qu’une huile d’olive – c’est une histoire de famille, d’héritage et de fierté. Des oliveraies antiques de Vaga jusqu’à votre table, partagez une aventure patiemment cultivée depuis des siècles.`,
    contact: `Demandes : info@bacchavaga.de`
  },

  it: {
    label: "IT", dir: "ltr",
    titles: {
      hero: "Olio extravergine biologico dalla Tunisia – L’eredità di Vaga",
      organic: "Ulivi biologici",
      harvest: "Raccolta tradizionale",
      awards: "Premi & Riconoscimenti",
      sustainability: "Sostenibilità",
      vision: "La nostra visione",
      contact: "Contatti"
    },
    story: `Da secoli la nostra famiglia a Béja (l’antica Vaga) coltiva ulivi sul ricco suolo mediterraneo della Tunisia. Tramandato di padre in figlio, il nostro patrimonio affonda le radici nell’agricoltura tradizionale – pazienza, rispetto per la natura e conoscenza della terra. Oggi Bacchavaga porta avanti questo lascito unendo saggezza ancestrale e imbottigliamento moderno per offrirvi un olio autentico che parla di storia, purezza ed eccellenza.`,
    organic: `La Tunisia ospita alcuni dei più antichi ulivi biologici al mondo, che crescono naturalmente senza prodotti chimici né irrigazione artificiale. I nostri uliveti fanno parte di questo ecosistema unico e producono olive ricche di gusto e nutrienti. Ogni goccia di Bacchavaga riflette questa autenticità: certificata bio, pura e coltivata con cura.`,
    harvest: `Le nostre olive vengono raccolte a mano seguendo metodi tramandati da generazioni. I contadini – molte sono donne della nostra comunità – selezionano con attenzione ogni oliva per preservarne l’integrità. Nel giro di poche ore vengono spremute a freddo, garantendo la massima qualità e freschezza.`,
    awards: `L’olio tunisino è celebrato in tutto il mondo e ha ricevuto numerosi premi internazionali a New York, Londra, Tokyo e oltre. Bacchavaga è orgogliosa di far parte di questa storia, rappresentando l’eccellenza della Tunisia in gusto, qualità e tradizione.`,
    sustainability: `Ci impegniamo per un futuro sostenibile: proteggiamo il suolo, preserviamo l’acqua e sosteniamo l’agricoltura locale. Ogni bottiglia Bacchavaga contribuisce a questa missione, mantenendo vive le tradizioni e tutelando l’eredità olearia per le generazioni future.`,
    vision: `Bacchavaga è più di un olio – è una storia di famiglia, eredità e orgoglio. Dalle antiche campagne di Vaga alla vostra tavola, vi invitiamo a condividere un percorso coltivato per secoli.`,
    contact: `Richieste: info@bacchavaga.de`
  },

  es: {
    label: "ES", dir: "ltr",
    titles: {
      hero: "Aceite de oliva orgánico premium de Túnez – El legado de Vaga",
      organic: "Olivos orgánicos",
      harvest: "Cosecha tradicional",
      awards: "Premios y Reconocimientos",
      sustainability: "Sostenibilidad",
      vision: "Nuestra visión",
      contact: "Contacto"
    },
    story: `Durante siglos, nuestra familia en Béja (la antigua ciudad de Vaga) ha cultivado olivos en la rica tierra mediterránea de Túnez. Transmitido de padres a hijos, nuestro legado se basa en la agricultura tradicional: paciencia, respeto por la naturaleza y conocimiento del terreno. Hoy, Bacchavaga mantiene vivo este legado uniendo la sabiduría ancestral con el embotellado moderno para ofrecer un aceite auténtico que habla de historia, pureza y excelencia.`,
    organic: `Túnez alberga algunos de los olivos orgánicos más antiguos del mundo, que crecen de forma natural sin químicos ni riego artificial. Nuestros olivares forman parte de este ecosistema único y producen aceitunas ricas en sabor y nutrientes. Cada gota de Bacchavaga refleja esta autenticidad: certificada orgánica, pura y cultivada con esmero.`,
    harvest: `Nuestras aceitunas se recogen a mano con métodos transmitidos de generación en generación. Los agricultores –incluidas muchas mujeres de nuestra comunidad– seleccionan cada aceituna con cuidado para preservar su calidad. A las pocas horas se prensan en frío para garantizar máxima frescura en cada botella.`,
    awards: `El aceite de oliva tunecino es reconocido en todo el mundo y ha recibido numerosos premios internacionales en Nueva York, Londres, Tokio y más. Bacchavaga se enorgullece de formar parte de esta historia, representando la excelencia de Túnez en sabor, calidad y tradición.`,
    sustainability: `Estamos comprometidos con un futuro sostenible: protegemos el suelo, preservamos el agua y apoyamos a la comunidad agrícola local. Cada botella de Bacchavaga contribuye a esta misión, manteniendo vivas las tradiciones y asegurando el legado oleícola para las generaciones futuras.`,
    vision: `Bacchavaga es más que aceite de oliva: es una historia de familia, herencia y orgullo. Desde los antiguos olivares de Vaga hasta tu mesa, te invitamos a compartir un camino cultivado durante siglos.`,
    contact: `Consultas: info@bacchavaga.de`
  },

  tr: {
    label: "TR", dir: "ltr",
    titles: {
      hero: "Tunus’tan Premium Organik Zeytinyağı – Vaga Mirası",
      organic: "Organik Zeytin Ağaçları",
      harvest: "Geleneksel Hasat",
      awards: "Ödüller ve Tanınırlık",
      sustainability: "Sürdürülebilirlik",
      vision: "Vizyonumuz",
      contact: "İletişim"
    },
    story: `Yüzyıllardır ailemiz, Tunus’un zengin Akdeniz topraklarında yer alan Béja’da (antik Vaga) zeytin ağaçları yetiştiriyor. Babadan oğula aktarılan mirasımız; sabır, doğaya saygı ve toprağı tanımaya dayalı geleneksel tarıma kök salmıştır. Bugün Bacchavaga, atalarımızın bilgisini modern şişeleme ile birleştirerek tarihe, saflığa ve mükemmelliğe seslenen gerçek zeytinyağını sunar.`,
    organic: `Tunus, dünyanın en eski organik zeytin ağaçlarından bazılarına ev sahipliği yapar; birçoğu kimyasal kullanmadan ve yapay sulama olmadan doğal biçimde büyür. Bahçelerimiz bu eşsiz ekosistemin parçasıdır ve lezzet ile besin değeri yüksek zeytinler üretir. Bacchavaga’nın her damlası bu özgünlüğü yansıtır: organik sertifikalı, saf ve özenle yetiştirilmiştir.`,
    harvest: `Zeytinlerimiz kuşaktan kuşağa aktarılan geleneksel yöntemlerle **elle** toplanır. Topluluğumuzdaki birçok kadın çiftçi de dâhil olmak üzere her zeytin dikkatle seçilir. Saatler içinde soğuk sıkım yapılır; böylece her şişede en yüksek kalite ve tazelik korunur.`,
    awards: `Tunus zeytinyağı dünya çapında takdir görmekte ve New York, Londra, Tokyo gibi şehirlerde çok sayıda uluslararası ödül almaktadır. Bacchavaga, Tunus’un lezzet, kalite ve gelenekteki mükemmelliğini temsil etmekten gurur duyar.`,
    sustainability: `Sürdürülebilir bir gelecek için çalışıyoruz: toprağı koruyor, suyu muhafaza ediyor ve yerel çiftçi topluluğunu destekliyoruz. Bacchavaga’nın her şişesi bu misyona katkı sağlar; gelenekleri yaşatır ve zeytin mirasının gelecek nesillere aktarılmasına yardımcı olur.`,
    vision: `Bacchavaga sadece bir zeytinyağı değil; aile, miras ve gurur hikâyesidir. Vaga’nın kadim zeytinliklerinden sofranıza uzanan, yüzyıllardır özenle sürdürülen bu yolculuğa sizi de davet ediyoruz.`,
    contact: `İletişim: info@bacchavaga.de`
  },

  nl: {
    label: "NL", dir: "ltr",
    titles: {
      hero: "Premium biologische olijfolie uit Tunesië – De erfenis van Vaga",
      organic: "Biologische olijfbomen",
      harvest: "Traditionele oogst",
      awards: "Prijzen & Erkenning",
      sustainability: "Duurzaamheid",
      vision: "Onze visie",
      contact: "Contact"
    },
    story: `Al eeuwenlang cultiveert onze familie in Béja (de antieke stad Vaga) olijfbomen op de vruchtbare mediterrane bodem van Tunesië. Van vader op zoon doorgegeven, is ons erfgoed geworteld in traditionele landbouw – met geduld, respect voor de natuur en kennis van het land. Vandaag zet Bacchavaga dit voort door eeuwenoude wijsheid te combineren met moderne botteling voor een authentieke olijfolie die staat voor geschiedenis, zuiverheid en excellentie.`,
    organic: `Tunesië herbergt enkele van ’s werelds oudste biologische olijfbomen, die vaak natuurlijk groeien zonder chemicaliën of kunstmatige irrigatie. Onze boomgaarden maken deel uit van dit unieke ecosysteem en leveren olijven boordevol smaak en voedingsstoffen. Elke druppel Bacchavaga weerspiegelt deze echtheid: biologisch gecertificeerd, puur en met zorg geteeld.`,
    harvest: `Onze olijven worden met de hand geplukt volgens methoden die generaties lang zijn doorgegeven. Boeren – waaronder veel vrouwen uit onze gemeenschap – kiezen elke olijf zorgvuldig om de kwaliteit te behouden. Binnen enkele uren worden ze koud geperst voor maximale versheid in elke fles.`,
    awards: `Tunesische olijfolie wordt wereldwijd geprezen en heeft talloze internationale prijzen gewonnen in New York, Londen, Tokio en daarbuiten. Bacchavaga is er trots op deel uit te maken van dit verhaal – als vertegenwoordiger van Tunesië’s uitmuntendheid in smaak, kwaliteit en traditie.`,
    sustainability: `Wij zetten ons in voor een duurzame toekomst: bescherming van de bodem, behoud van water en steun aan de lokale boeren. Elke fles Bacchavaga draagt bij aan deze missie, zodat toekomstige generaties kunnen blijven genieten van het Tunesische olijferfgoed.`,
    vision: `Bacchavaga is meer dan olijfolie – het is een verhaal van familie, erfgoed en trots. Van de eeuwenoude olijfgaarden van Vaga tot aan uw tafel: we nodigen u uit om mee te reizen op dit pad dat al eeuwen wordt gekoesterd.`,
    contact: `Vragen: info@bacchavaga.de`
  },

  pl: {
    label: "PL", dir: "ltr",
    titles: {
      hero: "Organiczna oliwa premium z Tunezji – Dziedzictwo Vaga",
      organic: "Organiczne drzewa oliwne",
      harvest: "Tradycyjne zbiory",
      awards: "Nagrody i wyróżnienia",
      sustainability: "Zrównoważony rozwój",
      vision: "Nasza wizja",
      contact: "Kontakt"
    },
    story: `Od wieków nasza rodzina w Béja (starożytna Vaga) uprawia drzewa oliwne na żyznych, śródziemnomorskich ziemiach Tunezji. Dziedzictwo przekazywane z ojca na syna wyrasta z tradycyjnego rolnictwa – cierpliwości, szacunku do natury i znajomości ziemi. Dziś Bacchavaga kontynuuje tę tradycję, łącząc mądrość przodków z nowoczesnym rozlewem, aby dostarczać autentyczną oliwę mówiącą o historii, czystości i doskonałości.`,
    organic: `Tunezja jest domem jednych z najstarszych organicznych drzew oliwnych na świecie, rosnących naturalnie – bez chemii i sztucznego nawadniania. Nasze gaje są częścią tego unikalnego ekosystemu i dają oliwki bogate w smak oraz składniki odżywcze. Każda kropla Bacchavaga odzwierciedla tę autentyczność: certyfikowana, czysta i uprawiana z troską.`,
    harvest: `Oliwki zbieramy ręcznie, zgodnie z metodami przekazywanymi z pokolenia na pokolenie. Rolnicy – w tym wiele kobiet – starannie zbierają każdą oliwkę, aby zachować jej jakość. W ciągu kilku godzin są tłoczone na zimno, co gwarantuje świeżość i najwyższą jakość w każdej butelce.`,
    awards: `Tunezyjska oliwa z oliwek jest ceniona na całym świecie i zdobywa liczne międzynarodowe nagrody w Nowym Jorku, Londynie, Tokio i nie tylko. Bacchavaga z dumą jest częścią tej historii – reprezentując tunezyjską doskonałość w smaku, jakości i tradycji.`,
    sustainability: `Dbamy o zrównoważoną przyszłość: chronimy glebę, oszczędzamy wodę i wspieramy lokalną społeczność rolniczą. Każda butelka Bacchavaga wspiera tę misję – podtrzymując tradycje i przekazując oliwne dziedzictwo kolejnym pokoleniom.`,
    vision: `Bacchavaga to coś więcej niż oliwa – to opowieść o rodzinie, dziedzictwie i dumie. Od starożytnych gajów Vaga aż po Twój stół – zapraszamy do wspólnej podróży pielęgnowanej przez stulecia.`,
    contact: `Kontakt: info@bacchavaga.de`
  },

  ru: {
    label: "RU", dir: "ltr",
    titles: {
      hero: "Премиальное органическое оливковое масло из Туниса — Наследие Ваґи",
      organic: "Органические оливковые деревья",
      harvest: "Традиционный сбор",
      awards: "Награды и признание",
      sustainability: "Устойчивое развитие",
      vision: "Наша философия",
      contact: "Контакты"
    },
    story: `На протяжении столетий наша семья в Бедже (древней Ваґе) выращивает оливковые деревья на плодородной средиземноморской земле Туниса. Передаваемое из поколения в поколение наследие основано на традиционном земледелии — терпении, уважении к природе и знании земли. Сегодня Bacchavaga продолжает эту линию, сочетая мудрость предков с современным розливом, чтобы дарить подлинное масло — олицетворение истории, чистоты и качества.`,
    organic: `Тунис — родина одних из самых древних органических оливковых деревьев. Многие из них растут естественно, без химии и искусственного орошения. Наши рощи — часть этой уникальной экосистемы и дают оливки, богатые вкусом и питательными веществами. Каждая капля Bacchavaga — это подлинность: сертифицированный органический продукт, выращенный с заботой.`,
    harvest: `Мы собираем оливки вручную по традициям, переданным через поколения. Фермеры — среди них много женщин — аккуратно собирают каждый плод, сохраняя его целостность. В течение нескольких часов после сбора оливки холодного отжима — для максимальной свежести и качества в каждой бутылке.`,
    awards: `Тунисское оливковое масло высоко ценится во всем мире и удостоено множества международных наград в Нью‑Йорке, Лондоне, Токио и других городах. Bacchavaga гордится тем, что является частью этой истории — олицетворяя превосходство Туниса во вкусе, качестве и традициях.`,
    sustainability: `Мы привержены устойчивому будущему: защищаем почву, бережем воду и поддерживаем местные фермерские общины. Каждая бутылка Bacchavaga способствует сохранению традиций и передачe оливкового наследия будущим поколениям.`,
    vision: `Bacchavaga — это больше, чем масло: это история семьи, наследия и гордости. От древних рощ Ваґи — к вашему столу. Приглашаем разделить путь, который бережно продолжается веками.`,
    contact: `Запросы: info@bacchavaga.de`
  },

  ar: {
    label: "AR", dir: "rtl",
    titles: {
      hero: "زيت زيتون عضوي فاخر من تونس — إرث فاغا",
      organic: "أشجار زيتون عضوية",
      harvest: "جني تقليدي",
      awards: "جوائز وتقدير",
      sustainability: "الاستدامة",
      vision: "رؤيتنا",
      contact: "تواصل معنا"
    },
    story: `لِقرونٍ طويلة دأبت عائلتنا في باجة (مدينة فاغا القديمة) على زراعة أشجار الزيتون في تربة تونس المتوسطية الخصبة. إرثُنا، الذي انتقل من الآباء إلى الأبناء، متجذّر في الزراعة التقليدية القائمة على الصبر واحترام الطبيعة ومعرفة الأرض. اليوم تواصل Bacchavaga هذا الإرث بدمج حكمة الأجداد مع التعبئة الحديثة لنقدم زيتًا أصيلاً يعبّر عن التاريخ والنقاء والتميّز.`,
    organic: `تضم تونس بعضًا من أقدم أشجار الزيتون العضوية في العالم، والتي تنمو طبيعيًا من دون مواد كيميائية أو ريّ اصطناعي. بساتيننا جزء من هذا النظام البيئي الفريد وتنتج زيتونًا غنيًا بالنكهة والعناصر الغذائية. كل قطرة من زيت Bacchavaga تعكس هذه الأصالة: معتمد عضويًا ونقي ومُعتنى به بعناية.`,
    harvest: `نَجني الزيتون يدويًا وفق أساليب متوارثة عبر الأجيال. ويشارك العديد من نساء مجتمعنا في قطف كل ثمرة بعناية للحفاظ على جودتها. خلال ساعات قليلة يُعصر الزيتون على البارد لضمان أعلى درجات الجودة والطزاجة في كل زجاجة.`,
    awards: `يحظى زيت الزيتون التونسي بتقدير عالمي ونال جوائز دولية عديدة في نيويورك ولندن وطوكيو وغيرها. وتفخر Bacchavaga بكونها جزءًا من هذه القصة ممثلةً تميز تونس في المذاق والجودة والتقاليد.`,
    sustainability: `نلتزم بمستقبل مستدام: نحمي التربة ونحافظ على المياه وندعم المزارعين المحليين. كل زجاجة من Bacchavaga تُسهم في هذه الرسالة، محافظةً على التقاليد وضامنةً استمرار إرث الزيتون للأجيال القادمة.`,
    vision: `Bacchavaga ليست مجرد زيت زيتون؛ إنها قصة عائلة وإرث وفخر. من بساتين فاغا العتيقة إلى موائدكم، ندعوكم لمشاركة رحلةٍ اعتنينا بها عبر القرون.`,
    contact: `للاستفسار: info@bacchavaga.de`
  }
const translations = {
  en: {
    titles: {
      // ...existing
      astuce: "Bacchavaga’s Expert Advice – Choose Exceptional Olive Oil",
    },
    astuce: [
      "Always choose extra virgin: cold-pressed, chemical-free; highest in natural antioxidants and polyphenols.",
      "Prefer an opaque bottle: light damages flavour and nutrients; dark glass or tin protects the oil from mill to kitchen.",
      "Check the harvest date: oil doesn’t age like wine; pick the latest harvest; enjoy within a year and within 3–4 months after opening.",
      "Trust certified origin and traceability: PDO/PGI or clearly stated single origin.",
      "Look for low acidity: < 0.8% (top oils often ~0.3%) — a sign of careful picking and fast cold-pressing.",
      "Think polyphenols & health: fresh, well-stored extra virgin supports heart health and reduces oxidative stress.",
      "Avoid blends: single-origin preserves the grove’s character — Bacchavaga is never blended."
    ],
  },

  fr: {
    titles: {
      astuce: "L’Astuce d’Expert Bacchavaga – Bien choisir son huile d’olive",
    },
    astuce: [
      "Choisir l’extra-vierge : pressée à froid, sans solvants ; la plus riche en antioxydants et polyphénols.",
      "Privilégier une bouteille opaque : la lumière altère arômes et nutriments ; le verre sombre ou le métal protègent l’huile, du moulin à votre cuisine.",
      "Vérifier la date de récolte : l’huile ne se bonifie pas ; préférez une récolte récente ; consommez dans l’année et 3–4 mois après ouverture.",
      "Exiger une origine certifiée et traçable : AOP/IGP ou mention d’une origine unique.",
      "Observer l’acidité : < 0,8 % (souvent ~0,3 % pour les meilleures) — signe de récolte soignée et d’extraction rapide à froid.",
      "Penser polyphénols & santé : une extra-vierge fraîche, bien conservée, soutient la santé cardio-vasculaire et réduit le stress oxydatif.",
      "Éviter les mélanges : l’origine unique préserve l’identité du terroir — Bacchavaga n’est jamais assemblée."
    ],
  },

  de: {
    titles: {
      astuce: "Bacchavagas Profi-Tipp – So wählen Sie ein herausragendes Olivenöl",
    },
    astuce: [
      "Immer Extra Nativ wählen: kaltgepresst, ohne Chemie; am reichsten an Antioxidantien und Polyphenolen.",
      "Dunkle Flasche bevorzugen: Licht schadet Aroma und Nährstoffen; dunkles Glas oder Blech schützt vom Mahlwerk bis zur Küche.",
      "Erntedatum prüfen: Öl reift nicht wie Wein; neueste Ernte wählen; innerhalb eines Jahres und 3–4 Monate nach Öffnung genießen.",
      "Zertifizierte Herkunft & Rückverfolgbarkeit: g.g.A./g.U. oder klar ausgewiesener Single-Origin.",
      "Niedrige Säure suchen: < 0,8 % (Top-Öle ~0,3 %) — Zeichen für sorgfältige Ernte und schnelle Kaltpressung.",
      "An Polyphenole & Gesundheit denken: frisches, gut gelagertes Extra Nativ unterstützt Herzgesundheit und reduziert oxidativen Stress.",
      "Mischungen meiden: Single-Origin bewahrt den Charakter des Hains — Bacchavaga wird nicht gemischt."
    ],
  },

  it: {
    titles: {
      astuce: "Consiglio d’Esperto Bacchavaga – Come scegliere un olio d’oliva eccezionale",
    },
    astuce: [
      "Scegli sempre l’extravergine: spremitura a freddo, senza chimica; massima ricchezza di antiossidanti e polifenoli.",
      "Preferisci bottiglia opaca: la luce danneggia aromi e nutrienti; vetro scuro o lattina proteggono l’olio dal frantoio alla cucina.",
      "Controlla la data di raccolta: l’olio non invecchia come il vino; scegli il raccolto più recente; consuma entro un anno e 3–4 mesi dall’apertura.",
      "Affidati a origine certificata e tracciabile: DOP/IGP o origine unica dichiarata.",
      "Verifica l’acidità: < 0,8% (i migliori ~0,3%) — segno di raccolta accurata e rapida estrazione a freddo.",
      "Pensa ai polifenoli & salute: extravergine fresco e ben conservato sostiene il cuore e riduce lo stress ossidativo.",
      "Evita i blend: il single-origin conserva il carattere dell’oliveto — Bacchavaga non è mai miscelato."
    ],
  },

  es: {
    titles: {
      astuce: "Consejo Experto de Bacchavaga – Cómo elegir un aceite de oliva excepcional",
    },
    astuce: [
      "Elige siempre virgen extra: extracción en frío, sin químicos; más rico en antioxidantes y polifenoles.",
      "Prefiere botella opaca: la luz daña sabor y nutrientes; vidrio oscuro o lata protegen el aceite del molino a la cocina.",
      "Comprueba la fecha de cosecha: el aceite no envejece como el vino; elige la cosecha más reciente; consume en un año y en 3–4 meses tras abrir.",
      "Confía en el origen certificado y la trazabilidad: DOP/IGP u origen único claramente indicado.",
      "Mira la acidez: < 0,8% (los mejores ~0,3%) — señal de recolección cuidadosa y prensado en frío rápido.",
      "Piensa en polifenoles & salud: un virgen extra fresco y bien conservado ayuda al corazón y reduce el estrés oxidativo.",
      "Evita mezclas: el origen único preserva el carácter del olivar — Bacchavaga no se mezcla."
    ],
  },

  tr: {
    titles: {
      astuce: "Bacchavaga Uzman Tavsiyesi – Olağanüstü Zeytinyağı Nasıl Seçilir",
    },
    astuce: [
      "Her zaman sızma zeytinyağı seçin: soğuk sıkım, kimyasal yok; en yüksek doğal antioksidan ve polifenol.",
      "Opak şişeyi tercih edin: ışık aroma ve besinleri bozar; koyu cam veya teneke yağı değirmenden mutfağa korur.",
      "Hasat tarihine bakın: yağ şarap gibi yıllanmaz; en yeni hasadı seçin; açtıktan sonra 3–4 ay içinde ve üretim yılından önce tüketin.",
      "Sertifikalı köken ve izlenebilirlik: PDO/PGI (AB) veya açıkça belirtilmiş tek menşei.",
      "Düşük asit oranı arayın: < %0,8 (üst kalite ~%0,3) — özenli hasat ve hızlı soğuk sıkım göstergesi.",
      "Polifenoller & sağlık: taze, iyi saklanan sızma yağ kalp sağlığını destekler ve oksidatif stresi azaltır.",
      "Karışımlardan kaçının: tek menşei, zeytinliğin karakterini korur — Bacchavaga asla karışım değildir."
    ],
  },

  nl: {
    titles: {
      astuce: "Bacchavaga’s Expertadvies – Zo kies je een uitzonderlijke olijfolie",
    },
    astuce: [
      "Kies altijd extra vierge: koudgeperst, zonder chemicaliën; het rijkst aan antioxidanten en polyfenolen.",
      "Ga voor een ondoorzichtige fles: licht schaadt smaak en voedingsstoffen; donker glas of blik beschermt van molen tot keuken.",
      "Controleer de oogstdatum: olie rijpt niet zoals wijn; kies de meest recente oogst; gebruik binnen een jaar en 3–4 maanden na openen.",
      "Vertrouw op gecertificeerde herkomst & traceerbaarheid: BOB/BGA of duidelijk aangegeven single-origin.",
      "Let op lage zuurgraad: < 0,8% (topoliën ~0,3%) — teken van zorgvuldige pluk en snelle koude persing.",
      "Denk aan polyfenolen & gezondheid: verse, goed bewaarde extra vierge ondersteunt het hart en vermindert oxidatieve stress.",
      "Vermijd blends: single-origin bewaart het karakter van de olijfgaard — Bacchavaga wordt niet gemengd."
    ],
  },

  vls: { // Vlaams
    titles: {
      astuce: "Bacchavaga’s Experttip – Hoe kies je een uitzonderlike olijfolie",
    },
    astuce: [
      "Kies altij extra vierge: koudgeperst, zonder chemie; ’t rijkst aan antioxidanten en polyfenolen.",
      "Pak een ondoorschijnende fles: licht schaadt smaak en voedingsstoffen; donker glas of blik beschermt van molen tot keuken.",
      "Check de oogstdatum: olie rijpt nie gelijk wijn; kies de meest recente en gebruik binnen ’t jaar, best 3–4 maanden na openen.",
      "Gecertificeerde herkomst & traceerbaar: BOB/BGA of duidelijk single-origin.",
      "Let op lage zuurte: < 0,8% (top ~0,3%) — teken van zorgvuldige pluk en rappe koude persing.",
      "Polyfenolen & gezondheid: verse, goe bewaarde extra vierge ondersteunt ’t hart en vermindert oxidatieve stress.",
      "Vermijd mengelingen: single-origin bewaart ’t karakter van de gaard — Bacchavaga wordt nie gemengd."
    ],
  },

  pl: {
    titles: {
      astuce: "Porada Ekspercka Bacchavaga – Jak wybrać wyjątkową oliwę",
    },
    astuce: [
      "Wybieraj zawsze extra virgin: tłoczona na zimno, bez chemii; najbogatsza w przeciwutleniacze i polifenole.",
      "Butelka nieprzezroczysta: światło szkodzi aromatowi i składnikom; ciemne szkło lub puszka chronią od młyna po kuchnię.",
      "Sprawdź datę zbiorów: oliwa nie starzeje się jak wino; wybieraj najświeższy zbiór; spożyj w ciągu roku i 3–4 miesięcy od otwarcia.",
      "Zaufaj certyfikowanemu pochodzeniu: ChNP/ChOG lub jasno wskazane jedno źródło.",
      "Zwracaj uwagę na kwasowość: < 0,8% (top często ~0,3%) — znak szybkiego, starannego tłoczenia na zimno.",
      "Polifenole & zdrowie: świeża, dobrze przechowywana extra virgin wspiera serce i zmniejsza stres oksydacyjny.",
      "Unikaj mieszanek: jedno źródło zachowuje charakter gaju — Bacchavaga nie jest mieszana."
    ],
  },

  ru: {
    titles: {
      astuce: "Совет экспертов Bacchavaga — как выбрать выдающееся оливковое масло",
    },
    astuce: [
      "Всегда выбирайте extra virgin: холодный отжим, без химии; максимум природных антиоксидантов и полифенолов.",
      "Непрозрачная бутылка: свет ухудшает вкус и питательность; тёмное стекло или жесть защищают масло от мельницы до кухни.",
      "Проверяйте дату урожая: масло не «выдерживается» как вино; берите самый свежий урожай; используйте в течение года и 3–4 месяцев после открытия.",
      "Сертифицированное происхождение и прослеживаемость: PDO/PGI или чётко указанный единый источник.",
      "Низкая кислотность: < 0,8% (топ-масла около 0,3%) — признак бережного сбора и быстрой холодной выжимки.",
      "Полифенолы и здоровье: свежее extra virgin при правильном хранении поддерживает сердце и снижает оксидативный стресс.",
      "Избегайте смесей: масло одного происхождения сохраняет характер рощи — Bacchavaga не смешивается."
    ],
  },
};

};

/* ---------- DEFENSIVE RENDER / WIRING ---------- */

const $ = id => document.getElementById(id);
const els = {
  hHero: $("h-hero"),
  tHero: $("t-hero"),          pStory: $("p-story"),
  tOrganic: $("t-organic"),    pOrganic: $("p-organic"),
  tHarvest: $("t-harvest"),    pHarvest: $("p-harvest"),
  tAwards: $("t-awards"),      pAwards: $("p-awards"),
  tSust: $("t-sustainability"),pSust: $("p-sustainability"),
  tVision: $("t-vision"),      pVision: $("p-vision"),
  tContact: $("t-contact"),    pContact: $("p-contact")
  const els = {
  // ...existing refs
  tAstuce: document.getElementById("t-astuce"),
  a1: document.getElementById("a1"),
  a2: document.getElementById("a2"),
  a3: document.getElementById("a3"),
  a4: document.getElementById("a4"),
  a5: document.getElementById("a5"),
  a6: document.getElementById("a6"),
  a7: document.getElementById("a7"),
};

};

function set(node, text, isHTML=false){
  if(!node) return; 
  if(isHTML) node.innerHTML = text;
  else node.textContent = text;
}

function buildLanguageMenu(sel){
  sel.innerHTML = "";
  Object.entries(translations).forEach(([code, t])=>{
    const opt = document.createElement("option");
    opt.value = code;
    opt.textContent = t.label || code.toUpperCase();
    sel.appendChild(opt);
  });
}

function render(lang){
  const t = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir || "ltr";

  set(els.hHero,   t.titles.hero);
  set(els.tHero,   t.titles.hero);
  set(els.pStory,  t.story);

  set(els.tOrganic, t.titles.organic);
  set(els.pOrganic, t.organic);

  set(els.tHarvest, t.titles.harvest);
  set(els.pHarvest, t.harvest);

  set(els.tAwards,  t.titles.awards);
  set(els.pAwards,  t.awards);

  set(els.tSust,    t.titles.sustainability);
  set(els.pSust,    t.sustainability);

  set(els.tVision,  t.titles.vision);
  set(els.pVision,  t.vision);
// Astuce section
if (els.tAstuce) els.tAstuce.textContent = t.titles?.astuce || "Bacchavaga’s Expert Advice – Choose Exceptional Olive Oil";
const tips = t.astuce || [];
[els.a1, els.a2, els.a3, els.a4, els.a5, els.a6, els.a7].forEach((el, i) => {
  if (el) el.textContent = tips[i] || "";
});

  const contactHTML = (t.contact || "info@bacchavaga.de")
    .replace("info@bacchavaga.de", '<a href="mailto:info@bacchavaga.de">info@bacchavaga.de</a>');
  set(els.tContact, t.titles.contact);
  set(els.pContact, contactHTML, true);

  try{ localStorage.setItem("lang", lang); }catch(e){}
}

(function init(){
  const sel = $("languageSwitcher");
  if(!sel){ console.error("languageSwitcher not found"); return; }
  buildLanguageMenu(sel);
  const saved = (()=>{ try{return localStorage.getItem("lang");}catch(e){return null;} })();
  render(saved || "en");
  sel.value = saved || "en";
  sel.addEventListener("change", e => render(e.target.value));
})();
