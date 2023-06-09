import React from "react";
import FavCard from "../components/common/FavCard";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Search from "../components/common/Search";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getFavourites } from "../reducks/favourites/selectors";
import { useEffect } from "react";
import { fetchFromLocalStorage } from "../reducks/favourites/operations";
import PlacesHeader from "../components/common/PlacesHeader";

const Favourites = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const favourites = getFavourites(selector);
  console.log(favourites);
  useEffect(() => {
    dispatch(fetchFromLocalStorage());
  }, []);

  return (
    <>
      <PlacesHeader />
      <section className="section2">
        <div className="heading-favorite">Favourite Places</div>
        <div className="grid">
          {favourites.map((favourite) => (
            <FavCard favourite={favourite} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Favourites;
