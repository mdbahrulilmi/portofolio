import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'My Portfolio / Website',
    short_name: 'App',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/mdbahrulilmi.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/mdbahrulilmi.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}