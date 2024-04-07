"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}



/** When a user first logins in, update the navbar to reflect that. (Show nav links when logged in) */
function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

// ***********************************************************************************************************************************************************

//show submit story form when user click submit in nav
function navSubmitClick(evt) {
  console.debug("navSubmitStoryClick", evt);
  hidePageComponents();
  $allStoriesList.show();
  $submitForm.show();
}
// adding click event to submit in form
$navSubmit.on('click', navSubmitClick);

// when user clicks favorites in nav
function navFavoritesClick() {
  // console.debug("navFavoritesClick", evt);
  hidePageComponents(); // hide everything from the page
  putFavoritesListOnPage();// making the favorite stories </ol> visible

}

$navFavorite.on('click',navFavoritesClick );

// when user click my stories 
function navMyStoriesCLick(){
  hidePageComponents(); // hide everything from the page
  putMyStoriesListOnPage(); // call this function to only show user's stories
  $ownStories.show(); // making the my-stories </ol> visible

}
// adding click event to the my story in the nav
$navMyStories.on("click", navMyStoriesCLick);
