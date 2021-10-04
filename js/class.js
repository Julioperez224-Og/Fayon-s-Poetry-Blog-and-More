

export class Recipes{
  constructor(client){
    this.client = client
  }
  async getRecipes(){
    try{
      let contentful = await this.client.getEntries({
        content_type: "faRecipes"
      })

      let recipes = contentful.items;
      console.log(recipes)
      recipes = recipes.map(item =>{
        const {title,description,instructions,ingredients,calories,serves} = item.fields;
        const {id} = item.sys;
        const image = item.fields.image.fields.file.url
        
        return {title,description,instructions,ingredients,id,image,calories,serves} 
      })

      console.log(recipes)
      return recipes

    } catch(error){
      console.log(error)
    }
  }
}


export class Poetry {
  constructor(client){
    this.client = client
  }
  async getPoems(){
    try{
      let contentful = await this.client.getEntries({
        content_type: "faPoetry"
      })

      let poems = contentful.items;
      console.log(poems)
      poems = poems.map(item =>{
        const {title,poem,author} = item.fields;
        const {id,createdAt} = item.sys;
        const year = createdAt.substr(0,4);
        const month = createdAt.substr(5,5);
        const date = `${month}-${year}`
        return {title,poem,id,author,date,author}
      })

      return poems

    } catch(error){
      console.log(error)
    }
  }
  
  
  removePoem(id,container){
      poems = poems.filter(poem => poem.id != id);
    for(let i = 0; i < container.children.length; i++){
      if(container.children[i].getAttribute("data-id") == id){
        container.removeChild(container.children[i])
      }
    }
    }
}

export class Story{
  constructor(client){
    this.client = client
  }

  async getStories(){
    try{
      let contentful = await this.client.getEntries({
        content_type: "faStories"
      })

      let stories = contentful.items;
      stories = stories.map(item =>{
        const {title,story,author,synopsis} = item.fields;
        const {id,createdAt} = item.sys;
        
        return {title,story, synopsis,author,id,createdAt}
      })

      return stories

    } catch(error){
      console.log(error)
    }
  }
  
}

export class Rants{
  constructor(client){
    this.client = client
  }

  async getRants(){
    try{
      let contentful = await this.client.getEntries({
        content_type: "faFireSideRants"
      })

      let rants = contentful.items;
      rants = rants.map(item =>{
        const {title,rant,synopsis} = item.fields;
        const {id,createdAt} = item.sys;
        
        return {title,rant, synopsis,id,createdAt}
      })

      return rants

    } catch(error){
      console.log(error)
    }
  }
  
}


export class UI {
  constructor(container){
    this.container = container
  }
  postPoems(poems){
    poems.forEach(poem =>{
      this.container.innerHTML += `<div class="poem-container" data-id="${poem.id}">
    <h2 class="title">${poem.title}</h2>
  <div class="metadata">
    <h3 class="author">by <span>${poem.author}</span></h3>
    <h3>${poem.date}</h3>
   </div>
    <p class="poem">${poem.poem}</p>
    </div>`
    })
  }

  postRecipes(recipes){
    recipes.forEach(recipe =>{
      let ingredients = recipe.ingredients;
      let output = "";
      output += `<div class="recipe" data-id=${recipe.id}>
        <img src=${recipe.image} alt="">
        <h2>${recipe.title}</h2>
        
        <p class="description">${recipe.description}</p>
        <div class="modal">
            <div class="meta-data">
                <div class="calories">Calories: ${recipe.calories}</div>
                <div class="serving-size">Serves: ${recipe.serves}</div>
            </div> 
            <ul class="ingredients-container"> <strong class="ingredients-span">Ingredients</strong>:`
            
        ingredients.forEach(ingredient=>{
        output += `<li>${ingredient}</li>`
      })
            

        output += `</ul>
            <div class="instructions"><strong>Instructions: </strong></br><span>${recipe.instructions}</span></div>
        </div>
        <a data-id=${recipe.id} class="recipe-btn">Recipe</a>
    </div>`

    this.container.innerHTML += output;
  })
  }


  postStories(stories){
    stories.forEach(story =>{
      this.container.innerHTML += `<div class="story">
            <h1>${story.title}</h1>
            <div class="meta-data">
                <h3 class="author">${story.author}</h3>
            </div>

            <div class="synopsis">${story.synopsis}</div>
        <p class="story-p"><i class="fas fa-window-close"></i>${story.story}</p>

            <button class="story-btn">Read Story</button>
        </div>`
  })
  }

   postRants(rants){
    rants.forEach(rant =>{
      this.container.innerHTML += `<div class="story">
            <h1>${rant.title}</h1>

            <div class="synopsis">${rant.synopsis}</div>
        <p class="story-p"><i class="fas fa-window-close"></i>${rant.rant}</p>

            <button class="rant-btn">Read Rant</button>
        </div>`
  })
  }
}
