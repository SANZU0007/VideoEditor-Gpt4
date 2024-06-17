import { Player } from '@remotion/player';
import { HelloWorld } from "./HelloWorld";
import { MyComposition } from './Example/Opacity';
import { MyVideo } from './Example/ReuseComponent';
import Transition from './Example/Transition';
import { useState } from 'react';

export const RemotionRoot = () => {
    const videoList = [HelloWorld, MyComposition, MyVideo, Transition];
    const [video, setVideo] = useState(0); // Initialize with integer
    console.log(video);

    function changeVideo(index) {
        setVideo(index); // Set video to the index directly
    }

    return (
        <> 
            <div id="videoplayer-wrapper">
                <div className='main-video-player'>
                    <Player
                        component={videoList[video]} // Use the state `video` here
                        durationInFrames={1000}
                        compositionWidth={1920}
                        compositionHeight={1080}
                        fps={120}
                        style={{
                            width: 560,
                            height: 300,
                        }}
                        autoPlay={true}
                        loop
                        controls
                    />
                </div>

                <div className='videos-row-player'>
                    {videoList.map((vid, i) => (
                        <div className='row' onClick={() => changeVideo(i)} key={i}>
                            <Player
                                component={vid}
                                durationInFrames={1000}
                                compositionWidth={1920}
                                compositionHeight={1080}
                                fps={120}
                                style={{
                                    width: 360,
                                    height: 180,
                                    cursor: 'pointer' // Add cursor pointer for better UX
                                }}
                                autoPlay={true}
                                loop
                            />
                        </div>
                    ))}
                </div>
            </div> 
        </>
    );
};
