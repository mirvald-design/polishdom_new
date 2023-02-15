const videos = document.querySelectorAll("video");

videos.forEach((video) => {
  video.addEventListener("click", function () {
    this.paused ? this.play() : this.pause();
  });
});
