ServerEvents.recipes(event => {


	event.remove({output: 'bigreactors:basic_reactorcasing'})
	event.shaped(
	  Item.of('bigreactors:basic_reactorcasing'),
	  [
	    'BAB',
		'ACA',
		'BAB'
	  ],
	  {
		A: 'bigreactors:graphite_ingot',
		B: 'minecraft:iron_ingot',
		C: 'immersiveengineering:concrete'
	  }
	)


	event.remove({output: 'bigreactors:reinforced_reactorcasing'})
	event.shaped(
	  Item.of('bigreactors:reinforced_reactorcasing'),
	  [
	    'BAB',
		'ACA',
		'BAB'
	  ],
	  {
		A: 'bigreactors:graphite_ingot',
		B: '#forge:ingots/steel',
		C: 'bigreactors:basic_reactorcasing'
	  }
	)


})