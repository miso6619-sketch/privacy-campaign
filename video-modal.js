const openVideo = document.getElementById('openVideo');
const openVideoMain = document.getElementById('openVideoMain');
const videoModal = document.getElementById('videoModal');
const closeVideo = document.getElementById('closeVideo');
const closeVideoBtn = document.getElementById('closeVideoBtn');
const campaignVideo = document.getElementById('campaignVideo');

openVideo.addEventListener('click', function () {
    videoModal.style.display = 'block';
});

openVideoMain.addEventListener('click', function () {
    videoModal.style.display = 'block';
});

closeVideo.addEventListener('click', function () {
    videoModal.style.display = 'none';
    campaignVideo.pause();
});

closeVideoBtn.addEventListener('click', function () {
    videoModal.style.display = 'none';
    campaignVideo.pause();
});