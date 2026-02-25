db = db.getSiblingDB('mongoflix');

print("\n--- RAPORT ANALITYCZNY MONGOFLIX ---");

//  Filmy z gatunku Akcja
print("\n1. Lista naszych filmów akcji:");
const akcja = db.movies.find({ gatunek: "Akcja" }, { tytuł: 1, gatunek: 1, ocena: 1, czyPremium: 1, _id: 0 }).toArray();
printjson(akcja);