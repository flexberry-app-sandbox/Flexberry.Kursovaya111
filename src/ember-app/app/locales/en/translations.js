import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursovaya11ДирОтдПоРабСКлLForm from './forms/i-i-s-kursovaya11-дир-отд-по-раб-с-кл-l';
import IISKursovaya11ЗаключДоговораLForm from './forms/i-i-s-kursovaya11-заключ-договора-l';
import IISKursovaya11КлиентLForm from './forms/i-i-s-kursovaya11-клиент-l';
import IISKursovaya11РасторжДоговораLForm from './forms/i-i-s-kursovaya11-расторж-договора-l';
import IISKursovaya11РасчетОстВремLForm from './forms/i-i-s-kursovaya11-расчет-ост-врем-l';
import IISKursovaya11ДирОтдПоРабСКлEForm from './forms/i-i-s-kursovaya11-дир-отд-по-раб-с-кл-e';
import IISKursovaya11ЗаключДоговораEForm from './forms/i-i-s-kursovaya11-заключ-договора-e';
import IISKursovaya11КлиентEForm from './forms/i-i-s-kursovaya11-клиент-e';
import IISKursovaya11РасторжДоговораEForm from './forms/i-i-s-kursovaya11-расторж-договора-e';
import IISKursovaya11РасчетОстВремEForm from './forms/i-i-s-kursovaya11-расчет-ост-врем-e';
import IISKursovaya11ДирОтдПоРабСКлModel from './models/i-i-s-kursovaya11-дир-отд-по-раб-с-кл';
import IISKursovaya11ЗаключДоговораModel from './models/i-i-s-kursovaya11-заключ-договора';
import IISKursovaya11КлиентModel from './models/i-i-s-kursovaya11-клиент';
import IISKursovaya11ОказКонсультModel from './models/i-i-s-kursovaya11-оказ-консульт';
import IISKursovaya11РасторжДоговораModel from './models/i-i-s-kursovaya11-расторж-договора';
import IISKursovaya11РасчетОстВремModel from './models/i-i-s-kursovaya11-расчет-ост-врем';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya11-дир-отд-по-раб-с-кл': IISKursovaya11ДирОтдПоРабСКлModel,
    'i-i-s-kursovaya11-заключ-договора': IISKursovaya11ЗаключДоговораModel,
    'i-i-s-kursovaya11-клиент': IISKursovaya11КлиентModel,
    'i-i-s-kursovaya11-оказ-консульт': IISKursovaya11ОказКонсультModel,
    'i-i-s-kursovaya11-расторж-договора': IISKursovaya11РасторжДоговораModel,
    'i-i-s-kursovaya11-расчет-ост-врем': IISKursovaya11РасчетОстВремModel
  },

  'application-name': 'Kursovaya11',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya11',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya11',
          title: 'Kursovaya11'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        kursovaya11: {
          caption: 'Kursovaya11',
          title: 'Kursovaya11',
          'i-i-s-kursovaya11-заключ-договора-l': {
            caption: 'Заключ договора',
            title: ''
          },
          'i-i-s-kursovaya11-дир-отд-по-раб-с-кл-l': {
            caption: 'Дир отд по раб с кл',
            title: ''
          },
          'i-i-s-kursovaya11-расчет-ост-врем-l': {
            caption: 'Расчет ост врем',
            title: ''
          },
          'i-i-s-kursovaya11-расторж-договора-l': {
            caption: 'Расторж договора',
            title: ''
          },
          'i-i-s-kursovaya11-клиент-l': {
            caption: 'Клиент',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursovaya11-дир-отд-по-раб-с-кл-l': IISKursovaya11ДирОтдПоРабСКлLForm,
    'i-i-s-kursovaya11-заключ-договора-l': IISKursovaya11ЗаключДоговораLForm,
    'i-i-s-kursovaya11-клиент-l': IISKursovaya11КлиентLForm,
    'i-i-s-kursovaya11-расторж-договора-l': IISKursovaya11РасторжДоговораLForm,
    'i-i-s-kursovaya11-расчет-ост-врем-l': IISKursovaya11РасчетОстВремLForm,
    'i-i-s-kursovaya11-дир-отд-по-раб-с-кл-e': IISKursovaya11ДирОтдПоРабСКлEForm,
    'i-i-s-kursovaya11-заключ-договора-e': IISKursovaya11ЗаключДоговораEForm,
    'i-i-s-kursovaya11-клиент-e': IISKursovaya11КлиентEForm,
    'i-i-s-kursovaya11-расторж-договора-e': IISKursovaya11РасторжДоговораEForm,
    'i-i-s-kursovaya11-расчет-ост-врем-e': IISKursovaya11РасчетОстВремEForm
  },

});

export default translations;
