import Reviews from "../../Sections/Reviews/Reviews";
import Marquee from "react-fast-marquee";


const ReviewSection = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gray-100">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-2xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
              Reviews
            </p>
            <p>
            <p className="text-lg font-medium">Hear from Our Delighted Customers.</p>

            Discover what our satisfied clients have to say about their experiences with [Your Company Name]. These heartfelt reviews reflect our commitment to creating unforgettable events, making your special occasions truly exceptional. Your trust inspires us to continue exceeding expectations.
            </p>
          </div>
          
          
        </div>
        <Marquee pauseOnHover>
        <Reviews></Reviews>
        </Marquee>
        
      </div>
    );
};

export default ReviewSection;