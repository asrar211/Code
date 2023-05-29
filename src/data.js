import {AiFillProject} from 'react-icons/ai'
import {SiOpenaigym} from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/About'
    },
    {
        name: "Works",
        path: '/Gallery'
    },
    {
        name: "Plans",
        path: '/Plans'
    },
    {
        name: "Our Team",
         path: '/Trainers'
    },
    {
        name: "Contact",
        path: '/Contact'
    }
]







export const program = [
    {
        id: 1,
        icon: <AiFillProject/>,
        title: "Responsive Website",
        info: "Website Made out of Scratch using Known Technologies.",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <AiFillProject/>,
        title: "React App",
        info: "A Complete Website Using ReactJs.",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <AiFillProject/>,
        title: "Restaurant Website",
        info: "A Responsive Restaurant Website Using Latest Technologies.",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <AiFillProject/>,
        title: "AI Project",
        info: "An AI Project using Pyhton  ",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Web Development",
        desc: `Using Javascript/ReactJs/Angular/
        NodeJs/Python/Django.`
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "App Development",
        desc: `Android Development/IOS Development using latest
        Technologies`
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Software Development",
        desc: `We are Providing Support to the Software as well.`
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Cyber Security",
        desc: `Linux/EthicalHacking/Blockchain/Cloud Encryption and much more.`
    }
]









export const faqs = [
    {
        id: 1,
        question: "Do you provide services with ReactJs?",
        answer: "Yes! We are providing services using ReactJs apart from that we are providing services with some latest Technologies like Angular and Vue.js "
    },
    {
        id: 2,
        question: "How Much do you cost for Responsive Websites?",
        answer: "It Actually depends on what services you are opting like which technology you want us to use and more like that."
    },
    {
        id: 3,
        question: "Are You Providing Courses in this Field?",
        answer: "Sorry! No We are not Providing courses but in future we look forward for it."
    },
    {
        id: 4,
        question: "How to start with Web Development?",
        answer: "You should first choose on what field you are interested in Front-End or Back-End or Both then accordingly you need to start."
    },
    // {
    //     id: 5,
    //     question: "Should I do strength training, cardio or both?",
    //     answer: "Maiores fuga, cum praesentium esse laudantium! Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui."
    // },
    // {
    //     id: 6,
    //     question: "Should I lift weights for strength training?",
    //     answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    // }
]








export const testimonials = [
    {
        id: 1,
        name: "Mohsin Hassan",
        quote: "Really Good to work with you guys.",
        job: "Student",
        avatar: require("./images/avatar.jpg")
    },
    {
        id: 2,
        name: "Imtiyaz Hussain Beigh",
        quote: "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Software Engineer",
        avatar: require("./images/avatar.jpg")
    },
    {
        id: 3,
        name: "Mubashir Hussain",
        quote: "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Student",
        avatar: require("./images/avatar.jpg")
    },
    {
        id: 4,
        name: "Danish Abbass",
        quote: "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Business Manager",
        avatar: require("./images/avatar.jpg")
    },
    {
        id: 5,
        name: "Moin Khan",
        quote: "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Student",
        avatar: require("./images/avatar.jpg")
    }
]
 





export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: false},
            {feature: 'Fifth Feature', available: false},
            {feature: 'Fifth Feature Plus', available: false},
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: false},
            {feature: 'Fifth Feature Plus', available: false},
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
        ]
    },
    {
        id: 4,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
        ]
    }
]









const Trainer1 = require('./images/asrar.jpg')
const Trainer2 = require('./images/imtiyaz.jpg')
const Trainer3 = require('./images/mohsin.jpg')



export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'Mohammad Asrar',
        job: 'Software Engineer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Imtiyaz Hussain',
        job: 'Developer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Mohsin Hassan',
        job: 'Developer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]
