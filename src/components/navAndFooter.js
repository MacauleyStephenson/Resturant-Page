import { appendNav } from "./nav-bar";
import createFooter from "./footer";

const content = document.querySelector("content");

const createNavAndFooter = function () {
	appendNav();
	createFooter();
}

export default createNavAndFooter;