import cookie from "cookie";

export default async (req, res) => {
  if (req.method === "POST") {
    const { user } = req.body;
    //Set cookie
    // Set a new cookie with the name
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", user.jwt, {
        httpOnly: true,
        secure: process.env.NODE_ENC !== "development",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        sameSite: "strict",
        path: "/",
      })
    );
    res.status(200).json({ user: user.user });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
