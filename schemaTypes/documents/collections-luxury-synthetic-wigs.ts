import { defineType } from 'sanity';

export const luxurySyntheticWigs = defineType({
    name: 'luxury-synthetic-wigs',
    title: 'Luxury Synthetic Wigs',
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
    ],
  });
  