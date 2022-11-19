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
  const items = await CSVTOJSON().fromFile(directory + "/inventory.csv");
  const { code } = req.query;
  let item = {} as any;
  if (code) {
    item = items.find((item) => item.code === code);
  }
  if (!item) {
    item = false;
  }

  res.status(200).json(item);
}
