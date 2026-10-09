"use strict";

// Deliberately self-contained. No extension detection, real capture, network,
// cookies, storage or clipboard access. The sample lives only in page memory.
(() => {
  const field = document.querySelector("#sample-comment");
  const wipe = document.querySelector("#wipe-sample");
  const restore = document.querySelector("#restore-sample");
  const rescue = document.querySelector("#sample-rescue");
  const status = document.querySelector("#demo-status");
  const state = document.querySelector("#demo-state");
  const controls = document.querySelector("#demo-controls");
  if (!field || !wipe || !restore || !rescue || !status || !state || !controls) return;

  const sample = field.defaultValue;
  // Reset even if the browser restores form state from an earlier visit.
  field.value = field.defaultValue;
  controls.hidden = false;

  wipe.addEventListener("click", () => {
    field.value = "";
    state.textContent = "Page wiped";
    status.textContent = "The sample page cleared its field. A saved copy is ready below. This is a simulation, not the installed extension.";
    wipe.disabled = true;
    rescue.hidden = false;
    restore.focus();
  });

  restore.addEventListener("click", () => {
    field.value = sample;
    state.textContent = "Words restored";
    status.textContent = "The sample is back. Lifeboat's Restore button does this with drafts it has already saved on supported websites.";
    rescue.hidden = true;
    wipe.disabled = false;
    wipe.textContent = "Wipe sample again";
    wipe.focus();
  });
})();
