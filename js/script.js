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
const listArsipOktober = document.getElementById("list-arsip-oktober")
const listButtonOktober = document.getElementById("list-button-oktober")
const listButtonOktoberTutup = document.getElementById("list-button-oktober-tutup")
const listArsipNovember = document.getElementById("list-arsip-november")
const listButtonNovember = document.getElementById("list-button-november")
const listButtonNovemberTutup = document.getElementById("list-button-november-tutup")
const tampilkanFileAmanat = document.getElementById("amanat-mentri-sosial-RI")

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

const ListArsipOktober = () => {
    listArsipOktober.style.display = "block";
    listButtonOktober.style.display = "none";
    listButtonOktoberTutup.style.display = "inline-block"
}

const ListArsipOktoberTutup = () => {
    listArsipOktober.style.display = "none";
    listButtonOktober.style.display = "inline-block";
    listButtonOktoberTutup.style.display = "none";
}

const ListArsipNovember = () => {
    listArsipNovember.style.display = "block";
    listButtonNovember.style.display = "none";
    listButtonNovemberTutup.style.display = "inline-block";
}

const ListArsipNovemberTutup = () => {
    listArsipNovember.style.display = "none";
    listButtonNovember.style.display = "inline-block";
    listButtonNovemberTutup.style.display = "none";
}
const TampilAmanat = () => {
    tampilkanFileAmanat.style.display = "block"
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

const hlmn1 = document.getElementById("halaman-1")
const hlmn1Active = document.getElementById("hlmn1-active")
const hlmn2 = document.getElementById("halaman-2")
const hlmn2Active = document.getElementById("hlmn2-active")
const hlmn3 = document.getElementById("halaman-3")
const hlmn3Active = document.getElementById("hlmn3-active")
const hlmn4 = document.getElementById("halaman-4")
const hlmn4Active = document.getElementById("hlmn4-active")
const hlmn5 = document.getElementById("halaman-5")
const hlmn5Active = document.getElementById("hlmn5-active")
const hlmn6 = document.getElementById("halaman-6")
const hlmn6Active = document.getElementById("hlmn6-active")
const hlmn7 = document.getElementById("halaman-7")
const hlmn7Active = document.getElementById("hlmn7-active")

const Hlmn1 = () => {
    hlmn1.style.display = "block"
    hlmn1Active.classList.add('active')
    hlmn2.style.display = "none"
    hlmn2Active.classList.remove('active')
    hlmn3.style.display = "none"
    hlmn3Active.classList.remove('active')
    hlmn4.style.display = "none"
    hlmn4Active.classList.remove('active')
    hlmn5.style.display = "none"
    hlmn5Active.classList.remove('active')
    hlmn6.style.display = "none"
    hlmn6Active.classList.remove('active')
    hlmn7.style.display = "none"
    hlmn7Active.classList.remove('active')
}

const Hlmn2 = () => {
    hlmn1.style.display = "none"
    hlmn1Active.classList.remove('active')
    hlmn2.style.display = "block"
    hlmn2Active.classList.add('active')
    hlmn3.style.display = "none"
    hlmn3Active.classList.remove('active')
    hlmn4.style.display = "none"
    hlmn4Active.classList.remove('active')
    hlmn5.style.display = "none"
    hlmn5Active.classList.remove('active')
    hlmn6.style.display = "none"
    hlmn6Active.classList.remove('active')
    hlmn7.style.display = "none"
    hlmn7Active.classList.remove('active')
}

const Hlmn3 = () => {
    hlmn1.style.display = "none"
    hlmn1Active.classList.remove('active')
    hlmn2.style.display = "none"
    hlmn2Active.classList.remove('active')
    hlmn3.style.display = "block"
    hlmn3Active.classList.add('active')
    hlmn4.style.display = "none"
    hlmn4Active.classList.remove('active')
    hlmn5.style.display = "none"
    hlmn5Active.classList.remove('active')
    hlmn6.style.display = "none"
    hlmn6Active.classList.remove('active')
    hlmn7.style.display = "none"
    hlmn7Active.classList.remove('active')
}

const Hlmn4 = () => {
    hlmn1.style.display = "none"
    hlmn1Active.classList.remove('active')
    hlmn2.style.display = "none"
    hlmn2Active.classList.remove('active')
    hlmn3.style.display = "none"
    hlmn3Active.classList.remove('active')
    hlmn4.style.display = "block"
    hlmn4Active.classList.add('active')
    hlmn5.style.display = "none"
    hlmn5Active.classList.remove('active')
    hlmn6.style.display = "none"
    hlmn6Active.classList.remove('active')
    hlmn7.style.display = "none"
    hlmn7Active.classList.remove('active')
}

const Hlmn5 = () => {
    hlmn1.style.display = "none"
    hlmn1Active.classList.remove('active')
    hlmn2.style.display = "none"
    hlmn2Active.classList.remove('active')
    hlmn3.style.display = "none"
    hlmn3Active.classList.remove('active')
    hlmn4.style.display = "none"
    hlmn4Active.classList.remove('active')
    hlmn5.style.display = "block"
    hlmn5Active.classList.add('active')
    hlmn6.style.display = "none"
    hlmn6Active.classList.remove('active')
    hlmn7.style.display = "none"
    hlmn7Active.classList.remove('active')
}

const Hlmn6 = () => {
    hlmn1.style.display = "none"
    hlmn1Active.classList.remove('active')
    hlmn2.style.display = "none"
    hlmn2Active.classList.remove('active')
    hlmn3.style.display = "none"
    hlmn3Active.classList.remove('active')
    hlmn4.style.display = "none"
    hlmn4Active.classList.remove('active')
    hlmn5.style.display = "none"
    hlmn5Active.classList.remove('active')
    hlmn6.style.display = "block"
    hlmn6Active.classList.add('active')
    hlmn7.style.display = "none"
    hlmn7Active.classList.remove('active')
}

const Hlmn7 = () => {
    hlmn1.style.display = "none"
    hlmn1Active.classList.remove('active')
    hlmn2.style.display = "none"
    hlmn2Active.classList.remove('active')
    hlmn3.style.display = "none"
    hlmn3Active.classList.remove('active')
    hlmn4.style.display = "none"
    hlmn4Active.classList.remove('active')
    hlmn5.style.display = "none"
    hlmn5Active.classList.remove('active')
    hlmn6.style.display = "none"
    hlmn6Active.classList.remove('active')
    hlmn7.style.display = "block"
    hlmn7Active.classList.add('active')
}