const priceFormatter = (oldPrice) => {
  if (!oldPrice) return 'Valor não informado';
  if (typeof oldPrice !== 'number') return 'Valor não informado';

  const newPrice = `R$ ${String(oldPrice).slice(0, -2)},${String(
    oldPrice,
  ).slice(-2)}`;

  return newPrice;
};

export default priceFormatter;
