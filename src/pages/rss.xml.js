import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Aluno de Astro | Fernanda Koffke',
    description: 'Compartilhando minha jornada aprendendo Astro',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>pt-br</language>`,
  });
}