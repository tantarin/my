import React from 'react'
import PostList from "./PostList.jsx";
import Projects from "./Projects.jsx";

const WorksSection = ({ posts }) => {
    return (
        <section className="bg-bg_light_primary" id="projects">
            <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
                <div>
                    <h2 className="title" data-aos="fade-down">
                        {Projects.title}
                    </h2>
                    <h4 className="subtitle" data-aos="fade-down">
                        {Projects.subtitle}
                    </h4>
                    <br />
                </div>
              <span className="flex items-center mb-8">
                <div className="bg-back-subtle p-2 mr-4 rounded-full">
                </div>
                <h4 className="text-xl text-accent font-semibold">Works</h4>
              </span>

            </div>
        </section>
    )
}

export default WorksSection