//取得聲音range
var soundRange = document.getElementById("soundRange");


//取得聲音距離
var soundRangeWidth = (value) => {
    document.documentElement.style.setProperty("--soundRange", 100 - value + "%");
    if (value < 1) {
        $(".icon_volume").removeClass("fa-volume-high");
        $(".icon_volume").removeClass("fa-volume-low");
        $(".icon_volume").addClass("fa-volume-xmark");

    } else if (value < 45) {
        $(".icon_volume").removeClass("fa-volume-xmark");
        $(".icon_volume").removeClass("fa-volume-high");
        $(".icon_volume").addClass(" fa-volume-low");

    } else {
        $(".icon_volume").removeClass("fa-volume-low");
        $(".icon_volume").removeClass("fa-volume-xmark");
        $(".icon_volume").addClass("fa-volume-high");
    }
}

//更改聲音距離顏色
function updateSoundRangeProperty() {
    soundRangeWidth(soundRange.value);
}

soundRange.addEventListener("input", updateSoundRangeProperty);