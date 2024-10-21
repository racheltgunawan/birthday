// JavaScript functionality
document.getElementById('playButton').addEventListener('click', function() {
    const video = document.getElementById('myVideo');
    const letter = document.getElementById('letter');

    // Show the video
    video.style.display = 'block';

    // Play the video
    video.play();

    // Hide the button after the video starts playing
    this.style.display = 'none';

    // When the video ends, display the letter image
    video.addEventListener('ended', function() {
        letter.style.display = 'block'; // Show the letter after the video ends
    });
});