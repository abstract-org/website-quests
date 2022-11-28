import {GoogleSpreadsheet} from "google-spreadsheet";

export default async function handler(req, res) {
    try {
        const doc = new GoogleSpreadsheet('1ks3DHa_71vK5205KWmcQ2RxtScZChMGBLA89ZnZwaAo')
        await doc.useServiceAccountAuth(require('../../service-account.json'))
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[0]
        await sheet.addRow(JSON.parse(req.body))

        res.status(200).json({ success: true })
    } catch (e) {
        res.status(500).json({ success: false, error: e.toString() })
    }
}