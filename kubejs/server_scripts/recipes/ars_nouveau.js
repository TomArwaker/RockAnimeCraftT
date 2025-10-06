ServerEvents.recipes(event => {


	event.remove({output: 'ars_nouveau:source_jar'})
	event.shaped(
	  Item.of('ars_nouveau:source_jar'),
	  [
	    'AAA',
		'BCB',
		'AAA'
	  ],
	  {
		A: 'ars_nouveau:archwood_slab',
		B: '#forge:glass',
		C: 'ars_nouveau:source_gem'
	  }
	)


	event.remove({output: 'ars_nouveau:creative_source_jar'})
	event.shaped(
	  Item.of('ars_nouveau:creative_source_jar'),
	  [
	    'CBC',
		'BAB',
		'CBC'
	  ],
	  {
		A: 'ars_nouveau:source_jar',
		B: 'draconicevolution:chaotic_core',
		C: 'create:precision_mechanism'
	  }
	)


})