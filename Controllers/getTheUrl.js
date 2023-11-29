const { PrismaClient } = require("@prisma/client");

const getTheUrl = async () => {
  try {
    const prisma = new PrismaClient();

    const infoOfModel = await prisma.url.findMany();
    if (infoOfModel) return infoOfModel;
  } catch (error) {
    console.log(error);
    throw new Error({ error: error.message });
  }
};

module.exports={getTheUrl};
