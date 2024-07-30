import React, {useEffect, useState} from 'react'
import Fromsub from '../component/fromsub.jsx';
import axios from "axios"

function form() {
    const [data, setData] = useState([])
    console.log("this is data", data);

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((data) =>  setData(data?.data?.categories))
    }, [])

  return (
    <div>
        <div className='mt-5 border'>
            {data?.map((dt) => 
                <Fromsub key={dt?.idCategory} {...dt} />
            )}
        </div>
    </div>
  )
}

export default form
