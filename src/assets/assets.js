import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.png'
import roomImg2 from './roomImg2.png'
import roomImg3 from './roomImg3.png'
import roomImg4 from './roomImg4.png'
import regImage from './regImage.png'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";


export const assets = {
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
}

export const cities = [
    "Dubai",
    "Singapore",
    "New York",
    "London",
];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
    { _id: 1, title: "Summer Escape Package", description: "Enjoy a complimentary night and daily breakfast", priceOff: 25, expiryDate: "Aug 31", image: exclusiveOfferCardImg1 },
    { _id: 2, title: "Romantic Getaway", description: "Special couples package including spa treatment", priceOff: 20, expiryDate: "Sep 20", image: exclusiveOfferCardImg2 },
    { _id: 3, title: "Luxury Retreat", description: "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.", priceOff: 30, expiryDate: "Sep 25", image: exclusiveOfferCardImg3 },
]

// Testimonials Dummy Data
export const cardsData = [
    {
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
        name: 'Briar Martin',
        handle: '@neilstellar',
        date: 'April 20, 2025',
        text: 'The suite was beyond breathtaking. Every detail was perfectly curated — I felt like royalty from the moment I arrived.'
    },
    {
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
        name: 'Avery Johnson',
        handle: '@averywrites',
        date: 'May 10, 2025',
        text: 'SupeRoom redefined luxury for me. The staff anticipated my every need before I even had to ask. Truly world-class.'
    },
    {
        image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
        name: 'Jordan Lee',
        handle: '@jordantalks',
        date: 'June 5, 2025',
        text: 'Waking up to that view every morning was something I will never forget. The rooms are stunning and immaculately clean.'
    },
    {
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
        name: 'Riley Thompson',
        handle: '@rileyt',
        date: 'March 15, 2025',
        text: 'From the fine dining to the rooftop pool, every experience at SupeRoom was absolutely flawless. Will be back!'
    },
];

// Facility Icon
export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

// User Dummy Data
export const userDummyData = {
    "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "username": "Great Stack",
    "email": "user.greatstack@gmail.com",
    "image": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
    "role": "hotelOwner",
    "createdAt": "2025-03-25T09:29:16.367Z",
    "updatedAt": "2025-04-10T06:34:48.719Z",
    "__v": 1,
    "recentSearchedCities": [
        "New York"
    ]
}

