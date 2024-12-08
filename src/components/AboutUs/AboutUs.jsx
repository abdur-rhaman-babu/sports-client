const AboutUs = () => {
  return (
    <div className="my-10">
      <div className="text-center my-5">
        <h1 className="font-bold text-3xl mb-5">About Us</h1>
        <p>
          Welcome to EquiSport, your go-to destination for premium sports
          equipment. We are passionate about empowering athletes of all levels
          with top-quality gear designed for performance, durability, and
          comfort. From beginners to pros, we’re here to help you reach your
          goals. Explore our range and elevate your game today!
        </p>
      </div>

      <iframe
        className="w-full rounded-lg"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/PGZiixvXK4g?si=BSNRLl5eR_rhJBhS"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default AboutUs;
