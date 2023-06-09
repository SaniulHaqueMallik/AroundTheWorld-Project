import React from "react";
import Imgdislike from "../../assets/img/favorite.svg";
import { useDispatch } from "react-redux";
import { deleteFavourite } from "../../reducks/favourites/operations";

const FavCard = ({ favourite }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="favorite-list">
        <div className="favorite-image">
          <img src={favourite.image} alt="" />
          <div className="like">
            <img
              src={Imgdislike}
              onClick={() => dispatch(deleteFavourite(favourite.id))}
              alt=""
            />
          </div>
        </div>
        <div className="textcontent">
          <div className="favorite-heading">
            <h1>{favourite.name}</h1>
          </div>
          <div className="gridsubheading">
            <h2>{favourite.place_type}</h2>
          </div>
          <div className="gridtext">
            <p>"Opens:"{favourite.time_to_travel}"hours"</p>
            <p>{favourite.description}</p>
          </div>
          <div className="input-button">
            <a className="direction" href={favourite.googel_map_link}>
              Directions
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavCard;
