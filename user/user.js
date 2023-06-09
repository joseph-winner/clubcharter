import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyA7Xn_kdr3M_kag0KOEDXwEn6COKj_zMp0",
  authDomain: "club-charter.firebaseapp.com",
  projectId: "club-charter",
  storageBucket: "club-charter.appspot.com",
  messagingSenderId: "791735066229",
  appId: "1:791735066229:web:670e542f7ca1ea4ea9a23c",
};

const app = initializeApp(firebaseConfig);
let db = getFirestore(app);


var searchInp = document.querySelector("#searchname").value;
document.querySelector(".user-name").innerHTML = searchInp;

async function readData() {
  var users = [];
  const querySnapshot = await getDocs(collection(db, "Members"));
  querySnapshot.forEach((doc) => {
    users = doc.data();
    user(users);
  })
}

async function user(userData){
var searchBtn = document.querySelector(".search-btn")
searchBtn.addEventListener("click", ()=>{
  var searchInput = document.querySelector("#searchname");
  if(searchInput.value === userData.handle){
    var profilecardarea = document.querySelector(".profile-holder");
    var profileContainer = document.createElement("div");
    var user_name = userData.userName
      var user_passport = userData.userPassport
      var user_qid = userData.userQid
      var user_address = userData.userAddress
      var user_phone = userData.userPhone
      var user_email = userData.useremail
      var kin_name = userData.kinNam
      var kin_id = userData.kinid
      var kin_address = userData.kinaddress
      var kin_phone = userData.kinphone
      var kin_email = userData.kinemail
      var passportPhoto = userData.imageLinks[0]
      var QidFrontPhoto = userData.imageLinks[1]
      var QidBackPhoto = userData.imageLinks[2]
      var profileContainerContent = `
      <div class="user-details--list">
      <div class="user-info-details">
        <div class="user-profile-header">
        <p class="back-home-btn">
        <a href="../index.html"><i class="fa fa-angle-double-left" aria-hidden="true"></i></a>
        </p>
        <h3>CLUB CHARTER</h3>
        </div>
          
          <article class="personal-info-profile" id="informational-data">
              <h5>PERSONAL INFORMATION</h5>
              <h6>FULL NAME:</h6>
              <p class="user-personal-name">${user_name}</p>
                      
                          <h6>EMAIL:</h6>
                          <p class="user-personal-email"> ${user_email} </p>
                      
                          <div class="user-personal-info-cols-1">
                              <div>
                                  <h6>PASSPORT:</h6>
                                  <p class="user-personal-passport"> ${user_passport} </p>
                              </div>
                       
                              <div>
                                  <h6>QATARID:</h6>
                                  <p class="user-personal-qid"> ${user_qid} </p>
                              </div>
                      
                          </div>
                          <div class="user-personal-info-cols-1">
                              <div>
                                  <h6>ADDRESS:</h6>
                                  <p class="user-personal-address">${user_address}</p>
                              </div>
                      
                              <div>
                                  <h6>PHONE:</h6>
                                  <p class="user-personal-phone"> ${user_phone} </p>
                              </div>
                          </div>
                      </article>
                      
                      <article class="kin-info-profile" id="informational-data">
                          <h5>NEXT OF KIN INFORMATION</h5>
                          <h6>FULL NAME:</h6>
                          <p class="kin-personal-name"> ${kin_name} </p>
                      
                          <h6>EMAIL:</h6>
                          <p class="kin-personal-email"> ${kin_email} </p>
                      
                          <div class="kin-personal-info-cols-1">
                              <div>
                                  <h6>ID:</h6>
                                  <p class="kin-personal-id"> ${kin_id} </p>
                              </div>
                      
                          </div>
                          <div class="kin-personal-info-cols-1">
                              <div>
                                  <h6>ADDRESS:</h6>
                                  <p class="kin-personal-address"> ${kin_address} </p>
                              </div>
                      
                              <div>
                                  <h6>PHONE:</h6>
                                  <p class="kin-personal-phone"> ${kin_phone} </p>
                  </div>
              </div>
          </article>
  
          <article class="photos-section" id="informational-data">
              <h5>PERSONAL INFORMATION</h5>
              <div class="user-profile-passport">
                  <img src="${passportPhoto}" alt="">
              </div>
              <div class="user-profile-qid-front">
                  <img src="${QidFrontPhoto}" alt="">
              </div>

              <div class="user-profile-qid-back">
                  <img src="${QidBackPhoto}" alt="">
              </div>
          </article>
      </div>
  </div>
      `;
      profileContainer.innerHTML = profileContainerContent;
      profilecardarea.append(profileContainer);
      document.querySelector(".admin-section").style.display = "none";
      document.querySelector(".admin-card-holder").style.display = "none";
  }
})
}



readData();