class WeekProgression {
    constructor() {
        console.log("Created new instance of WeekProgression")
        this.init();
        this.update();
    }

    init() {
        this.interval = setInterval(() => {
            this.update();
        }, 10000);
    }

    update() {
        $SD.showAlert("test")
    }

    didReceiveSettings(settings) {
        console.log(settings)
    }
}