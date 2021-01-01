// <!-- Set timer -->
//atur waktu dan harinya
var countDownDate = new Date("Jan 5, 2021 10:00:01").getTime();
var x = setInterval(function(){
        var now = new Date().getTime();
        var distance = countDownDate - now;
        //kalkulasi waktu
        var days = Math.floor(distance / ( 1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        //menampilkan
        document.getElementById("demo").innerHTML = days + "d" + hours + "h" + minutes + "m" + seconds + "s";
        //jika angka tercapai
        if (distance < 0){
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);