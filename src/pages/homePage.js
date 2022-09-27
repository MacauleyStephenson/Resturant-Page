import '../css/homePage.css';
import chef from '../img/chef.jpeg';
import createNavAndFooter from '../components/navAndFooter.js';

const content = document.querySelector('#content');

const createHomePageContent = function () {
	const homePage = document.createElement('div');
	homePage.setAttribute('id', 'homePage');

	content.appendChild(homePage);

	const homeDiv = document.createElement('div');
	homeDiv.setAttribute('id', 'homeInfo');

	let homeDesc = document.createElement('h4');
	homeDesc.textContent = 'Most comfortable and relaxing resturant around you';
	homeDiv.appendChild(homeDesc);

	let homeDate = document.createElement('h5');
	homeDate.textContent = 'Since 2004';
	homeDiv.appendChild(homeDate);

	let chefIcon = new Image();
	chefIcon.src = chef;
	homeDiv.appendChild(chefIcon);

	homePage.appendChild(homeDiv);
}

const renderHome = function () {
	createHomePageContent();
	createNavAndFooter();
}

export default renderHome;