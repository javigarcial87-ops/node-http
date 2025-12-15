const http =require('node:http'); //esto nos da las herramientas para crear un servidor por defecto
const webInfo = require('./data.js'); // con esto le decimos que queremos usar los datos del otro archivo (./ significa que esta dentro de esta misma carpeta)

const PORT = 3000 // creamos esto porque el servidor necesita un puerto y el numero 3000 es estandar para probar en desarrollo


//CREAMOS UN DESTRUCTURING PARA OBTENER DATOS DEL OBJETO

    const {title,subtitle,description} = webInfo;

    // CREAMOS EL SERVIDOR HTTP

    const server = http.createServer((req, res)=>{
        const html = `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>${title}</title>
      </head>
      <body>
        <h1>${title}</h1>
        <h2>${subtitle}</h2>
        <p>${description}</p>
      </body>
    </html>
  `
        res.end(html)
    })

    server.listen (PORT, () =>{
        console.log('servidor activo en http://localhost:${PORT}')
    })
//-----------se crea el servidor, y esta funcion anterior se ejecuta cada vez que alguien entra a la web















