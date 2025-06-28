let clicks;
let clickrate = 1
let clickprice = 2
let clickupgrades = 0
function clicker() {
  clicks = Number(document.getElementById("counter").innerHTML)
  clicks = clicks + clickrate
  document.getElementById("counter").innerHTML = clicks
  checkupgrade()
}

function checkupgrade() {
/* console.log(clicks>=20, clicks); */
  if (Number(document.getElementById("counter").innerHTML) >= 20) { 
    document.getElementById("upgrade1").classList.remove("ishidden")
  } else {
    document.getElementById("upgrade1").classList.add("ishidden")
  }
}

function upgrade() {
  clickrate = clickrate + 2
  clicks = clicks -20
  document.getElementById("counter").innerHTML = clicks
  checkupgrade()
}

