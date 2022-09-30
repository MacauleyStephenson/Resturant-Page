import '../css/nav-bar.css';

const content = document.querySelector('#content');


const createNav = function () {
	const nav = document.createElement('nav');

	//Resturant Name Logo
	const nameDiv = document.createElement('div');
	nameDiv.setAttribute('id', "name");
	let name = document.createElement('h1');
	name.textContent = "Shah's Resturant";
	nameDiv.appendChild(name);

	//Links
	const navLinks = document.createElement("div");
	navLinks.setAttribute('id', "nav-links");

	let home = document.createElement('h3');
	home.textContent = "Home";

	let menu = document.createElement('h3');
	menu.textContent = "Menu";

	let contactUs = document.createElement('h3');
	contactUs.textContent = "Contact Us";
	navLinks.append(home, menu, contactUs);

	nav.append(nameDiv, navLinks);

	const returnNav = function () {
		return nav;
	}

	const returnHome = function () {
		return home;
	}

	const returnMenu = function () {
		return menu;
	}

	const returnContactUs = function () {
		return contactUs;
	}

	return {
		returnNav,
		returnHome,
		returnMenu,
		returnContactUs
	};
}

const nav = createNav();

const appendNav = function () {
	content.prepend(nav.returnNav());
}

const getHome = function () {
	return nav.returnHome();
}

const getMenu = function () {
	return nav.returnMenu();
}

const getContact = function () {
	return nav.returnContactUs();
}

export { appendNav, getHome, getMenu, getContact };