let clicks;
let clickrate = 1
let clickprice = 30
let clickupgrades = 1
document.getElementById("upgrade1"). innerHTML = clickprice + "  batterang 2x per click ";

function clicker() {
  clicks = Number(document.getElementById("counter").innerHTML)
  clicks = clicks + clickrate
  document.getElementById("counter").innerHTML = clicks
  console.log("click price: $", clickprice);
  checkupgrade()
}

function checkupgrade() {
  console.log(clicks>=clickprice, clicks);
  console.log(document.getElementById("counter").innerHTML >= clickprice);
  if (document.getElementById("counter").innerHTML >= clickprice) { 
    console.log("remove ishidden");
    document.getElementById("upgrade1").classList.remove("isHidden");
  } else {
    document.getElementById("upgrade1").classList.add("isHidden")
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

