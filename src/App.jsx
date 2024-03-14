import axios from "axios";
import Hero from "./Hero";
import LocationSearch from "./LocationSearch";
import Output from "./Output";

import { useRef, useState } from "react";

const options = {
  "Transfer-Encoding": "chunked",
  Connection: "keep-alive",
  Vary: "Accept-Encoding",
  "CDN-PullZone": "93447",
  "CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
  "CDN-RequestCountryCode": "GB",
  Age: "0",
  "x-weatherapi-qpm-left": "5000000",
  "CDN-ProxyVer": "1.04",
  "CDN-RequestPullSuccess": "True",
  "CDN-RequestPullCode": "200",
  "CDN-CachedAt": "03/14/2024 17:48:51",
  "CDN-EdgeStorageId": "1055",
  "CDN-Status": "200",
  "CDN-RequestId": "60c7a7d596d90e66a5ce798bb5312c13",
  "CDN-Cache": "MISS",
  "Cache-Control": "public, max-age=180",
  "Content-Type": "application/json",
  Date: "Thu, 14 Mar 2024 17:48:51 GMT",
  Server: "BunnyCDN-DE1-864",
  Via: "1.1 varnish (Varnish/6.0)",
};

const App = () => {
  const location = useRef("");
  const current = useRef("");
  const [hasLocation, setHasLocation] = useState(false);

  async function grabWeather(query) {
    const data = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=e6ab0efee14040039a9174430241403&q=${query}&aqi=no`,
      options
    );
    location.current = data.data.location;
    current.current = data.data.current;

    setHasLocation(true);

    console.log(location.current);
    console.log(current.current);
  }
  return (
    <div className="min-h-screen w-full">
      <Hero hasLocation={hasLocation} location={location} current={current} />
      <LocationSearch
        hasLocation={hasLocation}
        location={location}
        grabWeather={grabWeather}
      />
      <Output hasLocation={hasLocation} current={current} />
    </div>
  );
};
export default App;
