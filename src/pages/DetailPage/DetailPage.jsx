import React from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Data from '../../Data/Data'
import { useParams } from 'react-router-dom'
import ProjectDetail from '../../components/ProjectDetails/ProjectDetail';

const DetailPage = () => {

    const {id} = useParams();
    const project = Data.find((proj)=>proj.id === id);

    if(!project)return <div>Project not Found</div>

  return (
    <div>
      <button className='relative text-2xl'><IoArrowBackCircleOutline /></button>
      <ProjectDetail {...project}/>
    </div>
  )
}

export default DetailPage
