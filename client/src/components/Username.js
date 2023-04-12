import React from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from '../assets/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';

import styles from '../styles/Username.module.css';

export default function Username() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      accountName: '',
    },
    onSubmit: async (values) => {
      const userInfo = new Map();
      userInfo.set('name', values.name);
      userInfo.set('email', values.email);
      userInfo.set('account', values.accountName);

      console.log("Data from homepage:", userInfo);
      navigate('/info', { state: { userInfo } });
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore More by connecting with us.
            </span>
          </div>

          <div className="profile flex justify-center py-4">
              <img
                src={avatar}
                className={styles.profile_img}
                alt="avatar"
              />
            </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                className={styles.textbox}
                type="text"
                name="name"
                placeholder="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <input
                className={styles.textbox}
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <input
                className={styles.textbox}
                type="text"
                name="accountName"
                placeholder="Account Name"
                value={formik.values.accountName}
                onChange={formik.handleChange}
              />
              <button className={styles.btn} type="submit">
                Let's Go!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
