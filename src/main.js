let clicks;
let clickrate = 1
let clickprice = 20
let clickupgrades = 1
document.getElementById("upgrade1"). innerHTML = clickprice + "+ per click batterang all points";
function clicker() {
  clicks = Number(document.getElementById("counter").innerHTML)
  clicks = clicks + clickrate
  document.getElementById("counter").innerHTML = clicks
  checkupgrade()
}

function checkupgrade() {
/* console.log(clicks>=20, clicks); */
  if (Number(document.getElementById("counter").innerHTML) >= clickprice) { 
    document.getElementById("upgrade1").classList.remove("ishidden")
  } else {
    document.getElementById("upgrade1").classList.add("ishidden")
  }
}

function upgrade() {
//   clickrate = clickrate + 2
//   clicks = clicks -20
console.log("i was clicked")
clicks = clicks - clickprice;
clickrate = clickrate + (clickprice * clickupgrades);
clickupgrades++;
clickprice = clickprice * clickupgrades;
document.getElementById("upgrade1"). innerHTML = clickprice + "+ per click batterang all points"
document.getElementById("counter").innerHTML = clicks
checkupgrade()
}

