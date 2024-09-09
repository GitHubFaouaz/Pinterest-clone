// // Envoi l'image et d'autres données à la route API :
// export default async function onSave() {

//   const formData = new FormData();
//   formData.append("title", titlePost);
//   formData.append("desc", descPost);
//   formData.append("link", linkPost);
//   formData.append("image", fileImage); // Envoie le fichier image
//   formData.append("userName", session.user.name);
//   formData.append("userEmail", session.user.email);
//   formData.append("userImage", session.user.image);

//   setLoading(true);
//   try {
//     const response = await fetch("/api/upload", {
//       method: "POST",
//       body: formData, // Pas besoin de préciser 'Content-Type', fetch le déduit avec FormData
//     });

//     if (response.ok) {
//       const data = await response.json();
//       console.log("Post créé:", data);
//       router.push("/"); // Redirection après la publication
//     } else {
//       console.error("Erreur lors de la création du post.");
//     }
//   } catch (error) {
//     console.error("Erreur:", error);
//   } finally {
//     setLoading(false);
//   }
// }
