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

expandSideBar();
activeSideItem();