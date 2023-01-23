import React from 'react'
import { policyWrap, textWrap, title, text, ol, li, revisionDate } from './PrivacyPolicy.css'

import Title from '../WordPress/Title';

const PrivacyPolicy = React.memo(() => {

  return (
    <>

      <div className="inner" style={{ marginTop: '10rem' }}>
        <Title Tag='h1' title='PRIVACY POLICY' subTitle='プライバシーポリシー' isPageTitle />
        <div >
          <div className={policyWrap}>
            <p className={text}>当社は、当社にご応募いただいた方（以下「応募者」といいます）の個人情報保護に関するプライバシーポリシー<br />
              （以下「本ポリシー」といいます）を制定し、以下の通り取り扱います</p>
          </div>
          <div className={textWrap}>
            <h2 className={title}>1. 個人情報</h2>
            <p className={text}>本ポリシーにおける「個人情報」とは、当社が、当社の採用活動により直接または間接的に取得した、応募者個人を識別できる以下の情報をいい、その取得媒体を問わないものとします。<br />
              1）職務経歴書その他エントリーシート記載事項（氏名、年齢、性別、生年月日、電話番号、メールアドレス等）<br />
              2）採用活動のために行なった当社と応募者との間の通信内容<br />
              3）その他、他の情報と容易に照合することができ、それにより応募者個人が識別できるもの</p>
          </div>
          <div className={textWrap}>
            <h2 className={title}>2. 個人情報の利用目的</h2>
            <p className={text}>当社は、取得した個人情報を次の目的で利用します。<br />
              1）当社における採用選考活動のため<br />
              2）各種説明会のご案内及び申込受付のため<br />
              3）当社に関する各種情報等のご案内のため<br />
              4）当社従業員募集内容のご案内のため<br />
              5）採用選考申込受付のため<br />
              6）採用選考を実施するため<br />
              7）採用選考結果をご本人に通知するため<br />
              8）採用内定通知を行うため<br />
              9）配属の決定に係る通知を行うため<br />
              10）将来の採用可否の再検討のため<br />
              11）当社内において利用する各種統計資料・媒体類の作成のため<br />
              12）応募者の皆様と当社との間で雇用契約を締結する場合、当該雇用契約締結に関する手続きを行うため<br />
              13）応募者が当社に入社された場合、応募者の雇用管理のため<br />
              14）候補者の興味・関心等に合わせたサービスの提供又は広告配信</p>
          </div>
          <div className={textWrap}>
            <h2 className={title}>3.情報の第三者提供</h2>
            <p className={text}>当社は、取得した個人情報を、次の場合に第三者に提供することがあります。<br />
              1）応募者が同意した場合<br />
              2）応募者が当社の規約に違反し、当社の権利、財産やサービスなどを保護するために、個人情報を公開せざるをえないと判断するに足る十分な根拠がある場合<br />
              3）人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合<br />
              4）国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、応募者の同意を得ることによって当該事務の遂行に支障を及ぼすおそれがある場合<br />
              5）合併、会社分割、事業譲渡その他の事由によって個人情報の提供を含む当社の事業の承継が行われる場合<br />
              6）個人情報保護法その他の法令で認められる場合<br />
            </p>
          </div>
          <div className={textWrap}>
            <h2 className={title}>4.取得した個人情報の共同利用</h2>
            <p className={text}>
              当社は、当社と共同して業務を行うビジネスパートナーが必要な場合には、応募者の個人情報をそのビジネスパートナーと共同利用することがあります。この場合に当社は、共同利用する目的、情報の範囲、ビジネスパートナーの範囲、代表者氏名・事業所住所について、応募者に公表した上で共同利用することとします。
            </p>
          </div>
          <div className={textWrap}>
            <h2 className={title}>5.取得した個人情報の預託</h2>
            <p className={text}>当社は、利用目的の達成に必要な範囲内において、個人情報の取扱いの全部又は一部を、業務委託先に預託することがあります。その際、業務委託先としての適格性を十分審査するとともに、契約にあたって守秘義務に関する事項等を規定し、情報が適正に管理される体制作りを行います。</p>
          </div>
          <div className={textWrap}>
            <h2 className={title}>6.個人情報の保持期間及び安全管理等</h2>
            <p className={text}>当社は、利用目的の達成に必要な範囲内において、個人データを、正確かつ最新の内容に保つとともに、法令で定められている保存期間が経過した場合、または第2条に定める利用目的の達成のために利用する必要がなくなった場合には、当該個人情報を遅滞なく消去するように努めます。また、当社は、情報セキュリティに関する取組み方針として「情報セキュリティ方針」を確立しています。取り扱う個人情報の漏えい、滅失又はき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。</p>
          </div>
          <div className={textWrap}>
            <h2 className={title}>7.個人情報の開示、訂正及び利用停止等</h2>
            <p className={text}>
              <ol className={ol}>
                <li className={li}>当社は、応募者から、個人情報保護法の定めに基づき個人情報の開示を求められた場合には、個人情報保護法により当社が開示の義務がある場合に限り、応募者ご本人からの請求であることを確認の上で、遅滞なく個人情報の開示を行います。なお、個人情報の開示にあたっては、当社が別途定める手続きに従って開示手数料をお支払いいただく場合があります。</li>
                <li className={li}>当社は、応募者から、（1）個人情報が真実でないという理由によって個人情報保護法の定めに基づきその内容の訂正を求められた場合、及び（2）予め公表された利用目的の範囲を超えて取り扱われているという理由又は偽りその他不正の手段により取得されたものであるという理由によって個人情報保護法の定めに基づきその利用の停止を求められた場合には、応募者ご本人からの請求であることを確認の上で、遅滞なく必要な調査を行い、その結果に基づき、個人情報の内容の訂正又は利用停止を行い、応募者に対してその旨を通知します。</li>
                <li className={li}>当社は、応募者から、応募者の個人情報について消去を求められた場合には、当社が当該請求に応じる必要があると判断した場合に限り、応募者ご本人からの請求であることを確認の上で、遅滞なく個人情報の消去を行い、応募者に対してその旨を通知します。前各項の請求に際しては、次の内容その他当社所定の情報・資料を送付してください。<br />
                  1）氏名・住所・電話番号・メールアドレス
                  2）請求内容・経緯・根拠資料
                  3）本人確認資料
                </li>
                <li className={li}>以下の各号のいずれかに該当する場合は、第１項及び第２項の請求に応じることができない場合があります。その際は、応募者に対してその旨を通知すると共に、理由を説明します。<br />
                  1）応募者又は第三者の生命、身体、財産その他の権利利益を害するおそれがある場合<br />
                  2）当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合<br />
                  3）法令に違反することとなる場合<br />
                  4）応募者ご本人からの請求であることが確認できない場合
                </li>
                <li className={li}>次のいずれかに該当する場合には、開示・訂正・利用停止等の対象となりません。<br />
                  1）当社における選考に関する情報<br />
                  2）合否の結果等に関わる当社の評価情報</li>
              </ol>
            </p>
          </div>
          <div className={textWrap}>
            <h2 className={title}>8.Cookie</h2>
            <ol className={ol}>
              <li className={li}>当社及び広告配信業者が本サービスを通じて、Cookieを応募者が利用するブラウザに送信し、その技術を利用することがあります。</li>
              <li className={li}>応募者自身でブラウザの設定を変更することで、Cookieの受け入れを無効化したり、拒否する事ができます。応募者がCookieを無効化又は拒否された場合、本サービスの一部が適切に動作しない場合がありますのでご留意ください。各ブラウザの設定方法は以下の通りです。<br />
                Internet Explorer<br />
                Microsoft Edge<br />
                Firefox<br />
                Chrome<br />
                Safari</li>
              <li className={li}>応募者がCookieの受取りを可能な設定にしている場合は、広告配信事業者が当サービスを利用する応募者の閲覧履歴等のCookie情報を取得し、広告配信事業者の広告枠上にて、当社の広告が配信される場合があります。</li>
              <li className={li}>広告配信事業者は、Cookie、アクセスデータ、当社識別子および応募者の属性情報を利用して、応募者の趣味・嗜好に沿った広告を配信することがあります。</li>
              <li className={li}>広告配信事業者によって取得された応募者のCookie情報は、広告配信事業者のプライバシーポリシーに従って取り扱われます。</li>
              <li className={li}>応募者は、広告配信事業者のオプトアウトページにアクセスし、無効化 (オプトアウト) することにより、広告配信事業者によるCookieおよびアクセスデータの利用を停止できる場合があります。その場合、応募者の趣味・嗜好に沿った広告が配信されなくなったり、同じ広告が繰り返し配信されたりすることがあります。無効化 (オプトアウト) したい場合は、以下の手順に従い設定をしてください。<br />
                オプトアウトページ</li>
            </ol>
          </div>
          <div className={textWrap}>
            <h2 className={title}>9.問い合わせ窓口</h2>
            <p className={text}>本プライバシーポリシーに対するご意見、ご質問、その他応募者情報の取り扱いに関するお問い合わせ、第7条に基づくご請求や削除のお問い合わせについては、こちらのフォームよりご連絡ください。</p>
          </div>
          <div className={textWrap}>
            <h2 className={title}>10.改定</h2>
            <p className={text}>当社は、本プライバシーポリシーを改定することができ、応募者はこれを承諾するものとします。当社が別途定める場合を除き、本プライバシーポリシーの変更は、本サービスへの掲載によって随時応募者に発表するものとし、当該掲載をもって効力が生じます。</p>
          </div>
          <div className={revisionDate}>2021年04月26日 制定</div>
        </div>
      </div>
    </>
  );
});

export default PrivacyPolicy;