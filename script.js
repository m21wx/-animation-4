	
	let exercises = document.querySelector('.exercises-3');
	
	for(let i =0 ; i < 850 ; i++){
		let span = document.createElement('span');
		span.className='box';
		
		
		
		exercises.append(span)
	}
	
	let box =document.querySelectorAll('.exercises-3 .box');
	
	box.forEach(e=>{
		e.addEventListener('mousemove',()=>{
			e.classList.add('anmited');
			e.style.filter=`hue-rotate(${Math.random() * 360}deg)`;
			let direction = Math.random() * 3;
			e.style.animationDuration =1 + direction +'s';
		})
	})
	
	document.querySelector('button')
	.addEventListener('click',()=>{
		window.location.reload();
	})