import { Player } from '@remotion/player';
import { HelloWorld } from "./HelloWorld";
import { MyComposition } from './Example/Opacity';
import { MyVideo } from './Example/ReuseComponent';
import Transition from './Example/Transition';
import { MyComponent } from './Example/Upload';
import { useState, useCallback, useRef } from "react";

export const RemotionRoot = () => {
    const videoList = [HelloWorld, MyComposition, MyVideo, Transition];
    const [video, setVideo] = useState(0); // Initialize with integer
    const playerRef = useRef(null);
    const [videoUrl, setVideoUrl] = useState(null);

    const seekToStart = useCallback(() => {
        const player = playerRef.current;
        if (player) {
            player.seekTo(1); // Seek to the start of the video
        }
    }, []);

    const changeVideo = useCallback((index) => {
        setVideo(index); // Set video to the index directly
        seekToStart();
    }, [seekToStart]);

    const handleChange = useCallback(async (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            return;
        }
        const file = event.target.files[0];
        setVideoUrl(String(URL.createObjectURL(file)));
        videoList.push(MyComponent);
    }, []);

    return (
        <> 
            <div id="videoplayer-wrapper">
                <div className='main-video-player'>
                    {videoUrl && <Player
                        ref={playerRef}
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
                        inputProps={{ videoUrl }}
                        loop
                        controls
                    />
                    }
                </div>
                        

                <input type="file" onChange={handleChange} />
            
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
