// Wait 3 seconds after page load, then fill both fields in order
setTimeout(() => {
  // Step 1: fld_1368 (Select2 dropdown)
  const select2 = document.querySelector('select[name="fld_1368"]');
  if (select2) {
    select2.value = "אבחון";
    select2.dispatchEvent(new Event('change', { bubbles: true }));
    console.log("✅ fld_1368 set to אבחון");
  } else {
    console.log("⚠️ fld_1368 not found");
  }

  // Step 2: fld_1331 (text or select field)
  const leadField = document.querySelector('input[name="fld_1331"], select[name="fld_1331"]');
  if (leadField) {
    leadField.value = "ליד";
    leadField.dispatchEvent(new Event('input', { bubbles: true }));
    leadField.dispatchEvent(new Event('change', { bubbles: true }));
    console.log("✅ fld_1331 set to ליד");
  } else {
    console.log("⚠️ fld_1331 not found");
  }
}, 3000); // wait 3 seconds
