import type { NextApiRequest, NextApiResponse } from 'next';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import creds from '../../../../public/credentials.json';

import type { FileInfo } from '@/types/common';
type Data = Omit<FileInfo, 'settings' | 'file'>;

const addRow = async (data: Data) => {
  const doc = new GoogleSpreadsheet(process.env.DOC_ID);
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  const sheet = doc.sheetsById[process.env.SHEET_ID!];
  const larryRow = await sheet.addRow(data);
  return larryRow;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.query as unknown as Data;

  if (!data.imageUrl || !data.uuid || !data.name) {
    res.status(400).json({
      status: 'error',
      data: 'Should provider dataUrl and is query!',
    });
    return;
  }

  const resp = await addRow(data);

  res.status(200).json({
    status: 'ok',
    data: {
      rawData: resp._rawData,
      rowNumber: resp._rowNumber,
    },
  });
};

export default handler;
