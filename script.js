const menu = document.getElementById ("menu");
const action = document.getElementById ("actions");

menu.addEventListener("click", () => {
    hundleMneu();
});

function hundleMneu() {
    menu.classList.toggle( "is-active" );
    action.classList.toggle( "is-active" );
}

const scrollUpBtn = document.getElementById("scrollUpBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
};

scrollUpBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};