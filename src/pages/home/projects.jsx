import React from 'react'
import Committer from "@site/static/asf/committers.svg";

export default function () {
  return (
      <div className="section p-xl-3">
          <div className="container">
              <div className="row text-left">
                  <div className="col-12">
                      <div className="mb-5">
                          <h2 className="h3 fw-bold">PMC / Committer</h2>
                          <hr className="my-4 col-1" />
                          <p className="lead text-muted">Apache Local Community 中国地区的 PMC member / Committer, 这里是个大概的样式, 到时候会进一步细化效果, 需要每个Apache 项目的负责人收集下各自项目的PMC member和committer的信息</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="container text-center">
              <Committer/>
          </div>
      </div>
  );
}
