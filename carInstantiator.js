class CarInstantiator {
    constructor(traffic=[], distance = -200) {
        this.traffic = traffic
        this.distance = distance
    }

    update(){
        if (this.traffic.length < 100) {
            const position = this.traffic[this.traffic.length - 1].y+this.distance
            this.traffic.push(
                new Car(road.getLaneCenter(Math.round(Math.random()*2)), position,30,50,"DUMMY",2,getRandomColor()),
                new Car(road.getLaneCenter(Math.round(Math.random()*2)), position,30,50,"DUMMY",2,getRandomColor())
            )
        }
    }
}