import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../../server/db/client";

const SignUp = async (req: NextApiRequest, res: NextApiResponse) => {

  const response = await prisma.user.create({
    data:{
      email: req.body.email,
      password: req.body.password,
      name: req.body.name
    }
  })
  res.status(200).json(response);
};

export default SignUp;
