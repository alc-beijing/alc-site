import React from 'react'
import BrowserOnly from '@docusaurus/BrowserOnly';
import './index.less';
import './theme.less';

import Hreo from "./hreo";
import Statistic from "./statistic";
import News from "./news";
import Activities from "./activities";
import Projects from "./projects";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function () {

  return (
    <BrowserOnly fallback={<div id="preloader"></div>}>
      {() => {
        // AOS JS
        AOS.init({
          offset: 100,
          duration: 700,
          easing: "ease-out-quad",
          once: !0
        });
        window.addEventListener('load', AOS.refresh);
        return <div className="home-wrap">
          <Hreo/>
          <Statistic/>
          <News />
          <Activities/>
          <Projects />
        </div>;
      }}
    </BrowserOnly>

  );
}
