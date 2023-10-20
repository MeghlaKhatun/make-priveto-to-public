
const About = () => {
    return (
        <div className=" my-4 md:my-8 lg:my-20">
            <h2 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700 text-2xl md:text-3xl lg:text-5xl  font-extrabold italic">About Us</h2>
            <p className="text-[16px] font-semibold w-full px-4 md:px-0 md:w-1/2 text-center mx-auto mt-2">Electronic and information technology includes computer hardware and software, operating systems, web-based information and applications, telephones and other telecommunications products, video equipment and multimedia products, information kiosks, and office products such as photocopiers and fax machines.</p>
            <div className="bg-gray-700  mt-10" >

                <div className="lg:flex lg:justify-evenly lg:items-center">
                    <div className="lg:w-1/2 hero-overlay">
                        <img src="https://i.ibb.co/VL2rccz/footer-up-11zon.jpg" alt="" />
                    </div>

                    <div className="lg:w-1/2 mx-auto ">
                        <div className="lg:w-1/2 mx-auto py-10 px-10 lg:px-0">
                            <h2  className="text-white font-bold text-xl md:text-2xl italic"><span className="text-2xl md:text-3xl ">1.</span>Branding</h2>
                            <p className="text-white md:font-medium text-[16px] italic ml-8">Branding is the process of creating a distinct identity for a business in the mind of your target audience and consumers. At the the most basic level, branding is made up of a companys name and logo, visual design, mission, and tone of voice.</p>

                            <h2 className="text-white font-bold text-xl md:text-2xl italic mt-6"><span className="text-2xl md:text-3xl ">2.</span>Quality</h2>
                            <p className="text-white md:font-medium text-[16px] italic ml-8">Quality control is important in the electronics industry. It helps to ensure the components you source meet your specifications and performance standards and are free from defects that may cause problems in the final products safety and performance.</p>

                            <h2 className="text-white font-bold text-xl md:text-2xl italic mt-6"><span className="text-2xl md:text-3xl">3.</span>Development</h2>
                            <p className="text-white md:font-medium text-[16px] italic ml-8">First and foremost, electronics development is a process that precedes the actual work of an EMS provider. Because prior to the PCB assembly and device assembly, it is a matter of designing and developing these modules and devices.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;