import clsx from 'clsx';
import React, { useState } from 'react';

import "./index.less";

const projectList = [
  {
    id: 1,
    projectName: "StreamPark",
    users: [
      { userName: "test1", github: "https://www.github.com", ppmc: false, avator: "https://demo.themefisher.com/revolve-jekyll/assets/images/author.jpg" },
      { userName: "test2", github: "https://www.github.com", ppmc: true, avator: "https://demo.themefisher.com/revolve-jekyll/assets/images/author.jpg" },
      { userName: "test3", github: "https://www.github.com", ppmc: false, avator: "https://demo.themefisher.com/revolve-jekyll/assets/images/author.jpg" },
    ]
  },
  {
    id: 2,
    projectName: "StreamPark2",
    users: [
      { userName: "test1", github: "https://www.github.com", ppmc: true, avator: "https://demo.themefisher.com/revolve-jekyll/assets/images/author.jpg" },
      { userName: "test2", github: "https://www.github.com", ppmc: false, avator: "https://demo.themefisher.com/revolve-jekyll/assets/images/author.jpg" },
      { userName: "test3", github: "https://www.github.com", ppmc: false, avator: "https://demo.themefisher.com/revolve-jekyll/assets/images/author.jpg" },
    ]
  }
]
export default function () {
  const [currentProject, setProject] = useState(projectList[0])
  return <div className="container">

    <div className='project-list d-flex'>
      {projectList.map(item => {
        return <div className={clsx('project-item', item.id == currentProject.id ? 'active' : '')} onClick={() => setProject(item)}>
          {item.projectName}
        </div>
      })}

    </div>
    <div className="row">
      {currentProject.users.map(item => {
        return <div className="col-lg-2 col-sm-4 author-block" key={item.userName}>
          <div className="author-card text-center">

            <img className="author-image" src={item.avator} />

            <h3 className="mb-2">
              <a target="_blank" href={item.github} className="post-title">
                {item.userName}
              </a>
            </h3>
            <p className="mb-3 ">
              <span className={clsx('author-tag', item.ppmc ? 'ppmc' : 'committer')}>{item.ppmc ? 'PPMC' : 'Committer'}</span>
            </p>
            <p className="mb-3">
              <a target="_blank" href={item.github}>
                <svg className="github-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                </svg>
              </a>

            </p>
          </div>
        </div>
      })}


    </div>
  </div>
}
