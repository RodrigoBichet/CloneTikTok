import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@Rodrigo EBAC</h3>
                <p>Descrição do vídeo</p>
                <div className="videoFooter__music">
                    <MusicNoteIcon className="videoFooter__icon"></MusicNoteIcon>
                    <div className="videoFooterMusic__text">
                        <p>Titulo da musica</p>
                    </div>
                </div>
            </div>
            <img
                className="videoFooter__record"
                alt="Imagem de um vinil girando"
                src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
            ></img>
        </div>
    );
}

export default VideoFooter;
