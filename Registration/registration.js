import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getFirestore, collection, doc, setDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
  import { getStorage, ref, uploadBytes  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js";
  const firebaseConfig = {
    apiKey: "AIzaSyA7Xn_kdr3M_kag0KOEDXwEn6COKj_zMp0",
    authDomain: "club-charter.firebaseapp.com",
    projectId: "club-charter",
    storageBucket: "club-charter.appspot.com",
    messagingSenderId: "791735066229",
    appId: "1:791735066229:web:670e542f7ca1ea4ea9a23c"
  };

  const app = initializeApp(firebaseConfig);
  let db = getFirestore(app)
  const storage = getStorage(app);


  var inputImages = document.getElementsByClassName("imageFile")
  var passport_photo = inputImages[0]
  var qidFront_photo = inputImages[1]
  var qidBack_photo = inputImages[2]
  var imagesArr = [];
    passport_photo.addEventListener("change",(e) =>{
        var imageChanges = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            imageArr1(reader.result);
            document.querySelector("#passarea").src = (reader.result);
            document.querySelector("#passarea").style.display = "block"
            passport_photo.style.display = "none"
            
        }
        reader.readAsDataURL(imageChanges);
    })

    function imageArr1(file1){
        imagesArr.push(file1)
    }

    qidFront_photo.addEventListener("change",(e) =>{
        var imageChanges = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            imageArr2(reader.result);
            document.querySelector("#qid--frontkarea").src = (reader.result);
            document.querySelector("#qid--frontkarea").style.display = "block"
            qidFront_photo.style.display = "none"
            
        }
        reader.readAsDataURL(imageChanges);
    })
    function imageArr2(file2){
        imagesArr.push(file2)
    }

    qidBack_photo.addEventListener("change",(e) =>{
        var imageChanges = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            imageArr3(reader.result);
            document.querySelector("#qid--backarea").src = (reader.result);
            document.querySelector("#qid--backarea").style.display = "block"
            qidBack_photo.style.display = "none"
        }
        reader.readAsDataURL(imageChanges);
    })
    function imageArr3(file3){
        imagesArr.push(file3)
    }

// console.log(imagesArr)

  var form_3_doneBtn = document.querySelector(".form-3-btn .done-btn");
    form_3_doneBtn.addEventListener("click", () =>{
        var userNam = document.querySelector(".input-wrapper #user-nam").value
        var handle = document.querySelector("#handle").value;
        var userNam = document.querySelector(".input-wrapper #user-nam").value
        var userpassport = document.querySelector(".input-wrapper #passport").value
        var userqid = document.querySelector(".input-wrapper #qid").value
        var useraddress = document.querySelector(".input-wrapper #address").value
        var userphone = document.querySelector(".input-wrapper #phone").value
        var useremail = document.querySelector(".input-wrapper #email").value
        var kinNam = document.querySelector(".input-wrapper #kin-name").value
        var kinid = document.querySelector(".input-wrapper #kin-id").value
        var kinaddress = document.querySelector(".input-wrapper #kin-address").value
        var kinphone = document.querySelector(".input-wrapper #kin-phone").value
        var kinemail = document.querySelector(".input-wrapper #kin-email").value
        // console.log(imagesArr)
        setDoc(doc(db, "Members", handle), {
            userName: userNam,
            handle: handle,
            userPassport: userpassport,
            userQid: userqid,
            userAddress: useraddress,
            userPhone: userphone,
            useremail: useremail,
            kinNam:kinNam,
            kinid:kinid,
            kinaddress:kinaddress,
            kinphone:kinphone,
            kinemail:kinemail,
            imageLinks: imagesArr
          });
          
    })


// FORM VALIDATION
var form_1 = document.querySelector(".form-1-data-info");
var form_2 = document.querySelector(".form-2-data-info");
var form_3 = document.querySelector(".form-3-data-info");

var form_1_btn = document.querySelector(".form-1-btn");
var form_2_btn = document.querySelector(".form-2-btn");
var form_3_btn = document.querySelector(".form-3-btn");

var form_1_next_btn = document.querySelector(".form-1-btn .next-btn");
var form_2_next_btn = document.querySelector(".form-2-btn .next-btn");
var form_2_back_btn = document.querySelector(".form-2-btn .back-btn");
var form_3_done_btn = document.querySelector(".form-3-btn .done-btn");
var form_3_back_btn = document.querySelector(".form-3-btn .back-btn");

var form_2_progressbar = document.querySelector(".form-2-progressbar")
var form_3_progressbar = document.querySelector(".form-3-progressbar")

var errorBtn = document.querySelector(".error-closebtn")
const sucessMessage = document.querySelector(".success-message")
var regUser = document.querySelector(".success-name");


