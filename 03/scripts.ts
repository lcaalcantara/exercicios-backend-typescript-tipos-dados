const tabuada = (listaNumeros: number[]): void => {
    for (const numeroAtual of listaNumeros) {
        for (let i = 0; i <= 10; i++) {
            const resultado: number = numeroAtual * i;
            console.log(`${numeroAtual} x ${i} = ${resultado}`);
        }
        console.log('---------------');
    }
}

tabuada([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])