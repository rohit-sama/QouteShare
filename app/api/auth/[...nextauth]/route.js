import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import  {connectDb}  from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENTID,
            clientSecret: process.env.SECRET,
        })
    ],
    callbacks: {
        async session({ session }) {
          // store the user id from MongoDB to session
          const sessionUser = await User.findOne({ email: session.user.email });
          session.user.id = sessionUser._id.toString();
    
          return session;
        },


        async signIn({ profile }) {
          try {
            await connectDb();
            if(connectDb()){
              console.log("ihg")
            }
           
            const userExists = await User.findOne({ email: profile.email });
    
            // if not, create a new document and save user in MongoDB
            if (!userExists) {
                await User.create({
                    email: profile.email,
                    username: profile.name.replace(" ", "").toLowerCase(),
                    image: profile.picture,
                  });
                }
                return true
              } catch (error) {
                console.log("Error checking if user exists: ", error.message);
                return false
              }
            },
          }
        })
        
        export { handler as GET, handler as POST }