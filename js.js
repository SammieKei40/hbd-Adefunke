(function () {
  var loader = document.getElementById("preloader");
  var song = document.querySelector("#audio");
  var iconHolder = document.getElementById("start");

  function hideLoader() {
    setTimeout(function () {
      loader.classList.add("fade-out");
      confetti.stop();
    }, 3000);
  }

  iconHolder.addEventListener("click", function () {
    if (!song.paused) {
      song.pause();
      iconHolder.innerHTML = `<i class="fa fa-play"></i> &nbsp; Play music`;
    } else {
      song.play();
      iconHolder.innerHTML = `<i class="fa fa-pause"></i> &nbsp; Pause music`;
    }
  });
  var mute = true;
  document.body.addEventListener("mouseover", e => {
    if (mute) {
      song.play();
      mute = false;
    }
  });
  
  window.onload = function () {
    confetti.start();

    // iconHolder.innerHTML = `<i class="fa fa-pause"></i> &nbsp; Pause music`;
    hideLoader();
  };
})();