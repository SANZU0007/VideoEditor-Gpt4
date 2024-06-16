import { Player } from '@remotion/player';
// import { HelloWorld } from "./HelloWorld";
// import { MyComposition } from './Example/Opacity';
// import { MyVideo } from './Example/ReuseComponent';
import Transition from './Example/Transition';

export const RemotionRoot = () => {
	return (
		<>  
		 <Player
			component={Transition}
			durationInFrames={1000}
			compositionWidth={1920}
            compositionHeight={1080}
			fps={120}
			style={{
			width: 560,
			height: 300,
			}}
			autoPlay= {true}
			loop
			controls
         />
		</>
	);
};
