import React, { useRef, useState } from "react";
import Songs from "../songs/Songs";
export default function Music() {
  const audioref = useRef();
  const [song, setsong] = useState();
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 place-items-center px-8 -my-4 md:my-3 gap-4">
        {Songs.map((item, key) => {
          return (
            <>
              <div>
                <img
                  key={item.id}
                  src={item.img}
                  alt="pic"
                  className="cursor-pointer md:w-[25vw]"
                  onClick={() => {
                    audioref.current.pause();
                  }}
                  onDoubleClick={() => {
                    audioref.current.play();
                    setsong(Songs[key].Sound);
                  }}
                />
                <audio ref={audioref} src={song} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
