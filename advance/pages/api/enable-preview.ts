import { NextApiRequest, NextApiResponse } from "next";

export default function EnablePreview(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.setPreviewData({}); //* Set some cookies
    res.end();
}
