// main.js - all the good shit happens here

// Set up Codemirror command window
let commandPrompt = CodeMirror.fromTextArea(document.getElementById("commandPrompt"),{
    lineNumbers : true,
    lineWrapping: true,
    theme: "darcula",
});

// Set line reader to matchCommand() function
commandPrompt.setOption("extraKeys",{
    Enter: function(cm){
        let line = commandPrompt.getLine(commandPrompt.lastLine());
        matchCommand(line);
    },
});

commandPrompt.setSize('100%', '100%');

// Parse commands typed in command window
function matchCommand(inputString) {
    if(inputString.toLowerCase() === "putin") {
        playVideo();
    }
}

// Unmute the video on startup (autoplay requires mute)
function playVideo() {

    // Hide play button
    let playButton = document.getElementById("playButton");
    playButton.style.visibility = "hidden";

    // Hide command window
    let commandWindow = commandPrompt.getWrapperElement();
    commandWindow.style.visibility = "hidden";

    // Display video and play on loop
    let vid = document.getElementById("yes");
    vid.style.visibility = "visible"
    vid.play();
}