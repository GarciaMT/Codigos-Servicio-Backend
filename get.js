 
//Mostrar los usuarios registrados
router.get('/',(req, res)=>{
    db.query('select * from usuario', //Mostrar todas la tabla 
    (err,result) =>{
        if(err)console.log(err) //Si algo sale mal 
        else{
            res.send(result)
            console.log("Metodo Get", result) //Si todo funciona
        }
    }
    )
})
