const coordinatesByChatGPT = [
  [103.6828, 1.3456], // Nanyang Technological University, Singapore
  [-43.2089, -22.911], // Institute for Technology & Society, Rio de Janeiro, Brazil
  [106.8025, -6.2187], // ERIA: Economic Research Institute for ASEAN and East Asia, Senayan, Indonesia
  [103.7749, 1.3051], // Tech For Good Institute, Singapore
  [-46.6333, -23.5505], // Regional Center for Studies on the Development of the Information Society, Saõ Paulo, Brazil
  [-77.0438, -12.0464], // Hiperderecho, Lima, Peru
  [-58.4303, -34.6037], // Asociación por los Derechos Civiles, Buenos Aires, Argentina
  [-46.6333, -23.5505], // Desinformante, Saõ Paulo, Brazil
  [-74.0721, 4.711], // El Veinte, Bogota, Colombia
  [-84.0806, 9.9281], // PROLEDI (Programa Derecho a la Libertad de Expresión de la Universidad de Costa Rica), San José, Costa Rica
  [120.9819, 14.5643], // De La Salle University, Manila, Philippines
  [-71.1186, 42.3736], // Shorenstein Center Harvard Kennedy School, Cambridge, United States
  [114.1373, 22.2839], // Journalism and Media Studies Centre - Hong Kong University, Pok Fu Lam, Hong Kong
  [121.0579, 14.676], // Foundation for Media Alternatives, Quezon City, Philippines
  [110.4229, -7.0051], // Department of Government Studies Diponegoro University, Semarang, Indonesia
  [110.4085, -7.7714], // Communication Science Department University of Gadjah Mada, Yogyakarta, Indonesia
  [-17.4498, 14.6928], // Capacity Equals Development Africa, DAKAR, Senegal
  [78.9629, 20.5937], // Institute of Knowledge Societies, India
  [96.0657, 21.9162], // Myanmar ICT for Development Organization (MIDO), Myanmar
  [121.544, 29.8326], // School of International Communications The University of Nottingham Ningbo, China
  [153.0235, -27.4698], // Centre of Excellence for Automated Decision-Making and Society (ARC), Brisbane, Australia
  [12.4964, 41.9028], // Open Observatory of Network Interference (OONI), Rome, Italy
  [-73.9866, 40.7128], // Columbia Global Freedom of Expression, New York, United States
  [37.6173, 55.7558], // UNESCO Institute for Information Technologies in Education, Moscow, Russian Federation
  [101.5894, 3.0435], // SINAR Project, Subang Jaya, Malaysia
  [9.7064, 4.0511], // ADISI-Cameroun, Douala, Cameroon
  [151.2093, -33.8688], // CSIRO's Data61, Sydney, Australia
  [-3.7175, 40.4168], // Observatorio de la Desinformación - Uni Complutense, Madrid, Spain
  [121.098, 14.6488], // IDEA Corp inc, Marikina City, Philippines
  [32.2903, 0.3476], // Digital Literacy Initiative (DLI), Uganda
  [126.978, 37.5665], // Open Net, Seoul, Korea, Republic of
  [-57.6359, -25.2637], // Association of Technology, Education, Development, Research and Communication (TEDIC), Asuncion, Paraguay
  [36.8219, -1.2864], // Kenya ICT Action Network (KICTANet), Nairobi, Kenya
  [-72.5301, 42.3736], // University of Massachusetts Amherst, Amherst, United States
  [115.8589, -31.9505], // Curtin University: Digital Transformation Research Unit, Perth, Australia
  [115.8589, -31.9505], // University of Western Australia Tech & Policy Lab, Perth, Australia
  [149.1245, -35.3075], // Tech Policy Design Centre, Australian National University, Canberra, Australia
  [174.7613, -36.8485], // Maxim Institute, Auckland, New Zealand
  [174.7613, -36.8485], // FIBRE FALE, Auckland, New Zealand
  [139.6917, 35.6895], // Toda Peace Institute, Tokyo, Japan
  [2.3522, 48.8566], // Sciences Po CEVIPOF Research, Paris, France
  [-80.5404, 43.4643], // Centre for International Governance Innovation (CIGI), Waterloo, Canada
  [-0.1276, 51.5074], // Article 19, London, United Kingdom
  [-77.0369, 38.9072], // The Coalition for Independent Technology Research, New York, United States
  [-77.0369, 38.9072], // Carnegie Endowment for International Peace, Washington, United States
  [-77.0369, 38.9072], // Integrity Institute, Washington, United States
  [13.4049, 52.520], // Democracy Reporting International, Berlin, Germany
  [-1.5208, 51.752], // Our World in Data - Global Change Data Lab, Oxford, United Kingdom
  [12.3155, 45.4408], // ISTC-CNR, Institute for Cognitive Sciences and Technologies del CNR, Italy
  [-0.1276, 51.5074], // Institute for Strategic Dialogue (ISD), London, United Kingdom
  [8.5417, 47.3769], // International Panel on the Information Environment (IPIE), Zurich, Switzerland
  [-77.0369, 38.9072], // Global Network Initiative, Washington, United States
  [-77.0369, 38.9072], // Council on Tech and Social Cohesion (CTSC), United States
  [2.3515, 48.8566], // Forum on Information and Democracy (FID), Paris, France
  [7.4474, 46.948], // United Nations Human Rights, Switzerland
  [-6.2603, 53.3498], // Digital Action, Dublin, Ireland
  [-77.0369, 38.9072], // Center for AI and Digital Policy, Washington, United States
  [-46.6333, -23.5505], // data privacy BR, São Paulo, Brazil
  [-47.8825, -15.7942], // Ibict - Instituto Brasileiro de Informação em Ciência e Tecnologia, Brasília, Brazil
  [72.8777, 19.0759], // Tata STRIVE, Mumbai, India
  [14.4378, 50.0755], // International Association for Media and Communication Research (IAMCR), Praha, Czech Republic
  [114.1095, -22.3964], // The International Digital Policy Lab, Australia
  [30.0588, -1.9479], // Innovation 4 Policy Foundation, Kigali, Rwanda
  [18.4241, -33.9249], // Research ICT Africa, Cape Town, South Africa
  [2.3515, 48.8566], // TESaCo, Paris, France
  [77.5946, 12.9716], // IT for Change, Bengaluru, India
  [31.2357, 30.0444], // Access to Knowledge for Development Center (A2K4D), Cairo, Egypt
  [13.3889, 52.5176], // Alexander von Humboldt Institute for Internet and Society (HIIG), Berlin, Germany
  [-71.1284, 42.3601], // Berkman Klein Center for Internet & Society, Cambridge, United States
  [-3.7038, 40.4168], // Syntagma, Madrid, Spain
  [7.2163, 51.4783], // Center for Advanced Internet Studies (CAIS), Bochum, Germany
  [35.2137, 31.7683], // Center for Cyber Law & Policy (CCLP) Israel, Israel
  [-119.6982, 34.4208], // Center for Information Technology & Society (CITS), Santa Barbara, United States
  [18.0686, 59.3293], // Swedish Law and Informatics Research Institute (IRI), Stockholm University, Stockholm, Sweden
  [19.0402, 47.4979], // Center for Media, Data and Society (CMDS), Budapest, Hungary
  [-0.1276, 51.5074], // Demos, London, United Kingdom
  [-58.4303, -34.6037], // Center for Studies on Freedom of Expression and Access to Information, Buenos Aires, Argentina
  [-9.1424, 38.7223], // Cyberlaw Research Centre (CIJIC), Lisboa, Portugal
  [14.4208, 50.088], // Central European Digital Media Observatory, Prague, Czech Republic
  [-73.5673, 45.5128], // Centre de Recherche en Droit Public, Montreal, Canada
  [12.5683, 55.6761], // Centre for Communication and Computing, Copenhagen, Denmark
  [-58.4303, -34.6037], // Centro de Tecnologia y Sociedad, Buenos Aires, Argentina
  [90.4125, 23.8103], // Centre for Internet, Smartphone and Society, Bangladesh (CISS-BD), Dhaka, Bangladesh
  [-99.1332, 19.4326], // Centro Latam Digital, Mexico City, Mexico
  [6.1443, 46.2044], // Digital Law Center (DLC), Geneva, Switzerland
  [144.9631, -37.8136], // Digital Ethnography Research Centre (DEC), Melbourne, Australia
  [6.7735, 51.2277], // Digital Life Initiative (DLI), New York City, United States
  [6.7743, 51.2201], // Düsseldorf Institute for Competition Economics (DICE), Düsseldorf, Germany
  [79.8612, 6.9271], // LIRNEasia, Colombo, Sri Lanka
  [36.8219, -1.2864], // Nobeah Foundation, Nairobi, Kenya
  [-0.1276, 51.5074], // Global Partners Digital, United Kingdom
  [-46.6333, -23.5505], // Internetlab, São Paulo, Brazil
  [116.4074, 39.9042], // Institute for Internet Policy & Law (IIPL), Beijing, China
  [116.4074, 39.9042], // Institute for Studies on Artificial Intelligence and Law, Beijing, China
  [4.8952, 52.3676], // Institute of Network Cultures, Amsterdam, Netherlands
  [14.5058, 46.0569], // Intellectual Property Institute (IPI), Ljubljana, Slovenia
  [11.3425, 44.4949], // Interdepartmental Centre for Research in the History, Philosophy and Sociology of Law, and in Legal Informatics, Bologna, Italy
  [1.9782, 41.2754], // Internet Interdisciplinary Institute (IN3), Castelldefels, Spain
  [-71.1186, 42.3736], // Regional Center for Studies on the Development of the Information Society (Cetic.br), Cambridge, Brazil
  [30.3351, 59.9343], // Laboratory for Internet Studies (LINIS), St. Petersburg, Russian Federation
  [24.9375, 60.1695], // Legal Tech Lab, Helsinki, Finland
  [7.6869, 45.0703], // Nexa Center for Internet & Society, Politecnico di Torino, Torino, Italy
  [113.5439, 22.202], // United Nations University Institute on Computing and Society, Macau, China
  [79.9708, 6.9271], // National Secretariat for Media Reforms (NSMR), Nugegoda, Sri Lanka
  [-58.4303, -34.6037], // Observatorio de Derecho Informatico Argentino (O.D.I.A.), Argentina
  [4.8628, 50.4642], // Research Centre in Information, Law and Society Of the University of Namur (CRIDS), Namur, Belgium
  [-122.3321, 47.6062], // Stanford Cyber Policy Center, United States
  [21.0118, 52.2297], // The New Research on Digital Societies (NeRDS group), Warszawa, Poland
  [103.8565, 1.3521], // Singapore Internet Research Centre, Singapore
  [5.0913, 51.5555], // Tilburg Institute for Law, Technology, and Society, Tilburg, Netherlands
  [-1.6174, 55.007], // The Northumbria Internet & Society Research Interest Group (NINSO), Newcastle, United Kingdom
  [24.9416, 60.1695], // University of Helsinki Legal Tech Lab, Helsinki, Finland
  [105.8342, 21.0285], // Vietnam Program for Internet & Society (VPIS), Hanoi, Viet Nam
  [-0.1276, 51.5074], // Digital Technologies Policy Laboratory, London, United Kingdom
  [10.1761, 36.8065], // Arab World Internet Institute, Tunis, Tunisia
  [-0.2076, 5.6037], // E-Governance and Internet Governance Foundation for Africa (EGIGFA), Accra, Ghana
  [11.5833, 48.1351], // Bavarian Research Institute for Digital Transformation (bidt), Munich, Germany
  [8.5417, 47.3769], // Center for Information Technology, Society, and Law (ITSL), Zürich, Switzerland
  [-1.6639, 42.815], // Center for Internet Studies and Digital Life, Pamplona, Spain
  [-58.4303, -34.6037], // Center for Studies on Freedom of Expression and Access to Information (CELEUP), Buenos Aires, Argentina
  [-75.6903, 45.4215], // Centre for Law, Technology and Society, Ottawa, Canada
  [11.8768, 45.4064], // Innovation and Technology Law Lab, Padova, Italy
  [-1.1296, 52.6369], // Centre for Computing and Social Responsibility, Leicester, United Kingdom
  [2.3515, 48.8566], // Centre Internet et Société du CNRS / Center for Internet and Society of CNRS (CIS-CNRS), Paris, France
  [-74.0621, 4.6564], // Centro de Internet y Sociedad – Universidad del Rosario (ISUR), Bogota, Colombia
  [-70.6483, -33.4569], // Derechos Digitales, Santiago de Chile, Chile
  [55.2708, 25.2048], // Governance and Innovation Program at MBR School of Government, United Arab Emirates
  [4.9021, 52.3676], // Institute for Information Law (IVIR), Amsterdam, Netherlands
  [7.6261, 51.962], // Institute for Information, Telecommunication and Media Law (ITM), Münster, Germany
  [-56.1917, -34.9011], // Grupo de Investigación sobre Uruguay Sociedad e Internet (GIUSI), Montevideo, Uruguay
  [100.5231, 13.7563], // Manushya Foundation ♾ #WeAreManushyan, Phaya Thai, Thailand
  [34.9889, 32.794], // Haifa Center for Law & Technology, Haifa, Israel
  [0.6955, 51.8225], // Human Rights, Big Data and Technology, Essex, United Kingdom
  [30.3351, 59.9343], // International Laboratory for Information Technology and Intellectual Property Law, St. Petersburg, Russian Federation
  [4.694, 50.8754], // KU Leuven Centre for IT & IP Law (CiTiP), Leuven, Belgium
  [13.4049, 52.520], // Internet Policy project group (POLI), Germany
  [2.3325, 48.8606], // Radical Xchange (French Chapter), Paris, France
  [-95.3923, 29.7221], // University of Houston Law Center, Houston, United States
  [139.5383, 35.3715], // Keio International Project for Internet & Society, Fujisawa, Japan
  [-71.0922, 42.3601], // MIT Center for Civic Media, Cambridge, United States
  [10.7522, 59.9139], // Nordic Centre for Internet and Society, Oslo, Norway
  [8.5417, 47.3769], // Media Change & Innovation Division, IPMZ, Zurich, Switzerland
  [-73.9826, 40.7213], // Centre for Media Pluralism and Media Freedom (CMPF), Florence, Italy
  [-73.9866, 40.7128], // The Governance Lab, New York, United States
  [-46.6333, -23.5505], // InternetLab - human rights and internet policy think tank, São Paulo, Brazil
  [-84.4788, 42.7337], // Quello Center, Michigan State University, East Lansing, United States
  [-1.2577, 51.752], // Oxford Internet Institute (OII), Oxford, United Kingdom
  [-0.1276, 51.5074], // Public Data Lab, London, United Kingdom
  [18.0686, 59.3293], // Swedish Law and Informatics Research Institute (IRI), Sweden
  [-43.2096, -22.9035], // The Center for Technology & Society (CTS), Rio de Janeiro, Brazil
  [13.3875, 52.5172], // Weizenbaum Institute for the Networked Society, Berlin, Germany
  [121.0163, 14.5565], // AMIC (Asian Media Information and Communication Centre), Manila, Philippines
  [144.9581, -37.8093], // International Digital Policy Lab, Melbourne, Australia
  [71.5249, 30.3753], // Digital Rights Foundation, Pakistan
  [-75.1652, 39.9526], // Center for Advanced Research in Global Communication (CARGC), Philadelphia, United States
  [2.3515, 48.8566], // CNRS, Paris, France
  [-74.082, 4.711], // Movilizatorio, Bogotá, Colombia
  [4.3517, 50.8503], // European External Action Service, Brussels, Belgium
  [2.3312, 48.863], // #Leplusimportant, Paris, France
  [-0.1276, 51.5074], // Center for Countering Digital Hate, London, United Kingdom
  [-1.2558, 51.752], // Oxford University’s Programme on Democracy & Technology, Oxford, United Kingdom
  [28.0473, -26.2041], // International Institute for Ethical Governance and Accountability (IIEGA), Johannesburg, South Africa
  [10.7522, 59.9139], // University of Oslo, Oslo, Norway
  [5.2913, 52.1326], // Institute for Accountability in the Digital Age, Netherlands
  [126.9779, 37.5665], // Center for Law & Technology, Seoul, Korea, Republic of
  [-78.9437, 35.9993], // Center on Science & Technology Policy at Duke University, Durham, NC, United States
  [77.1867, 28.6448], // Centre for Communication Governance at National Law University Delhi (CCG), New Delhi, India
  [-1.1296, 52.6369], // Centre for Computing and Social Responsibility, Leicester, United Kingdom
  [77.5946, 12.9716], // Centre for Internet & Society (CIS), Bangalore, India
  [0.1218, 52.2043], // Centre for the Study of Existential Risk, Cambridge, United Kingdom
  [16.3738, 48.2082], // Department of Innovation and Digitalisation in Law, Vienna, Austria
  [6.1432, 49.6116], // DiploFoundation, Geneva, Switzerland
  [-71.1087, 42.4188], // Digital Planet, Medford, United States
  [114.1095, 22.3964], // Digital Asia Hub (DAH), Hong Kong Island, Hong Kong
  [-43.2096, -22.9035], // Centro de Ensino e Pesquisa em Inovação (GEPI), Rio de Janeiro, Brazil
  [-77.0369, 38.9072], // Elliott School of International Affairs, Washington, United States
  [-95.7129, 37.0902], // Global Network of Internet & Society Centers (NoC), United States
  [9.9937, 53.5653], // Hans-Bredow-Institut, Hamburg, Germany
  [-72.9279, 41.3107], // Information Society Project at Yale Law School, New Haven, United States
  [28.9652, 41.0082], // IT Law Institute at Istanbul Bilgi University, İstanbul, Turkey
  [9.0579, 48.5216], // International Center for Ethics in the Sciences and Humanities (IZEW), Tübingen, Germany
  [13.4049, 52.5200], // Internet Policy project group (POLI) at Berlin Social Science Center (WZB), Berlin, Germany
  [-43.2096, -22.9035], // Institute for Research on Internet & Society (IRIS), Belo Horizonte, Brazil
  [139.6917, 35.6895], // Keio International Project for Internet & Society, Tokyo, Japan
  [-74.0721, 4.7110], // Linterna Verde (LV), Bogotá, Colombia
  [32.5729, 0.3476], // People Interest Technology Africa, Kampala, Uganda
  [-1.2585, 51.7567], // Oxford Internet Institute (OII), University of Oxford, Oxford, United Kingdom
  [-56.1645, -34.9011], // Observacom, Uruguay
  [153.0235, -27.4705], // QUT Digital Media Research Centre, Brisbane City, Australia
  [35.5021, 33.8938], // SMEX, Beirut, Lebanon
  [-4.2518, 55.8609], // Strathclyde Centre for Internet Law & Policy, Glasgow, United Kingdom
  [-122.3321, 47.6062], // Technology & Social Change Group (TASCHA), Seattle, United States
  [4.3601, 50.8371], // Research Group on Law, Science, Technology & Society (LSTS), Brussels, Belgium
  [19.1471, 48.7374], // UMB Data&Society Lab, Banská Bystrica, Slovakia
  [-0.0649, 50.8599], // Sussex Centre for Information Governance Research, Falmer, United Kingdom
  [4.3587, 50.8411], // Unité de droit économique, Centre de droit privé, Brussels, Belgium
  [-122.1715, 37.4275], // Stanford Center for Internet and Society (CIS), Stanford, United States
  [9.9384, 49.7913], // Würzburg Centre for Social and Legal Implications of Artificial Intelligence (SOCAI), Würzburg, Germany
  [-1.3924, 50.9365], // Web Science Institute, Southampton, United Kingdom
  [-60.6475, -32.9499], // Centro de Tecnologia y Sociedad (CETyS), Victoria, Argentina
  [-77.0369, 38.9072], // Digital Trade and Data Governance Hub, Washington, United States
  [115.8575, -31.9505], // The University of Western Australia, Perth, Australia
  [115.9004, -31.9505], // Curtin University, Bentley, Australia
  [174.777, -36.8471], // Otago Polytechnic Auckland International Campus, Auckland, New Zealand
  [149.1287, -35.2820], // Tech Policy Design Centre, Canberra, Australia
  [-122.4194, 37.7749], // Build Up ^, San Francisco, United States
  [-77.0369, 38.9072], // Search for Common Ground, Washington, United States
  [-118.2437, 34.0522], // Neely Center for Ethical Leadership and Decision Making, Los Angeles, United States
  [2.3515, 48.8566], // OECD.AI, Paris, France
  [-122.4194, 37.7749], // BSR, San Francisco, United States
  [-77.0369, 38.9072], // Portulans Institute, Washington D.C., United States
  [-8.8881, 38.5306] // Internet Society Portugal Chapter (ISOCPT), Setúbal, Portugal
]

module.exports = { coordinatesByChatGPT }