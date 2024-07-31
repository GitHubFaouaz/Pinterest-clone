/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com ", " firebasestorage.googleapis.com"],
  },
  //indique qui les images peuveut etre telechargeé a partir des deux endroits (du domain de google et de firestorage)
  // parce que de base next n'accepte pas des images qui viennent de goole et firestorage
};

export default nextConfig;
