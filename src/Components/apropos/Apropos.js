import React from 'react'
import "./apropos.css"
const Apropos = () => {
  return (
    <div>
     <section id="about-me">
      <h1>
        Hello, my name is
        <span className="rotate text-important">John doe</span>,<br />
        and i make horrible websites.
      </h1>
      <img className="avatar" src="https://img.freepik.com/photos-premium/ancienne-photographie-sepia-jeune-fille-dans-annees-1920_259177-130.jpg?w=360" alt="jhon-doe" />
    </section>
    </div>
  )
}

export default Apropos
