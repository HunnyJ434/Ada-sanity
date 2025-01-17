import { defineType } from 'sanity';

export const termsOfService = defineType({
  name: 'termsOfService',
  title: 'Terms Of Service',
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
