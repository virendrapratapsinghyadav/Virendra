import React, { useRef, useState } from 'react';
import dancingVideo from '../../assets/dancing.mp4'; // your animation

const DancePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    // Manually play the video with sound
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.error("Error playing video:", err);
        });
      }
    }, 100); // small delay to ensure state update
  };

  const handlePause = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="relative w-full h-[220px] bg-gray-900 rounded-lg overflow-hidden shadow-lg ">
      {/* Top-right Button */}
      <div className="absolute top-4 right-4 z-20">
        {!isPlaying ? (
          <button
            onClick={handlePlay}
            className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            ▶️ Play
          </button>
        ) : (
          <button
            onClick={handlePause}
            className="cursor-pointer bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            ⏸️ Pause
          </button>
        )}
      </div>

      {/* Text */}
      {!isPlaying && (
        <div className="flex items-center justify-center h-full text-white text-2xl font-semibold text-center px-4">
          Want to play music or vibe? 🎶 Tap the play button!
        </div>
      )}

      {/* Video Animation */}
      {isPlaying && (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={dancingVideo}
          loop
          controls={false} // no default controls
        />
      )}
    </div>
  );
};

export default DancePlayer;
