interface EventTypes {
  action: string;
  parameters: any;
}

export const pageViewGTM = (url: string) => {
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};

export const pageViewGTAG = (url: string) => {
  window.gtag("event", "page_view", {
    page_path: url,
  });
};

export const event = ({ action, parameters }: EventTypes) => {
  window.gtag("event", action, parameters);
};
