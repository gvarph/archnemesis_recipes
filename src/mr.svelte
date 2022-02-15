<script>
    let is_complete = false;
    export let parent_complete = false;
    export let monster_name;
    import recipes from "./recipes.json";
    let children = [];

    //get monster with name equal to monster_name
    let monster = recipes.monsters.find((monster) => monster.name === monster_name);

    console.log(monster);
    if (monster !== undefined) {
        if (monster.children !== undefined) {
            children = monster.children;
        }
    }
</script>

<div class="main {is_complete && !parent_complete ? 'complete' : 'not_complete'}">
    <div class="info">
        <div>
            <input type="checkbox" id="checkbox" bind:checked={is_complete} />
            {monster_name}
        </div>
    </div>
    {#if children.length > 0 && !is_complete}
        <div class="sub_recipe">
            {#each children as child}
                <svelte:self monster_name={child} parent_complete={is_complete} />
            {/each}
        </div>
    {/if}
</div>

<style>
    .main {
        /* border opacity 50% */
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 10px;

        padding: 5px;
        margin: 2.5px;
        display: flex;
    }
    .complete {
        opacity: 0.5;
    }
    .not_complete {
        opacity: 1;
    }
    .info {
        float: left;
        /* center vertically */
        display: flex;
        align-items: center;
    }
</style>
