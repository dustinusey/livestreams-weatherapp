import { useState } from "react";

const LocationSearch = (props) => {
  const [inputVal, setInputVal] = useState("");
  const { grabWeather, hasLocation, location } = props;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        let value = e.target.querySelector("input");
        console.log(value.value);
        grabWeather(value.value);
        setInputVal("");
      }}
      className="p-8"
    >
      <input
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
        className="py-2 px-5 my-5 w-full bg-gray-200 rounded-md outline-none"
        type="text"
        placeholder="Search location..."
        value={inputVal}
      />

      {hasLocation && (
        <p className="text-gray-500 text-center">
          Showing weather for
          <span className="font-extrabold text-gray-600">
            {` ${location.current.name}, ${location.current.region}`}
          </span>
        </p>
      )}
    </form>
  );
};
export default LocationSearch;