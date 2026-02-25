db = db.getSiblingDB('mongoflix');

print("\n--- RAPORT ANALITYCZNY MONGOFLIX ---");

//  Filmy z gatunku Akcja
print("\n1. Lista naszych filmów akcji:");
let query = db.movies.find({ gatunek: "Akcja" }, { tytuł: 1, gatunek: 1, ocena: 1, czyPremium: 1, _id: 0 }).toArray();
printjson(query);

//  Filmy ze srednia ocena od 6.5 w gore, ktore powstaly przed 2000 roku
print("\n2. Lista naszych filmów ze średnią powyżej 6.5, które powstały przed 2000 roku:");
query = db.movies.find({$and: [{ocena: {$gt: 6.5}}, {wejscieDoKin: {$lt: 2000}}]}, { tytuł: 1, gatunek: 1, ocena: 1, czyPremium: 1, _id: 0 }).toArray();
printjson(query);

//  Średnia ocen dla każdego gatunku
print("\n3. Średnia ocen dla każdego gatunku:");
query = db.movies.aggregate([{
    $group: {
        _id: "$gatunek",
        avgOcena: {
            $avg: "$ocena"
        }
    }
}])
printjson(query);

//  Aktualizacja danych, dodanie aktora do filmu Jurassic World: Fallen kingdom

print("\n4. Dodanie aktora do filmu Jurassic World: Fallen Kingdom:");
query = db.movies.updateOne(
    {id: 6},
    {
        $push: {
            aktorzy:{
                imie: "Jeff",
                nazwisko: "Goldblum",
                rola: "Ian Malcolm"
            }
        }
    }
)
printjson(query);
query = db.movies.find(
    {id: 6},
    {aktorzy: 1, _id: 0},
)
printjson(query);