const music = new Audio('vande.mp3');

// create Array 

const songs = [
    {
        id:'1',
        songName:` AAA <br>
        <div class="subtitle">ZZZ</div>`,
        poster: "img/1.jpg"
    },
    {
        id:'2',
        songName:` BBB<br>
        <div class="subtitle">YYYY</div>`,
        poster: "img/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `CCCC <br><div class="subtitle">WWW</div>`,
        poster: "img/3.jpg",
    },
    {
        id:"4",
        songName: `DDD <br><div class="subtitle">VVV</div>`,
        poster: "img/4.jpg",
    },
    {
        id:"5",
        songName: `EEE<br><div class="subtitle">UUU</div>`,
        poster: "img/5.jpg",
    },
    {
        id:"6",
        songName: `FFF <br><div class="subtitle">TTT</div>`,
        poster: "img/6.jpg",
    },
    {
        id:"7",
        songName: `GGG <br><div class="subtitle">SSS</div>`,
        poster: "img/7.jpg",
    },
    {
        id:"8",
        songName: `EEE <br><div class="subtitle">RRR</div>`,
        poster: "img/8.jpg",
    },
    {
        id:"9",
        songName: `FFF <br><div class="subtitle">QQQ</div>`,
        poster: "img/9.jpg",
    },
    {
        id:"10",
        songName: `GGG <br><div class="subtitle">OOO</div>`,
        poster: "img/10.jpg",
    },
    {
        id:"11",
        songName: `HHH <br><div class="subtitle">NNN</div>`,
        poster: "img/11.jpg",
    },
    {
        id:"12",
        songName: `III <br><div class="subtitle">III</div>`,
        poster: "img/12.jpg",
    },
    {
        id:"13",
        songName: `JJJ <br><div class="subtitle">MMM</div>`,
        poster: "img/13.jpg",
    },
    {
        id:"14",
        songName: `KKK<br><div class="subtitle">III</div>`,
        poster: "img/14.jpg",
    },
    {
        id:"15",
        songName: `MMM <br><div class="subtitle">ZZZ</div>`,
        poster: "img/15.jpg",
    },
    {
        id:'16',
        songName:` AAA <br>
        <div class="subtitle">BBBB</div>`,
        poster: "img/16.jpg"
    },
    {
        id:'17',
        songName:` BBB<br>
        <div class="subtitle">BBB</div>`,
        poster: "img/17.jpg"
    },
    // all object type 
    {
        id:"18",
        songName: `Cartoon - On & On <br><div class="subtitle"> Daniel Levi</div>`,
        poster: "img/18.jpg",
    },
    {
        id:"19",
        songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
        poster: "img/19.jpg",
    },
    {
        id:"20",
        songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
        poster: "img/20.jpg",
    },
    {
        id:"21",
        songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
        poster: "img/21.jpg",
    },
    {
        id:"22",
        songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
        poster: "img/22.jpg",
    },
    {
        id:"23",
        songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
        poster: "img/23.jpg",
    },
    {
        id:"24",
        songName: `FFF <br><div class="subtitle">QQQ</div>`,
        poster: "img/24.jpg",
    },
    {
        id:"25",
        songName: `GGG <br><div class="subtitle">OOO</div>`,
        poster: "img/25.jpg",
    },
    {
        id:"26",
        songName: `HHH <br><div class="subtitle">NNN</div>`,
        poster: "img/26.jpg",
    },
    {
        id:"27",
        songName: `III <br><div class="subtitle">III</div>`,
        poster: "img/27.jpg",
    },
    {
        id:"28",
        songName: `JJJ <br><div class="subtitle">MMM</div>`,
        poster: "img/28.jpg",
    },
    {
        id:"29",
        songName: `KKK<br><div class="subtitle">III</div>`,
        poster: "img/29.jpg",
    },
    {
        id:"30",
        songName: `MMM <br><div class="subtitle">ZZZ</div>`,
        poster: "img/30.jpg",
    },
// 
{
    id:'31',
    songName:` A <br>
    <div class="subtitle">B</div>`,
    poster: "img/31.jpg"
},
{
    id:'32',
    songName:` B<br>
    <div class="subtitle">B</div>`,
    poster: "img/32.jpg"
},
// all object type 
{
    id:"33",
    songName: `Cartoon - On & On <br><div class="subtitle"> Daniel Levi</div>`,
    poster: "img/33.jpg",
},
{
    id:"34",
    songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
    poster: "img/34.jpg",
},
{
    id:"35",
    songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
    poster: "img/35.jpg",
},
{
    id:"36",
    songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
    poster: "img/36.jpg",
},
{
    id:"37",
    songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
    poster: "img/37.jpg",
},
{
    id:"38",
    songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
    poster: "img/38.jpg",
},
{
    id:"39",
    songName: `FFF <br><div class="subtitle">QQQ</div>`,
    poster: "img/39.jpg",
},
{
    id:"40",
    songName: `GGG <br><div class="subtitle">OOO</div>`,
    poster: "img/40.jpg",
},
{
    id:"41",
    songName: `HHH <br><div class="subtitle">NNN</div>`,
    poster: "img/41.jpg",
},
{
    id:"42",
    songName: `III <br><div class="subtitle">III</div>`,
    poster: "img/42.jpg",
},
{
    id:"43",
    songName: `JJJ <br><div class="subtitle">MMM</div>`,
    poster: "img/43.jpg",
},
{
    id:"44",
    songName: `KKK<br><div class="subtitle">III</div>`,
    poster: "img/44.jpg",
},
{
    id:"45",
    songName: `MMM <br><div class="subtitle">ZZZ</div>`,
    poster: "img/45.jpg",
},
{
    id:'46',
    songName:` A <br>
    <div class="subtitle">B</div>`,
    poster: "img/46.jpg"
},
{
    id:'47',
    songName:` B<br>
    <div class="subtitle">B</div>`,
    poster: "img/47.jpg"
},
// all object type 
{
    id:"48",
    songName: `Cartoon - On & On <br><div class="subtitle"> Daniel Levi</div>`,
    poster: "img/48.jpg",
},
{
    id:"49",
    songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
    poster: "img/49.jpg",
},
{
    id:"50",
    songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
    poster: "img/50.jpg",
},
{
    id:"51",
    songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
    poster: "img/51.jpg",
},
{
    id:"52",
    songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
    poster: "img/52.jpg",
},
{
    id:"53",
    songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
    poster: "img/53.jpg",
},
{
    id:"54",
    songName: `FFF <br><div class="subtitle">QQQ</div>`,
    poster: "img/54.jpg",
},
{
    id:"55",
    songName: `GGG <br><div class="subtitle">OOO</div>`,
    poster: "img/55.jpg",
},
{
    id:"56",
    songName: `HHH <br><div class="subtitle">NNN</div>`,
    poster: "img/56.jpg",
},
{
    id:"57",
    songName: `III <br><div class="subtitle">III</div>`,
    poster: "img/57.jpg",
},
{
    id:"58",
    songName: `JJJ <br><div class="subtitle">MMM</div>`,
    poster: "img/58.jpg",
},
{
    id:"59",
    songName: `KKK<br><div class="subtitle">III</div>`,
    poster: "img/59.jpg",
},
{
    id:"60",
    songName: `MMM <br><div class="subtitle">ZZZ</div>`,
    poster: "img/60.jpg",
},
//////
{
    id:'61',
    songName:` A <br>
    <div class="subtitle">B</div>`,
    poster: "img/61.jpg"
},
{
    id:'62',
    songName:` B<br>
    <div class="subtitle">B</div>`,
    poster: "img/62.jpg"
},
// all object type 
{
    id:"63",
    songName: `Cartoon - On & On <br><div class="subtitle"> Daniel Levi</div>`,
    poster: "img/63.jpg",
},
{
    id:"64",
    songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
    poster: "img/64.jpg",
},
{
    id:"65",
    songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
    poster: "img/65.jpg",
},
{
    id:"66",
    songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
    poster: "img/66.jpg",
},
{
    id:"67",
    songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
    poster: "img/67.jpg",
},
{
    id:"68",
    songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
    poster: "img/68.jpg",
},
{
    id:"69",
    songName: `FFF <br><div class="subtitle">QQQ</div>`,
    poster: "img/69.jpg",
},
{
    id:"70",
    songName: `GGG <br><div class="subtitle">OOO</div>`,
    poster: "img/70.jpg",
},
{
    id:"71",
    songName: `HHH <br><div class="subtitle">NNN</div>`,
    poster: "img/71.jpg",
},
{
    id:"72",
    songName: `III <br><div class="subtitle">III</div>`,
    poster: "img/72.jpg",
},
{
    id:"73",
    songName: `JJJ <br><div class="subtitle">MMM</div>`,
    poster: "img/73.jpg",
},
{
    id:"74",
    songName: `KKK<br><div class="subtitle">III</div>`,
    poster: "img/74.jpg",
},
{
    id:"75",
    songName: `MMM <br><div class="subtitle">ZZZ</div>`,
    poster: "img/75.jpg",
},
{
    id:'76',
    songName:` A <br>
    <div class="subtitle">B</div>`,
    poster: "img/76.jpg"
},
{
    id:'77',
    songName:` B<br>
    <div class="subtitle">B</div>`,
    poster: "img/77.jpg"
},
// all object type 
{
    id:"78",
    songName: `Cartoon - On & On <br><div class="subtitle"> Daniel Levi</div>`,
    poster: "img/78.jpg",
},
{
    id:"79",
    songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
    poster: "img/79.jpg",
},
{
    id:"80",
    songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
    poster: "img/80.jpg",
},
{
    id:"81",
    songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
    poster: "img/81.jpg",
},
{
    id:"82",
    songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
    poster: "img/82.jpg",
},
{
    id:"83",
    songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
    poster: "img/83.jpg",
},
{
    id:"84",
    songName: `FFF <br><div class="subtitle">QQQ</div>`,
    poster: "img/84.jpg",
},
{
    id:"85",
    songName: `GGG <br><div class="subtitle">OOO</div>`,
    poster: "img/85.jpg",
},
{
    id:"86",
    songName: `HHH <br><div class="subtitle">NNN</div>`,
    poster: "img/86.jpg",
},
{
    id:"87",
    songName: `III <br><div class="subtitle">III</div>`,
    poster: "img/87.jpg",
},
{
    id:"88",
    songName: `JJJ <br><div class="subtitle">MMM</div>`,
    poster: "img/88.jpg",
},
{
    id:"89",
    songName: `KKK<br><div class="subtitle">III</div>`,
    poster: "img/89.jpg",
},
{
    id:"90",
    songName: `MMM <br><div class="subtitle">ZZZ</div>`,
    poster: "img/90.jpg",
},
// 
{
id:'91',
songName:` A <br>
<div class="subtitle">B</div>`,
poster: "img/91.jpg"
},
{
id:'92',
songName:` B<br>
<div class="subtitle">B</div>`,
poster: "img/92.jpg"
},
// all object type 
{
id:"93",
songName: `Cartoon - On & On <br><div class="subtitle"> Daniel Levi</div>`,
poster: "img/93.jpg",
},
{
id:"94",
songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
poster: "img/94.jpg",
},
{
id:"95",
songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
poster: "img/95.jpg",
},
{
id:"96",
songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
poster: "img/96.jpg",
},
{
id:"97",
songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
poster: "img/97.jpg",
},
{
id:"98",
songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
poster: "img/98.jpg",
},
{
id:"99",
songName: `FFF <br><div class="subtitle">QQQ</div>`,
poster: "img/99.jpg",
},
{
id:"100",
songName: `GGG <br><div class="subtitle">OOO</div>`,
poster: "img/100.jpg",
},
{
id:"101",
songName: `HHH <br><div class="subtitle">NNN</div>`,
poster: "img/101.jpg",
},
{
id:"102",
songName: `III <br><div class="subtitle">III</div>`,
poster: "img/102.jpg",
},
{
id:"103",
songName: `JJJ <br><div class="subtitle">MMM</div>`,
poster: "img/103.jpg",
},
{
id:"104",
songName: `KKK<br><div class="subtitle">III</div>`,
poster: "img/104.jpg",
},
{
id:"105",
songName: `MMM <br><div class="subtitle">ZZZ</div>`,
poster: "img/105.jpg",
},
{
id:'106',
songName:` A <br>
<div class="subtitle">B</div>`,
poster: "img/106.jpg"
},
{
id:'107',
songName:` B<br>
<div class="subtitle">B</div>`,
poster: "img/107.jpg"
},
// all object type 
{
id:"108",
songName: `Cartoon - On & On <br><div class="subtitle"> Daniel Levi</div>`,
poster: "img/108.jpg",
},
{
id:"109",
songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
poster: "img/109.jpg",
},
{
id:"110",
songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
poster: "img/110.jpg",
},
{
id:"111",
songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
poster: "img/111.jpg",
},
{
id:"112",
songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
poster: "img/112.jpg",
},
{
id:"113",
songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
poster: "img/113.jpg",
},
{
id:"114",
songName: `FFF <br><div class="subtitle">QQQ</div>`,
poster: "img/114.jpg",
},
{
id:"115",
songName: `GGG <br><div class="subtitle">OOO</div>`,
poster: "img/15.jpg",
},
{
id:"116",
songName: `HHH <br><div class="subtitle">NNN</div>`,
poster: "img/116.jpg",
},
{
id:"117",
songName: `III <br><div class="subtitle">III</div>`,
poster: "img/117.jpg",
},
{
id:"118",
songName: `JJJ <br><div class="subtitle">MMM</div>`,
poster: "img/118.jpg",
},
{
id:"119",
songName: `KKK<br><div class="subtitle">III</div>`,
poster: "img/119.jpg",
},
{
id:"120",
songName: `MMM <br><div class="subtitle">ZZZ</div>`,
poster: "img/120.jpg",
},

//

{
    id:"121",
    songName: `MMM <br><div class="subtitle">ZZZ</div>`,
    poster: "img/121.jpg",
},
// 
{
id:'122',
songName:` A <br>
<div class="subtitle">B</div>`,
poster: "img/122.jpg"
},
{
id:'123',
songName:` B<br>
<div class="subtitle">B</div>`,
poster: "img/123.jpg"
},
// all object type 
{
id:"124",
songName: `Cartoon - On & On <br><div class="subtitle"> Daniel Levi</div>`,
poster: "img/124.jpg",
},
{
id:"125",
songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
poster: "img/125.jpg",
},
{
id:"126",
songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
poster: "img/126.jpg",
},
{
id:"127",
songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
poster: "img/127.jpg",
},
{
id:"128",
songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
poster: "img/128.jpg",
},
{
id:"129",
songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
poster: "img/129.jpg",
},
{
id:"130",
songName: `FFF <br><div class="subtitle">QQQ</div>`,
poster: "img/130.jpg",
},

{
id:"131",
songName: `HHH <br><div class="subtitle">NNN</div>`,
poster: "img/131.jpg",
},
{
id:"132",
songName: `III <br><div class="subtitle">III</div>`,
poster: "img/132.jpg",
},
{
id:"133",
songName: `JJJ <br><div class="subtitle">MMM</div>`,
poster: "img/133.jpg",
},
{
id:"134",
songName: `KKK<br><div class="subtitle">III</div>`,
poster: "img/134.jpg",
},
{
id:"135",
songName: `MMM <br><div class="subtitle">ZZZ</div>`,
poster: "img/135.jpg",
},
{
id:'136',
songName:` A <br>
<div class="subtitle">B</div>`,
poster: "img/136.jpg"
},
{
id:'137',
songName:` B<br>
<div class="subtitle">B</div>`,
poster: "img/137.jpg"
},
// all object type 
{
id:"138",
songName: `Cartoon - On & On <br><div class="subtitle"> Daniel Levi</div>`,
poster: "img/138.jpg",
},
{
id:"139",
songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
poster: "img/139.jpg",
},
{
    id:"140",
    songName: `GGG <br><div class="subtitle">OOO</div>`,
    poster: "img/140.jpg",
    },
{
id:"141",
songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
poster: "img/141.jpg",
},

{
id:"142",
songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
poster: "img/142.jpg",
},
{
id:"143",
songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
poster: "img/143.jpg",
},
{
id:"144",
songName: `FFF <br><div class="subtitle">QQQ</div>`,
poster: "img/144.jpg",
},
{
id:"145",
songName: `GGG <br><div class="subtitle">OOO</div>`,
poster: "img/145.jpg",
},
{
id:"146",
songName: `HHH <br><div class="subtitle">NNN</div>`,
poster: "img/146.jpg",
},
{
id:"147",
songName: `III <br><div class="subtitle">III</div>`,
poster: "img/147.jpg",
},
{
id:"148",
songName: `JJJ <br><div class="subtitle">MMM</div>`,
poster: "img/148.jpg",
},
{
id:"149",
songName: `KKK<br><div class="subtitle">III</div>`,
poster: "img/149.jpg",
},
{
    id:"150",
    songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
    poster: "img/150.jpg",
    },


]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})