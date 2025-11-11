(function () {
  console.log("🚀 Origami form automation script started (inside iframe)");

  const TARGET_FIELDS = {
    fld_2244: "א",
    fld_2243: "ליד",
  };

  // Function to fill fields safely
  function tryFillFields() {
    let filled = 0;

    for (const [name, value] of Object.entries(TARGET_FIELDS)) {
      const el = document.querySelector(`input[name="${name}"], select[name="${name}"]`);
      if (el && !el.dataset._autofilled) {
        el.value = value;
        el.dispatchEvent(new Event("input", { bubbles: true }));
        el.dispatchEvent(new Event("change", { bubbles: true }));
        el.dataset._autofilled = "true";
        console.log(`✅ Filled ${name} with "${value}"`);
        filled++;
      }
    }

    return filled === Object.keys(TARGET_FIELDS).length;
  }

  // Use MutationObserver to detect when Origami inserts form fields
  function watchForFields() {
    const observer = new MutationObserver(() => {
      if (tryFillFields()) {
        console.log("🎯 All fields filled successfully, stopping observer.");
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    console.log("👀 Watching DOM for form fields...");
  }

  // Start after iframe DOM is ready
  if (document.readyState === "complete" || document.readyState === "interactive") {
    watchForFields();
  } else {
    window.addEventListener("DOMContentLoaded", watchForFields);
  }
})();
