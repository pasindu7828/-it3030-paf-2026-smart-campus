import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            {/* HERO SECTION */}
            <section className="relative pt-20 pb-20 lg:pt-24 lg:pb-28">
                {/* Background Image Overlay */}
                <div 
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
                    }}
                >
                    {/* Dark gradient overlay to make text pop */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20 mb-24">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
                        WELCOME TO SMART CAMPUS:<br />
                        <span className="text-yellow-500">INNOVATING YOUR COLLEGE EXPERIENCE</span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-200 max-w-3xl mx-auto mb-10">
                        Access seamless services, modern facilities, and digital resources at your fingertips.
                    </p>
                    <a 
                        href="#facilities" 
                        className="inline-block bg-white text-yellow-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-50 hover:text-yellow-700 transition duration-300 border-2 border-transparent hover:border-yellow-500"
                    >
                        EXPLORE FACILITIES
                    </a>
                </div>
            </section>

            {/* FEATURES STRIP (Matches the 4 icons in the screenshot) */}
            <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border border-gray-100">
                    <div className="flex flex-col items-start">
                        <div className="text-yellow-500 mb-4 h-12 w-12 bg-yellow-50 rounded-full flex items-center justify-center">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm mb-2">QUICK ACCESS TO<br/>ESSENTIAL SERVICES</h3>
                        <p className="text-xs text-gray-500 mb-3">Quick access to essential services and manage your profile.</p>
                        <a href="#" className="text-yellow-600 text-xs font-semibold border border-yellow-500 rounded-full px-4 py-1 hover:bg-yellow-50">Learn More</a>
                    </div>
                    
                    <div className="flex flex-col items-start border-t md:border-t-0 md:border-l border-gray-100 md:pl-6 pt-6 md:pt-0">
                        <div className="text-yellow-500 mb-4 h-12 w-12 bg-yellow-50 rounded-full flex items-center justify-center">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm mb-2">FACILITY BOOKING<br/>SIMPLIFIED</h3>
                        <p className="text-xs text-gray-500 mb-3">Digital booking, medical centers, and digital resource services.</p>
                        <a href="#" className="text-yellow-600 text-xs font-semibold border border-yellow-500 rounded-full px-4 py-1 hover:bg-yellow-50">Learn More</a>
                    </div>

                    <div className="flex flex-col items-start border-t lg:border-t-0 lg:border-l border-gray-100 lg:pl-6 pt-6 lg:pt-0">
                        <div className="text-yellow-500 mb-4 h-12 w-12 bg-yellow-50 rounded-full flex items-center justify-center">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm mb-2">CAMPUS MAPS &<br/>NAVIGATION</h3>
                        <p className="text-xs text-gray-500 mb-3">Campus maps & navigation, and internal maps in your app.</p>
                        <a href="#" className="text-yellow-600 text-xs font-semibold border border-yellow-500 rounded-full px-4 py-1 hover:bg-yellow-50">Learn More</a>
                    </div>

                    <div className="flex flex-col items-start border-t md:border-t-0 md:border-l border-gray-100 md:pl-6 pt-6 md:pt-0">
                        <div className="text-yellow-500 mb-4 h-12 w-12 bg-yellow-50 rounded-full flex items-center justify-center">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm mb-2">CAMPUS UPDATES &<br/>NEWS</h3>
                        <p className="text-xs text-gray-500 mb-3">Campus updates & news informing newly overalls and updates.</p>
                        <a href="#" className="text-yellow-600 text-xs font-semibold border border-yellow-500 rounded-full px-4 py-1 hover:bg-yellow-50">Learn More</a>
                    </div>
                </div>
            </section>

            {/* FACILITIES AT A GLANCE STRIP */}
            <section className="bg-gray-50 py-12 mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-yellow-500 rounded-lg p-3 flex justify-between items-center mb-6 shadow-md">
                        <h2 className="text-white font-bold tracking-wider text-sm md:text-base mx-auto">FACILITIES AT A GLANCE</h2>
                        <div className="flex space-x-2">
                            <button className="h-6 w-6 rounded-full bg-white bg-opacity-20 text-white flex items-center justify-center hover:bg-opacity-40 transition">{"<"}</button>
                            <button className="h-6 w-6 rounded-full bg-white text-yellow-600 flex items-center justify-center shadow hover:bg-gray-100 transition">{">"}</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { name: 'Library', status: 'Closed' },
                            { name: 'Gym', status: 'Closed' },
                            { name: 'Study Rooms', status: 'Closed' },
                            { name: 'Lab', status: 'Closed' }
                        ].map((facility, idx) => (
                            <div key={idx} className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg">{facility.name}</h3>
                                    <p className="text-xs text-gray-500 mt-1">Real-time Availability</p>
                                </div>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-red-500 font-semibold text-sm">{facility.status}</span>
                                    <div className="h-6 w-6 bg-yellow-100 rounded text-yellow-600 flex items-center justify-center">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ABOUT US SECTION */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-1/2">
                            <img src="/about-us-students.png" alt="Students on campus" className="rounded-2xl shadow-xl object-cover h-96 w-full" />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h4 className="text-yellow-500 font-bold tracking-wider text-sm mb-2 uppercase">Discover Our Campus</h4>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">About Us</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Smart Campus Hub is designed to revolutionize the way students, faculty, and staff interact with university resources. We bridge the gap between academic needs and digital convenience.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Our platform provides a centralized, mobile-responsive environment for checking facility availability in real-time, booking rooms, staying updated with campus news, and navigating the grounds effortlessly. 
                            </p>
                            <a href="#contact" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full shadow transition duration-300">
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FACILITIES DESCRIBED SECTION */}
            <section id="facilities" className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h4 className="text-yellow-500 font-bold tracking-wider text-sm mb-2 uppercase">Explore Resources</h4>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Campus Facilities</h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Our modern campus is equipped with state-of-the-art facilities designed to support your academic and extracurricular journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80" alt="Library" className="h-48 w-full object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Central Library</h3>
                                <p className="text-gray-600 text-sm mb-4">A vast collection of academic resources, quiet study zones, and collaborative pods equipped with smart screens.</p>
                                <button className="text-yellow-600 font-semibold text-sm hover:text-yellow-700 flex items-center gap-1">
                                    Check Availability <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80" alt="Gym" className="h-48 w-full object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Fitness Center</h3>
                                <p className="text-gray-600 text-sm mb-4">State-of-the-art cardiovascular and strength training equipment, group fitness studios, and indoor courts.</p>
                                <button className="text-yellow-600 font-semibold text-sm hover:text-yellow-700 flex items-center gap-1">
                                    Check Availability <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                            <img src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=600&q=80" alt="Labs" className="h-48 w-full object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Research Labs</h3>
                                <p className="text-gray-600 text-sm mb-4">Advanced computing and science laboratories available for undergraduate and postgraduate research.</p>
                                <button className="text-yellow-600 font-semibold text-sm hover:text-yellow-700 flex items-center gap-1">
                                    Check Availability <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT US SECTION */}
            <section id="contact" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-t border-gray-100 pt-20">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Contact Us</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                        Have questions or need assistance? Reach out to our campus administration and support teams.
                    </p>
                    
                    <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
                        <div className="bg-gray-50 p-6 rounded-lg text-center flex-1 border border-gray-100">
                            <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                            <p className="text-gray-600 text-sm">support@smartcampus.edu</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg text-center flex-1 border border-gray-100">
                            <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                            <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg text-center flex-1 border border-gray-100">
                            <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-1">Office</h3>
                            <p className="text-gray-600 text-sm">Main Admins, Room 101</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
