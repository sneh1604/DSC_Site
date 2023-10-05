// Add Dynamic Teams Data
/*  Image Path
    Linkedin url
    name 
    designation
 a*/

let teamMembers = [
  {
    name: "Samarth Chauhan",
    url: "url",
    img_path: "images/lead-1.png",
    designation: "Tech Member",
  },
  {
    name: "Samarth Chauhan",
    url: "url",
    img_path: "images/lead-1.png",
    designation: "Tech Member",
  },
  {
    name: "Samarth Chauhan",
    url: "url",
    img_path: "images/lead-1.png",
    designation: "Tech Member",
  },
];

// let member_template =;

const memberContainer = document.querySelector("#memberContainer");
function addTeamMembers() {
  teamMembers.forEach((mem) => {
    memberContainer.innerHTML += `<div class="col-12 col-sm-6 col-lg-3">
    <div
      class="single_advisor_profile wow fadeInUp"
      data-wow-delay="0.5s"
      style="
        visibility: visible;
        animation-delay: 0.5s;
        animation-name: fadeInUp;
      "
    >
      <!-- Profile Picture-->
      <div class="advisor_thumb">
        <img src="${mem.img_path}" alt="" />
        <!-- Social Info-->
        <div class="social-info">
          <a
            href="${mem.url}"
            ><i
              class="uil uil-linkedin"
              style="font-size: 1.5rem !important"
            ></i
          ></a>
        </div>
      </div>
      <!-- Team Details-->
      <div class="single_advisor_details_info">
        <h6>${mem.name}</h6>
        <p class="designation">${mem.designation}</p>
      </div>
    </div>
    </div>
    `;
  });
}

addTeamMembers();
