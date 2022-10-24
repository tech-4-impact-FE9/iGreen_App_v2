let idCard = document.querySelector("#id-card")
let cv = document.querySelector("#cv")
let studentCard = document.querySelector("#student-card")
let healthLatter = document.querySelector("#health-letter")
let numberPhone = document.querySelector("#number-phone")
let email = document.querySelector("#email")
let opinii = document.querySelector("#opini")
let formDaftar = document.querySelector("#form-daftar")


let tambahPendaftar = () =>{

    let dataInput = {
        link_IDCard : `${idCard.value}`,
        link_cv : `${cv.value}`,
        link_studentCard : `${studentCard.value}`,
        link_HealthLetter : `${healthLatter.value}`,
        nomor_telepon : `${numberPhone.value}`,
        email : `${email.value}`,
        opini : `${opinii.value}`,
        status : `being processed`,
        gambar_event : `vZbQxm7/Premium-Photo-Hands-planting-tree.jpg`
    }

    fetch("https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPenyimpananDataPendaftaran", {
        method : 'POST',
        body : JSON.stringify(dataInput),
        headers : {"Content-type" : "application/json"},

    })
    .then((response) => response.json())
    alert("Data berhasil ditambahkan")
}

formDaftar.addEventListener('submit', (event) => {
    event.preventDefault()

    tambahPendaftar()
})
