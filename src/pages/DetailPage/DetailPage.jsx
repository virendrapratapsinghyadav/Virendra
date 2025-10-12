import React from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Data from '../../Data/Data'
import { useNavigate, useParams } from 'react-router-dom'
import ProjectDetail from '../../components/ProjectDetails/ProjectDetail';
import ProjectSection from '../../pages/ProjectSection/ProjectSection'

const DetailPage = () => {
    
    const {id} = useParams();
    const navigate = useNavigate();
    const project = Data.find((proj)=>proj.id === id);

    if(!project)return <div>Project not Found</div>

    const handleClick =()=>{
      navigate('/projects');
    }


  return (
    <div>
      <button
      onClick={handleClick} 
      className=' text-3xl cursor-pointer rounded-3xl hover:bg-red-400 '>
        <IoArrowBackCircleOutline />
      </button>
      <ProjectDetail {...project}/>
    </div>
  )
}

export default DetailPage
