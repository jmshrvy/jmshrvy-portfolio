function expandSideBar() {
    const toggleRightBtn = document.querySelector('.toggle-right');
    const toggleLeftBtn = document.querySelector('.toggle-left');
    const sideBar = document.querySelector('.nav-container');
    const isMobile = window.innerWidth < 768;

    toggleRightBtn.addEventListener('click', () => {
        sideBar.classList.toggle('compress');
        toggleRightBtn.style.visibility = 'hiddden';
        toggleLeftBtn.style.visibility = 'visible';
    });

    toggleLeftBtn.addEventListener('click', () => {
        sideBar.classList.toggle('compress');
        toggleLeftBtn.style.visibility = 'hidden';
    });

    if (isMobile) {
        sideBar.classList.add('compress');
    }
}

function slideUpBlock() {
    const projectBlock = document.querySelectorAll('.projects-block');
    const aboutCard = document.querySelectorAll('.about-card');
    const isMobile = window.innerWidth < 768;
    const observerOptions = {
      root: null,
      threshold: isMobile ? 0.6 : 0.3 // 60% ON MOBILE, 30% ON DESKTOP
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, { ...observerOptions });
    
    projectBlock.forEach(item => observer.observe(item));
    aboutCard.forEach(item => observer.observe(item));
}

function loadingAnimation() {
    window.addEventListener("load", () => {
      const loader = document.getElementById('loading-animation');
      const content = document.querySelector('.content');

      content.classList.add("hidden");

      // LOADING DURATION
       setTimeout(() => {
         loader.classList.add("hidden");
         content.classList.remove("hidden");
         content.classList.add("show");
        }, 400);
      });
}

function activeScrollSection() {
    const sections = document.querySelectorAll("section");
    const navItem = document.querySelectorAll("nav header a");
    const activeItem = document.getElementById("activeItem");
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
        activeItem.classList.remove('active');
    } else {
        activeItem.classList.add('active');
    }

    window.onscroll = () => {
        sections.forEach(section => {
            const top = window.scrollY;
            let offSet = section.offsetTop - 200;
            let height = section.offsetHeight;
            let id = section.getAttribute("id");

            if (top >= offSet && top < offSet + height) {
                navItem.forEach(links => {
                    links.classList.remove('active');
                    activeItem.classList.remove('active');
                    document.querySelector('nav header a[href*=' + id + ']').classList.add('active');
                })
            }

        });
    };

    // REMOVE THE HOVER STYLE ON MOBILE
    document.addEventListener("touchstart", () => {
      try {
        for (let styleSheet of document.styleSheets) {
          for (let i = styleSheet.cssRules.length - 1; i >= 0; i--) {
            if (styleSheet.cssRules[i].selectorText?.includes(":hover")) {
              styleSheet.deleteRule(i);
            }
          }
        }
      } catch (err) {
        console.log("Hover cleanup skipped:", err);
      }
    }, { once: true });
}

expandSideBar();
loadingAnimation();
slideUpBlock();
activeScrollSection();