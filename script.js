const translations = {
  en: {
    title: "Bacchavaga – The Heritage of Olive Oil",
    story: "For generations, our family has cultivated olive trees in Béja, Tunisia, using traditional hand-harvesting methods. Bacchavaga celebrates this heritage by bringing you organic extra virgin olive oil, pressed from the finest olives. Every drop reflects history, tradition, and purity.",
    heritage: "A family tradition: from grandfather to father to son, continuing the legacy of pure olive oil.",
    awards: "Tunisian olive oil is recognized globally, winning awards in Japan, London, and Los Angeles."
  },
  de: {
    title: "Bacchavaga – Das Erbe des Olivenöls",
    story: "Seit Generationen pflegt unsere Familie Olivenbäume in Béja, Tunesien, mit traditionellen Erntemethoden von Hand. Bacchavaga feiert dieses Erbe mit biologischem nativem Olivenöl extra.",
    heritage: "Eine Familientradition: vom Großvater zum Vater zum Sohn – das Erbe des reinen Olivenöls lebt weiter.",
    awards: "Tunesisches Olivenöl wird weltweit anerkannt und hat Preise in Japan, London und Los Angeles gewonnen."
  },
  fr: {
    title: "Bacchavaga – L'Héritage de l'Huile d'Olive",
    story: "Depuis des générations, notre famille cultive des oliviers à Béja, en Tunisie, selon des méthodes traditionnelles de récolte à la main.",
    heritage: "Une tradition familiale : du grand-père au père puis au fils, perpétuant l’héritage de l’huile d’olive pure.",
    awards: "L'huile d'olive tunisienne est reconnue dans le monde entier et a remporté des prix à Tokyo, Londres et Los Angeles."
  },
  it: {
    title: "Bacchavaga – Il Retaggio dell'Olio d'Oliva",
    story: "Da generazioni la nostra famiglia coltiva ulivi a Béja, Tunisia, utilizzando metodi tradizionali di raccolta a mano.",
    heritage: "Una tradizione familiare: dal nonno al padre al figlio, continuando l’eredità dell’olio d’oliva puro.",
    awards: "L'olio d'oliva tunisino è riconosciuto a livello mondiale e ha vinto premi a Tokyo, Londra e Los Angeles."
  },
  es: {
    title: "Bacchavaga – La Herencia del Aceite de Oliva",
    story: "Durante generaciones, nuestra familia ha cultivado olivos en Béja, Túnez, con métodos tradicionales de cosecha manual.",
    heritage: "Una tradición familiar: del abuelo al padre al hijo, manteniendo vivo el legado del aceite de oliva puro.",
    awards: "El aceite de oliva tunecino es reconocido mundialmente y ha ganado premios en Tokio, Londres y Los Ángeles."
  },
  tr: {
    title: "Bacchavaga – Zeytinyağının Mirası",
    story: "Nesiller boyunca ailemiz, Tunus’un Béja bölgesinde zeytin ağaçlarını geleneksel el hasadı yöntemleriyle yetiştirmektedir.",
    heritage: "Bir aile geleneği: dededen babaya, babadan oğula saf zeytinyağı mirası devam ediyor.",
    awards: "Tunus zeytinyağı dünya çapında tanınmakta ve Tokyo, Londra ve Los Angeles'ta ödüller kazanmaktadır."
  },
  pl: {
    title: "Bacchavaga – Dziedzictwo Oliwy z Oliwek",
    story: "Od pokoleń nasza rodzina uprawia drzewa oliwne w Béja w Tunezji, stosując tradycyjne metody ręcznego zbioru.",
    heritage: "Rodzinna tradycja: od dziadka, przez ojca, do syna – dziedzictwo czystej oliwy trwa.",
    awards: "Tunezyjska oliwa z oliwek jest uznawana na całym świecie i zdobyła nagrody w Tokio, Londynie i Los Angeles."
  },
  ru: {
    title: "Bacchavaga – Наследие Оливкового Масла",
    story: "На протяжении поколений наша семья выращивает оливковые деревья в Бедже, Тунис, используя традиционный ручной сбор.",
    heritage: "Семейная традиция: от деда к отцу и сыну – наследие чистого оливкового масла продолжается.",
    awards: "Тунисское оливковое масло признано во всем мире, получив награды в Токио, Лондоне и Лос-Анджелесе."
  },
  ar: {
    title: "بكشافاجا – إرث زيت الزيتون",
    story: "منذ أجيال، تزرع عائلتنا أشجار الزيتون في باجة، تونس، باستخدام الطرق التقليدية للقطف اليدوي.",
    heritage: "تقليد عائلي: من الجد إلى الأب إلى الابن – استمرار إرث زيت الزيتون النقي.",
    awards: "يحظى زيت الزيتون التونسي بتقدير عالمي وفاز بجوائز في طوكيو ولندن ولوس أنجلوس."
  },
  nl: {
    title: "Bacchavaga – De Erfenis van Olijfolie",
    story: "Al generaties lang verbouwt onze familie olijfbomen in Béja, Tunesië, met traditionele handmatige oogstmethoden.",
    heritage: "Een familietraditie: van grootvader tot vader tot zoon, het erfgoed van pure olijfolie gaat verder.",
    awards: "Tunesische olijfolie wordt wereldwijd erkend en heeft prijzen gewonnen in Tokio, Londen en Los Angeles."
  },
  vla: {
    title: "Bacchavaga – De Nalatenschap van Olijfolie",
    story: "Reeds generaties lang teelt onze familie olijfbomen in Béja, Tunesië, met traditionele handmatige oogstmethoden.",
    heritage: "Een familie-erfgoed: van grootvader naar vader naar zoon – de traditie van pure olijfolie blijft bestaan.",
    awards: "Tunesische olijfolie wordt wereldwijd erkend en behaalde prijzen in Tokio, Londen en Los Angeles."
  }
};

function setLanguage(lang) {
  const content = translations[lang] || translations['en'];
  document.getElementById("title").innerText = content.title;
  document.getElementById("story").innerText = content.story;
  document.getElementById("heritage").innerText = content.heritage;
  document.getElementById("awards").innerText = content.awards;
}

document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("language-selector");
  selector.addEventListener("change", (e) => setLanguage(e.target.value));
  setLanguage("en");
});
