import React from 'react'
import { Link } from 'gatsby'
import { pageContainer, titleContainer, titleClass, subTitleClass, contentContainer, content, mailContainer, mail, buttonContainer } from './Thanks.css'
import { navigate } from 'gatsby';

interface Props {
  navigateFrom: 'contactForm' | 'home',
}

const Thanks = React.memo(({ navigateFrom }: Props) => {

  return (
    <>
      <div className={`inner ${pageContainer}`}>
        <div className={titleContainer}>
          <div className={subTitleClass}>Thank You for contacting us!</div>
          <div className={titleClass}>お問い合わせ<br className="sp" />ありがとうございます</div>
        </div>
        <div className={contentContainer}>
          <div className={content}>この度はお問合せを頂き、誠にありがとうございます。<br />
            システムによる自動返信にて、受付完了メールを送信しております。<br />
            受付完了メールが届かない場合は、お手数ですが再度お問合せいただくか、直接メールにてご連絡ください。<br />
            お問合せの内容に基づき、弊社担当者よりご連絡させて頂きます。
          </div>
        </div>
        <div className={mailContainer}>
          <div className={mail}>Mail :  info@jceoa.org</div>
        </div>
        <Link to="/" className={buttonContainer}>TOPへ戻る</Link>
      </div>
    </>

  );
});

export default Thanks;
