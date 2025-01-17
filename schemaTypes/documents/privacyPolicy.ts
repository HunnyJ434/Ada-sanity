import { defineType } from 'sanity';

export const privacyPolicy = defineType({
  name: 'privacyPolicy',
  title: 'Privacy Policy',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }], // Supports rich text
    },
  ],
});
