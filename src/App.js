import React, { useEffect, useState } from "react";
import "./App.css";
import "./pages/Video";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
    const [video, setVideos] = useState([]);

    //conexão com a colecao do firebase ->'videos'
    //async para esperar os documentos com await
    async function getVideos() {
        const videosCollection = collection(db, "videos");
        const videosSnapshot = await getDocs(videosCollection);
        //mapeamento dos videos (para permitir pegar um por um)
        const videosList = videosSnapshot.docs.map((doc) => doc.data());
        setVideos(videosList);
    }

    //sempre que iniciar ou atualizar
    useEffect(() => {
        getVideos();
    }, []);

    return (
        <div className="App">
            <div className="app_videos">
                {video.map((item) => {
                    return (
                        <Video
                            likes={item.likes}
                            messages={item.messages}
                            shares={item.shares}
                            name={item.name}
                            description={item.description}
                            music={item.music}
                            url={item.url}
                        ></Video>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
