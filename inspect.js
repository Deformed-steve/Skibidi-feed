// Toggle inspect mode on/off
let inspectMode = false;

document.addEventListener('click', (e) => {
  if (!inspectMode) return;
  
  e.preventDefault();
  e.stopPropagation();
  
  // Highlight clicked element
  const el = e.target;
  el.style.outline = '2px solid red';
  
  // Log element info to console
  console.log('Selected:', el);
  console.log('HTML:', el.outerHTML.slice(0, 100) + '...');
}, true);

// Toggle with keyboard shortcut
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && e.code === 'KeyI') {
    inspectMode = !inspectMode;
    console.log(`Inspect Mode ${inspectMode ? 'ON' : 'OFF'}`);
    alert(`Inspect Mode ${inspectMode ? 'ON' : 'OFF'}`);
  }
});
