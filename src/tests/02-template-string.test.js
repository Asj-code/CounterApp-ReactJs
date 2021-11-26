import '@testing-library/jest-dom';
import { getSaludo } from '../base/02-template-string'

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe retornar hola Fernando', ()=> {
        const nombre = 'Andrea';

        const saludo = getSaludo(nombre)

        expect(saludo).toBe(`Hola ${nombre}!`)
    })

    test('La prueba debe retornar el nombre por defecto', () => {
        
        const saludo = getSaludo()
        expect(saludo).toBe('Hola Carlos!')
    })
})
