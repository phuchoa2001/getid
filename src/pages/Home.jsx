import React, { useState, useLayoutEffect } from 'react';
import Styles from './home.module.css';
import { useHistory } from "react-router-dom";
import { GetDB } from '../config/firebase';
import Loading from '../components/Loading';

function Home(props) {
  let history = useHistory();
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const resultList = list.filter((account) => account.iduser.indexOf(search) !== -1);
  function handleSearch(e) {
    const { value } = e.target;
    setSearch(value);
  }

  async function getList() {
    const DB = await GetDB();
    setList([...DB])
    setIsLoading(false);
  }
  function handleReset() {
    setIsLoading(true);
    getList();
  }
  useLayoutEffect(() => {
    getList();
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <div className={Styles.menu}>
        <div className={Styles.Boxbtn} >
          <button className={Styles.btn} onClick={() => history.push("/add")}>Thêm tài khoản</button>
          <button className={Styles.btn} onClick={() => history.push("/guide")}>Hưỡng dẫn</button>
          <button className={Styles.btn} onClick={handleReset}>làm mới</button>
        </div>
      </div>
      <div className={Styles.boxinput}>
        <input
          type="text"
          className={Styles.inputsearch}
          placeholder="tìm kiếm tài khoản"
          onChange={handleSearch}
          value={search}
        />
      </div>
      <div className={Styles.page}>
        <div className={Styles.heading}>
          <span className={Styles.headingspan}> Danh sách Tài khoản</span>
        </div>
        <div className={Styles.listaccount}>
          {resultList.map((account, index) =>
            <div className={Styles.account} key={index}>
              <a href={account.link} className={Styles.href}>{account.iduser}</a>
            </div>
          )}
        </div>
      </div>
    </div >
  );
}

export default Home;