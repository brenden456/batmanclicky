let clicks;
let clickrate = 1
let clickprice = 30
let clickupgrades = 1
document.getElementById("upgrade1"). innerHTML = clickprice + "  batterang 2x per click ";
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
clickrate = clickrate + (2 * clickupgrades);
clickupgrades++;
clickprice = 30 * clickupgrades;
document.getElementById("upgrade1"). innerHTML = clickprice + " batterang 2x per click"
document.getElementById("counter").innerHTML = clicks
checkupgrade()
}

