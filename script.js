function getBmiValue() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  height = height * 12;
  height = height * 0.025;

  let updateBMI = weight / (height * height);

  let updatedBMI = Math.round(updateBMI);
  document.getElementById("bmiValue").value = updatedBMI;
}
console.log("BMI Calc");
