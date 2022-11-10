// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import CSVTOJSON from "csvtojson";
import { type } from "os";

type Data = {
  [key: string]: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const directory = path.join(process.cwd(), "/public/files");
  let items = await CSVTOJSON().fromFile(directory + "/inventory.csv");
  const { type } = req.query;
  if (type) {
    items = items.filter((item) => item.type === type);
  }

  res.status(200).json(items);
}
