document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', redirectToAnotherPage);
  });
  
  function redirectToAnotherPage() {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfRMA5EjfoK6pqZJa0OOWWsf87Rmz_PgG3DrO_BXpA2NI2Qgw/viewform?embedded=true';
  }
  