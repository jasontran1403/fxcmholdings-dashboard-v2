// avatar
import avatar2 from '@/assets/images/users/avatar-2.jpg'
import avatar3 from '@/assets/images/users/avatar-3.jpg'
import avatar4 from '@/assets/images/users/avatar-4.jpg'
import avatar5 from '@/assets/images/users/avatar-5.jpg'
import { Employee } from './types'

// basic tables
interface TableRecord {
	id: number
	name: string
	phoneNo: string
	dob: string
	country: string
	accountNo: string
	image: string
	cell: string
	activeClass?: string
}

interface ExpandableRecord {
	product: string
	courier: string
	variant: string
	now: number
	status: string
	price: string
	Quantity: string
	Amount: string
}

interface NestedRecords {
	name: string
	phoneNo: string
	dob: string
	country: string
	children?: NestedRecords[]
}

// data tables
// interface DataTableRecord {
//   id: number;
//   firstName: string;
//   lastName: string;
//   position: string;
//   office: string;
//   age: number;
//   startDate: string;
//   salary: string;
//   extn: number;
//   email: string;
// }

// basic tables
const records: TableRecord[] = [
	{
		id: 1,
		name: 'Risa D. Pearson',
		phoneNo: '336-508-2157',
		dob: 'July 24, 1950',
		country: 'India',
		accountNo: 'AC336 508 2157',
		image: avatar2,
		cell: 'Cell',
		activeClass: 'table-active',
	},
	{
		id: 2,
		name: 'Ann C. Thompson',
		phoneNo: '646-473-2057',
		dob: 'January 25, 1959',
		country: 'USA',
		accountNo: 'SB646 473 2057',
		image: avatar3,
		cell: 'Cell',
	},
	{
		id: 3,
		name: 'Paul J. Friend',
		phoneNo: '281-308-0793',
		dob: 'September 1, 1939',
		country: 'Canada',
		accountNo: 'DL281 308 0793',
		image: avatar4,
		cell: 'Cell',
	},
	{
		id: 4,
		name: 'Linda G. Smith',
		phoneNo: '606-253-1207',
		dob: 'May 3, 1962',
		country: 'Brazil',
		accountNo: 'CA269 714 6825',
		image: avatar5,
		cell: 'Cell',
	},
]

const expandablerecords: ExpandableRecord[] = [
	{
		product: 'ASOS Ridley High Waist',
		courier: 'FedEx',
		variant: 'success',
		now: 100,
		status: 'Delivered',
		price: '$79.49',
		Quantity: '82',
		Amount: '6,518.18',
	},
	{
		product: 'Marco Lightweight Shirt',
		courier: 'DHL',
		variant: 'warning',
		now: 50,
		status: 'Shipped',
		price: '$128.50',
		Quantity: '37',
		Amount: '4,754.50',
	},
	{
		product: 'Half Sleeve Shirt',
		courier: 'Bright',
		variant: 'info',
		now: 25,
		status: 'Order Received',
		price: '$39.99',
		Quantity: '64',
		Amount: '2,559.36',
	},
	{
		product: 'Lightweight Jacket',
		courier: 'FedEx',
		variant: 'success',
		now: 100,
		status: 'Delivered',
		price: '$20.00',
		Quantity: '184',
		Amount: '3,680.00',
	},
	{
		product: 'Cargo Pant & Shirt',
		courier: 'FedEx',
		variant: 'danger',
		now: 10,
		status: 'Payment Failed',
		price: '$28.49',
		Quantity: '69',
		Amount: '1,965.81',
	},
	{
		product: 'ASOS Ridley High Waist',
		courier: 'FedEx',
		variant: 'danger',
		now: 10,
		status: 'Payment Failed',
		price: '$79.49',
		Quantity: '82',
		Amount: '6,518.18',
	},
]

const nestedrecords: NestedRecords[] = [
	{
		name: 'Risa D. Pearson',
		phoneNo: '336-508-2157',
		dob: 'July 24, 1950',
		country: 'india',
		children: [
			{
				name: 'Risa D. Pearson',
				phoneNo: '336-508-2157',
				dob: 'July 24, 1950',
				country: 'india',
			},
			{
				name: 'Ann C. Thompson',
				phoneNo: '646-473-2057',
				dob: 'January 25, 1959',
				country: 'Canada',
			},
		],
	},
	{
		name: 'Linda G. Smith',
		phoneNo: '606-253-1207',
		dob: 'September 2, 1939',
		country: 'Belgium',
	},
]

