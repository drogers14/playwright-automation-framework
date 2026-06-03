export const thresholds = {
    performance: 80,
    accessibility: 50,
    "best-practices": 50,
    seo: 50,
  };

  // Lighthouse configuration for desktop devices
export const desktopConfig = {
    extends: "lighthouse:default",
    settings: {
      formFactor: "desktop",
      screenEmulation: {
        mobile: false,
        width: 1980,
        height: 1080,
        deviceScaleFactor: 1,
        disabled: false,
      },
    },
  };