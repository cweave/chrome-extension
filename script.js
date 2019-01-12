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
   

const time = document.querySelector('.time');	
const date = document.querySelector('.date');

function setCurrentTime() {
	const now = new Date();
	const minutes = now.getMinutes();
	const hourStandard = now.getHours() % 12 || 12;
	const todaysDate = now.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' });
	
	time.innerHTML = `${hourStandard}:${minutes}`;
	date.innerHTML = todaysDate;
}

//current time - update every 10 seconds
setInterval(setCurrentTime, (10*1000));
setCurrentTime();