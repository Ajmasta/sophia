import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey(process.env.EMAIL_API);
export default async (req, res) => {
  const { email, subject, message, name } = req.body
  console.log(req.body)
const text = `
Name: ${name}
Email: ${email}
message:${message}
`
  const msg = {
    to: 'adrien.moevus@gmail.com',
    from: 'adrien.moevus@gmail.com',
    subject,
    name,
    text,
  };

  sgMail.send(msg).then(()=> {
    console.log("trying")
  res.json({ message: `Email has been sent` })
}).catch(error=>console.log(error.response.body))

 
}