chrome.runtime.onInstalled.addListener(function () {
    // chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    //     chrome.declarativeContent.onPageChanged.addRules([{
    //         conditions: [new chrome.declarativeContent.PageStateMatcher({
    //             pageUrl: { hostEquals: 'developer.chrome.com' },
    //         })
    //         ],
    //         actions: [new chrome.declarativeContent.ShowPageAction()]
    //     }]);
    // });
    console.log("loaded");
    let time = 0

    setInterval(() => {
        console.log(`time is ${time}ms`);
        time += time
    }, 500)
});