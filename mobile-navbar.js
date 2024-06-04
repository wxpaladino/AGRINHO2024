class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.hadlleClick = this.hadlleClick.bind(this);
    }
     
    animateLinks() {
        this.navLinks.forEach((link, index ) => {
        console.log (index);
        link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s');
       
    });
      }


    hadlleClick() {
        console.log (this);
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventlistener("click", this.hadlleClick);
    }
  
 init() {
    if(this.mobileMenu) {
        this.addClickEvent();
    }
    return this;
 }
   }