import { AbsoluteFill, interpolate, useCurrentFrame, Sequence } from "remotion";
 
const Title = ({ title }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 200], [0, 1], {
    extrapolateRight: "clamp",
  });
 
  return (
    <div className="fr" style={{ opacity, textAlign: "center", fontSize: "7em" }}>{title}</div>
  );
};
 

export const MyVideo = () => {
  return (
    <AbsoluteFill>
      {/* <Title title="Hello World!!!" /> */}
      <Sequence durationInFrames={200}>
        <Title title="Hello" />
      </Sequence>
      <Sequence from={200}>
        <Title title="World" />
      </Sequence>
    </AbsoluteFill>
  );
};