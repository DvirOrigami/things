function fillOrigamiFields() {
  const fld1 = document.querySelector('select[name="fld_2244"]');
  const fld2 = document.querySelector('input[name="fld_2243"], select[name="fld_2243"]');

  if (fld1 && fld2) {
    fld1.value = "א";
    fld1.dispatchEvent(new Event('change', { bubbles: true }));
    console.log("✅ fld_2244 set to א");

    fld2.value = "ליד";
    fld2.dispatchEvent(new Event('input', { bubbles: true }));
    fld2.dispatchEvent(new Event('change', { bubbles: true }));
    console.log("✅ fld_2243 set to ליד");

    return true; // success
  }

  return false; // not ready yet
}

// Repeatedly check until fields appear
function waitForOrigamiForm() {
  const interval = setInterval(() => {
    if (fillOrigamiFields()) {
      clearInterval(interval);
    }
  }, 1000); // check every 1s
}

// Run when Origami form finishes loading
window.addEventListener('load', () => {
  console.log("🌐 Page loaded, waiting for Origami form...");
  setTimeout(waitForOrigamiForm, 2000); // small delay before starting to check
});
