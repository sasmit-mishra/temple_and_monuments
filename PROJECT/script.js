// Attraction Data
const attractions = [
    {
        id: 1,
        name: "Varanasi Kashi Vishwanath Temple",
        type: "temple",
        location: "Varanasi, Uttar Pradesh",
        builtIn: "1780 (Current Structure)",
        builtBy: "Maharaja Ahilya Bai Holkar",
        emoji: "🕉️",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ganga%20Dwar%2C%20Gateway%20of%20Corridor%20of%20Kashi%20Vishwanath%20Temple%2C%20Varanasi%202.webp?width=800",
        overview: "The Kashi Vishwanath Temple is one of the most important temples in Hinduism, dedicated to Lord Shiva. Located on the western bank of the Ganges River, this temple is a site of pilgrimage and spiritual significance for millions of devotees.",
        famousFor: [
            "Sacred abode of Lord Shiva",
            "Confluence of spirituality and the holy Gange",
            "Golden dome visible from far away",
            "Ancient pilgrimage destination"
        ],
        history: "According to Hindu mythology, the temple marks the convergence of the spiritual world with the mortal realm. The current structure was built by Maharaja Ahilya Bai Holkar in 1780. The temple has been destroyed and rebuilt multiple times throughout history, yet its spiritual significance remains unchanged.",
        architecture: [
            "Golden dome (Amalak) covered with gold plates",
            "Intricately carved spires",
            "The sanctum sanctorum houses the Shivalinga",
            "Narrow lanes leading to the temple"
        ],
        fee: "Free Entry",
        hours: "3:30 AM - 11:00 PM",
        bestTime: "October to March"
    },
    {
        id: 2,
        name: "Taj Mahal",
        type: "monument",
        location: "Agra, Uttar Pradesh",
        builtIn: "1653",
        builtBy: "Emperor Shah Jahan",
        emoji: "🏛️",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Taj%20Mahal%2C%20Agra%2C%20India.jpg?width=800",
        overview: "The Taj Mahal stands as a testament to eternal love and architectural perfection. Built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this iconic monument is one of the Seven Wonders of the World and attracts millions of visitors annually.",
        famousFor: [
            "Monument to eternal love",
            "Marble inlay work with semi-precious stones",
            "Perfect symmetry and architectural precision",
            "Changing colors throughout the day"
        ],
        history: "Construction began in 1632 and was completed in 1653, employing over 20,000 workers. Emperor Shah Jahan was so distraught after his wife's death that he eventually imprisoned himself in the Red Fort's tower, spending his final days gazing at the Taj Mahal across the river.",
        architecture: [
            "White marble with semi-precious stone inlay",
            "Four minarets at corners for structural stability",
            "Dome with floral motifs",
            "Intricate calligraphy throughout"
        ],
        fee: "₹250 (Indians), $15 (Foreign nationals)",
        hours: "6:00 AM - 7:00 PM",
        bestTime: "October to March"
    },
    {
        id: 3,
        name: "Khajuraho Temples",
        type: "temple",
        location: "Khajuraho, Madhya Pradesh",
        builtIn: "10th-11th Century",
        builtBy: "Chandela Dynasty",
        emoji: "🏰",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Khajuraho%20Devi%20Jagadambi%20Temple%202010.jpg?width=800",
        overview: "The Khajuraho Temples represent the pinnacle of medieval Indian architecture and sculpture. These temples, built during the Chandela dynasty, showcase remarkable stone craftsmanship and intricate carvings that celebrate human emotions and spirituality.",
        famousFor: [
            "Exquisite sculptural work",
            "Erotic art and intimate sculptures",
            "Architectural engineering excellence",
            "UNESCO World Heritage Site"
        ],
        history: "Built between the 10th and 11th centuries during the Chandela dynasty's rule, these 85 temples originally stood in this area, with 22 surviving today. The temples were abandoned after the 12th century and lay hidden beneath overgrowth until European explorers rediscovered them in the 19th century.",
        architecture: [
            "Interlocking stone construction without mortar",
            "Progressive sculptural narrative on walls",
            "Intricate carved figures and expressions",
            "Geometric precision in layout"
        ],
        fee: "₹250 (Indians), $10 (Foreign nationals)",
        hours: "6:00 AM - 6:00 PM",
        bestTime: "October to March"
    },
    {
        id: 4,
        name: "Meenakshi Amman Temple",
        type: "temple",
        location: "Madurai, Tamil Nadu",
        builtIn: "6th Century (Expanded through 17th Century)",
        builtBy: "Nayak Dynasty",
        emoji: "🛕",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Madurai%20Meenakshi%20Amman%20Temple%20Gopuram%20view.jpg?width=800",
        overview: "The Meenakshi Amman Temple is one of the oldest and largest functioning temples in India. Dedicated to Goddess Meenakshi and Lord Sundareswarar, this temple is the heart of Madurai and an architectural marvel of South Indian temple design.",
        famousFor: [
            "Golden gopuram (temple tower)",
            "Intricate stone carvings and sculptures",
            "Annual Meenakshi Marriage festival",
            "Sacred lotus pond"
        ],
        history: "The temple's history spans over 2,000 years, with references found in ancient Tamil literature. The current structure was built and expanded by the Nayak dynasty during the 16th-17th centuries. The temple remains one of the most important pilgrimage sites in South India.",
        architecture: [
            "Multiple gopurams with colorful sculptures",
            "Intricate pillar carvings and murals",
            "Complex layout with multiple courtyards",
            "The Golden Lotus tank for ritual bathing"
        ],
        fee: "Free Entry (₹100-500 for special rituals)",
        hours: "5:00 AM - 12:30 PM, 4:00 PM - 9:30 PM",
        bestTime: "December to February"
    },
    {
        id: 5,
        name: "Sanchi Stupa",
        type: "monument",
        location: "Sanchi, Madhya Pradesh",
        builtIn: "3rd Century BCE",
        builtBy: "Emperor Ashoka",
        emoji: "🙏",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20great%20stupa.jpg?width=800",
        overview: "The Great Stupa of Sanchi is one of the oldest and most important Buddhist monuments in India. Built by Emperor Ashoka, this hemispherical structure represents the pinnacle of early Buddhist architecture and houses relics of the Buddha.",
        famousFor: [
            "Oldest Buddhist structure in India",
            "Four ornately carved stone gateways",
            "Intricate relief carvings of Buddhist legends",
            "UNESCO World Heritage Site"
        ],
        history: "Constructed during Emperor Ashoka's reign in the 3rd century BCE, the Stupa was further embellished in the 1st century BCE with beautiful stone gateways. These gateways showcase the finest examples of early Buddhist art and were created by master craftsmen.",
        architecture: [
            "Hemispherical dome structure",
            "Four ceremonial gateways (Toranas)",
            "Intricate narratives carved on gateway pillars",
            "Protective stone railings"
        ],
        fee: "₹250 (Indians), $5 (Foreign nationals)",
        hours: "7:00 AM - 6:00 PM",
        bestTime: "October to March"
    },
    {
        id: 6,
        name: "Hawa Mahal (Palace of Winds)",
        type: "monument",
        location: "Jaipur, Rajasthan",
        builtIn: "1799",
        builtBy: "Maharaja Sawai Pratap Singh",
        emoji: "🏛️",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hawa%20Mahal%20(Jaipur).jpg?width=800",
        overview: "The Hawa Mahal is an architectural marvel featuring 953 small windows and intricate latticework. Built for royal women to observe street festivals while remaining unseen, this pink sandstone structure has become the symbol of Jaipur and one of India's most recognizable monuments.",
        famousFor: [
            "953 small ornate windows",
            "Distinctive five-story pink structure",
            "Ventilation cooling system design",
            "Unique architectural style"
        ],
        history: "Built in 1799 by Maharaja Sawai Pratap Singh, the Hawa Mahal was designed to allow royal women to observe street life and festivals without being seen. The name literally means 'Palace of Winds,' referring to the breeze that flows through its windows, keeping the interior cool.",
        architecture: [
            "Five stories of pink sandstone",
            "953 small windows (jalis) with intricate designs",
            "No rooms inside, just a hollow structure",
            "Perfect ventilation system"
        ],
        fee: "₹50 (Indians), $4 (Foreign nationals)",
        hours: "9:00 AM - 4:30 PM",
        bestTime: "October to March"
    },
    {
        id: 7,
        name: "Golden Temple (Harmandir Sahib)",
        type: "temple",
        location: "Amritsar, Punjab",
        builtIn: "1604 (Current structure completed 1809)",
        builtBy: "Guru Arjan Dev / Maharaja Ranjit Singh",
        emoji: "🛕",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Golden_Temple%2C_Amritsar_02.jpg/1920px-Golden_Temple%2C_Amritsar_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20190116181101",
        overview: "The Golden Temple, or Harmandir Sahib, is the holiest shrine in Sikhism. Set amid a sacred pool, its gold-plated upper structure gleams above the water, drawing pilgrims and visitors from every faith to its free community kitchen and serene surroundings.",
        famousFor: [
            "Gold-plated sanctum reflected in the Amrit Sarovar",
            "World's largest free community kitchen (langar)",
            "Open to people of all faiths",
            "Continuous recitation of the Guru Granth Sahib"
        ],
        history: "The temple's foundation was laid by Guru Arjan Dev in 1589, with construction completed in 1604. It was rebuilt and gilded with gold in the early 19th century under Maharaja Ranjit Singh, giving it the radiant appearance seen today.",
        architecture: [
            "Gold-plated copper dome and upper walls",
            "Causeway leading across the sacred pool",
            "Four entrances symbolizing openness to all",
            "Marble inlay work on the lower walls"
        ],
        fee: "Free Entry",
        hours: "24 Hours (open daily)",
        bestTime: "October to March"
    },
    {
        id: 8,
        name: "Konark Sun Temple",
        type: "temple",
        location: "Konark, Odisha",
        builtIn: "13th Century",
        builtBy: "King Narasimhadeva I",
        emoji: "🌞",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Konark%20Sun%20Temple.jpg?width=800",
        overview: "The Konark Sun Temple is designed as a colossal stone chariot dedicated to the Sun God, Surya. Its twenty-four elaborately carved wheels and team of stone horses make it one of the most striking examples of Odisha's Kalinga architecture.",
        famousFor: [
            "Shaped as a giant chariot with 24 carved wheels",
            "Intricate stone carvings of daily life and deities",
            "UNESCO World Heritage Site",
            "Alignment with sunrise on the sanctum"
        ],
        history: "Built in the 13th century by King Narasimhadeva I of the Eastern Ganga dynasty, the temple was constructed to commemorate a military victory. Much of the main tower collapsed centuries ago, but the surviving structure remains a masterpiece of medieval Indian art.",
        architecture: [
            "Chariot form with 24 giant stone wheels",
            "Seven stone horses representing the days of the week",
            "Elaborate relief carvings covering every surface",
            "Precisely aligned to catch the sun's rays"
        ],
        fee: "₹40 (Indians), $10 (Foreign nationals)",
        hours: "6:00 AM - 8:00 PM",
        bestTime: "October to February"
    },
    {
        id: 9,
        name: "Brihadeeswarar Temple",
        type: "temple",
        location: "Thanjavur, Tamil Nadu",
        builtIn: "1010 CE",
        builtBy: "Raja Raja Chola I",
        emoji: "🛕",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Brihadeeswarar_Temple_front_view.JPG/1920px-Brihadeeswarar_Temple_front_view.JPG?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20130904104049",
        overview: "The Brihadeeswarar Temple is a towering tribute to Chola architecture and devotion to Lord Shiva. Its massive vimana (tower) dominates the skyline of Thanjavur and reflects the engineering ambition of the great Chola empire.",
        famousFor: [
            "One of the tallest temple towers in India",
            "Massive monolithic Nandi statue",
            "UNESCO World Heritage 'Great Living Chola Temple'",
            "Ancient Tamil inscriptions on its walls"
        ],
        history: "Completed in 1010 CE by Emperor Raja Raja Chola I, the temple was built to showcase the might and artistry of the Chola dynasty. It remains an active place of worship over a thousand years after its construction.",
        architecture: [
            "216-foot vimana built from granite blocks",
            "Massive single-stone capstone atop the tower",
            "Intricate frescoes and sculptures",
            "Grand pillared halls surrounding the sanctum"
        ],
        fee: "Free Entry",
        hours: "6:00 AM - 12:30 PM, 4:00 PM - 8:30 PM",
        bestTime: "November to February"
    },
    {
        id: 10,
        name: "Somnath Temple",
        type: "temple",
        location: "Somnath, Gujarat",
        builtIn: "1951 (Current structure)",
        builtBy: "Reconstructed under Sardar Vallabhbhai Patel",
        emoji: "🕉️",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Somnath%20Temple.jpg?width=800",
        overview: "The Somnath Temple, believed to be the first among the twelve sacred Jyotirlinga shrines of Lord Shiva, stands on the shores of the Arabian Sea. Rebuilt several times through history, it symbolizes resilience and unbroken devotion.",
        famousFor: [
            "First of the twelve Jyotirlingas",
            "Coastal location facing the Arabian Sea",
            "History of destruction and reconstruction",
            "Sound and light show narrating its history"
        ],
        history: "Ancient texts trace the temple's origins back many centuries, though it was repeatedly destroyed by invaders and rebuilt by rulers and devotees alike. The present structure was reconstructed in 1951 in the Chalukya style, championed by Sardar Vallabhbhai Patel.",
        architecture: [
            "Chalukya-style shikhara (spire)",
            "Intricately carved stone exterior",
            "Coastal Kailash Mahameru Prasad style",
            "Ornamental pillars in the assembly hall"
        ],
        fee: "Free Entry",
        hours: "6:00 AM - 9:00 PM",
        bestTime: "October to March"
    },
    {
        id: 11,
        name: "Akshardham Temple",
        type: "temple",
        location: "New Delhi, Delhi",
        builtIn: "2005",
        builtBy: "BAPS Swaminarayan Sanstha",
        emoji: "🛕",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Akshardham_temple%2C_Delhi.jpg/1920px-Akshardham_temple%2C_Delhi.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20210624100128",
        overview: "Akshardham is a modern architectural wonder blending traditional Hindu craftsmanship with contemporary scale. Carved entirely from stone without structural steel, the complex includes exhibitions, gardens, and a musical fountain celebrating Indian culture.",
        famousFor: [
            "Intricately carved sandstone and marble monument",
            "Built without any structural steel",
            "Yagnapurush Kund, one of the world's largest stepwells",
            "Evening musical fountain show"
        ],
        history: "Completed in 2005 by the BAPS Swaminarayan Sanstha, Akshardham was built by thousands of volunteers and artisans using traditional techniques. It set a Guinness World Record as the world's largest comprehensive Hindu temple complex.",
        architecture: [
            "234 ornately carved pillars",
            "Nine domes and thousands of sculpted figures",
            "Central monument in pink sandstone and white marble",
            "Traditional Vastu Shastra design principles"
        ],
        fee: "Free Entry (charges for exhibitions and shows)",
        hours: "9:30 AM - 6:30 PM (Closed Mondays)",
        bestTime: "October to March"
    },
    {
        id: 12,
        name: "Jagannath Temple",
        type: "temple",
        location: "Puri, Odisha",
        builtIn: "12th Century",
        builtBy: "King Anantavarman Chodaganga Deva",
        emoji: "🛕",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Puri%20Jagannath%20Temple.jpg?width=800",
        overview: "The Jagannath Temple in Puri is one of the Char Dham pilgrimage sites of Hinduism, dedicated to Lord Jagannath. It is world-famous for its annual Rath Yatra (chariot festival), when massive wooden chariots carry the deities through the city streets.",
        famousFor: [
            "One of the four sacred Char Dham sites",
            "Annual Rath Yatra chariot festival",
            "Massive temple kitchen feeding thousands daily",
            "Distinctive wooden deity idols"
        ],
        history: "Construction began under King Anantavarman Chodaganga Deva in the 12th century and was completed by his successors. The temple has remained a center of devotion for centuries, with the Rath Yatra festival drawing millions of pilgrims each year.",
        architecture: [
            "Towering shikhara over 200 feet high",
            "Nilachakra (sacred wheel) atop the dome",
            "Kalinga-style temple architecture",
            "Massive temple kitchen with rows of clay ovens"
        ],
        fee: "Free Entry",
        hours: "5:00 AM - 12:00 AM",
        bestTime: "October to February"
    },
    {
        id: 13,
        name: "Vaishno Devi Temple",
        type: "temple",
        location: "Katra, Jammu & Kashmir",
        builtIn: "Ancient (exact date unknown)",
        builtBy: "Unknown (naturally formed cave shrine)",
        emoji: "⛰️",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Vaishno%20Devi%20Temple.jpg?width=800",
        overview: "Perched high in the Trikuta Hills, the Vaishno Devi Temple is one of the most visited pilgrimage sites in India. Devotees undertake a demanding trek to reach the sacred cave shrine dedicated to the goddess Vaishno Devi.",
        famousFor: [
            "Sacred cave shrine in the Trikuta Hills",
            "Challenging 12 km pilgrim trek",
            "Three natural rock formations (pindis)",
            "Among the most visited shrines in India"
        ],
        history: "The shrine's origins are rooted in legend, with devotees believing the goddess resides in the cave in the form of three natural rock pindis. The pilgrimage has drawn devotees for centuries and has grown into one of the busiest religious treks in the world.",
        architecture: [
            "Natural cave sanctum with rock formations",
            "Pilgrim pathway with rest stations",
            "Modern helipad and battery car access points",
            "Ardhkuwari cave en route to the main shrine"
        ],
        fee: "Free Entry (Yatra registration required)",
        hours: "24 Hours (open daily)",
        bestTime: "March to October"
    },
    {
        id: 14,
        name: "Tirupati Venkateswara Temple",
        type: "temple",
        location: "Tirumala, Andhra Pradesh",
        builtIn: "9th-10th Century (Expanded through the centuries)",
        builtBy: "Pallava and Chola Dynasties",
        emoji: "🛕",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Venkateshwara_Tirupati_Temple.jpg/1920px-Venkateshwara_Tirupati_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20171017111533",
        overview: "The Tirupati Venkateswara Temple, perched atop the Tirumala hills, is one of the wealthiest and most visited pilgrimage sites in the world. Dedicated to Lord Venkateswara, a form of Vishnu, it draws vast crowds of devotees every single day.",
        famousFor: [
            "Among the most visited religious sites globally",
            "Tradition of hair-tonsuring offerings",
            "Famous Tirupati laddu prasadam",
            "Ornate gopuram gilded in gold"
        ],
        history: "The temple's earliest structures date back to the 9th and 10th centuries, with major expansions by the Pallava, Chola, and Vijayanagara rulers. It has remained a continuously active center of Vaishnavite worship for over a thousand years.",
        architecture: [
            "Golden Ananda Nilayam gopuram",
            "Dravidian-style temple complex",
            "Multiple concentric courtyards (prakarams)",
            "Richly decorated pillared halls"
        ],
        fee: "Free Darshan (special entry tickets available)",
        hours: "3:00 AM - 1:30 AM (varies by darshan type)",
        bestTime: "September to February"
    },
    {
        id: 15,
        name: "Lotus Temple",
        type: "temple",
        location: "New Delhi, Delhi",
        builtIn: "1986",
        builtBy: "Architect Fariborz Sahba (Baháʼí community)",
        emoji: "🪷",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lotus%20Temple%20in%20New%20Delhi.jpg?width=800",
        overview: "The Lotus Temple is a Baháʼí House of Worship shaped like a blooming lotus flower, welcoming people of all religions to pray or meditate in silence. Its striking marble-clad form has made it one of the most photographed buildings in India.",
        famousFor: [
            "Lotus-flower shaped marble architecture",
            "Open to people of every faith",
            "Award-winning modern design",
            "Serene surrounding gardens and pools"
        ],
        history: "Completed in 1986 and designed by architect Fariborz Sahba, the Lotus Temple was built as a Baháʼí House of Worship. It has since won numerous architectural awards and become one of the most visited buildings in the world.",
        architecture: [
            "27 free-standing marble petals",
            "Nine sides arranged in a lotus form",
            "Surrounding reflective pools",
            "No idols or images inside, only silent halls"
        ],
        fee: "Free Entry",
        hours: "9:00 AM - 5:30 PM (Closed Mondays)",
        bestTime: "October to March"
    },
    {
        id: 16,
        name: "Virupaksha Temple",
        type: "temple",
        location: "Hampi, Karnataka",
        builtIn: "7th Century (Expanded in 14th-16th Century)",
        builtBy: "Vijayanagara Empire",
        emoji: "🛕",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Virupaksha%20Temple%2C%20Hampi.jpg?width=800",
        overview: "The Virupaksha Temple, dedicated to Lord Shiva, sits at the heart of the ruined city of Hampi. As the only temple in the complex still in active worship, it stands as a living link to the once-mighty Vijayanagara Empire.",
        famousFor: [
            "Only continuously active shrine in Hampi's ruins",
            "Towering nine-story gopuram",
            "Inverted shadow of the tower inside the sanctum",
            "UNESCO World Heritage Site"
        ],
        history: "Parts of the temple date back to the 7th century, but it was greatly expanded under the Vijayanagara Empire between the 14th and 16th centuries, becoming the empire's principal royal temple before the city's fall.",
        architecture: [
            "50-meter tall stepped gopuram",
            "Pinhole camera effect casting an inverted tower shadow",
            "Pillared marriage hall with detailed carvings",
            "Sacred temple tank and processional street"
        ],
        fee: "Free Entry (small camera fee)",
        hours: "6:00 AM - 9:00 PM",
        bestTime: "October to February"
    },
    {
        id: 17,
        name: "Ramanathaswamy Temple",
        type: "temple",
        location: "Rameswaram, Tamil Nadu",
        builtIn: "12th Century (Expanded through the 17th Century)",
        builtBy: "Pandya and Setupati Rulers",
        emoji: "🛕",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ramanathaswamy%20Temple.jpg?width=800",
        overview: "The Ramanathaswamy Temple, one of the twelve Jyotirlinga shrines, is renowned for having the longest corridor of any temple in India. Linked to the Ramayana, it is a major stop on the Char Dham pilgrimage circuit.",
        famousFor: [
            "Longest temple corridor in the world",
            "One of the twelve Jyotirlingas",
            "Association with the Ramayana epic",
            "22 sacred wells (theerthams) for ritual bathing"
        ],
        history: "Construction began under Pandya rulers around the 12th century, with major corridor expansions completed by the Setupati rulers of Ramnad through the 17th century, making it one of South India's grandest temple complexes.",
        architecture: [
            "Corridor stretching over 1,200 meters with carved pillars",
            "Twin lingams representing Rama and Hanuman's devotion",
            "Tall gopurams at the eastern and western entrances",
            "Sacred wells within the temple grounds"
        ],
        fee: "Free Entry (fee for corridor and well bathing)",
        hours: "5:00 AM - 1:00 PM, 3:00 PM - 9:00 PM",
        bestTime: "October to April"
    },
    {
        id: 18,
        name: "Dilwara Temples",
        type: "temple",
        location: "Mount Abu, Rajasthan",
        builtIn: "11th-13th Century",
        builtBy: "Vimal Shah and Vastupal-Tejpal",
        emoji: "🛕",
        image: "https://media.gettyimages.com/id/148563570/photo/roofs-of-dilwara-jain-temples.jpg?s=612x612&w=0&k=20&c=z9IAML-uYJ4aJzgi1-bkWAtwmiBoi21VMIP2rJdhWgk=",
        overview: "The Dilwara Temples are a group of Jain temples famed for marble carvings of astonishing delicacy. Hidden behind plain exteriors, the interiors reveal some of the finest and most intricate stone artistry in India.",
        famousFor: [
            "Exceptionally fine marble carvings",
            "Group of five Jain temples",
            "Intricately carved marble ceilings",
            "Deliberately plain, unassuming exterior"
        ],
        history: "The earliest of the five temples was commissioned by Vimal Shah in 1031, with the Luna Vasahi temple added by brothers Vastupal and Tejpal in the 13th century. Both were built to honor Jain Tirthankaras with the finest craftsmanship available.",
        architecture: [
            "Pure white marble interiors",
            "Ceilings carved into intricate floral and figural patterns",
            "Ornate pillars with concentric carved rings",
            "Plain exterior contrasting rich interior detail"
        ],
        fee: "Free Entry (camera fee applies)",
        hours: "12:00 PM - 6:00 PM (Closed to non-Jains in the morning)",
        bestTime: "October to March"
    }
];

