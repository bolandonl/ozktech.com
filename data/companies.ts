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
  }
]

export default COMPANIES