const employeeRecords: Employee[] = [
	{
		id: 1,
		age: 32,
		name: 'Burt',
		company: 'Kaggle',
		phone: '+1 (823) 532-2427',
	},
	{
		id: 2,
		age: 23,
		name: 'Bruno',
		company: 'Magmina',
		phone: '+1 (813) 583-2089',
	},
	{
		id: 3,
		age: 31,
		name: 'Alvarado',
		company: 'Translink',
		phone: '+1 (975) 468-3875',
	},
	{
		id: 4,
		age: 24,
		name: 'Lilia',
		company: 'Digitalus',
		phone: '+1 (891) 537-3461',
	},
	{
		id: 5,
		age: 25,
		name: 'Amanda',
		company: 'Bunga',
		phone: '+1 (916) 522-3747',
	},
	{
		id: 6,
		age: 20,
		name: 'Alexandra',
		company: 'Conjurica',
		phone: '+1 (876) 492-3181',
	},
	{
		id: 7,
		age: 27,
		name: 'Diana',
		company: 'Extragen',
		phone: '+1 (977) 417-3038',
	},
	{
		id: 8,
		age: 26,
		name: 'Goodman',
		company: 'Aquamate',
		phone: '+1 (930) 545-2289',
	},
	{
		id: 9,
		age: 26,
		name: 'Edith',
		company: 'Pyrami',
		phone: '+1 (854) 506-3468',
	},
	{
		id: 10,
		age: 29,
		name: 'Juana',
		company: 'Singavera',
		phone: '+1 (872) 560-2324',
	},
	{
		id: 11,
		age: 21,
		name: 'Fitzgerald',
		company: 'Dancerity',
		phone: '+1 (813) 573-2507',
	},
	{
		id: 12,
		age: 38,
		name: 'Madden',
		company: 'Corpulse',
		phone: '+1 (935) 534-3876',
	},
	{
		id: 13,
		age: 40,
		name: 'Jewell',
		company: 'Frenex',
		phone: '+1 (886) 516-3262',
	},
	{
		id: 14,
		age: 32,
		name: 'Kerr',
		company: 'Artiq',
		phone: '+1 (807) 561-3077',
	},
	{
		id: 15,
		age: 20,
		name: 'Washington',
		company: 'Organica',
		phone: '+1 (948) 458-3517',
	},
	{
		id: 16,
		age: 20,
		name: 'Audrey',
		company: 'Softmicro',
		phone: '+1 (900) 592-3841',
	},
	{
		id: 17,
		age: 39,
		name: 'Allison',
		company: 'Playce',
		phone: '+1 (998) 478-3810',
	},
	{
		id: 18,
		age: 25,
		name: 'Holder',
		company: 'Paragonia',
		phone: '+1 (850) 536-2708',
	},
	{
		id: 19,
		age: 26,
		name: 'Atkinson',
		company: 'Scentric',
		phone: '+1 (850) 467-2761',
	},
	{
		id: 20,
		age: 35,
		name: 'Delaney',
		company: 'Telpod',
		phone: '+1 (934) 468-2218',
	},
	{
		id: 21,
		age: 20,
		name: 'Myrna',
		company: 'Zanity',
		phone: '+1 (953) 565-3836',
	},
	{
		id: 22,
		age: 30,
		name: 'Erna',
		company: 'Techade',
		phone: '+1 (872) 574-3879',
	},
	{
		id: 23,
		age: 36,
		name: 'Fannie',
		company: 'Cubix',
		phone: '+1 (843) 576-2904',
	},
	{
		id: 24,
		age: 38,
		name: 'Melody',
		company: 'Talae',
		phone: '+1 (817) 424-3500',
	},
	{
		id: 25,
		age: 27,
		name: 'Letitia',
		company: 'Enjola',
		phone: '+1 (857) 441-2917',
	},
	{
		id: 26,
		age: 33,
		name: 'Nina',
		company: 'Eventex',
		phone: '+1 (917) 599-2793',
	},
	{
		id: 27,
		age: 40,
		name: 'Byrd',
		company: 'Obones',
		phone: '+1 (846) 422-2064',
	},
	{
		id: 28,
		age: 34,
		name: 'Chen',
		company: 'Dadabase',
		phone: '+1 (956) 474-3409',
	},
	{
		id: 29,
		age: 25,
		name: 'Alexandria',
		company: 'Turnabout',
		phone: '+1 (964) 415-2278',
	},
	{
		id: 30,
		age: 37,
		name: 'Page',
		company: 'Metroz',
		phone: '+1 (897) 541-2460',
	},
	{
		id: 31,
		age: 24,
		name: 'Clare',
		company: 'Zilch',
		phone: '+1 (832) 591-3814',
	},
	{
		id: 32,
		age: 38,
		name: 'Lindsey',
		company: 'Roughies',
		phone: '+1 (942) 579-2920',
	},
	{
		id: 33,
		age: 32,
		name: 'Oconnor',
		company: 'Kinetica',
		phone: '+1 (899) 599-3206',
	},
	{
		id: 34,
		age: 35,
		name: 'Maldonado',
		company: 'Zentime',
		phone: '+1 (955) 419-2815',
	},
	{
		id: 35,
		age: 25,
		name: 'Day',
		company: 'Eargo',
		phone: '+1 (895) 555-2916',
	},
	{
		id: 36,
		age: 20,
		name: 'Collier',
		company: 'Phuel',
		phone: '+1 (998) 468-2079',
	},
	{
		id: 37,
		age: 40,
		name: 'Jeannette',
		company: 'Entogrok',
		phone: '+1 (904) 567-2078',
	},
	{
		id: 38,
		age: 33,
		name: 'Wallace',
		company: 'Nurali',
		phone: '+1 (877) 566-3957',
	},
	{
		id: 39,
		age: 39,
		name: 'Mcfadden',
		company: 'Cincyr',
		phone: '+1 (949) 405-3992',
	},
	{
		id: 40,
		age: 21,
		name: 'Chrystal',
		company: 'Futurize',
		phone: '+1 (988) 458-3032',
	},
	{
		id: 41,
		age: 31,
		name: 'Leila',
		company: 'Zensure',
		phone: '+1 (902) 447-2419',
	},
	{
		id: 42,
		age: 24,
		name: 'Madelyn',
		company: 'Egypto',
		phone: '+1 (881) 538-3081',
	},
	{
		id: 43,
		age: 39,
		name: 'Peck',
		company: 'Tellifly',
		phone: '+1 (803) 452-3922',
	},
	{
		id: 44,
		age: 32,
		name: 'Garrett',
		company: 'Aquasure',
		phone: '+1 (876) 475-2185',
	},
	{
		id: 45,
		age: 21,
		name: 'Kramer',
		company: 'Terrago',
		phone: '+1 (912) 404-2597',
	},
	{
		id: 46,
		age: 35,
		name: 'Lane',
		company: 'Anivet',
		phone: '+1 (911) 495-3587',
	},
	{
		id: 47,
		age: 21,
		name: 'Merritt',
		company: 'Inear',
		phone: '+1 (856) 519-3838',
	},
	{
		id: 48,
		age: 25,
		name: 'Margarita',
		company: 'Unq',
		phone: '+1 (931) 558-3156',
	},
	{
		id: 49,
		age: 28,
		name: 'Leigh',
		company: 'Marqet',
		phone: '+1 (918) 526-2007',
	},
	{
		id: 50,
		age: 31,
		name: 'Coleman',
		company: 'Insuresys',
		phone: '+1 (827) 449-3786',
	},
	{
		id: 51,
		age: 31,
		name: 'Alexander',
		company: 'Portico',
		phone: '+1 (854) 576-2455',
	},
	{
		id: 52,
		age: 38,
		name: 'Tanisha',
		company: 'Earthwax',
		phone: '+1 (994) 494-3496',
	},
	{
		id: 53,
		age: 23,
		name: 'Crane',
		company: 'Pushcart',
		phone: '+1 (924) 497-3347',
	},
	{
		id: 54,
		age: 26,
		name: 'Carmella',
		company: 'Acusage',
		phone: '+1 (898) 575-2585',
	},
	{
		id: 55,
		age: 27,
		name: 'Rosalind',
		company: 'Isologica',
		phone: '+1 (838) 572-2994',
	},
	{
		id: 56,
		age: 37,
		name: 'Duran',
		company: 'Gazak',
		phone: '+1 (991) 446-3820',
	},
	{
		id: 57,
		age: 27,
		name: 'Bernard',
		company: 'Zoinage',
		phone: '+1 (824) 585-2197',
	},
	{
		id: 58,
		age: 29,
		name: 'Tate',
		company: 'Endipine',
		phone: '+1 (896) 448-2084',
	},
	{
		id: 59,
		age: 39,
		name: 'Pearlie',
		company: 'Progenex',
		phone: '+1 (805) 545-2585',
	},
	{
		id: 60,
		age: 20,
		name: 'Manning',
		company: 'Handshake',
		phone: '+1 (917) 405-3406',
	},
]

