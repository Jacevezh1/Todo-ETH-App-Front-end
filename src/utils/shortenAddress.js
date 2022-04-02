export const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
// Funcion que toma los primeros 5 numeros, y muestra igual los ultimios 4.