const { PrismaClient } = require("@prisma/client");
const {customAlphabet} = require('nanoid');


const createUrl = async (data) => {
  //Prototype 1 of Structure
  const prisma = new PrismaClient();
  try {
    //Esto para verificar existencia
    const verify = await prisma.url.findFirst({
     where: {
        fullUrl: data.fullUrl,
      },
    });

    let short, urlAnswer;

    if (verify?.length > 0){
      console.log(typeof verify)
        return 'Ya existe un registro igual en la base de datos';
    }
    data.fullUrl != null
      ? (short = customAlphabet(data.fullUrl, 8))
      : "There's no url to short";

    if (short != null) {
      urlAnswer = await prisma.url.create({
        data: {
          fullUrl: data.fullUrl,
          shortUrl: short(),
        },
      });
    }
  } catch (error) {
    console.log(error.message);
    throw new Error({error: error.message});
  }
};

module.exports={createUrl}