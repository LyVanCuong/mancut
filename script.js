const hearts = document.getElementById("hearts");
const runnerWrapper = document.getElementById("runnerWrapper");
const loveText = document.getElementById("loveText");
const colors = ["#ff2e63","#08d9d6","#f9ed69","#f08a5d","#b83b5e","#6a2c70","#ff5c93"];

/* tạo tim nền liên tục */
function createHeart() {
  const heart = document.createElement("span");
  heart.textContent = "❤";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = 10 + Math.random() * 20 + "px";
  heart.style.color = colors[Math.floor(Math.random()*colors.length)];
  heart.style.animationDuration = (3 + Math.random() * 5) + "s";
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 300);

/* khi runner chạm target */
runnerWrapper.addEventListener("animationend", () => {
  loveText.style.opacity = 1;

  for (let i = 0; i < 50; i++) {
    setTimeout(createHeart, i * 100);
  }
});
