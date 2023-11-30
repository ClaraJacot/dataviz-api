const barCanvas = document.getElementById('myChart');
            new Chart(barCanvas, {
              type: 'bar',
              data: {
                labels: ['Agriculture','Eau potable','Activités Industrielles', 'Electricité'],
                datasets: [{
                  data: [43,42,7,8],
                  label: '% eau consommée ',
                  backgroundColor:['blue'],
                  borderColor:'black',
                  borderWidth:1,
                
                }]
              },
              options: {
                scales: {
                  y: {
                    beginAtZero: true,
                    color:'black',
                    fontsSize:25,
                    
                  },
            
                },
                plugins:{
                  legend:{
                    labels:{
                      color:'black',
                      
                      
                      
                    }

                  },
                  title:{
                  display: true,
                  text: 'Consommation en eau ',
                  color:'black',
                  font:{
                    size:35
    
                  }
          
                }
                }
                
               
              }
            });




let profondeurs = []
function recupData () {
    let datas =[]
    let dates = []
    fetch("https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/chroniques_tr?bss_id=BSS001TMCR&size=50&fields=date_mesure,profondeur_nappe&sort=desc")
    .then(res => res.json())
    .then(données =>{
    console.log(données)
        for (let i = 0; i<données.data.length; i++){
        datas.push(données.data[i].profondeur_nappe);
        dates.push(données.data[i].date_mesure);
        }
    //console.log(datas)
const ctx = document.getElementById('graphe-nappe');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates.reverse(),
      datasets: [
        {
        label: 'profondeur de l\'eau au point de mesure en mètre',
        data: datas.reverse(),
        borderWidth: 1
        }],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                },
        title: {
            display: true,
            text: 'Nappe de Villeurbanne'
              }},
      scales: {
        y: {
          beginAtZero: false,
          reverse : true
        }
      }
    }
  })
    });
    //return datas
}
recupData();

//console.log(profondeurs)

