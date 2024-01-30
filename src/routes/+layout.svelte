<script lang="ts">
    import './+layout' 
    import { locale } from 'svelte-i18n'
    function changeLocale(a:string)
    {
        locale.set(a);
        //window.location.reload();
        console.log("locale set to ${a}")
    }

</script>
<slot></slot>
<nav>
    <button on:click={()=>changeLocale("en")}>English</button>
    <button on:click={()=>changeLocale("es")}>Español</button>
</nav>