export default async function handler(req, res) {
  const BIN_ID = '6935774443b1c97be9dd8f1f';
  const SECRET_KEY = '$2a$10$1Bxc10i9UekMZeWaxBCxmuSIfISpF8Tw5f8g.nyltfmAw1.Rcvy9G';

  const baseURL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

  if (req.method === "GET") {
    const { slug } = req.query;

    try {
      const response = await fetch(`${baseURL}/latest`, {
        headers: { "X-Master-Key": SECRET_KEY },
      });

      const data = await response.json();
      const allComments = data.record.comments || [];

      const filtered = allComments.filter((c) => c.slug === slug);
      return res.status(200).json(filtered);
    } catch (err) {
      return res.status(500).json({ error: "Failed to load comments" });
    }
  }

  if (req.method === "POST") {
    const { slug, name, email, comment, rating } = req.body;

    const newComment = {
      slug,
      name,
      email,
      comment,
      rating,
      date: new Date().toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    };

    try {
      const getRes = await fetch(`${baseURL}/latest`, {
        headers: { "X-Master-Key": SECRET_KEY },
      });

      const db = await getRes.json();
      const comments = db.record.comments || [];

      comments.push(newComment);

      await fetch(baseURL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": SECRET_KEY,
        },
        body: JSON.stringify({ comments }),
      });

      return res.status(201).json(newComment);
    } catch (err) {
      return res.status(500).json({ error: "Failed to save comment" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}


// import fs from "fs";
// import path from "path";

// const filePath = path.join(process.cwd(), "data", "posts.json");

// export default function handler(req, res) {
//   if (req.method === "GET") {
//     const posts = JSON.parse(fs.readFileSync(filePath, "utf8"));
//     const { slug } = req.query;
//     const post = posts.find((p) => p.slug === slug);

//     return res.status(200).json(post.comments || []);
//   }

//   function formatDate(dateString) {
//   const date = new Date(dateString);
//   const day = date.getDate();
//   const month = date.toLocaleString("en-US", { month: "short" });
//   const year = date.getFullYear();
  
//   return `${day} ${month} ${year}`;
// }

//   if (req.method === "POST") {
//     const { slug, name, email, comment, rating } = req.body;

//     const posts = JSON.parse(fs.readFileSync(filePath, "utf8"));
//     const postIndex = posts.findIndex((p) => p.slug === slug);

//     const newComment = {
//       name,
//       rating,
//       comment,
//       date: formatDate(new Date())
//     };

//     posts[postIndex].comments.push(newComment);

//     fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));

//     return res.status(201).json(newComment);
//   }

//   return res.status(405).json({ message: "Method not allowed" });
// }

