

export default function sendmail(req: any, res: any) {
  //　改行のエスケープシーケンスをbrタグに置換
  const htmlMsg = req.body.message;
  let nodemailer = require("nodemailer");

  // 送信用アカウントの設定（ここではGmail）
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "arima.yuki.0203@gmail.com",
      // Googleアカウントでアプリパスワードを取得して入れる
      pass: 'aoyzcosqqvhogkzb',
    },
    secure: true,
  });

  // 管理人に送るお問い合わせメッセージ通知メール
  const toHostMailData = {
    from: 'arima.yuki.0203@gmail.com',
    to: req.body.email,
    subject: `【お問い合わせ】${req.body.name}様より`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `
        <p>【名前】</p>
        <p>${req.body.name}</p>
        <p>【メッセージ】</p>
        <p>${htmlMsg}</p>
        <p>【メールアドレス】</p>
        <p>${req.body.email}</p>
      `,
  };

  // ゲストに送る自動受付メール
  const toGuestMailData = {
    from: 'arima.yuki.0203@gmail.com',
    // 入力されたゲストのメールアドレスが入る
    to: `${req.body.email}`,
    subject: `【お問い合わせ自動受付メール】`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `
        <p>
          お問い合わせありがとうございます。
          <br>以下の内容でお問い合わせを承りました。
        </p>
        <p>-----------------------------------------</p>
        <h2>お問い合わせ内容</h2>
        <p>【問い合わせ種別】</p>
        <p>${req.body.name}</p>
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
