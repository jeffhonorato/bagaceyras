const menu = () => {
    const menuMobile = document.querySelector(".js-menu-mobile");
    menuMobile.addEventListener("click", () => {
        const itensMenu = document.querySelector(".js-nav-itens");
        itensMenu.classList.toggle("ativo");
    }); 
};

menu();

