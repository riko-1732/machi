function checkShadow(selectedValue) {
  const shadowOptions = document.getElementsByName("shadow");
  shadowOptions.forEach((option) => {
    if (option.value !== selectedValue) {
      option.checked = false;
    }
  });
}

function checkTraffic(selectedValue) {
  const trafficOptions = document.getElementsByName("traffic");
  trafficOptions.forEach((option) => {
    if (option.value !== selectedValue) {
      option.checked = false;
    }
  });
}

function submitForm() {
  const form = document.getElementById("selectionForm");
  form.submit();
}
