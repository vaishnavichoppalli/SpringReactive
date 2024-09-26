import React from 'react'
import './Service.css'

const Service = () => {
  return (
    <div className='service'>
        <h1>Service</h1>
        <div className='service-form'>
            <form>
                <label>Trailer VIN</label>
                <input type="text" name="Trailer VIN" placeholder=' '/>
            </form>

        </div>
    </div>
  )
}

export default Service