<script lang="ts">
    import './styles.scss';
    import Button from '$lib/components/Button.svelte';
    import * as Rpn from '$lib/functions';
    import Icon from '@iconify/svelte';

    let calculator = new Rpn.RpnCalculator();

    function callCalculator(cmd: Rpn.Command) {
        // TODO: catch exceptions and display errors from the line below
        calculator.runCommand(cmd);
        calculator.inputScreen = calculator.inputScreen;
        calculator.stack = calculator.stack;
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
            on:click={() => {
                callCalculator(new Rpn.Duplicate());
            }}
        >
            <div class="buttonText">DUP</div>
        </Button>
        <Button
            on:click={() => {
                callCalculator(new Rpn.Swap());
            }}
        >
            <div class="buttonText">SWAP</div>
        </Button>
        <Button
            on:click={() => {
                callCalculator(new Rpn.Drop());
            }}
        >
            <div class="buttonText">DROP</div>
        </Button>
        <Button
            on:click={() => {
                callCalculator(new Rpn.Over());
            }}
        >
            <div class="buttonText">OVER</div>
        </Button>
        <Button
            on:click={() => {
                callCalculator(new Rpn.Rot());
            }}
        >
            <div class="buttonText">ROT</div>
        </Button>
        <!-- ################################################ -->
        <Button
            on:click={() => {
                callCalculator(new Rpn.Percent());
            }}
        >
            <div>
                <Icon
                    icon="material-symbols:percent-rounded"
                    width="25"
                    height="25"
                    color="white"
                />
            </div>
        </Button>
        <Button
            on:click={() => {
                callCalculator(new Rpn.Sqrt());
            }}
        >
            <div>
                <Icon icon="mdi:square-root" width="30" height="30" color="white" />
            </div>
        </Button>
        <Button
            on:click={() => {
                callCalculator(new Rpn.Invert());
            }}
        >
            <div class="buttonText">1/x</div>
        </Button>
        <Button
            on:click={() => {
                callCalculator(new Rpn.Negate());
            }}
        >
            <div>
                <Icon icon="ic:baseline-plus-minus" width="25" height="25" color="white" />
            </div>
        </Button>
        <Button
            on:click={() => {
                callCalculator(new Rpn.Div());
            }}
        >
            <div>
                <Icon icon="ic:baseline-divide" width="25" height="25" color="white" />
            </div>
        </Button>
        <!-- ################################################ -->
        <Button
            buttonStyle={'background-color: #A51253;'}
            on:click={() => {
                callCalculator(new Rpn.Erase());
            }}
        >
            <div>
                <Icon icon="mdi:erase" width="25" height="25" color="white" />
            </div>
        </Button>
        <Button
            on:click={() => {
                callCalculator(new Rpn.AddToInput('7'));
            }}
        >
            <div class="buttonText">7</div>
        </Button>
        <Button
            on:click={() => {
                callCalculator(new Rpn.AddToInput('8'));
            }}
        >
            <div class="buttonText">8</div>
        </Button>
        <Button
            on:click={() => {
                callCalculator(new Rpn.AddToInput('9'));
            }}
        >
            <div class="buttonText">9</div>
        </Button>
        <Button
            on:click={() => {
                callCalculator(new Rpn.Mul());
            }}
        >
            <div>
                <Icon icon="mdi:multiply" width="25" height="25" color="white" />
            </div>
        </Button>
        <!-- ################################################ -->
        <Button buttonStyle={'background-color: #9F16A1;'} on:click={() => {}}>
            <div class="buttonText">F</div>
        </Button>
        <Button
            on:click={() => {
                callCalculator(new Rpn.AddToInput('4'));
            }}
        >
            <div class="buttonText">4</div>
        </Button>
        <Button
            on:click={() => {
                callCalculator(new Rpn.AddToInput('5'));
            }}
        >
            <div class="buttonText">5</div>
        </Button>
        <Button
            on:click={() => {
                callCalculator(new Rpn.AddToInput('6'));
            }}
        >
            <div class="buttonText">6</div>
        </Button>
        <Button
            on:click={() => {
                callCalculator(new Rpn.Sub());
            }}
        >
            <div>
                <Icon icon="ri:subtract-fill" width="25" height="25" color="white" />
            </div>
        </Button>
        <!-- ################################################ -->
        <Button buttonStyle={'background-color: #E0B20F;'} on:click={() => {}}>
            <div class="buttonText">G</div>
        </Button>
        <Button
            on:click={() => {
                callCalculator(new Rpn.AddToInput('1'));
            }}
        >
            <div class="buttonText">1</div>
        </Button>
        <Button
            on:click={() => {
                callCalculator(new Rpn.AddToInput('2'));
            }}
        >
            <div class="buttonText">2</div>
        </Button>
        <Button
            on:click={() => {
                callCalculator(new Rpn.AddToInput('3'));
            }}
        >
            <div class="buttonText">3</div>
        </Button>
        <Button
            on:click={() => {
                callCalculator(new Rpn.Add());
            }}
        >
            <div>
                <Icon icon="ic:baseline-add" width="25" height="25" color="white" />
            </div>
        </Button>
        <!-- ################################################ -->
        <Button
            on:click={() => {
                callCalculator(new Rpn.ClearAll());
            }}
        >
            <div>
                <Icon icon="material-symbols:delete-sweep" width="25" height="25" color="white" />
            </div>
        </Button>
        <Button
            on:click={() => {
                callCalculator(new Rpn.AddToInput('0'));
            }}
        >
            <div class="buttonText">0</div>
        </Button>
        <Button
            on:click={() => {
                callCalculator(new Rpn.AddToInput('.'));
            }}
        >
            <div class="buttonText">.</div>
        </Button>
        <Button
            style={'grid-column: 4/6;'}
            on:click={() => {
                callCalculator(new Rpn.Enter());
            }}
        >
            <div class="buttonText">enter</div>
        </Button>
    </div>
</section>

<style lang="scss">
    section {
        background-color: white;
        display: flex;
        width: 400px;
        max-width: 100%;
        padding: 20px;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;

        background: #e9e9e9;
        box-shadow: 0px 25px 12px -12px rgba(0, 0, 0, 0.25);
    }

    .innerButtons {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, 5, 1fr);
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

    .buttonText {
        color: white;
        font-size: 20px;
        text-transform: uppercase;
        margin-top: 6px;
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
