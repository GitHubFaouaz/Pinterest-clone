// route API pour gérer l'upload de l'image et l'insertion des informations dans la base de données.

import { PrismaClient } from "@prisma/client";
// import formidable from "formidable"; // Pour gérer les uploads multipart/form-data
// import fs from "fs";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const formData = await req.formData(); // Récupérer les données du formulaire
    const { title, desc, link, fileImage, userName, userEmail, userImage } =
      Object.fromEntries(formData);

    const newPost = prisma.post.create({
      data: {
        title: title,
        desc: desc,
        link: link,
        image: fileImage, // Enregistrez le chemin de l'image
        userName: userName,
        userEmail: userEmail,
        userImage: userImage,
      },
    });

    // Logique pour traiter et sauvegarder les données
    return new Response(
      // JSON.stringify({ success: true, data: "Données enregistrées" }),
      res.status(200).json(newPost)
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Erreur lors de l'enregistrement" }),
      { status: 500 }
    );
  }
}

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const form = new formidable.IncomingForm();
//     form.parse(req, async (err, fields, files) => {
//       if (err) {
//         res.status(500).json({ error: "Erreur lors de l'upload du fichier." });
//         return;
//       }

//       const { title, desc, link, userName, userEmail, userImage } = fields;
//       const { image } = files;

//       // Assurez-vous que le fichier image est bien reçu
//       if (!image) {
//         res.status(400).json({ error: "Aucune image uploadée." });
//         return;
//       }

//       // Si nécessaire, déplacez ou traitez le fichier ici, puis enregistrez son chemin dans la DB
//       const imagePath = `/uploads/${image.originalFilename}`;
//       fs.renameSync(image.filepath, `./public${imagePath}`);

//       try {
//         const newPost = await prisma.post.create({
//           data: {
//             title: title,
//             desc: desc,
//             link: link,
//             image: imagePath, // Enregistrez le chemin de l'image
//             userName: userName,
//             userEmail: userEmail,
//             userImage: userImage,
//           },
//         });
//         res.status(200).json(newPost);
//       } catch (error) {
//         res.status(500).json({ error: "Erreur lors de la création du post" });
//       }
//     });
//   } else {
//     res.status(405).json({ message: "Méthode non autorisée" });
//   }
// }

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     // const { title, desc, link, image, userName, userEmail, userImage } =
//     //   req.body;

//     try {
//       console.log("request ok ");
//       // const newPost = await prisma.post.create({
//       //   data: {
//       //     title,
//       //     desc,
//       //     link,
//       //     image,
//       //     userName,
//       //     userEmail,
//       //     userImage,
//       //   },
//       // });
//       // res.status(200).json(newPost);
//       res.status(200).json({ message: "request ok " });
//     } catch (error) {
//       res.status(500).json({ error: "Erreur lors de la création du post" });
//     }
//   } else {
//     res.status(405).json({ message: "Méthode non autorisée" });
//   }
// }
