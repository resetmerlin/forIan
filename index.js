const changeLoadingText = document.querySelector(".loading");
changeLoadingText.addEventListener("mouseover", (event) => {
  event.target.innerHTML = "Start now";
  event.target.style = "color:white";
});

changeLoadingText.addEventListener("mouseout", (event) => {
  event.target.innerHTML = "loading...";
  event.target.style = "color:grey";
});
