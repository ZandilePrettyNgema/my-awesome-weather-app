function handleSearchInput(event) {
  event.preventDefault();
  let searchElement = document.querySelector("#city-name-input");
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = searchElement.value;
}
let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", handleSearchInput);
