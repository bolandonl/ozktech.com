export interface COMPANY {
  name: string
  category: string
  description: string
  facebook: string
  instagram: string
  twitter: string
  linkedin: string
  careers: string
  city: string
  state?: string
}

const COMPANIES: COMPANY[] = [
  {
    name: 'Juxly',
    category: 'Private',
    description: 'Juxly Vault is an app integrating medical data across platforms.',
    facebook: 'Juxly-108425987584011',
    instagram: '',
    twitter: 'juxlyhealth',
    linkedin: 'juxly',
    careers: 'https://www.juxly.com/careers',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: 'Bass Pro Shops',
    category: 'Private',
    description: 'Bass Pro Shops is a premier outdoor and conservation company.',
    facebook: 'bassproshops',
    instagram: 'bassproshops',
    twitter: 'bassproshops',
    linkedin: 'bassproshops',
    careers: 'https://careers.basspro.com/us/en/c/base-camp-hq-jobs',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: 'Classy Llama',
    category: 'Private',
    description: 'Classy Llama is a full-service e-commerce and web agency.',
    facebook: 'ClassyLlama',
    instagram: 'classyllama',
    twitter: 'classyllama',
    linkedin: 'classy-llama',
    careers: 'https://www.classyllama.com/careers',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: 'Mostly Serious',
    category: 'Private',
    description: 'Mostly Serious is a full-service web and digital agency.',
    facebook: 'mostlyserious',
    instagram: 'mostly_serious',
    twitter: 'mostly_serious',
    linkedin: 'mostly-serious',
    careers: 'https://www.mostlyserious.io/careers',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: 'Netsmart',
    category: 'Private',
    description: 'Netsmart is a healthcare software development company.',
    facebook: 'netsmart',
    instagram: 'netsmartcareers',
    twitter: 'netsmarttech',
    linkedin: 'netsmart',
    careers: 'https://www.ntst.com/Company/Careers-and-Culture',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: `O'Reilly Auto Parts`,
    category: 'Private',
    description: `O'Reilly Automotive is a car and auto parts supplier.`,
    facebook: 'oreillyautoparts',
    instagram: 'oreillyautoparts',
    twitter: 'OReillyAuto',
    linkedin: `o'reilly-auto-parts`,
    careers: 'https://corporate.oreillyauto.com/onlineapplication/careerpage/tech',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: 'Duck Creek Technologies',
    category: 'Private',
    description: 'Duck Creek is an insurance software development company.',
    facebook: 'duckcreektech',
    instagram: '',
    twitter: 'duckcreektech',
    linkedin: 'duck-creek-technologies',
    careers: 'https://www.duckcreek.com/careers',
    city: 'Bolivar',
    state: 'MO'
  },
  {
    name: 'Penguin Tech',
    category: 'Private',
    description: 'Penguin Tech works with Duck Creek to develop insurance software.',
    facebook: 'penguintechs',
    instagram: '',
    twitter: 'PenguinTechs',
    linkedin: 'penguin-tech',
    careers: 'https://penguin.tech/careers',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: 'Hearo',
    category: 'Private',
    description: 'Hearo is a remote support system for people living with disabilities.',
    facebook: 'HearoLife',
    instagram: 'hearolife',
    twitter: 'hearolife',
    linkedin: 'hearo-technologies',
    careers: 'https://www.linkedin.com/company/hearolife/jobs',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: 'Hiperion',
    category: 'Private',
    description: 'Hiperion provides software development and prototyping services.',
    facebook: 'hiperionio',
    instagram: 'hiperionio',
    twitter: '',
    linkedin: 'hiperion-io',
    careers: 'https://www.linkedin.com/company/hiperion-io/jobs',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: 'Jmark',
    category: 'Private',
    description: 'Jmark provides IT and cybersecurity expertise.',
    facebook: 'JMARKBusinessSolutions',
    instagram: 'jmark_it',
    twitter: 'JMARK_Support',
    linkedin: 'jmark',
    careers: 'https://www.jmark.com/work-with-us',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: 'ISG Technologies',
    category: 'Private',
    description: 'ISG provides managed IT services for businesses.',
    facebook: 'ISGTech',
    instagram: '',
    twitter: 'isgtech',
    linkedin: 'isg-technology-inc',
    careers: 'https://www.isgtech.com/about-us/technology-careers',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: 'Pitt Technology Group',
    category: 'Private',
    description: 'Pitt Technology offers specialized IT and web services.',
    facebook: 'pitttechnology',
    instagram: '',
    twitter: '',
    linkedin: 'pitt-technology-group',
    careers: 'https://www.linkedin.com/company/pitt-technology-group/jobs',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: 'Moonbeam Development',
    category: 'Private',
    description: 'Moonbeam is an app development and web design company.',
    facebook: 'MoonbeamDevelopment',
    instagram: '',
    twitter: 'moonbeamdev',
    linkedin: '',
    careers: 'https://moonbeamdevelopment.com/about/careers',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: 'Whysdom',
    category: 'Private',
    description: 'Whysdom is a behavioral science & marketing tech firm.',
    facebook: '',
    instagram: '',
    twitter: '',
    linkedin: 'whysdom',
    careers: 'https://www.linkedin.com/company/whysdom/jobs',
    city: 'Branson',
    state: 'MO'
  },
  {
    name: 'FX Tech',
    category: 'Private',
    description: 'FX Tech is an IT services and consulting company.',
    facebook: 'fxtechspringfield',
    instagram: '',
    twitter: '',
    linkedin: 'fxtechnology',
    careers: 'https://www.linkedin.com/company/fxtechnology/jobs',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: 'Healthcare First',
    category: 'Private',
    description: 'Healtcare First is a home health and hospice software company.',
    facebook: 'HEALTHCAREfirst',
    instagram: '',
    twitter: 'HEALTHCAREfirst',
    linkedin: 'healthcarefirst',
    careers: 'https://www.healthcarefirst.com/careers',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: 'Titan Digital',
    category: 'Private',
    description: 'Titan Digital is a digital marketing and web design agency.',
    facebook: 'Titan.Digital.TN',
    instagram: '',
    twitter: 'TitanDigital_TN',
    linkedin: 'titandigital',
    careers: 'https://www.linkedin.com/company/titandigital/jobs',
    city: 'Ozark',
    state: 'MO'
  },
  {
    name: 'Paperwise',
    category: 'Private',
    description: 'Paperwise is a process automation software company.',
    facebook: 'paperwise',
    instagram: '',
    twitter: 'Paperwise',
    linkedin: 'paperwise',
    careers: 'https://www.paperwise.com/careers',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: 'Element 11',
    category: 'Private',
    description: 'Element 11 is a creative services digital agency.',
    facebook: 'Element11',
    instagram: '',
    twitter: 'e11creative',
    linkedin: 'element-eleven',
    careers: 'https://www.linkedin.com/company/element-eleven/jobs',
    city: 'Nixa',
    state: 'MO'
  },
  {
    name: 'Smart Choice Communications',
    category: 'Private',
    description: 'Smart Choice is an end-to-end telecommunications company.',
    facebook: 'SmartChoiceCommunications',
    instagram: 'smartchoicecommunications',
    twitter: 'scc_ip',
    linkedin: 'smart-choice-communications',
    careers: 'https://smartchoiceus.com/career',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: 'Code Scientists',
    category: 'Private',
    description: 'Code Scientists is a full-service software agency.',
    facebook: 'codescientists',
    instagram: '',
    twitter: '',
    linkedin: 'code-scientists',
    careers: 'https://www.linkedin.com/company/code-scientists/jobs',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: '10Turn',
    category: 'Private',
    description: '10Turn is a full-service creative and software agency.',
    facebook: '10Turn',
    instagram: '',
    twitter: '',
    linkedin: '',
    careers: 'https://techbehemoths.com/company/10turn',
    city: 'Nixa',
    state: 'MO'
  },
  {
    name: 'Mobomo',
    category: 'Private',
    description: 'Mobomo is a full-service software development agency.',
    facebook: 'MobomoLLC',
    instagram: '',
    twitter: 'MobomoApps',
    linkedin: 'mobomo-llc',
    careers: 'https://www.mobomo.com/careers',
    city: 'Nixa',
    state: 'MO'
  },
  {
    name: 'SpedTrack',
    category: 'Private',
    description: 'SpedTrack is a Special Education management software company.',
    facebook: 'spedtrack',
    instagram: '',
    twitter: 'spedtrack',
    linkedin: 'spedtrack',
    careers: 'https://spedtrack.com/open-positions',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: 'DreamCo',
    category: 'Private',
    description: 'DreamCo is a full-service technical solutions company.',
    facebook: 'DreamCoEnterprise',
    instagram: '',
    twitter: '',
    linkedin: 'dreamcoenterprise',
    careers: 'https://www.linkedin.com/company/dreamcoenterprise/jobs',
    city: 'Branson',
    state: 'MO'
  },
  {
    name: 'Digital LunchBox',
    category: 'Private',
    description: 'Digital LunchBox is a video production services company.',
    facebook: 'digitallunchbox',
    instagram: 'digitallunchbox',
    twitter: 'digitallunchbox',
    linkedin: 'digital-lunchbox-llc',
    careers: 'https://www.linkedin.com/company/digital-lunchbox-llc/jobs',
    city: 'Branson',
    state: 'MO'
  },
  {
    name: 'Branson.com',
    category: 'Private',
    description: 'Branson.com is a tourism website for Branson, MO.',
    facebook: 'bransoncom',
    instagram: 'bransoncom',
    twitter: '',
    linkedin: '',
    careers: 'https://www.linkedin.com/company/branson.com/jobs',
    city: 'Branson',
    state: 'MO'
  },
  {
    name: 'Wego Creative',
    category: 'Private',
    description: 'Wego Creative is a web design, branding, and marketing agency.',
    facebook: 'wegocreative',
    instagram: 'wegocreative',
    twitter: 'wego_creative',
    linkedin: '',
    careers: 'https://www.linkedin.com/in/wego-creative-44a288106',
    city: 'Branson',
    state: 'MO'
  },
  {
    name: 'Campaignium',
    category: 'Private',
    description: 'Campaignium is a full-service web and marketing company.',
    facebook: 'campaignium',
    instagram: 'campaignium',
    twitter: 'campaignium',
    linkedin: 'campaignium',
    careers: 'https://www.campaignium.com/careers',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: 'NPS Design Studio',
    category: 'Private',
    description: 'NPS is a web development and digital marketing agency.',
    facebook: 'NPSDesign',
    instagram: 'npsdesignstudio',
    twitter: 'nakedpixelstdio',
    linkedin: 'nps-digital-design-studio',
    careers: 'https://www.linkedin.com/company/nps-digital-design-studio/jobs',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: 'Hook Creative',
    category: 'Private',
    description: 'Hook is a creative playground and brand agency.',
    facebook: 'hookcreative',
    instagram: 'hookcreative',
    twitter: 'wearehook',
    linkedin: 'hook-creative',
    careers: 'https://www.linkedin.com/company/hook-creative/jobs',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: 'Red Crow Marketing',
    category: 'Private',
    description: 'Red Crow Marketing is a results-driven marketing firm.',
    facebook: 'RedCrowMarketing',
    instagram: 'redcrowinc',
    twitter: 'redcrowinc',
    linkedin: 'red-crow-marketing-inc-',
    careers: 'https://www.redcrowmarketing.com/contact/open-positions',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: 'Invo Solutions',
    category: 'Private',
    description: 'Invo is a video banking software platform and company.',
    facebook: 'invovideobanking',
    instagram: 'invosolutions',
    twitter: '',
    linkedin: 'invosolutions',
    careers: 'https://www.invosolutions.com/company',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: 'Congenius',
    category: 'Private',
    description: 'Congenius is a construction takeoff, estimating, and sales CRM software.',
    facebook: 'congenius',
    instagram: 'congenius_app',
    twitter: '',
    linkedin: 'congeniusllc',
    careers: 'https://www.congenius.com/careers',
    city: 'Springfield',
    state: 'MO'
  },
  {
    name: 'Midwestern Interactive',
    category: 'Private',
    description: 'Midwestern is an embedded technical and creative consultancy.',
    facebook: 'buildmidwestern',
    instagram: 'buildmidwestern',
    twitter: 'buildmidwestern',
    linkedin: 'buildmidwestern',
    careers: 'https://midwesterninteractive.com/roles',
    city: 'Joplin',
    state: 'MO'
  }
]

export default COMPANIES
