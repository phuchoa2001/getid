import React, { useState } from 'react';
import Styles from './index.module.css';
import { useHistory } from "react-router-dom";
import { AddDB } from '../../config/firebase';
function Add(props) {
    let history = useHistory();
    const [account, setAccount] = useState({
        iduser: '',
        link: ''
    });
    const [loading, setLoading] = useState(false);
    async function handleAdd() {
        setLoading(true)
        const load = await AddDB(account);
        if (load) {
            setLoading(false)
            history.push("/");
        }
    }
    if (loading) {
        return <h3>đang thêm vào dữ liệu...</h3>
    }
    function handleChange(e) {
        const { name, value } = e.target;
        setAccount(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    return (
        <div className={Styles.post}>
            <div className={Styles.form}>
                <div className={Styles.forminput}>
                    <label htmlFor="exampleInputEmail1" className={Styles.label}>tài khoản :</label>
                    <input
                        type="text"
                        className={Styles.input}
                        value={account.iduser}
                        name="iduser"
                        onChange={handleChange} />
                </div>
                <div className={Styles.forminput}>
                    <label htmlFor="exampleInputEmail1" className={Styles.label}>link cần chuyển</label>
                    <input
                        type="text"
                        className={Styles.input}
                        value={account.link}
                        name="link"
                        onChange={handleChange} />
                </div>
                <button onClick={handleAdd}>Thêm tài khoản</button>
            </div>
        </div>
    );
}

export default Add;