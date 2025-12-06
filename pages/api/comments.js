import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "posts.json");

export default function handler(req, res) {
  if (req.method === "GET") {
    const posts = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const { slug } = req.query;
    const post = posts.find((p) => p.slug === slug);

    return res.status(200).json(post.comments || []);
  }

  function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  
  return `${day} ${month} ${year}`;
}

  if (req.method === "POST") {
    const { slug, name, email, comment, rating } = req.body;

    const posts = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const postIndex = posts.findIndex((p) => p.slug === slug);

    const newComment = {
      name,
      rating,
      comment,
      date: formatDate(new Date())
    };

    posts[postIndex].comments.push(newComment);

    fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));

    return res.status(201).json(newComment);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
