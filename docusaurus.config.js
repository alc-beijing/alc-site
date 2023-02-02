/*
 *
 *  Licensed to the Apache Software Foundation (ASF) under one or more
 *  contributor license agreements.  See the NOTICE file distributed with
 *  this work for additional information regarding copyright ownership.
 *  The ASF licenses this file to You under the Apache License, Version 2.0
 *  (the "License"); you may not use this file except in compliance with
 *  the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apache StreamPark (incubating)',
  tagline: 'Apache StreamPark - Make stream processing easier! easy-to-use streaming application development framework and operation platform',
  url: 'https://streampark.apache.org/',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'image/favicon.ico',
  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          editLocalizedFiles: true,
          sidebarCollapsed: false,
          // Please change this to your repo.
          editUrl: 'https://github.com/apache/incubator-streampark-website/edit/dev/'
        },

        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/apache/incubator-streampark-website/edit/dev/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: ({
    announcementBar: {
      id: 'support_us',
      content: '⭐️ <a href="/about" style="color:#477de9">点我查看</a> 关于ALC 北京的介绍',
      textColor: '#333',
      isCloseable: false,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true
    },
    navbar: {
      logo: {
        alt: 'Alc Logo',
        src: 'asf/ALC-Avatar.png',
      },
      items: [
        {
          to: 'Home',
          label: 'Home',
          position: 'right'
        },
        {
          to: 'Blog',
          label: 'Blog',
          position: 'right',
        },
        {
          to: "https://space.bilibili.com/609014805",
          label: 'Video',
          position: 'right',
        },
        {
          to: "https://www.ximalaya.com/album/37853515",
          position: 'right',
          label: 'Podcast',
        },
        {
          to: 'about',
          label: 'About',
          position: 'right'
        },
        {
          to: 'about',
          label: 'Foundation',
          position: 'right',
        }
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              html: `
                  <div class="footer-left-box">
                    <div class="flex align-center footer-system">
                      <span class='system-title'>关于ALC北京</span>
                    </div>
                    <p>Apache Local Community 北京本地社区, 传播Apache 之道</p>
                  </div>
                `,
            }
          ],
        },
        {
          title: 'Resource',
          items: [
            {
              label: 'Document',
              href: '/docs/intro',
            },
            {
              label: 'Releases',
              href: 'https://github.com/apache/incubator-streampark/releases',
            },
            {
              label: 'FAQ',
              href: 'https://github.com/apache/incubator-streampark/issues/507',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/apache/incubator-streampark',
            },
            {
              label: 'Issue Tracker',
              href: 'https://github.com/apache/incubator-streampark/issues',
            },
            {
              label: 'Pull Requests',
              href: 'https://github.com/apache/incubator-streampark/pulls',
            },
          ],
        },
        {
          title: "Follow",
          items: [
            {
              html: `
                <div class="subscribe-box">
                    <div class="d-flex align-items-center" style="margin-bottom: 30px;padding-top: 11px">
                      <div class="subscribe-input flex-fill">
                        <input class="form-control" id="email_address" maxLength="60" type="text" name="email_address" placeholder="Subscribe with us">
                      </div>
                      <div class="subscribe-submit-inner">
                        <a class="btn btn-white m-0" type="submit" href="mailto:dev-subscribe@streampark.apache.org">
                          <span><i class="fa fa-paper-plane text-white"></i></span>
                        </a>
                      </div>
                    </div>
                    <ul class="icon-bottom">
                        <li>
                          <a href="javascript:void(0)">
                            <i class="fa fa-wechat"></i>
                            <div class="wechat-dropdown"><img src="/image/join_wechat.png" alt="weChat"></div>
                          </a>
                        </li>
                        <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="javascript:void(0)"><i class="fa fa-slack"></i></a></li>
                        <li><a href="javascript:void(0)"><i class="fa fa-facebook"></i></a></li>
                    </ul>
                </div>
              `,
            }
          ],
        }
      ],
      copyright: `
            <div  style="text-align: left;margin-top:30px">
                <div style="border-top: 1px solid #525252;min-height: 60px;line-height: 25px;text-align: left;font-family: Avenir-Medium;font-size: 14px;color: #999;display: flex;align-items: center;">
                  <span>
                      Copyright © 2022-${new Date().getFullYear()} The Apache Software Foundation. ALC-Beijing, and its feather logo are trademarks of The Apache Software Foundation.
                  </span>
                </div>
            </div>`,
    },

    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: darkCodeTheme,
      additionalLanguages: ['powershell', 'java', 'scala', 'yaml'],
    }

  }),

  plugins: [
    'docusaurus-plugin-less',
  ]
};

module.exports = config;
