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

const beranda = document.getElementById("halaman-beranda")
const berandaAktif = document.getElementById("beranda-aktif")
const profil = document.getElementById("profil")
const sejarah = document.getElementById("sejarah-sekolah")
const isiSejarah = document.getElementById("isi-sejarah")
const visiMisi = document.getElementById("visi-misi")
const pengumuman = document.getElementById("halaman-pengumuman")
const pengumumanAktif = document.getElementById("navbarDropdownMenuLink")
const berita = document.getElementById("halaman-berita")
const beritaAktif = document.getElementById("berita-aktif")
const beritaSatu = document.getElementById("berita-u1")
const beritaDua = document.getElementById("berita-u2")
const beritaTiga = document.getElementById("berita-u3")
const beritaEmpat = document.getElementById("berita-u4")
const kartuMedsos = document.getElementById("halaman-kartu-medsos")
const kartuMedsosAktif = document.getElementById("kartu-medsos-aktif")
const listArsipJuli = document.getElementById("list-arsip-juli")
const listButtonJuli = document.getElementById("list-button-juli")
const listButtonJuliTutup = document.getElementById("list-button-juli-tutup")
const listArsipAgust = document.getElementById("list-arsip-agustus")
const listButtonAgust = document.getElementById("list-button-agustus")
const listButtonAgustTutup = document.getElementById("list-button-agustus-tutup")
const listArsipSept = document.getElementById("list-arsip-september")
const listButtonSept = document.getElementById("list-button-september")
const listButtonSeptTutup = document.getElementById("list-button-september-tutup")


const Beranda = () => {
    profil.classList.remove('active')
    berandaAktif.classList.add('active')
    pengumumanAktif.classList.remove('active')
    beritaAktif.classList.remove('active')
    kartuMedsosAktif.classList.remove('active')
    beranda.style.display = "block"
    sejarah.style.display = "none"
    visiMisi.style.display = "none"
    pengumuman.style.display = "none"
    berita.style.display = "none"
    kartuMedsos.style.display = "none"
}

const Sejarah = () => {
    profil.classList.add('active')
    berandaAktif.classList.remove('active')
    pengumumanAktif.classList.remove('active')
    beritaAktif.classList.remove('active')
    kartuMedsosAktif.classList.remove('active')
    sejarah.style.display = "block"
    beranda.style.display = "none"
    isiSejarah.style.display = "block"
    visiMisi.style.display = "none"
    pengumuman.style.display = "none"
    berita.style.display = "none"
    kartuMedsos.style.display = "none"
}

const VisiMisi = () => {
    profil.classList.add('active')
    berandaAktif.classList.remove('active')
    pengumumanAktif.classList.remove('active')
    beritaAktif.classList.remove('active')
    kartuMedsosAktif.classList.remove('active')
    sejarah.style.display = "block"
    visiMisi.style.display = "block"
    isiSejarah.style.display = "none"
    beranda.style.display = "none"
    pengumuman.style.display = "none"
    berita.style.display = "none"
    kartuMedsos.style.display = "none"
}

const Pengumuman = () => {
    profil.classList.remove('active')
    berandaAktif.classList.remove('active')
    pengumumanAktif.classList.add('active')
    beritaAktif.classList.remove('active')
    kartuMedsosAktif.classList.remove('active')
    pengumuman.style.display = "block"
    sejarah.style.display = "none"
    visiMisi.style.display = "none"
    isiSejarah.style.display = "none"
    beranda.style.display = "none"
    berita.style.display = "none"
    kartuMedsos.style.display = "none"
}

const Berita = () => {
    beritaAktif.classList.add('active')
    profil.classList.remove('active')
    berandaAktif.classList.remove('active')
    pengumumanAktif.classList.remove('active')
    kartuMedsosAktif.classList.remove('active')
    berita.style.display = "block"
    pengumuman.style.display = "none"
    sejarah.style.display = "none"
    visiMisi.style.display = "none"
    isiSejarah.style.display = "none"
    beranda.style.display = "none"
    kartuMedsos.style.display = "none"
}

const Medsos = () => {
    beritaAktif.classList.remove('active')
    profil.classList.remove('active')
    berandaAktif.classList.remove('active')
    pengumumanAktif.classList.remove('active')
    kartuMedsosAktif.classList.add('active')
    berita.style.display = "none"
    pengumuman.style.display = "none"
    sejarah.style.display = "none"
    visiMisi.style.display = "none"
    isiSejarah.style.display = "none"
    beranda.style.display = "none"
    kartuMedsos.style.display = "block"
}

const Topik1 = () => {
    beritaAktif.classList.add('active')
    profil.classList.remove('active')
    berandaAktif.classList.remove('active')
    pengumumanAktif.classList.remove('active')
    berita.style.display = "block"
    beritaSatu.style.display = "block"
    beritaDua.style.display = "none"
    pengumuman.style.display = "none"
    sejarah.style.display = "none"
    visiMisi.style.display = "none"
    isiSejarah.style.display = "none"
    beranda.style.display = "none"
}
const Topik2 = () => {
    beritaAktif.classList.add('active')
    profil.classList.remove('active')
    berandaAktif.classList.remove('active')
    pengumumanAktif.classList.remove('active')
    berita.style.display = "block"
    beritaSatu.style.display = "none"
    beritaDua.style.display = "block"
    pengumuman.style.display = "none"
    sejarah.style.display = "none"
    visiMisi.style.display = "none"
    isiSejarah.style.display = "none"
    beranda.style.display = "none"
}

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
