<img alt="Logo" src="https://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Node.js challenge

Witaj w challengu Node.js, gdzie codziennie przez 7 dni zdobędziesz konkretną dawkę informacji dotyczących Node.js oraz wykorzystasz ją w praktyce. **Pamiętaj żeby wykonywać dni challengu po kolei - od dnia pierwszego do ostatniego** (dzięki temu Twoja wiedza będzie poukładana i kompletna).

Każdy dzień to jeden temat przewodni. W jego ramach **stworzysz aplikację Node.js, która faktycznie będzie potrafiła coś zrobić** - od razu zobaczysz wynik swojej pracy.

___

> Kilka ważnych informacji

Przed przystąpieniem do rozwiązywania zadań przeczytaj poniższe wskazówki

**Do pełnego i satysfakcjonującego doświadczania tego challengu jest potrzebna znajomość JavaScript z elementami ES6.** Jeżeli potrzebujesz informacji z zakresu ES6 to znajdziesz je tutaj: [*tutorial ES6*][es6-tutorial].

## Jak zacząć?

1. Stwórz [*fork*][forking] repozytorium z zadaniami.
2. [*Sklonuj*][ref-clone] repozytorium na swój komputer.

Poszczególne zadania rozwiązuj w odpowiednich plikach.

## Plan challengu

* Pierwszy dzień to wstęp do Twojej przygody z Node.js - dowiesz się w jaki sposób przygotować środowisko oraz jak pisać i testować programy Node.js.
* W kolejnych dniach dowiesz się w jaki sposób za pomocą Node.js wchodzić w interakcję z systemem operacyjnym (np. modyfikować pliki czy dokonywać szyfrowania).
* Druga część challengu jest poświęcona tworzeniu back-endu - dowiesz się jak stworzyć własny serwer.
* Pod koniec doświadczysz roli full-stack developera - stworzysz komunikujący się ze sobą front-end i back-end.  

___

# Dzień 2: Trwały ślad na dysku

## require()

Wczoraj wykorzystywaliśmy funkcje, metody i zmienne globalne dostępne dla naszego programu "od ręki". Większość modułów należy natomiast dołączać za pomocą funkcji `require('nazwa-modułu')`. Zwraca ona zazwyczaj obiekt z różnymi klasami, funkcjami, zmiennymi dostępnymi w module. Zazwyczaj przypisujemy go do zmiennej, np.:

```JavaScript
const myModule = require('myModule');
```

> Dobrą praktyką jest umieszczanie wszelkich `require()` na samej górze pliku.

Możesz znać ten zapis z front-endu, możesz również kojarzyć nowszy zapis z ES6 - `import...` - jego działanie jest podobne do `require`.

> Jeżeli znasz składnię `import` to dobrze. Ale w Node.js stosujemy `require()`. Obecnie nie ma bowiem bezpośredniego wsparcia dla `import`. Takie wsparcie prawdopodobnie niedługo się pojawi, ale `import` będzie działał nieco odmiennie ze względu na specyfikę Node.

## Moduł `fs`

Jednym z wbudowanych w Node.js modułów jest `fs`. Ta krótka nazwa pochodzi od ang. _file system_. Jak sama nazwa wskazuje - posłuży on nam do operacji na plikach. Dokładnie tego się dzisiaj nauczymy - będziemy odczytywać, zapisywać i sprawdzać pliki na dysku.

Aby wykorzystać moduł `fs` będziemy od teraz na początku plików naszego programu pisali:

```JavaScript
const fs = require('fs');
```

Pamiętaj o tym! Pod zmienną `fs` będą się teraz kryły możliwości operacji na plikach. Nauczymy się teraz najważniejszych z nich:

## Odczyt pliku

Odczyt pliku odbywa się za pomocą **asynchronicznej** funkcji `fs.readFile('nazwa pliku', opcje, funkcjaCallback)`.

Czas na kilka ważnych, mocno technicznych informacji. Najpierw trochę teorii - potem zobaczysz, że w praktyce wcale nie jest to takie straszne :)

### Słowo o asynchroniczności

