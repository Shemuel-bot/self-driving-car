class CarInstantiator {
    constructor(traffic=[], distance = -200, maxTraffic = 100, spawnInterval = 20) {
        this.traffic = traffic
        this.distance = distance
        this.maxTraffic = maxTraffic
        this.spawnInterval = spawnInterval
        this.framesSinceLastSpawn = 0
    }

    update(){
        if (this.traffic.length >= this.maxTraffic) {
            return;
        }

        this.framesSinceLastSpawn++;
        if (this.framesSinceLastSpawn < this.spawnInterval) {
            return;
        }
        this.framesSinceLastSpawn = 0;

        const laneIndex = Math.round(Math.random() * 2);
        const lastTraffic = this.traffic[this.traffic.length - 1];
        const position = lastTraffic ? lastTraffic.y + this.distance : -1000;

        this.traffic.push(
            new Car(road.getLaneCenter(laneIndex), position, 30, 50, "DUMMY", 2, getRandomColor()),
            new Car(road.getLaneCenter(laneIndex), position + this.distance, 30, 50, "DUMMY", 2, getRandomColor())
        )
    }
}