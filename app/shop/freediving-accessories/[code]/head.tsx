import { getDiveGearItemByCode } from "app/shop/api";

export default async function Head({ params }: any) {
  const fin = await getDiveGearItemByCode(params.code);
  return (
    <>
      <title>
        {fin ? fin.name : ""} Starter Fins | Salt & Sun Lifestyle - Dive &
        Outdoor Gears
      </title>
    </>
  );
}
