router.post("/add", (req,res)=>{
     const {  nombre, email, password } = req.body;

      if (!nombre || !email ||password) {
        return res.status(400).json({ error: 'Faltan datos de la tabla' });
    }
    
     db.query('INSERT INTO USUARIO (nombre, email, password) VALUES (?, ?,?)', [nombre, email, password], (err, result) => {
        if (err) {
            console.error('Error al insertar los datos:', err);
            return res.status(500).json({ error: 'Error al guardar los datos.' });
        }
        
        // Envía una respuesta de éxito con el ID del nuevo registro
        res.status(201).json({ 
            message: 'Información agregada con éxito.', 
            id: result.insertId 
        });
    });
})
