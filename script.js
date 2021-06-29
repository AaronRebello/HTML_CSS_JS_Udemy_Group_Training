
// drag drop

function drag(e) {
  e.dataTransfer.setData("Text", e.target.id);

}

function allowDrop(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  dragItem = e.dataTransfer.getData("Text");
  e.target.appendChild(document.getElementById(dragItem))

}



// video Controls

let vid = document.getElementById("video")

function playVideo() {
  vid.play()
}

function pauseVideo() {
  vid.pause()
}

function setDuration() {
  document.getElementById("total_time").innerHTML = Math.round(vid.duration);
}

function setCurrentTime() {
  document.getElementById("current_time").innerHTML = Math.round(vid.currentTime);
}

function stopVideo() {
  vid.pause();
  vid.currentTime = 0;
}

function forwardVideo() {
  vid.currentTime++;
}

function reverceVideo() {
  vid.currentTime--;
}

// audio controls

let aud = document.getElementById('audio')

function upVol() {
  aud.pause()
}


// async await ***************************


promiseTimeout = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })

}

const run = async () => {
  document.getElementById('start').innerHTML = ("start!!")
  await promiseTimeout(3000);
  document.getElementById('stop').innerHTML = ("stop!!")
}
run();

// ***************promise***********

fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(data => {
    document.querySelector('#h6_id').innerHTML = data[0].id
    document.querySelector('#h5_id').innerHTML = data[0].title
    document.querySelector('#img_id').src = data[0].url
    document.querySelector('#img2_id').src = data[0].thumbnailUrl
  })
  .catch((err) => { console.log(err) })

// **********************Callbacks

var xLoc = 0;

window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
})();

function animate() {
  var canvas = document.getElementById("testCanvas")
  var context = canvas.getContext("2d");

  context.clearRect(0, 0, canvas.width, canvas.height);

  xLoc++;
  context.beginPath();
  context.rect(xLoc, 0, 100, 100);
  context.fillStyle = "blue"
  context.fill()

  requestAnimFrame(function () {
    animate();
  })
}

window.onload = function () {
  animate();
}
