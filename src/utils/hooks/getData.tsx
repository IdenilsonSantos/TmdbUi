import Send from "../fetch";

export const loadDataVideos = async (movieId: string) => {
    const res = await Send.get(`/movie/${movieId}/videos`);
    return res;
  };
  
export const loadDataParam = async (day = "day") => {
    const trending = await Send.get(`trending/movie/${day}?language=pt-BR'`);
    const response = await Promise.all(
      trending.results?.map(async (item: { id: string }) => {
        const videos = await loadDataVideos(item.id);
        const videosWithMovie = {
          movie: item,
          videos,
        };
  
        return videosWithMovie;
      })
    );
  
    return response
  }
  
export const loadDataPlayingNow = async (extraQuery = "movie/now_playing") => {
    const trending = await Send.get(`${extraQuery}?language=pt-BR'`);
    const response = await Promise.all(
      trending.results?.map(async (item: { id: string }) => {
        const videos = await loadDataVideos(item.id);
        const videosWithMovie = {
          movie: item,
          videos,
        };
  
        return videosWithMovie;
      })
    );
  
    return response
  }