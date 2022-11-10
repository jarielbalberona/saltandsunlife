export async function getDiveGearItemByCode(code: string) {
  const item = await fetch(`http://localhost:3002/api/dive-gears/${code}`);
  return await item.json();
}

export async function getDiveGearItemByType(type: string) {
  const items = await fetch(
    `http://localhost:3002/api/dive-gears?type=${type}`
  );
  return await items.json();
}
