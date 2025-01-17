import { defineType } from 'sanity';

export const shippingPolicy = defineType({
  name: 'shippingPolicy',
  title: 'Shipping Policy',
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
