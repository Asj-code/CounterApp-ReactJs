describe('pruebas en el archivo demo.test.js', () => {
    test( 'los strings deben ser iguales', () => {
        const mensaje = 'Hola mundo'
        const mensaje2 = "Hola mundo"
    
        expect(mensaje).toBe(mensaje2)
    })
})

