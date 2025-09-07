function sideBar() {
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

sideBar();