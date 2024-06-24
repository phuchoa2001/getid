import React, { useState } from 'react';
import Styles from './add.module.css';
import { useHistory } from 'react-router-dom';
import { AddDB } from '../config/firebase';
import Loading from '../components/Loading';

function Add(props) {
  let history = useHistory();
  const [account, setAccount] = useState({
    iduser: '',
    link: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  async function handleAdd() {
    setIsLoading(true);
    const load = await AddDB(account);
    if (load) {
      setIsLoading(false);
      history.push('/');
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setAccount((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  return (
    <div className={Styles.post}>
      <div className={Styles.form}>
        <div className={Styles.forminput}>
          <label htmlFor="exampleInputEmail1" className={Styles.label}>
            tài khoản :
          </label>
          <input
            type="text"
            className={Styles.input}
            value={account.iduser}
            name="iduser"
            onChange={handleChange}
          />
        </div>
        <div className={Styles.forminput}>
          <label htmlFor="exampleInputEmail1" className={Styles.label}>
            đường dẫn cần chuyển
          </label>
          <input
            type="text"
            className={Styles.input}
            value={account.link}
            name="link"
            onChange={handleChange}
          />
        </div>
        <button onClick={handleAdd}>Thêm tài khoản</button>
      </div>
    </div>
  );
}

export default Add;
