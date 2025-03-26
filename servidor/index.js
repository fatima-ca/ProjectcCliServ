const express = require('express');
const app = express();

app.use(express.json());

app.get("/api/calculo/:id1/:id2/:op", (req, res) => {
    //aceder a los parametros en la URL
    const id1 = parseFloat(req.params.id1); //convertir las id1 y id2 en flotantes
    const id2 = parseFloat(req.params.id2);
    const op = parseInt(req.params.op); //convertir op en entero
    let resultado;
  
    //verificar que los valores introducidos sean válidos
    if (isNaN(id1) || isNaN(id2) || isNaN(op)) {
      return res.status(400).send("Valores no válidos");
    }
  
    switch (op) {
      case 1: // Suma
        resultado = id1 + id2;
        break;
      case 2: // Resta
        resultado = id1 - id2;
        break;
      case 3: // Multiplicación
        resultado = id1 * id2;
        break;
      case 4: // División
        if (id2 === 0) {
          return res.status(400).send("No se posible entre cero");
        }
        resultado = id1 / id2;
        break;
      default:
        return res.status(400).send("Operación no válida");
    }
  
    res.json({ resultado });
  });

const port=process.env.PORT || 3000;
app.listen(port, () => console.log(`Escuchando en puerto ${port}...`));