import React, { useLayoutEffect, useState } from "react";
import { Router } from "react-router-dom";
export default function CustomRouter({ history, children }) {
    
  const [historyState, setHistoryState] = useState({
    location: history.location,
    action: history.action,
  });

  useLayoutEffect(() => {
    const unlisten = history.listen(({ location, action }) => {
      setHistoryState({ location, action });
    });

    return unlisten;
  }, [history]);

  return (
  <React.Fragment>
    <Router
      navigator={history}
      navigationType={historyState.action}
      location={historyState.location}
    >
      {children}
    </Router>
  </React.Fragment>
  );
}