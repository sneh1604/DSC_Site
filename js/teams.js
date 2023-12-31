const memberContainer = document.querySelector("#memberContainer");
const almContainer = document.querySelector("#almContainer");

let teamMembers = [
  {
    name: "Rinkal Mav",
    url: "url",
    img_path: "images/rinkl.png",
    designation: "Lead",
  },
  {
    name: "Vaidehi Ghodasara",
    url: "url",
    img_path: "images/vaidehi.png",
    designation: "Co-Lead",
  },
  {
    name: "Kshitiz Pandya",
    url: "url",
    img_path: "images/kshitij.png",
    designation: "Tech-Lead",
  },
  {
    name: "Samarth Chauhan",
    url: "url",
    img_path: "images/samarth.png",
    designation: "Technical Team",
  },
  {
    name: "Anmol Chauhan",
    url: "url",
    img_path: "images/anmol.png",
    designation: "Technical Team",
  },
  {
    name: "Kirtan Matalia",
    url: "url",
    img_path: "images/Kirtan.png",
    designation: "Technical Team",
  },
  {
    name: "Sneh Shah",
    url: "url",
    img_path: "images/sneh.png",
    designation: "Web Developer",
  },
  {
    name: "Parshwa Salot",
    url: "url",
    img_path: "images/parshwa.png",
    designation: "Graphic Designer",
  },
  {
    name: "Jiya Thakkar",
    url: "url",
    img_path: "images/jiya.png",
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
        <img class="img-fluid" src="${mem.img_path}" alt="" />
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

  




let almMembers = [
  {
    name: "Zeel Amrutiya",
    url: "url",
    img_path: "images/lead-1.png",
    designation: "Lead",
  },
  {
    name: "Aayush Ghadiya",
    url: "url",
    img_path: "images/co-lead-1.png",
    designation: "Co-Lead",
  },
  {
    name: "Megha Goriya",
    url: "url",
    img_path: "images/co-lead-2.png",
    designation: "Co-Lead",
  },
  {
    name: "Jhanvi Shah",
    url: "url",
    img_path: "images/Jhanvi.png",
    designation: "ML Team",
  },
  {
    name: "Nishit Patel",
    url: "url",
    img_path: "images/web-dev-2.png",
    designation: "Web Developer",
  },
  {
    name: "Shrey Makwana",
    url: "url",
    img_path: "images/web-dev-3.png",
    designation: "Web Developer",
  },
  {
    name: "Vitan Tarpara",
    url: "url",
    img_path: "images/web-dev-1.png",
    designation: "Web Developer",
  },
  {
    name: "Omshree Butani",
    url: "url",
    img_path: "images/content-writer 1.png",
    designation: "Content Writer",
  },
  {
    name: "Shrey Navadiya",
    url: "url",
    img_path: "images/graphic.png",
    designation: "Graphic Designer",
  },
  {
    name: "Malav Champaneria",
    url: "url",
    img_path: "images/member1.jpg",
    designation: "Member",
  },
  {
    name: "Jiten Bhalavat",
    url: "url",
    img_path: "images/member2.jpg",
    designation: "Member",
  },
];


addTeamMembers(teamMembers, memberContainer);
// TODO: Replace teammember with alumni
addTeamMembers(almMembers, almContainer);