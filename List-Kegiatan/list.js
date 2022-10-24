let showCard = document.querySelector("#row-card")
let ViewChange = document.querySelector("#view-change")



async function showList(){
    let url = await fetch("https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPendaftaranVolunteer")
    let result = await url.json()

    showCard.innerHTML = " "
    result.forEach((item) => {
             showCard.innerHTML +=
            `<div class="col">
                <div class="card m-5" style="width: 18rem;">
                    <img src="https://i.ibb.co/${item.gambar}" class="card-img-top rounded-15" alt="">
                    
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text"><i class="far fa-clock"></i> ${item.periode}</p>
                        <button  class="btn" onclick="detailPage (${item.id})">Go Detail <i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div> `
       
    });
}

async function detailPage (id){
    ViewChange.innerHTML = " "
    let url = await fetch(`https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPendaftaranVolunteer/${id}`)
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
                    <a href="/List-Kegiatan/list.html" class="navbar-brand mb-0 h1"><i class="far fa-arrow-left"></i> Back</a>
                </div>
            </nav>

            <!-- Bagian Card -->
            <div class="card mt-4 mb-4 ">
                <img src="https://i.ibb.co/${result.gambar} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${result.title}</h5>
                    <p class="card-text"><small class="text-muted">Alamat Kegiatan:</small></p>
                    <p class="card-text"><i class="fas fa-map-marked-alt"></i> ${result.address}</p>
                    <p class="card-text"><small class="text-muted">Periode Kegiatan:</small></p>
                    <p class="card-text"><i class="far fa-clock"></i> ${result.periode}</p>
                    <p class="card-text" style="font-weight: bold;">Rincian Kegiatan: </p>
                    <p class="card-text">${result.detail_activities}</p>
                    <p class="card-text" style="font-weight: bold;">Kriteria Relawan: </p>
                    <p class="card-text">${result.volunteer_requirement}</p>
                </div>
            </div>

            <!-- Bagian Footer -->
            <nav class="navbar navbar-light">
                <div class="container-fluid justify-content-end">
                    <button type="button" class="btn" onclick="viewForm(${result.id})" style="background: #9EB23B; color:white; height: 34px; width: 150px; border-radius: 48px;">Daftar</button>
                </div>
            </nav>
        </div>
    </body>
`

}
showList()

function viewForm (id){
    console.log(id);
    ViewChange.innerHTML = 
    `<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="/formDaftar.css">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <title>Form Daftar</title>
</head>
<body style="background: linear-gradient(160deg, #C7D36F, #FCF9C6)">
    <div class="container-fluid">
        <nav class="navbar navbar-light">
            <div class="container-fluid">
                <a href="/List-Kegiatan/list.html" class="navbar-brand mb-0 h1"><i class="far fa-arrow-left"></i> Back</a>
            </div>
        </nav>

        <div class="card mt-4 mb-4">
            <form class="card-body" id="form-daftar">
                <label for="id-card" class="form-label">Enter your ID Card (.pdf)</label>
                <input type="text" class="form-control" placeholder="Link file" id="id-card">

                <label for="cv" class="form-label">Enter your CV (.pdf)</label>
                <input type="text" class="form-control" placeholder="Link file" id="cv">
                
                <label for="student-card" class="form-label">If you are student, you can enter a student ID Card (.pdf)</label>
                <input type="text" class="form-control" placeholder="Link file" id="student-card">

                <label for="health-letter" class="form-label">A health leter from a doctor (.pdf)</label>
                <input type="text" class="form-control" placeholder="Link file" id="health-letter">
                
                <label class="form-label">Enter your mobile number and email address to make it easier for the organization to contact you</label>
                <div class="input-group flex-nowrap">
                    <input type="text" class="form-control" placeholder="+62 xxxx xxxx xx" id="number-phone">
                    <input type="text" class="form-control" placeholder="email" id="email">
                </div>

                <label for="opini" class="form-label">Why are you interested in volunteering for this activity?</label>
                <input type="text" class="form-control" placeholder="Your answer" id="opini">
                
                <button type="button" class="btn" onclick ="tambahPendaftar(${id})">Send <i class="fas fa-arrow-right"></i></button>
            </form>
        </div>

        <nav class="navbar navbar-light">
            <div class="container-fluid">
            </div>
        </nav>
    </div>
</body>`
}


async function tambahPendaftar(id){
    console.log(id);
    let url = await fetch (`https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPendaftaranVolunteer/${id}`)
    let result = await url.json()

    console.log(result);

    let idCard = document.querySelector("#id-card")
    let cv = document.querySelector("#cv")
    let studentCard = document.querySelector("#student-card")
    let healthLatter = document.querySelector("#health-letter")
    let numberPhone = document.querySelector("#number-phone")
    let email = document.querySelector("#email")
    let opinii = document.querySelector("#opini")
    console.log(idCard);
    
    let dataInput = {
        gambar_event : `${result.gambar}`,
        name_event : `${result.title}`,
        address : `${result.address}`,
        periode_event : `${result.periode}`,
        detail_aktivitas : `${result.detail_activities}`,
        volunteer_requirment : `${result.volunteer_requirement}`,
        link_IDCard : `${idCard.value}`,
        link_cv : `${cv.value}`,
        link_studentCard : `${studentCard.value}`,
        link_HealthLetter : `${healthLatter.value}`,
        nomor_telepon : `${numberPhone.value}`,
        email : `${email.value}`,
        opini : `${opinii.value}`,
        status : `being processed`
    }

    let link = await fetch("https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPenyimpananDataPendaftaran", {
        method : 'POST',
        body : JSON.stringify(dataInput),
        headers : {"Content-type" : "application/json"},

    })
    let response = await link.json()
    alert("berhasil")
   

}





// /apiPenyimpananDataPendaftaran