export const formatterMoney = (money: number, localMoney: string = 'en-US', currency: string = 'USD') => {
  const formatter = new Intl.NumberFormat(localMoney, {
    style: 'currency',
    currency
  });

  return formatter.format(money)
}
