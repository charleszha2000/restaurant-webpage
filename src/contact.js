const renderContactPage = () =>{
    let contactButton = document.querySelector("#contact-button");
    contactButton.classList.add('active');
    let mainDiv = document.querySelector("#main");
    mainDiv.textContent = "BRUGH";
}

export {
    renderContactPage
}