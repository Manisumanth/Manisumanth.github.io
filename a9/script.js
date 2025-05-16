let listItems = ["Apple", "Orange", "Mango", "Banana"];
let str = "";

listItems.map((value) => {
  str += `<li>${value}</li>`;
});
dvVeg.innerHTML = str;

function filterList() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const list = document.querySelectorAll("#dvVeg li");

  list.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(input) ? "list-item" : "none";
  });
}