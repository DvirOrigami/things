// Wait for the full page (including form fields) to load
window.addEventListener('load', () => {
  // Wait 3 seconds after page load
  setTimeout(() => {
    // Step 1: fld_2244 (Select2 dropdown)
    const select2 = document.querySelector('select[name="fld_2244"]');
    if (select2) {
      select2.value = "א";
      select2.dispatchEvent(new Event('change', { bubbles: true }));
      console.log("✅ fld_2244 set to א");
    } else {
      console.log("⚠️ fld_2244 not found");
    }

    // Step 2: fld_2243 (text or select field)
    const leadField = document.querySelector('input[name="fld_2243"], select[name="fld_2243"]');
    if (leadField) {
      leadField.value = "ליד";
      leadField.dispatchEvent(new Event('input', { bubbles: true }));
      leadField.dispatchEvent(new Event('change', { bubbles: true }));
      console.log("✅ fld_2243 set to ליד");
    } else {
      console.log("⚠️ fld_2243 not found");
    }
  }, 3000); // wait 3 seconds
});
