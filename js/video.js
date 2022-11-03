var video;
var muted = false;


window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false
	video.loop = false
	console.log(video.autoplay)
	console.log(video.loop)

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	video.volume = document.querySelector("#slider").value / 100
	console.log(video.volume)


	// DOUBLE CHECK
	video.loop = true;
	// video.autoplay = true;
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
})

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log(video.playbackRate)
})

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.9;
	console.log(video.playbackRate)
})

document.querySelector("#skip").addEventListener("click", function() {
	console.log(video.currentTime)
	video.currentTime += 10
	if (video.onended) {
		video.currentTime = 0
	}
	console.log(video.currentTime)
})

document.querySelector("#mute").addEventListener("click", function() {
	console.log("clicked")
	if (!video.muted) {
		video.muted = true;
		this.innerHTML = "Unmute"
	} else {
		video.muted = false;
		this.innerHTML = "Mute"
	}
	console.log(video.volume)
})

document.querySelector("#slider").addEventListener("change", function() {
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%"
})

document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "oldSchool"
})

document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video"
})