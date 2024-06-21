import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios'

function submission() {
  const [question, setQuestion] = useState()
  console.log("this  is question", question);
    
    const userData = useSelector(state => state.auth.data);


    const topic = (userData?.formData?.surveyTopic === "Technology") ? 18 : (userData?.formData?.surveyTopic === "Health") ? 17 : 9

    useEffect(() => {
      fetch(topic)
    })

    const fetch = async(topic) => {
      const data = await axios.get(`https://opentdb.com/api.php?amount=10&category=${topic}`);
      if (data) {
        console.log("data gaha 5", data.data.results);
        setQuestion(data?.data?.results)
      }
    }


    const decodeHtml = (html) => {
      const txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    };


  return (
    <div>
      <div className='border  sm:mx-[450px] mx-28 mt-10'>
        <div className=' text-xl text-center my-5'>This is data what you did fill</div>
        <div className='border flex px-5'>
          <div className=' h-auto py-5 w-96'>
            <div className='mb-1'>Full Name : </div>
            <div className='mb-1'>Email : </div>
            <div className='mb-1'>Survey Topic : </div>
            {userData?.formData?.surveyTopic === "Technology" && (<div className='mb-1'>Favorite Programming Language : </div>)}
            {userData?.formData?.surveyTopic === "Technology" &&(<div className='mb-1'>Years of Experience : </div>)}
            {userData?.formData?.surveyTopic === "Health" && (<div className='mb-1'>Exercise Frequency : </div>)}
            {userData?.formData?.surveyTopic === "Health" && (<div className='mb-1'>Diet Preference : </div>)}
            {userData?.formData?.surveyTopic === "Education" && (<div className='mb-1'>Highest Qualification : </div>)}
            {userData?.formData?.surveyTopic === "Education" && (<div className='mb-1'>Field of Study : </div>)}
            <div>Feedback : </div>
          </div>
          <div className=' w-72 ml-3 py-5'>
            <div className='text-end mb-1'>{userData?.formData?.fullName}</div>
            <div className='text-end mb-1'>{userData?.formData?.email}</div>
            <div className='text-end mb-1'>{userData?.formData?.surveyTopic}</div>
            <div className='text-end mb-1'>{userData?.formData?.favoriteProgrammingLanguage}</div>
            <div className='text-end mb-1'>{userData?.formData?.yearsOfExperience}</div>
            <div className='text-end mb-1'>{userData?.formData?.exerciseFrequency}</div>
            <div className='text-end mb-1'>{userData?.formData?.dietPreference}</div>
            <div className='text-end mb-1'>{userData?.formData?.highestQualification}</div>
            <div className='text-end mb-1'>{userData?.formData?.fieldOfStudy}</div>
            <div className='text-end mb-1 ml-auto w-72'>{userData?.formData?.feedback}</div>
          </div>
        </div>
        <div className='px-5'>
          <div className='my-5 text-xl '>Please check more Questions</div>
          <div className="mb-10">
              <label className='mb-2 text-violet-900 mr-2'>1. {question && decodeHtml(question[1]?.question)}</label>
              <select className='border px-2 py-1 mt-2' name="highestQualification" >
                <option value="">Select answer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                {question && <option value="High School">{question && question[1]?.correct_answer}</option>}
                {question && question[1]?.incorrect_answers?.map((ques) => (
                  <option key={ques} value="Bachelor's">{ques}</option>
                ))}
              </select>
          </div>
          <div className="mb-10">
              <label className='mb-2 text-violet-900 mr-2'>2. {question && decodeHtml(question[2]?.question)}</label>
              <select className='border px-2 py-1 mt-2' name="highestQualification" >
                <option value="">Select answer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                {question && <option value="High School">{question && question[2]?.correct_answer}</option>}
                {question && question[2]?.incorrect_answers?.map((ques) => (
                  <option key={ques} value="Bachelor's">{ques}</option>
                ))}
              </select>
          </div>
          <div className="mb-10">
              <label className='mb-2 text-violet-900 mr-2'>3. {question && decodeHtml(question[3]?.question)}</label>
              <select className='border px-2 py-1 mt-2' name="highestQualification" >
                <option value="">Select answer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                {question && <option value="High School">{question && question[3]?.correct_answer}</option>}
                {question && question[3]?.incorrect_answers?.map((ques) => (
                  <option key={ques} value="Bachelor's">{ques}</option>
                ))}
              </select>
          </div>
          <div className="mb-10">
              <label className='mb-2 text-violet-900 mr-2'>4. {question && decodeHtml(question[4]?.question)}</label>
              <select className='border px-2 py-1 mt-2' name="highestQualification" >
                <option value="">Select answer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                {question && <option value="High School">{question && question[4]?.correct_answer}</option>}
                {question && question[4]?.incorrect_answers?.map((ques) => (
                  <option key={ques} value="Bachelor's">{ques}</option>
                ))}
              </select>
          </div>
  
        </div>
      </div>
    </div>
  )
}

export default submission
