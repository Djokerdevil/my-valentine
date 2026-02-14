// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// 1. Click Envelope to open
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// 2. Logic to make the NO button jump away (Updated for Phone)
// We use 'touchstart' because phones use touch, not a mouse!
noBtn.addEventListener("touchstart", (e) => {
    // Prevent the phone from doing its normal click thing
    e.preventDefault(); 

    // Calculate a random spot on your specific screen
    // We stay 100 pixels away from the edges so it doesn't get lost
    const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 100));

    // Move the button to that random spot
    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.transition = "all 0.2s ease";
});

// 3. Logic for when YES is clicked
yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";
    
    // Make sure this filename matches your sidebar exactly!
    catImg.src = "cat_dance.gif"; 

    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";
});
