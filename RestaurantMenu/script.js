//<div class="menu_item">
//  <div class="image">
//    <img
//      src="./images/biriyani.jpg"
//      height="100px"
//      width="100px"
//      alt="item_image"
//    />
//  </div>
//  <div class="details">
//    <div class="name_price">
//      <div class="name">Biriyani</div>
//      <div class="price">$16.99</div>
//    </div>
//    <div class="description">
//      Biriyani is a fantastic dish and everyone loves it.
//    </div>
//  </div>
//</div>
const itemsEle = document.getElementsByClassName("menu_items")[0];

items.forEach((item) => {
  const child = document.createElement("div");
  child.classList.add("menu_item");
  child.innerHTML = `
   <div class="image">
     <img
       src="${item[4]}"
       height="100px"
       width="100px"
       alt="item_image"
     />
   </div>
   <div class="details">
     <div class="name_price">
       <div class="name">${item[1]}</div>
       <div class="price">$${item[2]}</div>
     </div>
     <div class="description">
       ${item[3]}
     </div>
   </div>`;
  itemsEle.appendChild(child);
});
