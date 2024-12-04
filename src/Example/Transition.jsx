import { useCurrentFrame } from "remotion"
import { makeTransform,
         interpolateStyles,
         translateX,
        } from "@remotion/animation-utils";


const Transition = () => {
    const frame = useCurrentFrame();
    // const { fps, durationInFrames, width, height } = useVideoConfig();

    const animatedStyles = interpolateStyles(
        frame,
        [0, 200, 400],
        [
          { opacity: 0, transform: makeTransform([translateX(-1000)]) },
          { opacity: 1, transform: makeTransform([translateX(0)]) },
          { opacity: 0, transform: makeTransform([translateX(1000)]) },
        ],
      );
  return ( 
      <h1 className="fr" style={animatedStyles}>JEEVA</h1>
  )
}

export default Transition