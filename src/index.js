import renderHome from "./pages/homePage";
import renderMenu from "./pages/menuPage";
import renderContact from './pages/contactPage.js';
import { getHome, getMenu, getContact } from './components/nav-bar';

renderHome();

//Nav

const content = document.querySelector("#content");

const home = getHome()
home.addEventListener("click", e => {
	content.innerHTML = "";
	renderHome();
});

const menu = getMenu();
menu.addEventListener("click", e => {
	content.innerHTML = "";
	renderMenu();
	console.log('something happened')
});

const contact = getContact();
contact.addEventListener("click", e => {
	content.innerHTML = "";
	renderContact();
})