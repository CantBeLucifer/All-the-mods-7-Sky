onEvent(`recipes`, e => {
  //e.shapeless(`kubejs:rotten_leather`, [`minecraft:rotten_flesh`, `minecraft:rotten_flesh`, `minecraft:rotten_flesh`])
  //e.smelting(Item.of(`minecraft:leather`), `kubejs:rotten_leather`).xp(0.5)
  //e.recipes.minecraft.smoking(Item.of(`minecraft:leather`), `kubejs:rotten_leather`).xp(0.5)

  function customBlock(block, item) {
    e.shapeless(Item.of(item, 9), block)
    e.shaped(block, [
      `AAA`,
      `AAA`,
      `AAA`
    ], {
      A: item
    })
  }

  customBlock(`kubejs:lithium_block`, `mekanism:dust_lithium`)
})