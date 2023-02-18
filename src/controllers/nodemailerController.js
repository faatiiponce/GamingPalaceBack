const productsDB = require("./productsController");
const { Products } = require("../db");
const nodemailer = require("nodemailer");

function validate (body) {
if (!body.destiny) {
  console.log("NMAILER: Falta enviar dirección de email en la variable destiny del body")
  throw new Error ("Falta enviar dirección de email en la variable destiny del body")
  return "Falta enviar dirección de email en la variable destiny del body"
}
let varemail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
if (body.destiny.match(varemail)){
  console.log("good")
  return "good"
}else{
  console.log("La variable destiny debe contener una dirección de email valida")
  //throw new Error ("La variable destiny debe contener una dirección de email valida")
  return "La variable destiny debe contener una dirección de email valida"
}
}

async function nmailer (body) {
  //CHEQUEAR QUE DICE LA VALIDACIÓN PARA DECIDIR SI CONTINUAR O ENVIAR ERROR
  let continuation = validate(body)
  if (continuation === "good") {
  }else{
    throw new Error (continuation)
    return continuation
  }
  //SETEAR SERVER DE EMAIL
let transporter = nodemailer.createTransport({//SETEO DE LAS VARIABLES DEL SERVIDOR, USUARIO Y CONTRASEÑA DEL MISMO
  host: "smtp-relay.sendinblue.com", //ATENCIÓN: CON GMAIL NO FUNCIONA, POR MEDIDAS DE SEGURIDAD DE GMAIL
  port: 587,
  //secure: true,
  auth: {
    user: "gaming.palace.gp@gmail.com", //USUARIO O DIRECCIÓN DE EMAIL EN ESE SERVER
    pass: "VqcAjUSwvO3p26PR" //CONTRASEÑA EN ESE SERVER
  }
});
//ARMAR CUERPO DE EMAIL Y ENVIAR
let mapping = ""

for(let i=0; i<body.prodsPay.length; i++){
mapping = mapping + `<tr>\n`
mapping = mapping + `<td>${body.prodsPay[i].name}</td>\n`
mapping = mapping + `<td>${body.prodsPay[i].quantity}</td>\n`
mapping = mapping + `<td>${body.prodsPay[i].price}</td>\n`
mapping = mapping + `</tr>\n`
}

console.log("mappinggggg", mapping)

{/* <tr>
         <td>${body.prodsPay[0].name}</td>

         <td>${body.prodsPay[0].quantity}</td>

         <td>${body.prodsPay[0].price}</td>
       </tr> */}


       let info = await transporter.sendMail({
        from: '"GAMING PALACE" <gaming-palace@gamingpalace.com>', // DETALLES DEL EMAIL A ENVIAR
        to: body.destiny, // DESTINATARIO O LISTA DE DESTINATARIOS
        subject: body.subject, // ASUNTO DEL MAIL
        text: body.text, // TEXTO DEL MAIL
        html: 
        `<div style='border: 5px solid black; background-color: red'>
        <table>
          <tbody>
          <tr>
            <th>Detail</th>
            <th>Quantity</th>
            <th>Unit price</th>
          </tr>
          
            <tr>
              ${mapping}
            </tr>
            
          
          </tbody>
        </table>
        </div> `, // HTML DEL MAIL (FORMATO WEB, SOLO HTML)
      });
//ARMAR RESPUESTA DEL SERVER
let response = {
  message: "EMAIL HAS BEEN SENT WITH THESE DETAILS. EL EMAIL HA SIDO ENVIADO CON ESTOS DETALLES",
  email_destination: body.destiny,
  email_subject: body.subject,
  email_text: body.text,
  email_html: body.html
}
return response //ENVIAR RESPUESA DEL SERVER
}

module.exports = {
   nmailer
  };
  