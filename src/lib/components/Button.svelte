<script lang="ts" context="module">
    let index = 0;
</script>

<script lang="ts">
    export let text: string;
    export let funUp: string | null = null;
    export let funDown: string | null = null;
    export let style: string | null = null;
    export let buttonStyle: string | null = null;

    let id_idx = 'calcButton_' + index;
    index += 1;
</script>

<div class="wrapper" style={style ?? ''}>
    <label for={id_idx} class="smallButton up">{funUp ?? ''}</label>
    <button class="internalButton" style={buttonStyle} id={id_idx} on:click>
        <div class="buttonText">{text}</div>
        <div class="smallButton down">{funDown ?? ''}</div>
    </button>
</div>

<style lang="scss">
    @use '../globals/colors.scss';
    @import '@fontsource-variable/inter';

    $buttonBorder: rgba(20, 19, 17, 0.37);
    $buttonShadow: rgba(65, 65, 65, 0.37);
    $buttonColor: rgb(87, 87, 87);
    $buttonHover: rgb(128, 128, 128);
    
    .wrapper {
        display: flex;
        height: 70px;
        min-width: 67px;
        flex-direction: column;
        align-items: center;
        font-family: 'Inter Variable';
        border: 0;
        padding: 0;

        &:hover {
            background-color: transparent;
        }

        &:active {
            background-color: transparent;
        }
    }

    .internalButton {
        padding: 0;
        display: flex;
        height: 50px;
        max-height: 50px;
        flex-direction: column;
        align-self: stretch;
        gap: 5px;
        overflow: hidden;

        border: 0;
        border-radius: 5px;
        background-color: $buttonColor;
        box-shadow: 0px 4px 4px 0px $buttonShadow, inset 0px -18px $buttonBorder;

        &:hover {
            background-color: $buttonHover;
        }

        &:active {
            transform: translate(0px, 10px);
            height: 40px;
            background: #8b8b8b;
            box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25), inset 0px -8px $buttonBorder;
        }
    }

    .buttonText {
        color: white;
        font-size: 20px;
        text-transform: uppercase;
        margin-top: 6px;
    }

    .smallButton {
        text-align: center;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: lowercase;

        &.up {
            color: colors.$upColor;
            height: 18px;
            display: flex;
            align-items: center;
        }

        &.down {
            color: colors.$downColor;
        }
    }
</style>
