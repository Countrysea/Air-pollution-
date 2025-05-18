fetch('https://data.epd.gov.hk/api/aqhi-individual?lang=en')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('aqhi-data');
    container.innerHTML = '';

    data.forEach(station => {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${station.Station}</strong>: AQHI = ${station.AQHI} (as of ${station.Pub_time})`;
      container.appendChild(div);
    });
  })
  .catch(error => {
    document.getElementById('aqhi-data').innerText = 'Failed to load data';
    console.error(error);
  });