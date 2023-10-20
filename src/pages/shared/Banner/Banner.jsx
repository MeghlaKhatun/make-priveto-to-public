
const Banner = () => {
    return (
        <div className="hero h-[250px] md:h-[400px]  lg:h-[800px] w-full bg-cover bg-no-repeat mt-10 " style={{ backgroundImage: 'url(https://i.ibb.co/hsxFfGy/banner-11zon.png)' }}>
            <div className=" py-8"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold">Technology & Electronics</h1>
    
                </div>
            </div>
        </div>
    );
};

export default Banner;