let showCard = document.querySelector("#row-card")
let ViewChange = document.querySelector("#view-change")
let status1 = "being processed"
let status2 = "accepted"

async function showCardNonActive(){
    let url = await fetch("https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPenyimpananDataPendaftaran")
    let result = await url.json()

    showCard.innerHTML = " "
    result.forEach((item) => {
        if (item.status == status1){
             showCard.innerHTML +=
            `<div class="col">
                <div class="card m-5" style="width: 18rem;">
                    <img src="https://i.ibb.co/${item.gambar_event}" class="card-img-top rounded-15" alt="">
                    <button class="btn badge bg-warning">${item.status}</button>
                    <div class="card-body">
                        <h5 class="card-title">${item.name_event}</h5>
                        <p class="card-text"><i class="far fa-clock"></i> ${item.periode_event}</p>
                        <button  class="btn" onclick="detailPage (${item.id})">Go Detail <i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div> `
        }
       
    });
}

async function showCardActive(){
    let url = await fetch("https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPenyimpananDataPendaftaran")
    let result = await url.json()

    showCard.innerHTML = " "    
    result.forEach((item) => {
        if (item.status == status2){
             showCard.innerHTML +=
            `<div class="col">
                <div class="card m-5" style="width: 18rem;">
                    <img src="https://i.ibb.co/${item.gambar_event}" class="card-img-top rounded-15" alt="">
                    <button class="btn badge bg-success">${item.status}</button>
                    <div class="card-body">
                        <h5 class="card-title">${item.name_event}</h5>
                        <p class="card-text"><i class="far fa-clock"></i> ${item.periode_event}</p>
                        <button  class="btn" onclick="detailPage (${item.id})">Go Detail <i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div> `
        }
       
    });
}

async function detailPage (id){
    ViewChange.innerHTML = " "
    let url = await fetch(`https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPenyimpananDataPendaftaran/${id}`)
    let result = await url.json()

    ViewChange.innerHTML =
    `<head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Link MyStyle -->
        <link rel="stylesheet" href="/detailPage.css">

        <!-- Link Bootstrap dan Font google -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

        <!-- Link Icon: Font Awesome -->
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css">

        <title>Detail</title>
    </head>
    <body style="background: linear-gradient(160deg, #C7D36F, #FCF9C6)">
        <div class="container">
            <!-- Bagian Navbar  -->
            <nav class="navbar navbar-light">
                <div class="container-fluid">
                    <a href="./statusKegiatan.html" class="navbar-brand mb-0 h1"><i class="far fa-arrow-left"></i> Back</a>
                </div>
            </nav>

            <!-- Bagian Card -->
            <div class="card mt-4 mb-4 ">
                <img src="https://i.ibb.co/${result.gambar_event} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${result.name_event}</h5>
                    <p class="card-text"><small class="text-muted">Alamat Kegiatan:</small></p>
                    <p class="card-text"><i class="fas fa-map-marked-alt"></i> ${result.address}</p>
                    <p class="card-text"><small class="text-muted">Periode Kegiatan:</small></p>
                    <p class="card-text"><i class="far fa-clock"></i> ${result.periode_event}</p>
                    <p class="card-text" style="font-weight: bold;">Rincian Kegiatan: </p>
                    <p class="card-text">${result.detail_aktivitas}</p>
                    <p class="card-text" style="font-weight: bold;">Kriteria Relawan: </p>
                    <p class="card-text">${result.volunteer_requirment}</p>
                </div>
            </div>

            <!-- Bagian Footer -->
            <nav class="navbar navbar-light">
                <div class="container-fluid justify-content-end">
                </div>
            </nav>
        </div>
    </body>
`

}


showCardNonActive()

