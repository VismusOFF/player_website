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

let musicDiv = document.getElementById("musicDiv");
music_list.forEach(function(item, index) {
    let musicRow = document.createElement('div');
    musicRow.className = 'musicRow';

    let numDiv = document.createElement('div');
    numDiv.className = 'column';
    numDiv.textContent = index + 1;

    let coverDiv = document.createElement('div');
    coverDiv.className = 'column covers';
    let img = document.createElement('img');
    img.src = item.img;
    coverDiv.appendChild(img);

    let trackDiv = document.createElement('div');
    trackDiv.className = 'column';
    trackDiv.textContent = item.name + ', ' + item.artist;

    let durationDiv = document.createElement('div');
    durationDiv.className = 'column';
    let audio = document.createElement('audio');
    audio.src = item.audio;
    audio.controls = true;
    durationDiv.appendChild(audio);

    musicRow.append(numDiv, coverDiv, trackDiv, durationDiv);

    musicDiv.appendChild(musicRow);
});