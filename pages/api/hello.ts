// Next.js API Route support: htps://nextjs.org/d
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: String
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ name: 'John Doe '})
}