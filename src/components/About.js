import React from 'react'

const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 p-25'>
                        <h3>About Us</h3>
                        <h1>WELCOME TO MAESTRO PIZINNI</h1>
                        <p>
                            information, images, video, etc. that are included as part of something such as a
                            included as part of something such as a website
                        </p>
                        <div className='about_btn'>
                            <a href="#" className='btn btn-smart'>RED MORE</a>
                        </div>
                    </div>
                <div className='col-6'>
                     <div className='about_img'>
                        <img src="img/five.webp" alt="Pizza"/>
                     </div>  
                 </div>

                </div>

            </div>
        </div>
    )
}
export default About