import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import style from './contactUs.module.css';

import logo from '../../assets/logo.png';
import { ReactComponent as Mail } from '../../assets/icons/mail-new.svg';
import emailValidation from '../../utils/validation';
import getAlert from '../../utils/getAlert';


const cordiData = [
  {
    name: `Vishesh Khandelwal`,
    tel: `+91-7509998118`,
    mail: `visesh@healthhub.org`,
  },
  {
    name: `Prem Kumar`,
    tel: `+91-7004727387`,
    mail: `prem@healthhub.org`,
  },
  {
    name: `Ojaswa Sharma`,
    tel: `+91-9131102279`,
    mail: `ojaswa@healthhub.org`,
  },
  {
    name: `Rohit Kunji`,
    tel: `+91-7470358637`,
    mail: `rohit@healthhub.org`,
  },
];

const Concern = () => {
  const [inputs, changeInputs] = useState({ name: '', email: '', subject: '', message: '' });
  const [datae, setData] = useState({ data: null, loading: false, error: null });

  const { data, loading, error } = datae;

  const handleInput = event => {
    const { value, name } = event.target;
    changeInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const toast = getAlert();
    if (inputs.email && inputs.name && inputs.message) {
      if (emailValidation(inputs.email)) {
        setData({
          ...datae,
          loading: true,
        })
        setTimeout(() => {
          setData({
            ...datae,
            loading: false,
            data: {
              contactUs: {
                message: "We got your message"
              }
            }
          })
        }, 1200)
      } else {
        toast.fire({
          icon: 'error',
          title: 'Please enter valid email',
        });
      }
    } else {
      changeInputs({
        name: inputs.name ? inputs.name : undefined,
        email: inputs.email ? inputs.email : undefined,
        subject: inputs.subject ? inputs.subject : undefined,
        message: inputs.message ? inputs.message : undefined,
      });
      toast.fire({
        icon: 'error',
        title: 'Name, email or message cannot be empty',
      });
    }
  };

  useEffect(() => {
    if (data) {
      const toast = getAlert();
      toast.fire({
        icon: 'success',
        title: data.contactUs.message,
      });
      changeInputs({ name: '', email: '', subject: '', message: '' });
    }
  }, [data]);

  useEffect(() => {
    if (error && error.graphQLErrors.length > 0) {
      const toast = getAlert();
      toast.fire({
        icon: 'error',
        title: error.graphQLErrors[0].message,
      });
    }
  }, [error]);

  return (
    <>
      <div className={style.contact_parent_container}>
        <div className={style.contact_container}>
          <div className={style.contact_left} style={{marginLeft: "120px", fontWeight: "bold"}} >
            If you think a child/student needs help, kindly enter his details and we'll do
            everything in our power to help him. Thanks for caring!
          </div>
          <div className={style.contact_divider} />
          <div className={style.contact_right}>
            <form className={style.form}>
              <h3 className={style.contact_heading}>Reach Us :</h3>
              <input
                type="text"
                className={
                  inputs.name === undefined
                    ? `${style.single_line_input} ${style.inValid}`
                    : `${style.single_line_input}`
                }
                placeholder="Name"
                name="name"
                value={inputs.name}
                onChange={handleInput}
                required
              />
              <input
                type="email"
                className={
                  // eslint-disable-next-line no-nested-ternary
                  inputs.email
                    ? emailValidation(inputs.email)
                      ? `${style.single_line_input}`
                      : `${style.single_line_input} ${style.inValid}`
                    : inputs.email === undefined
                    ? `${style.single_line_input} ${style.inValid}`
                    : `${style.single_line_input}`
                }
                placeholder="E-mail Address"
                name="email"
                value={inputs.email}
                onChange={handleInput}
                required
              />
              <input
                type="text"
                className={style.single_line_input}
                placeholder="Subject"
                name="subject"
                value={inputs.subject}
                onChange={handleInput}
              />
              <textarea
                className={
                  inputs.message === undefined
                    ? `${style.multiple_line_input} ${style.inValid}`
                    : `${style.multiple_line_input}`
                }
                placeholder="Message"
                name="message"
                value={inputs.message}
                onChange={handleInput}
                required
              />
              <button
                type="submit"
                onClick={handleSubmit}
                className={style.form_submit}
                disabled={loading}
              >
                {loading ? `O` : `SUBMIT`}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Concern;
