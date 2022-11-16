import React, { useEffect, useState } from "react";
import Abs_component from "./abs_component";
import Pagination from "https://cdn.skypack.dev/rc-pagination@3.1.15";
import "./style.css";
import t1 from "./assets/t1.png";
import t2 from "./assets/t2.png";
import t3 from "./assets/t3.png";
import t4 from "./assets/t4.png";
import total from "./assets/total.jpg";
import awais from "./assets/awais.jpg";
import harry from "./assets/harry.jpg";
import bro from "./assets/bro.jpg";
import brian from "./assets/brian.jpg";
import dom from "./assets/dom.jpg";
import hermoine from "./assets/hermoine.jpg";
import jack from "./assets/jack.jpg";
import jason from "./assets/jason.jpg";
import jetli from "./assets/jetli.jpg";
import roman from "./assets/roman.jpg";
import silvestor from "./assets/silvestor.jpg";
import bobby from "./assets/bobby.jpg";
import mia from "./assets/mia.jpg";
import ron from "./assets/ron.jpg";
import hulk from "./assets/hulk.jpg";
import iron from "./assets/ironman.jpg";
import thor from "./assets/thor.jpg";
import groot from "./assets/groot.png";
const Popup = () => {
  const [value, setValue] = useState("");

  const [data, setData] = useState([
    {
      maleImage: awais,
      name: "Muhammad Awais",
      age: "26",
      fatherName: "Munir Akhtar",
      Qualification: "Master in Computer Science",
      profession: "Software Engineer",
      status: "Active",
    },
    {
      maleImage: t2,
      name: "Muhammad Umer",
      age: "29",
      fatherName: "Munir Akhtar",
      Qualification: "B.A",
      profession: "Manager",
      status: "Inactive",
    },
    {
      maleImage: t3,
      name: "Mariyam",
      age: "24",
      fatherName: "Ahmad",
      Qualification: "B.A",
      profession: "Student",
      status: "Active",
    },
    {
      maleImage: total,
      name: "Ghulam Rasool",
      age: "26",
      fatherName: "Muhammad Yousaf",
      Qualification: "B.Sc(Computer Science)",
      profession: "Developer",
      status: "Inactive",
    },
    {
      maleImage: total,
      name: "Ghulam Rasool",
      age: "26",
      fatherName: "Muhammad Yousaf",
      Qualification: "B.Sc(Computer Science)",
      profession: "Developer",
      status: "Inactive",
    },
    {
      maleImage: total,
      name: "Ghulam Rasool",
      age: "26",
      fatherName: "Muhammad Yousaf",
      Qualification: "B.Sc(Computer Science)",
      profession: "Developer",
      status: "Inactive",
    },
    {
      maleImage: total,
      name: "Ghulam Rasool",
      age: "26",
      fatherName: "Muhammad Yousaf",
      Qualification: "B.Sc(Computer Science)",
      profession: "Developer",
      status: "Inactive",
    },
    {
      maleImage: harry,
      name: "Harry Potter",
      age: "26",
      fatherName: "Hagrid",
      Qualification: "Wizard",
      profession: "Wizard",
      status: "Inactive",
    },
    {
      maleImage: hermoine,
      name: "Harmoine",
      age: "21",
      fatherName: "Granger",
      Qualification: "Masters",
      profession: "Wizard",
      status: "Active",
    },
    {
      maleImage: ron,
      name: "Ron",
      age: "22",
      fatherName: "Weasley",
      Qualification: "Wizard",
      profession: "Wizard",
      status: "Aactive",
    },
    {
      maleImage: bobby,
      name: "Bobby lashley",
      age: "26",
      fatherName: "Franklin Roberto Lashley",
      Qualification: "LLB",
      profession: "Wrestler",
      status: "Active",
    },
    {
      maleImage: roman,
      name: "Roman Reigns",
      age: "31",
      fatherName: "Sika Anoa'i",
      Qualification: "B.A",
      profession: "Wrestler",
      status: "Inactive",
    },
    {
      maleImage: bro,
      name: "Brown Strowman",
      age: "26",
      fatherName: "Rick Scherr",
      Qualification: "M.A",
      profession: "Wrestler",
      status: "Inactive",
    },
    {
      maleImage: jack,
      name: "jack hughman",
      age: "35",
      fatherName: "Christopher John Jackman",
      Qualification: "M.A ",
      profession: "Actor",
      status: "Active",
    },
    {
      maleImage: jason,
      name: "Jason Statham",
      age: "32",
      fatherName: "Barry Statham",
      Qualification: "Acting",
      profession: "Actor",
      status: "Inactive",
    },
    {
      maleImage: jetli,
      name: "Jet Li",
      age: "26",
      fatherName: "Li Qingquan",
      Qualification: " Film Degree",
      profession: "Action Actor",
      status: "Active",
    },
    {
      maleImage: silvestor,
      name: "Sylvester Stallone",
      age: "50",
      fatherName: "Frank Stallone Sr.",
      Qualification: "Film Degree",
      profession: "Actor",
      status: "Inactive",
    },
    {
      maleImage: dom,
      name: "Dominic Toretto",
      age: "42",
      fatherName: "Jack Toretto",
      Qualification: "Film Degree",
      profession: "Actor",
      status: "Active",
    },
    {
      maleImage: brian,
      name: "Brian O Conner",
      age: "38",
      fatherName: "Paul Walker",
      Qualification: "Film Degree",
      profession: "Actor",
      status: "Inactive",
    },
    {
      maleImage: mia,
      name: "Mia Toretto",
      age: "40",
      fatherName: "Toretto",
      Qualification: "Wizard",
      profession: "Actress",
      status: "Inactive",
    },
    {
      maleImage: hulk,
      name: "Hulk",
      age: "38",
      fatherName: "Brian Banner",
      Qualification: "monster",
      profession: "Actor",
      status: "Active",
    },
    {
      maleImage: thor,
      name: "Thor",
      age: "38",
      fatherName: "Odin",
      Qualification: "Bijli",
      profession: "Actor",
      status: "Active",
    },
    {
      maleImage: groot,
      name: "Groot",
      age: "42",
      fatherName: "Howard Stark",
      Qualification: "Enginerring",
      profession: "Actor",
      status: "Active",
    },

    {
      maleImage: iron,
      name: "Iron",
      age: "42",
      fatherName: "Howard Stark",
      Qualification: "Enginerring",
      profession: "Actor",
      status: "Active",
    },
    {
      maleImage: iron,
      name: "Iron",
      age: "42",
      fatherName: "Howard Stark",
      Qualification: "Enginerring",
      profession: "Actor",
      status: "Active",
    },
    {
      maleImage: iron,
      name: "Iron",
      age: "42",
      fatherName: "Howard Stark",
      Qualification: "Enginerring",
      profession: "Actor",
      status: "Active",
    },

    {
      maleImage: iron,
      name: "Iron",
      age: "42",
      fatherName: "Howard Stark",
      Qualification: "Enginerring",
      profession: "Actor",
      status: "Active",
    },
    {
      maleImage: iron,
      name: "Iron",
      age: "42",
      fatherName: "Howard Stark",
      Qualification: "Enginerring",
      profession: "Actor",
      status: "Active",
    },
    {
      maleImage: iron,
      name: "Iron",
      age: "42",
      fatherName: "Howard Stark",
      Qualification: "Enginerring",
      profession: "Actor",
      status: "Active",
    },
    {
      maleImage: iron,
      name: "Iron",
      age: "42",
      fatherName: "Howard Stark",
      Qualification: "Enginerring",
      profession: "Actor",
      status: "Active",
    },
    {
      maleImage: iron,
      name: "Iron",
      age: "42",
      fatherName: "Howard Stark",
      Qualification: "Enginerring",
      profession: "Actor",
      status: "Active",
    },
    {
      maleImage: iron,
      name: "Iron",
      age: "42",
      fatherName: "Howard Stark",
      Qualification: "Enginerring",
      profession: "Actor",
      status: "Active",
    },
    {
      maleImage: iron,
      name: "Iron",
      age: "42",
      fatherName: "Howard Stark",
      Qualification: "Enginerring",
      profession: "Actor",
      status: "Active",
    },
    {
      maleImage: iron,
      name: "Iron",
      age: "42",
      fatherName: "Howard Stark",
      Qualification: "Enginerring",
      profession: "Actor",
      status: "Active",
    },
    {
      maleImage: iron,
      name: "Iron",
      age: "42",
      fatherName: "Howard Stark",
      Qualification: "Enginerring",
      profession: "Actor",
      status: "Active",
    },
    {
      maleImage: iron,
      name: "Iron",
      age: "42",
      fatherName: "Howard Stark",
      Qualification: "Enginerring",
      profession: "Actor",
      status: "Active",
    },
    {
      maleImage: iron,
      name: "Iron",
      age: "42",
      fatherName: "Howard Stark",
      Qualification: "Enginerring",
      profession: "Actor",
      status: "Active",
    },
    {
      maleImage: iron,
      name: "Iron",
      age: "42",
      fatherName: "Howard Stark",
      Qualification: "Enginerring",
      profession: "Actor",
      status: "Active",
    },
  ]);
  const [newdata, setNewData] = useState([...data]);
  const [sortValue, setSortValue] = useState(data);
  const [current, setCurrent] = useState(1);
  const [perPage, setPerPage] = useState(6);
  const [size, setSize] = useState(perPage);
  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(newdata.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };
  const getData = (current, pageSize) => {
    return newdata.slice((current - 1) * pageSize, current * pageSize);
  };
  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize);
  };
  const PrevNextArrow = (current, type, ele) => {
    if (type == "prev") {
      return <button className="previous">prev</button>;
    }
    if (type == "next") {
      return <button className="next">Next</button>;
    }
    return ele;
  };
  const sortArr = ["name"];
  const _handleSearch = (e) => {
    e.preventDefault();
    setNewData([]);
    setCurrent(1);
    let arr = [...data];
    const newd = arr.filter((val) => {
      if (val.name.toLowerCase().includes(value.toLowerCase())) {
        return val;
      }
    });
    setNewData(newd);
    setValue("");
    console.log(newd, "value");
  };
  const _handleSorting = (e) => {
    const arr = [
      ...data.sort((a, b) => {
        return a.name.localeCompare(b.name);
      }),
    ];
    setNewData(arr);
  };
  const _handleReset = () => {
    let arr = [...data];
    setNewData(arr);
  };
  const _handleFilter = (value) => {
    let arr = [...data];
    let active = arr.filter((data) => data.status === "Active");

    setNewData(active);
    console.log(active, "final");
  };
  const _handleFilterIn = () => {
    setCurrent(1);
    let arr = [...data];
    let active = arr.filter((data) => data.status === "Inactive");

    setNewData(active);
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center my-4">
          <div className="col-lg-8">
            <h2 className="text-center heading">
              Search Reset Sorting with dummy JSON
            </h2>
          </div>
        </div>

        <div className="row mt-4 mb-4 justify-content-center align-items-center">
          <div className="col-lg-6">
            <input
              className="w-100 input_field from-control"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Please Search The Name"
            />
          </div>
          <div className="col-lg-3">
            <div className="d-flex ">
              <button
                type="submit"
                className="search mx-3"
                onClick={_handleSearch}
              >
                Search
              </button>
              <button className="reset" onClick={_handleReset}>
                Reset
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          {newdata.length === 0 ? (
            <div>
              <h1>No Data found</h1>
            </div>
          ) : (
            getData(current, size).map((e, idx) => (
              <div className="col-lg-4 " key={idx}>
                <Abs_component
                  maleImage={e.maleImage}
                  name={e.name}
                  age={e.age}
                  fatherName={e.fatherName}
                  Qualification={e.Qualification}
                  profession={e.profession}
                  status={e.status}
                />
              </div>
            ))
          )}
        </div>
        <div>
          <div>
            <Pagination
              showTotal={(total, range) =>
                `Showing ${range[0]}-${range[1]} of ${total}`
              }
              className="pagination-data"
              onChange={PaginationChange}
              total={newdata.length}
              current={current}
              pageSize={size}
              showSizeChanger={false}
              itemRender={PrevNextArrow}
              onShowSizeChange={PerPageChange}
            />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-8">
            <h5>Please Select the Sorting Option</h5>
            <select
              value={sortValue}
              onChange={(e) => _handleSorting(e.target.value)}
            >
              <option>Please Enter Sorting Option</option>
              {sortArr.map((e, idx) => (
                <option value={e} key={idx}>
                  {e}
                </option>
              ))}
            </select>
          </div>
          <div className="col-lg-4">
            <h2>Filter By Status</h2>
            <div>
              <button
                className="actives mx-3"
                onClick={() => _handleFilter("Active")}
              >
                Active
              </button>
              <button
                className="actives"
                onClick={() => _handleFilterIn("Inactive")}
              >
                InActive
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
