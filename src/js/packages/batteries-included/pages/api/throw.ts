// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    error: string
}

class CatchMeError extends Error { }

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        throw new CatchMeError();
    } catch {
        // Catching the error so that caught exception breakpoint only hit once.
    }
    res.status(503).json({ error: 'CatchMeError' })
}
