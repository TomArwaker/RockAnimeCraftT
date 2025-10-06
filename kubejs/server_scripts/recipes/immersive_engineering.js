ServerEvents.recipes(event => {


	event.remove({output: 'immersiveengineering:fluid_pipe'})
	event.shaped(
	  Item.of('8x immersiveengineering:fluid_pipe'),
	  [
	    'AAA',
		' B ',
		'AAA'
	  ],
	  {
		A: '#forge:plates/iron',
		B: '#forge:dusts/coal_coke'
	  }
	)


	event.remove({output: 'immersiveengineering:hammer'})
	event.shaped(
	  Item.of('immersiveengineering:hammer'),
	  [
	    ' BC',
		' AB',
		'A  '
	  ],
	  {
		A: '#forge:sticks',
		B: '#forge:plates/iron',
		C: '#forge:string'
	  }
	)


})