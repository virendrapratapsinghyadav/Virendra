import React from 'react'
import Card2 from '../../components/ProjectCard/Card2'
import p1 from '../../assets/images/p1.avif'
import p2 from '../../assets/images/p2.avif'
import p3 from '../../assets/images/p3.avif'
import ThinkCreate from '../../assets/images/ThinkCreate.png'
import github from '../../assets/images/github.jpeg'
import { Link } from 'react-router-dom'



const ProjectSection = () => {


  const ProjectList = [
    {
      id: '1',
      icon: p1,
      heading: "Revolutionising WhatsApp Collaboration with Meetup",
      description: "During my time at university, I was challenged to enhance the collaborative features within WhatsApp. After considering multiple solutions, Meetup for WhatsApp was born. This project aims to seamlessly integrate event planning functionality through Meetup. Rooted in extensive user research, persona development, and iterative design processes, Meetup seeks to address common pain points such as difficulty organising group plans and finding crucial information within chat threads. By adhering to WhatsApp's design guidelines and maintaining cohesion with its interface, I endeavoured to redefine the user experience, empowering individuals to effortlessly coordinate gatherings while enhancing the platform's utility and appeal.",
    },
    {
      id: '2',
      icon: ThinkCreate,
      heading: "Converting an underperforming online store to a selling powerhouse",
      description: "Cheil is a digital agency owned by Samsung Group. During my time there as a graduate, I was on the conversion rate optimisation (CRO) team focusing on improving samsung.com/au. My role was user experience graduate where I would work closely with the team to research insights based on data, heuristic principles and competitors. With these insights, I would design modifications to the site, hand off designs to developers and then run an A/B test to determine if our hypothesise were accurate.",
    },
    {
      id: '3',
      icon: p3,
      heading: "Relaunching Coachbase to the world",
      description: "In early 2024, I was approached by a founder of a Saas product that was a game changer for online coaches, about a website refresh. His current site had a high bounce rate, looked outdated and wasn't optimised for conversion. Coachbase is a tool that online coaches can use to build meal plans for their clients rapidly. The founder wanted to promote 3 main benefits of this on the new site and ultimately foster more sign ups online.",
    },
    {
      id: '4',
      icon: github,
      heading: "Github",
      description: "Visit this page to get insigts of my new Projects..",
    },

  ]


  return (
    <div className=' bg-[rgb(237,237,237)] p-0.5 rounded-xl '>
      <div className='h-full py-3 px-5 bg-[rgb(247,247,247)] m-3 rounded-xl '>
        <h1 className='text-3xl font-bold'>My Work</h1>
        <h2 className='text-xl text-gray-400'>Here are some of my really high impact projects that helped grow products and move that needle on valubale metrics.</h2>

        <div className='mt-5'>
          {
            ProjectList.map((tag, index) => {
              return (
                <Link to={`/project/${tag.id}`} key={tag.id}>
                  <Card2 key={index} icon={tag.icon} heading={tag.heading} description={tag.description} />
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectSection
