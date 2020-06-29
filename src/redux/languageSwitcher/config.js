import language from '@sirius/config/language.config';

const config = {
    defaultLanguage: language,
    options: [
        {
            languageId: 'spanish',
            locale: 'es',
            text: 'Spanish'
        },
    ],
};

export function getCurrentLanguage(lang) {
    let selectedLanguage = config.options[0];
    config.options.forEach(language => {
        if (language.languageId === lang) {
            selectedLanguage = language;
        }
    });

    return selectedLanguage;
}

export default config;