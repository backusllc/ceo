

export default function sendmail(req: any, res: any) {
  let nodemailer = require("nodemailer");

  // 送信用アカウントの設定（ここではGmail）
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp22.gmoserver.jp",
    auth: {
      user: "info@jceoa.org",
      pass: 'btwr8#ay',
    },
    secure: true,
  });

  // 管理人に送るお問い合わせメッセージ通知メール
  const toHostMailData = {
    from: 'info@jceoa.org',
    to: 'info@jceoa.org',
    subject: `【お問い合わせ】${req.body.name}様より`,
    html: `
        <p>
          以下の内容でお問い合わせを承りました。
        </p>
        <p>-----------------------------------------</p>
        <h2>お問い合わせ内容</h2>
        <p>【問い合わせ種別】</p>
        <p>${req.body.contactKinds  }</p>
        <p>【会社名】</p>
        <p>${req.body.company}</p>
        <p>【お名前】</p>
        <p>${req.body.name}</p>
        <p>【ふりがな】</p>
        <p>${req.body.ruby}</p>
        <p>【メールアドレス】</p>
        <p>${req.body.email}</p>
        <p>【お電話番号】：</p>
        <p>${req.body.tel}</p>
        <p>【お問い合わせ内容】</p>
        <p>${req.body.message}</p>
        <p>-----------------------------------------</p>
      `,
  };

  // ゲストに送る自動受付メール
  const toGuestMailData = {
    from: 'info@jceoa.org',
    // 入力されたゲストのメールアドレスが入る
    to: `${req.body.email}`,
    subject: `【お問い合わせ自動受付メール】`,
    html: `
        <p>
          お問い合わせありがとうございます。
          <br>以下の内容でお問い合わせを承りました。
        </p>
        <p>-----------------------------------------</p>
        <h2>お問い合わせ内容</h2>
        <p>【問い合わせ種別】</p>
        <p>${req.body.contactKinds}</p>
        <p>【会社名】</p>
        <p>${req.body.company}</p>
        <p>【お名前】</p>
        <p>${req.body.name}</p>
        <p>【ふりがな】</p>
        <p>${req.body.ruby}</p>
        <p>【メールアドレス】</p>
        <p>${req.body.email}</p>
        <p>【お電話番号】：</p>
        <p>${req.body.tel}</p>
        <p>【お問い合わせ内容】</p>
        <p>${req.body.message}</p>
        <p>-----------------------------------------</p>
      `,
  };

  // 送信する
  transporter.sendMail(toHostMailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });
  transporter.sendMail(toGuestMailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.send('success');
}
