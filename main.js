const input = document.getElementById("date");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  const birthDate = new Date(input.value);
  console.log(birthDate);
  const diff = Date.now() - birthDate.getTime();
  console.log(diff);
  const ageDate = new Date(diff);
  console.log(ageDate);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  result.innerHTML = `You are ${age} years old`;
});
