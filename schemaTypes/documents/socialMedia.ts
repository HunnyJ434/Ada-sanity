import { defineType } from 'sanity';

export const socialMediaLinks = defineType({
  name: 'socialMediaLinks',
  title: 'Social Media Links',
  type: 'document',
  fields: [
    {
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }).error('Enter a valid Facebook URL'),
    },
    {
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }).error('Enter a valid Instagram URL'),
    },
    {
      name: 'tiktok',
      title: 'TikTok URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }).error('Enter a valid TikTok URL'),
    },
  ],
  preview: {
    select: {
      facebook: 'facebook',
      instagram: 'instagram',
      tiktok: 'tiktok',
    },
    prepare({ facebook, instagram, tiktok }) {
      return {
        title: 'Social Media Links',
        subtitle: [
          facebook ? `Facebook: ${facebook}` : null,
          instagram ? `Instagram: ${instagram}` : null,
          tiktok ? `TikTok: ${tiktok}` : null,
        ]
          .filter(Boolean)
          .join(', '),
      };
    },
  },
});
