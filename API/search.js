// An array of products
const products = [
    { name: "Product 1", category: "Category A" },
    { name: "Product 2", category: "Category B" },
    { name: "Product 3", category: "Category A" },
    { name: "Product 4", category: "Category C" }
  ];
  
  // The search form
  const form = document.querySelector("form");
  
  // The search input field
  const searchInput = document.querySelector("input[type='text']");
  
  // The container for the search results
  const resultsContainer = document.querySelector(".results");
  
  // Handle the form submit event
  form.addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get the search query
    const query = searchInput.value;
  
    // Filter the products to find the matching ones
    const matchingProducts = products.filter(function(product) {
      return product.name.toLowerCase().includes(query.toLowerCase());
    });
  
    // Clear the previous results
    resultsContainer.innerHTML = "";
  
    // Render the matching products
    for (const product of matchingProducts) {
      const productElement = document.createElement("div");
      productElement.innerHTML = `<h3>${product.name}</h3><p>${product.category}</p>`;
      resultsContainer.appendChild(productElement);
    }
  });
  