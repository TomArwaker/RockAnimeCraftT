ServerEvents.recipes(event => {


	event.remove({output: 'draconicevolution:draconium_core'})
	event.shaped(
	  Item.of('draconicevolution:draconium_core'),
	  [
	    'ABA',
		'BCB',
		'ABA'
	  ],
	  {
		A: 'draconicevolution:draconium_ingot',
		B: '#forge:gears/enderium',
		C: 'create:precision_mechanism'
	  }
	)


	event.remove({output: 'draconicevolution:crafting_core'})
	event.shaped(
	  Item.of('draconicevolution:crafting_core'),
	  [
	    'GEF',
		'HAD',
		'JBC'
	  ],
	  {
		A: 'draconicevolution:draconium_core',
		B: 'pneumaticcraft:printed_circuit_board',
		C: 'ars_nouveau:water_essence',
		D: 'ars_nouveau:manipulation_essence',
		F: 'ars_nouveau:fire_essence',
		E: 'ars_nouveau:earth_essence',
		G: 'ars_nouveau:air_essence',
		H: 'ars_nouveau:conjuration_essence',
		J: 'ars_nouveau:abjuration_essence'
	  }
	)


	event.remove({output: 'draconicevolution:basic_crafting_injector'})
	event.shaped(
	  Item.of('draconicevolution:basic_crafting_injector'),
	  [
	    'DAD',
		'HBC',
		'GFE'
	  ],
	  {
		A: 'draconicevolution:draconium_core',
		B: '#forge:storage_blocks/steel',
		C: 'aether_redux:gravitite_ingot',
		D: 'runecraft:spirit_star',
		E: 'twilightforest:fiery_ingot',
		F: 'blue_skies:falsite_ingot',
		G: 'blue_skies:horizonite_ingot',
		H: 'iceandfire:dragonsteel_lightning_ingot'
	  }
	)


	event.remove({output: 'draconicevolution:creative_capacitor'})
	event.shaped(
	  Item.of('draconicevolution:creative_capacitor'),
	  [
	    'CBC',
		'BAB',
		'CBC'
	  ],
	  {
		A: 'draconicevolution:chaotic_capacitor',
		B: 'draconicevolution:chaotic_core',
		C: 'create:precision_mechanism'
	  }
	)


})