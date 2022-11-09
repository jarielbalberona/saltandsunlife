// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import CSVTOJSON from "csvtojson";
import { promises as fs } from "fs";

type Data = {
  [key: string]: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const directory = path.join(process.cwd(), "/public/files");
  const csvfile = await CSVTOJSON().fromFile(directory + "/inventory.csv");

  res.status(200).json(csvfile);
}
