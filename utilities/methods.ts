import { FILE_PATH } from "types/files";

export const getImageSrc = (
  name: string,
  count: any = null,
  type: string = "mask"
) => {
  let src = FILE_PATH.SHOP_MASKS;

  if (type === "fins") {
    src = FILE_PATH.SHOP_STARTER_FINS;
  }

  let file_name = `${src}/${name.toLowerCase().replace(/ /g, "-")}`;
  if (count) {
    file_name = `${file_name}-${count}`;
  }
  file_name = `${file_name}.jpg`;
  return file_name;
};
