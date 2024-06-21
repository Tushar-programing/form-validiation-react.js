import React, { useState, useEffect } from 'react';
import Input from '../component/input';
import validate from '../component/validate';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import authslice from '../store/authslice';
import { dataIn } from '../store/authslice';

import { useSelector } from 'react-redux';

const SurveyForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    surveyTopic: '',
    favoriteProgrammingLanguage: '',
    yearsOfExperience: '',
    exerciseFrequency: '',
    dietPreference: '',
    highestQualification: '',
    fieldOfStudy: '',
    feedback: ''
  });

  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // const handleTopicChange = (e) => {
  //   handleChange(e);
    
  //   fetchAdditionalQuestions(e.target.value);
  // };

  


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(formData) === true) {
      dispatch(dataIn({formData}));
      
      navigate('/submit')
      // console.log('Form data:', formData);
      // console.log('Additional questions:', additionalQuestions);
    } else {
      setErrors(validate(formData))
    }
  };
    

  return (
    <div className='sm:mx-[480px] mx-[100px] '>
        {/* <div> */}

            <form className=' my-20' onSubmit={handleSubmit}>
                <div className='text-black font-semibold text-xl mb-10 text-center'>Dynamic Sections, and Integration with an API</div>
              <Input label="Enter your Full name" className1="mb-4 text-violet-900" className2="mb-2" name="fullName" value={formData.fullName} onChange={handleChange}/>
              {errors.fullName && <p className='mb-10 text-red-500 font-light'>{errors.fullName}</p>}
         

              <Input label="Enter Email:" className1="mb-4 text-violet-900" className2="mb-2" name="email" value={formData.email} onChange={handleChange}/>
              {errors.email && <p className='mb-10 text-red-500 font-light'>{errors.email} </p>}
              
              
              <div className='my-10  text-black'>
                <label className='mb-2 text-violet-900 mr-10'>Survey Topic:</label>
                <select className='border px-2' name="surveyTopic" value={formData.surveyTopic} onChange={handleChange}>
                  <option value="">Select a topic</option>
                  <option value="Technology">Technology</option>
                  <option value="Health">Health</option>
                  <option value="Education">Education</option>
                </select>
                {errors.surveyTopic && <p className='text-red-500 mt-2 font-light'>{errors.surveyTopic}</p>}
              </div>

              {formData.surveyTopic === 'Technology' && (
                <>
                  <div className='mb-3  text-black'>
                    <label className='mb-2 text-violet-900 mr-10'>Favorite Programming Language:</label>
                    <select className='border px-2' name="favoriteProgrammingLanguage" value={formData.favoriteProgrammingLanguage} onChange={handleChange}>
                      <option value="">Select a language</option>
                      <option value="JavaScript">JavaScript</option>
                      <option value="Python">Python</option>
                      <option value="Java">Java</option>
                      <option value="C#">C#</option>
                    </select>
                    {errors.favoriteProgrammingLanguage && <p className='text-red-500 text-center mb-5 mt-1 font-light'>{errors.favoriteProgrammingLanguage}</p>}
                  </div>
                  <div className='mb-10'>
                    <label className='mb-2 text-violet-900 mr-10'>Years of Experience:</label>
                    <input className='border px-2 w-24 rounded-sm' type="number" name="yearsOfExperience" value={formData.yearsOfExperience} onChange={handleChange} />
                    {errors.yearsOfExperience && <span className='text-red-500 text-end ml-16 font-light'>{errors.yearsOfExperience}</span>}
                  </div>
                </>
              )}

              {formData.surveyTopic === 'Health' && (
                <>
                  <div className='mb-5'>
                    <label className='mb-2 text-violet-900 mr-5'>Exercise Frequency:</label>
                    <select className='border px-2 py-1' name="exerciseFrequency" value={formData.exerciseFrequency} onChange={handleChange}>
                      <option value="">Select frequency</option>
                      <option value="Daily">Daily</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Rarely">Rarely</option>
                    </select>
                    {errors.exerciseFrequency && <label className='text-red-500 text-center ml-10 font-light'>{errors.exerciseFrequency}</label>}
                  </div>
                  <div className='mb-10'>
                    <label className='mb-5 text-violet-900 mr-10 '>Diet Preference:</label>
                    <select className='border px-2 py-1' name="dietPreference" value={formData.dietPreference} onChange={handleChange}>
                      <option value="">Select diet preference</option>
                      <option value="Vegetarian">Vegetarian</option>
                      <option value="Vegan">Vegan</option>
                      <option value="Non-Vegetarian">Non-Vegetarian</option>
                    </select>
                    {errors.dietPreference && <label className='text-red-500 text-center ml-10 font-light'>{errors.dietPreference}</label>}
                  </div>
                </>
              )}

              {formData.surveyTopic === 'Education' && (
                <>
                  <div className='mb-4'>
                    <label className='mb-2 text-violet-900 mr-2'>Highest Qualification:</label>
                    <select className='border px-2 py-1' name="highestQualification" value={formData.highestQualification} onChange={handleChange}>
                      <option value="">Select qualification</option>
                      <option value="High School">High School</option>
                      <option value="Bachelor's">Bachelor's</option>
                      <option value="Master's">Master's</option>
                      <option value="PhD">PhD</option>
                    </select>
                    {errors.highestQualification && <span className='text-red-500 text-center ml-5 font-light'>{errors.highestQualification}</span>}
                  </div>
                  <div className='mb-10' >
                    <label className='mb-2 text-violet-900 mr-2'>Field of Study:</label>
                    <input className='border px-2 w-36 ml-10 rounded-sm' type="text" name="fieldOfStudy" value={formData.fieldOfStudy} onChange={handleChange} />
                    {errors.fieldOfStudy && <label className='text-red-500 text-center ml-5 font-light'>{errors.fieldOfStudy}</label>}
                  </div>
                </>
              )}

              <div className=' mb-5'>
                <div className=' text-violet-900 mb-3'>Feedback:</div>
                <textarea className='border px-2' name="feedback" value={formData.feedback} placeholder='feedback' onChange={handleChange} />
                {errors.feedback && <span className=' ml-10 text-red-600 font-light'>{errors.feedback}</span>}
              </div>
          
              <div className=' text-center'><button className='w-36 bg-green-500 text-white py-1' type="submit">Submit</button></div>
            </form>
        {/* </div> */}
    </div>
  );
};

export default SurveyForm;
