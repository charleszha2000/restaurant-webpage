const renderMenuPage = () =>{
    let menuButton = document.querySelector("#menu-button");
    menuButton.classList.add('active');
    let mainDiv = document.querySelector("#main");
    mainDiv.textContent = "BROHO";
}

export {
    renderMenuPage
}