const gerarEtiquetas = (infoProduto: { produto: string, lote: number, ano: number, qtd: number }): string[] => {
    const etiquetasGeradas: string[] = []
    for (let i = 1; i <= infoProduto.qtd; i++) {
        const valor: string = ("000" + i).slice(-3);
        etiquetasGeradas.push(`${infoProduto.lote}-${infoProduto.ano}-${valor}`)
    }
    return etiquetasGeradas
}

console.log(gerarEtiquetas({
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}));
