import { createContentLoader } from 'vitepress'

export default createContentLoader(['**/*.md'], {
  excerpt: false,
  includeSrc: false,
  render: false,
  transform(raw) {
    const res = raw.map(page => {
      return {
        ...page,
        url: page.url,
        frontmatter: page.frontmatter,
        excerpt: page.excerpt,
      }
    })

    return res
  }
})
