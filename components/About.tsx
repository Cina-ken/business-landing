import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Growing Businesses Since 2019
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We started with a simple mission: help businesses make better marketing decisions using data, not guesswork. 
              Today, we've helped over 200+ companies achieve sustainable growth through strategic digital marketing.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our proven methodology combines market research, competitor analysis, and performance tracking 
              to create campaigns that don't just look good – they deliver measurable ROI.
            </p>
            
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">200+</div>
                <div className="text-sm text-gray-600">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">340%</div>
                <div className="text-sm text-gray-600">Avg. Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">6</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
            <Link href="/#contact">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Learn More About Our Process
            </button>
            </Link>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
