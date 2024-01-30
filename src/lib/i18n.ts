import {register,init} from 'svelte-i18n'
import {browser} from '$app/environment'
register('en',() => import('./en.json'));
register('es',() => import('./es.json'));
register('sv',() => import('./sv.json'));



init({
    fallbackLocale:'en',
    initialLocale: 'en',
});