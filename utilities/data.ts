import path from "path";
import CSVTOJSON from "csvtojson";

const getInventory = async () => {
  const directory = path.join(process.cwd(), "/public/files");
  const items = await CSVTOJSON().fromFile(directory + "/inventory.csv");
  return items;
};

export const getDiveGearItemByCode = async (code: string) => {
  const items = await getInventory();
  let item = null;
  if (code) {
    item = items.find((item) => item.code === code);
  }
  if (!item) {
    item = false;
  }
  return item;
};
export const getDiveGearItemByType = async (type: string) => {
  const items = await getInventory();
  let filtered_items = [];
  if (type) {
    filtered_items = items.filter((item) => item.type === type);
  }

  return filtered_items;
};
