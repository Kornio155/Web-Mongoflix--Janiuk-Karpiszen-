| Pole         | Typ danych    | Opis                            |
|--------------|---------------|---------------------------------|
| id           | Number        | Unikalny identyfikator filmu    |
| tytul        | String        | Tytuł filmu                     |
| wejscieDoKin | Number        | Rok produkcji                   |
| gatunek      | Array[String] | Lista gatunków                  |
| ocena        | Float         | Ocena filmu                     |
| rezyserId    | Number        | Id powiązane z reżyserem        |
| aktorzy      | Array[String] | Lista aktorów                   |
| opinieId     | Array[Number] | Lista id powiazancyh z opiniami |
| czyPremium   | String        | Czy wymagane jest konto premium |

| Pole     | Typ danych | Opis                            |
|----------|------------|---------------------------------|
| id       | Number     | Unikalny identyfikator reżysera |
| imie     | String     | Imię reżysera                   |
| nazwisko | String     | Nazwisko reżysera               |


| Pole             | Typ danych | Opis                          |
|------------------|------------|-------------------------------|
| id               | Number     | Unikalny identyfikator opinii |
| nazwaUzytkownika | String     | NazwaUżytkownika              |
| idFilmu          | String     | Id filmu powiązane z filmami  |
| opinia           | String     | Treść opinii                  |
