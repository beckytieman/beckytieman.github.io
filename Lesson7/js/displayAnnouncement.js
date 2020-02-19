
    var now = new Date();
    var dayOfWeek = now.getDay();
    if (dayOfWeek != 5) {
        document.getElementById("announcement").style.display = "none";
    }

