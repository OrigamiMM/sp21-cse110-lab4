function timePerSecond(){
    let d = new Date();
    console.log(d.toLocaleTimeString());
}
setInterval(timePerSecond, 1000)