import { PAGEURL } from "types/url";

export const shop_navigation_default = [
  {
    name: "Home",
    link: PAGEURL.HOME,
  },
  {
    name: "Shop",
    link: PAGEURL.SHOP,
  },
];

export const shop_navigation_fins = [
  ...shop_navigation_default,
  {
    name: "Freediving Starter Fins",
    link: PAGEURL.SHOP_FINS,
  },
];

export const shop_navigation_masks = [
  ...shop_navigation_default,
  {
    name: "Freediving Ukiyo Masks",
    link: PAGEURL.SHOP_MASKS,
  },
];

export const shop_navigation_accessories = [
  ...shop_navigation_default,
  {
    name: "Freediving Accessories",
    link: PAGEURL.SHOP_ACCESSORIES,
  },
];
