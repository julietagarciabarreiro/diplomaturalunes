const express = require('express');
const router = express.Router();
const novedadesModel = require('./../models/novedadesModel');
const cloudinary = require('cloudinary').v2;
const nodemailer = require('nodemailer');

router.get('/novedades', async function (req, res) {
    let novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedades => {
        if (novedades.img_id) {
            const imagen = cloudinary.url(novedades.img_id, {
                width: 960,
                height: 420,
                crop: 'crop'
            });
            return {
                ...novedades,
                imagen
            }
        } else {
            return {
                ...novedades,
                imagen: ''
            }
        }
    });
    res.json(novedades);
});

router.post('/contacto', async function (req, res) {
    const { nombre, email, mensaje, telefono } = req.body;

    const mail = {
        to: 'julietagarciabarreiro@gmail.com',
        subject: 'Contacto web',
        html: `${nombre} se contactó a través de la web y quiere más información a este correo: ${email} <br>
            Además, hizo el siguiente comentario: ${mensaje} <br>
            Su número de teléfono es: ${telefono}`
    };

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    try {
        await transport.sendMail(mail);

        res.status(201).json({
            error: false,
            message: 'Mensaje enviado'
        });
    } catch(e) {
        console.log(e)
        res.status(500).json({
            error: true,
            message: 'Ocurrió un error al enviar el mensaje'
        })
    }
    
});

module.exports = router;