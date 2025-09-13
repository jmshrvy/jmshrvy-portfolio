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

function activeSideItem() {
    const sideItems = document.querySelectorAll('.side-item');
    const activeItem = document.getElementById('activeItem')

    activeItem.classList.add('active');

    sideItems.forEach( item => {
        item.addEventListener('click', () => {
            sideItems.forEach(item => item.classList.remove('active'));
            item.classList.add('active');
        });
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
    }, { threshold: 0.4 });
    
    projectBlock.forEach(item => observer.observe(item));
    aboutCard.forEach(item => observer.observe(item));
}

function loadingAnimation() {
    window.addEventListener("load", () => {
      const loader = document.getElementById("loading-animation");
      loader.classList.add("hidden"); // fade out once page loads
    });
}

loadingAnimation();
expandSideBar();
activeSideItem();
slideUpBlock();