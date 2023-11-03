<script>
    import Button from "$lib/components/Button.svelte";
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <div class="innerButtons">
        <Button text={"DUP"} />
        <Button text={"ROT"} />
        <Button text={"SWAP"} />
        <Button text={"DROP"} />
        <Button text={"RCL"} />

        <Button text={"/"} on:click={(e) => console.log(e.target?.innerText)}/>
        <Button text={"7"} on:click={(e) => console.log(e.target?.innerText)}/>
        <Button text={"8"} />
        <Button text={"9"} />
        <Button text={"SUM"} />

        <Button text={"X"} />
        <Button text={"4"} />
        <Button text={"5"} />
        <Button text={"6"} />
        <Button text={"+/-"} />
        
        <Button text={"-"} />
        <Button text={"1"} />
        <Button text={"2"} />
        <Button text={"3"} />
        <Button text={"1/x"} />

        <Button text={"+"} />
        <Button text={"0"} />
        <Button text={"."} />
        <Button text={"enter"} style={"grid-column: 4/6;"}/>
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