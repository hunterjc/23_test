import data from "./data.js";

const contentContainer = document.querySelector(".content");

const renderContent = () => {
  let innerHtml = "";
  data.forEach((obj) => {
    innerHtml += `
    <div class="col-md-4">
    <div class="card h-100">
        <div class="card-body">
            <h2 class="card-title">${obj.Name}</h2>
            <p class="card-footer">${obj.ShortDesc}</p>
        </div>
    </div>
    </div>    
    
    `;
  });
  contentContainer.innerHTML = innerHtml;
};

renderContent();
