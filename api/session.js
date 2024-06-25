import getSession from "@/lib/session";

export default async function handler(req, res) {
  const session = await getSession();
  if (session && session.id) {
    console.log('아이디 들어옴');
    res.status(200).json({ loggedIn: true, user: session.user });
  } else {
    console.log('아이디 안들어옴');
    res.status(200).json({ loggedIn: false });
  }
}