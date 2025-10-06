ServerEvents.recipes(event => {


	event.remove({output: 'doom:bullets'})
	event.shaped(
	  Item.of('doom:bullets'),
	  [
	    'BBB',
		'AAA',
		'BBB'
	  ],
	  {
		A: 'minecraft:gunpowder',
		B: '#forge:plates/iron'
	  }
	)


	event.remove({output: 'doom:chaingunbullets'})
	event.shaped(
	  Item.of('doom:chaingunbullets'),
	  [
	    'BBB',
		'BAB',
		' B '
	  ],
	  {
		A: 'minecraft:gunpowder',
		B: '#forge:plates/iron'
	  }
	)


	event.remove({output: 'doom:shotgun_shells'})
	event.shaped(
	  Item.of('doom:shotgun_shells'),
	  [
	    'BBB',
		'BAB',
		'BBB'
	  ],
	  {
		A: 'minecraft:gunpowder',
		B: '#forge:plates/iron'
	  }
	)


	event.remove({output: 'doom:rocket'})
	event.shaped(
	  Item.of('doom:rocket'),
	  [
	    ' B ',
		' A ',
		'BCB'
	  ],
	  {
		A: 'doom:argent_energy',
		B: '#forge:plates/iron',
		C: 'minecraft:tnt'
	  }
	)


	event.remove({output: 'doom:rocket'})
	event.shaped(
	  Item.of('doom:rocket'),
	  [
	    'BBB',
		' A ',
		'BBB'
	  ],
	  {
		A: 'doom:argent_energy',
		B: '#forge:plates/iron'
	  }
	)



})