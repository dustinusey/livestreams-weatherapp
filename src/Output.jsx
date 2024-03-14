import OutputItem from "./OutputItem";

const Output = ({ current, hasLocation }) => {
  return (
    <>
      {hasLocation && (
        <ul className="mt-5">
          <OutputItem
            type={"Condition"}
            value={current.current.condition.text}
          />
          <OutputItem
            type={"Humidity"}
            value={`${current.current.humidity}%`}
          />
          <OutputItem type={"Cloudy"} value={`${current.current.cloud}%`} />
          <OutputItem
            type={"Feels like"}
            value={`${current.current.feelslike_f}°`}
          />
        </ul>
      )}
    </>
  );
};
export default Output;
