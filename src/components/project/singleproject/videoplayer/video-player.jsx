import { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";


export const VideoPlayer = (props) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [playbackRate, setPlaybackRate] = useState(1);
  const { options, onReady } = props;


  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
      }));
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.playbackRate(playbackRate);
    }
  }, [playbackRate]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    // const player = playerRef.current;

    // return () => {
    //   if (player && !player.isDisposed()) {
    //     player.dispose();
    //     playerRef.current = null;
    //   }
    // };
    const player = playerRef.current;

    const Button = videojs.getComponent("Button");
    const button = new Button(player);

    const myButton = player.getChild("ControlBar").addChild(button, {
      controlText: "My button",
      className: "vjs-visible-text",
    });

    // myButton.controlText("My Custom Buttom");
    myButton.addClass("vjs-visible-text");

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <>
      <div data-vjs-player className="border-[5px] border-solid border-[#ffa500]">
        <div ref={videoRef} />
      </div>
      <div
        style={{
          marginTop: "20px",
        }}
      >
        {/* <SpeedControl onChange={(value) => setPlaybackRate(value)} /> */}
      </div>
    </>
  );
};

export default VideoPlayer;