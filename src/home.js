const renderHomePage = () =>{
    let homeButton = document.querySelector('#home-button');
    homeButton.classList.add('active');
    
    let main = document.querySelector('#main');
    main.innerHTML = '';

    let img = document.createElement('img');
    img.id = 'home-pic';
    img.setAttribute('src', 'images/food_1.jpg');

    let mainText = document.createElement('div');
    mainText.textContent = 
        "Food? That's a thing we have at our Restaurant! Come to Charlie's Eatery!";
    mainText.id = 'main-text';

    main.appendChild(img);
    main.appendChild(mainText);
}

export {
    renderHomePage
}