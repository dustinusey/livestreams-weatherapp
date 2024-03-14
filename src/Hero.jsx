const LocationMessage = ({location, current}) => {
  return (
    <>
      <p className="text-3xl font-extrabold uppercase">
        {current.condition.text}
      </p>
      <p className="uppercase text-3xl">
        <span className="opacity-50 font-extalight">{location.name}</span>
        <span className="font-extrabold">{location.region}</span>
      </p>
      <p className="text-6xl mt-5 font-extrabold stroke-black opacity-80">
        {current.temp_f}°
      </p>
    </>
  );
};
const GenericMessage = () => {
  return (
    <>
      <p className="text-3xl font-extrabold">Welcome</p>
      <p className="">Search a location to get the current weather</p>
    </>
  );
};

const Hero = ({ hasLocation, weather}) => {
  return (
    <div className="min-h-[300px] w-full bg-gradient-to-t from-[#BC8DE3] to-[#7983E5] flex flex-col justify-center items-center text-white p-5 text-center">
      {!hasLocation ? (
        <GenericMessage />
      ) : (
        <LocationMessage
          location={weather.location}
          current={weather.current}
        />
      )}
    </div>
  );
};
export default Hero;
