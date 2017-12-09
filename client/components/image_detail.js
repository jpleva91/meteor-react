import React from 'react';
import ImageScore from './image_score';

const ImageDetail = (props) => {
  // props.image => this is the image object
  // props.image.title
  // props.image.link

  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src={props.image.link} />
      </div>
      <div className="media-body">
        <h1 className="media-heading">
          {props.image.title}
        </h1>
        <p>{props.image.description}</p>
      </div>
      <ImageScore ups={props.image.ups} downs={props.image.downs} />
    </li>
  );
};

export default ImageDetail;