Funkcja `fs.readFile()` jak wiele innych w Node.js jest asynchroniczna. Oznacza to, że **Node.js nie będzie czekał na zakończenie odczytu pliku - od razu przejdzie do kolejnej linijki kodu!**

To bardzo duża zaleta Node.js, dlatego że niezależnie od tego czy plik ma np. 1KB czy 1TB, jego odczyt nie blokuje całego programu. Minusem jest natomiast to, że nie wystarczy pisać linijki pod linijką.

Trzeba wykorzystać funkcję callback - znasz tę koncepcję np. z AJAX-a, eventów czy funkcji czasu.

<img src="https://blog.4psa.com/wp-content/uploads/callback-syndrome-cause.jpg" alt="Callbacki w asynchroniczności" width="800">

### Callback w stylu Node

Możesz spotkać się z nazwą `Node-style callback` lub podobną. Jest to nazwa pewnej konwencji przyjętej w Node.js: **funkcja callback przyjmuje dwa parametry w tej kolejności:**



- Pierwszy parametr to obiekt ewentualnego błędu. Jeżeli jest równy `null` to znaczy, że błędu nie było. W przeciwnym wypadku przechowuje informacje o błędzie.
- Drugi argument to ewentualne dane zwrotne. Jeżeli nie wystąpi błąd to może zawierać np. w przypadku funkcji `fs.readFile()` zawartość pliku. Ten parametr może nie istnieć, np. dla zapisu pliku po prostu go omijamy.


### Wracając do odczytu pliku...

Teraz praktyka - jak w końcu odczytać ten plik? Np. w ten sposób:

```JavaScript
const fs = require('fs');

fs.readFile('/home/some/file.txt', 'utf8', (err, data) => {
    if (err === null){
        console.log('Poprawnie odczytano plik.', data);
    } else {
        console.log('Błąd podczas odczytu pliku!', err);
    }
});
```

Zwróć uwagę na zapis. Dopiero po odczytaniu pliku Node.js wraca do naszej funkcji callback.

Następnie w środku sprawdzamy czy wystąpił błąd - możemy to zrobić porównując obiekt błędu do `null`. `null` oznacza brak błędu, cokolwiek innego - faktyczne wystąpienie jakiegoś problemu (np. plik nie istniał).

Jeżeli wolisz, tutaj masz wersję z komentarzami:

```JavaScript
const fs = require('fs');

//Odczytaj plik...
fs.readFile('/home/some/file.txt', 'utf8', (err, data) => {//...kiedy skończysz uruchom naszą funkcję callback
    if (err === null){ //Sprawdzamy czy obiekt błędu jest null-em - jeżeli tak - wyświetlamy zawartość pliku
        console.log('Poprawnie odczytano plik.', data);
    } else { //Jeżeli obiekt błędu nie był null-em, to pojawił się błąd - np. plik nie istniał
        console.log('Błąd podczas odczytu pliku!', err);
    }
});
```

Możesz też zauważyć, że jako środkowy parametr opcji przekazaliśmy `'utf8'` - sygnalizuje to Node-owi, że odczytujemy plik tekstowy i chcemy uzyskać z niego tekst.

## Zapis plików

Wiemy już w jaki sposób może wyglądać odczyt plików. A jak można zrealizować ich zapis lub modyfikacja?

Tutaj z pomocą przychodzi nam funkcja `fs.writeFile('nazwa pliku', daneDoZapisania, funkcjaCallback)`.

W przypadku funkcji callbacku dla zapisu nie otrzymujemy żadnych danych zwrotnych - możemy zatem jedynie sprawdzić czy był jakiś błąd. Poniżej cały przykład zapisu:

```JavaScript
const fs = require('fs');

fs.writeFile('./data/file.txt', 'Hello, World!', err => {
    if (err === null){
        console.log('Zapisano poprawnie!');
    } else {
        console.log('Błąd podczas zapisu pliku!', err);
    }
});
```

Zwróć uwagę na zapis - jest on bardzo podobny do tego, który używaliśmy do odczytu pliku. Dopiero po zapisaniu pliku Node.js wraca do naszej funkcji callback.

