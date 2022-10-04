import '../css/contactPage.css';
import createNavAndFooter from "../components/navAndFooter";

const content = document.querySelector('#content');

const createContact = function () {
	const contactPage = document.createElement('div');
	contactPage.setAttribute('id', 'contactPage');
	content.appendChild(contactPage);

	const contactInfo = document.createElement('div');
	contactInfo.setAttribute('id', 'contactInfo');

	const location = document.createElement('div');
	location.setAttribute('id', 'location');
	let locationH2 = document.createElement('h2');
	locationH2.textContent = 'Located At:';
	let locationH3 = document.createElement('h3');
	locationH3.textContent = '399 Harvey Dr. New York, NY 10002';
	location.append(locationH2, locationH3);

	const hours = document.createElement('div');
	hours.setAttribute('id', 'hours');
	let hoursH2 = document.createElement('h2');
	hoursH2.textContent = 'We Are Open:';
	let hoursH3 = document.createElement('h3');
	hoursH3.textContent = 'Monday - Friday: 8am to 9pm';
	hours.append(hoursH2, hoursH3);

	contactInfo.append(location, hours);
	contactPage.appendChild(contactInfo);
}

const renderContact = function () {
	createContact();
	createNavAndFooter();

}

export default renderContact;