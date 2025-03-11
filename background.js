
  chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "checky",
      title: "Check URL with ThreatCheck",
      contexts: ["link"]
    });
    chrome.contextMenus.create({
      id: "checky-selection",
      title: "Check selected text with ThreatCheck",
      contexts: ["selection"]
    });
  });
  

  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "checky" && info.linkUrl) {
      checkUrl(info.linkUrl);
    } else if (info.menuItemId === "checky-selection" && info.selectionText) {
      checkUrl(info.selectionText);
    }
  });
  
  function doubleEncodeSpecificCharacters(url) {
    let encodedURL = encodeURIComponent(url);
    encodedURL = encodedURL.replace(/%3A/g, '%253A');
    encodedURL = encodedURL.replace(/%2F/g, '%252F');
    return encodedURL;
  }
  function convertURLFormat(url) {
    return url.replace(/^(https?):\/\//i, '$1/');
  }

  function checkUrl(url) {
   
    const encodedUrl = encodeURIComponent(url);
    
    chrome.storage.local.set({ 'checkyUrl': url }, function() {
      
      chrome.windows.create({ url: "popup.html", width: 1200, height: 800 }, (window) => {
        const windowId = window.id;
        const popupTabId = window.tabs[0].id;
        
          
          const isIpAddress = /^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$/.test(url);

          let virusTotalUrl = isIpAddress 
            ? "https://www.virustotal.com/gui/ip-address/" 
            : "https://virustotal.com/gui/search/";       
          
          let alphamountain = "https://threatyeti.com/search?q="
          let urlToAppend = doubleEncodeSpecificCharacters(url);
          let serviceUrl = virusTotalUrl + urlToAppend;
          let alphamountainUrl = alphamountain + url;
          let ipq = "https://www.ipqualityscore.com/threat-feeds/malicious-url-scanner/";
          let ipqurl = ipq + encodeURIComponent(url);
          let talos = "https://www.talosintelligence.com/reputation_center/lookup?search=";
          let talosurl = talos + encodeURIComponent(url);
          let sucuri = "https://sitecheck.sucuri.net/results/";
          let sucuriurl = sucuri + convertURLFormat(url);
          let urlWithoutProtocol = url.replace(/^https?:\/\//, '');
          let urlvoid = "https://www.urlvoid.com/scan/" + urlWithoutProtocol;
           
          let checkPhish = "https://app.checkphish.ai/live-scan?url=" + encodeURIComponent(url) + "&agent=" + encodeURIComponent(navigator.userAgent)


          chrome.tabs.create({
            windowId: window.id,
            url: serviceUrl
          });
          chrome.tabs.create({
            windowId: window.id,
            url: alphamountainUrl
          });
          chrome.tabs.create({
            windowId: window.id,
            url: ipqurl
          });
          chrome.tabs.create({
            windowId: window.id,
            url: talosurl
          });
          chrome.tabs.create({
            windowId: window.id,
            url: sucuriurl
          });
          chrome.tabs.create({
            windowId: window.id,
            url: checkPhish
          });
          chrome.tabs.create({
            windowId: window.id,
            url: urlvoid
          });
          // Focus back on the popup.html tab
          chrome.tabs.update(popupTabId, { active: true });

        });
      });
    
  }