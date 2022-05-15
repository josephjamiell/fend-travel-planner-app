const destinations = [
    {
      "city": "Kabul",
      "countryCode": "AF",
      "country": "Afghanistan"
    },
    {
      "city": "Mariehamn",
      "countryCode": "AX",
      "country": "Åland Islands"
    },
    {
      "city": "Tirana",
      "countryCode": "AL",
      "country": "Albania"
    },
    {
      "city": "Algiers",
      "countryCode": "DZ",
      "country": "Algeria"
    },
    {
      "city": "Pago Pago",
      "countryCode": "AS",
      "country": "American Samoa"
    },
    {
      "city": "Andorra la Vella",
      "countryCode": "AD",
      "country": "Andorra"
    },
    {
      "city": "Luanda",
      "countryCode": "AO",
      "country": "Angola"
    },
    {
      "city": "The Valley",
      "countryCode": "AI",
      "country": "Anguilla"
    },
    {
      "city": "Saint John's",
      "countryCode": "AG",
      "country": "Antigua and Barbuda"
    },
    {
      "city": "Buenos Aires",
      "countryCode": "AR",
      "country": "Argentina"
    },
    {
      "city": "Yerevan",
      "countryCode": "AM",
      "country": "Armenia"
    },
    {
      "city": "Oranjestad",
      "countryCode": "AW",
      "country": "Aruba"
    },
    {
      "city": "Canberra",
      "countryCode": "AU",
      "country": "Australia"
    },
    {
      "city": "Vienna",
      "countryCode": "AT",
      "country": "Austria"
    },
    {
      "city": "Baku",
      "countryCode": "AZ",
      "country": "Azerbaijan"
    },
    {
      "city": "Nassau",
      "countryCode": "BS",
      "country": "Bahamas"
    },
    {
      "city": "Manama",
      "countryCode": "BH",
      "country": "Bahrain"
    },
    {
      "city": "Dhaka",
      "countryCode": "BD",
      "country": "Bangladesh"
    },
    {
      "city": "Bridgetown",
      "countryCode": "BB",
      "country": "Barbados"
    },
    {
      "city": "Minsk",
      "countryCode": "BY",
      "country": "Belarus"
    },
    {
      "city": "Brussels",
      "countryCode": "BE",
      "country": "Belgium"
    },
    {
      "city": "Belmopan",
      "countryCode": "BZ",
      "country": "Belize"
    },
    {
      "city": "Porto-Novo",
      "countryCode": "BJ",
      "country": "Benin"
    },
    {
      "city": "Hamilton",
      "countryCode": "BM",
      "country": "Bermuda"
    },
    {
      "city": "Thimphu",
      "countryCode": "BT",
      "country": "Bhutan"
    },
    {
      "city": "Sucre",
      "countryCode": "BO",
      "country": "Bolivia (Plurinational State of)"
    },
    {
      "city": "Kralendijk",
      "countryCode": "BQ",
      "country": "Bonaire, Sint Eustatius and Saba"
    },
    {
      "city": "Sarajevo",
      "countryCode": "BA",
      "country": "Bosnia and Herzegovina"
    },
    {
      "city": "Gaborone",
      "countryCode": "BW",
      "country": "Botswana"
    },
    {
      "city": "Brasília",
      "countryCode": "BR",
      "country": "Brazil"
    },
    {
      "city": "Diego Garcia",
      "countryCode": "IO",
      "country": "British Indian Ocean Territory"
    },
    {
      "city": "Road Town",
      "countryCode": "VG",
      "country": "Virgin Islands (British)"
    },
    {
      "city": "Charlotte Amalie",
      "countryCode": "VI",
      "country": "Virgin Islands (U.S.)"
    },
    {
      "city": "Bandar Seri Begawan",
      "countryCode": "BN",
      "country": "Brunei Darussalam"
    },
    {
      "city": "Sofia",
      "countryCode": "BG",
      "country": "Bulgaria"
    },
    {
      "city": "Ouagadougou",
      "countryCode": "BF",
      "country": "Burkina Faso"
    },
    {
      "city": "Gitega",
      "countryCode": "BI",
      "country": "Burundi"
    },
    {
      "city": "Phnom Penh",
      "countryCode": "KH",
      "country": "Cambodia"
    },
    {
      "city": "Yaoundé",
      "countryCode": "CM",
      "country": "Cameroon"
    },
    {
      "city": "Ottawa",
      "countryCode": "CA",
      "country": "Canada"
    },
    {
      "city": "Praia",
      "countryCode": "CV",
      "country": "Cabo Verde"
    },
    {
      "city": "George Town",
      "countryCode": "KY",
      "country": "Cayman Islands"
    },
    {
      "city": "Bangui",
      "countryCode": "CF",
      "country": "Central African Republic"
    },
    {
      "city": "N'Djamena",
      "countryCode": "TD",
      "country": "Chad"
    },
    {
      "city": "Santiago",
      "countryCode": "CL",
      "country": "Chile"
    },
    {
      "city": "Beijing",
      "countryCode": "CN",
      "country": "China"
    },
    {
      "city": "Flying Fish Cove",
      "countryCode": "CX",
      "country": "Christmas Island"
    },
    {
      "city": "West Island",
      "countryCode": "CC",
      "country": "Cocos (Keeling) Islands"
    },
    {
      "city": "Bogotá",
      "countryCode": "CO",
      "country": "Colombia"
    },
    {
      "city": "Moroni",
      "countryCode": "KM",
      "country": "Comoros"
    },
    {
      "city": "Brazzaville",
      "countryCode": "CG",
      "country": "Congo"
    },
    {
      "city": "Kinshasa",
      "countryCode": "CD",
      "country": "Congo (Democratic Republic of the)"
    },
    {
      "city": "Avarua",
      "countryCode": "CK",
      "country": "Cook Islands"
    },
    {
      "city": "San José",
      "countryCode": "CR",
      "country": "Costa Rica"
    },
    {
      "city": "Zagreb",
      "countryCode": "HR",
      "country": "Croatia"
    },
    {
      "city": "Havana",
      "countryCode": "CU",
      "country": "Cuba"
    },
    {
      "city": "Willemstad",
      "countryCode": "CW",
      "country": "Curaçao"
    },
    {
      "city": "Nicosia",
      "countryCode": "CY",
      "country": "Cyprus"
    },
    {
      "city": "Prague",
      "countryCode": "CZ",
      "country": "Czech Republic"
    },
    {
      "city": "Copenhagen",
      "countryCode": "DK",
      "country": "Denmark"
    },
    {
      "city": "Djibouti",
      "countryCode": "DJ",
      "country": "Djibouti"
    },
    {
      "city": "Roseau",
      "countryCode": "DM",
      "country": "Dominica"
    },
    {
      "city": "Santo Domingo",
      "countryCode": "DO",
      "country": "Dominican Republic"
    },
    {
      "city": "Quito",
      "countryCode": "EC",
      "country": "Ecuador"
    },
    {
      "city": "Cairo",
      "countryCode": "EG",
      "country": "Egypt"
    },
    {
      "city": "San Salvador",
      "countryCode": "SV",
      "country": "El Salvador"
    },
    {
      "city": "Malabo",
      "countryCode": "GQ",
      "country": "Equatorial Guinea"
    },
    {
      "city": "Asmara",
      "countryCode": "ER",
      "country": "Eritrea"
    },
    {
      "city": "Tallinn",
      "countryCode": "EE",
      "country": "Estonia"
    },
    {
      "city": "Addis Ababa",
      "countryCode": "ET",
      "country": "Ethiopia"
    },
    {
      "city": "Stanley",
      "countryCode": "FK",
      "country": "Falkland Islands (Malvinas)"
    },
    {
      "city": "Tórshavn",
      "countryCode": "FO",
      "country": "Faroe Islands"
    },
    {
      "city": "Suva",
      "countryCode": "FJ",
      "country": "Fiji"
    },
    {
      "city": "Helsinki",
      "countryCode": "FI",
      "country": "Finland"
    },
    {
      "city": "Paris",
      "countryCode": "FR",
      "country": "France"
    },
    {
      "city": "Cayenne",
      "countryCode": "GF",
      "country": "French Guiana"
    },
    {
      "city": "Papeetē",
      "countryCode": "PF",
      "country": "French Polynesia"
    },
    {
      "city": "Port-aux-Français",
      "countryCode": "TF",
      "country": "French Southern Territories"
    },
    {
      "city": "Libreville",
      "countryCode": "GA",
      "country": "Gabon"
    },
    {
      "city": "Banjul",
      "countryCode": "GM",
      "country": "Gambia"
    },
    {
      "city": "Tbilisi",
      "countryCode": "GE",
      "country": "Georgia"
    },
    {
      "city": "Berlin",
      "countryCode": "DE",
      "country": "Germany"
    },
    {
      "city": "Accra",
      "countryCode": "GH",
      "country": "Ghana"
    },
    {
      "city": "Gibraltar",
      "countryCode": "GI",
      "country": "Gibraltar"
    },
    {
      "city": "Athens",
      "countryCode": "GR",
      "country": "Greece"
    },
    {
      "city": "Nuuk",
      "countryCode": "GL",
      "country": "Greenland"
    },
    {
      "city": "St. George's",
      "countryCode": "GD",
      "country": "Grenada"
    },
    {
      "city": "Basse-Terre",
      "countryCode": "GP",
      "country": "Guadeloupe"
    },
    {
      "city": "Hagåtña",
      "countryCode": "GU",
      "country": "Guam"
    },
    {
      "city": "Guatemala City",
      "countryCode": "GT",
      "country": "Guatemala"
    },
    {
      "city": "St. Peter Port",
      "countryCode": "GG",
      "country": "Guernsey"
    },
    {
      "city": "Conakry",
      "countryCode": "GN",
      "country": "Guinea"
    },
    {
      "city": "Bissau",
      "countryCode": "GW",
      "country": "Guinea-Bissau"
    },
    {
      "city": "Georgetown",
      "countryCode": "GY",
      "country": "Guyana"
    },
    {
      "city": "Port-au-Prince",
      "countryCode": "HT",
      "country": "Haiti"
    },
    {
      "city": "Vatican City",
      "countryCode": "VA",
      "country": "Vatican City"
    },
    {
      "city": "Tegucigalpa",
      "countryCode": "HN",
      "country": "Honduras"
    },
    {
      "city": "Budapest",
      "countryCode": "HU",
      "country": "Hungary"
    },
    {
      "city": "City of Victoria",
      "countryCode": "HK",
      "country": "Hong Kong"
    },
    {
      "city": "Reykjavík",
      "countryCode": "IS",
      "country": "Iceland"
    },
    {
      "city": "New Delhi",
      "countryCode": "IN",
      "country": "India"
    },
    {
      "city": "Jakarta",
      "countryCode": "ID",
      "country": "Indonesia"
    },
    {
      "city": "Yamoussoukro",
      "countryCode": "CI",
      "country": "Ivory Coast"
    },
    {
      "city": "Tehran",
      "countryCode": "IR",
      "country": "Iran (Islamic Republic of)"
    },
    {
      "city": "Baghdad",
      "countryCode": "IQ",
      "country": "Iraq"
    },
    {
      "city": "Dublin",
      "countryCode": "IE",
      "country": "Ireland"
    },
    {
      "city": "Douglas",
      "countryCode": "IM",
      "country": "Isle of Man"
    },
    {
      "city": "Jerusalem",
      "countryCode": "IL",
      "country": "Israel"
    },
    {
      "city": "Rome",
      "countryCode": "IT",
      "country": "Italy"
    },
    {
      "city": "Kingston",
      "countryCode": "JM",
      "country": "Jamaica"
    },
    {
      "city": "Tokyo",
      "countryCode": "JP",
      "country": "Japan"
    },
    {
      "city": "Saint Helier",
      "countryCode": "JE",
      "country": "Jersey"
    },
    {
      "city": "Amman",
      "countryCode": "JO",
      "country": "Jordan"
    },
    {
      "city": "Nur-Sultan",
      "countryCode": "KZ",
      "country": "Kazakhstan"
    },
    {
      "city": "Nairobi",
      "countryCode": "KE",
      "country": "Kenya"
    },
    {
      "city": "South Tarawa",
      "countryCode": "KI",
      "country": "Kiribati"
    },
    {
      "city": "Kuwait City",
      "countryCode": "KW",
      "country": "Kuwait"
    },
    {
      "city": "Bishkek",
      "countryCode": "KG",
      "country": "Kyrgyzstan"
    },
    {
      "city": "Vientiane",
      "countryCode": "LA",
      "country": "Lao People's Democratic Republic"
    },
    {
      "city": "Riga",
      "countryCode": "LV",
      "country": "Latvia"
    },
    {
      "city": "Beirut",
      "countryCode": "LB",
      "country": "Lebanon"
    },
    {
      "city": "Maseru",
      "countryCode": "LS",
      "country": "Lesotho"
    },
    {
      "city": "Monrovia",
      "countryCode": "LR",
      "country": "Liberia"
    },
    {
      "city": "Tripoli",
      "countryCode": "LY",
      "country": "Libya"
    },
    {
      "city": "Vaduz",
      "countryCode": "LI",
      "country": "Liechtenstein"
    },
    {
      "city": "Vilnius",
      "countryCode": "LT",
      "country": "Lithuania"
    },
    {
      "city": "Luxembourg",
      "countryCode": "LU",
      "country": "Luxembourg"
    },
    {
      "city": "Skopje",
      "countryCode": "MK",
      "country": "North Macedonia"
    },
    {
      "city": "Antananarivo",
      "countryCode": "MG",
      "country": "Madagascar"
    },
    {
      "city": "Lilongwe",
      "countryCode": "MW",
      "country": "Malawi"
    },
    {
      "city": "Kuala Lumpur",
      "countryCode": "MY",
      "country": "Malaysia"
    },
    {
      "city": "Malé",
      "countryCode": "MV",
      "country": "Maldives"
    },
    {
      "city": "Bamako",
      "countryCode": "ML",
      "country": "Mali"
    },
    {
      "city": "Valletta",
      "countryCode": "MT",
      "country": "Malta"
    },
    {
      "city": "Majuro",
      "countryCode": "MH",
      "country": "Marshall Islands"
    },
    {
      "city": "Fort-de-France",
      "countryCode": "MQ",
      "country": "Martinique"
    },
    {
      "city": "Nouakchott",
      "countryCode": "MR",
      "country": "Mauritania"
    },
    {
      "city": "Port Louis",
      "countryCode": "MU",
      "country": "Mauritius"
    },
    {
      "city": "Mamoudzou",
      "countryCode": "YT",
      "country": "Mayotte"
    },
    {
      "city": "Mexico City",
      "countryCode": "MX",
      "country": "Mexico"
    },
    {
      "city": "Palikir",
      "countryCode": "FM",
      "country": "Micronesia (Federated States of)"
    },
    {
      "city": "Chișinău",
      "countryCode": "MD",
      "country": "Moldova (Republic of)"
    },
    {
      "city": "Monaco",
      "countryCode": "MC",
      "country": "Monaco"
    },
    {
      "city": "Ulan Bator",
      "countryCode": "MN",
      "country": "Mongolia"
    },
    {
      "city": "Podgorica",
      "countryCode": "ME",
      "country": "Montenegro"
    },
    {
      "city": "Plymouth",
      "countryCode": "MS",
      "country": "Montserrat"
    },
    {
      "city": "Rabat",
      "countryCode": "MA",
      "country": "Morocco"
    },
    {
      "city": "Maputo",
      "countryCode": "MZ",
      "country": "Mozambique"
    },
    {
      "city": "Naypyidaw",
      "countryCode": "MM",
      "country": "Myanmar"
    },
    {
      "city": "Windhoek",
      "countryCode": "NA",
      "country": "Namibia"
    },
    {
      "city": "Yaren",
      "countryCode": "NR",
      "country": "Nauru"
    },
    {
      "city": "Kathmandu",
      "countryCode": "NP",
      "country": "Nepal"
    },
    {
      "city": "Amsterdam",
      "countryCode": "NL",
      "country": "Netherlands"
    },
    {
      "city": "Nouméa",
      "countryCode": "NC",
      "country": "New Caledonia"
    },
    {
      "city": "Wellington",
      "countryCode": "NZ",
      "country": "New Zealand"
    },
    {
      "city": "Managua",
      "countryCode": "NI",
      "country": "Nicaragua"
    },
    {
      "city": "Niamey",
      "countryCode": "NE",
      "country": "Niger"
    },
    {
      "city": "Abuja",
      "countryCode": "NG",
      "country": "Nigeria"
    },
    {
      "city": "Alofi",
      "countryCode": "NU",
      "country": "Niue"
    },
    {
      "city": "Kingston",
      "countryCode": "NF",
      "country": "Norfolk Island"
    },
    {
      "city": "Pyongyang",
      "countryCode": "KP",
      "country": "Korea (Democratic People's Republic of)"
    },
    {
      "city": "Saipan",
      "countryCode": "MP",
      "country": "Northern Mariana Islands"
    },
    {
      "city": "Oslo",
      "countryCode": "NO",
      "country": "Norway"
    },
    {
      "city": "Muscat",
      "countryCode": "OM",
      "country": "Oman"
    },
    {
      "city": "Islamabad",
      "countryCode": "PK",
      "country": "Pakistan"
    },
    {
      "city": "Ngerulmud",
      "countryCode": "PW",
      "country": "Palau"
    },
    {
      "city": "Ramallah",
      "countryCode": "PS",
      "country": "Palestine, State of"
    },
    {
      "city": "Panama City",
      "countryCode": "PA",
      "country": "Panama"
    },
    {
      "city": "Port Moresby",
      "countryCode": "PG",
      "country": "Papua New Guinea"
    },
    {
      "city": "Asunción",
      "countryCode": "PY",
      "country": "Paraguay"
    },
    {
      "city": "Lima",
      "countryCode": "PE",
      "country": "Peru"
    },
    {
      "city": "Manila",
      "countryCode": "PH",
      "country": "Philippines"
    },
    {
      "city": "Adamstown",
      "countryCode": "PN",
      "country": "Pitcairn"
    },
    {
      "city": "Warsaw",
      "countryCode": "PL",
      "country": "Poland"
    },
    {
      "city": "Lisbon",
      "countryCode": "PT",
      "country": "Portugal"
    },
    {
      "city": "San Juan",
      "countryCode": "PR",
      "country": "Puerto Rico"
    },
    {
      "city": "Doha",
      "countryCode": "QA",
      "country": "Qatar"
    },
    {
      "city": "Pristina",
      "countryCode": "XK",
      "country": "Republic of Kosovo"
    },
    {
      "city": "Saint-Denis",
      "countryCode": "RE",
      "country": "Réunion"
    },
    {
      "city": "Bucharest",
      "countryCode": "RO",
      "country": "Romania"
    },
    {
      "city": "Moscow",
      "countryCode": "RU",
      "country": "Russian Federation"
    },
    {
      "city": "Kigali",
      "countryCode": "RW",
      "country": "Rwanda"
    },
    {
      "city": "Gustavia",
      "countryCode": "BL",
      "country": "Saint Barthélemy"
    },
    {
      "city": "Jamestown",
      "countryCode": "SH",
      "country": "Saint Helena, Ascension and Tristan da Cunha"
    },
    {
      "city": "Basseterre",
      "countryCode": "KN",
      "country": "Saint Kitts and Nevis"
    },
    {
      "city": "Castries",
      "countryCode": "LC",
      "country": "Saint Lucia"
    },
    {
      "city": "Marigot",
      "countryCode": "MF",
      "country": "Saint Martin (French part)"
    },
    {
      "city": "Saint-Pierre",
      "countryCode": "PM",
      "country": "Saint Pierre and Miquelon"
    },
    {
      "city": "Kingstown",
      "countryCode": "VC",
      "country": "Saint Vincent and the Grenadines"
    },
    {
      "city": "Apia",
      "countryCode": "WS",
      "country": "Samoa"
    },
    {
      "city": "City of San Marino",
      "countryCode": "SM",
      "country": "San Marino"
    },
    {
      "city": "São Tomé",
      "countryCode": "ST",
      "country": "Sao Tome and Principe"
    },
    {
      "city": "Riyadh",
      "countryCode": "SA",
      "country": "Saudi Arabia"
    },
    {
      "city": "Dakar",
      "countryCode": "SN",
      "country": "Senegal"
    },
    {
      "city": "Belgrade",
      "countryCode": "RS",
      "country": "Serbia"
    },
    {
      "city": "Victoria",
      "countryCode": "SC",
      "country": "Seychelles"
    },
    {
      "city": "Freetown",
      "countryCode": "SL",
      "country": "Sierra Leone"
    },
    {
      "city": "Singapore",
      "countryCode": "SG",
      "country": "Singapore"
    },
    {
      "city": "Philipsburg",
      "countryCode": "SX",
      "country": "Sint Maarten (Dutch part)"
    },
    {
      "city": "Bratislava",
      "countryCode": "SK",
      "country": "Slovakia"
    },
    {
      "city": "Ljubljana",
      "countryCode": "SI",
      "country": "Slovenia"
    },
    {
      "city": "Honiara",
      "countryCode": "SB",
      "country": "Solomon Islands"
    },
    {
      "city": "Mogadishu",
      "countryCode": "SO",
      "country": "Somalia"
    },
    {
      "city": "Pretoria",
      "countryCode": "ZA",
      "country": "South Africa"
    },
    {
      "city": "King Edward Point",
      "countryCode": "GS",
      "country": "South Georgia and the South Sandwich Islands"
    },
    {
      "city": "Seoul",
      "countryCode": "KR",
      "country": "Korea (Republic of)"
    },
    {
      "city": "Madrid",
      "countryCode": "ES",
      "country": "Spain"
    },
    {
      "city": "Sri Jayawardenepura Kotte",
      "countryCode": "LK",
      "country": "Sri Lanka"
    },
    {
      "city": "Khartoum",
      "countryCode": "SD",
      "country": "Sudan"
    },
    {
      "city": "Juba",
      "countryCode": "SS",
      "country": "South Sudan"
    },
    {
      "city": "Paramaribo",
      "countryCode": "SR",
      "country": "Suriname"
    },
    {
      "city": "Longyearbyen",
      "countryCode": "SJ",
      "country": "Svalbard and Jan Mayen"
    },
    {
      "city": "Mbabane",
      "countryCode": "SZ",
      "country": "Swaziland"
    },
    {
      "city": "Stockholm",
      "countryCode": "SE",
      "country": "Sweden"
    },
    {
      "city": "Bern",
      "countryCode": "CH",
      "country": "Switzerland"
    },
    {
      "city": "Damascus",
      "countryCode": "SY",
      "country": "Syrian Arab Republic"
    },
    {
      "city": "Taipei",
      "countryCode": "TW",
      "country": "Taiwan"
    },
    {
      "city": "Dushanbe",
      "countryCode": "TJ",
      "country": "Tajikistan"
    },
    {
      "city": "Dodoma",
      "countryCode": "TZ",
      "country": "Tanzania, United Republic of"
    },
    {
      "city": "Bangkok",
      "countryCode": "TH",
      "country": "Thailand"
    },
    {
      "city": "Dili",
      "countryCode": "TL",
      "country": "Timor-Leste"
    },
    {
      "city": "Lomé",
      "countryCode": "TG",
      "country": "Togo"
    },
    {
      "city": "Fakaofo",
      "countryCode": "TK",
      "country": "Tokelau"
    },
    {
      "city": "Nuku'alofa",
      "countryCode": "TO",
      "country": "Tonga"
    },
    {
      "city": "Port of Spain",
      "countryCode": "TT",
      "country": "Trinidad and Tobago"
    },
    {
      "city": "Tunis",
      "countryCode": "TN",
      "country": "Tunisia"
    },
    {
      "city": "Ankara",
      "countryCode": "TR",
      "country": "Turkey"
    },
    {
      "city": "Ashgabat",
      "countryCode": "TM",
      "country": "Turkmenistan"
    },
    {
      "city": "Cockburn Town",
      "countryCode": "TC",
      "country": "Turks and Caicos Islands"
    },
    {
      "city": "Funafuti",
      "countryCode": "TV",
      "country": "Tuvalu"
    },
    {
      "city": "Kampala",
      "countryCode": "UG",
      "country": "Uganda"
    },
    {
      "city": "Kyiv",
      "countryCode": "UA",
      "country": "Ukraine"
    },
    {
      "city": "Abu Dhabi",
      "countryCode": "AE",
      "country": "United Arab Emirates"
    },
    {
      "city": "London",
      "countryCode": "GB",
      "country": "United Kingdom of Great Britain and Northern Ireland"
    },
    {
      "city": "Washington, D.C.",
      "countryCode": "US",
      "country": "United States of America"
    },
    {
      "city": "Montevideo",
      "countryCode": "UY",
      "country": "Uruguay"
    },
    {
      "city": "Tashkent",
      "countryCode": "UZ",
      "country": "Uzbekistan"
    },
    {
      "city": "Port Vila",
      "countryCode": "VU",
      "country": "Vanuatu"
    },
    {
      "city": "Caracas",
      "countryCode": "VE",
      "country": "Venezuela (Bolivarian Republic of)"
    },
    {
      "city": "Hanoi",
      "countryCode": "VN",
      "country": "Vietnam"
    },
    {
      "city": "Mata-Utu",
      "countryCode": "WF",
      "country": "Wallis and Futuna"
    },
    {
      "city": "El Aaiún",
      "countryCode": "EH",
      "country": "Western Sahara"
    },
    {
      "city": "Sana'a",
      "countryCode": "YE",
      "country": "Yemen"
    },
    {
      "city": "Lusaka",
      "countryCode": "ZM",
      "country": "Zambia"
    },
    {
      "city": "Harare",
      "countryCode": "ZW",
      "country": "Zimbabwe"
    }
  ];

const aircraft = [
    { flight: "KWJ001", type: "Boeing 737-800" },
    { flight: "KWJ002", type: "Boeing 747-400" },
    { flight: "KWJ003", type: "Boeing 777-300" },
    { flight: "KWJ004", type: "Airbus A320" },
    { flight: "KWJ005", type: "Airbus A380" },
]

const hotels = [
  { name: "Anthony's Beach Club", cost: 125.00 },
  { name: "KWJ Day Spa & Resorts", cost: 950.00 },
  { name: "Niko's Inn", cost: 75.00 },
  { name: "The Lexington by Jamiell Resorts", cost: 2250.00 }
]


export { destinations, aircraft, hotels }