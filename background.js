function registerReload(tabId,changeInfo,tab) {

	if(tab.url == "https://feedbin.me/" || tab.url == "https://feedbin.me") {
		var refresh = localStorage["refresh_interval"];
		if(!refresh)
			refresh = 300;
		refresh = refresh*1000;
		
		setTimeout(function() {doReload(tabId);},refresh)
	}

}
function doReload(tabId) {
	chrome.tabs.reload(tabId);
	return;
}


chrome.tabs.onUpdated.addListener(registerReload);

