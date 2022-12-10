Treść zadania – transform & transition


Stwórz <div> z klasami long (czerwony), short (niebieski), short2 (żółty), short3 (zielony) i center (przeźroczysty).
Dodaj im czarny border 2px i ustaw kolor tła taki jak podany w nawiasie.

div.long – szerokość: 800px, wysokość: 60px, top: 50px, left: wyśrodkuj za pomocą calc().

Po najechaniu, prostokąt powiększa się (scale), zwęża, zmienia kolor oraz pozostaje na środku!
Animacja ma być płynna.


div.short – szerokość: 300px, wysokość 60px, top: 180px, left: wyśrodkuj za pomocą calc(). Zaokrąglij rogi 25px.
Po najechaniu, <div> ma się obrócić o 360deg (rotate).
Animacja 1s, linear.


div.short2 i div.short3 – rozmiary jak div.short, top: 300px, left: użyj calc().
Tagi <div> mają mieć lekko zaokrąglone rogi (10px), mają obrócić się o 360deg po obrocie .short (z czego jeden obraca się w prawo, drugi w lewo).
Czas animacji – 1s.


div.center – wyśrodkuj za pomocą transform. Wysokość: 200px, szerokość 400px. Po najechaniu, tło ma być białe, a tekst czarny.

Wpisz tekst do tagów <div>. Wyśrodkuj tekst na osi X oraz Y. Nie korzystaj przy tym z transform. Użyj czegoś związanego z center i wysokością linii. 😉

Spójrz w kod – zastanów się, jak można go zoptymalizować.




Treść zadania z media queries


Stwórz .square. Nadaj mu wymiary 300px x 300px.
Body ma mieć wysokość 100vh.

Oryginalnie .square ma mieć kolor gold, od breakpointa 500px ma mieć kolor royalblue, a od 700px ma być lime.

Od 550px do 850px .square ma mieć szerokość 450px.
Powyżej 850px ma wrócić do swojej domyślnej szerokości.

Body ma mieć domyślnie kolor #333. Od breakpointa 800px ma być nadany dowolny gradient.