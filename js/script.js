let body = document.body;
const modeSiang = document.getElementById("mode-siang")
const modeMalam = document.getElementById("mode-malam")
const iconSiang = document.getElementById("icon-siang")
const iconMalam = document.getElementById("icon-malam")

const Siang = () => {
    body.classList.remove("dark")
    modeSiang.style.display = "none"
    modeMalam.style.display = "block"
}

const Malam = () => {
    body.classList.add("dark")
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

const Beranda = () => {
    profil.classList.remove('active')
    berandaAktif.classList.add('active')
    pengumumanAktif.classList.remove('active')
    beranda.style.display = "block"
    sejarah.style.display = "none"
    visiMisi.style.display = "none"
    pengumuman.style.display = "none"
}

const Sejarah = () => {
    profil.classList.add('active')
    berandaAktif.classList.remove('active')
    pengumumanAktif.classList.remove('active')
    sejarah.style.display = "block"
    beranda.style.display = "none"
    isiSejarah.style.display = "block"
    visiMisi.style.display = "none"
    pengumuman.style.display = "none"
}

const VisiMisi = () => {
    profil.classList.add('active')
    berandaAktif.classList.remove('active')
    pengumumanAktif.classList.remove('active')
    sejarah.style.display = "block"
    visiMisi.style.display = "block"
    isiSejarah.style.display = "none"
    beranda.style.display = "none"
    pengumuman.style.display = "none"
}

const Pengumuman = () => {
    profil.classList.remove('active')
    berandaAktif.classList.remove('active')
    pengumumanAktif.classList.add('active')
    pengumuman.style.display = "block"
    sejarah.style.display = "none"
    visiMisi.style.display = "none"
    isiSejarah.style.display = "none"
    beranda.style.display = "none"
}
