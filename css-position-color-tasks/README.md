Treść do zadania – ułóż elementy za pomocą position

Ułóż kwadraty.
Każdy kwadrat będzie miał taką samą odległość od top, więc można zaoszczędzić kilka linijek kodu. 😉

Aby ułożyć kwadraty obok siebie, możesz kombinować z pikselami, ale spróbuj użyć %, dzięki czemu odległości będą automatycznie wyliczane.

Jeśli uda Ci się ułożyć je za pomocą %, odkomentuj transform: translateX(-50%); w .square.

Spokojnie – w kolejnym odcinku wytłumaczę, o co chodzi z tą właściwością. 😉

Kiedy kwadraty będą na swoich miejscach, zmień kursor na "łapkę" (domyślnie będzie strzałka).

Przeanalizuj strukturę w HTML i za pomocą kombinatorów (a raczej jednego) zrób tak, aby po najechaniu na dany kwadrat, tło strony zmieniało się na jego kolor.
Pamiętaj o pseudoklasie, która odpowiada za najechanie. 😉
Używaliśmy jej w odcinku o stylowaniu przycisków.

Podpowiedź: zastanów się jakby to miało działać, jaka tu ma być logika.
Co ma się stać, żeby coś się zadziało?

Kiedy kolor tła będzie się zmieniał, spróbuj nadać transition, aby animacja była płynna.

Podpowiedź: transition nadajemy na elemencie, który jest animowany!



Treść zadania – zoom, move & color
1: Ostyluj przyciski:

czcionka Nunito,

szerokość 120px,

position absolute, top: 50px,

left: spróbujcie % i transform z poprzedniego odcinka,

padding 10px góra / dół, 30px po bokach,

brak tła,

biała, pogrubiona czcionka,

białe obramowanie 3px,

zaokrąglenie obramowania 5px,

odstępy między literami 2px,

zmiana małych liter na wielkie,

kursor łapka.

2: Po najechaniu na przycisk:

tło białe,

czcionka czarna,

płynna animacja.

3: Ostyluj kwadraty:

position absolute, top: 150px,

left: zrób to co przy przyciskach,

wymiary: 100px / 100px,

zaokrąglenie 25px,

nadaj kolor tła jak na podglądzie, cień ma ten sam kolor,

rozmycie cienia 15px, brak przesunięcia na osiach X oraz Y,

border 2px solid [ciemniejszy odcień kwadratu].

4: Nadaj akcje (wszysto ma być płynne):

zoom: ma powiększyć kwadraty,

move: ma przesunąć kwadraty w dół,

color: ma zmienić kolor kwadratów i cienia na czarny, obramowanie białe.