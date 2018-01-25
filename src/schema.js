import classification from './classification';

export default [
  {
    id: 'name',
    label: 'Name',
    show: true,
    sample: '$2 chunk',
    align: 'left',
  },
  {
    id: 'year',
    label: 'Year',
    type: 'year',
    show: true,
    sample: 2015,
  },
  {
    id: 'grape',
    label: 'Grape',
    type: 'suggest',
    optoins: classification.grapes,
    show: 'Merlot',
    align: 'left',
  },
  {
    id: 'rating',
    label: 'Rating',
    type: 'rating',
    show: true,
    sample: 3,
  },
  {
    id: 'comments',
    label: 'Comments',
    type: 'text',
    smaple: 'Nice for the price',
  },
];
