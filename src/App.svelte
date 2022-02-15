<script lang="ts">
    //  export let name: string;

    import recipes from "./recipes.json";
    import MR from "./mr.svelte";
    let monsters = recipes.monsters;

    let default_mobs = [
        { name: "innocence-touched", hidden: true },
        { name: "brine king-touched", hidden: true },
        { name: "kitava-touched", hidden: true },
        { name: "evocationist", hidden: true },
        { name: "shakari-touched", hidden: true },
        { name: "arakali-touched", hidden: true },
        { name: "assassin", hidden: true },
        { name: "mirror image", hidden: true },
        { name: "treant horde", hidden: true },
        { name: "rejuvenating", hidden: true },
    ].sort((a, b) => a.name.localeCompare(b.name));
</script>

<main>
    <h1>Monster recipes</h1>
    <flexbox>
        {#each default_mobs as s}
            <button
                class="hide_button"
                style="opacity: {s.hidden ? '0.5' : '1'};"
                on:click={() => (s.hidden = !s.hidden)}>{s.name}</button
            >
        {/each}
    </flexbox>

    <h2>Suggestions</h2>
    <p>Innocence, brine king, kitava, evocationist</p>
    <p>assasin, mirror image, treant horde, necromancer/rejuvenating</p>
    <p>rejuvenating, assasin, mirror image, Treant Horde</p>
    <p />

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
