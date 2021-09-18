let No1 = document.getElementById("No1");
let No2 = document.getElementById("No2");
let calculate = document.getElementById("calculate");
let account = document.getElementById("account");

let sum = (No1, No2) => {
  account.innerHTML = "Equal: " + (Number(No1.value) + Number(No2.value));
};
calculate.addEventListener("click", () => {
  sum(No1, No2);
});
