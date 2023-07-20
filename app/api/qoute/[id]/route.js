import { connectDb } from "@utils/database";
import Qoute from "@models/qoute";

export const GET = async(request,{params}) => {
    try {
        await connectDb();

        const qoute = await Qoute.findById(params.id).populate('Creator');
        
        return new Response(JSON.stringify(qoute), {status: 200})
    } catch (error) {
        console.log(error)
        return new Response("qoute not found",{status: 404})
        
    }
}

export const PATCH = async(request,{params}) => {
    const {qoute, image,tag} = await request.json();


    try {
        await connectDb();

        const existingQOute = await Qoute.findById(params.id);

        if(!existingQOute) return new Response ("qoute not found", {status:404})

        existingQOute.qoute = qoute;
        existingQOute.image = image;
        existingQOute.tag = tag;


        await existingQOute.save();
        return new Response (JSON.stringify(existingQOute), {status:200})
    } catch (error) {
        return new Response ("error updating qoutes", {status:500})
    }
}

export const DELETE = async(request,{params}) => {
    try {
        await connectDb();

        await Qoute.findByIdAndRemove(params.id);

        return new Response ("qoute deleted sucessfully", {status:200})
    } catch (error) {
        return new Response ("error deleting the qoute",{status:500} )
        
    }
}