/// <reference path="../../../libs/js/property-inspector.js" />
/// <reference path="../../../libs/js/utils.js" />

$PI.onConnected((jsn) => {
    console.log('onConnected', jsn);
    let settings = jsn?.actionInfo?.payload?.settings || {};

    const tokenEl = document.getElementById('token');
    if (tokenEl) {
        tokenEl.value = settings.token ?? ""
        tokenEl.onchange = () => {
            settings.token = tokenEl.value
            console.log("setSettings", settings)
            $PI.setSettings(settings)
        }
    }
})