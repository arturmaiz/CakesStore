import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { Prisma } from "@prisma/client";
import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.Google_ID as string,
      clientSecret: process.env.Google_SECRET as string,
    }),
  ],
  adapter: PrismaAdapter(Prisma),
};

export const getAuthSession = () => getServerSession(authOptions);
