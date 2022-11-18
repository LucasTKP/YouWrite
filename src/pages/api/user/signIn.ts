import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../../server/db/client";

const SignIn = async (req: NextApiRequest, res: NextApiResponse) => {

  const response = await prisma.user.findUnique({
    where: {
    email:req.body.email
    }
  })
  if (response === null){
    res.status(201).json({message:"O email digitado não está cadastrado em nosso banco de dados."});
  }
  if (response?.password === req.body.password){
    res.status(200).json(response);
  } else {
    res.status(201).json({message:"As credenciais estão incorretas."});
  }
  console.log(response)
//   res.status(200).json(response);
};

export default SignIn;