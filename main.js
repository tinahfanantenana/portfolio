import {fetchPage} from '../services/fetchPage.js';
import { activeMenu } from './utils/activeMenu.js';
import { contactForm } from './public/components/contactForm.js';

const container= document.querySelector(".container");


//Délégation de l'evenement sur chaque lien cliqué
document.addEventListener('click',(e)=>{
    const link = e.target.closest('a[data-page]');
    
    if (!link) return ;

    e.preventDefault();

    const page=link.dataset.page;

    activeMenu(page);
    fetchPage(container,page);
})
activeMenu('accueil');
fetchPage(container,'accueil');

