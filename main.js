// Defining text characters for the empty and full hearts
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// get the elements where event happens
const likeGlyphs = document.querySelectorAll(".like-glyph");

// get the element where the error modal is
const h2Hidden = document.querySelector(".hidden");

function likeCallback(e) {

  // get the target where event happens
  const likeGlyph = e.target;

  // simulate making a server request
  mimicServerCall()
    .then(function(serverMessage){
      
      alert("You notified the server!");
      alert(serverMessage);

      if (likeGlyph.innerText === EMPTY_HEART) {
        likeGlyph.innerText =  FULL_HEART

        // likeGlyph.style.color = "red"
        likeGlyph.classList.add("activated-heart")
        
      } else {
        likeGlyph.innerText =  EMPTY_HEART

        // likeGlyph.style.color = ""
        likeGlyph.classList.remove("activated-heart")
      }

    })
    .catch(function(error) {
      alert("Something went wrong!");
      alert(error);

      // show the error modal
      h2Hidden.classList.remove("hidden");

      // hide the error modal afte 3 seconds
      setTimeout(function() {
        document.querySelector('h2').classList.add("hidden")
      }, 3000)

    });
}

// Iterate over the elements where event happens
for (const glyph of likeGlyphs) {
  glyph.addEventListener("click", likeCallback);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
