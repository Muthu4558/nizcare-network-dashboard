


document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');

    toggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });
});




function showDistricts() {
    const stateInput = document.getElementById('stateInput').value;
    const districtInput = document.getElementById('districts');

    const districtsByState = {
        "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa"],
        "Arunachal Pradesh": ["Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", "Kamle", "Kra Daadi", "Kurung Kumey", "Lepa Rada", "Lohit", "Longding", "Lower Dibang Valley", "Lower Siang", "Lower Subansiri", "Namsai", "Pakke Kessang", "Papum Pare", "Shi Yomi", "Siang", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang"],
        "Assam": ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"],
        "Bihar": ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"],
        "Chhattisgarh": ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Gaurela-Pendra-Marwahi", "Janjgir-Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"],
        "Goa": ["North Goa", "South Goa"],
        "Gujarat": ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"],
        "Haryana": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
        "Himachal Pradesh": ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
        "Jharkhand": ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahebganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"],
        "Karnataka": ["Bagalkote", "Bengaluru", "Belagavi", "Bellary", "Bidar", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayapura", "Yadgir"],
        "Kerala": ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"],
        "Madhya Pradesh": ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Niwari", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],
        "Maharashtra": ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"],
        "Manipur": ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"],
        "Meghalaya": ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"],
        "Mizoram": ["Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"],
        "Nagaland": ["Chumukedima", "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Noklak", "Peren", "Phek", "Tseminyu", "Tuensang", "Wokha", "Zunheboto"],
        "Odisha": ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Sonepur", "Sundergarh"],
        "Punjab": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Muktsar", "Nawanshahr", "Pathankot", "Patiala", "Rupnagar", "Sangrur", "SAS Nagar", "Tarn Taran"],
        "Rajasthan": ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"],
        "Sikkim": ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],
        "Tamil Nadu": ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kancheepuram", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Kanyakumari", "Namakkal", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"],
        "Telangana": ["Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar", "Jogulamba", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem", "Mahabubabad", "Mahbubnagar", "Mancherial", "Medak", "Medchal", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal (Rural)", "Warangal (Urban)", "Yadadri Bhuvanagiri"],
        "Tripura": ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"],
        "Uttar Pradesh": ["Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Prayagraj", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shrawasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"],
        "Uttarakhand": ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],
        "West Bengal": ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"]
    };

    // Clear the previous districts
    districtInput.innerHTML = '';

    // Populate the districts based on the selected state
    if (districtsByState[stateInput]) {
        districtsByState[stateInput].forEach(function (district) {
            let option = document.createElement('option');
            option.value = district;
            districtInput.appendChild(option);
        });
    }
};


