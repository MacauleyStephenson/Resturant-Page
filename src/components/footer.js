import github from '../img/github.jpeg';
import '../css/footer.css';

const content = document.querySelector('#content');

const createFooter = function () {
	const footer = document.createElement('footer');

	let copyright = document.createElement('h5');
	copyright.textContent = 'Copyright © 2022 Macauley Stephenson';
	footer.appendChild(copyright);

	let githubIcon = new Image();
	githubIcon.src = github;
	githubIcon.addEventListener('click', e => {
		window.open('https://github.com/MacauleyStephenson', '_blank');
	})
	footer.appendChild(githubIcon);

	content.appendChild(footer);

};

export default createFooter;