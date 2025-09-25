// Category screen and quiz container
const categoryScreen = document.getElementById('category-screen');
const quizContainer = document.querySelector('.quiz-container');

// Variables
let quiz = []; // will hold questions of selected category
let currentQ = 0;
let score = 0;

// DOM elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

// Category buttons click
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;
    loadCategory(category); // load questions
    categoryScreen.style.display = 'none';
    quizContainer.style.display = 'block';
    showQuestion();
  });
});

// Load questions based on selected category
function loadCategory(category)
{
  if (category === 'computer science') {
    quiz = [
        
  {
    question: "What does CPU stand for?",
    options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Control Processing Unit"],
    answer: "Central Processing Unit"
  },
  {
    question: "Which language is known as the mother of all programming languages?",
    options: ["Python", "C", "Java", "Assembly"],
    answer: "C"
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "High Text Machine Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which company developed the Windows operating system?",
    options: ["Apple", "Microsoft", "IBM", "Google"],
    answer: "Microsoft"
  },
  {
    question: "Which data structure works on FIFO (First In First Out)?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue"
  },
  {
    question: "What is the binary number for decimal 5?",
    options: ["101", "110", "111", "100"],
    answer: "101"
  },
  {
    question: "Which of these is an output device?",
    options: ["Keyboard", "Mouse", "Monitor", "Scanner"],
    answer: "Monitor"
  },
  {
    question: "Who is known as the father of computers?",
    options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
    answer: "Charles Babbage"
  },
  {
    question: "Which key is used to refresh a webpage?",
    options: ["F2", "F5", "F8", "F12"],
    answer: "F5"
  },
  {
    question: "Which protocol is used to send emails?",
    options: ["SMTP", "HTTP", "FTP", "SNMP"],
    answer: "SMTP"
  },
  {
    question: "Which of these is not an operating system?",
    options: ["Linux", "Windows", "Oracle", "MacOS"],
    answer: "Oracle"
  },
  {
    question: "What does IP stand for in networking?",
    options: ["Internet Protocol", "Internal Process", "Internet Program", "Integrated Protocol"],
    answer: "Internet Protocol"
  },
  {
    question: "Which device is used to connect computers in a network?",
    options: ["Printer", "Router", "Monitor", "Scanner"],
    answer: "Router"
  },
  {
    question: "What is the full form of SQL?",
    options: ["Structured Question Language", "Simple Query Language", "Structured Query Language", "System Query Language"],
    answer: "Structured Query Language"
  },
  {
    question: "What does GUI stand for?",
    options: ["Graphical User Interface", "General User Internet", "Graphics Utility Interface", "Global User Interaction"],
    answer: "Graphical User Interface"
  },
  {
    question: "Which of the following is not a programming language?",
    options: ["Python", "Java", "MySQL", "C++"],
    answer: "MySQL"
  },
  {
    question: "Which unit of memory is the largest?",
    options: ["Megabyte", "Kilobyte", "Terabyte", "Gigabyte"],
    answer: "Terabyte"
  },
  {
    question: "Which type of memory is volatile?",
    options: ["ROM", "RAM", "Hard Disk", "CD-ROM"],
    answer: "RAM"
  },
  {
    question: "What is the full form of URL?",
    options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Routing Link", "User Reference Link"],
    answer: "Uniform Resource Locator"
  },
  {
    question: "Which company developed the Java programming language?",
    options: ["Sun Microsystems", "Microsoft", "Oracle", "IBM"],
    answer: "Sun Microsystems"
  },
  {
    question: "What is the smallest unit of data in a computer?",
    options: ["Byte", "Nibble", "Bit", "Word"],
    answer: "Bit"
  },
  {
    question: "Which of these is not a search engine?",
    options: ["Google", "Bing", "Yahoo", "Linux"],
    answer: "Linux"
  },
  {
    question: "Which programming language is mainly used for Artificial Intelligence?",
    options: ["C", "Python", "PHP", "HTML"],
    answer: "Python"
  },
  {
    question: "What is the shortcut for copy on Windows?",
    options: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"],
    answer: "Ctrl + C"
  },
  {
    question: "Which type of software is MS Word?",
    options: ["System Software", "Application Software", "Utility Software", "Operating System"],
    answer: "Application Software"
  },
  {
    question: "Which of the following is not a web browser?",
    options: ["Chrome", "Firefox", "Safari", "Windows"],
    answer: "Windows"
  },
  {
    question: "Which command is used to display content in HTML?",
    options: ["<div>", "<body>", "<p>", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which network topology connects all nodes in a ring?",
    options: ["Bus", "Star", "Ring", "Mesh"],
    answer: "Ring"
  },
  {
    question: "Which of these is not a database?",
    options: ["MySQL", "MongoDB", "PostgreSQL", "Python"],
    answer: "Python"
  },
  {
    question: "Which part of the computer stores permanent data?",
    options: ["RAM", "ROM", "Cache", "Registers"],
    answer: "ROM"
  },
  {
    question: "Which key is used to undo an action in Windows?",
    options: ["Ctrl + Y", "Ctrl + Z", "Ctrl + C", "Ctrl + U"],
    answer: "Ctrl + Z"
  },
  {
    question: "Which programming language is called 'Platform Independent'?",
    options: ["C", "Java", "Python", "C++"],
    answer: "Java"
  },
  {
    question: "What is the full form of IP address?",
    options: ["Internet Provider Address", "Internet Protocol Address", "Internal Protocol Address", "Internet Process Address"],
    answer: "Internet Protocol Address"
  },
  {
    question: "Which of the following is an input device?",
    options: ["Printer", "Keyboard", "Monitor", "Projector"],
    answer: "Keyboard"
  },
  {
    question: "What does DNS stand for?",
    options: ["Domain Name System", "Domain Number Service", "Data Name System", "Disk Name Service"],
    answer: "Domain Name System"
  },
  {
    question: "Which company owns GitHub?",
    options: ["Google", "Microsoft", "Amazon", "Apple"],
    answer: "Microsoft"
  },
  {
    question: "Which of these is not an email provider?",
    options: ["Gmail", "Yahoo Mail", "Outlook", "Bing"],
    answer: "Bing"
  },
  {
    question: "Which of these is an example of cloud storage?",
    options: ["Google Drive", "MS Paint", "Notepad", "Calculator"],
    answer: "Google Drive"
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<a>", "<link>", "<h1>", "<href>"],
    answer: "<a>"
  },
  {
    question: "Which company created the C# programming language?",
    options: ["Oracle", "Microsoft", "Google", "IBM"],
    answer: "Microsoft"
  }


      
    ];
  } else if (category === 'science') {
    quiz = [
               
      {
        question: "What is the center of our Solar System?",
        options: ["Earth", "Moon", "Sun", "Mars"],
        answer: "Sun"
      },
      {
        question: "Which gas do humans breathe in to survive?",
        options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        answer: "Oxygen"
      },
      {
        question: "Which planet is called the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
      },
      {
        question: "What is H2O commonly known as?",
        options: ["Salt", "Water", "Sugar", "Alcohol"],
        answer: "Water"
      },
      {
        question: "How many bones are in an adult human body?",
        options: ["206", "208", "210", "200"],
        answer: "206"
      },
      {
        question: "What force keeps us on the ground?",
        options: ["Magnetism", "Friction", "Gravity", "Electricity"],
        answer: "Gravity"
      },
      {
        question: "Which organ pumps blood throughout the body?",
        options: ["Lungs", "Kidney", "Heart", "Liver"],
        answer: "Heart"
      },
      {
        question: "What do plants produce during photosynthesis?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Methane"],
        answer: "Oxygen"
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Au", "Gd", "Go"],
        answer: "Au"
      },
      {
        question: "Which gas is most abundant in Earth's atmosphere?",
        options: ["Oxygen", "Carbon dioxide", "Argon", "Nitrogen"],
        answer: "Nitrogen"
      },
      {
        question: "What planet has rings visible from Earth?",
        options: ["Mercury", "Venus", "Saturn", "Mars"],
        answer: "Saturn"
      },
      {
        question: "What is the boiling point of water at sea level (°C)?",
        options: ["50", "75", "100", "120"],
        answer: "100"
      },
      {
        question: "Which part of the plant absorbs water from soil?",
        options: ["Stem", "Leaf", "Root", "Flower"],
        answer: "Root"
      },
      {
        question: "Which vitamin do we get from sunlight?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        answer: "Vitamin D"
      },
      {
        question: "What is the nearest star to Earth?",
        options: ["Sirius", "Proxima Centauri", "Sun", "Vega"],
        answer: "Sun"
      },
      {
        question: "Which particle has a negative charge?",
        options: ["Proton", "Neutron", "Electron", "Photon"],
        answer: "Electron"
      },
      {
        question: "What is the main gas causing global warming?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
        answer: "Carbon dioxide"
      },
      {
        question: "Which metal is liquid at room temperature?",
        options: ["Iron", "Mercury", "Gold", "Silver"],
        answer: "Mercury"
      },
      {
        question: "What is the phenomenon of light bending called?",
        options: ["Reflection", "Refraction", "Diffraction", "Absorption"],
        answer: "Refraction"
      },
      {
        question: "Which organ is responsible for breathing?",
        options: ["Heart", "Lungs", "Stomach", "Liver"],
        answer: "Lungs"
      },
      {
        question: "What device measures temperature?",
        options: ["Barometer", "Thermometer", "Ammeter", "Hygrometer"],
        answer: "Thermometer"
      },
      {
        question: "Which gas do plants take in for photosynthesis?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        answer: "Carbon dioxide"
      },
      {
        question: "What is the chemical formula for table salt?",
        options: ["NaCl", "KCl", "CaCO3", "H2SO4"],
        answer: "NaCl"
      },
      {
        question: "Which simple machine is a ramp?",
        options: ["Lever", "Pulley", "Inclined plane", "Wheel"],
        answer: "Inclined plane"
      },
      {
        question: "What is the unit of electrical current?",
        options: ["Volt", "Ohm", "Ampere", "Watt"],
        answer: "Ampere"
      },
      {
        question: "Which organ helps digest food by producing bile?",
        options: ["Pancreas", "Liver", "Heart", "Kidney"],
        answer: "Liver"
      },
      {
        question: "What color does litmus turn in acid?",
        options: ["Blue", "Red", "Green", "Yellow"],
        answer: "Red"
      },
      {
        question: "Which gas do animals exhale?",
        options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide"],
        answer: "Carbon dioxide"
      },
      {
        question: "What is measured in kilograms?",
        options: ["Length", "Mass", "Time", "Temperature"],
        answer: "Mass"
      },
      {
        question: "Which organ filters waste from blood?",
        options: ["Lungs", "Kidneys", "Stomach", "Brain"],
        answer: "Kidneys"
      },
      {
        question: "Which planet is largest in our Solar System?",
        options: ["Earth", "Saturn", "Jupiter", "Neptune"],
        answer: "Jupiter"
      },
      {
        question: "What causes tides on Earth?",
        options: ["Wind", "Sun's heat", "Moon's gravity", "Earthquakes"],
        answer: "Moon's gravity"
      },
      {
        question: "Which is a renewable energy source?",
        options: ["Coal", "Oil", "Solar", "Natural gas"],
        answer: "Solar"
      },
      {
        question: "What is the smallest unit of life?",
        options: ["Organ", "Tissue", "Cell", "Organism"],
        answer: "Cell"
      },
      {
        question: "Which blood cells help fight infection?",
        options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
        answer: "White blood cells"
      },
      {
        question: "What is the study of living things called?",
        options: ["Geology", "Biology", "Astronomy", "Physics"],
        answer: "Biology"
      },
      {
        question: "Which tool is used to look at stars?",
        options: ["Microscope", "Telescope", "Thermometer", "Stethoscope"],
        answer: "Telescope"
      },
      {
        question: "What do we call melted rock beneath Earth's surface?",
        options: ["Magma", "Lava", "Igneous", "Sediment"],
        answer: "Magma"
      },
      {
        question: "Which sense detects sound?",
        options: ["Sight", "Taste", "Hearing", "Smell"],
        answer: "Hearing"
      },
      {
        question: "What causes day and night on Earth?",
        options: ["Moon's orbit", "Earth's rotation", "Sun's orbit", "Earth's tilt"],
        answer: "Earth's rotation"
      }
 
      // more science questions
    ];
  } else if (category === 'food & culture') {
    quiz = [
  
      {
        question: "Which country is famous for pizza and pasta?",
        options: ["Spain", "Italy", "France", "Mexico"],
        answer: "Italy"
      },
      {
        question: "Sushi is a traditional dish of which country?",
        options: ["China", "Thailand", "Japan", "Korea"],
        answer: "Japan"
      },
      {
        question: "Which Indian state is famous for Dhokla?",
        options: ["Punjab", "Gujarat", "Rajasthan", "Kerala"],
        answer: "Gujarat"
      },
      {
        question: "Which drink is known as the 'National Drink of India'?",
        options: ["Coffee", "Tea", "Lassi", "Coconut Water"],
        answer: "Tea"
      },
      {
        question: "Which country is famous for croissants?",
        options: ["Italy", "Germany", "France", "Belgium"],
        answer: "France"
      },
      {
        question: "Biryani is originally associated with which region of India?",
        options: ["Hyderabad", "Delhi", "Kolkata", "Lucknow"],
        answer: "Hyderabad"
      },
      {
        question: "Which fruit is called the 'King of Fruits' in India?",
        options: ["Apple", "Banana", "Mango", "Grapes"],
        answer: "Mango"
      },
      {
        question: "Tacos are a famous dish from which country?",
        options: ["Mexico", "Spain", "Brazil", "Chile"],
        answer: "Mexico"
      },
      {
        question: "Which festival in India is known as the 'Festival of Lights'?",
        options: ["Holi", "Diwali", "Eid", "Pongal"],
        answer: "Diwali"
      },
      {
        question: "Which state of India is famous for Rasgulla?",
        options: ["Maharashtra", "Bihar", "West Bengal", "Tamil Nadu"],
        answer: "West Bengal"
      },
      {
        question: "Kimchi is a traditional dish of which country?",
        options: ["China", "Japan", "South Korea", "Vietnam"],
        answer: "South Korea"
      },
      {
        question: "Which country is famous for Swiss chocolate?",
        options: ["Switzerland", "Belgium", "Germany", "France"],
        answer: "Switzerland"
      },
      {
        question: "Idli and Dosa are famous foods of which Indian state?",
        options: ["Kerala", "Tamil Nadu", "Punjab", "Odisha"],
        answer: "Tamil Nadu"
      },
      {
        question: "What is the main ingredient of hummus?",
        options: ["Rice", "Chickpeas", "Potato", "Corn"],
        answer: "Chickpeas"
      },
      {
        question: "Which fruit is used to make wine?",
        options: ["Mango", "Banana", "Grapes", "Apple"],
        answer: "Grapes"
      },
      {
        question: "Samosa is originally believed to have come from which region?",
        options: ["India", "Persia", "Nepal", "Turkey"],
        answer: "Persia"
      },
      {
        question: "Which state of India is famous for Litti Chokha?",
        options: ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Jharkhand"],
        answer: "Bihar"
      },
      {
        question: "Which country is famous for Paella?",
        options: ["Italy", "Spain", "Portugal", "Greece"],
        answer: "Spain"
      },
      {
        question: "What is Japan’s traditional drink made from rice?",
        options: ["Sake", "Soju", "Wine", "Beer"],
        answer: "Sake"
      },
      {
        question: "Which Indian festival is known as the Festival of Colors?",
        options: ["Diwali", "Eid", "Holi", "Baisakhi"],
        answer: "Holi"
      },
      {
        question: "Which country is known for maple syrup?",
        options: ["USA", "Canada", "Australia", "Finland"],
        answer: "Canada"
      },
      {
        question: "Which dish is Punjab especially famous for?",
        options: ["Fish curry", "Sarson da Saag & Makki di Roti", "Dosa", "Rasgulla"],
        answer: "Sarson da Saag & Makki di Roti"
      },
      {
        question: "Falafel is a popular street food in which region?",
        options: ["Middle East", "South Asia", "Europe", "South America"],
        answer: "Middle East"
      },
      {
        question: "Which state is famous for Misal Pav?",
        options: ["Rajasthan", "Maharashtra", "Karnataka", "Haryana"],
        answer: "Maharashtra"
      },
      {
        question: "Pizza Margherita was first made in honor of which queen?",
        options: ["Queen Victoria", "Queen Margherita", "Queen Elizabeth", "Queen Isabella"],
        answer: "Queen Margherita"
      },
      {
        question: "Which country is famous for Dim Sum?",
        options: ["China", "Japan", "Vietnam", "Thailand"],
        answer: "China"
      },
      {
        question: "Which state of India is known for its Bamboo Shoot dishes?",
        options: ["Punjab", "Nagaland", "Kerala", "Gujarat"],
        answer: "Nagaland"
      },
      {
        question: "What is the main ingredient of 'Miso Soup'?",
        options: ["Soybeans", "Potatoes", "Corn", "Lentils"],
        answer: "Soybeans"
      },
      {
        question: "Which fruit is a symbol of hospitality and is common in Hawaii?",
        options: ["Mango", "Pineapple", "Banana", "Papaya"],
        answer: "Pineapple"
      },
      {
        question: "In which state is 'Daal Baati Churma' popular?",
        options: ["Rajasthan", "Haryana", "Madhya Pradesh", "Bihar"],
        answer: "Rajasthan"
      },
      {
        question: "Which country is famous for Shawarma?",
        options: ["Turkey", "Lebanon", "Egypt", "All of these"],
        answer: "All of these"
      },
      {
        question: "What is the national fruit of India?",
        options: ["Apple", "Mango", "Banana", "Pineapple"],
        answer: "Mango"
      },
      {
        question: "Which festival is celebrated with Modak in India?",
        options: ["Diwali", "Ganesh Chaturthi", "Raksha Bandhan", "Eid"],
        answer: "Ganesh Chaturthi"
      },
      {
        question: "Which European country is famous for cheese and windmills?",
        options: ["Italy", "Netherlands", "Germany", "Sweden"],
        answer: "Netherlands"
      },
      {
        question: "Which sweet is specially made during Eid?",
        options: ["Ladoo", "Kheer/Seviyan", "Barfi", "Jalebi"],
        answer: "Kheer/Seviyan"
      },
      {
        question: "Which state is famous for fish curry and rice?",
        options: ["Goa", "Punjab", "Bihar", "Gujarat"],
        answer: "Goa"
      },
      {
        question: "Which country is famous for 'Bagels'?",
        options: ["Poland", "USA", "Germany", "Russia"],
        answer: "Poland"
      },
      {
        question: "What is the traditional food of Kerala served on banana leaves?",
        options: ["Sadya", "Biryani", "Upma", "Vada"],
        answer: "Sadya"
      },
      {
        question: "Which Middle Eastern dip is made from roasted eggplants?",
        options: ["Hummus", "Baba Ganoush", "Tahini", "Tabbouleh"],
        answer: "Baba Ganoush"
      },
      {
        question: "Which country is famous for burgers and hot dogs?",
        options: ["USA", "Canada", "Mexico", "UK"],
        answer: "USA"
      }
    
  
    ];
  } else if(category === 'capitals') {
    quiz = [
      
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: "Delhi"
  },
  {
    question: "What is the capital of USA?",
    options: ["New York", "Los Angeles", "Washington, D.C.", "Chicago"],
    answer: "Washington, D.C."
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "Lyon", "Marseille", "Nice"],
    answer: "Paris"
  },
  {
    question: "What is the capital of Germany?",
    options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    answer: "Berlin"
  },
  {
    question: "What is the capital of Japan?",
    options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
    answer: "Tokyo"
  },
  {
    question: "What is the capital of China?",
    options: ["Shanghai", "Beijing", "Shenzhen", "Guangzhou"],
    answer: "Beijing"
  },
  {
    question: "What is the capital of Russia?",
    options: ["Moscow", "Saint Petersburg", "Kazan", "Sochi"],
    answer: "Moscow"
  },
  {
    question: "What is the capital of Brazil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    answer: "Brasília"
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    answer: "Ottawa"
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra"
  },
  {
    question: "What is the capital of Italy?",
    options: ["Rome", "Venice", "Milan", "Naples"],
    answer: "Rome"
  },
  {
    question: "What is the capital of Spain?",
    options: ["Barcelona", "Madrid", "Seville", "Valencia"],
    answer: "Madrid"
  },
  {
    question: "What is the capital of South Korea?",
    options: ["Busan", "Incheon", "Seoul", "Daegu"],
    answer: "Seoul"
  },
  {
    question: "What is the capital of North Korea?",
    options: ["Pyongyang", "Seoul", "Hamhung", "Kaesong"],
    answer: "Pyongyang"
  },
  {
    question: "What is the capital of the United Kingdom?",
    options: ["London", "Manchester", "Liverpool", "Birmingham"],
    answer: "London"
  },
  {
    question: "What is the capital of Pakistan?",
    options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    answer: "Islamabad"
  },
  {
    question: "What is the capital of Afghanistan?",
    options: ["Kabul", "Kandahar", "Herat", "Mazar-i-Sharif"],
    answer: "Kabul"
  },
  {
    question: "What is the capital of Nepal?",
    options: ["Pokhara", "Kathmandu", "Lalitpur", "Bhaktapur"],
    answer: "Kathmandu"
  },
  {
    question: "What is the capital of Bhutan?",
    options: ["Thimphu", "Paro", "Punakha", "Phuentsholing"],
    answer: "Thimphu"
  },
  {
    question: "What is the capital of Sri Lanka?",
    options: ["Colombo", "Kandy", "Galle", "Jaffna"],
    answer: "Colombo"
  },
  {
    question: "What is the capital of Bangladesh?",
    options: ["Dhaka", "Chittagong", "Khulna", "Sylhet"],
    answer: "Dhaka"
  },
  {
    question: "What is the capital of Myanmar?",
    options: ["Yangon", "Mandalay", "Naypyidaw", "Bago"],
    answer: "Naypyidaw"
  },
  {
    question: "What is the capital of Thailand?",
    options: ["Bangkok", "Chiang Mai", "Pattaya", "Phuket"],
    answer: "Bangkok"
  },
  {
    question: "What is the capital of Vietnam?",
    options: ["Ho Chi Minh City", "Hanoi", "Da Nang", "Hue"],
    answer: "Hanoi"
  },
  {
    question: "What is the capital of Indonesia?",
    options: ["Jakarta", "Bali", "Surabaya", "Medan"],
    answer: "Jakarta"
  },
  {
    question: "What is the capital of Philippines?",
    options: ["Cebu", "Manila", "Davao", "Quezon City"],
    answer: "Manila"
  },
  {
    question: "What is the capital of South Africa?",
    options: ["Cape Town", "Pretoria", "Johannesburg", "Durban"],
    answer: "Pretoria"
  },
  {
    question: "What is the capital of Egypt?",
    options: ["Alexandria", "Cairo", "Giza", "Luxor"],
    answer: "Cairo"
  },
  {
    question: "What is the capital of Saudi Arabia?",
    options: ["Jeddah", "Mecca", "Riyadh", "Medina"],
    answer: "Riyadh"
  },
  {
    question: "What is the capital of Iran?",
    options: ["Mashhad", "Shiraz", "Tehran", "Isfahan"],
    answer: "Tehran"
  },
  {
    question: "What is the capital of Iraq?",
    options: ["Basra", "Baghdad", "Mosul", "Erbil"],
    answer: "Baghdad"
  },
  {
    question: "What is the capital of Turkey?",
    options: ["Istanbul", "Ankara", "Izmir", "Bursa"],
    answer: "Ankara"
  },
  {
    question: "What is the capital of Greece?",
    options: ["Athens", "Thessaloniki", "Patras", "Rhodes"],
    answer: "Athens"
  },
  {
    question: "What is the capital of Argentina?",
    options: ["Buenos Aires", "Cordoba", "Rosario", "Mendoza"],
    answer: "Buenos Aires"
  },
  {
    question: "What is the capital of Mexico?",
    options: ["Guadalajara", "Cancún", "Mexico City", "Monterrey"],
    answer: "Mexico City"
  },
  {
    question: "What is the capital of Chile?",
    options: ["Valparaiso", "Santiago", "Concepción", "La Serena"],
    answer: "Santiago"
  },
  {
    question: "What is the capital of Colombia?",
    options: ["Bogotá", "Medellín", "Cali", "Cartagena"],
    answer: "Bogotá"
  },
  {
    question: "What is the capital of Kenya?",
    options: ["Mombasa", "Nairobi", "Kisumu", "Nakuru"],
    answer: "Nairobi"
  },
  {
    question: "What is the capital of Nigeria?",
    options: ["Lagos", "Abuja", "Kano", "Ibadan"],
    answer: "Abuja"
  },
  {
    question: "What is the capital of Ethiopia?",
    options: ["Mekelle", "Dire Dawa", "Addis Ababa", "Gondar"],
    answer: "Addis Ababa"
  }
    ];
  }
}

// Show question function
function showQuestion() {
  const q = quiz[currentQ];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt, btn);
    optionsEl.appendChild(btn);
  });
  nextBtn.style.display = "none";
}

// Check answer function
function checkAnswer(selected, btn) {
  // permanently highlight selected button
  Array.from(optionsEl.children).forEach(b => b.disabled = true);
  btn.style.backgroundColor = selected === quiz[currentQ].answer ? "lightgreen" : "red";

  if(selected === quiz[currentQ].answer) score++;
  nextBtn.style.display = "block";
}

// Next button click
nextBtn.onclick = () => {
  currentQ++;
  if(currentQ < quiz.length) {
    showQuestion();
  } else {
    resultEl.textContent = `You scored ${score} out of ${quiz.length}`;
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    nextBtn.style.display = "none";
  }
};
