export function maskCardNumber(cardNo) {
  return cardNo.slice(0, 4) + '********' + cardNo.slice(-4);
}

export function maskCVC(cvc) {
  return '***';
}
