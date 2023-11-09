const categoriesList = document.getElementById("categories");

const categoryItems = categoriesList.querySelectorAll("li.item");

const numberOfCategories = categoryItems.length;
console.log(`Number of categories: ${numberOfCategories}`);

categoryItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector("h2").textContent;

  const elementsInCategory = categoryItem.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log("Elements:", elementsInCategory);
});