// Sample data from your JSON file (you'll need to load the actual JSON file or API)
const data = {
    "Sheet1": [
    {
  "Lab name": "Accura Labs",
  "State": "Andhra Pradesh",
  "City": "Tadepalligudem",
  "Pincode": 534101,
  "NABL\/NABH": "They don't  have"
 },
 {
  "Lab name": "Rafa Laboratory",
  "State": "Andhra Pradesh",
  "City": "Vijayawada",
  "Pincode": 520007,
  "NABL\/NABH": "PENDING DOC"
 },
 {
  "Lab name": "SIMS Hospital",
  "State": "Andhra Pradesh",
  "City": "Vijayawada",
  "Pincode": 520002,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Sri Vijaya Computerised Clinical Lab",
  "State": "Andhra Pradesh",
  "City": "Palakollu",
  "Pincode": 534260,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Adarsh Diagnostic Center",
  "State": "Andhra Pradesh",
  "City": "Chirala",
  "Pincode": 523155,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Crystal Diagnostic",
  "State": "Andhra Pradesh",
  "City": "Tirupati",
  "Pincode": 517501,
  "NABL\/NABH": "PENDING DOC"
 },
 {
  "Lab name": "Amrutha Sai Diagnostic Center",
  "State": "Andhra Pradesh",
  "City": "Anantapur",
  "Pincode": 515001,
  "NABL\/NABH": "They don't  have"
 },
 {
  "Lab name": "My Labs Diagnostics Center",
  "State": "Andhra Pradesh",
  "City": "Visakhapatnam",
  "Pincode": 530002,
  "NABL\/NABH": "PENDING DOC"
 },
 {
  "Lab name": "ASR Hospital",
  "State": "Andhra Pradesh",
  "City": "Tirupati",
  "Pincode": 517501,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Padmavathy Hospital",
  "State": "Andhra Pradesh",
  "City": "Anantapur",
  "Pincode": 515001,
  "NABL\/NABH": "They don't  have"
 },
 {
  "Lab name": "Adhvabhaya Speciality Hospital",
  "State": "Andhra Pradesh",
  "City": "Tirupati",
  "Pincode": 517501,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Chandra Nursing Home",
  "State": "BIHAR",
  "City": "Gaya",
  "Pincode": 823001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Ashtha x ray",
  "State": "BIHAR",
  "City": "Munger",
  "Pincode": 811201,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Life Care Pathological Centre",
  "State": "BIHAR",
  "City": "Purnia",
  "Pincode": 854301,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "New BK Hospital",
  "State": "BIHAR",
  "City": "Hajipur",
  "Pincode": 844101,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Divine Medical Center",
  "State": "GOA",
  "City": "Margoa",
  "Pincode": 403601,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Prakash Clinic",
  "State": "GUJARAT",
  "City": "Surat ",
  "Pincode": 395003,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "PARTHVI Diagnostics",
  "State": "GUJARAT",
  "City": "Surat",
  "Pincode": 394101,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Chitanya Hospital",
  "State": "GUJARAT",
  "City": "Surat",
  "Pincode": 395003,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Dhyan Diagnostic Center",
  "State": "GUJARAT",
  "City": "vadodara",
  "Pincode": 390001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Baldania Clinic",
  "State": "GUJARAT",
  "City": "Adipur",
  "Pincode": 370205,
  "NABL\/NABH": "They don't  have"
 },
 {
  "Lab name": "Nidan Path Lab",
  "State": "GUJARAT",
  "City": "Gandhinagar",
  "Pincode": 382421,
  "NABL\/NABH": "NABL"
 },
 {
  "Lab name": "Yashdeep Heart and Medical Hospital",
  "State": "GUJARAT",
  "City": "Gandhinagar",
  "Pincode": 382022,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Fine Tech Pathology lab",
  "State": "GUJARAT",
  "City": "Palitana",
  "Pincode": 364270,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Shree Laboratory",
  "State": "GUJARAT",
  "City": "Jamnagar",
  "Pincode": 361001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Odhav Diagnostic Center",
  "State": "GUJARAT",
  "City": "Vapi",
  "Pincode": 396191,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "jarnav Pathology and Diagnostic Center",
  "State": "GUJARAT",
  "City": "HANSHPURA NARODA",
  "Pincode": 382330,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Navjat Shishu Kalyan Kendra And City Critical Hospital Pvt Ltd",
  "State": "GUJARAT",
  "City": "Munger",
  "Pincode": 811201,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Dr Kathiriya Multispeciality Hospital - Surat",
  "State": "GUJARAT",
  "City": "Mota Varachha",
  "Pincode": 394101,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Panchmukhi Hospital",
  "State": "GUJARAT",
  "City": "Rajkot",
  "Pincode": 360005,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Suryoday Hospital",
  "State": "GUJARAT",
  "City": "Godhra",
  "Pincode": 389001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Sagar Multispeciality Hospital",
  "State": "GUJARAT",
  "City": "Ahmedabad",
  "Pincode": 380004,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Nucleus Medical Centre - Delhi",
  "State": "HARYANA",
  "City": "Delhi",
  "Pincode": 110017,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Apex Health Care",
  "State": "HARYANA",
  "City": "Delhi",
  "Pincode": 110001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Apex Healthcare (Other Centre  of Gupta Diagnostic Centre)",
  "State": "HARYANA",
  "City": "New Delhi",
  "Pincode": 110001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Dhillon Nursing Home",
  "State": "HARYANA",
  "City": "Ambala",
  "Pincode": 134003,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Expert Health care",
  "State": "HARYANA",
  "City": "Panipat",
  "Pincode": 132103,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Delhi Clinical Laboratory - Jind",
  "State": "HARYANA",
  "City": "Jind",
  "Pincode": 126102,
  "NABL\/NABH": "NABL"
 },
 {
  "Lab name": "National Institute of Medical Sciences",
  "State": "HARYANA",
  "City": "Faridabad",
  "Pincode": 121005,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Apex Diagnostics and Poly clinic",
  "State": "HARYANA",
  "City": "Faridabad",
  "Pincode": 121007,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Gupta Diagnostic Centre - Faridabad",
  "State": "HARYANA",
  "City": "Faridabad",
  "Pincode": 121007,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Dr Gupta Diagnostic Center",
  "State": "HARYANA",
  "City": "Faridabad",
  "Pincode": 121007,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Sethi Nursing Home - Kurukshetra",
  "State": "HARYANA",
  "City": "Kurukshetra",
  "Pincode": 136118,
  "NABL\/NABH": "They don't  have"
 },
 {
  "Lab name": "Naveen Diagnostic Laboratory - Shahabad",
  "State": "HARYANA",
  "City": "Kurukshetra",
  "Pincode": 136135,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Shree Gyani Ram Memorial Hospital",
  "State": "HARYANA",
  "City": "Safidon",
  "Pincode": 126112,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Balaji Hospital - Jind",
  "State": "HARYANA",
  "City": "Jind",
  "Pincode": 126102,
  "NABL\/NABH": "NABH"
 },
 {
  "Lab name": "KC Hospital and Trauma Center",
  "State": "HARYANA",
  "City": "Pehowa",
  "Pincode": 136128,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Palwal Hospital",
  "State": "HARYANA",
  "City": "Palwal",
  "Pincode": 121102,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "City care Multispeciality Hospital ",
  "State": "Himachal Pradesh",
  "City": "Kangra",
  "Pincode": 176209,
  "NABL\/NABH": "NABH"
 },
 {
  "Lab name": "Al Qadir Polyclinic",
  "State": "JAMMU KASHMIR",
  "City": "Anantnag",
  "Pincode": 192101,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Trust Imaging And Diagnostic Centre - Srinagar",
  "State": "JAMMU KASHMIR",
  "City": "Srinagar",
  "Pincode": 190001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Excellent Diagnostic Centre",
  "State": "JHARKHAND",
  "City": "Koderma",
  "Pincode": 825409,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Thirupathy Path Lab \/ A And A Diagnostics Center",
  "State": "JHARKHAND",
  "City": "Ranchi ",
  "Pincode": 834001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Vita Plus Healthcare",
  "State": "KARANATAKA",
  "City": "Bangalore",
  "Pincode": 560078,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "AH Diagonistic Center",
  "State": "KARANATAKA",
  "City": "Bangalore",
  "Pincode": 560078,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Bangalore Diagnostic Services \/ PGK HEALTHCARE SERVICES PVT. LTD",
  "State": "KARANATAKA",
  "City": "Bangalore",
  "Pincode": 560078,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Asha Hospitals and Research Centre",
  "State": "KARANATAKA",
  "City": "Bangalore",
  "Pincode": 560078,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Sri Ambabhavani Diagnostic - Honnavar",
  "State": "KARANATAKA",
  "City": "Honnavar",
  "Pincode": 581361,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Anna Hi Tech Lab And Ecg",
  "State": "KERALA",
  "City": "Thrissur",
  "Pincode": 680001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Dr - Plus Healthcare Center ",
  "State": "MAHARASTRA",
  "City": "Mumbai",
  "Pincode": 400008,
  "NABL\/NABH": "NABL"
 },
 {
  "Lab name": "M- Zone (674)",
  "State": "MAHARASTRA",
  "City": "Mumbai",
  "Pincode": 400008,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Soaji Diagnostic Center",
  "State": "MAHARASTRA",
  "City": "Mumbai",
  "Pincode": 400008,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Axis Multispeciality Hospital replace by medipath diagnostic centre",
  "State": "MAHARASTRA",
  "City": "Mumbai",
  "Pincode": 400099,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Deogad Medical Foundation Day Care Centre",
  "State": "MAHARASTRA",
  "City": "Devgad",
  "Pincode": 416613,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Vighneshwar Healthcare",
  "State": "MAHARASTRA",
  "City": "pune",
  "Pincode": 411001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Pyramid Hospital",
  "State": "MAHARASTRA",
  "City": "Pune",
  "Pincode": 413801,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Health first Diagonistic Center",
  "State": "MAHARASTRA",
  "City": "Nagpur",
  "Pincode": 440002,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Central Diagnostic",
  "State": "MAHARASTRA",
  "City": "Nagpur",
  "Pincode": 440001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Noble Diagnostic Center - Borivali",
  "State": "MAHARASTRA",
  "City": "Borivali",
  "Pincode": 400091,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Aayushman Diagnostic Center",
  "State": "MAHARASTRA",
  "City": "Vasi",
  "Pincode": 400703,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Himalay Diagnostic Center",
  "State": "MAHARASTRA",
  "City": "Singali",
  "Pincode": 262543,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Precision Diagnostic Centre",
  "State": "MAHARASTRA",
  "City": "Kolhapur",
  "Pincode": 416008,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "DNA Diagnostic Center",
  "State": "MAHARASTRA",
  "City": "Parel Mumbai",
  "Pincode": 400012,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "A R M Diagnostics Center",
  "State": "MAHARASTRA",
  "City": "Daund",
  "Pincode": 413801,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Bhansali Multispeciality Hospital",
  "State": "MAHARASTRA",
  "City": "Achalpur",
  "Pincode": 444805,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Shree Seva Hospital",
  "State": "MAHARASTRA",
  "City": "Khamgaon",
  "Pincode": 444303,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Chandak Hospital",
  "State": "MAHARASTRA",
  "City": "Murud",
  "Pincode": 413510,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Shree Saibaba Hospital",
  "State": "MAHARASTRA",
  "City": "Sinnar Shirdi",
  "Pincode": 422103,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Silver Oak Clinic",
  "State": "Madhya Pradesh",
  "City": "Jabalpur",
  "Pincode": 482001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Bharat Pathology and Digital X ray",
  "State": "Madhya Pradesh",
  "City": "Ashta",
  "Pincode": 466116,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Arth Diagnostic Centre - Indore",
  "State": "Madhya Pradesh",
  "City": "Indore",
  "Pincode": 452012,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Kavita Pathology and Diagnostic Center",
  "State": "Madhya Pradesh",
  "City": "Indore",
  "Pincode": 452001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "R K Diagnostic Centre",
  "State": "Madhya Pradesh",
  "City": "Ujjain",
  "Pincode": 456010,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Chirayu Hospital and Research Center",
  "State": "Madhya Pradesh",
  "City": "Rewa",
  "Pincode": 486001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Sanjeevani Hospital",
  "State": "Madhya Pradesh",
  "City": "Anuppur",
  "Pincode": 484224,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Aarogya Health Care And Pathology - Berhampur",
  "State": "ORISSA",
  "City": "Berhampur",
  "Pincode": 760001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Zena Health care",
  "State": "ORISSA",
  "City": "Bhubaneshwar",
  "Pincode": 751007,
  "NABL\/NABH": "They don't  have"
 },
 {
  "Lab name": "Dr Ziaul Haque Polyclinic",
  "State": "ORISSA",
  "City": "Jharsuguda",
  "Pincode": 768201,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Shri Krishna Patho And X Ray",
  "State": "ORISSA",
  "City": "Sambalpur",
  "Pincode": 768004,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Patel Diagonistic Center",
  "State": "ORISSA",
  "City": "Sundargarh",
  "Pincode": 770001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Almighty Healthcare",
  "State": "PUNJAB",
  "City": "Ludhiana",
  "Pincode": 141001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Life line Hospital",
  "State": "PUNJAB",
  "City": "Ludhiana",
  "Pincode": 141001,
  "NABL\/NABH": "NABH"
 },
 {
  "Lab name": "Arora Nursing home",
  "State": "PUNJAB",
  "City": "Phillaur",
  "Pincode": 144410,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Jindal Heart Institute and Infertility Centre",
  "State": "PUNJAB",
  "City": "Bathinda",
  "Pincode": 151001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Dr Savi Path Lab",
  "State": "PUNJAB",
  "City": "Sangrur",
  "Pincode": 148001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Tushika Pathology Lab",
  "State": "PUNJAB",
  "City": "Mansa",
  "Pincode": 151505,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Mittal Hospital - Barnala",
  "State": "PUNJAB",
  "City": "Barnala",
  "Pincode": 148101,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Dr Pawan Hospital",
  "State": "PUNJAB",
  "City": "Jalandhar",
  "Pincode": 144001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Batala Hospital",
  "State": "PUNJAB",
  "City": "Batala",
  "Pincode": 143505,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "S P Multispecialty Hospital - Maur Mandi",
  "State": "PUNJAB",
  "City": "Maur",
  "Pincode": 151509,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Didwaniya Health Wellness Centrer",
  "State": "RAJASTHAN",
  "City": "Bhilwara",
  "Pincode": 311603,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Apex Suratgarh Multispeciality Hospital Pvt Ltd",
  "State": "RAJASTHAN",
  "City": "Suratgarh",
  "Pincode": 335804,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Alwar Lab ECG and X-Ray",
  "State": "RAJASTHAN",
  "City": "Nohar",
  "Pincode": 335523,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Diagno Care Lab",
  "State": "RAJASTHAN",
  "City": "Jodhpur",
  "Pincode": 342008,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Dhanwantri Hospital",
  "State": "RAJASTHAN",
  "City": "Jodhpur",
  "Pincode": 342001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Ruchika Sonography And Diagnostic Centre",
  "State": "RAJASTHAN",
  "City": "Chomu",
  "Pincode": 303702,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "A K Diagnostic Centre and Research Laboratory",
  "State": "RAJASTHAN",
  "City": "Jaipur",
  "Pincode": 302016,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "True trust Lab Diagnostic Center",
  "State": "RAJASTHAN",
  "City": "Jaipur",
  "Pincode": 342003,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Agarwal Hospital ( doctor )",
  "State": "RAJASTHAN",
  "City": "Jaipur",
  "Pincode": 302017,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Agrawal Heart and General Hospital",
  "State": "RAJASTHAN",
  "City": "Jaipur",
  "Pincode": 303007,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Porwal Diagnostic Center",
  "State": "RAJASTHAN",
  "City": "Baran",
  "Pincode": 325205,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Paro Diagnostics Center",
  "State": "RAJASTHAN",
  "City": "Udaipur",
  "Pincode": 313001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Satyam Multi speciality Hospital",
  "State": "RAJASTHAN",
  "City": "Sriganganagar",
  "Pincode": 335001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Agarwal Hospital - Tonk",
  "State": "RAJASTHAN",
  "City": "Tonk",
  "Pincode": 304001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Bharath Primex Scans and Labs",
  "State": "TAMIL NADU ",
  "City": "Thanjavur",
  "Pincode": 613007,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Annamalaiyar Medical Foundation",
  "State": "TAMIL NADU ",
  "City": "Tiruvannamalai",
  "Pincode": 606601,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "RK Diagnostic Center",
  "State": "TAMIL NADU ",
  "City": "Chennai",
  "Pincode": 600099,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Anna Nagar X-ray And Diagnostic Centre",
  "State": "TAMIL NADU ",
  "City": "Chennai",
  "Pincode": 600101,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "sree Balaji Hospital",
  "State": "TAMIL NADU ",
  "City": "Chennai",
  "Pincode": 600037,
  "NABL\/NABH": "NABH"
 },
 {
  "Lab name": "Alana Rehabilitation And Diagnostic Center - Adilabad",
  "State": "TELANGANA",
  "City": "Adilabad",
  "Pincode": 504001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "ECHO Diagnostic and Speciality Lab - Madinaguda",
  "State": "TELANGANA",
  "City": "Hyderabad",
  "Pincode": 500049,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "SV Pooja Diagnostic Centre",
  "State": "TELANGANA",
  "City": "Hyderabad",
  "Pincode": 500072,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Excel Diagnostics Center ",
  "State": "TELANGANA",
  "City": "Hyderabad",
  "Pincode": 500018,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Cure Diagnostic Center",
  "State": "TELANGANA",
  "City": "Hyderabad",
  "Pincode": 500011,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Sai Balaji hospital",
  "State": "TELANGANA",
  "City": "Hyderabad",
  "Pincode": 500074,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Shree Saibaba Hospital",
  "State": "TELANGANA",
  "City": "Hyderabad",
  "Pincode": 500011,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Shylaja Diagnostic Centre",
  "State": "TELANGANA",
  "City": "Armoor",
  "Pincode": 503224,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Dr. Asthana Pathology lab",
  "State": "Uttar Pradesh",
  "City": "Shahjahanpur",
  "Pincode": 242001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Image Pathology",
  "State": "Uttar Pradesh",
  "City": "Sitapur",
  "Pincode": 226001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Bharat X-Ray Pathology and Ultrasound",
  "State": "Uttar Pradesh",
  "City": "Kanpur",
  "Pincode": 208001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Blood Care Pathology",
  "State": "Uttar Pradesh",
  "City": "Maharajganj",
  "Pincode": 273303,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Apple Cardiac Care",
  "State": "Uttar Pradesh",
  "City": "Bareilly",
  "Pincode": 243122,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Royal Diagnostics Center",
  "State": "Uttar Pradesh",
  "City": "Lucknow",
  "Pincode": 226021,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Care Diagnostics Center",
  "State": "Uttar Pradesh",
  "City": "Lucknow",
  "Pincode": 226005,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Nigam Diagnostics",
  "State": "Uttar Pradesh",
  "City": "Lucknow",
  "Pincode": 226022,
  "NABL\/NABH": "PENDING DOC"
 },
 {
  "Lab name": "Kanak Diagnostics",
  "State": "Uttar Pradesh",
  "City": "Lucknow",
  "Pincode": 226010,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Medfirst Diagnostics",
  "State": "Uttar Pradesh",
  "City": "Prayagraj",
  "Pincode": 211002,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Surabhi Hospital",
  "State": "Uttar Pradesh",
  "City": "Prayagraj",
  "Pincode": 211003,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Global Shanti Care Hospital",
  "State": "Uttar Pradesh",
  "City": "Shamli",
  "Pincode": 247776,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Happy Health Care(Akash hospital)",
  "State": "Uttar Pradesh",
  "City": "Agra",
  "Pincode": 282007,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Raj Hospital",
  "State": "Uttar Pradesh",
  "City": "Akbarpur",
  "Pincode": 224122,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Raj Nursing Home",
  "State": "Uttar Pradesh",
  "City": "Prayagraj",
  "Pincode": 211002,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Rishi Aurobindo Healthcare Service",
  "State": "WEST BENGAL",
  "City": "Kolkata",
  "Pincode": 700047,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Aloka Medicare Pvt Ltd",
  "State": "WEST BENGAL",
  "City": "Kolkata",
  "Pincode": 700029,
  "NABL\/NABH": "NABL"
 },
 {
  "Lab name": "Karuna Management Services - Dunlop_Apollo Clinic - Dunlop - Kolkata",
  "State": "WEST BENGAL",
  "City": "Kolkata",
  "Pincode": 700108,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Medical Boon ",
  "State": "WEST BENGAL",
  "City": "Kolkata",
  "Pincode": 700033,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Anurag Diagnostic and Healthcare",
  "State": "WEST BENGAL",
  "City": "Kolkata",
  "Pincode": 700067,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Lalbazar Patho Lab (yet to add to pictures and Drive)",
  "State": "WEST BENGAL",
  "City": "Bankura",
  "Pincode": 722101,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Siddharth Medical Centre",
  "State": "WEST BENGAL",
  "City": "Purulia",
  "Pincode": 723101,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Basumed Diagnostic Centre",
  "State": "WEST BENGAL",
  "City": "Bally",
  "Pincode": 711227,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Anubikshan Diagnostics",
  "State": "WEST BENGAL",
  "City": "Bankura",
  "Pincode": 722101,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Ganga Nursing Home",
  "State": "Chhattisgarh",
  "City": "Raigarh",
  "Pincode": 496001,
  "NABL\/NABH": "Pending"
 },
 {
  "Lab name": "Dr Ruprelas NMS Diagnostics and Imaging",
  "State": "Chhattisgarh",
  "City": "Raipur-CH",
  "Pincode": 492001,
  "NABL\/NABH": "Pending"
 }
        // ... other entries
    ]
};

// Function to filter and display results
function searchLabs() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsTable = document.getElementById('resultsTable');
    resultsTable.innerHTML = ''; // Clear previous results

    const filteredData = data.Sheet1.filter(lab => {
        return lab["Lab name"].toLowerCase().includes(input) ||
               lab.State.toLowerCase().includes(input) ||
               lab.City.toLowerCase().includes(input) ||
               lab.Pincode.toString().includes(input) ||
               lab["NABL/NABH"].toLowerCase().includes(input);
    });

    filteredData.forEach(lab => {
        const row = `
            <tr>
                <td>${lab["Lab name"]}</td>
                <td>${lab.State}</td>
                <td>${lab.City}</td>
                <td>${lab.Pincode}</td>
                <td>${lab["NABL/NABH"]}</td>
            </tr>
        `;
        resultsTable.innerHTML += row;
    });
}

document.getElementById('searchInput').addEventListener('input', searchLabs);

