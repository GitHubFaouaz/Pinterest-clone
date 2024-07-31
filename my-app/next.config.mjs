/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", //Le nom de domaine de l'URL.
        port: "",
        pathname: "/**", //Le chemin dans l'URL. Le motif /** signifie que tous les chemins sous ce domaine sont autorisés.
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

// En spécifiant les domaines autorisés, Next.js peut optimiser et sécuriser l'utilisation d'images provenant de ces sources.

// "lh3.googleusercontent.com" : Domaine utilisé par Google pour héberger des images de profil, souvent utilisé avec les services OAuth de Google.

// "firebasestorage.googleapis.com" : Domaine utilisé par Firebase pour héberger des fichiers, y compris des images.

// Pourquoi cette configuration est-elle nécessaire ?
// Sécurité : En limitant les domaines autorisés pour les images, vous empêchez l'utilisation d'images provenant de sources non fiables ou malveillantes.

// Optimisation : Next.js peut optimiser les images provenant de ces domaines, ce qui permet d'améliorer les performances de chargement des images dans votre application.
