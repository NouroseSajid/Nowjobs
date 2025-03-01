import i18next from 'i18next';

const supportedLanguages = ['en', 'fr', 'nl'];
const defaultLanguage = 'en';

function getBrowserLanguage() {
  const language = navigator.language || navigator.userLanguage;
  return language.split('-')[0];
}

function loadLanguage(language) {
  if (!supportedLanguages.includes(language)) {
    language = defaultLanguage;
  }
  return fetch(`/src/i18n/locales/${language}.json`)
    .then(response => response.json())
    .catch(() => fetch(`/src/i18n/locales/${defaultLanguage}.json`).then(response => response.json()));
}

function setLanguage(language) {
  loadLanguage(language).then(translations => {
    i18next.init({
      lng: language,
      resources: {
        [language]: {
          translation: translations
        }
      }
    });
    document.documentElement.lang = language;
    // Apply translations to your app
    // For example:
    // document.getElementById('greeting').innerText = i18next.t('greeting');
  });
}

// Auto-detect language on page load
document.addEventListener('DOMContentLoaded', () => {
  const browserLanguage = getBrowserLanguage();
  setLanguage(browserLanguage);
});

// Example of changing language manually
// setLanguage('fr');
