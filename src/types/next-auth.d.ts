import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    username: string;
    email: string;
    id: string;
  }
  interface Session {
    user: User & {
      id: string;
      email: string;
      username: string;
    };
    token: {
      id: string;
      email: string;
      username: string;
    };
  }
}
