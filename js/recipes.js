import {UI, Recipes} from "../js/class.js"
const container = document.querySelector(".recipes-container");
// const ingredientsContainer = document.querySelector(".ingredients-container");



const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "fk385vfbk6ky",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "RhGNAhQGPg_ksrvWby7cJQ0hB9kAsWdAFEoewqcGeZ4"
});


document.addEventListener("DOMContentLoaded", (e)=>{
  const ui = new UI(container);
  const recipes = new Recipes(client);
  
  recipes.getRecipes().then(recipes => {
    ui.postRecipes(recipes)
    const btns = [...document.querySelectorAll(".recipe-btn")]

    btns.forEach(btn => {
      btn.addEventListener("click", (e)=>{
      e.target.previousElementSibling.classList.toggle("display");
      e.target.previousElementSibling.previousElementSibling.classList.toggle("displayNone")
      
      
    })
    })
    
  })

})