function menuStart() {
    imageMode(CORNER);
    image(homePageBackgroundImage, 0, 0, width, height);
    image(
        homePagePlayButton,
        screenWidth / 2 - 350 / 2 - 20,
        screenHeight / 2 - 125 / 2.5,
        350,
        125
    );
    if (pointIsInRect([mouseX, mouseY], [screenWidth / 2 - 350 / 2 - 20, screenHeight / 2 - 125 / 2.5, 350, 125])) {
        cursor('pointer');
        image(
            homePagePlayButtonHover,
            screenWidth / 2 - 350 / 2 - 20,
            screenHeight / 2 - 125 / 2.5,
            350,
            125
        );
        if (mouseIsPressed) {
            if (mouseButton == LEFT) {
                canDoTransition = true;
                setTimeout(() => {
                    currentEngine = ENGINE_TWO;
                    cursor('default');
                }, 900);
            }
        }
    } else {
        cursor('default');
    }
}