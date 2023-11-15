function resetForm() {
  const bmiText = document.getElementById("bmi");
  const resultText = document.getElementById("result");
  bmiText.textContent = 0;
  resultText.textContent = "";
}

function submitForm() {
  const bmiText = document.getElementById("bmi");
  const resultText = document.getElementById("result");

  
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert("Please enter a valid weight and height");
  }

  const heightInMeters = height / 100; // cm -> m
  const bmi = (weight / Math.pow(heightInMeters, 2)).toFixed(2);
  bmiText.textContent = bmi;

  const result = showBMI(bmi);
  resultText.innerHTML = `You are <strong>${result}</strong>`;
}

function showBMI(bmi) {
  if (bmi < 18.5) {
      return "underweight";
  } else if (bmi > 18.5 && bmi < 24.9) {
      return "healthy";
  } else if (bmi > 25 && bmi < 29.9) {
      return "overweight";
  } else {
      return "obese";
  }
}