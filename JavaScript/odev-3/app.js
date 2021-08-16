// function createNewMenuItem(item) {
//   var menuItem = document.createElement('li');
//   menuItem.classList.add("menu-items", "col-lg-6", "col-sm-12")

//   menuItem.innerHTML = `
        
// `;
//   return menuItem;
// }

// (function() {
//   var menuList = document.getElementById('menuList');
//   menu.forEach((item) => {
//     menuList.appendChild(createNewMenuItem(item));
//   })
// })();


const menuList = document.getElementById("menuList");
const buttonContainer = document.getElementById("btn-container")

// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});


function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `
      <div class="menu-items col-lg-6 col-sm-12">
        <img src="${item.img}" alt="${item.title}" class="photo">
        <div class="menu-info">
          <div class="menu-title">
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </div>
          <div class="menu-text">
            ${item.desc}
          </div>
        </div>
      </div>
    `
  });
  displayMenu = displayMenu.join("");
  menuList.innerHTML = displayMenu;
};


function displayMenuButtons() {
  const categories = menu.reduce((values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
  const categoryButtons = categories.map((category) => {
    return `
      <button id="filterButton" class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>
    `
  }).join("");
  buttonContainer.innerHTML = categoryButtons;
  const filterButtons = buttonContainer.querySelectorAll('#filterButton')

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem) => {
      if(menuItem.category === category) {
        return menuItem;
      }
    });
      if (category === "All") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
