import { connectDb } from "@utils/database";
import Qoute from "@models/qoute";

export const GET = async (request, { params }) => {
  try {
    await connectDb();

    const qoutes = await Qoute.find({ Creator: params.id }).populate("Creator");
    if(!qoutes){console.log("gf")}
    return new Response(JSON.stringify(qoutes), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("failed to fetch qoutes", { status: 500 });
  }
};
