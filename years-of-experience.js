const startDate = new Date('2019-01-01'); // Substitua com a sua data de início
const currentDate = new Date();
const diffTime = Math.abs(currentDate - startDate);
const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));

document.getElementById('years-of-experience').textContent = diffYears;
