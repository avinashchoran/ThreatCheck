document.addEventListener('DOMContentLoaded', function() {
  const securityServices = [
    {
      name: "VirusTotal",
      instructions: "Results should load automatically. For IPs, IP address lookup will be used."
    },
    {
      name: "ThreatYeti",
      instructions: "Results should load automatically in the search interface."
    },
    {
      name: "IP Quality Score",
      instructions: "Results should load automatically in the malicious URL scanner."
    },
    {
      name: "Cisco Talos",
      instructions: "Results should load in the reputation center."
    },
    {
      name: "Sucuri SiteCheck",
      instructions: "Results should load automatically with protocol conversion if needed."
    },
    {
      name: "CheckPhish.ai",
      instructions: "The live scan should start automatically."
    },
    {
      name: "URLVoid",
      instructions: "Results should load automatically for domain scanning."
    }
  ];

  chrome.storage.local.get(['checkyUrl'], function(result) {
    const url = result.checkyUrl;
    
    if (url) {
      document.getElementById('url-display').textContent = url;
      
      const copyButton = document.createElement('button');
      copyButton.textContent = "Copy URL";
      copyButton.className = "copy-button";
      copyButton.addEventListener('click', function() {
        navigator.clipboard.writeText(url).then(function() {
          copyButton.textContent = "Copied!";
          setTimeout(function() {
            copyButton.textContent = "Copy URL";
          }, 2000);
        });
      });
      
      document.getElementById('copy-container').appendChild(copyButton);
      
      const servicesContainer = document.getElementById('services-container');
      securityServices.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.className = 'service';
        serviceElement.innerHTML = `<strong>${service.name}:</strong> ${service.instructions}`;
        servicesContainer.appendChild(serviceElement);
      });
    } else {
      document.getElementById('url-display').textContent = 'No URL specified';
    }
  });
});