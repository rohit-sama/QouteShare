import { connectDb } from "@utils/database";
import Qoute from "@models/qoute";

export const POST = async (req) => {
  const { userId, qoute, image, tag } = await req.json();

  try {
    await connectDb();
    const newQoute = new Qoute({
      Creator: userId,
      qoute,
      image,
      tag,
    });

    const savedQoute = await newQoute.save();

    if (savedQoute) {
      console.log("hmm");
    }
    return new Response(JSON.stringify(newQoute), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new qoute", { status: 500 });
  }
};
