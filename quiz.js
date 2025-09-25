const quizzes = {
  "general": [
    
    { "q": "What is the capital of France?", "options": ["London", "Paris", "Rome", "Berlin"], "answer": 1 },
    { "q": "Which planet is known as the Red Planet?", "options": ["Venus", "Mars", "Jupiter", "Saturn"], "answer": 1 },
    { "q": "Who wrote the national anthem of India?", "options": ["Bankim Chandra", "Rabindranath Tagore", "Mahatma Gandhi", "Sarojini Naidu"], "answer": 1 },
    { "q": "What is the largest mammal?", "options": ["Elephant", "Blue Whale", "Giraffe", "Shark"], "answer": 1 },
    { "q": "Which gas do plants absorb?", "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], "answer": 1 },
    { "q": "Which animal is called the King of the Jungle?", "options": ["Tiger", "Lion", "Elephant", "Cheetah"], "answer": 1 },
    { "q": "Which country is called the Land of the Rising Sun?", "options": ["China", "Japan", "India", "Korea"], "answer": 1 },
    { "q": "Which planet is farthest from the Sun?", "options": ["Neptune", "Uranus", "Pluto", "Saturn"], "answer": 0 },
    { "q": "Which is the longest river in the world?", "options": ["Amazon", "Nile", "Ganga", "Yangtze"], "answer": 1 },
    { "q": "National fruit of India?", "options": ["Mango", "Banana", "Apple", "Guava"], "answer": 0 },
    { "q": "Which language has the most native speakers?", "options": ["English", "Mandarin", "Hindi", "Spanish"], "answer": 1 },
    { "q": "Who painted the Mona Lisa?", "options": ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"], "answer": 1 },
    { "q": "Which is the smallest continent by area?", "options": ["Europe", "Australia", "Antarctica", "South America"], "answer": 1 },
    { "q": "Which element has the chemical symbol 'O'?", "options": ["Gold", "Oxygen", "Osmium", "Oganesson"], "answer": 1 },
    { "q": "Which ocean is the largest?", "options": ["Atlantic", "Indian", "Pacific", "Arctic"], "answer": 2 },
    { "q": "Which is the fastest land animal?", "options": ["Lion", "Cheetah", "Tiger", "Leopard"], "answer": 1 },
    { "q": "What is the boiling point of water?", "options": ["90°C", "100°C", "110°C", "120°C"], "answer": 1 },
    { "q": "Which planet is closest to the Sun?", "options": ["Mercury", "Venus", "Earth", "Mars"], "answer": 0 },
    { "q": "Which is the largest desert in the world?", "options": ["Sahara", "Kalahari", "Gobi", "Antarctica"], "answer": 3 },
    { "q": "Which year did World War II end?", "options": ["1944", "1945", "1946", "1947"], "answer": 1 },
    { "q": "Which instrument has black and white keys?", "options": ["Guitar", "Piano", "Violin", "Flute"], "answer": 1 },
    { "q": "Which country gifted the Statue of Liberty to the USA?", "options": ["UK", "France", "Germany", "Italy"], "answer": 1 },
    { "q": "Which is the largest planet in the solar system?", "options": ["Earth", "Jupiter", "Saturn", "Mars"], "answer": 1 },
    { "q": "Which scientist developed the theory of relativity?", "options": ["Newton", "Einstein", "Galileo", "Tesla"], "answer": 1 },
    { "q": "Which country is home to the kangaroo?", "options": ["USA", "South Africa", "Australia", "India"], "answer": 2 },
    { "q": "Which vitamin is produced when the skin is exposed to sunlight?", "options": ["A", "B", "C", "D"], "answer": 3 },
    { "q": "Which country has the most population?", "options": ["USA", "China", "India", "Russia"], "answer": 1 },
    { "q": "Which gas is essential for humans to breathe?", "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"], "answer": 0 },
    { "q": "Which is the largest land animal?", "options": ["Elephant", "Giraffe", "Hippopotamus", "Rhino"], "answer": 0 },
    { "q": "Which famous scientist is known for gravity?", "options": ["Newton", "Einstein", "Tesla", "Curie"], "answer": 0 },
    { "q": "Which is the longest bone in the human body?", "options": ["Femur", "Tibia", "Humerus", "Fibula"], "answer": 0 },
    { "q": "Which country is called the Land of the Midnight Sun?", "options": ["Norway", "Sweden", "Finland", "Iceland"], "answer": 0 },
    { "q": "Which is the tallest mountain in the world?", "options": ["K2", "Everest", "Kangchenjunga", "Lhotse"], "answer": 1 },
    { "q": "Which blood type is known as the universal donor?", "options": ["A", "B", "AB", "O"], "answer": 3 },
    { "q": "Which organ purifies blood in the human body?", "options": ["Heart", "Kidney", "Liver", "Lungs"], "answer": 1 },
    { "q": "Which country hosted the 2016 Summer Olympics?", "options": ["China", "Brazil", "UK", "Russia"], "answer": 1 },
    { "q": "Which continent has the most countries?", "options": ["Africa", "Asia", "Europe", "South America"], "answer": 0 },
    { "q": "Which is the hardest natural substance on Earth?", "options": ["Gold", "Diamond", "Iron", "Quartz"], "answer": 1 },
    { "q": "Which planet is known for its rings?", "options": ["Mars", "Jupiter", "Saturn", "Uranus"], "answer": 2 },
    { "q": "Which city is called the Big Apple?", "options": ["Los Angeles", "Chicago", "New York", "Boston"], "answer": 2 },
    { "q": "Which language is used for web development?", "options": ["HTML", "French", "Spanish", "Latin"], "answer": 0 },
    { "q": "Which is the largest ocean?", "options": ["Atlantic", "Indian", "Arctic", "Pacific"], "answer": 3 },
    { "q": "Which scientist discovered penicillin?", "options": ["Alexander Fleming", "Marie Curie", "Newton", "Einstein"], "answer": 0 },
    { "q": "Which element is represented by 'Na'?", "options": ["Sodium", "Nitrogen", "Nickel", "Neon"], "answer": 0 },
    { "q": "Which country is famous for the Eiffel Tower?", "options": ["Italy", "Spain", "France", "Germany"], "answer": 2 },
    { "q": "Which organ is responsible for pumping blood?", "options": ["Heart", "Liver", "Lungs", "Kidney"], "answer": 0 },
    { "q": "Which is the smallest planet in the solar system?", "options": ["Mercury", "Mars", "Venus", "Earth"], "answer": 0 },
    { "q": "Which animal lays the largest eggs?", "options": ["Ostrich", "Chicken", "Crocodile", "Turtle"], "answer": 0 },
    { "q": "Which river is the longest in Asia?", "options": ["Yangtze", "Ganges", "Mekong", "Indus"], "answer": 0 },
    { "q": "Which country has the most natural lakes?", "options": ["Canada", "USA", "Russia", "Brazil"], "answer": 0 },
    { "q": "Which is the first element on the periodic table?", "options": ["Hydrogen", "Helium", "Oxygen", "Carbon"], "answer": 0 },
    { "q": "Which bird is known for mimicking human speech?", "options": ["Parrot", "Crow", "Sparrow", "Eagle"], "answer": 0 },
    { "q": "Which is the largest island in the world?", "options": ["Greenland", "Madagascar", "Borneo", "Sumatra"], "answer": 0 },
    { "q": "Which country invented paper?", "options": ["China", "Egypt", "Greece", "India"], "answer": 0 }
  ],
  "movies": [
{ "q": "Who directed Titanic?", "options": ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Peter Jackson"], "answer": 0 },
  { "q": "Which movie features the song 'Hakuna Matata'?", "options": ["The Lion King", "Aladdin", "Frozen", "Moana"], "answer": 0 },
  { "q": "Who played Iron Man?", "options": ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"], "answer": 1 },
  { "q": "Which movie won Best Picture in 2020 Oscars?", "options": ["Joker", "Parasite", "1917", "Ford v Ferrari"], "answer": 1 },
  { "q": "In which movie is 'I'll be back'?", "options": ["Terminator", "Die Hard", "Predator", "RoboCop"], "answer": 0 },
  { "q": "Who voiced Elsa in Frozen?", "options": ["Demi Lovato", "Idina Menzel", "Selena Gomez", "Miley Cyrus"], "answer": 1 },
  { "q": "Which movie has a character named Jack Sparrow?", "options": ["Harry Potter", "Pirates of the Caribbean", "Avatar", "The Hobbit"], "answer": 1 },
  { "q": "Which movie is about a sinking ship?", "options": ["Titanic", "Inception", "Jaws", "Aquaman"], "answer": 0 },
  { "q": "Which animated film features Woody and Buzz?", "options": ["Cars", "Toy Story", "Shrek", "Finding Nemo"], "answer": 1 },
  { "q": "Who played Joker in The Dark Knight?", "options": ["Jared Leto", "Heath Ledger", "Joaquin Phoenix", "Jack Nicholson"], "answer": 1 },
  { "q": "Which movie features the quote 'May the Force be with you'?", "options": ["Star Wars", "Star Trek", "Guardians of the Galaxy", "Avatar"], "answer": 0 },
  { "q": "Who directed Inception?", "options": ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Quentin Tarantino"], "answer": 0 },
  { "q": "Which movie is about a clown terrorizing children?", "options": ["It", "Joker", "The Shining", "Annabelle"], "answer": 0 },
  { "q": "Which movie is based on a true story of chess?", "options": ["The Queen's Gambit", "Searching for Bobby Fischer", "Pawn Sacrifice", "Both b and c"], "answer": 3 },
  { "q": "Who played Harry Potter?", "options": ["Daniel Radcliffe", "Elijah Wood", "Tom Holland", "Rupert Grint"], "answer": 0 },
  { "q": "Which movie features a talking raccoon?", "options": ["Guardians of the Galaxy", "Zootopia", "Finding Nemo", "Shrek"], "answer": 0 },
  { "q": "Which director made Jurassic Park?", "options": ["Steven Spielberg", "James Cameron", "Peter Jackson", "Christopher Nolan"], "answer": 0 },
  { "q": "Which movie is set in the future and features replicants?", "options": ["Blade Runner", "The Matrix", "I, Robot", "Minority Report"], "answer": 0 },
  { "q": "Which actor played Jack Dawson in Titanic?", "options": ["Leonardo DiCaprio", "Brad Pitt", "Tom Cruise", "Matt Damon"], "answer": 0 },
  { "q": "Which movie is about a toy cowboy and a space ranger?", "options": ["Cars", "Toy Story", "Shrek", "Kung Fu Panda"], "answer": 1 },
  { "q": "Which film won Best Animated Feature in 2019?", "options": ["Spider-Man: Into the Spider-Verse", "Incredibles 2", "Coco", "Toy Story 4"], "answer": 0 },
  { "q": "Who played Captain Jack Sparrow?", "options": ["Johnny Depp", "Orlando Bloom", "Tom Hanks", "Matt Damon"], "answer": 0 },
  { "q": "Which actor played Deadpool?", "options": ["Ryan Reynolds", "Chris Evans", "Hugh Jackman", "Robert Downey Jr."], "answer": 0 },
  { "q": "Which movie features the character Thanos?", "options": ["Avengers", "Justice League", "X-Men", "Spider-Man"], "answer": 0 },
  { "q": "Which film features a magical nanny named Mary Poppins?", "options": ["Mary Poppins", "Nanny McPhee", "The Sound of Music", "Matilda"], "answer": 0 },
  { "q": "Who directed The Lord of the Rings trilogy?", "options": ["Peter Jackson", "Christopher Nolan", "Steven Spielberg", "James Cameron"], "answer": 0 },
  { "q": "Which movie is about an alien named E.T.?", "options": ["E.T.", "Avatar", "Men in Black", "The Fifth Element"], "answer": 0 },
  { "q": "Which actor played the Hulk in Avengers?", "options": ["Mark Ruffalo", "Chris Hemsworth", "Robert Downey Jr.", "Chris Evans"], "answer": 0 },
  { "q": "Which movie has a time-traveling DeLorean?", "options": ["Back to the Future", "Looper", "Interstellar", "The Time Machine"], "answer": 0 },
  { "q": "Which animated film features the song 'Let It Go'?", "options": ["Frozen", "Moana", "Tangled", "Brave"], "answer": 0 },
  { "q": "Which actor played the main character in Joker 2019?", "options": ["Joaquin Phoenix", "Heath Ledger", "Jack Nicholson", "Jared Leto"], "answer": 0 },
  { "q": "Which actress played Hermione Granger?", "options": ["Emma Watson", "Emma Stone", "Natalie Portman", "Keira Knightley"], "answer": 0 },
  { "q": "Which movie features 'The Matrix'?", "options": ["Keanu Reeves", "Tom Cruise", "Brad Pitt", "Johnny Depp"], "answer": 0 },
  { "q": "Which Disney movie features Simba?", "options": ["The Lion King", "Aladdin", "Mulan", "Hercules"], "answer": 0 },
  { "q": "Which actor played Spider-Man in MCU?", "options": ["Tom Holland", "Tobey Maguire", "Andrew Garfield", "Chris Evans"], "answer": 0 },
  { "q": "Which movie is about dreams within dreams?", "options": ["Inception", "Shutter Island", "Interstellar", "Memento"], "answer": 0 },
  { "q": "Who played Thor in MCU?", "options": ["Chris Hemsworth", "Chris Pratt", "Chris Evans", "Mark Ruffalo"], "answer": 0 },
  { "q": "Which movie features the Avengers fighting Thanos?", "options": ["Avengers: Infinity War", "Avengers: Endgame", "Both", "Neither"], "answer": 2 },
  { "q": "Which actor played Black Panther?", "options": ["Chadwick Boseman", "Michael B. Jordan", "Idris Elba", "Anthony Mackie"], "answer": 0 },
  { "q": "Which animated movie features the characters Mike and Sulley?", "options": ["Monsters, Inc.", "Shrek", "Finding Nemo", "Toy Story"], "answer": 0 },
  { "q": "Which film features the song 'Circle of Life'?", "options": ["The Lion King", "Aladdin", "Frozen", "Coco"], "answer": 0 },
  { "q": "Which actor played Deadpool?", "options": ["Ryan Reynolds", "Chris Evans", "Hugh Jackman", "Robert Downey Jr."], "answer": 0 },
  { "q": "Which movie is about a princess with magical ice powers?", "options": ["Frozen", "Tangled", "Moana", "Brave"], "answer": 0 },
  { "q": "Who played Captain America?", "options": ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"], "answer": 0 },
  { "q": "Which movie has the quote 'You shall not pass!'?", "options": ["The Lord of the Rings", "Harry Potter", "The Hobbit", "The Chronicles of Narnia"], "answer": 0 },
  { "q": "Which actor played the Joker in 2008?", "options": ["Heath Ledger", "Joaquin Phoenix", "Jared Leto", "Jack Nicholson"], "answer": 0 },
  { "q": "Which movie is about a magical school called Hogwarts?", "options": ["Harry Potter", "Percy Jackson", "Twilight", "Fantastic Beasts"], "answer": 0 },
  { "q": "Which film features the character Woody?", "options": ["Toy Story", "Cars", "Shrek", "Monsters, Inc."], "answer": 0 },
  { "q": "Which actress plays Elsa?", "options": ["Idina Menzel", "Demi Lovato", "Kristen Bell", "Miley Cyrus"], "answer": 0 },
  { "q": "Which movie is set in Pandora?", "options": ["Avatar", "Star Wars", "Guardians of the Galaxy", "Interstellar"], "answer": 0 }
  ],
  "geography": [
   { "q": "Which is the largest continent?", "options": ["Africa", "Asia", "Europe", "Australia"], "answer": 1 },
  { "q": "Which country has the Great Wall?", "options": ["India", "China", "Japan", "Mongolia"], "answer": 1 },
  { "q": "Which is the smallest country?", "options": ["Monaco", "Vatican City", "Malta", "Bhutan"], "answer": 1 },
  { "q": "Which is the largest desert?", "options": ["Sahara", "Thar", "Gobi", "Kalahari"], "answer": 0 },
  { "q": "Which country is called the Land Down Under?", "options": ["Australia", "New Zealand", "South Africa", "Argentina"], "answer": 0 },
  { "q": "Which river flows through Egypt?", "options": ["Amazon", "Ganga", "Nile", "Danube"], "answer": 2 },
  { "q": "Which mountain is the tallest?", "options": ["K2", "Everest", "Kangchenjunga", "Makalu"], "answer": 1 },
  { "q": "Which ocean is the largest?", "options": ["Atlantic", "Pacific", "Indian", "Arctic"], "answer": 1 },
  { "q": "Which country is the coldest?", "options": ["Russia", "Canada", "Greenland", "Antarctica"], "answer": 3 },
  { "q": "Which is the hottest continent?", "options": ["Asia", "Australia", "Africa", "South America"], "answer": 2 },
  { "q": "Which is the longest river in the world?", "options": ["Amazon", "Nile", "Yangtze", "Mississippi"], "answer": 1 },
  { "q": "Which country has the most islands?", "options": ["Sweden", "Indonesia", "Philippines", "Canada"], "answer": 1 },
  { "q": "Which country is known as the Land of the Midnight Sun?", "options": ["Norway", "Finland", "Iceland", "Sweden"], "answer": 0 },
  { "q": "Which city is called the Big Apple?", "options": ["Los Angeles", "Chicago", "New York", "Boston"], "answer": 2 },
  { "q": "Which continent is the least populated?", "options": ["Antarctica", "Australia", "Europe", "South America"], "answer": 0 },
  { "q": "Which country has the longest coastline?", "options": ["Canada", "Australia", "USA", "Russia"], "answer": 0 },
  { "q": "Which is the largest lake in the world?", "options": ["Caspian Sea", "Superior", "Victoria", "Huron"], "answer": 0 },
  { "q": "Which mountain range separates Europe and Asia?", "options": ["Himalayas", "Ural Mountains", "Alps", "Andes"], "answer": 1 },
  { "q": "Which desert is the driest place on Earth?", "options": ["Atacama", "Sahara", "Gobi", "Kalahari"], "answer": 0 },
  { "q": "Which country is known as the Pearl of Africa?", "options": ["Uganda", "Kenya", "Tanzania", "Rwanda"], "answer": 0 },
  { "q": "Which is the largest island in the world?", "options": ["Greenland", "Borneo", "Madagascar", "Sumatra"], "answer": 0 },
  { "q": "Which country is known as the Land of a Thousand Lakes?", "options": ["Finland", "Canada", "Norway", "Sweden"], "answer": 0 },
  { "q": "Which is the smallest continent by population?", "options": ["Australia", "Antarctica", "Europe", "South America"], "answer": 1 },
  { "q": "Which country is home to Mount Kilimanjaro?", "options": ["Kenya", "Tanzania", "Uganda", "Ethiopia"], "answer": 1 },
  { "q": "Which ocean borders India to the south?", "options": ["Atlantic", "Indian", "Pacific", "Arctic"], "answer": 1 },
  { "q": "Which river flows through Paris?", "options": ["Seine", "Thames", "Danube", "Rhine"], "answer": 0 },
  { "q": "Which country is the largest by area?", "options": ["USA", "Canada", "Russia", "China"], "answer": 2 },
  { "q": "Which African country has the most pyramids?", "options": ["Egypt", "Sudan", "Morocco", "Algeria"], "answer": 1 },
  { "q": "Which city is known as the City of Canals?", "options": ["Venice", "Amsterdam", "Bruges", "Bangkok"], "answer": 0 },
  { "q": "Which country is famous for the fjords?", "options": ["Norway", "Iceland", "Sweden", "Finland"], "answer": 0 },
  { "q": "Which river is the longest in Europe?", "options": ["Volga", "Danube", "Rhine", "Seine"], "answer": 0 },
  { "q": "Which continent is also a country?", "options": ["Australia", "Greenland", "Antarctica", "Europe"], "answer": 0 },
  { "q": "Which desert is located in northern China?", "options": ["Gobi", "Sahara", "Kalahari", "Thar"], "answer": 0 },
  { "q": "Which mountain is the highest in Africa?", "options": ["Kilimanjaro", "Mount Kenya", "Atlas", "Ruwenzori"], "answer": 0 },
  { "q": "Which country has the most volcanoes?", "options": ["Indonesia", "Japan", "USA", "Italy"], "answer": 0 },
  { "q": "Which city is known as the Eternal City?", "options": ["Athens", "Rome", "Cairo", "Istanbul"], "answer": 1 },
  { "q": "Which country has the most natural lakes?", "options": ["Canada", "Russia", "USA", "Brazil"], "answer": 0 },
  { "q": "Which continent is known as the Dark Continent?", "options": ["Africa", "Asia", "Europe", "South America"], "answer": 0 },
  { "q": "Which country is home to the Dead Sea?", "options": ["Israel", "Jordan", "Both", "Egypt"], "answer": 2 },
  { "q": "Which city is famous for its Red Square?", "options": ["Moscow", "Saint Petersburg", "Kiev", "Warsaw"], "answer": 0 },
  { "q": "Which river flows through London?", "options": ["Seine", "Thames", "Danube", "Rhine"], "answer": 1 },
  { "q": "Which country has the highest population density?", "options": ["India", "Monaco", "Singapore", "Bangladesh"], "answer": 1 },
  { "q": "Which continent has the most countries?", "options": ["Africa", "Asia", "Europe", "South America"], "answer": 0 },
  { "q": "Which ocean is the smallest?", "options": ["Atlantic", "Indian", "Pacific", "Arctic"], "answer": 3 },
  { "q": "Which country is the largest in Africa?", "options": ["Nigeria", "Algeria", "Sudan", "Egypt"], "answer": 1 },
  { "q": "Which city is known as the City of Light?", "options": ["Rome", "Paris", "London", "New York"], "answer": 1 },
  { "q": "Which river flows through Cairo?", "options": ["Nile", "Amazon", "Ganga", "Mississippi"], "answer": 0 },
  { "q": "Which mountain range is in South America?", "options": ["Andes", "Alps", "Rockies", "Himalayas"], "answer": 0 },
  { "q": "Which country is the largest in South America?", "options": ["Argentina", "Brazil", "Colombia", "Chile"], "answer": 1 },
  { "q": "Which country has the longest river in the world?", "options": ["Brazil", "Egypt", "China", "USA"], "answer": 1 },
  { "q": "Which is the smallest continent by area?", "options": ["Europe", "Australia", "Antarctica", "South America"], "answer": 1 },
  { "q": "Which city is home to the Colosseum?", "options": ["Athens", "Rome", "Istanbul", "Cairo"], "answer": 1 },
  { "q": "Which desert is located in northern Africa?", "options": ["Sahara", "Gobi", "Kalahari", "Thar"], "answer": 0 }
  ],
  "science": [
 { "q": "What is H2O?", "options": ["Oxygen", "Water", "Hydrogen", "Helium"], "answer": 1 },
  { "q": "Which planet has rings?", "options": ["Mars", "Saturn", "Jupiter", "Venus"], "answer": 1 },
  { "q": "What force pulls us to Earth?", "options": ["Magnetism", "Gravity", "Friction", "Tension"], "answer": 1 },
  { "q": "What part of the plant makes food?", "options": ["Root", "Stem", "Leaf", "Flower"], "answer": 2 },
  { "q": "What gas do humans breathe in?", "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], "answer": 0 },
  { "q": "What organ pumps blood?", "options": ["Lungs", "Brain", "Heart", "Kidney"], "answer": 2 },
  { "q": "Which planet is closest to the Sun?", "options": ["Mercury", "Venus", "Earth", "Mars"], "answer": 0 },
  { "q": "Which metal is liquid at room temp?", "options": ["Gold", "Silver", "Mercury", "Iron"], "answer": 2 },
  { "q": "What is the speed of light?", "options": ["300,000 km/s", "150,000 km/s", "1,000 km/s", "30,000 km/s"], "answer": 0 },
  { "q": "What vitamin do we get from sunlight?", "options": ["A", "B", "C", "D"], "answer": 3 },
  { "q": "Which gas is most abundant in Earth's atmosphere?", "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], "answer": 1 },
  { "q": "What is the chemical symbol for gold?", "options": ["Au", "Ag", "Gd", "Go"], "answer": 0 },
  { "q": "What is the powerhouse of the cell?", "options": ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"], "answer": 1 },
  { "q": "Which planet is known as the Red Planet?", "options": ["Venus", "Mars", "Jupiter", "Saturn"], "answer": 1 },
  { "q": "Which gas is used in balloons to make them float?", "options": ["Hydrogen", "Oxygen", "Helium", "Carbon Dioxide"], "answer": 2 },
  { "q": "What is the basic unit of life?", "options": ["Atom", "Molecule", "Cell", "Organ"], "answer": 2 },
  { "q": "Which planet is known for its Great Red Spot?", "options": ["Mars", "Jupiter", "Saturn", "Neptune"], "answer": 1 },
  { "q": "Which organ filters blood in the human body?", "options": ["Liver", "Kidney", "Heart", "Lungs"], "answer": 1 },
  { "q": "What is the boiling point of water?", "options": ["100°C", "90°C", "80°C", "120°C"], "answer": 0 },
  { "q": "Which vitamin is essential for blood clotting?", "options": ["Vitamin A", "Vitamin B12", "Vitamin K", "Vitamin D"], "answer": 2 },
  { "q": "Which element has the atomic number 1?", "options": ["Hydrogen", "Helium", "Oxygen", "Carbon"], "answer": 0 },
  { "q": "Which planet is known as the Morning Star?", "options": ["Venus", "Mars", "Jupiter", "Mercury"], "answer": 0 },
  { "q": "What is the chemical symbol for iron?", "options": ["Ir", "Fe", "In", "I"], "answer": 1 },
  { "q": "Which planet is the largest in the solar system?", "options": ["Jupiter", "Saturn", "Earth", "Neptune"], "answer": 0 },
  { "q": "Which gas do plants release during photosynthesis?", "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], "answer": 0 },
  { "q": "Which blood cells fight infection?", "options": ["Red blood cells", "White blood cells", "Platelets", "Plasma"], "answer": 1 },
  { "q": "What is the chemical symbol for sodium?", "options": ["Na", "S", "So", "Sd"], "answer": 0 },
  { "q": "Which organ is responsible for producing insulin?", "options": ["Liver", "Pancreas", "Kidney", "Heart"], "answer": 1 },
  { "q": "Which planet spins on its side?", "options": ["Uranus", "Neptune", "Saturn", "Jupiter"], "answer": 0 },
  { "q": "Which part of the brain controls balance?", "options": ["Cerebrum", "Cerebellum", "Medulla", "Pons"], "answer": 1 },
  { "q": "What is the freezing point of water?", "options": ["0°C", "32°C", "-1°C", "100°C"], "answer": 0 },
  { "q": "Which is the lightest element?", "options": ["Hydrogen", "Helium", "Lithium", "Carbon"], "answer": 0 },
  { "q": "What type of blood do humans have?", "options": ["O positive", "A positive", "B positive", "All of the above"], "answer": 3 },
  { "q": "Which planet has the fastest rotation?", "options": ["Jupiter", "Mars", "Earth", "Saturn"], "answer": 0 },
  { "q": "Which gas do humans exhale?", "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], "answer": 1 },
  { "q": "Which organ is the largest inside the human body?", "options": ["Liver", "Heart", "Lungs", "Brain"], "answer": 0 },
  { "q": "Which gas is essential for respiration?", "options": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"], "answer": 1 },
  { "q": "What type of energy comes from the Sun?", "options": ["Thermal", "Solar", "Kinetic", "Chemical"], "answer": 1 },
  { "q": "What is the human skeleton made of?", "options": ["Cartilage", "Bone", "Muscle", "Ligament"], "answer": 1 },
  { "q": "Which planet has the most moons?", "options": ["Jupiter", "Saturn", "Mars", "Earth"], "answer": 0 },
  { "q": "Which gas is necessary for fire to burn?", "options": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"], "answer": 1 },
  { "q": "Which vitamin helps in vision?", "options": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], "answer": 0 },
  { "q": "What is the main gas in the Earth's atmosphere?", "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], "answer": 1 },
  { "q": "Which organ controls hormones?", "options": ["Pancreas", "Thyroid", "Brain", "Pituitary"], "answer": 3 },
  { "q": "Which planet is blue due to methane gas?", "options": ["Neptune", "Uranus", "Saturn", "Jupiter"], "answer": 0 },
  { "q": "Which particle has a negative charge?", "options": ["Proton", "Electron", "Neutron", "Photon"], "answer": 1 },
  { "q": "Which organ helps in digestion of fats?", "options": ["Liver", "Pancreas", "Gallbladder", "Stomach"], "answer": 2 },
  { "q": "Which is the smallest planet in the solar system?", "options": ["Mercury", "Mars", "Venus", "Earth"], "answer": 0 },
  { "q": "Which gas is responsible for the greenhouse effect?", "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], "answer": 1 },
  { "q": "Which is the heaviest naturally occurring element?", "options": ["Uranium", "Plutonium", "Osmium", "Lead"], "answer": 0 },
  { "q": "Which type of rock is formed from lava?", "options": ["Igneous", "Sedimentary", "Metamorphic", "Basalt"], "answer": 0 },
  { "q": "Which planet is farthest from the Sun?", "options": ["Neptune", "Uranus", "Saturn", "Pluto"], "answer": 0 },
  { "q": "Which organ removes toxins from the blood?", "options": ["Kidney", "Liver", "Spleen", "Pancreas"], "answer": 1 }
  ],
  "music": [
 { "q": "Who is known as the King of Pop?", "options": ["Elvis Presley", "Michael Jackson", "Prince", "Justin Bieber"], "answer": 1 },
  { "q": "Which singer is called the Queen of Pop?", "options": ["Beyoncé", "Lady Gaga", "Madonna", "Rihanna"], "answer": 2 },
  { "q": "Which band sang 'Hey Jude'?", "options": ["The Beatles", "Queen", "ABBA", "Coldplay"], "answer": 0 },
  { "q": "Who sang 'Shape of You'?", "options": ["Ed Sheeran", "Justin Bieber", "Shawn Mendes", "Harry Styles"], "answer": 0 },
  { "q": "Which singer is nicknamed 'The Weeknd'?", "options": ["Drake", "Abel Tesfaye", "Travis Scott", "Post Malone"], "answer": 1 },
  { "q": "Who sang 'Billie Jean'?", "options": ["Michael Jackson", "Prince", "Usher", "Chris Brown"], "answer": 0 },
  { "q": "Which band wrote 'Bohemian Rhapsody'?", "options": ["The Beatles", "Pink Floyd", "Queen", "Aerosmith"], "answer": 2 },
  { "q": "Who sang 'Rolling in the Deep'?", "options": ["Adele", "Beyoncé", "Taylor Swift", "Katy Perry"], "answer": 0 },
  { "q": "Which artist sang 'Blinding Lights'?", "options": ["Drake", "The Weeknd", "Bruno Mars", "Zayn"], "answer": 1 },
  { "q": "Which band is known as the 'Fab Four'?", "options": ["Queen", "The Beatles", "Coldplay", "The Rolling Stones"], "answer": 1 },
  { "q": "Who sang 'Sorry'?", "options": ["Justin Bieber", "Selena Gomez", "Shawn Mendes", "Zayn"], "answer": 0 },
  { "q": "Which singer is known as 'Slim Shady'?", "options": ["Eminem", "Snoop Dogg", "Jay-Z", "Dr. Dre"], "answer": 0 },
  { "q": "Who is the lead singer of Coldplay?", "options": ["Chris Martin", "Adam Levine", "Harry Styles", "Ed Sheeran"], "answer": 0 },
  { "q": "Which artist sang 'Halo'?", "options": ["Rihanna", "Beyoncé", "Adele", "Ariana Grande"], "answer": 1 },
  { "q": "Who is known as the 'Material Girl'?", "options": ["Madonna", "Britney Spears", "Lady Gaga", "Shakira"], "answer": 0 },
  { "q": "Who sang 'Uptown Funk'?", "options": ["Bruno Mars", "Pharrell Williams", "The Weeknd", "Justin Timberlake"], "answer": 0 },
  { "q": "Which rapper sang 'God’s Plan'?", "options": ["Kanye West", "Drake", "Eminem", "Jay-Z"], "answer": 1 },
  { "q": "Which singer wrote 'All of Me'?", "options": ["John Legend", "Alicia Keys", "Ed Sheeran", "Sam Smith"], "answer": 0 },
  { "q": "Who sang 'Bad Guy'?", "options": ["Lana Del Rey", "Billie Eilish", "Halsey", "Doja Cat"], "answer": 1 },
  { "q": "Which band sang 'Smells Like Teen Spirit'?", "options": ["Nirvana", "Pearl Jam", "Linkin Park", "Metallica"], "answer": 0 },
  { "q": "Who sang 'Single Ladies'?", "options": ["Beyoncé", "Rihanna", "Ciara", "Nicki Minaj"], "answer": 0 },
  { "q": "Which rapper is known as 'Yeezy'?", "options": ["Kanye West", "Drake", "Lil Wayne", "Travis Scott"], "answer": 0 },
  { "q": "Who sang 'Shake It Off'?", "options": ["Selena Gomez", "Miley Cyrus", "Taylor Swift", "Katy Perry"], "answer": 2 },
  { "q": "Which artist sang 'Havana'?", "options": ["Camila Cabello", "Selena Gomez", "Shakira", "Dua Lipa"], "answer": 0 },
  { "q": "Which band sang 'Radioactive'?", "options": ["Coldplay", "Imagine Dragons", "Linkin Park", "Green Day"], "answer": 1 },
  { "q": "Who is the singer of 'Peaches'?", "options": ["Shawn Mendes", "Justin Bieber", "Post Malone", "The Weeknd"], "answer": 1 },
  { "q": "Which singer is known as 'RiRi'?", "options": ["Beyoncé", "Rihanna", "Nicki Minaj", "SZA"], "answer": 1 },
  { "q": "Who sang 'Someone Like You'?", "options": ["Taylor Swift", "Adele", "Kelly Clarkson", "Demi Lovato"], "answer": 1 },
  { "q": "Which rapper sang 'Sicko Mode'?", "options": ["Kendrick Lamar", "Drake", "Travis Scott", "Lil Uzi Vert"], "answer": 2 },
  { "q": "Which artist sang 'Can’t Stop the Feeling'?", "options": ["Justin Timberlake", "Pharrell Williams", "Ed Sheeran", "Bruno Mars"], "answer": 0 },
  { "q": "Who is the frontman of Maroon 5?", "options": ["Chris Martin", "Adam Levine", "Bruno Mars", "Harry Styles"], "answer": 1 },
  { "q": "Which singer sang 'Poker Face'?", "options": ["Lady Gaga", "Katy Perry", "Dua Lipa", "Madonna"], "answer": 0 },
  { "q": "Who is the singer of 'Levitating'?", "options": ["Dua Lipa", "Selena Gomez", "Billie Eilish", "Halsey"], "answer": 0 },
  { "q": "Which artist is known as 'Queen Bey'?", "options": ["Beyoncé", "Nicki Minaj", "Rihanna", "Cardi B"], "answer": 0 },
  { "q": "Who sang 'Waka Waka'?", "options": ["Rihanna", "Shakira", "Beyoncé", "Katy Perry"], "answer": 1 },
  { "q": "Which band sang 'Hotel California'?", "options": ["The Eagles", "Queen", "Pink Floyd", "The Rolling Stones"], "answer": 0 },
  { "q": "Who sang 'Love Yourself'?", "options": ["Justin Bieber", "Ed Sheeran", "Shawn Mendes", "Charlie Puth"], "answer": 0 },
  { "q": "Which artist sang 'Chandelier'?", "options": ["Sia", "Lorde", "Halsey", "Adele"], "answer": 0 },
  { "q": "Which rapper sang 'Lose Yourself'?", "options": ["Dr. Dre", "Kanye West", "Eminem", "Jay-Z"], "answer": 2 },
  { "q": "Who sang 'Firework'?", "options": ["Katy Perry", "Lady Gaga", "Ariana Grande", "Selena Gomez"], "answer": 0 },
  { "q": "Which band sang 'In the End'?", "options": ["Linkin Park", "Coldplay", "Green Day", "Foo Fighters"], "answer": 0 },
  { "q": "Who sang 'Stay' with The Kid LAROI?", "options": ["Drake", "Justin Bieber", "Post Malone", "Shawn Mendes"], "answer": 1 },
  { "q": "Which singer sang 'Don’t Start Now'?", "options": ["Dua Lipa", "Selena Gomez", "Lady Gaga", "Ariana Grande"], "answer": 0 },
  { "q": "Who sang 'Umbrella'?", "options": ["Rihanna", "Nicki Minaj", "Beyoncé", "Doja Cat"], "answer": 0 },
  { "q": "Which artist sang 'Grenade'?", "options": ["Bruno Mars", "Ed Sheeran", "Justin Bieber", "Charlie Puth"], "answer": 0 },
  { "q": "Who sang 'Closer' with The Chainsmokers?", "options": ["Halsey", "Selena Gomez", "Camila Cabello", "Ariana Grande"], "answer": 0 },
  { "q": "Which band is famous for 'Viva La Vida'?", "options": ["Coldplay", "Imagine Dragons", "U2", "Maroon 5"], "answer": 0 },
  { "q": "Who is the rapper behind 'HUMBLE'?", "options": ["Kanye West", "Kendrick Lamar", "Drake", "Travis Scott"], "answer": 1 },
  { "q": "Which artist sang 'Stay With Me'?", "options": ["Sam Smith", "Ed Sheeran", "John Legend", "James Arthur"], "answer": 0 },
  { "q": "Who sang 'Born This Way'?", "options": ["Lady Gaga", "Madonna", "Ariana Grande", "Rihanna"], "answer": 0 },
  { "q": "Which band is famous for 'Wonderwall'?", "options": ["Oasis", "Blur", "Coldplay", "Radiohead"], "answer": 0 }
  ]
};

let currentQuiz = [];
let currentIndex = 0;
let score = 0;
let timer = null;
let timeLeft = 10;
let userAnswers = [];
let quizEnded = false;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('#menu a[onclick]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const onclick = a.getAttribute('onclick') || '';
      const m = onclick.match(/startQuiz\(['"](.+?)['"]\)/);
      if (m && m[1]) startQuiz(m[1]);
    });
  });

  document.getElementById("tryAgainBtn").addEventListener("click", tryAgain);
  document.getElementById("menuBtn").addEventListener("click", backToMenu);
  document.getElementById("reviewBtn").addEventListener("click", reviewAnswers);
});

function shuffleArray(array) {
  return array.map((val,i)=>({val,i,sort:Math.random()}))
              .sort((a,b)=>a.sort-b.sort)
              .map(obj=>obj.val);
}


function startQuiz(type) {
  clearInterval(timer);
  quizEnded = false;
  
  // ✅ Pick 10 random unique questions each time
  if (quizzes[type]) {
    let pool = [...quizzes[type]];            // copy full category
    pool = shuffleArray(pool);                // shuffle pool
    currentQuiz = pool.slice(0, 10);          // take 10 random
  } else {
    currentQuiz = [];
  }

  currentIndex = 0;
  score = 0;
  userAnswers = [];

  document.getElementById("menu").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  document.getElementById("result").style.display = "none";

  showQuestion();
}


function showQuestion() {
  if (quizEnded) return;
  if (!currentQuiz || currentIndex >= currentQuiz.length) { 
    endQuiz(); 
    return; 
  }

  const q = currentQuiz[currentIndex];
  document.getElementById("progress").innerText = `Question ${currentIndex + 1} of ${currentQuiz.length}`;
  document.getElementById("question").innerText = q.q || q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  let shuffled = shuffleArray(q.options.map((opt, i) => ({ text: opt, index: i })));
  shuffled.forEach((optObj) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.innerText = optObj.text;
    btn.classList.add("quiz-btn");
    btn.dataset.optIndex = String(optObj.index);
    btn.onclick = () => checkAnswer(optObj.index, btn);
    optionsDiv.appendChild(btn);
  });

  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 10;
  const timerFill = document.getElementById("timer-fill");
  if (timerFill) timerFill.style.width = "100%";

  timer = setInterval(() => {
    if (quizEnded) clearInterval(timer);
    timeLeft--;
    if (timerFill) timerFill.style.width = `${(timeLeft/10)*100}%`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      userAnswers[currentIndex] = undefined;
      currentIndex++;
      if (!quizEnded) showQuestion();
    }
  }, 1000);
}

function checkAnswer(selected, btn) {
  if (quizEnded) return;
  clearInterval(timer);
  userAnswers[currentIndex] = selected;

  const correctIndex = currentQuiz[currentIndex].answer;
  if (selected === correctIndex || currentQuiz[currentIndex].options[selected] === correctIndex) {
    btn.style.backgroundColor="#4CAF50";
    score++;
  } else {
    btn.style.backgroundColor="#e74c3c";
    document.querySelectorAll("#options .quiz-btn").forEach(b=>{
      if(parseInt(b.dataset.optIndex)===correctIndex || b.innerText===correctIndex) {
        b.style.backgroundColor="#4CAF50";
      }
    });
  }

  document.querySelectorAll(".quiz-btn").forEach(b=>b.disabled=true);
  setTimeout(()=>{ currentIndex++; if(!quizEnded) showQuestion(); },1500);
}

function endQuiz() {
  quizEnded = true;
  clearInterval(timer);

  document.getElementById("quiz").style.display="none";
  const resultEl = document.getElementById("result");
  resultEl.style.display="block";

  const btnContainer = resultEl.querySelector(".d-flex");
  if (btnContainer) btnContainer.style.display = "flex";

  document.getElementById("score").innerText=`You got ${score} out of ${currentQuiz.length} correct!`;
  document.getElementById("percentage").innerText=`Your score: ${Math.round((score/currentQuiz.length)*100)}%`;

  if(typeof confetti==="function"){
    confetti({particleCount:180,spread:120,origin:{y:0.6}});
  }
}

function tryAgain() {
  clearInterval(timer);
  currentIndex = 0; 
  score = 0; 
  userAnswers = []; 
  quizEnded = false;

  // ✅ Pull fresh random 10 every time
  const type = Object.keys(quizzes).find(cat => quizzes[cat].includes(currentQuiz[0]));
  if (type) {
    let pool = shuffleArray([...quizzes[type]]);
    currentQuiz = pool.slice(0, 10);
  }

  document.getElementById("result").style.display = "none";
  document.getElementById("review").innerHTML = "";
  document.getElementById("quiz").style.display = "block";

  showQuestion();
}


function backToMenu() {
  clearInterval(timer);
  currentQuiz=[]; currentIndex=0; score=0; userAnswers=[]; quizEnded=false;
  document.getElementById("quiz").style.display="none";
  document.getElementById("result").style.display="none";
  document.getElementById("review").innerHTML="";
  document.getElementById("menu").style.display="block";
}

function reviewAnswers() {
  const reviewDiv=document.getElementById("review");
  if(!reviewDiv) return;
  if(reviewDiv.classList.contains("active")){
    reviewDiv.classList.remove("active");
    setTimeout(()=>reviewDiv.innerHTML="",500);
    return;
  }
  reviewDiv.innerHTML="";
  currentQuiz.forEach((q,i)=>{
    const userAns=userAnswers[i];
    const correctAns=q.answer;
    const isCorrect=(userAns===correctAns || q.options[userAns]===correctAns);
    const p=document.createElement("p");
    p.innerHTML=`<strong>Q${i+1}:</strong> ${q.q || q.question}<br> ➡️ Your Answer: <span class="${isCorrect?'correct':'wrong'}">${userAns!==undefined?q.options[userAns]:"No Answer"} ${isCorrect?"✅":"❌"}</span><br> ✅ Correct Answer: <span class="correct">${typeof correctAns==="number"?q.options[correctAns]:correctAns}</span>`;
    reviewDiv.appendChild(p);
  });
  reviewDiv.classList.add("active");
}
