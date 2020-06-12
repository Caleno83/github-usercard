/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// set up a GET request

axios.

get('https://api.github.com/users/Caleno83')


.then((res) => {
  console.log('This is the response : ', res);
  const response = res.data
  cards.appendChild(mainProfileCard(response))
})

.catch((err) => {
  console.log('The error is :', err);
});
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
const cards = document.querySelector('.cards');
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [ "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

//Set up Get request for followers 


followersArray.forEach(element => {

  axios
  
  .get(`https://api.github.com/users/${element}`)
  
  .then((res) => {
    console.log('This is the response : ', res);
    const response = res.data
    cards.appendChild(mainProfileCard(response))
  })
  
  .catch((err) => {

    console.log('The error is :', err)
  })
})

console.log(followersArray)







/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
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

function mainProfileCard (obj) {

  //creating elements
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const nameTitle = document.createElement('h3');
  const usernamePara = document.createElement('p');
  const locationPara = document.createElement('p')
  const profilePara = document.createElement('p');
  const profileAnchor = document.createElement('a');
  const followersPara = document.createElement('p');
  const followingPara = document.createElement('p');
  const bioPara = document.createElement('p');

  //adding classes to elements

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  nameTitle.classList.add('name');
  usernamePara.classList.add('username');

  //adding parent element to child elements
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(nameTitle);
  cardInfo.appendChild(usernamePara);
  cardInfo.appendChild(locationPara);
  cardInfo.appendChild(profilePara);
  profilePara.appendChild(profileAnchor);
  cardInfo.appendChild(followersPara);
  cardInfo.appendChild(followingPara);
  cardInfo.appendChild(bioPara);

  img.src =  obj.avatar_url;
  nameTitle.textContent = obj.name;
  usernamePara.textContent = `Username : ${obj.login}`;
  locationPara.textContent = obj.location;
  profileAnchor.textContent = `Website : ${obj.html_url}`;
  followersPara.textContent = `Followers : ${obj.followers}`;
  followingPara.textContent = `Following : ${obj.following}`;
  bioPara.textContent = obj.bio;

  return card

};

// console.log to check structure of html
//console.log(mainProfileCard())
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
