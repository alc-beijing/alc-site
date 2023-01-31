import React, { useState } from 'react'

import useBaseUrl from '@docusaurus/useBaseUrl';
import ImageGallery from './ImageGallery'
const imageList = [{
  img: '/asf/active/7861674037550_.pic_hd.jpg',
  attribute: { 'data-src': '/asf/active/7861674037550_.pic_hd.jpg' }
},
{
  img: '/asf/active/7871674037557_.pic_hd.jpg',
  attribute: { 'data-src': '/asf/active/7861674037550_.pic_hd.jpg' }
},
{
  img: '/asf/active/7881674037574_.pic_hd.jpg',
  attribute: { 'data-video': '{ "source": [{ "src": "http://assets.streamxhub.com/alc-beijing.mp4", "type": "video/mp4" }], "tracks": [], "attributes": { "preload": false, "playsinline": true, "controls": true } }' },
}]
import People from './People'

export default function () {
  const [showVideo, setShowVideo] = useState(false)
  const getDataSource = (item) => {
    if (item.video) {
      const videoSource = { "source": [{ "src": item.video, "type": "video/mp4" }], "tracks": [], "attributes": { "preload": false, "playsinline": true, "controls": true } }
      return { 'data-video': JSON.stringify(videoSource) }
    } else {
      return { 'data-src': useBaseUrl(item.img) }
    }
  }
  const renderChildren = (item) => {
    return <div className="p-2">
      <p>
        <img className="img-responsive" src={useBaseUrl(item.img)} />
      </p>
    </div>
  }
  return (
    // bg-gradient-primary
    <div className="section pb-2 pt-7 overflow-hidden">

      <div className="container-fluid px-7 pb-2">
        <div className="row justify-content-center">
          <div className="col-md-6  col-8 align-self-center pe-5" data-aos="fade-right">
            <div className="text-start mt-0">
              <div className="mb-5 system_info pt-0">

                <div className="project_title fw-bold mb-3">
                  <div>
                    <img src="/asf/ALC-Beijing-logo.png" alt="Apache Incubator logo"
                      className="alc-avatar float-left" />
                    <span className="animated-gradient-text_foreground">
                      APACHE LOCAL COMMUNITY
                      <div>Beijing Chapter</div>
                    </span>
                  </div>
                </div>

                <p className="lead text-light">
                  (口号)Apache Local Community 北京本地社区, 共建共荣, 传播 Apache 开源之道
                </p>

                <div className="socialMedia pt-4">
                  <a href="javascript:void(0)">
                    <i className="fa fa-wechat"></i>
                    <div className="wechat-dropdown">
                      <img src="/image/join_wechat.png" alt="weChat" />
                    </div>
                  </a>
                  <a href="javascript:void(0)"><i className="fa fa-twitter"></i></a>
                  <a href="javascript:void(0)"><i className="fa fa-slack"></i></a>
                  <a href="javascript:void(0)"><i className="fa fa-facebook"></i></a>
                </div>

              </div>
            </div>
          </div>
          {/* hero image */}

          <div className="col-md-6 col-12 align-self-center">
            <div className="hero__screenshot">
              <div style={{ width: '100%' }}>
                {showVideo ? <div><video width={'100%'} height={'420px'} autoPlay controls="controls" src="http://assets.streamxhub.com/alc-beijing.mp4"></video></div> : <div id="demo-video-cover" style={{ background: "url('/image/alc-video-cover.jpg')", height: "426px", width: "100%", backgroundSize: 'cover' }}>
                  <div id="demo-overlay"></div>
                  <div id="demo-content">
                    <div style={{ fontSize: '18px', fontWeight: 600, marginBottom: '20px', color: 'white' }}> Alc 北京介绍 </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.867 477.867" id="play-icon" onClick={() => setShowVideo(true)}><path d="M238.933 0C106.974 0 0 106.974 0 238.933s106.974 238.933 238.933 238.933 238.933-106.974 238.933-238.933C477.726 107.033 370.834.141 238.933 0zm100.624 246.546a17.068 17.068 0 01-7.662 7.662v.085L195.362 322.56c-8.432 4.213-18.682.794-22.896-7.638a17.061 17.061 0 01-1.8-7.722V170.667c-.004-9.426 7.633-17.07 17.059-17.075a17.068 17.068 0 017.637 1.8l136.533 68.267c8.436 4.204 11.867 14.451 7.662 22.887z"></path></svg>
                  </div>
                </div>}

              </div>
            </div>
          </div>
          {/* 轮播图片 */}
          <div className='pt-6'>
            <ImageGallery list={imageList} renderChildren={renderChildren} className="col-md-4 cursor-pointer float-left pl-2 pr-2"></ImageGallery>
          </div>

          <div className="col-12 text-center mt-8">
            <People></People>
          </div>
        </div>
      </div>

    </div >
  );
}
