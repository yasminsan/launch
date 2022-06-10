$(document).on("click", ".topmenu", function(a) {
    a.preventDefault();
    modal = $(a.target).attr("href");
    $(modal).show()
});
$(document).on("click", ".close", function(a) {
    a.preventDefault();
    $(".modal").hide()
});
window.onclick = function(a) { a.target.classList.contains("modal") && $(".modal").hide() };
$("#navbutton").on("click", function() { mobMenu(this) });

function copyToClipboard(a) {
    var b = $("<textarea>");
    $("body").append(b);
    b.val($(a).text()).select();
    document.execCommand("copy");
    b.remove()
}

function download(a, b) {
    var d = document.getElementById(b).textContent,
        c = document.createElement("a");
    c.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(d));
    c.setAttribute("download", a);
    c.style.display = "none";
    document.body.appendChild(c);
    c.click();
    document.body.removeChild(c)
}

function mobMenu(a) { a.classList.toggle("change") }

function inputData(a) {
    var b = document.getElementById(a).value;
    document.getElementsByClassName(a).innerHTML = b
}

function toggleFullScreen(a) {
    document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement ? document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen() : (element = $(a).get(0), element.requestFullscreen ? element.requestFullscreen() : element.mozRequestFullScreen ? element.mozRequestFullScreen() :
        element.webkitRequestFullscreen ? element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : element.msRequestFullscreen && element.msRequestFullscreen())
}

function getQR(a) {
    a = encodeURIComponent($(a).val());
    $("#refqr").html('<img style="max-width: 100%" src="https://8coins.org/qr/referralqr.php?data=' + a + '">');
    $("#refd").attr("href", "https://8coins.org/qr/referralqr.php?data=" + a);
    $("#qr").show()
};
id