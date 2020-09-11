import {renderHomePage} from './home.js';
import {renderAboutPage} from './about.js';
import {renderMenuPage} from './menu.js';
import {renderContactPage} from './contact.js'

const navButtons = 
    [{id: 'home-button',
        content: 'Home',
        render: renderHomePage,},
    {id: 'about-button',
        content: 'About',
        render: renderAboutPage,},
    {id: 'menu-button',
        content: 'Menu',
        render: renderMenuPage,},
    {id: 'contact-button',
        content: 'Contact Us',
        render: renderContactPage,}];
const socialMedias = 
    [{link : "https://www.instagram.com/c.zhang_/",
        name: "Instagram"},
    {link: "https://www.facebook.com/profile.php?id=100012222333426",
        name: "Facebook"},
    {link: "https://twitter.com/ChZhang_",
        name: "Twitter"}];

const initial = () =>{
    let contentDiv = document.querySelector('#content');

    let headerDiv = document.createElement('div');
    headerDiv.id = 'header';

    //create titleDiv
    let titleDiv = document.createElement('div');
    titleDiv.id = 'title';
    titleDiv.textContent = 'Charlie\'s Eatery';
    headerDiv.appendChild(titleDiv);

    //create navbar
    let navDiv = document.createElement('div');
    navDiv.id = 'nav-bar';
    
    let navList = document.createElement('ul');
    navList.id = "nav-list";
    
    let navButton;
    for(navButton of navButtons){
        let listElement = document.createElement('li');
        listElement.classList.add("nav-button");
        listElement.id = navButton.id;
        listElement.textContent = navButton.content;
        console.log(navButton.render);
        navList.appendChild(listElement);
        const func = navButton.render;
        listElement.addEventListener('click', () =>{
            const buttons = document.querySelectorAll('.nav-button');
            buttons.forEach(button => button.classList.remove('active'));
            func();
        })
    }
    navDiv.appendChild(navList);
    headerDiv.appendChild(navDiv);

    contentDiv.appendChild(headerDiv);

    //add main div and render the homepage
    let mainDiv = document.createElement('div');
    mainDiv.id = 'main';
    contentDiv.appendChild(mainDiv);
    renderHomePage();

    //add the footer
    let footerDiv = document.createElement("div");
    footerDiv.id = "footer";
    
    let footerList = document.createElement('ul');
    footerList.id = "footer-list";

    let socialMedia;
    for(socialMedia of socialMedias){
        let listElement = document.createElement('li');
        let link = document.createElement('a');
        link.setAttribute("href", socialMedia.link);
        link.textContent = socialMedia.name;
        listElement.appendChild(link);
        footerList.appendChild(listElement);
    }

    footerDiv.appendChild(footerList);
    contentDiv.appendChild(footerDiv);
}

export {
    initial
}