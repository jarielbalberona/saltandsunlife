import { getDiveGearItemByCode } from "app/shop/api";

export default async function Head({ params }: any) {
  const mask = await getDiveGearItemByCode(params.code);
  return (
    <>
      <title>
        {params ? params.code : ""} Ukiyo Masks | Salt & Sun Lifestyle - Dive &
        Outdoor Gears
      </title>
    </>
  );
}