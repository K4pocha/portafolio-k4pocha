import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Si es que hay rutas privadas
    },
    sitemap: 'https://k4pocha.vercel.app/sitemap.xml', // midominioxdxd
  };
}