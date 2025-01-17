import { defineType } from 'sanity';

export const refundPolicy = defineType({
  name: 'refundPolicy',
  title: 'Refund Policy',
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
