// const skillsSection = document.getElementById("skills");
// const skillBar = document.getElementById("java");

const username = document.getElementById("input-name");
const email = document.getElementById("input-email");
const message = document.getElementById("input-message");
const form = document.getElementById("contact-form");
const errorElement = document.getElementById("input-name-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();


  if (username.value === "") {
    alert("Please the username field");
  } else if (email.value === "") {
    alert("Please the email field");
  } else if (message.value === "") {
    alert("Please send message");
  }else{
    alert("Hurray message is successfuly send !!")
  }
});

// let visible = false;
// let initial = 0;

// const event1 = window.addEventListener("scroll", () => {
//   const position = skillsSection.getBoundingClientRect();
//   console.log(position.top);
//   if (position.top <= 300 && position.top >= -173) {
//     console.log("visible");
//     visible = true;
//     // console.log(visible);
//     const fillBar = setInterval(() => {
//     //   console.log(initial);

//       skillBar.style.width = initial + "%";
//       initial += 1;
//       if (initial >= 80) {
//         clearInterval(fillBar);
//         clearInterval(event1)
//       }
//     }, 5);
//   } else {
//     visible=true;
//     console.log(visible);
//     initial = 0;
//   }
// });

// // const checkVisible = () => {
// //   let initial = 0;
// //   const position = skillsSection.getBoundingClientRect();
// //   if (position.top <= 300 && position.top >= -173) {
// //     visible = true;
// //   } else {
// //     visible = false;
// //     initial = 0;
// //   }
// //   if (visible) {
// //     console.log("start");
// //     const fillBar = setInterval(() => {
// //       skillBar.style.width = initial + "%";
// //       initial += 1;
// //       if (initial >= 80) {
// //         // initial = 0;
// //         clearInterval(fillBar);
// //       }
// //     }, 5);
// //   }
// // };

// // window.addEventListener("scroll", checkVisible);
