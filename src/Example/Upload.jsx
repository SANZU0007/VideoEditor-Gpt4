import { AbsoluteFill, Video } from "remotion";

export const MyComponent = ({ videoUrl }) => {
  return (
    <AbsoluteFill>
      <Video src={videoUrl} />
    </AbsoluteFill>
  );
};
