import { useRef } from "react";

const LocationSearch = ({hasLocation, location, grabWeather}) => {
  const inputVal = useRef("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        grabWeather(inputVal.current.value);
        e.currentTarget.reset();
      }}
      className="p-8"
    >
      <input
        className="py-2 px-5 my-5 w-full bg-gray-200 rounded-md outline-none"
        type="text"
        placeholder="Search location..."
        ref={inputVal}
      />

      {hasLocation && (
        <p className="text-gray-500 text-center">
          Showing weather for
          <span className="font-extrabold text-gray-600">
            {` ${location.name}, ${location.region}`}
          </span>
        </p>
      )}
    </form>
  );
};
export default LocationSearch;
