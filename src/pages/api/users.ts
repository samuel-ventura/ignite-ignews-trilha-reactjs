import { NextApiRequest, NextApiResponse } from 'next';

export default function Users(request: NextApiRequest, response: NextApiResponse) {
  const users = [
    {id: 1, name: 'Samuel'},
    {id: 2, name: 'João'},
    {id: 3, name: 'Carlos'}
  ]

  return response.json(users)
}

// Serverless