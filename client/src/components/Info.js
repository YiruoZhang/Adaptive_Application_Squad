import React from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from '../assets/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { useLocation } from "react-router-dom";
import Select from 'react-select';

import styles from '../styles/Username.module.css';

const roleOptions = [
  { value: 'TOP', label: 'Top laner' },
  { value: 'JUNGLE', label: 'Jungle' },
  { value: 'MID', label: 'Mid laner' },
  { value: 'ADC', label: 'Adc' },
  { value: 'SUPPORT', label: 'Support' },
];

const timeOptions = [
  { value: 0, label: '00' },
  { value: 1, label: '01' },
  { value: 2, label: '02' },
  { value: 3, label: '03' },
  { value: 4, label: '04' },
  { value: 5, label: '05' },
  { value: 6, label: '06' },
  { value: 7, label: '07' },
  { value: 8, label: '08' },
  { value: 9, label: '09' },
  { value: 10, label: '10' },
  { value: 11, label: '11' },
  { value: 12, label: '12' },
  { value: 13, label: '13' },
  { value: 14, label: '14' },
  { value: 15, label: '15' },
  { value: 16, label: '16' },
  { value: 17, label: '17' },
  { value: 18, label: '18' },
  { value: 19, label: '19' },
  { value: 20, label: '20' },
  { value: 21, label: '21' },
  { value: 22, label: '22' },
  { value: 23, label: '23' },
];


export default function Info() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { userInfo } = state;

  const formik = useFormik({
    initialValues: {
      scheduleTimeStart: '',
      scheduleTimeEnd: '',
      role: '',
    },
    onSubmit: async (values) => {
      userInfo.set('timeStart', values.scheduleTimeStart);
      userInfo.set('endTime', values.scheduleTimeEnd);
      userInfo.set('role', values.role);

      console.log("Data from info:", userInfo);
      navigate('/questionnaire', { state: { userInfo } });
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">boh</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore More by connecting with us.
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img
                src={avatar}
                className={styles.profile_img}
                alt="avatar"
              />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <div className="flex flex-col items-center">
                <label htmlFor="scheduleTimeStart" className="text-lg font-medium text-gray-700 mb-2">Schedule Time Start:</label>
            <Select
              className={styles.select}
              options={timeOptions}
              value={formik.values.scheduleTimeStart}
              onChange={(option) => formik.setFieldValue('scheduleTimeStart', option.value)}
              placeholder={!formik.values.scheduleTimeStart ? "Select time" : formik.values.scheduleTimeStart}
              />
            </div>

          <div className="flex flex-col items-center">
            <label htmlFor="scheduleTimeEnd" className="text-lg font-medium text-gray-700 mb-2">Schedule Time End:</label>
            <Select
              className={styles.select}
              options={timeOptions}
              value={formik.values.scheduleTimeEnd}
              onChange={(option) => formik.setFieldValue('scheduleTimeEnd', option.value)}
              placeholder={!formik.values.scheduleTimeEnd ? "Select time" : formik.values.scheduleTimeEnd}
              />
          </div>

          <div className="flex flex-col items-center">
            <label htmlFor="role" className="text-lg font-medium text-gray-700 mb-2">Role:</label>
            <Select
              className={styles.select}
              options={roleOptions}
              value={formik.values.role}
              onChange={(option) => formik.setFieldValue('role', option.value)}
              placeholder={!formik.values.role ? "Select role" : formik.values.role}
            />
          </div>

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