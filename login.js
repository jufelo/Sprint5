
class Persona
{
    constructor(nombre, apellido, telefono, correo, contrasena)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.contrasena = contrasena;
    }
}
//Variable del arreglo de manera global
var registros =[{ correo: "juan@gmail.com", contrasena: "SecurePassword123" }];

module.exports.registros = registros;

function agregarRegistro()
{   
    
    //Toma los valores de cada una de las cajas de texto
    let Nombre = document.getElementById("nombre").value;
    let Apellido = document.getElementById("apellido").value;
    let Telefono = document.getElementById("telefono").value;
    let Correo = document.getElementById("correo").value;
    let Contrasena = document.getElementById("contrasena").value;     
    //Crea el objeto Persona 
    let Personal = new Persona(Nombre, Apellido, Telefono, Correo, Contrasena);
    //Agrega los valores en el arreglo
    registros.push(Personal);
    //Muestra el objeto Persona
    console.log(registros);    
}

//Exportamos los módulos
module.exports.agregarRegistro = agregarRegistro;

function login()
{
    let Correo = document.getElementById("correo").value;
    let Contrasena = document.getElementById("contrasena").value;
    //alert("¿Qué resultado da el cuarto de un tercio de 12000?: ");
    let Captcha = document.getElementById("captcha").value;

    if(registros.length == 0)
    {
        console.log("No hay valores en el registro");
        return false;
    }
    else
    {
        for(let i = 0; i < registros.length; i++)
        {
            if (registros[i].correo == Correo && registros[i].contrasena == Contrasena)
            {    
                if (validarCAPTCHA(Captcha))
                {
                    console.log("Validación positiva del captcha");
                    return true;
                }
                else
                {
                    console.log("Validación negativa del captcha");
                    return false;
                }
            } 
            else
            {
                console.log("Los valores no son iguales");
                return false
            } 
        }
    }    
}

//Exportamos los módulos
module.exports.login = login;

function validarCAPTCHA(valor)
{    
    if (valor == ((12000 / 4) / 3))
    {
        return true;
    }
    else
    {
        return false;
    }
}

//Exportamos los módulos
module.exports.validarCAPTCHA = validarCAPTCHA;
