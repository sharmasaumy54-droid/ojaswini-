/* =====================================
   CHANGE SCENE
===================================== */

function changeScene(currentScene, nextScene) {

    const current =
        document.getElementById(currentScene);

    const next =
        document.getElementById(nextScene);


    current.style.opacity = "0";


    setTimeout(() => {

        current.classList.remove("active");

        next.classList.add("active");

        next.style.opacity = "0";


        setTimeout(() => {

            next.style.opacity = "1";

        }, 50);

    }, 700);
}


/* =====================================
   STEP 1 — MAKE WISH
===================================== */

function makeWish() {

    changeScene(
        "welcome",
        "surprise"
    );
}


/* =====================================
   STEP 2 — SHOW DARK ROOM
===================================== */

function showDarkRoom() {

    changeScene(
        "surprise",
        "darkRoom"
    );
}


/* =====================================
   STEP 3 — TURN ON LIGHTS
===================================== */

function turnOnLights() {

    const darkRoom =
        document.getElementById("darkRoom");

    const celebration =
        document.getElementById("celebration");


    /*
       First make the room completely dark.
    */

    darkRoom.style.transition =
        "opacity 1.5s ease";

    darkRoom.style.opacity = "0";


    /*
       After the dark screen fades,
       show the birthday scene.
    */

    setTimeout(() => {

        darkRoom.classList.remove("active");

        celebration.classList.add("active");

        celebration.style.opacity = "0";


        /*
           Small delay makes the light-on
           effect feel smoother.
        */

        setTimeout(() => {

            celebration.style.transition =
                "opacity 2s ease";

            celebration.style.opacity = "1";


            /*
               Start celebration effects.
            */

            createConfetti();

        }, 100);

    }, 1500);
}


/* =====================================
   CONFETTI
===================================== */

function createConfetti() {

    const container =
        document.getElementById("confetti");


    /*
       Create 100 confetti pieces.
    */

    for (let i = 0; i < 100; i++) {

        const piece =
            document.createElement("div");


        piece.classList.add(
            "confetti-piece"
        );


        /*
           Random horizontal position.
        */

        piece.style.left =
            Math.random() * 100 + "%";


        /*
           Random size.
        */

        const size =
            Math.random() * 7 + 5;

        piece.style.width =
            size + "px";

        piece.style.height =
            size * 1.7 + "px";


        /*
           Random animation duration.
        */

        piece.style.animationDuration =
            Math.random() * 3 + 3 + "s";


        /*
           Random delay.
        */

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";


        /*
           Random rotation.
        */

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        /*
           Random shape.
        */

        if (Math.random() > 0.5) {

            piece.style.borderRadius =
                "50%";

        }


        container.appendChild(piece);


        /*
           Remove after animation
           to keep page lightweight.
        */

        setTimeout(() => {

            piece.remove();

        }, 6000);
    }
}