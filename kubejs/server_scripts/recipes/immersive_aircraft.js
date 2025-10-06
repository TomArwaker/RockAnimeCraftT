ServerEvents.recipes(event => {


	event.remove({output: 'immersive_aircraft:engine'})
	event.shaped(
	  Item.of('immersive_aircraft:engine'),
	  [
	    'ABA',
		'EDE',
		'BCB'
	  ],
	  {
		A: 'create:precision_mechanism',
		B: '#forge:cobblestone',
		C: 'immersive_aircraft:boiler',
		D: 'minecraft:blast_furnace',
		E: 'minecraft:piston'
	  }
	)


})