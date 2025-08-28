import React from 'react'

const ProjectDetail = ({subHeading, heading, image, duration, role, context, outcome}) => {
  return (
    <div>
      <div>
        {/* CONTENT */}
        <div>
            {/* Heading */}
            <div>
                <div><h2>{subHeading}</h2></div>
                <div><h1>{heading}</h1></div>
            </div>

            {/* IMAGE */}
            <div>
                <img src={image} alt="img" />
            </div>

            {/* PROJECT DETAILS/CONTEXT */}
            <div>
                {/* DETAILS */}
                <div>
                    <div><h1>Project Details</h1></div>

                    <div>
                        {/* Duration */}
                        <div>
                            <p>Duration</p>
                            <p>{duration}</p>
                        </div>

                        {/* Role */}
                        <div>
                            <p>Role</p>
                            <p>{role}</p>
                        </div>
                    </div>
                </div>

                {/* CONTEXT */}
                <div>
                    {/* heading */}
                    <div>
                        <h1>Project Context</h1>
                    </div>

                    {/* description */}
                    <div>
                        <p>{context}</p>
                    </div>
                </div>
            </div>

            {/* PROJECT OUTCOME */}
            <div>
                {/* heading */}
                <div><h1>Project Outcome</h1></div>

                {/* content */}
                <div>
                    <p>{outcome}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
