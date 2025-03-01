import React from 'react';

const MissionVision = () => {
  return (
    <section className="py-12 px-4 md:py-16 md:px-8 bg-green-700 text-white font-coolvetica">
     <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-6 md:px-12 py-8 md:py-16">

        
      
        <div className="flex flex-col justify-start md:justify-center text-center md:text-left max-w-xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Our Vision</h3>
          <p className="text-base md:text-lg text-left leading-relaxed md:leading-loose">
            “At Mama Africa Tours, our vision is to be the premier choice for travelers seeking authentic experiences in Rwanda. 
            We aim to inspire a love for exploration while promoting sustainable tourism that benefits local communities, 
            enriching both our guests and the environments they visit.”
          </p>
        </div>
        
        
        <div className="flex flex-col justify-start md:justify-center text-center md:text-left max-w-xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Our Mission</h3>
          <p className="text-base md:text-lg  text-left leading-relaxed md:leading-loose">
            “At Mama Africa Tours, our mission is to provide unforgettable travel experiences that connect guests to the culture, 
            history, and natural beauty of Rwanda. We prioritize personalized service, sustainability, and community 
            engagement, ensuring each journey is enriching, safe, and memorable for every traveler.”
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default MissionVision;
