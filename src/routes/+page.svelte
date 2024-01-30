


<script>
    import { _ } from "svelte-i18n"
</script>
<h1>{$_('index.test')}</h1>
<h1 id='hi'>{$_('index.welcome')}</h1>
{@html $_('index.text')}