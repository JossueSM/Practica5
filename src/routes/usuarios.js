const { Router }=require('express')
const router = Router()

const usuarios = [
    { id: 1, nombre: 'Usuario1' },
    { id: 2, nombre: 'Usuario2' },
    { id: 3, nombre: 'Usuario3' },
    
  ];

router.post('/',(req, res)=>{
    const {ci,nombre,apellido}=req.body;
    if(ci && nombre && apellido){
        return res.status(201).json('usuario creado');
    }
    res.json(400).json('usuario no creado');
});


router.put('/:id',(req, res)=>{
    const {ci,nombre,apellido}=req.body;
    if(ci || nombre || apellido){
        return res.status(201).json('usuario actualizado');
    }
    res.json(400).json('usuario no actualizado');
});


router.delete('/:id', (req, res) => {
    const idUsuarioAEliminar = parseInt(req.params.id);

    const indexUsuario = usuarios.findIndex(usuario => usuario.id === idUsuarioAEliminar);
    if (indexUsuario !== -1) {
      usuarios.splice(indexUsuario, 1);
      res.status(200).json('Usuario borrado exitosamente.');
    } else {
      res.status(404).json('Usuario no encontrado.');
    }
  });

router.get('/', (req,res)=>{
    res.json(
        [{
            ci:1500853311,
            nombre:"Jossue",
            apellido:"Simancas"
        },
        {
            ci:150085331,
            nombre:"Jose",
            apellido:"Simas"
        }
        ]
        );
});

module.exports=router