document.getElementById('volume').volume = 0.05;

$(function () {
  count = 0;
  wordsArray = ["Cock Dick Balling ", "Cute & Funny", "uuuuoooohhhhhh", "child belly child erotic", "1376254147272400896", "discord dot cock", "Mohammad (Peace be upon him)", "100% stealth vpn", "Burqa Aimbot", "Wallhack no lag", "100% free no torrent", "it's ironic i swear", "maybe not anymore", "cunny.store", "inflation", "AMD Anti-lag compatible", "I swear she's 500 years old", "Age of Consent? What?", "CS:GO BHop Scripts", "tips and tricks", "yallah yallah", "no motherfucker"];
  setInterval(function () {
    count++;
  $("#word").fadeOut(400, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
    });
  }, 3000);
});

$(function name() {
  var myArray = [
    "Apples",
    "Bananas",
    "Pears"
  ];

  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  document.getElementById("nameOutput").innerHTML = randomItem;
});
