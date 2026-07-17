const hero = document.querySelector(".hero");
const card = document.querySelector(".card");

card.style.display = "none";

setTimeout(() => {
    hero.style.opacity = "0";

    setTimeout(() => {
        hero.style.display = "none";
        card.style.display = "block";
    }, 2000);

}, 2500);
