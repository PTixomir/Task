import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translations: {
            'This field is required': 'This field is required',
            'Account information': 'Account information',
            'Remitter': 'Remitter',
            'Name,surname': 'Name,surname',
            'Company name': 'Company name',
            'Name,surname / Company name': 'Name,surname / Company name',
            'Personal ID number': 'Personal ID number',
            'Personal ID number / Registration No': 'Personal ID number/ Registration No',
            'Account No': 'Account No',
            'Beneficiary': 'Beneficiary',
            'Registration No': 'Registration No',
            'Reg. No': 'Reg. No',
            'Residence country': 'Residence country',
            'Beneficiary bank': 'Beneficiary bank',
            'Bank code': 'Bank code',
            'Payment information': 'Payment information',
            'Amount in figures and currency': 'Amount in figures and currency',
            'Bank fee': 'Bank fee',
            'Amount in words': 'Amount in words',
            'Payment type': 'Payment type',
            'Exchange rate': 'Exchange rate',
            'Value date': 'Value date',
            'Code of external payment': 'Code of external payment',
            'Payment details': 'Payment details',
        }
      },
      lv: {
        translations: {
            'This field is required': 'Šis lauks ir obligāts',
            'Account information': 'Kontu informācija',
            'Remitter': 'Maksātājs',
            'Name,surname': 'Vārds, uzvārds',
            'Company name': 'Uzņēmuma nosaukums',
            'Name,surname / Company name': 'Vārds, uzvārds / Uzņēmuma nosaukums',
            'Personal ID number': 'Personas kods',
            'Account No': 'Konta Nr.',
            'Personal ID number / Registration No': 'Personas kods / Reģistrācijas Nr.',
            'Beneficiary': 'Saņēmējs',
            'Registration No': 'Registration No',
            'Reg. No': 'Reģ. Nr.',
            'Residence country': 'Rezidences valsts',
            'Beneficiary bank': 'Saņēmējbanka',
            'Bank code': 'Bankas kods',
            'Payment information': 'Maksājuma informācija',
            'Amount in figures and currency': 'Summa cipariem un valūta',
            'Bank fee': 'Bankas komisija',
            'Amount in words': 'Summa vārdiem',
            'Payment type': 'Maksājuma veids',
            'Exchange rate': 'Maiņas kurss',
            'Value date': 'Valutēšanas datums',
            'Code of external payment': 'Ārējā maksājuma kods',
            'Payment details': 'Maksājuma mērķis',
        }
      },
      ru: {
        translations: {
            'This field is required': 'Это поле обязательно',
            'Account information': 'Информация о счёте',
            'Remitter': 'Плательщик',
            'Name,surname': 'Имя, Фамилия',
            'Company name': 'Название фирмы',
            'Name,surname / Company name': 'Имя, Фамилия / Название фирмы',
            'Personal ID number': 'Персональный код',
            'Account No': 'No счета',
            'Personal ID number / Registration No': 'Персональный код / Регистрационный No',
            'Beneficiary': 'Получатель',
            'Registration No': 'Регистрационный No',
            'Reg. No': 'Регистрационный No',
            'Residence country': 'Страна резиденции',
            'Beneficiary bank': 'Банк получателя',
            'Bank code': 'Банковский код',
            'Payment information': 'Информация о платеже',
            'Amount in figures and currency': 'Сумма цифрами и валюта',
            'Bank fee': 'Комиссия банка',
            'Amount in words': 'Сумма прописью',
            'Payment type': 'Вид платежа',
            'Exchange rate': 'Обменный курс',
            'Value date': 'Дата валютирования',
            'Code of external payment': 'Код зарубежного платежа',
            'Payment details': 'Назначение платежа',
        }
      }
    },
    fallbackLng: 'en',
    debug: true,

    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false,

    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },

    react: {
      wait: true
    }
  });

export default i18n;