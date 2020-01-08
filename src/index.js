import "./styles/reset.scss";
import "./styles/index.scss";
import "./styles/button-background-animations.scss";
import "./styles/flip-card-animations.scss";
import "./styles/tile-tilt-animations.scss";

window.addEventListener("DOMContentLoaded", () => {

    //tilt animations
    let tileContainer = document.querySelector('.tile-tilt-container');
    let tileTiltCard = document.querySelector('.tile-tilt');

    function tilt(event){

        let offsetXReset = event.offsetX - 425;
        let offsetYReset = event.offsetY - 200;
        let xgap = ((offsetXReset)/ tileContainer.offsetWidth);
        let ygap = ((offsetYReset)/ tileContainer.offsetHeight);

        if (offsetXReset >= 0 && offsetYReset <= 0){
            tileTiltCard.style.transform = `rotateX(${-xgap}deg) rotateY(${ygap}deg)`;
        } else if (offsetXReset <= 0 && offsetYReset <= 0){
            tileTiltCard.style.transform = `rotateX(${xgap}deg) rotateY(${-ygap}deg)`;
        } else if (offsetXReset <= 0 && offsetYReset >= 0){
            tileTiltCard.style.transform = `rotateX(${-xgap}deg) rotateY(${ygap}deg)`;
        } else if (offsetXReset >= 0 && offsetYReset >= 0){
            tileTiltCard.style.transform = `rotateX(${xgap}deg) rotateY(${-ygap}deg)`;
        }


    }
    tileContainer.addEventListener('mousemove', tilt);
});
