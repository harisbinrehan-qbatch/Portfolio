import React from 'react';
import Project from './Project';
import ProductInfo from '../Assests/ProductInfo';

const Projects = () => {
    return (
        <div id='projects' className='my-10'>
            <h3 className="text-md underline underline-offset-2 text-center my-4 text-accent">My Projects</h3>
            <p className="text-md text-xl text-center pb-10">I've done number of projects, one of them is highlighted</p>
            <div data-aos="flip-down" className='flex flex-col md:flex-row justify-center gap-8'>
                {
                    ProductInfo.map(project => <Project key={project._id} project={project} ></Project>)
                }
            </div>
        </div>
    );
};


export default Projects;