const soletrar = (palavra: string): string => {
    const palavraSoletrada = palavra.trim().split('');
    return palavraSoletrada.join('-');
}

console.log(soletrar('papibaquígrafo'));