// FORM PROGRESS
form_1_next_btn.addEventListener("click", () =>{
    form_1.style.display = "none";
    form_2.style.display = "block";

    form_1_btn.style.display = "none"
    form_2_btn.style.display = "flex"

    form_2_progressbar.classList.add("active")
    // handleinputs();
})



form_2_back_btn.addEventListener("click", () =>{
    form_1.style.display = "block";
    form_2.style.display = "none";

    form_1_btn.style.display = "flex"
    form_2_btn.style.display = "none"
    
    form_2_progressbar.classList.remove("active")
})

form_2_next_btn.addEventListener("click", () =>{
    form_2.style.display = "none";
    form_3.style.display = "block";

    form_2_btn.style.display = "none"
    form_3_btn.style.display = "flex"

    form_3_progressbar.classList.add("active")
    // handleInputs();
})

form_3_back_btn.addEventListener("click", () =>{
    form_2.style.display = "block";
    form_3.style.display = "none";

    form_2_btn.style.display = "flex"
    form_3_btn.style.display = "none"

    form_3_progressbar.classList.remove("active")
})

form_3_done_btn.addEventListener("click", ()=>{
    sucessMessage.style.display = "block";
    regUser.innerText = userNam.value;
})

// HANDLE EMPTY INPUTS
var userNam = document.querySelector(".input-wrapper #user-nam")
var userpassport = document.querySelector(".input-wrapper #passport")
var userqid = document.querySelector(".input-wrapper #qid")
var useraddress = document.querySelector(".input-wrapper #address")
var userphone = document.querySelector(".input-wrapper #phone")
var useremail = document.querySelector(".input-wrapper #email")
var handle = document.querySelector("#handle");

var kinNam = document.querySelector(".input-wrapper #kin-name")
var kinid = document.querySelector(".input-wrapper #kin-id")
var kinaddress = document.querySelector(".input-wrapper #kin-address")
var kinphone = document.querySelector(".input-wrapper #kin-phone")
var kinemail = document.querySelector(".input-wrapper #kin-email")




function handleinputs(){
    if(userNam.value==="" || handle.value || userpassport.value ==="" || userqid.value==="" || useraddress.value === "" || userphone.value ==="" || useremail.value ===""){
        document.querySelector(".error-message").style.display = "flex";
        form_1.style.display = "block";
        form_2.style.display = "none";

        form_1_btn.style.display = "flex"
        form_2_btn.style.display = "none"

        form_2_progressbar.classList.remove("active")
    } 
}


function handleInputs(){
    if(kinNam.value==="" || kinid.value==="" || kinaddress.value === "" || kinphone.value ==="" || kinemail.value ===""){
        document.querySelector(".error-message").style.display = "flex";
        form_2.style.display = "block";
        form_3.style.display = "none";

        form_2_btn.style.display = "flex"
        form_3_btn.style.display = "none"

        form_3_progressbar.classList.remove("active")
    } 
}

errorBtn.addEventListener("click", ()=>{
    document.querySelector(".error-message").style.display = "none";
})


















// var imagesec1 = document.querySelector(".image-selected-1")
// var imagesec2 = document.querySelector(".image-selected-2")
// var imagesec3 = document.querySelector(".image-selected-3")
// var smallBtns1 = document.querySelector(".small-img-btn1")
// var smallBtns2 = document.querySelector(".small-img-btn2")
// var smallBtns3 = document.querySelector(".small-img-btn3")

// // IMAGE ONE
// imagesec1.addEventListener("click", function(e){
//     var input = document.createElement('input');
//     input.type = 'file';
//     input.onchange = e => {
//         files1 = e.target.files;
//         reader = new FileReader();
//         reader.onload = function(){
//             document.querySelector(".fire-base1").src = reader.result;
//             document.querySelector(".fire-base1").style.display = "block";
//             smallBtns1.style.display = "block";
//             imagesec1.style.display = "none";
//         }
//         reader.readAsDataURL(files1[0])
//         var imageText = document.querySelector("#passport-photo").innerText;
//         let storageRef = firebase.storage().ref("images/"+imageText)
//         console.log(storageRef)
//     }
//     input.click();

// })


// smallBtns1.addEventListener("click", function(e){
//     var input = document.createElement('input');
//     input.type = 'file';
//     input.onchange = e => {
    //         files1 = e.target.files;
    //         reader = new FileReader();
    //         reader.onload = function(){
//             document.querySelector(".fire-base1").src = reader.result;
//             document.querySelector(".fire-base1").style.display = "block";
//             smallBtns1.style.display = "block";
//             imagesec1.style.display = "none";
//         }
//         reader.readAsDataURL(files1[0])
//     }
//     input.click();
// })