// Hotel Dummy Data
export const hotelDummyData = {
    "_id": "67f76393197ac559e4089b72",
    "name": "Urbanza Suites",
    "address": "Main Road  123 Street , 23 Colony",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "New York",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0,
      "_id": "67f76393197ac559e4089b73",
    "name": "Urbanza Suites",
    "address": "Main Road  123 Street , 23 Colony",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "New York",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

// Rooms Dummy Data
// Rooms Dummy Data
export const roomsDummyData = [
    {
        "_id": "room_001",
        "hotel": { ...hotelDummyData, "name": "Urbanza Grand Suites", "address": "Main Road 123 Street, Manhattan, New York", "rating": 4.9 },
        "roomType": "Deluxe King Room",
        "pricePerNight": 399,
        "amenities": ["Room Service", "Mountain View", "Pool Access", "Free WiFi"],
        "images": [
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
        ],
        "isAvailable": true,
    },
    {
        "_id": "room_002",
        "hotel": { ...hotelDummyData, "name": "Serene Haven Resort", "address": "Marina Bay Sands Road 10, Singapore", "rating": 4.7 },
        "roomType": "Double Executive Bed",
        "pricePerNight": 299,
        "amenities": ["Room Service", "Pool Access", "Free Breakfast"],
        "images": [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
        ],
        "isAvailable": true,
    },
    {
        "_id": "room_003",
        "hotel": { ...hotelDummyData, "name": "Apex Luxury Tower", "address": "Downtown Boulevard 45, Dubai", "rating": 4.8 },
        "roomType": "Premium Double Bed",
        "pricePerNight": 249,
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
        ],
        "isAvailable": true,
    },
    {
        "_id": "room_004",
        "hotel": { ...hotelDummyData, "name": "Vista Breeze Hotel", "address": "Hyde Park Lane 77, London", "rating": 4.2 },
        "roomType": "Cozy Single Bed",
        "pricePerNight": 199,
        "amenities": ["Free WiFi", "Room Service"],
        "images": [
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
        ],
        "isAvailable": true,
    },
    {
        "_id": "room_005",
        "hotel": { ...hotelDummyData, "name": "The Ritz-Carlton Plaza", "address": "Fifth Avenue 767, New York", "rating": 5.0 },
        "roomType": "Presidential Suite",
        "pricePerNight": 599,
        "amenities": ["Room Service", "Mountain View", "Pool Access", "Free Breakfast", "Free WiFi"],
        "images": [
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
        ],
        "isAvailable": true,
    },
    {
        "_id": "room_006",
        "hotel": { ...hotelDummyData, "name": "Skyline View Apartments", "address": "Sheikh Zayed Road, Dubai", "rating": 4.4 },
        "roomType": "Studio Apartment",
        "pricePerNight": 149,
        "amenities": ["Free WiFi", "Pool Access"],
        "images": [
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=1200&q=80",
        ],
        "isAvailable": true,
    },
    {
        "_id": "room_007",
        "hotel": { ...hotelDummyData, "name": "Orchard Boutique Stay", "address": "Orchard Road 234, Singapore", "rating": 4.6 },
        "roomType": "Superior Queen Room",
        "pricePerNight": 279,
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?auto=format&fit=crop&w=1200&q=80",
        ],
        "isAvailable": true,
    },
    {
        "_id": "room_008",
        "hotel": { ...hotelDummyData, "name": "Thames Side Lodge", "address": "Queen's Walk, London", "rating": 4.3 },
        "roomType": "Standard Double Bed",
        "pricePerNight": 189,
        "amenities": ["Free WiFi", "Free Breakfast"],
        "images": [
            "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?auto=format&fit=crop&w=1200&q=80",
        ],
        "isAvailable": true,
    },
    {
        "_id": "room_009",
        "hotel": { ...hotelDummyData, "name": "The Royal Palace Hotel", "address": "Broadway 1500, New York", "rating": 4.9 },
        "roomType": "Luxury Honeymoon Suite",
        "pricePerNight": 450,
        "amenities": ["Room Service", "Mountain View", "Pool Access", "Free Breakfast"],
        "images": [
            "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1564540583246-934409427776?auto=format&fit=crop&w=1200&q=80",
        ],
        "isAvailable": true,
    },
    {
        "_id": "room_010",
        "hotel": { ...hotelDummyData, "name": "Palm Jumeirah Resort", "address": "The Palm Jumeirah, Dubai", "rating": 4.9 },
        "roomType": "Ocean View Villa",
        "pricePerNight": 650,
        "amenities": ["Room Service", "Mountain View", "Pool Access", "Free WiFi"],
        "images": [
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
        ],
        "isAvailable": true,
    },
    {
        "_id": "room_011",
        "hotel": { ...hotelDummyData, "name": "Lakeside Comfort Inn", "address": "Sentosa Cove 12, Singapore", "rating": 4.5 },
        "roomType": "Garden View Room",
        "pricePerNight": 220,
        "amenities": ["Free WiFi", "Free Breakfast", "Pool Access"],
        "images": [
            "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
        ],
        "isAvailable": true,
    },
   
];



// User Bookings Dummy Data
export const userBookingsDummyData = [
    {
        "_id": "67f76839994a731e97d3b8ce",
        "user": userDummyData,
        "room": roomsDummyData[1],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-30T00:00:00.000Z",
        "checkOutDate": "2025-05-01T00:00:00.000Z",
        "totalPrice": 299,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": true,
        "createdAt": "2025-04-10T06:42:01.529Z",
        "updatedAt": "2025-04-10T06:43:54.520Z",
        "__v": 0
    },
    {
        "_id": "67f76829994a731e97d3b8c3",
        "user": userDummyData,
        "room": roomsDummyData[0],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-27T00:00:00.000Z",
        "checkOutDate": "2025-04-28T00:00:00.000Z",
        "totalPrice": 399,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:45.873Z",
        "updatedAt": "2025-04-10T06:41:45.873Z",
        "__v": 0
    },
    {
        "_id": "67f76810994a731e97d3b8b4",
        "user": userDummyData,
        "room": roomsDummyData[3],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-11T00:00:00.000Z",
        "checkOutDate": "2025-04-12T00:00:00.000Z",
        "totalPrice": 199,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:20.501Z",
        "updatedAt": "2025-04-10T06:41:20.501Z",
        "__v": 0
    }
]

// Dashboard Dummy Data
export const dashboardDummyData = {
    "totalBookings": 3,
    "totalRevenue": 897,
    "bookings": userBookingsDummyData
}

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/