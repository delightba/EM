import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Image() {
    const [file, setFile] = useState()
    const [image, setImage] = useState()

    const handleUpload = (e)=>{
        const formdata = new FormData()
        formdata.append('file',file)
        axios.post('http://localhost:8080/upload',formdata)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        axios.get('http://localhost:8080/getImage')
        .then(res =>setImage(res.data[4].image))
        .catch(err => console.log(err))
    }, [])
  return (
    <div>
      <input type="file" onChange={e=>setFile(e.target.files[0])}/>
      <button onClick={handleUpload}>Upload</button>
      <br />
      <img src={'http://localhost:8080/images/'+image} alt="image" />
    </div>
  )
}