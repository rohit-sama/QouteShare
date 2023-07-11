import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { connectDb } from "@utils/database";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.SECRET,
            clientsecret: process.env.CLIENTID,
        })
    ],
    async session({session}) {

    },
    async signIn({profile}){
        try {
            await connectDb();




            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    
})


export {handler as GET , handler as POST}