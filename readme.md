# ThreatCheck - URL Security Scanner


[![Download Source Code](https://img.shields.io/badge/Download%20Source%20Code-blue?style=for-the-badge&logo=github)](https://github.com/avinashchoran/ThreatCheck/archive/refs/heads/main.zip)

ThreatCheck is a Chrome extension that helps you assess the security and reputation of URLs by checking them against multiple security services with a single click.


https://github.com/user-attachments/assets/17997618-7614-495c-9829-636593bccf55


## ✨ Features

- **🔍 Right-click Convenience**: Check any link or selected text with a simple right-click.
- **🛡️ Multiple Security Services**: Automatically scans URLs through 7 different security services:
  - **VirusTotal**: Comprehensive malware and URL scanner.
  - **ThreatYeti**: Advanced threat intelligence platform.
  - **IP Quality Score**: Malicious URL scanner.
  - **Cisco Talos**: Reputation center.
  - **Sucuri SiteCheck**: Website security scanner.
  - **CheckPhish.ai**: Phishing URL detection.
  - **URLVoid**: Domain reputation checker.
- **🌐 IP Support**: Automatically detects and uses appropriate scanning methods for IP addresses.
- **📋 Easy Copy**: One-click copy function for the URL being checked.

## 🛠️ Installation

### From Chrome Web Store
*(Coming soon)*

### Manual Installation

1. **Download or clone this repository**.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the directory containing the extension files.
5. The extension is now installed and ready to use.

   *Note*: Upon installing the extension, if your antivirus software flags any files, you may need to add the extension's directory to your antivirus exclusion list to avoid interference.

## 🚀 How to Use

1. **Right-click on any link** on a webpage and select **"Check URL with ThreatCheck"**.
2. **Or select any text** (URL or domain), right-click, and select **"Check selected text with ThreatCheck"**.
3. A new window will open with multiple tabs:
   - The first tab shows information about the URL being checked.
   - Each additional tab contains results from a different security service.
4. Review the results from each service to assess the safety of the URL.


## 🔒 Privacy

ThreatCheck does not collect or store any data. All checking is done through direct connections to publicly available security services. The URL you're checking is not stored anywhere except temporarily in your browser's local storage to facilitate the checking process.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests if you have suggestions for improvements or bug fixes.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

---

*This extension is not affiliated with any of the security services it uses. Each service has its own terms of service and privacy policy.*
