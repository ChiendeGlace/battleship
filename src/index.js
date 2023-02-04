import './main.scss';
import createHeader from './modules/header';
import createHomepage from './modules/homepage';

const header = document.querySelector('header');

createHomepage();
header.appendChild(createHeader());
