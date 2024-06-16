import { FixedSizeList as List } from "react-window";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import "./styles.scss";

type Movie = {
  title: string;
  name: string;
  poster_path: string;
  popularity: number;
};

type Video = {
  key: string;
  name: string;
};

type MovieData = {
  movie: Movie;
  videos: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    results: any[];
  };
};

type PropsList = {
  index: number;
  style: React.CSSProperties;
};

type ListViewProps = {
  data: MovieData[];
  width?: number;
  height?: number;
  className?: string;
  handleClick?: (e: React.MouseEvent<HTMLDivElement>, movie: Movie & Video) => void;
};

const getPopularityProps = (popularity: number) => {
  const pop = +(popularity / 100).toFixed(0);
  let color = "#be1623"; // default color for <= 10

  if (pop > 10 && pop <= 20) color = "#E7342D";
  else if (pop > 20 && pop <= 30) color = "#EA4D1A";
  else if (pop > 30 && pop <= 40) color = "#F29102";
  else if (pop > 40 && pop <= 50) color = "#FAB033";
  else if (pop > 50 && pop <= 60) color = "#FDEA11";
  else if (pop > 60 && pop <= 70) color = "#DFDA02";
  else if (pop > 70 && pop <= 80) color = "#94C120";
  else if (pop > 80 && pop <= 90) color = "#3BAA34";
  else if (pop > 90 && pop <= 100) color = "#028E38";

  return {
    percent: pop,
    colorSlice: "#fff",
    colorCircle: "#fff",
    fontColor: "#000",
    fontSize: "1.6rem",
    fontWeight: 400,
    size: 40,
    stroke: 10,
    strokeBottom: 5,
    speed: 60,
    cut: 0,
    rotation: -90,
    opacity: 10,
    fill: "#FFF",
    unit: "%",
    textPosition: "0.35em",
    animationOff: true,
    inverse: false,
    round: false,
    number: true,
    linearGradient: [color, "brown"],
  };
};

const Column = ({ index, style, data, handleClick, itemSize }: PropsList & { data: MovieData[]; handleClick?: (e: React.MouseEvent<HTMLDivElement>, movie: Movie & Video) => void; itemSize: number }) => {
  const row = data[index];

  return (
    <div style={style}>
      <div
        className="list-view__container"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${row.movie.poster_path})`,
          width: `${itemSize - 10}px`,
        }}
      >
        <div
          className="play-content"
          onClick={(e) =>
            row?.videos?.results?.length > 0
              ? handleClick?.(e, { ...row.movie, ...row?.videos?.results[0] })
              : handleClick?.(e, {
                  ...row.movie,
                  ...row?.videos?.results,
                  key: "",
                })
          }
          style={{
            width: itemSize,
          }}
        >
          <div className="play-content-button-info">
            <div className="movie-video-info">
              <span className="movie-title">
                {row.movie.title || row.movie.name}
              </span>
              <span className="video-title">
                {row.videos?.results?.length > 0 &&
                  row.videos?.results[0]?.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ListView = ({ data, handleClick, height, width, className }: ListViewProps) => {
  const itemSize: number = width || 210;
  const heightSize: number = height || 250;

  console.log("DT", data)
  return (
    <List
      height={heightSize}
      itemCount={data.length}
      itemSize={itemSize}
      layout="horizontal"
      width={3000}
    >
      {({ index, style }) => (
        <Column
          index={index}
          style={style}
          data={data}
          handleClick={handleClick}
          itemSize={itemSize}
        />
      )}
    </List>
  );
};

export const ListViewLarge = ({ data, handleClick, height, width, className }: ListViewProps) => {
  const itemSize: number = width || 210;
  const heightSize: number = height || 250;

  return (
    <List
      height={heightSize}
      itemCount={data.length}
      itemSize={itemSize}
      layout="horizontal"
      width={3000}
    >
      {({ index, style }) => {
        const row = data[index];
        const props = getPopularityProps(row.movie.popularity);

        return (
          <div style={style}>
            <div
              className="list-view-large__container"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${row.movie.poster_path})`,
                width: `${itemSize - 10}px`,
              }}
            >
              <div
                className="movie-popularity"
                onClick={(e) =>
                  handleClick?.(e, { ...row.movie, ...row?.videos?.results[0] })
                }
                style={{
                  width: itemSize,
                }}
              >
                <div className="movie-popularity-button-info">
                  <div className="movie-video-info">
                    <span className="movie-title">{row.movie.title || row.movie.name}</span>
                    <span className="video-title">
                      {row.videos?.results?.length > 0 && row.videos?.results[0]?.name}
                    </span>
                  </div>
                  <div className="movie-video-info-circle-bar">
                    <div className="circle-bar">
                      <CircularProgressBar {...props} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </List>
  );
};