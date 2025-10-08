const form = document.getElementById("searchForm");
const resultsDiv = document.getElementById("results");


const covoiturages = [
  {
    depart: "Paris",
    arrivee: "Lyon",
    date: "2025-10-10",
    heureDepart: "08:00",
    heureArrivee: "12:00",
    chauffeur: { nom: "Alice", note: 4.8, photo: "Doc/img/ai_woman.png"},
    places: 2,
    prix: 25,
    voitureElectrique: true
  },
  {
    depart: "Paris",
    arrivee: "Lille",
    date: "2025-10-10",
    heureDepart: "09:00",
    heureArrivee: "11:30",
    chauffeur: { nom: "Bob", note: 4.5, photo: "Doc/img/man-8068201_1280.jpg"},
    places: 1,
    prix: 18,
    voitureElectrique: false

  },  {
    depart: "Paris",
    arrivee: "Marseille",
    date: "2025-11-07",
    heureDepart: "08:00",
    heureArrivee: "12:00",
    chauffeur: { nom: "Julie", note: 5.0, photo: "Doc/img/ai_woman.png"},
    places: 3,
    prix: 30,
    voitureElectrique: true
  },
  {
    depart: "Montpellier",
    arrivee: "Toulon",
    date: "2025-12-01",
    heureDepart: "06:00",
    heureArrivee: "12:00",
    chauffeur: { nom: "Marc", note: 4.3, photo: "Doc/img/man-8068201_1280.jpg"},
    places: 2,
    prix: 15,
    voitureElectrique: false
  } 
];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const depart = document.getElementById("depart").value.trim();
  const arrivee = document.getElementById("arrivee").value.trim();
  const date = document.getElementById("date").value;

  const trajets = covoiturages.filter(
    t =>
      t.depart.toLowerCase() === depart.toLowerCase() &&
      t.arrivee.toLowerCase() === arrivee.toLowerCase() &&
      t.date === date &&
      t.places > 0
  );

  afficherResultats(trajets);
});

function afficherResultats(trajets) {
  resultsDiv.innerHTML = "";

  if (trajets.length === 0) {
    resultsDiv.innerHTML = 
    `<div class="no-result">
        <h2>Aucun trajet trouvé pour l'instant</h2>
        <p>Il n'y a pas de voyage prévu correspondant à votre recherche.</p>
        <button class="btn-green"+ Proposer mon trajet</button>
      </div>`;
    return;
  }

  trajets.forEach(t => {
    const ecologique = t.voitureElectrique ? "Écologique" : "Standard";
    resultsDiv.innerHTML += 
    `<div class="card">
        <div class="info">
          <img src="${t.chauffeur.photo}" alt="chauffeur">
          <div>
            <strong>${t.chauffeur.nom}</strong><br>
            <span> ${t.chauffeur.note}</span>
          </div>
        </div>
        <p><strong>${t.depart}</strong><strong>${t.arrivee}</strong></p>
        <p>${t.heureDepart} - ${t.heureArrivee}</p>
        <p>${t.prix} €</p>
        <p>${ecologique}</p>
        <p>Places restantes : ${t.places}</p>
        <button class="btn-detail">Détail</button>
      </div>`;
  });
}



