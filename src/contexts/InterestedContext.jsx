import { createContext, useContext, useState, useEffect } from "react";

const InterestedContext = createContext();

export const useInterested = () => useContext(InterestedContext);

export const InterestedProvider = ({ children }) => {
  const [interestedTours, setInterestedTours] = useState(() => {
    const saved = localStorage.getItem("interestedTours");
    return saved ? JSON.parse(saved) : [];
  });

  const [visitedPlaces, setVisitedPlaces] = useState(() => {
    const saved = localStorage.getItem("visitedPlaces");
    return saved ? JSON.parse(saved) : [];
  });

  const [wantToVisitAgain, setWantToVisitAgain] = useState(() => {
    const saved = localStorage.getItem("wantToVisitAgain");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("interestedTours", JSON.stringify(interestedTours));
  }, [interestedTours]);

  useEffect(() => {
    localStorage.setItem("visitedPlaces", JSON.stringify(visitedPlaces));
  }, [visitedPlaces]);

  useEffect(() => {
    localStorage.setItem("wantToVisitAgain", JSON.stringify(wantToVisitAgain));
  }, [wantToVisitAgain]);

  const addToInterested = (tour) => {
    if (!interestedTours.some(t => t.id === tour.id)) {
      setInterestedTours(prev => [...prev, tour]);
    }
  };

  const removeFromInterested = (id) => {
    setInterestedTours(prev => prev.filter(t => t.id !== id));
  };

  const markAsVisited = (tour, reviewData) => {
    setVisitedPlaces(prev => {
      const existing = prev.filter(p => p.id !== tour.id);
      return [...existing, { ...tour, review: reviewData }];
    });

    if (reviewData.visitAgain) {
      if (!wantToVisitAgain.some(t => t.id === tour.id)) {
        setWantToVisitAgain(prev => [...prev, tour]);
      }
      addToInterested(tour);
    }
  };

  return (
    <InterestedContext.Provider
      value={{ 
        interestedTours, 
        addToInterested, 
        removeFromInterested,
        visitedPlaces,
        markAsVisited,
        wantToVisitAgain
      }}
    >
      {children}
    </InterestedContext.Provider>
  );
};