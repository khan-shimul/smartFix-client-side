import img1 from "../../../assets/Images/Banner/faq-mc-01.png";
import img2 from "../../../assets/Images/Banner/faq-mc-02.png";

const Faq = () => {
  return (
    <section className="p-5 md:p-16 mt-10 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-lg mb-2 text-orange">
          Your Frequently Ask Questions
        </p>
        <h3 className="text-3xl md:text-4xl font-bold text-blueDark dark:text-white">
          Everything You Need to Know
        </h3>
        <p className="text-sm text-gray dark:text-white mt-2">
          We’re here to make things clear for you. Your concerns, clarified in
          one place.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-3/5">
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium text-blueDark dark:text-orange">
                How does Smart Fix work?
              </div>
              <div className="collapse-content text-gray dark:text-white">
                <p>
                  Simply create an account, select the type of device you need
                  repaired, describe the issue, and schedule a service. Our
                  expert technicians will handle the rest.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium  dark:text-orange">
                What types of devices do you repair?
              </div>
              <div className="collapse-content text-gray dark:text-white">
                <p>
                  We repair a wide range of electronics, including smartphones,
                  tablets, laptops, desktop computers, gaming consoles, and
                  more.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-blueDark dark:text-orange">
                How much will my repair cost?
              </div>
              <div className="collapse-content text-gray dark:text-white">
                <p>
                  Repair costs vary based on the device and issue. Use our app’s
                  instant quote feature for an estimate tailored to your needs.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-blueDark dark:text-orange">
                Do you offer a warranty on repairs?
              </div>
              <div className="collapse-content text-gray dark:text-white">
                <p>
                  Yes, all repairs come with a 90-day warranty covering parts
                  and workmanship for your peace of mind.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-blueDark dark:text-orange">
                Can I track the progress of my repair?
              </div>
              <div className="collapse-content text-gray dark:text-white">
                <p>
                  Absolutely! Smart Fix provides real-time updates, so you can
                  track every step of your repair process through the app.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-blueDark dark:text-orange">
                How long does a repair typically take?
              </div>
              <div className="collapse-content text-gray dark:text-white">
                <p>
                  Most repairs are completed within 24–48 hours. For common
                  issues like screen replacements, it’s often faster.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex-grow">
          <div data-aos="zoom-in-up" className="flex relative">
            <img
              className="absolute top-10 left-24 md:left-40 z-0"
              src={img1}
              alt=""
            />
            <img className="" src={img2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
