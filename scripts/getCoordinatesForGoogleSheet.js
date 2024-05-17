const fs = require('fs');
const {placesOutputFile} = require("./utils");

const geojson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Nanyang Technological University Singapore",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/edu/nanyang-technological-university-17113",
                "socialType": "linkedin",
                "website": "http://www.ntu.edu.sg"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.6828,
                    1.3456
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Institute for Technology & Society (ITS)",
                "contactType": "Potential Member",
                "social": "https://twitter.com/ITSriodejaneiro",
                "socialType": "twitter",
                "website": "http://itsrio.org/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -43.2089,
                    -22.911
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "ERIA: Economic Research Institute for ASEAN and East Asia",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/company/eria-economic-research-institute-for-asean-and-east-asia",
                "socialType": "linkedin",
                "website": "https://www.eria.org/news-and-views/category/all/centre-for-digital-innovation-and-sustainable-economy/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    106.8025,
                    -6.2187
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Tech For Good Institute",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/company/techforgoodinstitute",
                "socialType": "linkedin",
                "website": "techforgoodinstitute.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.7749,
                    1.3051
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Regional Center for Studies on the Development of the Information Society (CETIC)",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/company/nic-br/",
                "socialType": "linkedin",
                "website": "https://cetic.br/en/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -46.6333,
                    -23.5505
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Hiperderecho",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/company/hiperderecho/",
                "socialType": "linkedin",
                "website": "https://hiperderecho.org/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.0438,
                    -12.0464
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Asociación por los Derechos Civiles (ADC)",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/company/adcderechos/",
                "socialType": "linkedin",
                "website": "https://adc.org.ar/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -58.4303,
                    -34.6037
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Desinformante",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/company/desinformante/",
                "socialType": "linkedin",
                "website": "https://desinformante.com.br/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -46.62356035663149,
                    -23.525754505266633
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "El Veinte",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/company/elveinte/",
                "socialType": "linkedin",
                "website": "https://www.elveinte.org/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -74.0721,
                    4.711
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "PROLEDI (Programa Derecho a la Libertad de Expresión de la Universidad de Costa Rica)",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/school/universidad-de-costa-rica-ucr/",
                "socialType": "linkedin",
                "website": "https://proledi.ucr.ac.cr/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -84.0806,
                    9.9281
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "De La Salle University",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/school/de-la-salle-university/",
                "socialType": "linkedin",
                "website": "https://www.dlsu.edu.ph/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    120.9819,
                    14.5643
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Shorenstein Center Harvard Kennedy School",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/company/shorenstein-center",
                "socialType": "linkedin",
                "website": "https://shorensteincenter.org/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -71.1186,
                    42.3736
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Journalism and Media Studies Centre - Hong Kong University",
                "contactType": "Potential Member",
                "social": "https://twitter.com/JMSCHKU",
                "socialType": "twitter",
                "website": "https://jmsc.hku.hk/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.1373,
                    22.2839
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Foundation for Media Alternatives",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/company/fmaph/",
                "socialType": "linkedin",
                "website": "https://fma.ph/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    121.0579,
                    14.676
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Department of Government Studies Diponegoro University",
                "contactType": "Potential Member",
                "social": "",
                "socialType": "",
                "website": "https://pemerintahan.fisip.undip.ac.id/v1/en/about-us/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    110.4229,
                    -7.0051
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Communication Science Department University of Gadjah Mada",
                "contactType": "Potential Member",
                "social": "https://youtu.be/iTkXw9cQvQY",
                "socialType": "youtube",
                "website": "https://dikom.fisipol.ugm.ac.id/home/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    110.4085,
                    -7.7714
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Capacity Equals Development Africa",
                "contactType": "Potential Member",
                "social": "",
                "socialType": "",
                "website": "https://cedafrica.net/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -17.4498,
                    14.6928
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Institute of Knowledge Societies",
                "contactType": "Potential Member",
                "social": "https://www.youtube.com/channel/UCv3jp_GUXG9i9_YDhIKgJ4A",
                "socialType": "youtube",
                "website": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    78.9629,
                    20.5937
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Myanmar ICT for Development Organization (MIDO)",
                "contactType": "Potential Member",
                "social": "https://twitter.com/myanmarido",
                "socialType": "twitter",
                "website": "https://www.facebook.com/Myanmarido/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    96.0657,
                    21.9162
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "School of International Communications The University of Nottingham",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/school/university-of-nottingham-ningbo-china/?trk=organization-update_share-update_actor-image",
                "socialType": "linkedin",
                "website": "https://www.nottingham.edu.cn/en/humanities-and-social-sciences/schools-and-department/international-communications/home.aspx"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    121.544,
                    29.8326
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Centre of Excellence for Automated Decision-Making and Society (ARC)",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/company/arc-centre-of-excellence-for-automated-decision-making-and-society/?viewAsMember=true",
                "socialType": "linkedin",
                "website": "https://www.admscentre.org.au/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.0235,
                    -27.4698
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Open Observatory of Network Interference (OONI)",
                "contactType": "Potential Member",
                "social": "",
                "socialType": "",
                "website": "https://ooni.org/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    12.4964,
                    41.9028
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Columbia Global Freedom of Expression",
                "contactType": "Potential Member",
                "social": "",
                "socialType": "",
                "website": "https://globalfreedomofexpression.columbia.edu/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -73.9866,
                    40.7128
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "UNESCO Institute for Information Technologies in Education",
                "contactType": "Potential Member",
                "social": "",
                "socialType": "",
                "website": "https://iite.unesco.org/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.6173,
                    55.7558
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "SINAR Project",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/company/sinarproject",
                "socialType": "linkedin",
                "website": "sinarproject.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    101.5894,
                    3.0435
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "ADISI-Cameroun",
                "contactType": "Potential Member",
                "social": "",
                "socialType": "",
                "website": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    9.7064,
                    4.0511
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "CSIRO's Data61",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/company/csiro'sdata61",
                "socialType": "linkedin",
                "website": "data61.csiro.au"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.2093,
                    -33.8688
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Observatorio de la Desinformación - Uni Complutense",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/school/universidadcomplutense",
                "socialType": "linkedin",
                "website": "https://www.ucm.es/observatoriodesinformacion/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -3.7175,
                    40.4168
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "IDEA Corp inc",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/company/ideacorp-inc",
                "socialType": "linkedin",
                "website": "ideacorpphil.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    121.098,
                    14.6488
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Digital Literacy Initiative (DLI)",
                "contactType": "Potential Member",
                "social": "",
                "socialType": "",
                "website": "https://digitalliteracyinitiative.africa/about-us/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    32.2903,
                    0.3476
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Open Net",
                "contactType": "Potential Member",
                "social": "",
                "socialType": "",
                "website": "https://www.opennetkorea.org/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    126.978,
                    37.5665
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Association of Technology, Education, Development, Research and Communication (TEDIC)",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/company/tedicpy/",
                "socialType": "linkedin",
                "website": "https://www.tedic.org/en/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -57.6359,
                    -25.2637
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Kenya ICT Action Network (KICTANet)",
                "contactType": "Potential Member",
                "social": "https://ke.linkedin.com/company/kictanet",
                "socialType": "linkedin",
                "website": "https://www.kictanet.or.ke/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    36.8219,
                    -1.2864
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "University of Massachusetts Amherst",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/school/umassamherst/",
                "socialType": "linkedin",
                "website": "https://www.umass.edu/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -72.5301,
                    42.3736
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Curtin University: Digital Transformation Research Unit",
                "contactType": "Potential Member",
                "social": "",
                "socialType": "",
                "website": "https://research.curtin.edu.au/research-areas/digital-transformation/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    115.8589,
                    -31.9505
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "University of Western Australia Tech & Policy Lab",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/school/university-of-western-australia",
                "socialType": "linkedin",
                "website": "https://www.uwa.edu.au/schools/research/uwa-tech-and-policy-lab"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    115.84395966402616,
                    -31.995934774628545
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Tech Policy Design Centre, Australian National University",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/company/techpolicydesigncentre/",
                "socialType": "linkedin",
                "website": "https://techpolicydesign.au/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.1245,
                    -35.3075
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Maxim Institute",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/company/maximinstitute",
                "socialType": "linkedin",
                "website": "https://www.maxim.org.nz/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    174.7613,
                    -36.8485
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "FIBRE FALE",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/company/fibre-fale",
                "socialType": "linkedin",
                "website": "fibrefale.com"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    174.7605387628298,
                    -36.83846440461012
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Toda Peace Institute",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/company/toda-peace-institute",
                "socialType": "linkedin",
                "website": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    139.6917,
                    35.6895
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Sciences Po CEVIPOF Research",
                "contactType": "Potential Member",
                "social": "https://www.linkedin.com/school/sciences-po",
                "socialType": "linkedin",
                "website": "sciencespo.fr"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    2.3522,
                    48.8566
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Centre for International Governance Innovation (CIGI)",
                "contactType": "Stakeholders",
                "social": "",
                "socialType": "",
                "website": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -80.5404,
                    43.4643
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Article 19",
                "contactType": "Stakeholders",
                "social": "https://twitter.com/article19org",
                "socialType": "twitter",
                "website": "https://www.article19.org/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.1276,
                    51.5074
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "The Coalition for Independent Technology Research",
                "contactType": "Stakeholders",
                "social": "https://www.linkedin.com/company/knightcolumbia",
                "socialType": "linkedin",
                "website": "https://independenttechresearch.org/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.0369,
                    38.9072
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Carnegie Endowment for International Peace",
                "contactType": "Stakeholders",
                "social": "https://www.linkedin.com/company/carnegieendowment",
                "socialType": "linkedin",
                "website": "carnegieendowment.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.01797977929141,
                    38.90940020011275
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Integrity Institute",
                "contactType": "Stakeholders",
                "social": "https://www.linkedin.com/company/integrityinstitute",
                "socialType": "linkedin",
                "website": "integrityinstitute.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.03825872026405,
                    38.879698623487016
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Democracy Reporting International",
                "contactType": "Stakeholders",
                "social": "https://www.linkedin.com/company/dri",
                "socialType": "linkedin",
                "website": "democracy-reporting.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.4049,
                    52.52
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Our World in Data - Global Change Data Lab",
                "contactType": "Stakeholders",
                "social": "https://www.linkedin.com/company/ourworldindata",
                "socialType": "linkedin",
                "website": "ourworldindata.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -1.5208,
                    51.752
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "ISTC-CNR, Institute for Cognitive Sciences and Technologies del CNR",
                "contactType": "Stakeholders",
                "social": "",
                "socialType": "",
                "website": "https://www.cnr.it/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    12.3155,
                    45.4408
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Institute for Strategic Dialogue (ISD)",
                "contactType": "Stakeholders",
                "social": "https://www.linkedin.com/company/isdglobal",
                "socialType": "linkedin",
                "website": "isdglobal.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.1325308317612387,
                    51.52826833512918
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "International Panel on the Information Environment (IPIE)",
                "contactType": "Stakeholders",
                "social": "https://www.linkedin.com/company/intl-panel-on-info-environment",
                "socialType": "linkedin",
                "website": "ipie.info"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    8.5417,
                    47.3769
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Global Network Initiative",
                "contactType": "Stakeholders",
                "social": "",
                "socialType": "",
                "website": "https://globalnetworkinitiative.org/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.00304307933554,
                    38.918579891451735
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Council on Tech and Social Cohesion (CTSC)",
                "contactType": "Stakeholders",
                "social": "",
                "socialType": "",
                "website": "https://techandsocialcohesion.org/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.02632027571322,
                    38.943294402093876
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Forum on Information and Democracy (FID)",
                "contactType": "Stakeholders",
                "social": "https://www.linkedin.com/company/forum-information-democracy",
                "socialType": "linkedin",
                "website": "informationdemocracy.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    2.3515,
                    48.8566
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "United Nations Human Rights",
                "contactType": "Stakeholders",
                "social": "https://www.linkedin.com/company/ohchr",
                "socialType": "linkedin",
                "website": "ohchr.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    7.4474,
                    46.948
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Digital Action",
                "contactType": "Stakeholders",
                "social": "https://www.linkedin.com/company/digital-act",
                "socialType": "linkedin",
                "website": "digitalaction.co"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -6.2603,
                    53.3498
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Center for AI and Digital Policy",
                "contactType": "Stakeholders",
                "social": "https://www.linkedin.com/company/center-for-ai-and-digital-policy",
                "socialType": "linkedin",
                "website": "caidp.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.01972267003516,
                    38.88101625785465
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "data privacy BR",
                "contactType": "Stakeholders",
                "social": "https://www.linkedin.com/school/dataprivacybrasil/",
                "socialType": "linkedin",
                "website": "https://dataprivacy.com.br/en/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -46.61985828823932,
                    -23.58748531368434
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Ibict - Instituto Brasileiro de Informação em Ciência e Tecnologia",
                "contactType": "Stakeholders",
                "social": "https://www.linkedin.com/company/ibict---instituto-brasileiro-de-informa-o-em-ci-ncia-e-tecnologia",
                "socialType": "linkedin",
                "website": "gov.br"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -47.8825,
                    -15.7942
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Tata STRIVE",
                "contactType": "Stakeholders",
                "social": "https://www.linkedin.com/school/tata-strive",
                "socialType": "linkedin",
                "website": "tatastrive.com"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    72.8777,
                    19.0759
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "International Association for Media and Communication Research (IAMCR)",
                "contactType": "Working Group Members",
                "social": "",
                "socialType": "",
                "website": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    14.4378,
                    50.0755
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "The International Digital Policy Lab",
                "contactType": "Working Group Members",
                "social": "",
                "socialType": "",
                "website": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.1095,
                    -22.3964
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Innovation 4 Policy Foundation",
                "contactType": "Working Group Members",
                "social": "https://www.linkedin.com/company/i4policy",
                "socialType": "linkedin",
                "website": "i4policy.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    30.0588,
                    -1.9479
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Research ICT Africa",
                "contactType": "Working Group Members",
                "social": "https://twitter.com/RIAnetwork",
                "socialType": "twitter",
                "website": "http://www.researchictafrica.net"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    18.4241,
                    -33.9249
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TESaCo",
                "contactType": "Working Group Members",
                "social": "https://www.linkedin.com/search/results/all/?keywords=TESaCo-%20Acad%C3%A9mie%20des%20Sciences%20Sociales%20et%20Politiques%20&sid=e82",
                "socialType": "linkedin",
                "website": "https://www.tesaco.fr/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    2.386499571600909,
                    48.857443022216884
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "IT for Change",
                "contactType": "Working Group Members",
                "social": "",
                "socialType": "",
                "website": "https://itforchange.net/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    77.5946,
                    12.9716
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Access to Knowledge for Development Center (A2K4D)",
                "contactType": "",
                "social": "https://twitter.com/A2K4D",
                "socialType": "twitter",
                "website": "https://business.aucegypt.edu/research/centers/a2k4d"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    31.2357,
                    30.0444
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Alexander von Humboldt Institute for Internet and Society (HIIG)",
                "contactType": "",
                "social": "https://twitter.com/hiig_berlin",
                "socialType": "twitter",
                "website": "http://www.hiig.de/en"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.3889,
                    52.5176
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Berkman Klein Center for Internet & Society",
                "contactType": "",
                "social": "https://twitter.com/BKCHarvard",
                "socialType": "twitter",
                "website": "https://cyber.harvard.edu"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -71.1284,
                    42.3601
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Syntagma",
                "contactType": "",
                "social": "https://twitter.com/Syntagmaorg",
                "socialType": "twitter",
                "website": "http://www.syntagma.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -3.7038,
                    40.4168
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Center for Advanced Internet Studies (CAIS)",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "https://www.cais-research.de/en/institute/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    7.2163,
                    51.4783
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Center for Cyber Law & Policy (CCLP)",
                "contactType": "",
                "social": "https://www.facebook.com/The-Center-for-Cyber-Law-Policy-167148447153707/?fref=mentions",
                "socialType": "facebook",
                "website": "https://cyber.haifa.ac.il"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    35.2137,
                    31.7683
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Center for Information Technology & Society (CITS)",
                "contactType": "",
                "social": "https://twitter.com/ucsbcits",
                "socialType": "twitter",
                "website": "https://cits.ucsb.edu"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -119.6982,
                    34.4208
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Swedish Law and Informatics Research Institute (IRI), Stockholm University",
                "contactType": "",
                "social": "https://twitter.com/iri_blawblaw",
                "socialType": "twitter",
                "website": "https://irilaw.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    18.0686,
                    59.3293
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Center for Media, Data and Society (CMDS)",
                "contactType": "",
                "social": "https://twitter.com/CMDSatCEU",
                "socialType": "twitter",
                "website": "http://cmds.ceu.edu"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    19.0402,
                    47.4979
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Demos",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.08876516820234032,
                    51.504485988670965
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Center for Studies on Freedom of Expression and Access to Information",
                "contactType": "",
                "social": "https://twitter.com/celeup",
                "socialType": "twitter",
                "website": "http://www.palermo.edu/cele/cele/english/index.html"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -58.44564227015847,
                    -34.640254373038005
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Cyberlaw Research Centre (CIJIC)",
                "contactType": "",
                "social": "https://www.facebook.com/cijic/",
                "socialType": "facebook",
                "website": "https://www.cijic.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -9.1424,
                    38.7223
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Central European Digital Media Observatory",
                "contactType": "",
                "social": "https://twitter.com/CEDMOhub",
                "socialType": "twitter",
                "website": "https://cedmohub.eu/?_gl=1%2A1mbl9mb%2A_up%2AMQ..%2A_ga%2AMTA3Mzc2MDA0My4xNzAzNjk1NTIy%2A_ga_44P6SY9R25%2AMTcwMzcwMzI0MC4yLjAuMTcwMzcwMzI0MC4wLjAuMA.."
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    14.4208,
                    50.088
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Centre de Recherche en Droit Public",
                "contactType": "",
                "social": "https://twitter.com/crdp_udem",
                "socialType": "twitter",
                "website": "http://www.crdp.umontreal.ca"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -73.5673,
                    45.5128
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Centre for Communication and Computing",
                "contactType": "",
                "social": "https://www.facebook.com/universitet",
                "socialType": "facebook",
                "website": "http://ccc.ku.dk"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    12.5683,
                    55.6761
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Centro de Tecnologia y Sociedad",
                "contactType": "",
                "social": "https://twitter.com/cetysedu",
                "socialType": "twitter",
                "website": "https://www.udesa.edu.ar/cetys"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -58.4342172558787,
                    -34.64098657616195
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Centre for Internet, Smartphone and Society, Bangladesh (CISS-BD)",
                "contactType": "",
                "social": "https://www.facebook.com/CentreForInternetSocietyBangladesh",
                "socialType": "facebook",
                "website": "https://www.facebook.com/CentreForInternetSocietyBangladesh"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    90.4125,
                    23.8103
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Centro Latam Digital",
                "contactType": "",
                "social": "https://twitter.com/latamxdigital?lang=en",
                "socialType": "twitter",
                "website": "https://centrolatam.digital"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -99.1332,
                    19.4326
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Digital Law Center (DLC)",
                "contactType": "",
                "social": "www.linkedin.com/company/digitallawcenter/",
                "socialType": "linkedin",
                "website": "www.digitallawcenter.ch"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    6.1443,
                    46.2044
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Digital Ethnography Research Centre (DEC)",
                "contactType": "",
                "social": "https://twitter.com/digitalethno",
                "socialType": "twitter",
                "website": "https://digital-ethnography.com"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    144.9631,
                    -37.8136
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Digital Life Initiative (DLI)",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "dli.tech.cornell.edu"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    6.7735,
                    51.2277
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Düsseldorf Institute for Competition Economics (DICE)",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "http://www.dice.hhu.de/en/about-dice.html"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    6.7743,
                    51.2201
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "LIRNEasia",
                "contactType": "",
                "social": "https://twitter.com/lirneasia",
                "socialType": "twitter",
                "website": "www.lirneasia.net"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    79.8612,
                    6.9271
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Nobeah Foundation",
                "contactType": "",
                "social": "https://twitter.com/NobeahFndn",
                "socialType": "twitter",
                "website": "http://nobeahfoundation.org/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    36.86402030107776,
                    -1.2485438777286144
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Global Partners Digital",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.106463312416558,
                    51.479992398012975
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Internetlab",
                "contactType": "",
                "social": "https://twitter.com/internetlabbr",
                "socialType": "twitter",
                "website": "http://www.internetlab.org.br/en/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -46.619229459396,
                    -23.573680824991115
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Institute for Internet Policy & Law (IIPL)",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "http://wiki.iipl.org.cn/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    116.4074,
                    39.9042
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Institute for Studies on Artificial Intelligence and Law",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "http://www.tsinghua.edu.cn/publish/law/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    116.4459075640437,
                    39.90337507426692
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Institute of Network Cultures",
                "contactType": "",
                "social": "https://twitter.com/INCAmsterdam",
                "socialType": "twitter",
                "website": "http://www.networkcultures.org/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.8952,
                    52.3676
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Intellectual Property Institute (IPI)",
                "contactType": "",
                "social": "https://www.linkedin.com/company/intellectual-property-institute/about/?viewAsMember=true",
                "socialType": "linkedin",
                "website": "http://www.ipi.si/en/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    14.5058,
                    46.0569
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Interdepartmental Centre for Research in the History, Philosophy and Sociology of Law, and in Legal Informatics",
                "contactType": "",
                "social": "https://twitter.com/UniboMagazine",
                "socialType": "twitter",
                "website": "http://www.cirsfid.unibo.it/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    11.3425,
                    44.4949
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Internet Interdisciplinary Institute (IN3)",
                "contactType": "",
                "social": "https://www.facebook.com/UOC.universitat",
                "socialType": "facebook",
                "website": "http://www.uoc.edu/portal/en/in3/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    1.9782,
                    41.2754
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Regional Center for Studies on the Development of the Information Society (Cetic.br)",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "networkofcenters.net"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -71.16311361921497,
                    42.42166804494678
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Laboratory for Internet Studies (LINIS)",
                "contactType": "",
                "social": "http://www.facebook.com/groups/linis/",
                "socialType": "facebook",
                "website": "https://linis.hse.ru/en/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    30.3351,
                    59.9343
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Legal Tech Lab",
                "contactType": "",
                "social": "https://twitter.com/legaltechHEL",
                "socialType": "twitter",
                "website": "www.legaltechlab.fi"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    24.9375,
                    60.1695
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Nexa Center for Internet & Society, Politecnico di Torino",
                "contactType": "",
                "social": "https://twitter.com/nexacenter",
                "socialType": "twitter",
                "website": "https://nexa.polito.it"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    7.6869,
                    45.0703
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "United Nations University Institute on Computing and Society",
                "contactType": "",
                "social": "https://www.facebook.com/computingandsociety/",
                "socialType": "facebook",
                "website": "http://cs.unu.edu"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    113.5439,
                    22.202
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "National Secretariat for Media Reforms (NSMR)",
                "contactType": "",
                "social": "https://web.facebook.com/Independent-Council-for-News-media-Standards-1289933094460687/?_rdc=1&_rdr",
                "socialType": "facebook",
                "website": "http://nsmrlk.org/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    79.9708,
                    6.9271
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Observatorio de Derecho Informatico Argentino (O.D.I.A.)",
                "contactType": "",
                "social": "https://www.linkedin.com/company/odiaasoc/about/",
                "socialType": "linkedin",
                "website": "https://odia.legal/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -58.419205811501385,
                    -34.57493298844218
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Research Centre in Information, Law and Society Of the University of Namur (CRIDS)",
                "contactType": "",
                "social": "https://twitter.com/CRIDS_UNamur",
                "socialType": "twitter",
                "website": "http://www.crids.eu/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.8628,
                    50.4642
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Stanford Cyber Policy Center",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -122.3321,
                    47.6062
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "The New Research on Digital Societies (NeRDS group)",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "http://nerds.kozminski.edu.pl"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.0118,
                    52.2297
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Singapore Internet Research Centre",
                "contactType": "",
                "social": "https://twitter.com/ntusg",
                "socialType": "twitter",
                "website": "http://www.sirc.ntu.edu.sg/Pages/Home.aspx"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.8565,
                    1.3521
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Tilburg Institute for Law, Technology, and Society",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "https://www.tilburguniversity.edu/research/institutes-and-research-groups/tilt/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    5.0913,
                    51.5555
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "The Northumbria Internet & Society Research Interest Group (NINSO)",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "https://www.northumbria.ac.uk/about-us/academic-departments/northumbria-law-school/law-research/ninso-the-northumbria-internet-and-society-research-interest-group"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -1.6174,
                    55.007
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "University of Helsinki Legal Tech Lab",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "https://www.helsinki.fi/en/networks/legal-tech-lab"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    24.9416,
                    60.1695
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Vietnam Program for Internet & Society (VPIS)",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "http://vpis.edu.vn/?lang=en"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    105.8342,
                    21.0285
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Digital Technologies Policy Laboratory",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "https://www.ucl.ac.uk/steapp/research/digital-technologies-policy-laboratory"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.15794139460482962,
                    51.53347230326478
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Arab World Internet Institute",
                "contactType": "",
                "social": "https://twitter.com/AWIInstitute",
                "socialType": "twitter",
                "website": "http://awii.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    10.1761,
                    36.8065
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "E-Governance and Internet Governance Foundation for Africa (EGIGFA)",
                "contactType": "",
                "social": "https://twitter.com/egigfa",
                "socialType": "instagram",
                "website": "www.egigfa.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.2076,
                    5.6037
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Bavarian Research Institute for Digital Transformation (bidt)",
                "contactType": "",
                "social": "https://twitter.com/BIDT_Muenchen/",
                "socialType": "twitter",
                "website": "https://www.bidt.digital"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    11.5833,
                    48.1351
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Center for Information Technology, Society, and Law (ITSL)",
                "contactType": "",
                "social": "https://twitter.com/itsl_uzh",
                "socialType": "twitter",
                "website": "http://www.itsl.uzh.ch/en.html"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    8.515006915575194,
                    47.34065718938507
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Center for Internet Studies and Digital Life",
                "contactType": "",
                "social": "https://twitter.com/digitalunav",
                "socialType": "twitter",
                "website": "https://www.unav.edu/web/digital-studies"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -1.6639,
                    42.815
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Center for Studies on Freedom of Expression and Access to Information (CELEUP)",
                "contactType": "",
                "social": "https://www.linkedin.com/edu/universidad-de-palermo-10113",
                "socialType": "linkedin",
                "website": "http://www.palermo.edu"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -58.409635204338606,
                    -34.596393990130615
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Centre for Law, Technology and Society",
                "contactType": "",
                "social": "twitter.com/uOttawaTechLaw",
                "socialType": "twitter",
                "website": "http://techlaw.uottawa.ca"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -75.6903,
                    45.4215
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Innovation and Technology Law Lab",
                "contactType": "",
                "social": "https://www.instagram.com/it_law_lab/",
                "socialType": "instagram",
                "website": "https://itll.it/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    11.8768,
                    45.4064
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Centre for Computing and Social Responsibility",
                "contactType": "",
                "social": "https://www.linkedin.com/company/de-montfort-university",
                "socialType": "linkedin",
                "website": "http://www.dmu.ac.uk"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -1.1296,
                    52.6369
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Centre Internet et Société du CNRS / Center for Internet and Society of CNRS (CIS-CNRS)",
                "contactType": "",
                "social": "https://twitter.com/cis_cnrs",
                "socialType": "twitter",
                "website": "http://www.cis.cnrs.fr"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    2.3139442760226308,
                    48.878279879584234
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Centro de Internet y Sociedad – Universidad del Rosario (ISUR)",
                "contactType": "",
                "social": "https://twitter.com/centroISUR",
                "socialType": "twitter",
                "website": "http://www.centroisur.co"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -74.0621,
                    4.6564
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Derechos Digitales",
                "contactType": "",
                "social": "https://twitter.com/derechosdigital",
                "socialType": "twitter",
                "website": "https://www.derechosdigitales.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -70.6483,
                    -33.4569
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Governance and Innovation Program at MBR School of Government",
                "contactType": "",
                "social": "https://twitter.com/mbrsg",
                "socialType": "twitter",
                "website": "http://www.mbrsg.ae/RESEARCH/e-Government/Governance-and-Innovation.aspx"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    55.2708,
                    25.2048
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Institute for Information Law (IVIR)",
                "contactType": "",
                "social": "https://twitter.com/informatierecht",
                "socialType": "twitter",
                "website": "http://www.ivir.nl/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.9021,
                    52.3676
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Institute for Information, Telecommunication and Media Law (ITM)",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "http://www.uni-muenster.de/Jura.itm/hoeren/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    7.6261,
                    51.962
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Grupo de Investigación sobre Uruguay Sociedad e Internet (GIUSI)",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "https://www.facebook.com/universidad.catolica.uruguay/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -56.1917,
                    -34.9011
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Manushya Foundation ♾ #WeAreManushyan",
                "contactType": "",
                "social": "https://www.linkedin.com/company/manushyafoundation",
                "socialType": "linkedin",
                "website": "manushyafoundation.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    100.5231,
                    13.7563
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Haifa Center for Law & Technology",
                "contactType": "",
                "social": "https://www.facebook.com/HaifaLaw",
                "socialType": "facebook",
                "website": "http://law.haifa.ac.il/index.php/en/research-clinics/research-centers/99-research-centers/447-lawntechnology-res-eng"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    34.9889,
                    32.794
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Human Rights, Big Data and Technology",
                "contactType": "",
                "social": "http://www.twitter.com/@HRBDTNews",
                "socialType": "twitter",
                "website": "https://www.hrbdt.ac.uk/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    0.6955,
                    51.8225
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "International Laboratory for Information Technology and Intellectual Property Law",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "https://pravo.hse.ru/en/infolaw/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    30.381648991944836,
                    59.90037924614271
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "KU Leuven Centre for IT & IP Law (CiTiP)",
                "contactType": "",
                "social": "https://twitter.com/citip_kuleuven",
                "socialType": "twitter",
                "website": "https://www.law.kuleuven.be/citip/en"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.694,
                    50.8754
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Internet Policy project group (POLI)",
                "contactType": "",
                "social": "https://www.linkedin.com/company/3848982",
                "socialType": "linkedin",
                "website": "http://wzb.eu"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.39026614115966,
                    52.505825861181926
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Radical Xchange (French Chapter)",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "radicalxchange.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    2.3325,
                    48.8606
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "University of Houston Law Center",
                "contactType": "",
                "social": "https://www.linkedin.com/company/1240297",
                "socialType": "linkedin",
                "website": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -95.3923,
                    29.7221
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Keio International Project for Internet & Society",
                "contactType": "",
                "social": "https://www.linkedin.com/company/20039",
                "socialType": "linkedin",
                "website": "http://www.sfc.keio.ac.jp"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    139.5383,
                    35.3715
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "MIT Center for Civic Media",
                "contactType": "",
                "social": "https://twitter.com/civicMIT",
                "socialType": "twitter",
                "website": "https://civic.mit.edu/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -71.0922,
                    42.3601
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Nordic Centre for Internet and Society",
                "contactType": "",
                "social": "https://twitter.com/BI_NCIS",
                "socialType": "twitter",
                "website": "http://bi.edu/ncis"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    10.7522,
                    59.9139
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Media Change & Innovation Division, IPMZ",
                "contactType": "",
                "social": "https://twitter.com/uzh_ikmz",
                "socialType": "twitter",
                "website": "http://ikmz.uzh.ch"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    8.534388002763365,
                    47.32996807559189
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Centre for Media Pluralism and Media Freedom (CMPF)",
                "contactType": "",
                "social": "https://twitter.com/CmpfEui",
                "socialType": "twitter",
                "website": "http://cmpf.eui.eu"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -73.9826,
                    40.7213
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "The Governance Lab",
                "contactType": "",
                "social": "https://twitter.com/TheGovLab",
                "socialType": "twitter",
                "website": "http://www.thegovlab.org/about.html"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -74.01038576502712,
                    40.69837689243573
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "InternetLab - human rights and internet policy think tank",
                "contactType": "",
                "social": "https://www.linkedin.com/company/internetlabbr",
                "socialType": "linkedin",
                "website": "internetlab.org.br"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -46.617773289091254,
                    -23.5353237558225
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Quello Center, Michigan State University",
                "contactType": "",
                "social": "https://twitter.com/QuelloCenter",
                "socialType": "twitter",
                "website": "http://quello.msu.edu/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -84.4788,
                    42.7337
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Oxford Internet Institute (OII)",
                "contactType": "",
                "social": "https://www.linkedin.com/company/10320462",
                "socialType": "linkedin",
                "website": "http://www.oii.ox.ac.uk"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -1.2577,
                    51.752
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Public Data Lab",
                "contactType": "",
                "social": "https://twitter.com/publicdatalab",
                "socialType": "twitter",
                "website": "http://publicdatalab.org/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.11092916496641533,
                    51.50937367711892
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Swedish Law and Informatics Research Institute (IRI)",
                "contactType": "",
                "social": "https://www.linkedin.com/company/329150",
                "socialType": "linkedin",
                "website": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    18.10785818793754,
                    59.32753501198981
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "The Center for Technology & Society (CTS)",
                "contactType": "",
                "social": "https://twitter.com/cts_fgv",
                "socialType": "twitter",
                "website": "http://direitorio.fgv.br/cts"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -43.2096,
                    -22.9035
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Weizenbaum Institute for the Networked Society",
                "contactType": "",
                "social": "https://twitter.com/JWI_Berlin",
                "socialType": "twitter",
                "website": "https://www.weizenbaum-institut.de/en/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.3875,
                    52.5172
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "AMIC (Asian Media Information and Communication Centre)",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "https://amic.asia/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    121.0163,
                    14.5565
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "International Digital Policy Lab",
                "contactType": "",
                "social": "https://www.linkedin.com/company/international-digital-policy-lab",
                "socialType": "linkedin",
                "website": "digitalpolicylab.com"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    144.9581,
                    -37.8093
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Digital Rights Foundation",
                "contactType": "",
                "social": "https://www.instagram.com/digitalrightsfoundation/?utm_source=ig_embed&hl=en",
                "socialType": "instagram",
                "website": "http://digitalrightsfoundation.pk/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [71.5249,30.3753]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Center for Advanced Research in Global Communication (CARGC)",
                "contactType": "",
                "social": "https://www.linkedin.com/company/annenbergpenn",
                "socialType": "linkedin",
                "website": "asc.upenn.edu"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -75.1652,
                    39.9526
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "CNRS",
                "contactType": "",
                "social": "https://www.linkedin.com/company/cnrs",
                "socialType": "linkedin",
                "website": "cnrs.fr"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    2.324079067101508,
                    48.81901551284293
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Movilizatorio",
                "contactType": "",
                "social": "https://www.linkedin.com/company/movilizatorio",
                "socialType": "linkedin",
                "website": "movilizatorio.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -74.082,
                    4.711
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "European External Action Service",
                "contactType": "",
                "social": "https://www.linkedin.com/company/european-external-action-service",
                "socialType": "linkedin",
                "website": "eeas.europa.eu"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.3517,
                    50.8503
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "#Leplusimportant",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "www.leplusimportant.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [2.3312,48.863]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Center for Countering Digital Hate",
                "contactType": "",
                "social": "https://www.linkedin.com/company/center-for-countering-digital-hate",
                "socialType": "linkedin",
                "website": "counterhate.com"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.11664001107213831,
                    51.520367326848536
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Oxford University’s Programme on Democracy & Technology",
                "contactType": "",
                "social": "https://www.linkedin.com/school/oxford-internet-institute",
                "socialType": "linkedin",
                "website": "oii.ox.ac.uk"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -1.2558,
                    51.752
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "International Institute for Ethical Governance and Accountability (IIEGA)",
                "contactType": "",
                "social": "https://www.linkedin.com/company/international-institute-for-ethical-governance-and-accountability-iiega",
                "socialType": "linkedin",
                "website": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    28.0473,
                    -26.2041
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "University of Oslo",
                "contactType": "",
                "social": "https://www.linkedin.com/school/universitetet-i-oslo",
                "socialType": "linkedin",
                "website": "uio.no"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    10.762796760731717,
                    59.912799153981055
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Institute for Accountability in the Digital Age",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    5.2913,
                    52.1326
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Center for Law & Technology",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "http://clt.re.kr/eng/index.php"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    126.9779,
                    37.5665
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Center on Science & Technology Policy at Duke University",
                "contactType": "",
                "social": "https://scienceandsociety.duke.edu/engage/duke-center-for-science-and-technology-policy/",
                "socialType": "other",
                "website": "https://scienceandsociety.duke.edu/engage/duke-center-for-science-and-technology-policy"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -78.9437,
                    35.9993
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Centre for Communication Governance at National Law University Delhi (CCG)",
                "contactType": "",
                "social": "https://www.facebook.com/ccgdelhi",
                "socialType": "facebook",
                "website": "http://ccgdelhi.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    77.1867,
                    28.6448
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Centre for Computing and Social Responsibility",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "https://www.dmu.ac.uk/business-services/a-z-business-services/technology/centre-for-computing-and-social-responsibility.aspx"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -1.1563959434752993,
                    52.62580312089405
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Centre for Internet & Society (CIS)",
                "contactType": "",
                "social": "https://twitter.com/cis_india",
                "socialType": "twitter",
                "website": "http://cis-india.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    77.56274524934216,
                    13.004834470818365
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Centre for the Study of Existential Risk",
                "contactType": "",
                "social": "https://twitter.com/CSERCambridge",
                "socialType": "twitter",
                "website": "https://www.cser.ac.uk"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    0.1218,
                    52.2043
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Department of Innovation and Digitalisation in Law",
                "contactType": "",
                "social": "https://twitter.com/idunivienna",
                "socialType": "twitter",
                "website": "https://id.univie.ac.at/en"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.3738,
                    48.2082
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "DiploFoundation",
                "contactType": "",
                "social": "https://twitter.com/DiplomacyEdu",
                "socialType": "twitter",
                "website": "http://www.diplomacy.edu/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    6.1432,
                    49.6116
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Digital Planet, an interdisciplinary research initiative of The Fletcher School’s Institute",
                "contactType": "",
                "social": "https://twitter.com/dgtl_planet",
                "socialType": "twitter",
                "website": "https://digitalplanet.tufts.edu/about/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -71.1087,
                    42.4188
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Digital Asia Hub (DAH)",
                "contactType": "",
                "social": "https://twitter.com/digitalasiahub",
                "socialType": "twitter",
                "website": "https://www.digitalasiahub.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.1095,
                    22.3964
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Centro de Ensino e Pesquisa em Inovação (GEPI)",
                "contactType": "",
                "social": "https://www.linkedin.com/company/fgvcepi",
                "socialType": "linkedin",
                "website": "bit.ly"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -43.207043708612574,
                    -22.880268462279204
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Elliott School of International Affairs",
                "contactType": "",
                "social": "https://twitter.com/elliottschoolgw",
                "socialType": "twitter",
                "website": "https://elliott.gwu.edu/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.04195139405348,
                    38.93978145517846
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Global Network of Internet & Society Centers (NoC)",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -95.7129,
                    37.0902
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Hans-Bredow-Institut",
                "contactType": "",
                "social": "https://twitter.com/BredowInstitut",
                "socialType": "twitter",
                "website": "http://www.hans-bredow-institut.de/en"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    9.9937,
                    53.5653
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Information Society Project at Yale Law School",
                "contactType": "",
                "social": "https://www.facebook.com/pages/Information-Society-Project/213530150262",
                "socialType": "facebook",
                "website": "http://isp.yale.edu/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -72.9279,
                    41.3107
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "IT Law Institute at Istanbul Bilgi University",
                "contactType": "",
                "social": "https://www.facebook.com/Bilgi.ITLaw/",
                "socialType": "facebook",
                "website": "https://itlaw.bilgi.edu.tr/en/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    28.9652,
                    41.0082
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "International Center for Ethics in the Sciences and Humanities (IZEW)",
                "contactType": "",
                "social": "https://uni-tuebingen.de/en/facilities/central-institutions/international-center-for-ethics-in-the-sciences-and-humanities/team/team-members/",
                "socialType": "other",
                "website": "https://uni-tuebingen.de/en/facilities/central-institutions/international-center-for-ethics-in-the-sciences-and-humanities/the-izew/news/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    9.0579,
                    48.5216
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Internet Policy project group (POLI) at Berlin Social Science Center (WZB)",
                "contactType": "",
                "social": "https://twitter.com/internet_policy",
                "socialType": "twitter",
                "website": "https://www.wzb.eu/en/research/digitalization-and-societal-transformation/internet-policy"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    13.44713192518269,
                    52.55184417105968
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Institute for Research on Internet & Society (IRIS)",
                "contactType": "",
                "social": "https://www.facebook.com/institutoirisbh",
                "socialType": "facebook",
                "website": "http://irisbh.com.br/en/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -43.19345405222875,
                    -22.945294948878022
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Keio International Project for Internet & Society, Keio University, Tokyo",
                "contactType": "",
                "social": "https://www.facebook.com/KeioKIPIS",
                "socialType": "facebook",
                "website": "https://www.kgri.keio.ac.jp/en/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    139.6558619925787,
                    35.721947527802335
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Linterna Verde (LV)",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "https://linternaverde.co/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -74.06687674573439,
                    4.690095612076791
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "People Interest Technology Africa",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "www.pitaafrica.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    32.5729,
                    0.3476
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Oxford Internet Institute (OII), University of Oxford",
                "contactType": "",
                "social": "https://twitter.com/oiioxford",
                "socialType": "twitter",
                "website": "https://www.oii.ox.ac.uk/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -1.2585,
                    51.7567
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Observacom",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -56.1645,
                    -34.9011
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "QUT Digital Media Research Centre",
                "contactType": "",
                "social": "https://twitter.com/qutdmrc",
                "socialType": "twitter",
                "website": "https://research.qut.edu.au/dmrc/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.0235,
                    -27.4705
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "SMEX",
                "contactType": "",
                "social": "https://twitter.com/SMEX",
                "socialType": "twitter",
                "website": "https://smex.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    35.5021,
                    33.8938
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Strathclyde Centre for Internet Law & Policy",
                "contactType": "",
                "social": "https://twitter.com/strathcilp",
                "socialType": "twitter",
                "website": "https://www.strath.ac.uk/humanities/lawschool/centreforinternetlawandpolicy"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -4.2518,
                    55.8609
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Technology & Social Change Group (TASCHA)",
                "contactType": "",
                "social": "https://twitter.com/taschagroup",
                "socialType": "twitter",
                "website": "https://tascha.uw.edu"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -122.37500051116453,
                    47.613920436841006
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Research Group on Law, Science, Technology & Society (LSTS)",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "https://lsts.research.vub.be"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.3601,
                    50.8371
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "UMB Data&Society Lab",
                "contactType": "",
                "social": "https://twitter.com/umbdsl",
                "socialType": "twitter",
                "website": "http://www.fpvmv.umb.sk"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    19.1471,
                    48.7374
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Sussex Centre for Information Governance Research",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "https://www.sussex.ac.uk/research/centres/cigr"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.0649,
                    50.8599
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Unité de droit économique, Centre de droit privé",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "http://www.droit-eco-ulb.be"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.3587,
                    50.8411
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Stanford Center for Internet and Society (CIS)",
                "contactType": "",
                "social": "https://twitter.com/stanfordcis",
                "socialType": "twitter",
                "website": "http://cyberlaw.stanford.edu"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -122.1715,
                    37.4275
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Würzburg Centre for Social and Legal Implications of Artificial Intelligence (SOCAI)",
                "contactType": "",
                "social": "https://twitter.com/",
                "socialType": "twitter",
                "website": "https://socai.de"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    9.9384,
                    49.7913
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Web Science Institute",
                "contactType": "",
                "social": "",
                "socialType": "",
                "website": "http://www.southampton.ac.uk/wsi/index.page"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -1.3924,
                    50.9365
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Centro de Tecnologia y Sociedad (CETyS)",
                "contactType": "",
                "social": "https://www.linkedin.com/company/universidad-de-san-andres",
                "socialType": "linkedin",
                "website": "http://www.udesa.edu.ar"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -60.6475,
                    -32.9499
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Digital Trade and Data Governance Hub",
                "contactType": "",
                "social": "https://www.linkedin.com/company/george-washington-university",
                "socialType": "linkedin",
                "website": "http://www.gwu.edu"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.02750347424272,
                    38.897235472680144
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "The University of Western Australia",
                "contactType": "",
                "social": "https://www.linkedin.com/school/university-of-western-australia",
                "socialType": "linkedin",
                "website": "uwa.edu.au"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    115.8575,
                    -31.9505
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Curtin University",
                "contactType": "",
                "social": "https://www.linkedin.com/school/curtinuniversity",
                "socialType": "linkedin",
                "website": "curtin.edu"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    115.9004,
                    -31.9505
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Otago Polytechnic Auckland International Campus",
                "contactType": "",
                "social": "https://www.linkedin.com/school/otago-polytechnic-auckland-international-campus",
                "socialType": "linkedin",
                "website": "auckland.op.ac.nz"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    174.777,
                    -36.8471
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Tech Policy Design Centre",
                "contactType": "",
                "social": "https://www.linkedin.com/company/techpolicydesigncentre",
                "socialType": "linkedin",
                "website": "anu.edu.au"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.1287,
                    -35.282
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Build Up ^",
                "contactType": "",
                "social": "https://www.linkedin.com/company/how-to-build-up",
                "socialType": "linkedin",
                "website": "howtobuildup.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -122.4194,
                    37.7749
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Search for Common Ground",
                "contactType": "",
                "social": "https://www.linkedin.com/company/search-for-common-ground",
                "socialType": "linkedin",
                "website": "sfcg.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.06051746278058,
                    38.9424232538262
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Neely Center for Ethical Leadership and Decision Making",
                "contactType": "",
                "social": "https://www.linkedin.com/company/neely-center-for-ethics",
                "socialType": "linkedin",
                "website": "marshall.usc.edu"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -118.2437,
                    34.0522
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "OECD.AI",
                "contactType": "",
                "social": "https://www.linkedin.com/company/oecd-ai",
                "socialType": "linkedin",
                "website": "oecd.ai"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    2.3044766677019854,
                    48.88836259782455
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "BSR",
                "contactType": "",
                "social": "https://www.linkedin.com/company/bsr",
                "socialType": "linkedin",
                "website": "bsr.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -122.37586192922102,
                    37.728791019891034
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Portulans Institute",
                "contactType": "",
                "social": "https://twitter.com/portulansl",
                "socialType": "twitter",
                "website": "https://portulansinstitute.org"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.03603526110967,
                    38.884496760771
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Internet Society Portugal Chapter (ISOCPT)",
                "contactType": "",
                "social": "https://www.linkedin.com/in/isoc-pt/",
                "socialType": "linkedin",
                "website": "https://isoc.pt/"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -8.8881,
                    38.5306
                ]
            }
        }
    ]
}

const companies = [
    "#Leplusimportant",
    "AMIC (Asian Media Information and Communication Centre)",
    "Digital Rights Foundation",
    "Global Network of Internet & Society Centers (NoC)",
    "Global Partners Digital",
    "International Association for Media and Communication Research (IAMCR)",
    "Innovation 4 Policy Foundation",
    "Institute for Accountability in the Digital Age",
    "Internetlab",
    "IT for Change",
    "Observacom",
    "Portulans Institute",
    "Radical Xchange (French Chapter)",
    "Research ICT Africa",
    "The International Digital Policy Lab",
    "TESaCo",
    "Berkman Klein Center for Internet & Society",
]

const getCoordinates = () => {
    const coordinates = companies.map(company => {
        const coords = geojson.features.find(feature => feature.properties.name === company).geometry.coordinates;
        return `[${coords[0]},${coords[1]}]`
    });
    fs.writeFileSync('./coordinatesForSheet.txt', coordinates.join('\n'));
}
getCoordinates();













































































































































































































































































































































































































































































































































































































































































































































































































































































































































































