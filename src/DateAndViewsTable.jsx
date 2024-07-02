import { React, useState, useEffect } from "react";

const data = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];

const DateAndViewsTable = () => {
  const [filteredData, setFilteredData] = useState(data);

  const handleSortByDate = () => {
    let newData = [...filteredData].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setFilteredData(newData);
  };

  const handleSortByViews = () => {
    let newData = [...filteredData].sort((a, b) => b.views - a.views);
    setFilteredData(newData);
  };

  return (
    <>
      <div style={{ "text-align": "left" }}>
        <h1>Date and Views Table</h1>
        <button type="text" onClick={handleSortByDate}>
          Sort by Date
        </button>
        <button type="text" onClick={handleSortByViews}>
          Sort by Views
        </button>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Views</th>
              <th>Article</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => {
              return (
                <>
                  <tr key={item.article}>
                    <td>{item.date}</td>
                    <td>{item.views}</td>
                    <td>{item.article}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DateAndViewsTable;
