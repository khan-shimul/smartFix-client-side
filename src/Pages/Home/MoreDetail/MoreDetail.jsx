import img from "../../../assets/Images/Banner/Banner_2.jpg";

const MoreDetail = () => {
  return (
    <section className="bg-[#F9F9F9] dark:bg-[#030304] p-5 md:p-16 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-5 md:gap-16">
        <div className="lg:w-1/2">
          <img src={img} alt="" />
          {/* <div className="bg-white h-36 w-48 flex flex-col justify-center items-center gap-2 absolute bottom-4 left-4">
            <h2 className="text-5xl font-semibold">
              27 <sup className="text-orange font-normal">+</sup>
            </h2>
            <p className="text-sm text-gray">Years Experience</p>
          </div> */}
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="lg:w-1/2 space-y-4"
        >
          <h4 className="text-orange text-lg font-medium uppercase">
            More Hight Detail
          </h4>
          <h2 className="text-blueDark dark:text-white font-bold text-3xl md:text-5xl leading-tight">
            We Have Best Hiring Team Professional Electronic
          </h2>
          <div>
            <p className="text-gray dark:text-white text-sm leading-7 mb-5">
              Experts You Can Trust, Quality You Can Count On. Your Devices
              Deserve the Best Hands. We Hire Only the Best to Serve You Better.
            </p>
            <p className="text-gray dark:text-white text-sm leading-7 mb-5 border-l-4 border-orange-600 pl-5">
              &#34;Our team is our strength. We’ve assembled the best minds in
              electronics to ensure every repair exceeds expectations. Great
              repairs start with great professionals. That’s why we bring
              together the industrys finest.&#34;
              <br />
              <span className="text-xl font-semibold text-orange inline-block mt-2">
                CEO SmartFix
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreDetail;