Następnie w środku sprawdzamy czy wystąpił błąd - możemy to zrobić porównując obiekt błędu do `null`. `null` oznacza brak błędu, cokolwiek innego - faktyczne wystąpienie jakiegoś problemu (np. podaliśmy niepoprawną ścieżkę).

Jeżeli wolisz, tutaj masz wersję z komentarzami:

```JavaScript
const fs = require('fs');

//Zapisz plik...
fs.writeFile('./data/file.txt', 'Hello, World!', err => {//...kiedy skończysz uruchom naszą funkcję callback
    if (err === null){ //Sprawdzamy czy obiekt błędu jest null-em - jeżeli tak - wszystko poszło ok
        console.log('Zapisano poprawnie!');
    } else { //Jeżeli obiekt błędu nie był null-em, to pojawił się błąd - np. niepoprawna ścieżka
        console.log('Błąd podczas zapisu pliku!', err);
    }
});
```

## Kompletny przykład

Poniższy kod realizuje zadanie zapisu danych do pliku, a następnie ich odczyt:

```JavaScript
const fs = require('fs');

//Zapisz plik...
fs.writeFile('./data/file.txt', 'Hello, World!', err => {//Zapis: ...kiedy skończysz uruchom naszą funkcję callback
    if (err === null){ //Zapis: Sprawdzamy czy obiekt błędu jest null-em - jeżeli tak - wszystko poszło ok
    
        //Odczytaj plik...
        fs.readFile('./data/file.txt', 'utf8', (err, data) => {//Odczyt: ...kiedy skończysz uruchom naszą funkcję callback
            if (err === null){ //Odczyt: Sprawdzamy czy obiekt błędu jest null-em - jeżeli tak - wyświetlamy zawartość pliku
                console.log('Poprawnie zapisano i odczytano plik.', data);
            } else { //Odczyt: Jeżeli obiekt błędu nie był null-em, to pojawił się błąd - np. plik nie istniał
                console.log('Błąd podczas odczytu pliku!', err);
            }
        });
        
    } else { //Zapis: Jeżeli obiekt błędu nie był null-em, to pojawił się błąd - np. niepoprawna ścieżka
        console.log('Błąd podczas zapisu pliku!', err);
    }
});
```

Zwróć szczególną uwagę na zagnieżdżenia - musimy pamiętać o odpowiedniej kolejności.

## Odczyt listy plików z katalogu

Kolejną ciekawą funkcją modułu `fs` jest możliwość zlistowania plików i folderów znajdujących się w danym folderze.

Wykonujemy to za pomocą funkcji `fs.readdir('ścieżka/do/folderu', funkcjaCallback)`.

Oto przykład wykorzystania - wyświetli on nazwy wszystkich plików i folderów w folderze `/home/ja`:

```JavaScript
const fs = require('fs');

fs.readdir('/home/ja', (err, files) => {
    if (err === null){
        console.log('Lista plików:');
        files.forEach(file => {
            console.log(file);
        });
    } else {
        console.log('Błąd podczas listowania katalogu!', err);
    }
});
```

Jak widzisz - zasady są tu takie same jak w przypadku innych asynchronicznych funkcji. Daną zwrotną, którą otrzymujemy w callbacku jest tutaj tablica nazw plików.

Jeżeli wolisz, tutaj masz wersję z komentarzami:

```JavaScript
const fs = require('fs');

//Odczytaj listę plików i folderów...
fs.readdir('/home/ja', (err, files) => {//...kiedy skończysz uruchom naszą funkcję callback
    if (err === null){ //Sprawdzamy czy obiekt błędu jest null-em - jeżeli tak - wszystko poszło ok
        console.log('Lista plików:');
        files.forEach(file => {
            console.log(file);
        });
    } else {//Jeżeli obiekt błędu nie był null-em, to pojawił się błąd - np. niepoprawna ścieżka
        console.log('Błąd podczas listowania katalogu!', err);
    }
});
```

Moduł `fs` dostarcza jeszcze szereg innych możliwości - np. pobierania informacji o dacie stworzenia czy rozmiarze pliku; śledzenie zmian w plikach; zaawansowane przetwarzanie plików i wiele innych. Dzisiaj poznaliśmy najważniejsze funkcje związane z plikami - zapis, odczyt i listowanie.

