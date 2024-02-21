const express = require("express");
const app = express();
const mysql = require("mysql")
const router = express.Router();
require ('dotenv').config();


app.use(express.json());


router.get('/primerEmpo',(req,res)=>{
    res.send('primer endpoint funcional');
    
})



router.post('/productos', (req, res) => {
    if (!req.body || typeof req.body !== 'object' || !req.body.estado) {
        res.status(400).json({ error: 'Cuerpo de solicitud inválido' });
        return;
    }

    const { estado, kit, barcode, nombre, presentacion, descripcion, foto, peso } = req.body;
    const query = "INSERT INTO productos (estado, kit, barcode, nombre, presentacion, descripcion, foto, peso) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    
    connection.query(query, [estado, kit, barcode, nombre, presentacion, descripcion, foto, peso], (err, results) => {
        if (err) {
          console.error('Error al insertar el producto:', err);
          res.status(500).json({ error: 'Error interno del servidor' });
          return;
        }
    
        console.log('Producto almacenado correctamente');
        res.status(201).json({ message: 'Producto almacenado correctamente' });
    });
});




module.exports = router;