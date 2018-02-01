let current = document.getElementById('current');
const imgs = document.querySelectorAll('.imgs img')

imgs.forEach((img) => {
	img.addEventListener('click', (e) => {
		imgs.forEach((img) => { 
			img.id = ''
		})
		current.src = e.target.src
		e.target.id = 'current-in-imgs'
	})
})
