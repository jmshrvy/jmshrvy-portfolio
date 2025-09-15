function expandSideBar() {
    const toggleRightBtn = document.querySelector('.toggle-right');
    const toggleLeftBtn = document.querySelector('.toggle-left');
    const sideBar = document.querySelector('.nav-container');

    toggleRightBtn.addEventListener('click', () => {
        sideBar.classList.toggle('compress');
        toggleRightBtn.style.visibility = 'hiddden';
        toggleLeftBtn.style.visibility = 'visible';
    });

    toggleLeftBtn.addEventListener('click', () => {
        sideBar.classList.toggle('compress');
        toggleLeftBtn.style.visibility = 'hidden';
    });
}

function slideUpBlock() {
    const projectBlock = document.querySelectorAll('.projects-block');
    const aboutCard = document.querySelectorAll('.about-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.5 });
    
    projectBlock.forEach(item => observer.observe(item));
    aboutCard.forEach(item => observer.observe(item));
}

function loadingAnimation() {
    window.addEventListener("load", () => {
      const loader = document.getElementById("loading-animation");
      const content = document.getElementById("content");

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

      // LOADING DURATION
       setTimeout(() => {
          loader.classList.remove("hidden");
          content.classList.add("show");
        }, 600);
      });
}

function activeScrollSection() {
    const sections = document.querySelectorAll("section");
    const navItem = document.querySelectorAll("nav header a");
    const activeItem = document.getElementById("activeItem");

    activeItem.classList.add('active');

    window.onscroll = () => {
        sections.forEach(section => {
            const top = window.scrollY;
            let offSet = section.offsetTop - 150;
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
}

loadingAnimation();
expandSideBar();
slideUpBlock();
activeScrollSection();