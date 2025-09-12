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

    sideItems.forEach( item => {
        item.addEventListener('click', () => {
            sideItems.forEach(item => item.classList.remove('active'));
            item.classList.add('active');
        });
    });
}

function popUpProjects() {
    const block = document.querySelectorAll('.projects-block');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.2 });
    
    block.forEach(item => observer.observe(item));
}

expandSideBar();
activeSideItem();
popUpProjects();