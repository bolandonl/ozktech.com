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
    description:
      'Juxly Vault is an EMR app that empowers healthcare providers, ACOs, DCEs, and payers to improve patient care and financial earnings by seamlessly integrating data across platforms.',
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
    description:
      'Bass Pro Shops is a premier outdoor and conservation company specializing in the sale of recreational goods and clothing.',
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
    description:
      'Classy Llama designs and delivers eCommerce solutions, creating value for exceptional brands via a broad range of services.',
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
    description:
      'Mostly Serious is a full-service digital agency producing custom web design, digital marketing, advertising, SEO, and content.',
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
    description:
      'Netsmart is a healthcare software company developing technology and providing services that support individualized care and improve outcomes.',
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
    description: `O'Reilly Automotive is an auto parts supplier offering the best combination of price and quality provided with the highest possible service level.`,
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
    description:
      'Duck Creek Technologies is an insurance software company serving the insurance industry with a suite of software and SAAS offerings.',
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
    description:
      'Penguin Tech delivers advanced technology solutions that compliment the core P&C Insurance Software of Duck Creek Technologies.',
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
    description:
      'Hearo is a remote support system designed for independence, helping people living with disabilities live without full-time in-person supervision.',
    facebook: 'HearoLife',
    instagram: 'hearolife',
    twitter: 'hearolife',
    linkedin: 'hearo-technologies',
    careers: 'https://www.linkedin.com/company/hearolife/jobs',
    city: 'Springfield',
    state: 'MO'
  }
]

export default COMPANIES
