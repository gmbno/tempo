/// <reference path="libs/js/action.js" />
/// <reference path="libs/js/stream-deck.js" />

const weekProgressionAction = new Action('dev.gmbno.tempo.weekProgression');
let weekProgressionInstance = null;
/**
 * The first event fired when Stream Deck starts
 */
$SD.onConnected((props) => {
    const {actionInfo, appInfo, connection, messageType, port, uuid} = props;
    console.log('Stream Deck connected!', props);
});

weekProgressionAction.onWillAppear((props) => {
    const {action, context, device, event, payload} = props;
    console.log('onWillAppear', props);
    weekProgressionInstance = new WeekProgression();
});

weekProgressionAction.onKeyUp((props) => {
    const {action, context, device, event, payload} = props;
    console.log('onWillAppear', props);
    $SD.showOk("teqsdqj")
    weekProgressionInstance = new WeekProgression();
});

weekProgressionAction.onDidReceiveSettings((props) => {
    const {action, context, device, event, payload} = props;
    weekProgressionInstance.didReceiveSettings(payload?.settings);
});