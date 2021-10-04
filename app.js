import {UI, Poetry} from "./js/class.js"
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "fk385vfbk6ky",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "RhGNAhQGPg_ksrvWby7cJQ0hB9kAsWdAFEoewqcGeZ4"
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
// client
//   .getEntries({
//       content_type: "faRecipes"
//   })
//   .then(entry => console.log(entry))
//   .catch(err => console.log(err));

const burger = document.querySelector("#burger");
const close = document.querySelector("#close");
const nav = document.querySelector("nav");


burger.addEventListener("click", (e)=>{
  burger.classList.toggle("visibility");
  nav.classList.toggle("slideIn");
})


close.addEventListener("click", (e)=>{
  burger.classList.toggle("visibility");
  nav.classList.toggle("slideIn");
})




// newPoems.removePoem(0,container)