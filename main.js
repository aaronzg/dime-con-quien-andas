const button = document.querySelector('#start');
const input = document.querySelector('#conQuien');
const h1 = document.querySelector("#result");

const ns = ['edgar','aaron','gael','carlos','sayid','julian','sebas','sebastian','alan','luis','juan pablo',
'juan carlos','ramiro','uriel','parra', 'joan'];



button.addEventListener('click', (e) => {
    e.preventDefault;

    if(input.value) {
        const iValue = input.value.toLowerCase();
        
        switch (iValue) {
            case ns[0]:
            case ns[1]:
                h1.textContent = "Eres un afortunado de tener a alguien tan riatudo de tu lado";
                break;
            case ns[2]:
            case ns[3]:
                h1.textContent = "Cada quien tiene una perspectiva diferente que puede cambiar de persona a persona, si te faltan derechos seras afortunado de tener a alguien como tu a tu lado, pero, en caso contrario lo podrias ver como una desgracia, o tal vez no, lo que si te puedo asegurar es que el color de este individuo no existe porque el negro no es un color... att: kerrycapija 1869,2069"
                break;
            case ns[4]:
            case ns[5]:
                h1.textContent = "Muchos diran que los que se juntan con el son unas lacras, pero la definición de lacra nos dice que 'Es una señal que deja en una persona una enfermedad o un daño físico', si te pones a pensar JS esta enfermo de homosexualidad... att: mikaMote 69 - 169"
                break;
            case ns[6]:
            case ns[7]:
                h1.textContent = 'Sebastian nos dice "La gente piensa que la pasiencia es la capacidad de esperar pero no es así. La paciencia es cómo nos pajeamos mientras esperamos". Esto quiere decir que si te juntas con el lo más probable es que seas alguien que le guste el porno de videojuegos.'
                break;
            case ns[8]:
            case ns[9]:
                h1.textContent = '"Jalarsela no es malo es algo concupiscente que no se puede controlar" fue lo que le dijo a su madre después de que lo cacharan en pleno acto libidinoso. Si te juntas con el seguramente seas alguien que cree que la paja no es mala.'
                break;
            case ns[10]:
                h1.textContent = 'Su frase característica es: "El tonto grita, el inteligente opina, el sabio calla y los rebeldes juegan minecraft". Si te juntas con el lo más probable es que te gusta el mincraft.'
                break;
            case ns[11]:
                h1.textContent = 'Una vez alguien le dijo "Se te calleron las nalgas o las sumiste pa dentro..." y el sabiamente contesto "No todos tenemos la suerte de nacer con un trasero privilegiado. A veces se tiene un poco a veces bastante y a veces “nada”. Es por eso que muchas personas se ejercitan en demasía, precisamente para aumentar esa parte. En el peor de los casos, los que tienen dinero se colocan implantes, pero en mi casol lo que tengo de trasero lo tengo de pene.", el sujeto que le habia hecho el comentario solo se rio y se marcho, tu eres ese sujeto...'
                break;
            case ns[12]:
                h1.textContent = 'Sebastian le hizo una sabía pregunta"¿Por qué te saltas las clases?" y el sabiamente contesto "La marea me arrastra y floto sin pensar, que mi destino es hundirme y nunca me salvare de saltarme las clases". Si te juntas con el lo mas probable es que te saltes las clases.'
                break;
            case ns[13]:
                h1.textContent = 'Déspues de que lo arrestaron por el robo de un auto le preguntaron porqué lo hiciste y el de forma sabia y limpia contesto "Cuando las oportunidades no llamen a tu puerta destruye una". Si te juntas con el probablemente seas un filosofo.'
                break;
            case ns[14]:
                h1.textContent = 'Parra significa "Planta de vid que se deja crecer y se sotiene sobre un soporte pegado a la pared o sobre un armazón", si te juntas con el es porque te gusta tocar vergas.'
                break;
            case ns[15]:
                h1.textContent = 'Una vez alguien le pregunto "Por qué no tienes novia?" y el sabiamente contesto "Jamás permitas que la soledad te lleve a buscar una compañia que realmente no necesitas". Si te juntas con el es porque te gusta.'
                break;
            default:
                h1.textContent = 'Nombre no valido, el creador no te conoce o no te puso porque te ofendes.';
                break;
        }
    }else {
        h1.textContent = "Ingresa un nombre";
    }

    
})