(function () {
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];

  const langButton = $("#langCurrent");
  const langList   = $("#langList");
  const langFlagEl = $("#langFlag");
  const langNameEl = $("#langName");

  const NAMES = {
    en:"English", de:"Deutsch", fr:"Français", it:"Italiano", es:"Español",
    tr:"Türkçe", nl:"Nederlands", pl:"Polski", ru:"Русский", ar:"العربية"
  };
  const FLAGS = {
    en:"🇬🇧", de:"🇩🇪", fr:"🇫🇷", it:"🇮🇹", es:"🇪🇸",
    tr:"🇹🇷", nl:"🇳🇱", pl:"🇵🇱", ru:"🇷🇺", ar:"🇸🇦"
  };

  const supported = Object.keys(NAMES);
  const defaultLang = (localStorage.getItem("lang") ||
    (navigator.language || "en").slice(0,2)).toLowerCase();
  const initial = supported.includes(defaultLang) ? defaultLang : "en";

  function setDir(lang){
    const dir = (lang === "ar") ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir  = dir;
  }

  function applyTranslations(lang){
    const dict = (window.TRANSLATIONS && window.TRANSLATIONS[lang]) || window.TRANSLATIONS.en;
    $$( "[data-i18n]").forEach(node=>{
      const key = node.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(dict,key)) node.textContent = dict[key];
    });
    langFlagEl.textContent = FLAGS[lang] || "🏳️";
    langNameEl.textContent = NAMES[lang] || "English";
    setDir(lang);
  }

  function setLang(lang){
    localStorage.setItem("lang", lang);
    applyTranslations(lang);
  }

  // Init
  setLang(initial);

  // Open/close dropdown
  langButton.addEventListener("click", () => {
    langList.classList.toggle("show");
    const expanded = langButton.getAttribute("aria-expanded") === "true";
    langButton.setAttribute("aria-expanded", String(!expanded));
  });

  // Choose a language
  langList.addEventListener("click", (e) => {
    const li = e.target.closest("li[data-lang]");
    if (!li) return;
    const lang = li.getAttribute("data-lang");
    setLang(lang);
    langList.classList.remove("show");
    langButton.setAttribute("aria-expanded","false");
  });

  // Close on outside click / ESC
  document.addEventListener("click", (e)=>{
    if (!e.target.closest(".lang")) {
      langList.classList.remove("show");
      langButton.setAttribute("aria-expanded","false");
    }
  });
  document.addEventListener("keydown", (e)=>{
    if (e.key === "Escape") {
      langList.classList.remove("show");
      langButton.setAttribute("aria-expanded","false");
    }
  });
})();
