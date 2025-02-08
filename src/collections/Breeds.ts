import type { CollectionConfig } from 'payload'

export const Breeds: CollectionConfig = {
  slug: 'breeds',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Breed Name',
      required: true,
    },
    {
      name: 'color',
      type: 'text',
      label: 'Colors',
      hasMany: true,
    },
    {
      name: 'sizes',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'males-min',
              type: 'text',
              label: 'Males minimum',
            },
            {
              name: 'males-max',
              type: 'text',
              label: 'Males maximum',
            },
            {
              name: 'females-min',
              type: 'text',
              label: 'Females minimum',
            },
            {
              name: 'females-max',
              type: 'text',
              label: 'Females maximum',
            },
          ],
        },
      ],
    },
    {
      name: 'weight',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'males-min',
              type: 'text',
              label: 'Males minimum',
            },
            {
              name: 'males-max',
              type: 'text',
              label: 'Males maximum',
            },
            {
              name: 'females-min',
              type: 'text',
              label: 'Females minimum',
            },
            {
              name: 'females-max',
              type: 'text',
              label: 'Females maximum',
            },
          ],
        },
      ],
    },
    {
      name: 'appearance',
      type: 'textarea',
      label: 'General appearance',
      admin: {
        placeholder: 'Enter the general appearance of the dog breed.',
      },
    },
    {
      name: 'behaviour',
      type: 'textarea',
      label: 'Behaviour/Temperament',
      admin: {
        placeholder: 'Enter the typical Behaviour and / or Temperament of the dog breed.',
      },
    },
    {
      name: 'fci',
      type: 'group',
      label: 'FCI Nomenclature',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'group',
              type: 'select',
              label: 'Select the group',
              admin: {
                width: '50%',
              },
              options: [
                {
                  label: 'Group 1: Sheepdogs and Cattledogs (except Swiss Cattledogs)',
                  value: 'group-01',
                },
                {
                  label:
                    'Group 2: Pinscher and Schnauzer - Molossoid and Swiss Mountain and Cattledogs',
                  value: 'group-02',
                },
                {
                  label: 'Group 3: Terriers',
                  value: 'group-03',
                },
                {
                  label: 'Group 4: Dachshunds',
                  value: 'group-04',
                },
                {
                  label: 'Group 5: Spitz and primitive types',
                  value: 'group-05',
                },
                {
                  label: 'Group 6: Scent hounds and related breeds',
                  value: 'group-06',
                },
                {
                  label: 'Group 7: Pointing Dogs',
                  value: 'group-07',
                },
                {
                  label: 'Group 8: Retrievers - Flushing Dogs - Water Dogs',
                  value: 'group-08',
                },
                {
                  label: 'Group 9: Companion and Toy Dogs',
                  value: 'group-09',
                },
                {
                  label: 'Group 10: Sighthounds',
                  value: 'group-10',
                },
              ],
            },
            {
              name: 'section',
              type: 'text',
              label: 'Select the section',
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'varieties',
          type: 'text',
          hasMany: true,
        },
        {
          type: 'row',
          fields: [
            {
              name: 'origin',
              type: 'text',
              label: 'Country of origin of the breed',
              admin: {
                width: 'calc(100% / 3)',
              },
            },
            {
              name: 'status',
              type: 'select',
              label: 'Breed status',
              admin: {
                width: 'calc(100% / 3)',
              },
              options: [
                {
                  label: 'Recognized on a definitive basis',
                  value: 'recognised',
                },
              ],
            },
            {
              name: 'acceptance date',
              type: 'date',
              label: 'Date of acceptance on a definitive basis by the FCI',
              admin: {
                width: 'calc(100% / 3)',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'breed image',
      type: 'upload',
      label: 'Add an Image of the breed',
      relationTo: 'media',
    },
    {
      name: 'credits',
      type: 'group',
      label: 'Source of the information',
      fields: [
        {
          name: 'url',
          type: 'text',
          label: 'Website URL',
        },
        {
          name: 'pdf',
          type: 'text',
          label: 'Link to the pdf',
        },
      ],
    },
  ],
}
