import React, { useState } from 'react'
import {Formik,Form,Field} from 'formik'
import axios from 'axios'
const Add = () => {
  const[title,setTitle]=useState('')
  const [price,setPrice]=useState('')
  const [desc,setDesc]=useState('')
  const item={
    title,
    price,
    desc
  }
  return (
    <div>
      <Formik  onSubmit={()=>{
        axios.post('http://localhost:6065/',item).then((res)=>{

        })
      }} initialValues={{title:'',price:'',desc:''}}>
        <Form>
          <Field onChange={(e)=>{
            setTitle(e.target.value)
          }} value={title} type='text'/>
          <Field onChange={(e)=>{
            setPrice(e.target.value)
          }} value={price} type='Number'/>
          <Field onChange={(e)=>{
            setDesc(e.target.value)
          }} value={desc} type='text'/>
          
          <button type='submit'>submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Add
