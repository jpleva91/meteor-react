// Create image list component
// Import React
import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
  { title:'Pen', link: 'https://dummyimage.com/600x400'},
  { title: 'Pine Tree', link: 'https://dummyimage.com/600x400'},
  { title: 'Mug', link: 'https://dummyimage.com/600x400'}
];

// Create component
const ImageList = () => {
  return (
    <ul>
      <ImageDetail />
    </ul>
  );
};

// Export component
export default ImageList;