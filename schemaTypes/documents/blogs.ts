import { defineType } from 'sanity';

export const blogs = defineType({
    name: 'blogs',
    title: 'Blogs',
    type: 'document',
    fields: [
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: { hotspot: true },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
    ],
  });
  