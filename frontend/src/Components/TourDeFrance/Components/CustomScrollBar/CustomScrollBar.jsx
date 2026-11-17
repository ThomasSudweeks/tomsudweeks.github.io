
import { useState, useEffect, useRef, useCallback } from "react";
import "./CustomScrollbar.css";

function CustomScrollbar() {
  const trackRef = useRef(null);
  const dragRef = useRef(null);
  const hideTimer = useRef(null);

  const [metrics, setMetrics] = useState({
    top: 0,
    height: 0,
    visible: false
  });

  const [scrollbarVisible, setScrollbarVisible] = useState(false);

  const showScrollbar = useCallback(() => {
    setScrollbarVisible(true);

    clearTimeout(hideTimer.current);

    if (!dragRef.current) {
      hideTimer.current = setTimeout(() => {
        setScrollbarVisible(false);
      }, 1500);
    }
  }, []);

  const updateScrollbar = useCallback(() => {
    const viewport = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const trackHeight = trackRef.current?.clientHeight ?? viewport * 0.93;
    const maxScroll = docHeight - viewport + 20;

    if (maxScroll <= 0) {
      setMetrics({ top: 0, height: 0, visible: false });
      setScrollbarVisible(false);
      return;
    }

    const thumbHeight = Math.min(
      trackHeight,
      Math.max(30, trackHeight * (viewport / docHeight))
    );

    const scrollRatio = Math.min(1, Math.max(0, window.scrollY / maxScroll));

    const thumbTravel = trackHeight - thumbHeight;

    setMetrics({
      top: Math.min(thumbTravel, Math.max(0, scrollRatio * thumbTravel)),
      height: thumbHeight,
      visible: true
    });
  }, []);

  function handleScroll() {
    updateScrollbar();
    showScrollbar();
  }

  useEffect(() => {
    updateScrollbar();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateScrollbar);

    const observer = new ResizeObserver(updateScrollbar);
    observer.observe(document.documentElement);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollbar);
      observer.disconnect();

      clearTimeout(hideTimer.current);
    };
  }, [updateScrollbar, showScrollbar]);

  // Start dragging
  function handlePointerDown(e) {
    e.preventDefault();

    clearTimeout(hideTimer.current);
    setScrollbarVisible(true);

    dragRef.current = {
      startY: e.clientY,
      startScroll: window.scrollY
    };

    e.currentTarget.setPointerCapture(e.pointerId);
  }

  // Move scrollbar thumb
  function handlePointerMove(e) {
    if (!dragRef.current || !trackRef.current) return;

    const trackHeight = trackRef.current.clientHeight;
    const docHeight = document.documentElement.scrollHeight;
    const viewport = window.innerHeight;

    const thumbTravel = trackHeight - metrics.height;
    const maxScroll = docHeight - viewport;

    if (thumbTravel <= 0) return;

    const deltaY = e.clientY - dragRef.current.startY;

    const targetScroll =
      dragRef.current.startScroll +
      (deltaY / thumbTravel) * maxScroll;

    window.scrollTo(0, targetScroll);
  }

  function handlePointerUp() {
    dragRef.current = null;
    showScrollbar();
  }

  // Click track to jump
  function handleTrackClick(e) {
    if (e.target !== trackRef.current) return;

    const rect = trackRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;

    const trackHeight = trackRef.current.clientHeight;
    const docHeight = document.documentElement.scrollHeight;
    const maxScroll = docHeight - window.innerHeight;

    const thumbTravel = trackHeight - metrics.height;

    if (thumbTravel <= 0) return;

    const target = (clickY - metrics.height / 2) / thumbTravel;

    window.scrollTo(
      0,
      Math.max(0, Math.min(1, target)) * maxScroll
    );

    showScrollbar();
  }

  if (!metrics.visible) return null;

  return (
    <div
      className={`custom-scrollbar-track ${
        scrollbarVisible ? "visible" : ""
      }`}
      ref={trackRef}
      onClick={handleTrackClick}
    >
      <div
        className="custom-scrollbar-thumb"
        style={{
          height: `${metrics.height}px`,
          transform: `translateY(${metrics.top}px)`
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      />
    </div>
  );
}

export default CustomScrollbar;
