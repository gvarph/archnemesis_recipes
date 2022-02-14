<script lang="ts">
    //  export let name: string;

    import recipes from "./recipes.json";
    import MR from "./mr.svelte";
    let monsters = recipes.monsters;

    let default_mobs = [
        { name: "innocence-touched", hidden: false },
        { name: "brine king-touched", hidden: false },
        { name: "kitava-touched", hidden: false },
        { name: "evocationist", hidden: false },
        { name: "shakari-touched", hidden: false },
        { name: "arakali-touched", hidden: false },
    ];
</script>

<main>
    <flexbox>
        {#each default_mobs as s}
            <button
                class="hide_button"
                style="opacity: {s.hidden ? '0.5' : '1'};"
                on:click={() => (s.hidden = !s.hidden)}>{s.name}</button
            >
        {/each}
    </flexbox>
    <div>
        {#each default_mobs as s}
            {#if !s.hidden}
                <MR monster_name={s.name} />
            {/if}
        {/each}
    </div>
</main>

<style>
    .hide_button {
        margin: 2.5px;
        padding: 5px;
    }
</style>
