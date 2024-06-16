import { Player } from '@remotion/player';
import { HelloWorld } from "./HelloWorld";



export const RemotionRoot = () => {
	return (
		<>  
		 <Player
			component={HelloWorld}
			durationInFrames={1000}
			compositionWidth={1920}
            compositionHeight={1080}
			fps={30}
			style={{
			width: 600,
			height: 480,
			}}
			autoPlay= {true}
			loop
			controls
         />
		</>
	);
};
