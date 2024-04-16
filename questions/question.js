// //using selectors inside the element
// const questions = document.querySelectorAll(".question");
// console.log(questions)

// questions.forEach(function (ques) {
//   const btn = ques.querySelector(".question-btn");
//   // console.log(question);

//   btn.addEventListener("click", function () {
//     console.log(btn);

//     questions.forEach(function (item) {
//       if (item !== ques) {
//         item.classList.remove("show-text");
//       }
//     });

//     ques.classList.toggle("show-text");
//   });
// });

// traversing the dom
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
    // console.log(btn);
  btn.addEventListener("click", function (e) {
    // console.log(e.target.parentElement.parentElement);
    const question = e.currentTarget.parentElement.parentElement;

    question.classList.toggle("show-text");
  });
});