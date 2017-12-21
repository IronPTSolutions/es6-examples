const COUNT_INTERVAL_MILLIS = 1000;

class Counter {

    constructor() {
        this.count = 0;
        this.intervalCountId = undefined;
    }

    start() {
        if (!this.intervalCountId) {
            this.intervalCountId = setInterval(() => {
                console.log(this.increment());
            }, COUNT_INTERVAL_MILLIS);
        }
    }

    increment() {
        return ++this.count;
    }

    stop() {
        clearInterval(this.intervalCountId);
    }
}

let counter = new Counter();
counter.start();

setTimeout(counter.stop.bind(counter), 10100);