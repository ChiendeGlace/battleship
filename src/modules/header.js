const header = document.querySelector('header');

const createHeader = () => {
    const pageTitle = document.createElement('h1');
    pageTitle.textContent = "Battleship"
    return pageTitle
}

export default createHeader;