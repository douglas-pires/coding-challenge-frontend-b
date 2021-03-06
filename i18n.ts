import NextI18Next from 'next-i18next';
import nextConfig from 'next/config';
import path from 'path';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  localePath: path.resolve('./public/locales'),
  serverLanguageDetection: false,
  otherLanguages: ['fr'],
  localeSubpaths: nextConfig()?.publicRuntimeConfig?.localeSubpaths || {
    fr: 'fr',
  },
});

export const {
  appWithTranslation,
  useTranslation,
  Link,
  Router,
  i18n,
  withTranslation,
} = NextI18NextInstance;

export default NextI18NextInstance;
