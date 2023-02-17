import React from 'react'

const ServicesDropdown = () => {
  return (
    <div className='homeMenu servicesMenu' id="dropdown">
        <div className='megaMenuSection'>
            <h3>PRODUCT DESIGN AND DEVELOPMENT</h3>
            <a href='binatecagency.com/#'><p>Landing Page</p></a>
        </div>
        <div className='megaMenuSection'>
            <h3>MARKETING</h3>
            <a href='binatecagency.com/#'>Pay Per Click Advertising</a>
        </div>
        <div className='megaMenuSection'>
            <h3>ECOMMERCE</h3>
            <a href='binatecagency.com/#'>
                Ecommerce Store
            </a>
        </div>
        <div className='megaMenuSection'>
            <h3>BRANDING</h3>
            <a href='binatecagency.com/#'>
                Full Brand Development
            </a>
        </div>
    </div>
  )
}

export default ServicesDropdown