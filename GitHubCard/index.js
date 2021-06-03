import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get(`https://api.github.com/users/${users}`)
.then(res => {
  console.log(res.data)
  
})

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
   Using DOM methods and properties, create and return the following markup:*/

const cards = document.querySelector("div.cards");
function cardMaker({ avatar_url, name, login, location, html_url, followers, following, bio }) {
  const card = document.createElement("div");
  const image = document.createElement("img");
  const cardInfo = document.createElement("div");
  const cardName = document.createElement("h3");
  const uName = document.createElement("p");
  const uLocation = document.createElement("p");
  const profile = document.createElement("p");
  const address = document.createElementNS("a");
  const cardFollow = document.createElement("p");
  const cardFollowing = document.createElement("p");
  const cardBio = document.createElement("p");
  
  image.src = avatar_url
  cardName.textContent = name
  uName.textContent = login
  uLocation.textContent = locaion

  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(uName);
  cardInfo.appendChild(uLocation);
  cardInfo.appendChild(profile);
  profile.appendChild(address);
  cardInfo.appendChild(cardFollow);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);

  card.classList.add("card");
  card.classList.add("card-info");
  cardInfo.classList.add("name");
  cardInfo.classList.add("username");
return card;
}

cards.appendChild(cardMaker({avatar_url, name, login, location, html_url, followers, following, bio}))

/*<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
