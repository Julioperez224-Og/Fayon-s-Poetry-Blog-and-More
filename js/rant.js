import {UI, Rants} from "../js/class.js"
const container = document.querySelector(".container");
// const ingredientsContainer = document.querySelector(".ingredients-container");



const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "fk385vfbk6ky",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "RhGNAhQGPg_ksrvWby7cJQ0hB9kAsWdAFEoewqcGeZ4"
});



document.addEventListener("DOMContentLoaded", (e)=>{
  const ui = new UI(container);
  const rants = new Rants(client);
  
  rants.getRants().then(rants => {
    ui.postRants(rants)
    const btns = [...document.querySelectorAll(".rant-btn")]
    const closeBtns = [...document.querySelectorAll(".fa-window-close")]
    btns.forEach(btn => {
      btn.addEventListener("click", (e)=>{
      e.target.previousElementSibling.classList.toggle("display");
      e.target.previousElementSibling.previousElementSibling.classList.toggle("displayNone")
        })
    })
    

    closeBtns.forEach(btn => {
        btn.addEventListener("click", (e)=>{
            e.target.parentElement.classList.toggle("display")
            e.target.parentElement.previousElementSibling.classList.toggletoggle("displayNone")

        })
    })


  })

})