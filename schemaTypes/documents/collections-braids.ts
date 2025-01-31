import { defineType } from 'sanity';

export const braids = defineType({
  name: 'braids',
  title: 'Braids',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'number',
    },
    {
      name: 'fromPrice',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'oldPrice',
      title: 'Old Price',
      type: 'number',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
});
