import React from 'react'
import dataSource from './data.json'

export default function () {
  return (
    <div className="section p-xl-3">
      <div className="container">
        <div className="row text-left">
          <div className="col-12">
            <div className="mb-5">
              <h2 className="h3 fw-bold">文章 / 播客 / 访谈</h2>
              <hr className="my-4 col-1" />
              <p className="lead text-muted">Apache Local Community 北京本地社区最新文章 / 播客 / 访谈等各种讯息</p>
            </div>
          </div>

          <div className="col-12 px-4 cursor-pointer">
            <div className=" p-4 mb-5 rounded-3 bg-white shadow-sm ">
              <span className="label label-danger">访谈</span>
              <p>为什么要成立 ALC (Apache Local Community) Beijing？背后有着怎样的故事? 一起来听听 ALC 北京创始人 姜宁老师怎么说</p>
            </div>
          </div>

          {
            dataSource.feature.map((feature, i) => (
              <div className="col-md-4 col-6 px-4 px-md-3 cursor-pointer" key={i} data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
                <div className="feature-children p-4 mb-5 rounded-3 bg-white shadow-sm ">
                  <span className="label label-danger">文章</span>
                  <h3 className="h5 mt-4 pb-2 ellipsis news-title">{feature.title}</h3>
                  <p className='news-desc'>{feature.details}</p>
                  <div className='news-footer'>
                    <div className='tags'>
                      <span className='tag'>tag</span>
                    </div>
                    <a href="#" className='read-more'>阅读更多+</a>
                  </div>
                </div>
              </div>
            ))
          }

          {
            dataSource.feature.map((feature, i) => (
                <div className="col-md-4 col-6 px-4 px-md-3 cursor-pointer" key={i} data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
                  <div className="feature-children p-4 mb-5 rounded-3 bg-white shadow-sm ">
                    <span className="label label-danger">播客</span>
                    <h3 className="h5">{feature.title}</h3>
                    <p>{feature.details}</p>
                  </div>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
