// import axios from "axios";

//start btn for home page
function btn_eating() {
   location.replace("/pages/feeding-page.html");
};
function btn_exercise() {
    location.replace("/pages/training-page.html");
}
function btn_eat_exercise(){
    location.replace("/pages/plans-page.html");
}
function homePrivate() {
    location.replace("/pages/private-home.html");
    // userprotindaily.innerHTML ="";
    // let userweight = document.getElementById("inweight").value;
    // let userheight = document.getElementById("inheight").value;
    // let userfat = document.getElementById("infat").value;
    // let userprotindaily = document.getElementById("priprotin");
    // let usercaloeydaily = document.getElementById("pricalory");
    // let usecarbdaily = document.getElementById("pricarb");

    // userprotindaily.innerHTML =`${userweight*2}`;

    

    
}

//start the service page
let scrollcontainer = document.querySelectorAll(".gallery");
let backBtn = document.querySelectorAll(".backBtn");
let nextBtn = document.querySelectorAll(".nextBtn");
for(let i=0;i<scrollcontainer.length;i++){
    scrollcontainer[i].addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollcontainer[i].scrollLeft += evt.deltaY;
    });
    
    for(let j=0;j<backBtn.length;j++){
        nextBtn[j].addEventListener("click", () => {
            scrollcontainer[j].style.scrollBehavior = "smooth";
            scrollcontainer[j].scrollLeft += 900;
        });
        backBtn[j].addEventListener("click", () => {
            scrollcontainer[j].style.scrollBehavior = "smooth";
            scrollcontainer[j].scrollLeft -= 900;
        });
    }
}
//feeding page btn 
function feedin_bulking() {
    location.replace("/pages/bulking-page.html");
};
function feedin_drying() {
    location.replace("/pages/dry-page.html");
};
function feedin_lose() {
    location.replace("/pages/lose-page.html");
};
//tips button
function tips_btn() {
    location.replace("/pages/tips-page.html");
};
//btn service page
function feeding_btn() {
    location.replace("/pages/feeding-page.html");
};
//btn plan page
function inbody_btn() {
    location.replace("/pages/inbody-page.html");
};
//btn personal_training 
function personal_training() {
    location.replace("/pages/training-page.html");
}
//btn cardio exercise
function cardio() {
    location.replace("/pages/cardio-page.html")
}
//btn exercise private 36
function bulking_exe_pri36() {
    location.replace("/pages/Bulking up1_exrprivate.html");
};
//btn exercise private 36
function drying_exe_pri36() {
    location.replace("/pages/Driying_1exeprivate.html");
};
/////////////////////
function home_private3month() {
    location.replace("/pages/private-home_3month.html");
};
/////////////////////
function btn_bulking_feeding_3month() {
    location.replace("/pages/bulking-page-private(6).html");
};
/////////////////////
function btn_drying_feeding_3month() {
    location.replace("/pages/drying-page-private(6).html");
};
/////////////////////////////////////////////
function btn_bulking_exe_3month() {
    location.replace("/pages/Bulking up3month_exe.html");
};
/////////////////////
function btn_drying_exe_3month() {
    location.replace("/pages/Driying_3month_exe.html");
};
///////////////gosupplyment()//////////////////////////////
function gosupplyment() {
    location.replace("/pages/suplyment.html");
}


/////////////////////btn home privacy///
function btnhome(){
    location.replace("/pages/home-page.html");
};


/////////////////////////////////////////////////
//execise page
let galleryImage = document.querySelectorAll(".box-trining-image .images  img");

galleryImage.forEach((img) => {
  img.addEventListener("click", (e) => {
    let overlay = document.createElement("div");
    overlay.className = "overlay-pop";
    document.body.appendChild(overlay);
    let popup = document.createElement("div");
    popup.className = "popup";
    let popupImage = document.createElement("img");
    popupImage.className = "popup-image";
    popupImage.src = img.src;
    if (img.alt !== null) {
      let popHead = document.createElement("h3");
      let headText = document.createTextNode(img.alt);
      popHead.appendChild(headText);
      popup.appendChild(popHead);
    }
    popup.appendChild(popupImage);
    document.body.appendChild(popup);
    overlay.addEventListener("click", (e) => {
      document.body.removeChild(popup);
      document.body.removeChild(overlay);
    });
    let closeButton = document.createElement("span");
    let closeText = document.createTextNode("X");
    closeButton.className = "close-button";
    closeButton.appendChild(closeText);
    popup.appendChild(closeButton);

    closeButton.addEventListener("click", (e) => {
      document.body.removeChild(popup);
      document.body.removeChild(overlay);
    });
  });
});
//////////////bulkingExercise/////////////
function bulkingExercise() {
    location.replace("/pages/Bulking up-exe.html");
}
//////////////bulkingExercise/////////////
function dryingExercise() {
    location.replace("/pages/Driying-exe.html");
}
//////////////////dry feeding private//////// 
function btn_drying_feeding_private() {
    location.replace("/pages/drying-private(36).html");
}
//////////////////bulking feeding private//////// 
function btn_bulking_feeding_private() {
    location.replace("/pages/bulking-private(36).html");
}
/////////////////plan btn month////////////////////////////
function btnplanmonth(){
    location.replace("/pages/payment-3month.html");
}
/////////////////////////////////////////

//link Api///////// log in////

function btnlogin(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const params = {
        "email": username,
        "password": password
    };
    const baseurl = "https://graduation-project-2q7g.onrender.com";
    const url = `${baseurl}/api/v1/auth/login`;

    axios.post(url, params)
    .then(response => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user",JSON.stringify(response.data))
        setupui();
    })
    .catch(err => {
        Swal.fire(err.response.data.message);
    });
}

function setupui() {
    const token = localStorage.getItem("token");
    if(token == null){
        Swal.fire("No token found. Please log in.");
    } else {
        Swal.fire("You are logged in successfully");
        setTimeout(() => {
            location.replace("/pages/home-page.html"); 
        }, 2000);
    }
}

function login() {
   iconfirm();
}
// function confirm to log out 
function iconfirm() {
    var r = confirm("Do you really want to log out from website.");
    if (r==true)
        {
            const token = localStorage.removeItem("token");
            Swal.fire("you are logged out");
            setTimeout(()=>{
                location.replace("/index.html");
            },2000)
           
            
            return true;
        }
        else{
            window.location="";
        }
}


/////////////////////////////deluser////////////////////////////////////
document.getElementById("deluser").addEventListener("click", deleteuser);

async function deleteuser() {
    try {
        const userData = localStorage.getItem("user");
        if (!userData) {
            throw new Error('User data not found in localStorage');
        }
        
        const parsedUser = JSON.parse(userData);
        const id = parsedUser.id;
        const token = parsedUser.token;
        
        if (!id || !token) {
            throw new Error('User ID or token missing or invalid');
        }
        
        const url = `https://graduation-project-2q7g.onrender.com/api/v1/user/${id}`;

        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (true) {
            Swal.fire({
                title: 'Success',
                text: 'User deleted successfully',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false
            }).then(() => {
                location.replace("../pages/signup-page.html");
            });
        } else {
            const errorData = await response.json();
            throw new Error(`Failed to delete user: ${errorData.message}`);
        }
    } catch (error) {
        Swal.fire('Error', error.message, 'error');
    }
}
/////////////////////////////canceldeleteuser()////////////////////////////////////////////////////////
function canceldeluser() {
    location.replace("/pages/home-page.html")
}
///////////////////////////////////////////////////////////////////////////////////////////////////////