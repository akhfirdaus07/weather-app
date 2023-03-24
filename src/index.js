import './style.css';
import {createHeader, createMain, createFooter} from './modules/barebone.js';

function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

}

initializeWebsite();