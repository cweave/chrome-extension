$(document).ready(function(){
	//current time - update every 10 seconds
	setCurrentTime();
	setInterval(function(){
		setCurrentTime();
	}, 10*1000);

	const getRandomNum = () => {
		return Math.floor(Math.random() * 99);
	};

	const body = document.getElementsByTagName('body');

	for (let item of body) {
		const bgImage = `url('https://source.unsplash.com/collection/3374649/${getRandomNum()}')`;
		item.style.backgroundImage = `linear-gradient(
			rgba(0, 0, 0, 0.25),
			rgba(0, 0, 0, 0.25)), ${bgImage}`;
		item.style.opacity = 1;
	}
   
});

function setCurrentTime(){
	var now = new Date();
	$('.time').html(now.getHours()+":"+ (now.getMinutes()<10?'0':'') + now.getMinutes());
	$('.date').html(now.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }));
}