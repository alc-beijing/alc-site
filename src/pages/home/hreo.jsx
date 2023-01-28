import React from 'react'

import ASFLogo from '@site/static/asf/asf_logo.svg'
import image1 from '@site/static/asf/active/7861674037550_.pic_hd.jpg';
import image3 from '@site/static/asf/active/7871674037557_.pic_hd.jpg';
import image2 from '@site/static/asf/active/7881674037574_.pic_hd.jpg';

export default function () {
    return (
        <div className="section bg-gradient-primary pb-9 pt-7 overflow-hidden">

            <div className="container-fluid px-7 pb-2">
                <div className="row justify-content-center">
                    <div className="col-md-6  col-8 align-self-center pe-5" data-aos="fade-right">
                        <div className="text-start mt-0">
                            <div className="mb-5 system_info pt-0">

                                <div className="project_title fw-bold mb-3">
                                    <div>
                                        <img src="/asf/ALC-Beijing-logo.png" alt="Apache Incubator logo"
                                             className="alc-avatar float-left"/>
                                        <span className="animated-gradient-text_foreground">
                                            APACHE LOCAL COMMUNITY
                                            <p>Beijing Chapter</p>
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
                                            <img src="/image/join_wechat.png" alt="weChat"/>
                                        </div>
                                    </a>
                                    <a href="javascript:void(0)"><i className="fa fa-twitter"></i></a>
                                    <a href="javascript:void(0)"><i className="fa fa-slack"></i></a>
                                    <a href="javascript:void(0)"><i className="fa fa-facebook"></i></a>
                                    <ASFLogo className="col-6 float-right"></ASFLogo>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* hero image */}
                    <div className="col-6 align-self-center">
                        <div>
                            <video width="100%" controls="controls" src="http://assets.streamxhub.com/alc-beijing.mp4" />
                            <div>
                                <div className="col-md-4 cursor-pointer float-left pl-0">
                                    <div className="p-2">
                                        <p><img src={image1}/></p>
                                    </div>
                                </div>

                                <div className="col-md-4 cursor-pointer float-left pl-2 pr-2">
                                    <div className="p-2">
                                        <p><img src={image3}/></p>
                                    </div>
                                </div>

                                <div className="col-md-4 cursor-pointer float-left pr-0">
                                    <div className="p-2">
                                        <p><img src={image2}/></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center mt-8">
                        这里放各位大佬的寄语,祝福之类的, 是一个轮播的效果
                    </div>
                </div>
            </div>

        </div>
    );
}
