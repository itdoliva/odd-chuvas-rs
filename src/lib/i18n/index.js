import { browser } from '$app/environment'
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

const defaultLocale = 'pt'

register('pt', () => import('./pt.json'));

init({
  fallbackLocale: defaultLocale,
  initialLocale: browser ? window.navigator.language : defaultLocale,
});