const renderAboutPage = () =>{
    let aboutButton = document.querySelector("#about-button");
    aboutButton.classList.add('active');
    let mainDiv = document.querySelector("#main");
    mainDiv.textContent = "BRUH";
}

export {
    renderAboutPage
}