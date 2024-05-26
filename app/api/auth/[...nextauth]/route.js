import NextAuth from "next-auth";
import   { options }  from "./options";

const handler = async (req, res) => {
    const authHandler = await NextAuth(req, res, options);
    if (!authHandler) {
      res.status(500).json({ error: "Failed to handle authentication" });
    }
    return authHandler;
  };
export { handler as GET, handler as POST };
