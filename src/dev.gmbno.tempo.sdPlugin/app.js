/// <reference path="libs/js/action.js" />
/// <reference path="libs/js/stream-deck.js" />

const myAction = new Action('dev.gmbno.tempo.weekProgression');

/**
 * The first event fired when Stream Deck starts
 */
$SD.onConnected((props) => {
	const { actionInfo, appInfo, connection, messageType, port, uuid } = props;
	console.log('Stream Deck connected!', props);
});

myAction.onKeyUp(({ action, context, device, event, payload }) => {
	console.log('Your key code goes here!');
});

myAction.onDialRotate(({ action, context, device, event, payload }) => {
	console.log('Your dial code goes here!');
});
