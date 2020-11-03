const buttons = document.querySelectorAll(".menu__link");

console.log("lol");

buttons.forEach(button => {
  let audio = document.getElementById("click");
  var sound = new Audio();
  sound.src = "https://soundbible.com/grab.php?id=1705&type=mp3";
  button.addEventListener("focus", () => {
    sound.play();
  });
});
