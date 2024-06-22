import React, { useEffect, useState } from "react";
import { ListViewLarge } from "../../components/ListView";
import "./styles.scss";
import { loadDataPlayingNow } from "../../utils/hooks/getData";
import { Tabs } from "../../components/Tabs";
import Title from "../../components/Title";

const options = [
  { value: 6, label: "Filmes" },
  { value: 7, label: "Séries" },
];

const Popular = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [popular, setPopular] = useState<[] | any>([]);

  const loadDataByDayOrWeek = async (_choicePopular = "movie/popular") => {
    const response = await loadDataPlayingNow(_choicePopular);
    setPopular(response);
    return response;
  };

  ///load inicial
  useEffect(() => {
    loadDataByDayOrWeek("movie/popular");
  }, []);

  const handleTabValue = async (_value: any) => {
    if (_value.value === 6) {
      loadDataByDayOrWeek("movie/popular");
    } else {
      loadDataByDayOrWeek("tv/popular");
    }
  };

  return (
    <section className="popular__container ">
      <div className="popular__container-before-bg">
        <div className="container">
          <div className="popular-content">
            <Title title="Popular">
              <Tabs
                options={options}
                goTo={handleTabValue}
                defaulValue={{ value: 6, label: "Filmes" }}
              />
            </Title>
            <div className="popular-content__poster">
              <div className="popular-content__poster-container">
              <div className="popular-content__poster-content">
                    <div className="content-list">
                      {popular && popular.length > 0 && (
                        <div className="play-area">
                          <ListViewLarge
                            data={popular}
                            width={390}
                            className="popular-list-item"
                          />
                        </div>
                      )}
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
