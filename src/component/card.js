import React, { useState } from "react";
import "../css/card.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { MyContext } from "./context/ContextProvider";
export default function Cards({
  name,
  src,
  originalName,
  setModal,
  item,
  setModalData,
}) {
  const [isFavorites, setIsFavorites] = useState(false);
  const { addItem, removeItem } = useContext(MyContext);

  return (
    <div className="card-container" id="card-container">
      <div
        className="card-container__img-container"
        onClick={() => {
          setModalData(item);
          setModal(true);
        }}
      >
        <img
          className="film-img"
          src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + src}
          alt="movies"
        />
      </div>
      <div>
        <h2 className="film-name">
          {name} {originalName}
        </h2>
        <FontAwesomeIcon
          style={{ color: isFavorites ? "red" : "" }}
          icon={faHeart}
          onClick={() => {
            setIsFavorites(!isFavorites);
            if (isFavorites) {
              removeItem(item.id);
            } else {
              addItem(item);
            }
          }}
        />
      </div>
    </div>
  );
}