# Ćwiczenia

> Ćwiczenia wykonuj w odpowiednich plikach. W folderze `app` są one ponumerowane tak samo jak poniżej - zadaniu `1. Rozgrzewka` odpowiada plik `app/zadanie01.js` itd.
> Aby uruchomić zadanie podaj jego nazwę (pamiętaj, aby linia komend/terminal był otwarty na katalogu `app` tego repozytorium), np.:
> ```cmd
> node ./zadanie01.js
> ```

## 1. Przetwarzanie danych

Napisz program, w którym otworzysz plik znajdujący się w `app/data/zadanie01/input.json` (z poziomu Twojego programu to będzie plik `./data/zadanie01/input.json`).

Jest to tablica liczb w formacie JSON. Aby ją rozkodować do tablicy JS skorzystaj z `JSON.parse(daneWejsciowe)`.

Następnie zsumuj wszystkie liczby, a wynik zapisz tekstem do pliku `app/data/zadanie01/sum.txt`.

Pamiętaj, że funkcje odczytu i zapisu są asynchronicze! Twój kod powinien odpowiadać takiemu pseudokodowi:

```
ODCZYT PLIKU
    KIEDY SKOŃCZY - CALLBACK:
    ZMIANA JSONA NA TABLICĘ
    WYKONANIE SUMY
    ZAPIS PLIKU
        KIERY SKOŃCZY - CALLBACK:
        INFORMACJA O POWODZENIU LUB BŁĘDZIE
```

Nie zapomnij o `require()` dla odpowiedniego modułu.

## 2. Zawartość wszystkich plików w katalogu

Napisz program, który wyświetli zawartość wszystkich plików w folderze `app/data/zadanie02/`.

Skorzystaj z możliwości listowania plików w folderze. Po otrzymaniu listy plików wyświetlaj je w pętli.

Pamiętaj, że funkcje listowania i odczytu są asynchronicze! Twój kod powinien odpowiadać takiemu pseudokodowi:

```
LISTOWANIE ZAWARTOŚCI KATALOGU
    KIEDY SKOŃCZY - CALLBACK:
    PĘTLA DLA KAŻDEJ NAZWY PLIKU
    ODCZYT PLIKU
        KIERY SKOŃCZY - CALLBACK:
        WYŚWIETLENIE ZAWARTOŚCI PLIKU LUB INFORMACJI BŁĘDZIE
```

## Zadanie dnia: Program TrAwKa

Dzisiejsze zadanie dnia pozwoli Ci stworzyć program "TrAwKa". Ma on modyfikować plik tekstowy w taki sposób, aby każdy nieparzysty znak był pisany wielką literą, a parzysty małą literą.

Efekt będzie nieco przypominał nieprzystrzyżony trawnik ;) Np. plik z zawartością `Hello, World!` zamieni na `HeLlO, wOrLd!`.

Wykorzystaj wiedzę z dnia pierwszego i spraw, aby nazwa pliku do modyfikacji mogła być podawana jako argument Twojego programu Node.

Pamiętaj, że funkcje odczytu i zapisu są asynchronicze! Twój kod powinien odpowiadać takiemu pseudokodowi:

```
ODCZYT PLIKU
    KIEDY SKOŃCZY - CALLBACK:
    ZMIANA TEKSTU WEDŁUG WZORU
    ZAPIS TAKIEGO SAMEGO PLIKU
        KIERY SKOŃCZY - CALLBACK:
        INFORMACJA O POWODZENIU LUB BŁĘDZIE
```

**Zawsze wykonuj kopię zapasową pliku na którym operujesz!**

Do testu możesz posłużyć się plikiem w `app/data/zadanieDnia/test.txt` np. w ten sposób:

```cmd
node zadanieDnia.js ./data/zadanieDnia/test.txt
```

**To wszystko na dziś - gratulacje! Do jutra :)**

<!-- Links -->
[forking]: https://guides.github.com/activities/forking/
[ref-clone]: http://gitref.org/creating/#clone
[es6-tutorial]: http://qnimate.com/post-series/ecmascript-6-complete-tutorial/
[download-node]: https://nodejs.org/en/download/