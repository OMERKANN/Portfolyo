const express = require('express'); 
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


const app = express();
const port = 4000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/details.html', (req, res) => {
    res.sendFile(__dirname + '/details.html');
});

/* app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`); // Sunucu başlatıldığında konsola bu mesajı yazdırıyoruz
}); 

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});


/* mail send contact forum nodemailßer*/

app.post('/send-email', (req, res) => {
  const { name, email, message, subject } = req.body;

  
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'omerkan93@gmail.com', 
      pass: 'juhi toti sive lktu' 
    }
  });

  const mailOptions = {
    from: email,
    to: 'omerkan93@gmail.com',
    subject: subject,
    text: `Ad: ${name}\nE-posta: ${email}\nMesaj: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('E-posta gönderme işlemi başarısız oldu');
    } else {
      console.log('E-posta gönderildi: ' + info.response);
      res.status(200).send('E-posta gönderme işlemi başarıyla tamamlandı');
    }
  });
});

app.listen(3000, () => {
  console.log('Sunucu 3000 portunda çalışıyor');
});