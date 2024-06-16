import React, { useEffect, useState } from "react";
import { ListViewLarge } from "../../components/ListView";
import "./styles.scss";
import { loadDataParam } from "../../utils/hooks/getData";
import { Tabs } from "../../components/Tabs";
import Title from "../../components/Title";

const options = [
  { value: 4, label: "Hoje" },
  { value: 5, label: "Esta Semana" },
];

const Trending = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [trending, setTrending] = useState<[] | any>([]);

  const loadDataByDayOrWeek = async (_choiceTrending = "week") => {
    const response = await loadDataParam(_choiceTrending);
    setTrending(response);
    return response;
  };

  ///load inicial
  useEffect(() => {
    loadDataByDayOrWeek("day");
  }, []);

  const handleTabValue = async (_value: any) => {
    if (_value.value === 4) {
      loadDataByDayOrWeek("day");
    } else {
      loadDataByDayOrWeek("week");
    }
  };

  return (
    <section className="trending__container">
      <div className="trending__container-before-bg">
        <div className="container">
          <div className="trending-content">
            <Title title="Tendências">
              <Tabs options={options} goTo={handleTabValue} defaulValue={{ value: 4, label: "Hoje" }} />
            </Title>
            <div className="trending-content__poster">
              <div className="trending-content__poster-container">
                <div className="container">
                  <div className="trending-content__poster-content">
                    <div className="content-list">
                      {trending && trending.length > 0 && (
                        <div className="play-area">
                          <ListViewLarge
                            data={trending}
                            width={390}
                            className="Trending-list-item"
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
      </div>
    </section>
  );
};

export default Trending;
