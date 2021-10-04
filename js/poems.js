import {UI, Poetry} from "../js/class.js"
const container = document.querySelector(".container");


const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "fk385vfbk6ky",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "RhGNAhQGPg_ksrvWby7cJQ0hB9kAsWdAFEoewqcGeZ4"
});


document.addEventListener("DOMContentLoaded", (e)=>{
  const ui = new UI(container);
  const poems = new Poetry(client);
  
  poems.getPoems().then(poems => {
    ui.postPoems(poems)
  })
})