let currentAttractionId = null;

// Attach load/error handlers so the shimmer placeholder clears once a
// photo is ready, and falls back gracefully if a photo fails to load.
function wireImage(imgEl, wrapperEl) {
    imgEl.addEventListener('load', () => {
        imgEl.classList.add('loaded');
        wrapperEl.classList.add('img-loaded');
    });
    imgEl.addEventListener('error', () => {
        imgEl.style.display = 'none';
        wrapperEl.classList.add('img-loaded');
    });
    // Handle already-cached images (load event may not fire again)
    if (imgEl.complete && imgEl.naturalWidth > 0) {
        imgEl.classList.add('loaded');
        wrapperEl.classList.add('img-loaded');
    }
}

// Render attractions
function renderAttractions(filter = 'all') {
    const grid = document.querySelector('.attractions-grid');

    const doRender = () => {
        grid.innerHTML = '';

        attractions
            .filter(a => filter === 'all' || a.type === filter)
            .forEach((attraction, index) => {
                const card = document.createElement('article');
                card.className = 'attraction-card';
                card.setAttribute('role', 'listitem');
                card.style.animationDelay = `${Math.min(index * 0.08, 0.5)}s`;
                card.innerHTML = `
                    <div class="attraction-image">
                        <img src="${attraction.image}" alt="${attraction.name}" loading="lazy">
                        <span class="attraction-emoji-badge" aria-hidden="true">${attraction.emoji}</span>
                    </div>
                    <div class="attraction-info">
                        <h3>${attraction.name}</h3>
                        <div class="attraction-location">
                            📍 ${attraction.location}
                        </div>
                        <p class="attraction-description">${attraction.overview.substring(0, 100)}...</p>
                        <button class="view-details-btn" data-id="${attraction.id}" aria-label="View details for ${attraction.name}">
                            View Details
                        </button>
                    </div>
                `;
                grid.appendChild(card);

                const img = card.querySelector('.attraction-image img');
                const wrapper = card.querySelector('.attraction-image');
                wireImage(img, wrapper);

                card.querySelector('.view-details-btn').addEventListener('click', () => openModal(attraction.id));
            });

        grid.classList.remove('grid-fading');
    };

    // Fade the grid out, swap content, fade back in for a smoother filter change
    if (grid.children.length > 0) {
        grid.classList.add('grid-fading');
        setTimeout(doRender, 220);
    } else {
        doRender();
    }
}

