const memberContainer = document.querySelector("#memberContainer");
const almContainer = document.querySelector("#almContainer");

let teamMembers = [
  {
    name: "Rinkal Mav",
    url: "url",
    img_path: "images/lead-1.png",
    designation: "Lead",
  },
  {
    name: "Vaidehi Ghodasara",
    url: "url",
    img_path: "images/lead-1.png",
    designation: "Co-Lead",
  },
  {
    name: "Kshitiz Pandya",
    url: "url",
    img_path: "images/lead-1.png",
    designation: "Tech-Lead",
  },
  {
    name: "Samarth Chauhan",
    url: "url",
    img_path: "images/lead-1.png",
    designation: "Technical Team",
  },
  {
    name: "Anmol Chauhan",
    url: "url",
    img_path: "images/lead-1.png",
    designation: "Technical Team",
  },
  {
    name: "Kirtan Matalia",
    url: "url",
    img_path: "images/lead-1.png",
    designation: "Technical Team",
  },
  {
    name: "Parshwa Salot",
    url: "url",
    img_path: "images/lead-1.png",
    designation: "Graphic Designer",
  },
  {
    name: "Sneh Shah",
    url: "url",
    img_path: "images/lead-1.png",
    designation: "Web Developer",
  },
  {
    name: "Jiya Thakkar",
    url: "url",
    img_path: "images/lead-1.png",
    designation: "Content Writer",
  },
];

function addTeamMembers(memberList, container) {
  memberList.forEach((mem) => {
    container.innerHTML += `<div class="col-12 col-sm-6 col-lg-3">
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

addTeamMembers(teamMembers, memberContainer);
// TODO: Replace teammember with alumni
addTeamMembers(teamMembers, almContainer);
