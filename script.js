let searchInput = document.getElementById("search-bar-text");
let searchResults = document.getElementById("search-results");
let clearButton = document.getElementById("clear-button");

function clearButtonFn() {
    searchInput.value = "";
    searchInputFn(); // delegate, we need to use that still, lol.
}

function searchInputFn() {
    let prefix = searchInput.value; // stub added for future usage when the page actually does something lol.

    // add the search input clear.
    if (prefix.trim().length !== 0) {
        clearButton.style.display = "block";

        // let's actually show the searching action.
        searchResults.style.display = "flex";
    } else {
        clearButton.style.display = "none";

        // hide it.
        searchResults.style.display = "none";
    }

}