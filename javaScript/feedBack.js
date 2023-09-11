const ratingEle = document.querySelectorAll(".rating");
const btn = document.querySelector("#btn");
const containerEl = document.querySelector("#container");
let selectedRating = "";
ratingEle.forEach((e) => {
  e.addEventListener("click", (event) => {
    removeEle();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});
btn.addEventListener("click", (e) => {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
    <strong> Tank You for Your Feedback! </strong>
    <br>
    <br>
    <strong> FeedBack: ${selectedRating} </strong>
    <br>
    <br>
    <p> we use this feedback to improve our customer support. </p>

    `;
  }
});
function removeEle() {
  ratingEle.forEach((element) => {
    element.classList.remove("active");
  });
}
