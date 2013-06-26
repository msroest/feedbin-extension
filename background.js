var timeout;
function registerReload(tabId,changeInfo,tab) {

	if(tab.url == "https://feedbin.me/" || tab.url == "https://feedbin.me") {
		var refresh = localStorage["refresh_interval"];
		if(!refresh)
			refresh = 300;
		refresh = refresh*1000;
		if(!timeout)
			timeout = setTimeout(function() {doReload(tabId,refresh);},refresh)
	}

}
function doReload(tabId,refresh) {
	
	chrome.tabs.get(tabId,function(tab) {
		if(tab.active) {
			timeout = setTimeout(function() {doReload(tabId,refresh);},refresh);
		}
		else {
			timeout="";
			chrome.tabs.reload(tabId);	
		}
	});
	return;
}


chrome.tabs.onUpdated.addListener(registerReload);

