import React, { useEffect, useState } from "react";
import { PlayIcon } from "lucide-react";
import { ListView } from "../../components/ListView";
import { loadDataPlayingNow } from "../../utils/hooks/getData";
import "./styles.scss";
import { Tabs } from "../../components/Tabs";
import Title from "../../components/Title";

const options = [
  { value: 1, label: "Cinema" },
  { value: 2, label: "Streaming" },
  { value: 3, label: "Tv" },
];

/* eslint-disable @typescript-eslint/no-explicit-any */
const Trailers = () => {
  const [featured, setFeatured] = useState<[] | any>([]);
  const [clickedTrailer, setClickedTrailer] = useState<object | any>({});

  const loadData = async (choiceTrending: string | undefined) => {
    const response = await loadDataPlayingNow(choiceTrending);
    setFeatured(response);
    setClickedTrailer({
      ...response[0]?.videos?.results[0],
      ...response[0]?.movie,
    });
    return response;
  };

  ///load inicial
  useEffect(() => {
    loadData("movie/now_playing");
  }, []);

  const movie =
    Object.keys(clickedTrailer).length > 0
      ? clickedTrailer
      : featured && featured.length > 0 && featured[0]?.movie;

  const handleClickTrailer = (
    _e: React.MouseEvent<HTMLDivElement>,
    movie?: object
  ) => {
    setClickedTrailer(movie);
  };

  const handleTabValue = async (_value: any) => {
    if (_value.value === 1) {
      loadData("movie/now_playing");
    } else if (_value.value === 2) {
      loadData("tv/airing_today");
    } else {
      loadData("tv/on_the_air");
    }
  };

  const openVideo = (key: string | undefined) => {
    if (key) {
      window.open(`https://www.youtube.com/watch?v=${key}`, "_blank");
    }
  };

  return (
    <section
      className="featured-videos"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      }}
    >
      <div className="featured-videos__container">
        <div className="container">
          <div className="featured-videos__content">
            <div className="featured-videos__content-info-movies">
              <h1 className="info-movie-title">{movie.title || movie.name}</h1>
              <div className="info-movies-actions">
                {clickedTrailer?.key !== "" && (
                  <div
                    className="button"
                    title={`Ver trailer de ${
                      movie.title || movie.name
                    } no Youtube`}
                    onClick={() => openVideo(clickedTrailer?.key)}
                  >
                    <PlayIcon color="#000" className="play" />
                  </div>
                )}

                <button className="see-more-info">Ver mais informações</button>
              </div>
            </div>

            <div className="featured-videos__content-trailers">
              <Title title="Últimos Lançamentos">
                <Tabs options={options} goTo={handleTabValue} defaulValue={{ value: 1, label: "Cinema" }} />
              </Title>
              {featured && featured.length > 0 && (
                <div className="play-area">
                  <ListView
                    data={featured}
                    handleClick={handleClickTrailer}
                    width={180}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trailers;
