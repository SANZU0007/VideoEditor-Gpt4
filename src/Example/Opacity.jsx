import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, spring } from "remotion";
 
export const MyComposition = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames, width, height } = useVideoConfig();
//   const opacity = Math.min(1, frame / 60);
  const opacity = interpolate(frame, [0, 200], [0, 1], {
      extrapolateRight: "clamp",
  });

  const scale = spring({
    fps,
    frame,
  });
   
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontSize: 60,
        backgroundColor: "white",
      }}
    > 
        <div style={{
            opacity: opacity,
            transform: `scale(${scale})`
            }}>
            <h1>HelloWorld</h1>
        </div>
      <p> The current frame is {frame}. <br/>
      This {width}x{height}px video is {durationInFrames / fps} seconds long.
      </p>
      
    </AbsoluteFill>
  );
};