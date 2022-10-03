let body = document.body;
const modeSiang = document.getElementById("mode-siang")
const modeMalam = document.getElementById("mode-malam")
const iconSiang = document.getElementById("icon-siang")
const iconMalam = document.getElementById("icon-malam")
const myNavbar = document.getElementById("my-navbar")
const tombolMode = document.getElementById("tombol-mode")

const Siang = () => {
    body.classList.remove("dark")
    myNavbar.classList.add("navbar-dark")
    myNavbar.classList.add("bg-dark")
    myNavbar.classList.remove("navbar-light")
    myNavbar.classList.remove("bg-light")
    tombolMode.classList.add("text-light")
    tombolMode.classList.remove("text-dark")
    modeSiang.style.display = "none"
    modeMalam.style.display = "block"
}

const Malam = () => {
    body.classList.add("dark")
    myNavbar.classList.remove("navbar-dark")
    myNavbar.classList.remove("bg-dark")
    myNavbar.classList.add("navbar-light")
    myNavbar.classList.add("bg-light")
    tombolMode.classList.remove("text-light")
    tombolMode.classList.add("text-dark")
    modeSiang.style.display = "block"
    modeMalam.style.display = "none"
}

const listArsipJuli = document.getElementById("list-arsip-juli")
const listButtonJuli = document.getElementById("list-button-juli")
const listButtonJuliTutup = document.getElementById("list-button-juli-tutup")
const listArsipAgust = document.getElementById("list-arsip-agustus")
const listButtonAgust = document.getElementById("list-button-agustus")
const listButtonAgustTutup = document.getElementById("list-button-agustus-tutup")
const listArsipSept = document.getElementById("list-arsip-september")
const listButtonSept = document.getElementById("list-button-september")
const listButtonSeptTutup = document.getElementById("list-button-september-tutup")

const ListArsipJuli = () => {
    listArsipJuli.style.display = "block"
    listButtonJuli.style.display = "none"
    listButtonJuliTutup.style.display = "inline-block"
}

const ListArsipJuliTutup = () => {
    listArsipJuli.style.display = "none"
    listButtonJuli.style.display = "inline-block"
    listButtonJuliTutup.style.display = "none"
}

const ListArsipAgustus = () => {
    listArsipAgust.style.display = "block"
    listButtonAgust.style.display = "none"
    listButtonAgustTutup.style.display = "inline-block"
}

const ListArsipAgustusTutup = () => {
    listArsipAgust.style.display = "none"
    listButtonAgust.style.display = "inline-block"
    listButtonAgustTutup.style.display = "none"
}

const ListArsipSeptember = () => {
    listArsipSept.style.display = "block";
    listButtonSept.style.display = "none";
    listButtonSeptTutup.style.display = "inline-block";
}

const ListArsipSeptemberTutup = () => {
    listArsipSept.style.display = "none";
    listButtonSept.style.display = "inline-block";
    listButtonSeptTutup.style.display = "none";
}

const berandaAktif = document.getElementById("beranda-aktif")
const profilAktif = document.getElementById("profil")
const beritaAktif = document.getElementById("berita-aktif")
const pengumumanAktif = document.getElementById("pengumuman-aktif")

const BerandaAktif = () => {
    berandaAktif.classList.add('active')
    profilAktif.classList.remove('active')
    beritaAktif.classList.remove('active')
    pengumumanAktif.classList.remove('active')
}

const ProfilAktif = () => {
    berandaAktif.classList.remove('active')
    profilAktif.classList.add('active')
    beritaAktif.classList.remove('active')
    pengumumanAktif.classList.remove('active')
}

const BeritaAktif = () => {
    berandaAktif.classList.remove('active')
    profilAktif.classList.remove('active')
    beritaAktif.classList.add('active')
    pengumumanAktif.classList.remove('active')
}

const PengumumanAktif = () => {
    alert("tidak ada pengumuman saat ini")
    berandaAktif.classList.remove('active')
    profilAktif.classList.remove('active')
    beritaAktif.classList.remove('active')
    pengumumanAktif.classList.add('active')
}