import renderHomePage from 'home.js';

const navButtons = 
    [{id: 'home-button',
        content: 'Home'},
    {id: 'about-button',
        content: 'About'},
    {id: 'menu-button',
        content: 'Menu'},
    {id: 'contact-button',
        content: 'Contact Us'}];
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
    

    for(navButton in navButtons){
        let listElement = document.createElement('li');
        listElement.classList.add("nav-button");
        listElement.id = navButton.id;
        listElement.textContent = navButton.content;
        navList.appendChild(listElement);
    }
    navDiv.appendChild(navList);
    headerDiv.appendChild(navList);

    contentDiv.appendChild(headerDiv);

    //add main div and render the homepage
    let mainDiv = document.createElement('div');
    div.id = 'main';
    contentDiv.appendChild(mainDiv);
    renderHomePage();

    //add the footer
    let footerDiv = document.createElement("div");
    footerDiv.id = "footer";
    
    let footerList = document.createElement('ul');
    footerList.id = "footer-list";

    for(socialMedia in SocialMedias){
        let listElement = document.create('li');
        listElement.textContent = socialMedia.name;
        let link = document.createElement('a');
        link.setAttribute("href", socialMedia.link);
        listElement.appendChild(link);
        footerList.appendChild(listElement);
    }

    footerDiv.appendChild(footerList);
}

export {
    initial
}