import React from 'react';

import LightGallery from 'lightgallery/react';

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";

import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

export default function (props) {
  const { list = [] } = props;
  return <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade">
    {list.map((item, index) => {
      return <div key={index} className={props.className} {...item.attribute}>
        {props.renderChildren(item)}
      </div>
    })}
  </LightGallery>
}
