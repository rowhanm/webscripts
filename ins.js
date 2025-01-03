if (window.location.hostname.includes("instagram") {
  const exploreFeedSelector = 'section > main div[style*="flex-direction: column"]';
  const loadingWheelSelector = 'div[data-visualcompletion="loading-state"]'

  const observer = new MutationObserver((mutations, obs) => {
    if (window.location.pathname !== "/explore/") {
      return;
    }
    const exploreFeed = document.querySelector(exploreFeedSelector);
    if (exploreFeed) {
      exploreFeed.remove();
    }
    const loadingWheelButton = document.querySelector(loadingWheelSelector);
    if (loadingWheelButton) {
      loadingWheelButton.remove();
    }
  });

  observer.observe(document, {
    childList: true,
    subtree: true
  });
}
