ServerEvents.recipes(event => {


	event.remove({output: 'vs_eureka:engine'})
	event.shaped(
	  Item.of('vs_eureka:engine'),
	  [
	    'AAA',
		'CDE',
		'BBB'
	  ],
	  {
		A: '#forge:stone',
		B: 'minecraft:smooth_stone',
		C: '#forge:plates/iron',
		D: 'minecraft:blast_furnace',
		E: '#forge:panes/glass'
	  }
	)


	event.remove({output: 'vs_eureka:anchor'})
	event.shaped(
	  Item.of('vs_eureka:anchor'),
	  [
	    'BAB',
		' A ',
		'ACA'
	  ],
	  {
		A: '#forge:plates/iron',
		B: 'minecraft:lead',
		C: 'minecraft:iron_block'
	  }
	)


})