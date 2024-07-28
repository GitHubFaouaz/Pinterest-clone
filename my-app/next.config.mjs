/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com ", " firebasestorage.googleapis.com"],
  },
  //indique qui les images peuveut etre telechargeé des deux endroits
};

export default nextConfig;
