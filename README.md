
<!--
Location: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Angular Pokemon App

![poke gif](https://camo.githubusercontent.com/fdf293450eaa67ea9ab6b5e429a51f506fa2eb28/687474703a2f2f7061312e6e61727669692e636f6d2f353831362f616430323066386337393232326163656236376139306363653531613931303362633539313165635f68712e676966)
### What are the objectives?
<!-- specific/measurable goal for students to achieve -->
*After this training, developers will be able to:*

- set up an angular app.
- use `$http` to access a RESTful API.
- practice routing in Angular using `ngRoute`.


Deliberate practice is a really effective way to build skills. You've learned about a lot of key pieces of an Angular app, and now it's time to put those pieces together, again.  You'll be expected to be able to build an Angular app from scratch.

### Overview

In this lab, you'll be creating a simple pokemon tracker app to keep track of pokemons.

When a user goes to `/`, they should see a list of all of the pokemons in the API. When a user goes to `/pokemons/:id`, they should see a single pokemon. On the `/pokemons/:id` page, a user should be able to edit or delete a pokemon.

Your data (a list of pokemons) is available at `https://super-crud.herokuapp.com/pokemon`. You and your classmates will all be working with the shared API; keep that in mind as you make changes.  If there are no pokemons left or far too many pokemons, feel free to reset the database by clicking [the reset button](http://super-crud.herokuapp.com/reset). Don't do this without warning your classmates over Slack, though. They might be puzzled why their newly created pokemon resources aren't appearing in the database.

### Expectations

Your finished product will:

  1. Route the user to an index page at `/`. That page will:
    * display all of the pokemons.
    * show the image, name, pokedex number, and "evolves from" of each pokemon.
    * include a link to the show pokemon page on the name of each pokemon.
  2. Route the use to a show pokemon page at `/pokemons/:id` for any existing pokemon id. The show page will:
    * display all of the data about the specific pokemon.
    * have a delete button that deletes the specific pokemon from the database and, when successfully deleted, redirects the user to the home page.
    * have an edit button that reveals a form for the user to edit the attributes of the pokemon.
    * The form will have a save button that sends the edits to the database and, when successfully updated, redirects the user to the home page.
    * have a cancel button that does not save any of the changes the user just made.

### This Repo's Structure

There are two branches in this repo that you might want to pay attention to: `master`and `solutions`.

The `master` branch has these instructions, with no starter code. As you start building, you'll want to reference your previous Angular projects to make sure you're setting up your app correctly.

The `solutions` branch has a fully built-out application that meets all the expectations above. Reference it if you're really stuck, but remember you may have your app set up differently!

**You can work directly from the `master` branch or create another branch for your work!**

### Getting Started

1. Fork and clone this repo.
2. Change directories into `angular-pokemon`.
3. Start creating the files you need for your project! (`index.html` and `app.js` are safe bets to start.)
4. Install `budo`, which you'll use to run a simple server for this project:`npm install -g budo`
5. Run `budo -P --host=localhost --open` from the Terminal (inside your project directory). This starts a simple server that by default will serve up your `index.html` on `/` and any route it doesn't recognize (like `/pokemons`).  Note: Your `index.html` *must* be in your main project directory for this server setup.

### Tips

* Commit frequently!
* Once you add client-side routing,  Angular will need to be served from a server. Make sure you're running `budo`, and that the URL you're looking at starts with `localhost`, NOT `file://`.
* The pokemons api is set up with RESTful routes, so follow RESTful routing conventions.  You can test endpoints with Postman or cURL, or by setting up a simple request to trigger them.
* Look at (`console.log`) the data you get back from each `$http` request!

### Hints

This is what your directory structure should look like. (It's okay if it's not exactly like this, but this is a structure that makes a lot of sense.)

```
.
├── README.md
├── index.html  // IMPORTANT
├── public
│   ├── images
│   │   └── logo.jpg
│   ├── scripts
│   │   app.js
│   │   └── controllers
│   │       ├── PokemonsIndexController.js
│   │       └── PokemonsController.js
│   └── styles
│       └── styles.css
└── templates
│   └── pokemons
│       ├── index.html
│       └── show.html
```

Here's a hint on how to change the page url from within a controller. (You don't necessarily need to do this, depending on your solution.)

Inject the [`$location`](https://docs.angularjs.org/api/ng/service/$location) service, and use its `path` method.

```js  
// inside PokemonShowController, we want to send the user back to pokemon index (home page) automatically
$location.path('/');
```


Here is a hint on the format of template URLs when using local HTML files.
    Give the full file name: `/templates/pokemon/show.html`.


### Stretch Challenges
1. **Push** this to Amazon AWS and monetize traffic to make millions of dollars.
2. **Allow the user to edit the pokemon image:** allow the user to change the URL for the pokemon image.
3. **Add filters to organize the pokemons index page:** add a search bar to filter the pokemons by your search, or buttons to sort them  by pokedex number or pokemon name.
