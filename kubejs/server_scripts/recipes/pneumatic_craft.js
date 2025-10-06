ServerEvents.recipes(event => {


	event.remove({output: 'pneumaticcraft:reinforced_stone'})
	event.shaped(
	  Item.of('8x pneumaticcraft:reinforced_stone'),
	  [
	    'BCB',
		'CAC',
		'BCB'
	  ],
	  {
		A: 'pneumaticcraft:ingot_iron_compressed',
		B: 'minecraft:stone',
		C: '#forge:plates/iron'
	  }
	)


})