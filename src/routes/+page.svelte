<script>
    import Button from "$lib/components/Button.svelte";
    import processInput from "$lib/calculator";
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <div class="innerButtons">
        <Button text={"DUP"}  on:click={processInput} />
        <Button text={"ROT"}  on:click={processInput} />
        <Button text={"SWAP"} on:click={processInput} />
        <Button text={"DROP"} on:click={processInput} />
        <Button text={"RCL"}  on:click={processInput} />

        <Button text={"/"}   on:click={processInput} />
        <Button text={"7"}   on:click={processInput} />
        <Button text={"8"}   on:click={processInput} />
        <Button text={"9"}   on:click={processInput} />
        <Button text={"SUM"} on:click={processInput} />

        <Button text={"X"}   on:click={processInput} />
        <Button text={"4"}   on:click={processInput} />
        <Button text={"5"}   on:click={processInput} />
        <Button text={"6"}   on:click={processInput} />
        <Button text={"+/-"} on:click={processInput} />
        
        <Button text={"-"}   on:click={processInput} />
        <Button text={"1"}   on:click={processInput} />
        <Button text={"2"}   on:click={processInput} />
        <Button text={"3"}   on:click={processInput} />
        <Button text={"1/x"} on:click={processInput} />

        <Button text={"+"} on:click={processInput} />
        <Button text={"0"} on:click={processInput} />
        <Button text={"."} on:click={processInput} />
        <Button text={"enter"} style={"grid-column: 4/6;"} on:click={processInput} />
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

        background: #E9E9E9;
        box-shadow: 0px 25px 12px -12px rgba(0, 0, 0, 0.25); 
    }

    .innerButtons {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 10px;
        overflow: hidden;
    }
</style>