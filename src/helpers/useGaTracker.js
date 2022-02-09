import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const useGaTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const key = "UA-136464204-3";
    console.log("denis");
    if (!window.location.href.includes("localhost")) {
      ReactGA.initialize(key, {
        debug: true,
        titleCase: false,
        gaOptions: {
          userId: 123,
        },
      });
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [initialized, location]);
};

export default useGaTracker;
