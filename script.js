// ======================
// ELEMENT
// ======================

const startBtn = document.getElementById("startBtn");
const envelopeSection = document.getElementById("envelope");
const letterSection = document.getElementById("letter");
const gallerySection = document.getElementById("gallery");
const timelineSection = document.getElementById("timeline");
const endingSection = document.getElementById("ending");

const typing = document.getElementById("typing");

const music = document.getElementById("music");


// ======================
// SURAT
// ======================

const letter = `

Selamat ulang tahun, Sayang ❤️

Hari ini adalah hari yang sangat spesial bagiku.

Karena seseorang yang sangat berarti dalam hidupku sedang merayakan hari kelahirannya.

Terima kasih sudah hadir dan mewarnai hari-hariku.

Sejak 20 Juni 2026, hidupku menjadi jauh lebih indah.

Semoga di usia yang baru ini kamu selalu sehat.

Semoga semua impianmu tercapai.

Semoga semua doa yang kamu panjatkan dikabulkan.

Aku akan selalu mendukungmu.

Aku akan selalu mendoakanmu.

Dan aku akan selalu mencintaimu.

Happy Birthday Sindi Reskia Putri ❤️

I Love You Forever.

— Fahmi Ilham Fimansyah

`;


// ======================
// START
// ======================

startBtn.onclick = () => {

    document.getElementById("hero").classList.add("hidden");

    envelopeSection.classList.remove("hidden");

    music.play().catch(()=>{});

}


// ======================
// ENVELOPE
// ======================

document.querySelector(".mail").onclick = () => {

    envelopeSection.classList.add("hidden");

    letterSection.classList.remove("hidden");

    typeWriter();

}


// ======================
// TYPEWRITER
// ======================

let i = 0;

function typeWriter(){

    if(i < letter.length){

        typing.innerHTML += letter.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }

    else{

        setTimeout(()=>{

            gallerySection.classList.remove("hidden");

            timelineSection.classList.remove("hidden");

            endingSection.classList.remove("hidden");

            window.scrollTo({

                top:document.body.scrollHeight,

                behavior:"smooth"

            });

        },1000);

    }

}


// ======================
// HEARTS
// ======================

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.className = "heart";

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize = (20+Math.random()*20)+"px";

    heart.style.animationDuration = (4+Math.random()*5)+"s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,500);


// ======================
// STARS
// ======================

for(let i=0;i<120;i++){

    const star = document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*3+"s";

    document.getElementById("stars").appendChild(star);

}


// ======================
// CELEBRATE
// ======================

document.getElementById("celebrate").onclick=()=>{

    if(typeof confetti==="function"){

        confetti({

            particleCount:250,

            spread:180,

            origin:{y:0.6}

        });

    }

    alert("❤️ Happy Birthday Sindi ❤️");

}