<script lang="ts">
    export let text: string;
    export let funUp: string | null = null;
    export let funDown: string | null = null;
    export let style: string | null = null;
</script>

<div class="wrapper" style={style??""}>
    <button class="calcButton" id="calcButton" on:click>
        <div class="buttonText">{text}</div>
        <div class="smallButton down">{funDown ?? ' '}</div>
    </button>
    <label for="calcButton" class="smallButton up">{funUp ?? ' '}</label>
</div>

<style lang="scss">
    @use '../globals/colors.scss';
    @import '@fontsource-variable/inter';

    .wrapper {
        display: flex;
        height: 70px;
        min-width: 67px;
        flex-direction: column-reverse;
        align-items: center;
        font-family: 'Inter Variable';
    }

    .calcButton {
        padding-top: 6px;
        display: flex;
        height: 50px;
        max-height: 50px;
        flex-direction: column;
        align-self: stretch;
        gap: 5px;

        border: none;
        border-radius: 5px;
        background: #4a4a4a;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    .calcButton:hover{
        background: #636363;
    }

    .calcButton:active{
        background: #8b8b8b;
        box-shadow: inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    .buttonText {
        color: white;
        font-size: 20px;
        text-transform: uppercase;
    }

    .smallButton {
        text-align: center;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: lowercase;
    }

    .up {
        color: colors.$upColor;
    }

    .down {
        color: colors.$downColor;
    }
</style>
