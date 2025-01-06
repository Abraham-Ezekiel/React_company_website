import React from 'react'
import "./Footer.css"
import Logo from '../Logo'
import { Link } from 'react-scroll'
import { footer, teams } from '../../data'



const Footer = () => {
  return (
    <footer id='footer'>
      <div className="container">
        <div className="row">
          <div className="column">
            <Logo/>
            <p className='mission-text'>
              Mitsab Resources Global Limited, a trusted force in conversation,
              exploration and environmental solutions, driven by local content.
            </p>
            <form action="" className='newsletter'>
              <h3>Get weekly update</h3>
              <div className="control_container">
                <input type="email" placeholder='Enter your email address' className='control' />
                <button className="btn" type='button' >Subscribe</button>
              </div>
            </form>
          </div>
         
          {
            footer.map((list,index)=>(
              <div className="column" key={index}>
              
                <div className="routes_name">{list.name}</div>
           
        
                <div className="routes_container">
                  {
                    list.routes.map((route,i)=>(
                      <Link to={route.id} className='route_item' key={i}>
                        <p className="name">{route.name}</p>
                      </Link>
                    ))
                  }
                </div>
              </div>
            ))
          }
         
         
        </div>
        
        <div className="copyright">
          <div className="container">
            <h3>Copyright &copy; 2025 | All Rights Reserved</h3>
            <p className="text_muted">Built with ❤️ and dedication by a passionate group led by Abraham Akpan</p>
          </div>
          <div className='social-container'>
            <p>Follow Us</p>
            <div className='socials'>
            {
              teams[0].social.map((item,i)=>(
                <a href={item.url || "#"} target='_blank' className="icon_container" key={i}>
                  {item.icon}
                </a>
              ))
            }
          </div>

          </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
