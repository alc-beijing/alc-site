import React from 'react'
import image1 from '@site/static/asf/active/7861674037550_.pic_hd.jpg'
import image2 from '@site/static/asf/active/7881674037574_.pic_hd.jpg'
import image3 from '@site/static/asf/active/7871674037557_.pic_hd.jpg'

export default function () {
  return (
    <div className="section bg-light p-xl-3">
      <div className="container">
        <div className="row text-left">
          <div className="col-12">
            <div className="mb-5">
              <h2 className="h3 fw-bold">活动 & Meetup</h2>
              <hr className="my-4 col-1" />
              <p className="lead text-muted">Apache Local Community 北京本地社区活动, 有文章/有照片 两种类型, 如果是文章点击会跳到文章页面,如果是照片, 点击整个屏幕会有一个遮罩效果,会出来一个照片显示框,可以查看上一张,下一张</p>
            </div>
          </div>

          <div className="col-md-4 col-6 px-4 px-md-3 cursor-pointer">
            <div className="feature-children alc-border p-4 mb-5 rounded-3 bg-white shadow-sm hover-box-up">
              <h3 className="h5">ALC北京-2022年末聚会</h3>
              <p><img src={image1}/></p>
            </div>
          </div>

          <div className="col-md-4 col-6 px-4 px-md-3 cursor-pointer">
            <div className="feature-children alc-border p-4 mb-5 rounded-3 bg-white shadow-sm hover-box-up">
              <h3 className="h5">ALC北京-2022年末聚会</h3>
              <p><img src={image3}/></p>
            </div>
          </div>

          <div className="col-md-4 col-6 px-4 px-md-3 cursor-pointer">
            <div className="feature-children alc-border p-4 mb-5 rounded-3 bg-white shadow-sm hover-box-up">
              <h3 className="h5">ALC北京-2022年末聚会</h3>
              <p><img src={image2}/></p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
