export async function getDiveGearItemByCode(code: string) {
  const item = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_DOMAIN}/api/dive-gears/${code}`
  );
  return await item.json();
}

export async function getDiveGearItemByType(type: string) {
  const items = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_DOMAIN}/api/dive-gears?type=${type}`
  );
  return await items.json();
}
