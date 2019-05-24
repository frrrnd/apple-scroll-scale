var s = skrollr.init({
    forceHeight: false,
    smoothScrolling: true
});


fetch('video.mp4')
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  
  const videos = document.getElementsByTagName("video")

    for (video of videos) {
        video.src = objectURL
        video.play()
    }
});