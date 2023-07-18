import { connectDb } from "@utils/database";
import Qoute from "@models/qoute";

export const POST = async (req) => {
    const { userID, qoute, image, tag} = await req.json();

    try {
        await connectDb();

        // if (connectDb())[
        //     console.log("place")
        // ]
        const newQoute = new Qoute({
            Creator: userID,
            qoute,
            image,
            tag
        })
        // if(newQoute)[
        //     console.log("hello")
        // ]

        const savedQoute = await newQoute.save();

        if (savedQoute) {
            console.log("hmm");
        }



        return new Response(JSON.stringify(newQoute), {status:201})
    } catch (error) {
        console.log(error);
        return new Response('Failed to create a new qoute', {status:500})
        
    }

}