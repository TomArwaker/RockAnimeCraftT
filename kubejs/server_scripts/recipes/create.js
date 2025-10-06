ServerEvents.recipes(event => {


	event.remove({output: 'create:creative_motor'})
	event.shaped(
	  Item.of('create:creative_motor'),
	  [
	    'CBC',
		'BAB',
		'CBC'
	  ],
	  {
		A: 'compressedcreativity:compressed_air_engine',
		B: 'draconicevolution:chaotic_core',
		C: 'create:precision_mechanism'
	  }
	)


})