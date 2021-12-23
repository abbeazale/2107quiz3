// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { runInNewContext } from 'vm';
import Laptop from '../api/laptop';
//import prisma from '../../backend/database/client';

const prisma = new PrismaClient()

type Laptop = {
  id: number;
  name: string;
  brand: string;
  price: string;
}

type Body = {
  name: string;
  brand: string;
  price: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Laptop|Laptop[]>
) { if(req.method === 'POST'){
  const body: Body = req.body;
  const laptop = await prisma.laptop.create({
    data: body
  });
  res.status(200).json(laptop)

}
  else if (req.method === 'GET') {
    const laptops = await prisma.laptop.findMany({
      where: {
        brand:'Apple'
      }
    });

    res.status(200).json(laptops)
  }


  //res.status(200).json({ name: 'John Doe' })
}
