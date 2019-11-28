// import Tower from './tower';
// import JSVector from './vector';

'use strict'

window.addEventListener('load', init, false)

var towerTime;
const FRAME_RATE = 30;

function init() {
    towerTime = new Game();
    window.setTimeout(animate, 100);
}

function animate() {
    towerTime.run();
    window.requestAnimationFrame(animate)
}

class Game {
    constructor() {
        this.towers = [];
        this.creeps = [];
        this.attacks = []; //tower attacks/moves

        this.bits = 1000 // testing

        this.placingTower = false;

        this.canvas = document.createElement("canvas");
        this.canvas.width = 750
        this.canvas.height = 500
        document.getElementById('game-canvas').appendChild(this.canvas)
        this.canvas.addEventListener('mousemove', this.handleCanvasMouseMoved, false)
        this.canvas.addEventListener('mouseover', this.handleCanvasMouseOver, false)
        this.canvas.addEventListener('click', this.handleCanvasMouseClicked, false)
        this.context = this.canvas.getContext("2d");

        this.tileDivs = this.createTileDivs();
        this.handleDomCallbacks(this.tileDivs);
    }

    handleCanvasMouseMoved(event) {
        this.mouseX = event.offsetX;
        this.mouseY = event.offsetY;
        if (towerTime.towers.length < 1) return;
        if (!towerTime.towers[towerTime.towers.length - 1].placed &&
            towerTime.placingTower === true ) {
                towerTime.towers[towerTime.towers.length - 1].location.x = this.mouseX;
                towerTime.towers[towerTime.towers.length - 1].location.y = this.mouseY;
            }
    }

    handleCanvasMouseOver() {
        if(towerTime.towers.length < 1) return;
        towerTime.towers[towerTime.towers.length - 1].visible = true;
    }

    handleCanvasMouseClicked() {
        if(towerTime.canAddTower()){
            towerTime.placeTower();
        }
    }

    canAddTower() {
        if (towerTime.placingTower) {
            return true;
        } else {
            return false;
        }
    }

    // hideElementImg() {
    //     this.style.display = "none";
    // }

    createTileDivs() {
        const tileDivs = [];
        for (let i = 0; i < 4; i++) {
            const tileDiv = document.createElement("div");
            const tileImgPath = "images/dot.png"
            const lilImgPath = "images/lil-dot.png"
            const attackImgPath = "images/attack-dot.png"

            tileDiv.tileDivImg = new Image();
            tileDiv.tileDivImg.src = lilImgPath;
            // tileDiv.tileDivImg = addEventListener('load', this.hideElementImg, false);

            tileDiv.tileDivAttackImg = new Image();
            tileDiv.tileDivAttackImg.src = attackImgPath;
            // tileDiv.tileDivAttackImg = addEventListener('load', this.hideElementImg, false);

            document.getElementById('towers').appendChild(tileDiv);

            tileDiv.cost = 10 * (i + 1)
            tileDiv.id = i
            tileDivs.push(tileDiv);
            
            const tileImg = new Image();
            tileImg.src = tileImgPath;
            tileDiv.appendChild(tileImg)
            
        }
        return tileDivs;
    }

    handleDomCallbacks(tiles) {
        for(let i = 0; i < tiles.length; i++) {
            const tileDiv = tiles[i];
            tileDiv.addEventListener('mouseover',this.tileRollOver, false)
            tileDiv.addEventListener('mouseout',this.tileRollOut, false)
            tileDiv.addEventListener('mousedown',this.tilePressed, false)
            tileDiv.addEventListener('click',this.tileClicked, false)
        }
    }

    tileRollOver() {
        this.style.backgroundColor = '#ffffff';
    }

    tileRollOut() {
        this.style.backgroundColor = '#d2691e';
    }

    tilePressed() {
        this.style.backgroundColor = '#333333';
    }

    tileClicked() {        
        if (towerTime.placingTower === true) return;
        if (towerTime.bits > this.cost) {            
            towerTime.createTower(this);
            towerTime.placingTower = true;
        }
    }

    createTower(tileDiv) {
        const tower = new Tower(tileDiv.cost, tileDiv.tileDivImg, tileDiv.tileDivAttackImg);
        this.towers.push(tower);
    }

    placeTower() {
        towerTime.towers[towerTime.towers.length - 1].location = new JSVector(
            this.canvas.mouseX, this.canvas.mouseY )
        towerTime.towers[towerTime.towers.length - 1].placed = true;
        towerTime.placingTower = false;
    }


    run() {
        this.render();
        for (let i = 0; i < this.towers.length; i++) {
            this.towers[i].run()
        }
        for (let i = 0; i < this.attacks.length; i++) {
            this.attacks[i].run()
        }
    }

    render() {
        this.context.clearRect(0, 0, 750, 500)
    }

}

// export default Game