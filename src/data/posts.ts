import type { Post } from '../types/Post';

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'los audifonos',
    excerpt:
      'Descubre las últimas características de audifonos',
    date: '2026-05-10',
    author: { name: 'Ana García' },
    tags: ['React', 'Frontend', 'JavaScript'],
    readingTime: 8,
  },
  {
    id: '2',
    title: 'Tailwind CSS',
    excerpt:
      'daeas',
    date: '2026-05-08',
    author: { name: 'Carlos Ruiz' },
    tags: ['CSS', 'Tailwind', 'Diseño'],
    readingTime: 6,
  },
  {
    id: '3',
    title: '23232',
    excerpt:
      'adios',
    date: '2026-05-05',
    author: { name: 'María López' },
    tags: ['TypeScript', 'Desarrollo', 'Herramientas'],
    readingTime: 10,
  },
  {
    id: '4',
    title: 'hola',
    excerpt:
      'sdsd',
    date: '2026-05-03',
    author: { name: 'Diego Fernández' },
    tags: ['UX', 'Diseño', 'Accesibilidad'],
    readingTime: 5,
  },
  {
    id: '5',
    title: '2323',
    excerpt:
      '3232',
    date: '2026-04-28',
    author: { name: 'Sofía Martínez' },
    tags: ['Vite', 'Tooling', 'Performance'],
    readingTime: 7,
  },
  {
    id: '6',
    title: '32323',
    excerpt:
      'kdaodkadasd',
    date: '2026-04-25',
    author: { name: 'Andrés Moreno' },
    tags: ['React', 'Hooks', 'Patrones'],
    readingTime: 12,
  },
];
