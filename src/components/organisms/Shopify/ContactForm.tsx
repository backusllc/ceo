import React, { useState } from 'react'
import { formWrapper, cautionText, label, formDiv, input, abbr, radioWrap, radio, radioLabel, textarea, submitDiv, checkWrap, check, checkLabel, checkLink, submit } from './ContactForm.css'
import { navigate } from 'gatsby';

import Title from '../WordPress/Title';

const ContactForm = React.memo(() => {
  const [value, setValue] = React.useState({})
  const [radioStatus, setRadioStatus] = useState('active');
  const [checkboxStatus, setCheckboxStatus] = useState(false);

  const [setSubmitted] = useState(false);

  function handleChange(e: any) {
    value[e.target.id] = e.target.value
    setValue({ ...value })
  }

  function handleRadioChange(e: any) {
    setRadioStatus(e.target.value);
  }

  function handleCheckboxChange(e: any) {
    setCheckboxStatus(!checkboxStatus);
  }

  async function onSubmit(e: any) {
    e.preventDefault()
    const response = await window
      .fetch('/api/contact', {
        method: 'POST',
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(value),
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("送信が成功しました");
          navigate('/thanks', { state: { id: 1 } });
        }
      });
  }

  return (
    <>

      <div className="inner" style={{ marginTop: '10rem' }}>
        <Title Tag='h1' title='CONTACT' subTitle='お問い合わせ' isPageTitle />
        <form onSubmit={onSubmit} method="POST" action="/api/contact" className={formWrapper}>
          <div className={cautionText}>
            メールでのお問い合わせは、下記フォームに必要事項をご記入のうえ、<br className='pc' />
            メッセージを送信してください。
          </div>
          <div className={formDiv}>
            <label className={label}>
              問い合わせ種別
            </label>
            <div className={radioWrap}>
              <label htmlFor='active' className={radioLabel} ><input type="radio" value="active" name="active" id="active" className={radio} checked={radioStatus == "active"} onChange={handleRadioChange} />活動について</label>
              <label htmlFor='event' className={radioLabel} ><input type="radio" value="event" name="event" id="event" className={radio} checked={radioStatus == "event"} onChange={handleRadioChange} />イベントについて</label>
              <label htmlFor='lecture' className={radioLabel} ><input type="radio" value="lecture" name="lecture" id="lecture" className={radio} checked={radioStatus == "lecture"} onChange={handleRadioChange} />講演</label>
              <label htmlFor='other' className={radioLabel} ><input type="radio" value="other" name="other" id="other" className={radio} checked={radioStatus == "other"} onChange={handleRadioChange} />その他</label>
            </div>
          </div>
          <div className={formDiv}>
            <label className={label}>
              会社名
            </label>
            <input
              name="company"
              id="company"
              value={value['company'] || ``}
              placeholder="株式会社サンプル"
              onChange={handleChange}
              className={input}
            />
          </div>
          <div className={formDiv}>
            <label className={label}>
              お名前<span className={abbr} title="required">*</span>
            </label>
            <input
              name="name"
              id="name"
              value={value['name'] || ``}
              placeholder="山田 太郎"
              onChange={handleChange}
              className={input}
              required
            />
          </div>
          <div className={formDiv}>
            <label className={label}>
              ふりがな<span className={abbr} title="required">*</span>
            </label>
            <input
              name="ruby"
              id="ruby"
              value={value['ruby'] || ``}
              placeholder="やまだ　たろう"
              onChange={handleChange}
              className={input}
              required
            />
          </div>
          <div className={formDiv}>
            <label className={label}>
              メールアドレス<span className={abbr} title="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              autoComplete='email'
              id="email"
              placeholder="sample@jceoa.org"
              value={value['email'] || ``}
              className={input}
              onChange={handleChange}
              required
            />
          </div>
          <div className={formDiv}>
            <label className={label}>
              お電話番号
            </label>
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="090-1234-5678"
              value={value['tel'] || ``}
              className={input}
              onChange={handleChange} />
          </div>
          <div className={formDiv}>
            <label className={label}>
              お問い合わせ内容<span className={abbr} title="required">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="こちらにご記入ください"
              value={value['message'] || ``}
              className={textarea}
              onChange={handleChange}
              required
            />
          </div>
          <div className={checkWrap}>
            <label htmlFor='agreement' className={checkLabel} >
              <input type="checkbox" value="agreement" name="agreement" id="agreement" className={check} checked={checkboxStatus} onChange={handleCheckboxChange} /><a href="/policy" className={checkLink}>個人情報の取り扱いについて</a>同意する
            </label>
          </div>
          <div className={submitDiv}>
            <input className={submit} disabled={!checkboxStatus} type="submit" value="上記の内容で送信する" />
          </div>
        </form>
      </div>
    </>

  );
});

export default ContactForm;
