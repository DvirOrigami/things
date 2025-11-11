(function() {
  console.log("🚀 Origami iframe script loaded");

  // Helper to fill the fields
  function fillOrigamiFields() {
    const fld1 = document.querySelector('select[name="fld_2244"]');
    const fld2 = document.querySelector('input[name="fld_2243"], select[name="fld_2243"]');

    if (fld1 && fld2) {
      // Step 1: set fld_2244
      fld1.value = "א";
      fld1.dispatchEvent(new Event('change', { bubbles: true }));
      console.log("✅ fld_2244 set to א");

      // Step 2: set fld_2243
      fld2.value = "ליד";
      fld2.dispatchEvent(new Event('input', { bubbles: true }));
      fld2.dispatchEvent(new Event('change', { bubbles: true }));
      console.log("✅ fld_2243 set to ליד");

      return true;
    }

    return false;
  }

  // Keep checking until fields are available
  function waitForFields() {
    const checkInterval = setInterval(() => {
      if (fillOrigamiFields()) {
        clearInterval(checkInterval);
        console.log("🎯 Fields filled successfully");
      } else {
        console.log("⏳ Waiting for fields to load...");
      }
    }, 1000);
  }

  // Wait a short moment to ensure Origami fully renders the form
  window.addEventListener('load', () => {
    console.log("🌐 Iframe DOM loaded, starting watcher...");
    setTimeout(waitForFields, 1500);
  });
})();
