var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";
function player_update() {
    fabric.img.fromURL("player.png", function (img) {
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToheigt(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    })
}
function new_image(get_image) {
    fabric.img.fromURL("player.png", function (img) {
        player_object = img;
        player_object.scaleToWidth(block_image_width);
        player_object.scaleToheigt(block_image_height);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    })
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == '80') {
        console.log("shift&p was pressed")
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width
        document.getElementById("current_height").innerHTML = block_image_height
    }

    if (e.shiftKey == true && keypressed == '77') {
        console.log("shift&m was pressed")
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width
        document.getElementById("current_height").innerHTML = block_image_height
    }

    if (keypressed == '67') {
        console.log("c was pressed");
        new_image("cloud.jpg");
    }
    if (keypressed == '68') {
        console.log("d was pressed");
        new_image("dark_green.png");
    }
    if (keypressed == '71') {
        console.log("g was pressed");
        new_image("ground.png");
    }
    if (keypressed == '76') {
        console.log("l was pressed");
        new_image("light_green.png");
    }
    if (keypressed == '82') {
        console.log("r was pressed");
        new_image("roof.jpg");
    }
    if (keypressed == '84') {
        console.log("t was pressed");
        new_image("trunk.jpg");
    }
    if (keypressed == '85') {
        console.log("u was pressed");
        new_image("unique.png");
    }
    if (keypressed == '87') {
        console.log("w was pressed");
        new_image("wall.jpg");
    }
    if (keypressed == '89') {
        console.log("y was pressed");
        new_image("yellow_wall.png");
    }
    if (keypressed == '37') {
        console.log("left was pressed");

    }
    if (keypressed == '38') {
        console.log("up was pressed");

    }

    if (keypressed == '39') {
        console.log("right was pressed");

    }

    if (keypressed == '40') {
        console.log("down was pressed");
    }



}
function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("block_image_height =" + block_image_height);
        canvas.remove(player_object);
        player_update();

    }

}
function down () {
    if ( player_y <=600){
    player_y = player_y -block_image_height;
    console.log ("block_image_height =" + block_image_height);
    canvas.remove(player_object);
    player_update();
    
    }}
    function left () {
        if ( player_x >=0){
        player_x = player_x -block_image_width;
        console.log ("block_image_width =" + block_image_width);
        canvas.remove(player_object);
        player_update();
        
        }}
        function up () {
            if ( player_x <=850){
            player_x = player_x -block_image_width;
            console.log ("block_image_width =" + block_image_width);
            canvas.remove(player_object);
            player_update();
            
            }}