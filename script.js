/* ---------- LANGUAGE META (flags + names) ---------- */
const LANGS = {
  en: { flag:"🇬🇧", name:"English",  dir:"ltr" },
  de: { flag:"🇩🇪", name:"Deutsch",  dir:"ltr" },
  fr: { flag:"🇫🇷", name:"Français", dir:"ltr" },
  it: { flag:"🇮🇹", name:"Italiano", dir:"ltr" },
  es: { flag:"🇪🇸", name:"Español",  dir:"ltr" },
  tr: { flag:"🇹🇷", name:"Türkçe",   dir:"ltr" },
  nl: { flag:"🇳🇱", name:"Nederlands", dir:"ltr" },
  pl: { flag:"🇵🇱", name:"Polski",   dir:"ltr" },
  ru: { flag:"🇷🇺", name:"Русский",  dir:"ltr" },
  ar: { flag:"🇹🇳", name:"العربية",  dir:"rtl" }, // Tunisia flag for context
};

/* ---------- TRANSLATIONS (copy trimmed where long) ---------- */
const translations = {
  en:{ label:"EN", dir:"ltr",
    titles:{ hero:"Premium Organic Olive Oil from Tunisia – The Heritage of Vaga",
      organic:"Organic Olive Trees", harvest:"Traditional Harvest",
      awards:"Awards & Recognition", sustainability:"Sustainability",
      vision:"Our Vision", contact:"Contact",
      astuce:"Bacchavaga’s Expert Advice – Choose Exceptional Olive Oil" },
    story:`For centuries, our family in Béja (the ancient city of Vaga) has cultivated olive trees on the rich Mediterranean soil of Tunisia. Passed down from father to son, our heritage is rooted in traditional farming – where patience, respect for nature, and knowledge of the land guide every step. Today, Bacchavaga carries this legacy forward, combining ancestral wisdom with modern bottling to bring you authentic olive oil that speaks of history, purity, and excellence.`,
    organic:`Tunisia is home to some of the world’s oldest organic olive trees, many of which still grow naturally without chemicals or artificial irrigation. Our groves are part of this unique ecosystem – producing olives rich in flavor and nutrients. Each drop of Bacchavaga olive oil reflects this authenticity: certified organic, pure, and cultivated with care.`,
    harvest:`Our olives are harvested by hand, using traditional methods passed down through generations. Farmers – including many women of our community – carefully pick each olive to preserve its integrity. Within hours, the olives are cold-pressed, ensuring the highest quality and freshness in every bottle.`,
    awards:`Tunisian olive oil is celebrated worldwide and has received numerous international awards in New York, London, Tokyo, and beyond. Bacchavaga is proud to be part of this story – representing Tunisia’s excellence in taste, quality, and tradition.`,
    sustainability:`We are committed to a sustainable future: protecting our soil, preserving water, and supporting the local farming community. Every bottle of Bacchavaga contributes to this mission – keeping traditions alive while ensuring future generations can continue to enjoy Tunisia’s olive heritage.`,
    vision:`Bacchavaga is more than olive oil – it is a story of family, heritage, and pride. From the ancient groves of Vaga to your table, we invite you to share in a journey that has been nurtured for centuries.`,
    contact:`For inquiries: info@bacchavaga.de`,
    astuce:[
      "Always choose extra virgin: cold-pressed, chemical-free; highest in natural polyphenols.",
      "Prefer an opaque bottle: light degrades flavour and nutrients; dark glass or tin protects your oil.",
      "Check the harvest date: oil doesn’t age like wine; enjoy within a year, and within 3–4 months after opening.",
      "Trust certified origin & traceability: PDO/PGI or clearly stated single origin.",
      "Look for low acidity: < 0.8% (top oils ≈ 0.3%) — a sign of careful picking and fast cold-pressing.",
      "Think polyphenols & health: fresh extra virgin supports heart health and reduces oxidative stress.",
      "Avoid blends: single-origin preserves the grove’s character — Bacchavaga is never blended."
    ]
  },

  de:{ label:"DE", dir:"ltr",
    titles:{ hero:"Premium Bio-Olivenöl aus Tunesien – Das Erbe von Vaga",
      organic:"Organische Olivenbäume", harvest:"Traditionelle Ernte",
      awards:"Auszeichnungen & Anerkennung", sustainability:"Nachhaltigkeit",
      vision:"Unsere Vision", contact:"Kontakt",
      astuce:"Bacchavagas Profi-Tipp – So wählen Sie ein herausragendes Olivenöl" },
    story:`Seit Jahrhunderten bewirtschaftet unsere Familie in Béja (der antiken Stadt Vaga)…`,
    organic:`Tunesien ist Heimat einiger der ältesten Bio-Olivenbäume der Welt…`,
    harvest:`Unsere Oliven werden von Hand geerntet…`,
    awards:`Tunesisches Olivenöl wird weltweit gefeiert…`,
    sustainability:`Wir setzen uns für eine nachhaltige Zukunft ein…`,
    vision:`Bacchavaga ist mehr als Olivenöl…`,
    contact:`Anfragen: info@bacchavaga.de`,
    astuce:[
      "Immer Extra Nativ wählen: kaltgepresst, ohne Chemie; reich an Polyphenolen.",
      "Dunkle, opake Flasche bevorzugen – Licht schadet.",
      "Erntedatum prüfen; am besten innerhalb eines Jahres genießen.",
      "Zertifizierte Herkunft (g.U./g.g.A.) oder Single-Origin.",
      "Niedrige Säure < 0,8 % (Top-Öle ~0,3 %).",
      "An Polyphenole & Gesundheit denken.",
      "Mischungen meiden; Single-Origin bewahrt den Charakter."
    ]
  },

  fr:{ label:"FR", dir:"ltr",
    titles:{ hero:"Huile d’olive biologique premium de Tunisie – L’héritage de Vaga",
      organic:"Oliviers biologiques", harvest:"Récolte traditionnelle",
      awards:"Prix & Reconnaissance", sustainability:"Durabilité",
      vision:"Notre vision", contact:"Contact",
      astuce:"L’Astuce d’Expert Bacchavaga – Bien choisir son huile d’olive" },
    story:`Depuis des siècles, notre famille à Béja…`,
    organic:`La Tunisie abrite certains des plus anciens oliviers biologiques…`,
    harvest:`Nos olives sont récoltées à la main…`,
    awards:`L’huile d’olive tunisienne est célébrée…`,
    sustainability:`Nous œuvrons pour un avenir durable…`,
    vision:`Bacchavaga est plus qu’une huile d’olive…`,
    contact:`Demandes : info@bacchavaga.de`,
    astuce:[
      "Choisir l’extra-vierge, pressée à froid.",
      "Privilégier une bouteille opaque.",
      "Vérifier la date de récolte.",
      "Origine certifiée (AOP/IGP) ou unique.",
      "Acidité < 0,8 % (souvent ~0,3 %).",
      "Polyphénols & santé : cœur, antioxydants.",
      "Éviter les mélanges : single-origin."
    ]
  },

  it:{ label:"IT", dir:"ltr",
    titles:{ hero:"Olio extravergine biologico dalla Tunisia – L’eredità di Vaga",
      organic:"Ulivi biologici", harvest:"Raccolta tradizionale",
      awards:"Premi & Riconoscimenti", sustainability:"Sostenibilità",
      vision:"La nostra visione", contact:"Contatti",
      astuce:"Consiglio d’Esperto Bacchavaga – Scegliere un olio eccezionale" },
    story:`Da secoli la nostra famiglia a Béja…`,
    organic:`La Tunisia ospita alcuni dei più antichi ulivi biologici…`,
    harvest:`Le nostre olive vengono raccolte a mano…`,
    awards:`L’olio tunisino è celebrato in tutto il mondo…`,
    sustainability:`Ci impegniamo per un futuro sostenibile…`,
    vision:`Bacchavaga è più di un olio…`,
    contact:`Richieste: info@bacchavaga.de`,
    astuce:[
      "Scegli sempre l’extravergine a freddo.",
      "Bottiglia opaca: vetro scuro o latta.",
      "Controlla la data di raccolta.",
      "Origine certificata DOP/IGP o unica.",
      "Acidità < 0,8% (top ~0,3%).",
      "Polifenoli & salute.",
      "Evita i blend: single-origin."
    ]
  },

  es:{ label:"ES", dir:"ltr",
    titles:{ hero:"Aceite de oliva orgánico premium de Túnez – El legado de Vaga",
      organic:"Olivos orgánicos", harvest:"Cosecha tradicional",
      awards:"Premios y Reconocimientos", sustainability:"Sostenibilidad",
      vision:"Nuestra visión", contact:"Contacto",
      astuce:"Consejo Experto Bacchavaga – Elige un aceite excepcional" },
    story:`Durante siglos, nuestra familia en Béja…`,
    organic:`Túnez alberga algunos de los olivos orgánicos más antiguos…`,
    harvest:`Nuestras aceitunas se recogen a mano…`,
    awards:`El aceite tunecino es reconocido en todo el mundo…`,
    sustainability:`Compromiso con un futuro sostenible…`,
    vision:`Bacchavaga es más que aceite de oliva…`,
    contact:`Consultas: info@bacchavaga.de`,
    astuce:[
      "Elige siempre virgen extra en frío.",
      "Prefiere botella opaca.",
      "Comprueba la fecha de cosecha.",
      "Origen certificado (DOP/IGP) o único.",
      "Acidez < 0,8% (mejores ~0,3%).",
      "Polifenoles & salud.",
      "Evita mezclas: single-origin."
    ]
  },

  tr:{ label:"TR", dir:"ltr",
    titles:{ hero:"Tunus’tan Premium Organik Zeytinyağı – Vaga Mirası",
      organic:"Organik Zeytin Ağaçları", harvest:"Geleneksel Hasat",
      awards:"Ödüller ve Tanınırlık", sustainability:"Sürdürülebilirlik",
      vision:"Vizyonumuz", contact:"İletişim",
      astuce:"Bacchavaga Uzman Tavsiyesi – Olağanüstü zeytinyağı nasıl seçilir" },
    story:`Yüzyıllardır ailemiz, Béja’da zeytin yetiştiriyor…`,
    organic:`Tunus, dünyanın en eski organik zeytin ağaçlarına ev sahipliği yapar…`,
    harvest:`Zeytinlerimiz geleneksel yöntemlerle elle toplanır…`,
    awards:`Tunus zeytinyağı dünya çapında takdir görür…`,
    sustainability:`Sürdürülebilir bir gelecek için çalışıyoruz…`,
    vision:`Bacchavaga sadece bir zeytinyağı değil…`,
    contact:`İletişim: info@bacchavaga.de`,
    astuce:[
      "Daima sızma (soğuk sıkım) seçin.",
      "Opak/koyu şişe tercih edin.",
      "Hasat tarihini kontrol edin.",
      "Sertifikalı tek menşei veya PDO/PGI.",
      "Düşük asit < %0,8 (üst ~%0,3).",
      "Polifenoller & sağlık.",
      "Karışımlardan kaçının."
    ]
  },

  nl:{ label:"NL", dir:"ltr",
    titles:{ hero:"Premium biologische olijfolie uit Tunesië – De erfenis van Vaga",
      organic:"Biologische olijfbomen", harvest:"Traditionele oogst",
      awards:"Prijzen & Erkenning", sustainability:"Duurzaamheid",
      vision:"Onze visie", contact:"Contact",
      astuce:"Bacchavaga’s Expertadvies – Zo kies je een uitzonderlijke olijfolie" },
    story:`Al eeuwenlang cultiveert onze familie in Béja…`,
    organic:`Tunesië herbergt enkele van ’s werelds oudste biologische olijfbomen…`,
    harvest:`Onze olijven worden met de hand geplukt…`,
    awards:`Tunesische olijfolie wordt wereldwijd geprezen…`,
    sustainability:`Wij zetten ons in voor een duurzame toekomst…`,
    vision:`Bacchavaga is meer dan olijfolie…`,
    contact:`Vragen: info@bacchavaga.de`,
    astuce:[
      "Kies altijd extra vierge (koud geperst).",
      "Ondoorzichtige fles (donker glas of blik).",
      "Controleer de oogstdatum.",
      "Gecertificeerde herkomst of single-origin.",
      "Lage zuurgraad < 0,8% (top ~0,3%).",
      "Polyfenolen & gezondheid.",
      "Vermijd blends."
    ]
  },

  pl:{ label:"PL", dir:"ltr",
    titles:{ hero:"Organiczna oliwa premium z Tunezji – Dziedzictwo Vaga",
      organic:"Organiczne drzewa oliwne", harvest:"Tradycyjne zbiory",
      awards:"Nagrody i wyróżnienia", sustainability:"Zrównoważony rozwój",
      vision:"Nasza wizja", contact:"Kontakt",
      astuce:"Porada Ekspercka Bacchavaga – Jak wybrać wyjątkową oliwę" },
    story:`Od wieków nasza rodzina w Béja…`,
    organic:`Tunezja jest domem bardzo starych drzew oliwnych…`,
    harvest:`Oliwki zbieramy ręcznie…`,
    awards:`Tunezyjska oliwa zdobywa liczne nagrody…`,
    sustainability:`Dbamy o zrównoważoną przyszłość…`,
    vision:`Bacchavaga to coś więcej niż oliwa…`,
    contact:`Kontakt: info@bacchavaga.de`,
    astuce:[
      "Zawsze extra virgin (na zimno).",
      "Butelka nieprzezroczysta.",
      "Sprawdź datę zbiorów.",
      "Certyfikowane pochodzenie / jedno źródło.",
      "Kwasowość < 0,8% (top ~0,3%).",
      "Polifenole & zdrowie.",
      "Unikaj mieszanek."
    ]
  },

  ru:{ label:"RU", dir:"ltr",
    titles:{ hero:"Премиальное органическое оливковое масло из Туниса — Наследие Ваґи",
      organic:"Органические оливковые деревья", harvest:"Традиционный сбор",
      awards:"Награды и признание", sustainability:"Устойчивое развитие",
      vision:"Наша философия", contact:"Контакты",
      astuce:"Совет экспертов Bacchavaga — как выбрать отличное масло" },
    story:`На протяжении столетий наша семья в Бедже…`,
    organic:`Тунис — родина древних органических олив…`,
    harvest:`Сбор исключительно вручную…`,
    awards:`Многочисленные международные награды…`,
    sustainability:`Мы бережём почву и воду…`,
    vision:`Bacchavaga — больше, чем масло…`,
    contact:`Запросы: info@bacchavaga.de`,
    astuce:[
      "Выбирайте extra virgin (холодный отжим).",
      "Непрозрачная бутылка.",
      "Проверяйте дату урожая.",
      "Сертифицированное происхождение / single-origin.",
      "Кислотность < 0,8% (лучшие ~0,3%).",
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
    story:`لِقرونٍ طويلة دَأبت عائلتنا في باجة…`,
    organic:`تحتضن تونس بعضًا من أقدم أشجار الزيتون العضوية…`,
    harvest:`نَجني الزيتون يدويًا وفق أساليب متوارثة…`,
    awards:`يحظى الزيت التونسي بتقدير عالمي…`,
    sustainability:`نلتزم بمستقبل مستدام…`,
    vision:`Bacchavaga ليست مجرد زيت…`,
    contact:`للاستفسار: info@bacchavaga.de`,
    astuce:[
      "اختر دائمًا البِكْر الممتاز (عصر بارد).",
      "عبوة معتمة تحمي الزيت من الضوء.",
      "تحقّق من تاريخ الحصاد.",
      "منشأ مُعتمد أو مصدر واحد واضح.",
      "حموضة أقل من ‎0.8% (الأفضل ~0.3%).",
      "البوليفينولات & الصحة.",
      "تجنّب الخلطات."
    ]
  },
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

function buildMenu(){
  els.sel.innerHTML = "";
  Object.keys(LANGS).forEach(code=>{
    const {flag, name} = LANGS[code];
    const opt = document.createElement("option");
    opt.value = code;
    opt.textContent = `${flag} ${name}`;
    els.sel.appendChild(opt);
  });
}

/* ---------- RENDER ---------- */
function render(lang){
  const t = translations[lang] || translations.en;
  const meta = LANGS[lang] || LANGS.en;

  document.documentElement.lang = lang;
  document.documentElement.dir  = t.dir || meta.dir || "ltr";

  setText(els.tHero, t.titles.hero);      setText(els.pStory, t.story);
  setText(els.tOrganic, t.titles.organic);setText(els.pOrganic, t.organic);
  setText(els.tHarvest, t.titles.harvest);setText(els.pHarvest, t.harvest);
  setText(els.tAwards, t.titles.awards);  setText(els.pAwards, t.awards);
  setText(els.tSust, t.titles.sustainability); setText(els.pSust, t.sustainability);
  setText(els.tVision, t.titles.vision);  setText(els.pVision, t.vision);

  // Advice / Astuce
  if (els.tAstuce) setText(els.tAstuce, t.titles.astuce || "");
  const tips = t.astuce || [];
  [els.a1, els.a2, els.a3, els.a4, els.a5, els.a6, els.a7].forEach((el, i)=> {
    if (el) setText(el, tips[i] || "");
  });

  // Contact with clickable email
  const email = "info@bacchavaga.de";
  setHTML(els.pContact, `For inquiries: <a href="mailto:${email}">${email}</a>`);
}

/* ---------- INIT ---------- */
(function(){
  if(!els.sel) return;
  buildMenu();

  // Preferred language (saved or browser)
  let saved = null;
  try{ saved = localStorage.getItem("lang"); }catch(e){}
  const browser = (navigator.language || "en").slice(0,2).toLowerCase();
  const start = (saved && LANGS[saved]) ? saved : (LANGS[browser] ? browser : "en");

  els.sel.value = start;
  render(start);

  // Translate the label “Language”
  const LABELS = { en:"Language", de:"Sprache", fr:"Langue", it:"Lingua", es:"Idioma", tr:"Dil", nl:"Taal", pl:"Język", ru:"Язык", ar:"اللغة" };
  if(els.label) els.label.textContent = LABELS[start] || "Language";

  els.sel.addEventListener("change", e=>{
    const lang = e.target.value;
    try{ localStorage.setItem("lang", lang); }catch(e){}
    if(els.label) els.label.textContent = LABELS[lang] || "Language";
    render(lang);
  });
})();
