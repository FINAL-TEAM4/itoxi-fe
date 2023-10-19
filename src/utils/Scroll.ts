import { useRef, useEffect } from "react";

export const useScrollDiv = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  let startTouchX = 0;

  useEffect(() => {
    const handleWheel = (e: any) => {
      if (e.deltaY === 0 || !scrollRef.current) return;
      e.preventDefault();
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += e.deltaY;
      }
    };
    const handleTouchStart = (e: any) => {
      if (!scrollRef.current) return;
      startTouchX = e.touches[0].clientX;
    };
    const handleTouchMove = (e: any) => {
      if (!scrollRef.current) return;
      e.preventDefault();
      const xDiff = startTouchX - e.touches[0].clientX;
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += xDiff;
        startTouchX = e.touches[0].clientX;
      }
    };
    const element = scrollRef.current;
    if (element) {
      element.addEventListener("wheel", handleWheel, { passive: false });
      element.addEventListener("touchstart", handleTouchStart);
      element.addEventListener("touchmove", handleTouchMove);

      return () => {
        if (element) {
          element.removeEventListener("wheel", handleWheel);
          element.removeEventListener("touchstart", handleTouchStart);
          element.removeEventListener("touchmove", handleTouchMove);
        }
      };
    }
  }, []);

  return scrollRef;
};

export const useScrollUl = () => {
  const scrollRef = useRef<HTMLUListElement>(null);
  let startTouchX = 0;

  useEffect(() => {
    const handleWheel = (e: any) => {
      if (e.deltaY === 0 || !scrollRef.current) return;
      e.preventDefault();
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += e.deltaY;
      }
    };
    const handleTouchStart = (e: any) => {
      if (!scrollRef.current) return;
      startTouchX = e.touches[0].clientX;
    };
    const handleTouchMove = (e: any) => {
      if (!scrollRef.current) return;
      e.preventDefault();
      const xDiff = startTouchX - e.touches[0].clientX;
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += xDiff;
        startTouchX = e.touches[0].clientX;
      }
    };
    const element = scrollRef.current;
    if (element) {
      element.addEventListener("wheel", handleWheel, { passive: false });
      element.addEventListener("touchstart", handleTouchStart, { passive: false });
      element.addEventListener("touchmove", handleTouchMove, { passive: false });

      return () => {
        if (element) {
          element.removeEventListener("wheel", handleWheel);
          element.removeEventListener("touchstart", handleTouchStart);
          element.removeEventListener("touchmove", handleTouchMove);
        }
      };
    }
  }, []);

  return scrollRef;
};
