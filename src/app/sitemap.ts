import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // dominio real cuando tenga
  const baseUrl = 'https://k4pocha.vercel.app'; 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Si hay más páginas (ej: /blog), seagregan  aquí
  ];
}