const expandableRecords: Employee[] = [
	{
		id: 1,
		age: 32,
		name: 'Burt',
		company: 'Kaggle',
		phone: '+1 (823) 532-2427',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 2,
		age: 23,
		name: 'Long',
		company: 'Magmina',
		phone: '+1 (813) 583-2089',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 3,
		age: 31,
		name: 'Alvarado',
		company: 'Translink',
		phone: '+1 (975) 468-3875',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 4,
		age: 24,
		name: 'Lilia',
		company: 'Digitalus',
		phone: '+1 (891) 537-3461',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 5,
		age: 25,
		name: 'Amanda',
		company: 'Bunga',
		phone: '+1 (916) 522-3747',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 6,
		age: 20,
		name: 'Alexandra',
		company: 'Conjurica',
		phone: '+1 (876) 492-3181',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 7,
		age: 27,
		name: 'Diana',
		company: 'Extragen',
		phone: '+1 (977) 417-3038',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 8,
		age: 26,
		name: 'Goodman',
		company: 'Aquamate',
		phone: '+1 (930) 545-2289',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 9,
		age: 26,
		name: 'Edith',
		company: 'Pyrami',
		phone: '+1 (854) 506-3468',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 10,
		age: 29,
		name: 'Juana',
		company: 'Singavera',
		phone: '+1 (872) 560-2324',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 11,
		age: 21,
		name: 'Fitzgerald',
		company: 'Dancerity',
		phone: '+1 (813) 573-2507',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 12,
		age: 38,
		name: 'Madden',
		company: 'Corpulse',
		phone: '+1 (935) 534-3876',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 13,
		age: 40,
		name: 'Jewell',
		company: 'Frenex',
		phone: '+1 (886) 516-3262',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 14,
		age: 32,
		name: 'Kerr',
		company: 'Artiq',
		phone: '+1 (807) 561-3077',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 15,
		age: 20,
		name: 'Washington',
		company: 'Organica',
		phone: '+1 (948) 458-3517',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 16,
		age: 20,
		name: 'Audrey',
		company: 'Softmicro',
		phone: '+1 (900) 592-3841',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 17,
		age: 39,
		name: 'Allison',
		company: 'Playce',
		phone: '+1 (998) 478-3810',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 18,
		age: 25,
		name: 'Holder',
		company: 'Paragonia',
		phone: '+1 (850) 536-2708',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 19,
		age: 26,
		name: 'Atkinson',
		company: 'Scentric',
		phone: '+1 (850) 467-2761',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 20,
		age: 35,
		name: 'Delaney',
		company: 'Telpod',
		phone: '+1 (934) 468-2218',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 21,
		age: 20,
		name: 'Myrna',
		company: 'Zanity',
		phone: '+1 (953) 565-3836',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 22,
		age: 30,
		name: 'Erna',
		company: 'Techade',
		phone: '+1 (872) 574-3879',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 23,
		age: 36,
		name: 'Fannie',
		company: 'Cubix',
		phone: '+1 (843) 576-2904',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 24,
		age: 38,
		name: 'Melody',
		company: 'Talae',
		phone: '+1 (817) 424-3500',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 25,
		age: 27,
		name: 'Letitia',
		company: 'Enjola',
		phone: '+1 (857) 441-2917',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 26,
		age: 33,
		name: 'Nina',
		company: 'Eventex',
		phone: '+1 (917) 599-2793',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 27,
		age: 40,
		name: 'Byrd',
		company: 'Obones',
		phone: '+1 (846) 422-2064',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 28,
		age: 34,
		name: 'Chen',
		company: 'Dadabase',
		phone: '+1 (956) 474-3409',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 29,
		age: 25,
		name: 'Alexandria',
		company: 'Turnabout',
		phone: '+1 (964) 415-2278',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 30,
		age: 37,
		name: 'Page',
		company: 'Metroz',
		phone: '+1 (897) 541-2460',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 31,
		age: 24,
		name: 'Clare',
		company: 'Zilch',
		phone: '+1 (832) 591-3814',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 32,
		age: 38,
		name: 'Lindsey',
		company: 'Roughies',
		phone: '+1 (942) 579-2920',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 33,
		age: 32,
		name: 'Oconnor',
		company: 'Kinetica',
		phone: '+1 (899) 599-3206',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 34,
		age: 35,
		name: 'Maldonado',
		company: 'Zentime',
		phone: '+1 (955) 419-2815',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 35,
		age: 25,
		name: 'Day',
		company: 'Eargo',
		phone: '+1 (895) 555-2916',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 36,
		age: 20,
		name: 'Collier',
		company: 'Phuel',
		phone: '+1 (998) 468-2079',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 37,
		age: 40,
		name: 'Jeannette',
		company: 'Entogrok',
		phone: '+1 (904) 567-2078',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 38,
		age: 33,
		name: 'Wallace',
		company: 'Nurali',
		phone: '+1 (877) 566-3957',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 39,
		age: 39,
		name: 'Mcfadden',
		company: 'Cincyr',
		phone: '+1 (949) 405-3992',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 40,
		age: 21,
		name: 'Chrystal',
		company: 'Futurize',
		phone: '+1 (988) 458-3032',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
]
// datatables
// const dataTableRecords: DataTableRecord[] = [
//   {
//     id: 1,
//     firstName: 'Tiger',
//     lastName: 'Nixon',
//     position: 'System Architect',
//     office: 'Edinburgh',
//     age: 61,
//     startDate: '2011/04/25',
//     salary: '320,800',
//     extn: 5421,
//     email: 't.nixon@datatables.net',
//   },
//   {
//     id: 2,
//     firstName: 'Garrett',
//     lastName: 'Winters',
//     position: 'Accountant',
//     office: 'Tokyo',
//     age: 63,
//     startDate: '2011/07/25',
//     salary: '170,750',
//     extn: 8422,
//     email: 'g.winters@datatables.net',
//   },
//   {
//     id: 3,
//     firstName: 'Ashton',
//     lastName: 'Cox',
//     position: 'Junior Technical Author',
//     office: 'San Francisco',
//     age: 66,
//     startDate: '2009/01/12',
//     salary: '86,000',
//     extn: 1562,
//     email: 'a.cox@datatables.net',
//   },
//   {
//     id: 4,
//     firstName: 'Cedric',
//     lastName: 'Kelly',
//     position: 'Senior Javascript Developer',
//     office: 'Edinburgh',
//     age: 22,
//     startDate: '2012/03/29',
//     salary: '433,060',
//     extn: 6224,
//     email: 'c.kelly@datatables.net',
//   },
//   {
//     id: 5,
//     firstName: 'Airi',
//     lastName: 'Satou',
//     position: 'Accountant',
//     office: 'Tokyo',
//     age: 33,
//     startDate: '2008/11/28',
//     salary: '162,700',
//     extn: 5407,
//     email: 'a.satou@datatables.net',
//   },
//   {
//     id: 6,
//     firstName: 'Brielle',
//     lastName: 'Williamson',
//     position: 'Integration Specialist',
//     office: 'New York',
//     age: 61,
//     startDate: '2012/12/02',
//     salary: '372,000',
//     extn: 4804,
//     email: 'b.williamson@datatables.net',
//   },
//   {
//     id: 7,
//     firstName: 'Herrod',
//     lastName: 'Chandler',
//     position: 'Sales Assistant',
//     office: 'San Francisco',
//     age: 59,
//     startDate: '2012/08/06',
//     salary: '137,500',
//     extn: 9608,
//     email: 'h.chandler@datatables.net',
//   },
//   {
//     id: 8,
//     firstName: 'Rhona',
//     lastName: 'Davidson',
//     position: 'Integration Specialist',
//     office: 'Tokyo',
//     age: 55,
//     startDate: '2010/10/14',
//     salary: '327,900',
//     extn: 6200,
//     email: 'r.davidson@datatables.net',
//   },
//   {
//     id: 9,
//     firstName: 'Colleen',
//     lastName: 'Hurst',
//     position: 'Javascript Developer',
//     office: 'San Francisco',
//     age: 39,
//     startDate: '2009/09/15',
//     salary: '205,500',
//     extn: 2360,
//     email: 'c.hurst@datatables.net',
//   },
//   {
//     id: 10,
//     firstName: 'Sonya',
//     lastName: 'Frost',
//     position: 'Software Engineer',
//     office: 'Edinburgh',
//     age: 23,
//     startDate: '2008/12/13',
//     salary: '103,600',
//     extn: 1667,
//     email: 's.frost@datatables.net',
//   },
//   {
//     id: 11,
//     firstName: 'Jena',
//     lastName: 'Gaines',
//     position: 'Office Manager',
//     office: 'London',
//     age: 30,
//     startDate: '2008/12/19',
//     salary: '90,560',
//     extn: 3814,
//     email: 'j.gaines@datatables.net',
//   },
//   {
//     id: 12,
//     firstName: 'Quinn',
//     lastName: 'Flynn',
//     position: 'Support Lead',
//     office: 'Edinburgh',
//     age: 22,
//     startDate: '2013/03/03',
//     salary: '342,000',
//     extn: 9497,
//     email: 'q.flynn@datatables.net',
//   },
//   {
//     id: 13,
//     firstName: 'Charde',
//     lastName: 'Marshall',
//     position: 'Regional Director',
//     office: 'San Francisco',
//     age: 36,
//     startDate: '2008/10/16',
//     salary: '470,600',
//     extn: 6741,
//     email: 'c.marshall@datatables.net',
//   },
//   {
//     id: 14,
//     firstName: 'Haley',
//     lastName: 'Kennedy',
//     position: 'Senior Marketing Designer',
//     office: 'London',
//     age: 43,
//     startDate: '2012/12/18',
//     salary: '313,500',
//     extn: 3597,
//     email: 'h.kennedy@datatables.net',
//   },
//   {
//     id: 15,
//     firstName: 'Tatyana',
//     lastName: 'Fitzpatrick',
//     position: 'Regional Director',
//     office: 'London',
//     age: 19,
//     startDate: '2010/03/17',
//     salary: '385,750',
//     extn: 1965,
//     email: 't.fitzpatrick@datatables.net',
//   },
//   {
//     id: 16,
//     firstName: 'Michael',
//     lastName: 'Silva',
//     position: 'Marketing Designer',
//     office: 'London',
//     age: 66,
//     startDate: '2012/11/27',
//     salary: '198,500',
//     extn: 1581,
//     email: 'm.silva@datatables.net',
//   },
//   {
//     id: 17,
//     firstName: 'Paul',
//     lastName: 'Byrd',
//     position: 'Chief Financial Officer (CFO)',
//     office: 'New York',
//     age: 64,
//     startDate: '2010/06/09',
//     salary: '725,000',
//     extn: 3059,
//     email: 'p.byrd@datatables.net',
//   },
//   {
//     id: 18,
//     firstName: 'Gloria',
//     lastName: 'Little',
//     position: 'Systems Administrator',
//     office: 'New York',
//     age: 59,
//     startDate: '2009/04/10',
//     salary: '237,500',
//     extn: 1721,
//     email: 'g.little@datatables.net',
//   },
//   {
//     id: 19,
//     firstName: 'Bradley',
//     lastName: 'Greer',
//     position: 'Software Engineer',
//     office: 'London',
//     age: 41,
//     startDate: '2012/10/13',
//     salary: '132,000',
//     extn: 2558,
//     email: 'b.greer@datatables.net',
//   },
//   {
//     id: 20,
//     firstName: 'Dai',
//     lastName: 'Rios',
//     position: 'Personnel Lead',
//     office: 'Edinburgh',
//     age: 35,
//     startDate: '2012/09/26',
//     salary: '217,500',
//     extn: 2290,
//     email: 'd.rios@datatables.net',
//   },
//   {
//     id: 21,
//     firstName: 'Jenette',
//     lastName: 'Caldwell',
//     position: 'Development Lead',
//     office: 'New York',
//     age: 30,
//     startDate: '2011/09/03',
//     salary: '345,000',
//     extn: 1937,
//     email: 'j.caldwell@datatables.net',
//   },
//   {
//     id: 22,
//     firstName: 'Yuri',
//     lastName: 'Berry',
//     position: 'Chief Marketing Officer (CMO)',
//     office: 'New York',
//     age: 40,
//     startDate: '2009/06/25',
//     salary: '675,000',
//     extn: 6154,
//     email: 'y.berry@datatables.net',
//   },
//   {
//     id: 23,
//     firstName: 'Caesar',
//     lastName: 'Vance',
//     position: 'Pre-Sales Support',
//     office: 'New York',
//     age: 21,
//     startDate: '2011/12/12',
//     salary: '106,450',
//     extn: 8330,
//     email: 'c.vance@datatables.net',
//   },
//   {
//     id: 24,
//     firstName: 'Doris',
//     lastName: 'Wilder',
//     position: 'Sales Assistant',
//     office: 'Sidney',
//     age: 23,
//     startDate: '2010/09/20',
//     salary: '85,600',
//     extn: 3023,
//     email: 'd.wilder@datatables.net',
//   },
//   {
//     id: 25,
//     firstName: 'Angelica',
//     lastName: 'Ramos',
//     position: 'Chief Executive Officer (CEO)',
//     office: 'London',
//     age: 47,
//     startDate: '2009/10/09',
//     salary: '1,200,000',
//     extn: 5797,
//     email: 'a.ramos@datatables.net',
//   },
//   {
//     id: 26,
//     firstName: 'Gavin',
//     lastName: 'Joyce',
//     position: 'Developer',
//     office: 'Edinburgh',
//     age: 42,
//     startDate: '2010/12/22',
//     salary: '92,575',
//     extn: 8822,
//     email: 'g.joyce@datatables.net',
//   },
//   {
//     id: 27,
//     firstName: 'Jennifer',
//     lastName: 'Chang',
//     position: 'Regional Director',
//     office: 'Singapore',
//     age: 28,
//     startDate: '2010/11/14',
//     salary: '357,650',
//     extn: 9239,
//     email: 'j.chang@datatables.net',
//   },
//   {
//     id: 28,
//     firstName: 'Brenden',
//     lastName: 'Wagner',
//     position: 'Software Engineer',
//     office: 'San Francisco',
//     age: 28,
//     startDate: '2011/06/07',
//     salary: '206,850',
//     extn: 1314,
//     email: 'b.wagner@datatables.net',
//   },
//   {
//     id: 29,
//     firstName: 'Fiona',
//     lastName: 'Green',
//     position: 'Chief Operating Officer (COO)',
//     office: 'San Francisco',
//     age: 48,
//     startDate: '2010/03/11',
//     salary: '850,000',
//     extn: 2947,
//     email: 'f.green@datatables.net',
//   },
//   {
//     id: 30,
//     firstName: 'Shou',
//     lastName: 'Itou',
//     position: 'Regional Marketing',
//     office: 'Tokyo',
//     age: 20,
//     startDate: '2011/08/14',
//     salary: '163,000',
//     extn: 8899,
//     email: 's.itou@datatables.net',
//   },
//   {
//     id: 31,
//     firstName: 'Michelle',
//     lastName: 'House',
//     position: 'Integration Specialist',
//     office: 'Sidney',
//     age: 37,
//     startDate: '2011/06/02',
//     salary: '95,400',
//     extn: 2769,
//     email: 'm.house@datatables.net',
//   },
//   {
//     id: 32,
//     firstName: 'Suki',
//     lastName: 'Burks',
//     position: 'Developer',
//     office: 'London',
//     age: 53,
//     startDate: '2009/10/22',
//     salary: '114,500',
//     extn: 6832,
//     email: 's.burks@datatables.net',
//   },
//   {
//     id: 33,
//     firstName: 'Prescott',
//     lastName: 'Bartlett',
//     position: 'Technical Author',
//     office: 'London',
//     age: 27,
//     startDate: '2011/05/07',
//     salary: '145,000',
//     extn: 3606,
//     email: 'p.bartlett@datatables.net',
//   },
//   {
//     id: 34,
//     firstName: 'Gavin',
//     lastName: 'Cortez',
//     position: 'Team Leader',
//     office: 'San Francisco',
//     age: 22,
//     startDate: '2008/10/26',
//     salary: '235,500',
//     extn: 2860,
//     email: 'g.cortez@datatables.net',
//   },
//   {
//     id: 35,
//     firstName: 'Martena',
//     lastName: 'Mccray',
//     position: 'Post-Sales support',
//     office: 'Edinburgh',
//     age: 46,
//     startDate: '2011/03/09',
//     salary: '324,050',
//     extn: 8240,
//     email: 'm.mccray@datatables.net',
//   },
//   {
//     id: 36,
//     firstName: 'Unity',
//     lastName: 'Butler',
//     position: 'Marketing Designer',
//     office: 'San Francisco',
//     age: 47,
//     startDate: '2009/12/09',
//     salary: '85,675',
//     extn: 5384,
//     email: 'u.butler@datatables.net',
//   },
//   {
//     id: 37,
//     firstName: 'Howard',
//     lastName: 'Hatfield',
//     position: 'Office Manager',
//     office: 'San Francisco',
//     age: 51,
//     startDate: '2008/12/16',
//     salary: '164,500',
//     extn: 7031,
//     email: 'h.hatfield@datatables.net',
//   },
//   {
//     id: 38,
//     firstName: 'Hope',
//     lastName: 'Fuentes',
//     position: 'Secretary',
//     office: 'San Francisco',
//     age: 41,
//     startDate: '2010/02/12',
//     salary: '109,850',
//     extn: 6318,
//     email: 'h.fuentes@datatables.net',
//   },
//   {
//     id: 39,
//     firstName: 'Vivian',
//     lastName: 'Harrell',
//     position: 'Financial Controller',
//     office: 'San Francisco',
//     age: 62,
//     startDate: '2009/02/14',
//     salary: '452,500',
//     extn: 9422,
//     email: 'v.harrell@datatables.net',
//   },
//   {
//     id: 40,
//     firstName: 'Timothy',
//     lastName: 'Mooney',
//     position: 'Office Manager',
//     office: 'London',
//     age: 37,
//     startDate: '2008/12/11',
//     salary: '136,200',
//     extn: 7580,
//     email: 't.mooney@datatables.net',
//   },
//   {
//     id: 41,
//     firstName: 'Jackson',
//     lastName: 'Bradshaw',
//     position: 'Director',
//     office: 'New York',
//     age: 65,
//     startDate: '2008/09/26',
//     salary: '645,750',
//     extn: 1042,
//     email: 'j.bradshaw@datatables.net',
//   },
//   {
//     id: 42,
//     firstName: 'Olivia',
//     lastName: 'Liang',
//     position: 'Support Engineer',
//     office: 'Singapore',
//     age: 64,
//     startDate: '2011/02/03',
//     salary: '234,500',
//     extn: 2120,
//     email: 'o.liang@datatables.net',
//   },
//   {
//     id: 43,
//     firstName: 'Bruno',
//     lastName: 'Nash',
//     position: 'Software Engineer',
//     office: 'London',
//     age: 38,
//     startDate: '2011/05/03',
//     salary: '163,500',
//     extn: 6222,
//     email: 'b.nash@datatables.net',
//   },
//   {
//     id: 44,
//     firstName: 'Sakura',
//     lastName: 'Yamamoto',
//     position: 'Support Engineer',
//     office: 'Tokyo',
//     age: 37,
//     startDate: '2009/08/19',
//     salary: '139,575',
//     extn: 9383,
//     email: 's.yamamoto@datatables.net',
//   },
//   {
//     id: 45,
//     firstName: 'Thor',
//     lastName: 'Walton',
//     position: 'Developer',
//     office: 'New York',
//     age: 61,
//     startDate: '2013/08/11',
//     salary: '98,540',
//     extn: 8327,
//     email: 't.walton@datatables.net',
//   },
//   {
//     id: 46,
//     firstName: 'Finn',
//     lastName: 'Camacho',
//     position: 'Support Engineer',
//     office: 'San Francisco',
//     age: 47,
//     startDate: '2009/07/07',
//     salary: '87,500',
//     extn: 2927,
//     email: 'f.camacho@datatables.net',
//   },
//   {
//     id: 47,
//     firstName: 'Serge',
//     lastName: 'Baldwin',
//     position: 'Data Coordinator',
//     office: 'Singapore',
//     age: 64,
//     startDate: '2012/04/09',
//     salary: '138,575',
//     extn: 8352,
//     email: 's.baldwin@datatables.net',
//   },
//   {
//     id: 48,
//     firstName: 'Zenaida',
//     lastName: 'Frank',
//     position: 'Software Engineer',
//     office: 'New York',
//     age: 63,
//     startDate: '2010/01/04',
//     salary: '125,250',
//     extn: 7439,
//     email: 'z.frank@datatables.net',
//   },
//   {
//     id: 49,
//     firstName: 'Zorita',
//     lastName: 'Serrano',
//     position: 'Software Engineer',
//     office: 'San Francisco',
//     age: 56,
//     startDate: '2012/06/01',
//     salary: '115,000',
//     extn: 4389,
//     email: 'z.serrano@datatables.net',
//   },
//   {
//     id: 50,
//     firstName: 'Jennifer',
//     lastName: 'Acosta',
//     position: 'Junior Javascript Developer',
//     office: 'Edinburgh',
//     age: 43,
//     startDate: '2013/02/01',
//     salary: '75,650',
//     extn: 3431,
//     email: 'j.acosta@datatables.net',
//   },
//   {
//     id: 51,
//     firstName: 'Cara',
//     lastName: 'Stevens',
//     position: 'Sales Assistant',
//     office: 'New York',
//     age: 46,
//     startDate: '2011/12/06',
//     salary: '145,600',
//     extn: 3990,
//     email: 'c.stevens@datatables.net',
//   },
//   {
//     id: 52,
//     firstName: 'Hermione',
//     lastName: 'Butler',
//     position: 'Regional Director',
//     office: 'London',
//     age: 47,
//     startDate: '2011/03/21',
//     salary: '356,250',
//     extn: 1016,
//     email: 'h.butler@datatables.net',
//   },
//   {
//     id: 53,
//     firstName: 'Lael',
//     lastName: 'Greer',
//     position: 'Systems Administrator',
//     office: 'London',
//     age: 21,
//     startDate: '2009/02/27',
//     salary: '103,500',
//     extn: 6733,
//     email: 'l.greer@datatables.net',
//   },
//   {
//     id: 54,
//     firstName: 'Jonas',
//     lastName: 'Alexander',
//     position: 'Developer',
//     office: 'San Francisco',
//     age: 30,
//     startDate: '2010/07/14',
//     salary: '86,500',
//     extn: 8196,
//     email: 'j.alexander@datatables.net',
//   },
//   {
//     id: 55,
//     firstName: 'Shad',
//     lastName: 'Decker',
//     position: 'Regional Director',
//     office: 'Edinburgh',
//     age: 51,
//     startDate: '2008/11/13',
//     salary: '183,000',
//     extn: 6373,
//     email: 's.decker@datatables.net',
//   },
//   {
//     id: 56,
//     firstName: 'Michael',
//     lastName: 'Bruce',
//     position: 'Javascript Developer',
//     office: 'Singapore',
//     age: 29,
//     startDate: '2011/06/27',
//     salary: '183,000',
//     extn: 5384,
//     email: 'm.bruce@datatables.net',
//   },
//   {
//     id: 57,
//     firstName: 'Donna',
//     lastName: 'Snider',
//     position: 'Customer Support',
//     office: 'New York',
//     age: 27,
//     startDate: '2011/01/25',
//     salary: '112,000',
//     extn: 4226,
//     email: 'd.snider@datatables.net',
//   },
// ]

export {
	records,
	expandablerecords,
	nestedrecords,
	employeeRecords,
	expandableRecords,
}
