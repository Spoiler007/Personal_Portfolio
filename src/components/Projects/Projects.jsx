import React from 'react'
import './projects.css'




const Portfolio = () => {
  return (
    <section id='projects'>
      <h2>My Recent <span> Work</span></h2>
      <hr />

      <div className='container1 projects_container'>

        <article className='projects_item'>
          <div className='projects_item-image'>
            <img src="./images/consume.png" alt='' />
          </div>
          <h3> Fast food ordering platform </h3>
          <div className='projects_item-cta'>
            <a href='https://github.com/Spoiler007/Consume' className='btn' target='_blank'>Github</a>
            <a href='https://consume-three.vercel.app' className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>

        <article className='projects_item'>
          <div className='projects_item-image'>
            <img src="./images/agriculture.png" alt='' />
          </div>
          <h3> E-commerce platform for plant sales</h3>
          <div className='projects_item-cta'>
            <a href='https://github.com/Spoiler007/Attractive_Agriculture' className='btn' target='_blank'>Github</a>
            <a href='https://attractive-agriculture.vercel.app' className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>

        <article className='projects_item'>
        <div className='projects_item-image'>
          <img src="./images/managewise.png" alt='' />
        </div>
        <h3> HireQuotient Assignment - ManageWise Clone</h3>
        <div className='projects_item-cta'>
          <a href='https://github.com/Spoiler007/hireQuotient_ManageWise' className='btn' target='_blank'>Github</a>
          <a href='https://hirequotient-chi.vercel.app/' className='btn btn-primary' target='_blank'>Live demo</a>
        </div>
      </article>

        <article className='projects_item'>
          <div className='projects_item-image'>
            <img src="./images/concur.png" alt='' />
          </div>
          <h3> Assignment - The Future Decentralized Reserve Currency clone </h3>
          <div className='projects_item-cta'>
            <a href='https://github.com/Spoiler007/Concur' className='btn' target='_blank'>Github</a>
            <a href='https://concur-coral.vercel.app' className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio;