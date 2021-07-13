import { unstable_defineSchema } from "tina-graphql-gateway-cli";

export default unstable_defineSchema({
  collections: [
    {
      label: "Blog Posts",
      name: "posts",
      path: "content/posts",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "reference",
          label: "Author",
          name: "author",
          collections: ["authors"],
        },
      ],
    },
    {
      label: "Authors",
      name: "authors",
      path: "content/authors",
      fields: [
        {
          type: "string",
          label: "Name",
          name: "name",
        },
        {
          type: "string",
          label: "Avatar",
          name: "avatar",
        },
      ],
    },
    {
      label: "Pages",
      name: "pages",
      path: "content/pages",
      fields: [
        {
          type: "object",
          list: true,
          name: "blocks",
          label: "Sections",
          templates: [
            {
              name: "raw",
              label: "Raw Data",
              fields: [
                {
                  type: "string",
                  label: "Description",
                  name: "description",
                },
              ],
            },
            {
              name: "content",
              label: "Content",
              fields: [
                {
                  type: "string",
                  ui: {
                    component: "textarea",
                  },
                  label: "Body",
                  name: "body",
                },
                {
                  type: "string",
                  label: "Color",
                  name: "color",
                  options: ["default", "tint", "primary"],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
