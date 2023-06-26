import React from 'react';
import img1 from '../../assets/p2.png'
import img2 from '../../assets/Screenshot_11.png'
import img3 from '../../assets/P10.png'


const Project = () => {
    return (
        <div className='bg-pink-100  space-y-5'>
            <h2 className='text-center text-4xl text-slate-800 font-bold pt-8'>Recent Projects</h2>
            <p className='text-xl  text-center text-slate-800'>I have my recent project with React also by using other technologies. You can check by clicking live preview.</p>
            <div className="md:flex justify-center items-center gap-10 ">
                <div className="card h-[530px] card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-[400px] h-[250px]' src={img1} /></figure>
                    <div className=" card-body">
                        <h2 className="card-title">Food Hunter</h2>
                        <p >It is a single page application.There you will find chefs and their famous recipe worldwide.
                        </p>
                        <p>Users can search their favorite chef by country name and see their recipes.
                        </p>
                        <p>Secure API and awesome UI UX that makes a unique user interface</p>
                        <div className="md:flex justify-start items-center p-5 gap-4 text-blue-700 text-xl font-bold mt-3">
                            <a href="https://chef-recipe-client-8ef77.web.app/country/0">
                                <button className='btn btn-accent'>Live link</button>
                            </a>
                            <a href="https://github.com/sakibbiswas/chef-recipe-client">

                                <button className='btn btn-primary'> Client</button>
                            </a>
                            <a href="https://github.com/sakibbiswas/chef-recipe-server">
                                <button className='btn btn-secondary'>Server</button>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="card h-[530px] card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-[400px] h-[250px]' src={img2} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Toy Shop</h2>
                        <p >It is a MERN based E-commerce website.That provides some e-commerce services.

                        </p>
                        <p>User can add their toys and manage their activities.
                        </p>
                        <p> Admin have the access to remove product or user in the website.Secured and authentic.</p>

                        <div className="md:flex justify-start items-center p-5 gap-4 text-blue-700 text-xl font-bold mt-3">
                            <a href="https://toy-marketplace-client-d8225.web.app/">
                                <button className='btn btn-accent'>Live link</button>
                            </a>
                            <a href="https://github.com/sakibbiswas/toy-market-client">

                                <button className='btn btn-primary'> Client</button>
                            </a>
                            <a href="https://github.com/sakibbiswas/toy-market-server">
                                <button className='btn btn-secondary'>Server</button>
                            </a>
                        </div>

                    </div>

                </div>

                <div className="card h-[530px] card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-[400px] h-[250px]' src={img3} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Mozart Academy</h2>
                        <p >User can enroll courses and pay for each course
                        </p>
                        <p>Instructors can add courses.
                        </p>
                        <p>Admin can manage all users and instructors by using the admin dashboard.</p>
                        <div className="md:flex justify-start items-center p-5 gap-4 text-blue-700 text-xl font-bold mt-3">
                            <a href="https://summer-camp-client-db0ed.web.app/">
                                <button className='btn btn-accent'>Live link</button>
                            </a>
                            <a href="https://github.com/sakibbiswas/summer-camp-client">

                                <button className='btn btn-primary'> Client</button>
                            </a>
                            <a href="https://github.com/sakibbiswas/summer-camp-server">
                                <button className='btn btn-secondary'>Server</button>
                            </a>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default Project;