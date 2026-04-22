// Live clock for footer
function updateClock() {
  var el = document.getElementById('clock');
  if (!el) return;
  var now = new Date();
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var day = days[now.getDay()];
  var month = months[now.getMonth()];
  var date = now.getDate();
  var year = now.getFullYear();
  var hours = now.getHours();
  var minutes = String(now.getMinutes()).padStart(2, '0');
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  el.textContent = day + ', ' + month + ' ' + date + ', ' + year + ' ' + hours + ':' + minutes + ' ' + ampm;
}
updateClock();
setInterval(updateClock, 1000);