import createNavAndFooter from "../components/navAndFooter";
import hotdog from '../img/hotdog.png'
import '../css/menuPage.css';
import burger from '../img/burger.png';
import salad from '../img/fruitSalad.png';
import pizza from '../img/cheesePizza.png';
import pie from '../img/cherryPie.png';
import icecream from '../img/icecream.png';

const content = document.querySelector('#content');

const createMenuContainer = function () {
	const menuPage = document.createElement('div');
	menuPage.setAttribute('id', 'menuPage');
	content.appendChild(menuPage);

	const menuDiv = document.createElement('div');
	menuDiv.setAttribute('id', 'menu');
	menuPage.appendChild(menuDiv);

	return {
		menuPage,
		menuDiv
	}
};

const createItem = function (itemName, imgSrc, itemPrice, menuDiv) {

	const item = document.createElement('div');
	item.classList.add('item');

	const name = document.createElement('h3');
	name.textContent = itemName;
	item.appendChild(name);

	const img = new Image();
	img.src = imgSrc;
	item.appendChild(img);

	const price = document.createElement('h4');
	price.textContent = itemPrice;
	item.appendChild(price);

	menuDiv.appendChild(item);
}

const renderMenu = function () {
	const container = createMenuContainer();
	createItem('Hotdog', hotdog, '$2', container.menuDiv);
	createItem('Burger', burger, '$4', container.menuDiv);
	createItem('Fruit Salad', salad, '$3', container.menuDiv);
	createItem('Cheese Pizza', pizza, '$8', container.menuDiv);
	createItem('Cheese Pizza', pie, '$5', container.menuDiv);
	createItem('Cheese Pizza', icecream, '$3', container.menuDiv);
	createNavAndFooter();

}

export default renderMenu;