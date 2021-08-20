---
blocks:
  - tagline: ''
    headline: Welcome to the Tina Starter.
    text: >
      **This** project is set up to show you the basics of working with Tina.
      You're looking at the landing page, which pulls content from
      `content/pages/home.md`, components from `components/blocks`, and puts
      them all together in `pages/[filename].tsx`, all based on a schema defined
      in `.tina/schema.ts`.


      | Column 1 | Column 2 | Column 3 |

      | --- | --- | --- |

      | 123 | 789 | 987 |

      | 456 | 321 | 789 |
    actions:
      - label: Get Started
        type: button
        icon: true
        link: /posts
      - label: Read Blog
        type: link
        icon: true
        link: /posts
    image:
      src: >-
        https://res.cloudinary.com/forestry-demo/image/upload/v1628102029/tina-cloud-starter/tina-illustration.WebP
      alt: Tina
    color: tint
    _template: hero
  - items:
      - icon:
          color: red
          style: float
          name: code
        title: Amazing Feature
        text: >-
          Aliquam blandit felis rhoncus, eleifend ipsum in, condimentum nibh.
          Praesent ac faucibus risus, eu lacinia enim.
      - icon:
          color: primary
          style: float
          name: like
        title: This Is a Feature
        text: Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
      - icon:
          color: orange
          style: float
          name: beer
        title: Configurable Theme
        text: >-
          Edit global theme configuration with Tina. Change your theme's primary
          color, font, or icon set.
    color: tint
    _template: features
---

