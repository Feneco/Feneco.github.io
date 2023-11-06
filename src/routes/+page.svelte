<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import * as Rpn from '$lib/functions/calculator'

    let calculator = new Rpn.RpnCalculator()

    function callCalculator(cmd: Rpn.Command) {
        // TODO: catch exceptions and display errors from the line below
        calculator.runCommand(cmd)
        calculator.inputScreen = calculator.inputScreen
        calculator.stack = calculator.stack
    }
</script>

<svelte:head>
    <title>RPN calculator</title>
    <meta name="RPN calculator" content="RPN Calculator that uses svelte" />
</svelte:head>

<section>
    <div class="screen stack">
        {#each calculator.stack as item, i}
            <div class="line">
                <div class="number">{i + 1}:</div>
                <div class="text">{item}</div>
            </div>
        {:else}
            <div class="line">
                <div class="number">1:</div>
                <div class="text" />
            </div>
        {/each}
    </div>

    <div class="screen input">
        <div>{calculator.inputScreen}</div>
    </div>

    <div class="innerButtons">
        <Button
            text={'DUP'}
            on:click={() => {
                callCalculator(new Rpn.Duplicate())
            }}
        />
        <Button
            text={'SWAP'}
            on:click={() => {
                callCalculator(new Rpn.Swap())
            }}
        />
        <Button
            text={'DROP'}
            on:click={() => {
                callCalculator(new Rpn.Drop())
            }}
        />
        <Button
            text={'OVER'}
            on:click={() => {
                callCalculator(new Rpn.Over())
            }}
        />
        <Button
            text={'ROT'}
            on:click={() => {
                callCalculator(new Rpn.Rot())
            }}
        />
        <!-- ################################################ -->
        <Button
            text={'%'}
            on:click={() => {
                callCalculator(new Rpn.Percent())
            }}
        />
        <Button
            text={'sqrt'}
            on:click={() => {
                callCalculator(new Rpn.Sqrt())
            }}
        />
        <Button
            text={'1/x'}
            on:click={() => {
                callCalculator(new Rpn.Invert())
            }}
        />
        <Button
            text={'+/-'}
            on:click={() => {
                callCalculator(new Rpn.Negate())
            }}
        />
        <Button
            text={'/'}
            on:click={() => {
                callCalculator(new Rpn.Div())
            }}
        />
        <!-- ################################################ -->
        <Button
            text={'<X'}
            buttonStyle={"background-color: #A51253;"}
            on:click={() => {
                callCalculator(new Rpn.Erase())
            }}
        />
        <Button
            text={'7'}
            on:click={() => {
                callCalculator(new Rpn.AddToInput("7"))
            }}
        />
        <Button
            text={'8'}
            on:click={() => {
                callCalculator(new Rpn.AddToInput("8"))
            }}
        />
        <Button
            text={'9'}
            on:click={() => {
                callCalculator(new Rpn.AddToInput("9"))
            }}
        />
        <Button
            text={'X'}
            on:click={() => {
                callCalculator(new Rpn.Mul())
            }}
        />
        <!-- ################################################ -->
        <Button
            text={'F'}
            buttonStyle={"background-color: #9F16A1;"}
            on:click={() => {}}
        />
        <Button
            text={'4'}
            on:click={() => {
                callCalculator(new Rpn.AddToInput("4"))
            }}
        />
        <Button
            text={'5'}
            on:click={() => {
                callCalculator(new Rpn.AddToInput("5"))
            }}
        />
        <Button
            text={'6'}
            on:click={() => {
                callCalculator(new Rpn.AddToInput("6"))
            }}
        />
        <Button
            text={'-'}
            on:click={() => {callCalculator(new Rpn.Sub())}}
        />
        <!-- ################################################ -->
        <Button
            text={'G'}
            buttonStyle={"background-color: #E0B20F;"}
            on:click={() => {}}
        />
        <Button
            text={'1'}
            on:click={() => {
                callCalculator(new Rpn.AddToInput("1"))
            }}
        />
        <Button
            text={'2'}
            on:click={() => {
                callCalculator(new Rpn.AddToInput("2"))
            }}
        />
        <Button
            text={'3'}
            on:click={() => {
                callCalculator(new Rpn.AddToInput("3"))
            }}
        />
        <Button
            text={'+'}
            on:click={() => {
                callCalculator(new Rpn.Add())
            }}
        />
        <!-- ################################################ -->
        <Button
            text={''}
            on:click={() => {
            }}
        />
        <Button
            text={'0'}
            on:click={() => {
                callCalculator(new Rpn.AddToInput("0"))
            }}
        />
        <Button
            text={'.'}
            on:click={() => {
                callCalculator(new Rpn.AddToInput("."))
            }}
        />
        <Button
            text={'enter'}
            style={'grid-column: 4/6;'}
            on:click={() => {
                callCalculator(new Rpn.Enter())
            }}
        />
    </div>
</section>

<style lang="scss">
    section {
        background-color: white;
        display: flex;
        width: 400px;
        padding: 20px;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;

        background: #e9e9e9;
        box-shadow: 0px 25px 12px -12px rgba(0, 0, 0, 0.25);
    }

    .innerButtons {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
        overflow: hidden;
    }

    .screen {
        background-color: #e4e4e4;
        padding: 10px;
        box-sizing: border-box;
        box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.2);
    }

    .stack {
        width: 100%;
        height: 130px;
        font-family: monospace;

        display: flex;
        flex-direction: column-reverse;
        overflow: scroll;
    }

    .input {
        width: 100%;
        height: 40pt;
        font-family: monospace;
        font-size: 20pt;
        display: flex;
        align-items: center;
        overflow: scroll;
    }

    .line {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 18pt;

        .number {
            color: gray;
        }

        .text {
            color: rgba($color: #2b2b2b, $alpha: 1);
        }
    }
</style>
