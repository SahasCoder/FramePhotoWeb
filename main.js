function preload(){

}

function setup(){
    canvas = createCanvas(1000 , 500);
    canvas.position(150 , 450);
    video = createCapture(VIDEO);
    video.hide();
    filterColor = "";
    backgroundColor = "";
}

function draw(){
    rect(380, 70, 450, 400);
    fill(backgroundColor)
    image(video, 430, 130, 350, 300);
    tint(filterColor);
}

function setFiltercolor(){
    filterColor = document.getElementById("filter_color_input").value;
}

function setBackgroundcolor(){
    backgroundColor = document.getElementById("background_color_input").value;
}

function take_a_snap(){
    save("ModifiedImage(Frame Image)");
}