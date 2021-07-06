const { throws } = require('assert');
const fs = require('fs')

const crearArchivo = async (base = 5, l, h) => {
    try {
        let text = '';
        let fin = h+1
        for (let i = 1; i < fin; i++) {
            text += `${base} x ${i} = ${i * base}\n`
        }
        fs.writeFileSync(`tabladel-${base}.text`, text);
        if (l) console.log(text)
        return `-/salida/tabladel-${base}.text`;
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}