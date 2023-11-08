const music_list = [
    {
        img: "img/USB.jfif",
        name: "USB",
        artist: "17 SEVENTEEN, PINQ",
        audio: "audio/17_SEVENTEEN_PINQ_-_USB_(musmore.com).mp3"
    },
    {
        img: "img/Kyuseishu.jfif",
        name: "Kyuseishu",
        artist: "Tsukuyomi",
        audio: "audio/Kyuuseishu-[HiyoriOST].mp3"
    },
    {
        img: "img/Lezvi9.jpg",
        name: "Острые лезвия",
        artist: "Билборды",
        audio: "audio/bilbordy_-_Ostrye_lezviya_(musmore.com).mp3"
    },
    {
        img: "img/carton.png",
        name: "Cartoon",
        artist: "On & On",
        audio: "audio/Cartoon On .mp3"
    },
    {
        img: "img/StyxHelix.jfif",
        name: "STYX HELIX",
        artist: "MYTH & ROID",
        audio: "audio/MYTHROIDSTYXHELIX_(radiodiva.ru).mp3"
    },
    {
        img: "img/SUNDER.jpg",
        name: "Sunder",
        artist: "Shadowraze",
        audio: "audio/shadowrazesunder.mp3"
    },
    {
        img: "img/SHADOWFIEND.png",
        name: "Shadowfiend",
        artist: "Shadowraze",
        audio: "audio/shadowrazeshadowfiend.mp3"
    },
    {
        img: "img/MANABREAK.png",
        name: "Mana break",
        artist: "zxcursed",
        audio: "audio/zxcursedmanabreak.mp3"
    },
];

const player = document.querySelector('.player');
const albumCover = player.querySelector('.album-cover img');
const trackName = player.querySelector('.track-name');
const artistName = player.querySelector('.artist-name');
const audioPlayer = new Audio();
const playButton = player.querySelector('.play-button');
const nextButton = player.querySelector('.next-button');
const prevButton = player.querySelector('.prev-button');
const volumeSlider = player.querySelector('.volume-slider');
const seekBar = player.querySelector('.seek-bar');
const currentTime = player.querySelector('.current-time');
const totalTime = player.querySelector('.total-time');

let currentTrackIndex = 0;

function loadTrack(index) {
    const track = music_list[index];
    albumCover.src = track.img;
    trackName.textContent = track.name;
    artistName.textContent = track.artist;
    audioPlayer.src = track.audio;
    audioPlayer.load();
}

function updateSeekBar() {
    seekBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    currentTime.textContent = formatTime(audioPlayer.currentTime);
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateVolumeSlider() {
    volumeSlider.value = audioPlayer.volume * 100;
}

audioPlayer.addEventListener('timeupdate', updateSeekBar);

playButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.src = 'ico/pause.svg'; // изменяем src атрибут кнопки на иконку паузы
    } else {
        audioPlayer.pause();
        playButton.src = 'ico/play.svg'; // изменяем src атрибут кнопки на иконку play
    }
});

nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % music_list.length;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
    playButton.imgContent = 'ico/play.svg';
});

prevButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + music_list.length) % music_list.length;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
    playButton.imgContent = 'ico/pause.svg';
});

// Внутри события input слайдера громкости
volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value / 100;
});

// Внутри события изменения громкости аудиоплеера (например, в ответ на нажатие кнопок управления громкостью)
audioPlayer.addEventListener('volumechange', updateVolumeSlider);

// Внутри события загрузки трека
audioPlayer.addEventListener('loadedmetadata', updateVolumeSlider);

// Убедитесь, что начальное значение слайдера устанавливается после загрузки трека
audioPlayer.addEventListener('loadedmetadata', () => {
    updateVolumeSlider();
});

seekBar.addEventListener('input', () => {
    const seekTime = (seekBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
});

audioPlayer.addEventListener('ended', () => {
    // Автоматически переключаемся на следующий трек по завершению текущего
    nextButton.click();
});

audioPlayer.addEventListener('loadedmetadata', () => {
    totalTime.textContent = formatTime(audioPlayer.duration);
});

audioPlayer.volume = 0.2; // Установите начальное значение громкости по вашему выбору (от 0 до 1)

loadTrack(currentTrackIndex);