// // IMAGE TWO
// imagesec2.addEventListener("click", function(e){
//     var input = document.createElement('input');
//     input.type = 'file';
//     // input.accept = ".jpeg, .jpg, .png";
//     input.onchange = e => {
    //         files2 = e.target.files;
//         reader = new FileReader();
//         reader.onload = function(){
    //             document.querySelector(".fire-base2").src = reader.result;
    //             document.querySelector(".fire-base2").style.display = "block";
    //             smallBtns2.style.display = "block";
    //             imagesec2.style.display = "none";
//         }
//         reader.readAsDataURL(files2[0])
//     }
//     input.click();
// })

// smallBtns2.addEventListener("click", function(e){
//     var input = document.createElement('input');
//     input.type = 'file';
//     // input.accept = ".jpeg, .jpg, .png";
//     input.onchange = e => {
//         files2 = e.target.files;
//         reader = new FileReader();
//         reader.onload = function(){
    //             document.querySelector(".fire-base2").src = reader.result;
    //             document.querySelector(".fire-base2").style.display = "block";
    //             smallBtns2.style.display = "block";
    //             imagesec2.style.display = "none";
    //         }
    //         reader.readAsDataURL(files2[0])
    //     }
    //     input.click();
    // })

    
    // // IMAGE THREE
    // imagesec3.addEventListener("click", function(e){
    //     var input = document.createElement('input');
    //     input.type = 'file';
    //     input.onchange = e => {
        //         files3 = e.target.files;
        //         reader = new FileReader();
//         reader.onload = function(){
//             document.querySelector(".fire-base3").src = reader.result;
//             document.querySelector(".fire-base3").style.display = "block";
//             smallBtns3.style.display = "block";
//             imagesec3.style.display = "none";
//         }
//         reader.readAsDataURL(files3[0])
//     }
//     input.click();
// })

// smallBtns3.addEventListener("click", function(e){
    //     var input = document.createElement('input');
    //     input.type = 'file';
//     console.log(input)
//     input.onchange = e => {
    //         files3 = e.target.files;
    //         reader = new FileReader();
    //         reader.onload = function(){
//             document.querySelector(".fire-base3").src = reader.result;
//             document.querySelector(".fire-base3").style.display = "block";
//             smallBtns3.style.display = "block";
//             imagesec3.style.display = "none";
//         }
//         reader.readAsDataURL(files3[0])
//     }
//     input.click();
// })

        
    

        // sendFile(imageChanges)
    //   function sendFile(file1){
    //     var reader = new FileReader();
    //     reader.onload = function (e) {
    //         var passport = reader.result;
    //         var sendData = document.querySelector(".upload-passport");
    //             sendData.addEventListener("click", () =>{
    //                 var imageuserName = document.querySelector("#user-nam").value;
    //                 var imageName = document.querySelector("#passport-photo-label").innerText;
    //                  setDoc(doc(db, "Passport", imageuserName), {
    //                     imageName: imageuserName,
    //                     imageLink: passport
    //                   });
    //             })
    //     }
    //     reader.readAsDataURL(file1);
    //   }
    
    
    // //   CASE QID FRONT
    // var qidFront_photo = inputImages[1]
    // qidFront_photo.addEventListener("change",(e) =>{
    //     var imageChanges = e.target.files[0];
    //     sendFileqidfront(imageChanges)
    // })
    
    // function sendFileqidfront(file2){
    // var reader = new FileReader();
    // reader.onload = function (e) {
    //     var qidFront = reader.result;
    //     var sendData = document.querySelector(".upload-qid-front");
    //         sendData.addEventListener("click", () =>{
    //             var imageuserName = document.querySelector("#user-nam").value;
    //             var imageName = document.querySelector("#qid-front-label").innerText;
    //              setDoc(doc(db, "QidFront", imageuserName), {
    //                 imageName: imageuserName,
    //                 imageLink: qidFront
    //               });
    //         })
    // }
    // reader.readAsDataURL(file2);
    // }
    
    
    // //   CASE QID BACK
    // var qidBack_photo = inputImages[1]
    // qidBack_photo.addEventListener("change",(e) =>{
    //     var imageChanges = e.target.files[0];
    //     sendFileQidback(imageChanges)
    // })
    
    // function sendFileQidback(file3){
    // var reader = new FileReader();
    // reader.onload = function (e) {
    //     var qidBack = reader.result;
    //     var sendData = document.querySelector(".upload-qid-back");
    //         sendData.addEventListener("click", () =>{
    //             var imageuserName = document.querySelector("#user-nam").value;
    //             var imageName = document.querySelector("#qid-back-label").innerText;
    //              setDoc(doc(db, "QidBack", imageuserName), {
    //                 imageName: imageuserName,
    //                 imageLink: qidBack
    //               });
    //         })
    // }
    // reader.readAsDataURL(file3);
    // }
    