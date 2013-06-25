function registerReload(tabId,changeInfo,tab) {

	if(tab.url == "https://feedbin.me/" || tab.url == "https://feedbin.me") {
		var refresh = 0+localStorage["refresh_interval"];
		if(!refresh)
			refresh = 300;
		refresh = refresh*1000;
		
		setTimeout(function() { chrome.tabs.reload(tabId);},refresh)
	}

}

chrome.tabs.onUpdated.addListener(registerReload);

