import type { NextApiRequest, NextApiResponse } from 'next';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import creds from '../../../../public/credentials.json';

const getRows = async () => {
  const doc = new GoogleSpreadsheet(process.env.DOC_ID);
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  const sheet = doc.sheetsById[process.env.SHEET_ID!];
  const rows = await sheet.getRows();
  const result = rows.map((row) => row._rawData);
  return result;
};

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const resp = await getRows();
  res.status(200).json({
    status: 'ok',
    data: resp,
  });
};

export default handler;
