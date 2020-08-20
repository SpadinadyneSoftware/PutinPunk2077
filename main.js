// Unmute the video on startup (autoplay requires mute)
function playVideo() {

    // Hide play button
    let playButton = document.getElementById("playButton");
    playButton.style.visibility = "hidden";

    // Display video and play on loop
    let vid = document.getElementById("yes");
    vid.style.visibility = "visible"
    vid.play();
}