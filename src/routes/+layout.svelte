<script lang="ts">
    import './styles.scss';
    import { page } from '$app/stores';
    import { snackbarMessage } from './snackbarMessage';

    let showSnackbar = false;
    let snackbarMessageTxt: string[] = []

    function setShowSnackbar() {
        showSnackbar = true
    }    

    function clearSnackBar() {
        snackbarMessageTxt = []
        showSnackbar = false
    }

    snackbarMessage.subscribe((value) => {
        if(value === "") {
            clearSnackBar()    
        } else {
            snackbarMessageTxt.push(value)
            snackbarMessageTxt = snackbarMessageTxt
            setShowSnackbar()
        }
    })

</script>

<div>
    <nav>
        <div>
            {#if $page.url.pathname === "/"}
                <a class="up" href="/manual">How to use</a>
            {:else}
                <a class="up" href="/">Go Back</a>
            {/if}
            <a class="up" href="https://en.wikipedia.org/wiki/Reverse_Polish_notation">Page on Wikipedia</a>
        </div>
        <div>
            <a class="down" href="https://github.com/Feneco/Feneco.github.io">Git</a>
        </div>
    </nav>
    {#if showSnackbar}
        <div id="snackbar">
            <div>
            {#each snackbarMessageTxt as message}
                <div>{message}</div>
            {/each}
            </div>
            <button on:click={() => {clearSnackBar() }}>X</button>
        </div>
    {/if}
    <slot/>
</div>

<style lang="scss">
    @use '../lib/globals/colors.scss';

    nav {
        background-color: colors.$grey1;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding: 10px;
        box-shadow: 0px 5px 5px gray;

        display: flex;
        justify-content: space-between;
    }

    a {
        color: white;
        padding: 10px;
        font-family: 'Inter Variable';
        font-weight: 500;
        display: inline-block;
        box-shadow: 0px 5px 5px gray;
        
        &.up {
            background-color: colors.$upColor;
        }
        
        &.down {
            background-color: colors.$downColor;
        }
    }

    #snackbar {
        background-color: #A51253;
        position: absolute;
        bottom: 20px;
        left: 20px;
        min-width: 200px;
        padding: 14px;
        
        display: flex;
        justify-content: space-between;
        gap: 20px;

        @extend %paper
    }
</style>
