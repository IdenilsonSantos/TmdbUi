import React, { useEffect, useState } from "react";
import { ListViewLarge } from "../../components/ListView";
import "./styles.scss";
import { loadDataParam } from "../../utils/hooks/getData";
import { Tabs } from "../../components/Tabs";

const options = [
  { value: 1, label: "Hoje" },
  { value: 2, label: "Esta Semana" },
];

const Trending = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [trending, setTrending] = useState<[] | any>([]);

  const loadDataByDayOrWeek = async (_choiceTrending = "week") => {
    const response = await loadDataParam(_choiceTrending)
    setTrending(response);
    return response;
  }

  ///load inicial
  useEffect(() => {
    loadDataByDayOrWeek("day")
  }, []);

  const handleTabValue = async (_value: any) => {

    if(_value.value === 1) {
      loadDataByDayOrWeek("day")
    }
    else {
      loadDataByDayOrWeek("week")
    }
    
  }

  return (
    <section className="trending">
      <div className="tend">
        <div className="container">
          <div className="trending-content">
            <div className="title-tabs">
              <h4>Tendências</h4>
              <Tabs options={options} goTo={handleTabValue} />
              <section className="Trending-poster">
                <div className="featured-videos__container">
                  <div className="container">
                    <div className="featured-videos__content">
                      <div className="featured-videos__content-Trending">
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
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
