/**
 * Lightweight CTA + outbound click tracker for GA4.
 * Add `data-cta="<name>"` to any element to track its clicks.
 */
(function () {
  function track(eventName, props) {
    try {
      if (window.gtag) window.gtag("event", eventName, props || {});
    } catch (e) {}
  }

  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-cta]");
    if (el) {
      track("CTA Click", {
        cta: el.getAttribute("data-cta"),
        href: el.getAttribute("href") || "",
        path: window.location.pathname,
      });
    }

    var link = e.target.closest("a[href]");
    if (link) {
      var href = link.getAttribute("href");
      if (/^https?:\/\//i.test(href) && !href.includes(window.location.host)) {
        track("Outbound Link: Click", { url: href, path: window.location.pathname });
      }
    }
  });
})();
