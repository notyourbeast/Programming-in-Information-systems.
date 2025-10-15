const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const calcSum = document.getElementById("eulerCustom");
a.addEventListener("input", function (e) {
  this.value = this.value.replace(/[^0-9]/g, "");
});
b.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});
c.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});

calcSum.addEventListener("click", (e) => {
  if (
    !parseInt(a.value.trim()) ||
    !parseInt(b.value.trim()) ||
    !parseInt(c.value.trim())
  ) {
    alert("Fields are empty");
    return;
  }
  let sum = 0;
  let n = c.value;
  let aVal = a.value;
  let bVal = b.value;
  for (let i = 1; i < n; i++) {
    if (i % aVal === 0 || i % bVal === 0) {
      sum += i;
    }
  }
  alert(`Sum of multiples of  ${aVal} and ${bVal} less than  ${n} is ${sum}`);
  b.value = "";
  a.value = "";
  c.value = "";
});