// Open modal
function openModal(id) {
    const attraction = attractions.find(a => a.id === id);
    if (!attraction) return;

    currentAttractionId = id;

    // Fill modal header
    document.getElementById('modalTitle').textContent = attraction.name;
    document.getElementById('modalType').textContent = attraction.type.charAt(0).toUpperCase() + attraction.type.slice(1);
    document.getElementById('modalLocation').textContent = attraction.location;
    document.getElementById('modalBuiltIn').textContent = attraction.builtIn;
    document.getElementById('modalBuiltBy').textContent = attraction.builtBy;

    // Fill content
    document.getElementById('modalOverview').textContent = attraction.overview;
    document.getElementById('modalHistory').textContent = attraction.history;

    // Fill lists
    const famousList = document.getElementById('modalFamousFor');
    famousList.innerHTML = attraction.famousFor
        .map(item => `<li>${item}</li>`)
        .join('');

    const architectureList = document.getElementById('modalArchitecture');
    architectureList.innerHTML = attraction.architecture
        .map(item => `<li>${item}</li>`)
        .join('');

    // Visitor info
    document.getElementById('modalFee').textContent = attraction.fee;
    document.getElementById('modalHours').textContent = attraction.hours;
    document.getElementById('modalBestTime').textContent = attraction.bestTime;

    // Hero image
    const heroWrapper = document.querySelector('.modal-hero');
    const heroImg = document.getElementById('modalHeroImg');
    heroImg.classList.remove('loaded');
    heroWrapper.classList.remove('img-loaded');
    heroImg.src = attraction.image;
    heroImg.alt = attraction.name;
    wireImage(heroImg, heroWrapper);
    document.getElementById('modalHeroCaption').textContent = attraction.emoji;

    // Show modal
    const modal = document.getElementById('detailModal');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Reset scroll position and re-trigger section entrance animation
    const modalContent = document.querySelector('.modal-content');
    modalContent.scrollTop = 0;
    document.querySelectorAll('.modal-section, .visit-info').forEach(el => {
        el.style.animation = 'none';
        // Force reflow so the animation restarts each time the modal opens
        void el.offsetWidth;
        el.style.animation = '';
    });

    modal.focus();
}

// Close modal
function closeModal() {
    const modal = document.getElementById('detailModal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// Filter functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        renderAttractions(btn.dataset.filter);
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Modal close on background click
document.getElementById('detailModal').addEventListener('click', (e) => {
    if (e.target.id === 'detailModal') {
        closeModal();
    }
});

document.querySelector('.modal-close').addEventListener('click', closeModal);

// Scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initial render
renderAttractions();
