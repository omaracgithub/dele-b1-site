// Routes the main download CTA to the App Store.
// Replace the ID below with the actual App Store ID once published.
(function () {
  var iosUrl = "https://apps.apple.com/app/dele-b1-practice/id0000000000";
  var cta = document.getElementById("cta-download");
  if (cta) cta.href = iosUrl;
})();
