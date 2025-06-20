import profileImg from '../assets/images/profile-image.png';
import linkedImgIcon from '../assets/images/logo-linkeding.png';
import githubImgIcon from '../assets/images/logo-github.svg';
import figmaImgIcon from '../assets/images/logo-figma.png';
import jsImgIcon from '../assets/images/logo-js.png';
import nodeImgIcon from '../assets/images/logo-node.png';
import reactImgIcon from '../assets/images/logo-react.png';
import reduxImgIcon from '../assets/images/logo-redux.png';
import vsImgIcon from '../assets/images/logo-vs.png';
import projectImg1 from '../assets/images/proje1.png';
import projectImg2 from '../assets/images/proje2.png';

export const data = {
    en: {
        heroSection: {
            greeting:"Hi!",
            intro:"I'm Almila. I'm a full-stack developer. I can craft solid and scalable frontend products. Let's meet!",
            introHighlight:"I'm Almila.",
            profileImage:profileImg,
            socials: [
                {
                    logo:linkedImgIcon,
                    alt_text: "linkedin",
                    link:"http://example.com",
                },
                {
                    logo:githubImgIcon,
                    alt_text: "github",
                    link:"http://github.com",
                }
            ],

            ctaHTML:
            "Currently <strong>Freelancing</strong> for <strong>UX, UI, & Web Design</strong> Project . Invite me to join your team -> <strong>pratamaiosi@gmail.com</strong>"

        },
        skillsSection:{
            title:"Skills",
            skills:[
                {
                    name:"JAVASCRIPT",
                    icon:jsImgIcon,
                },
                {
                    name:"REACT",
                    icon:reactImgIcon,
                },
                {
                    name:"REDUX",
                    icon:reduxImgIcon,
                },
                {
                    name:"NODE",
                    icon:nodeImgIcon,
                },
                {
                    name:"VS CODE",
                    icon:vsImgIcon,
                },
                {
                    name:"FIGMA",
                    icon:figmaImgIcon,
                }
            ],

        },
        aboutSection:{
            title: "Profile",
            titleBasic:"Basic Information",
            info: [
                { label: "Date of Birth", value: "24.03.1996" },
                { label: "City of Residence", value: "Ankara" },
                { label: "Educational Status", value: "Hacettepe Ünv.  Biyoloji Lisans, 2016" },
                { label: "Preferred Role", value: "Frontend, UI" }
            ],
            titleAbout:"About me",
            titleAboutHightlight:"About me",
            content:[
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
                "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
            ]
        },

        projects :[
            {
                title: "Random Jokes",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
                tags: ["react", "vercel", "axios", "router"],
                github: "https://github.com/example1",
                live: "https://example.com/app1",
                image: projectImg1,
                bg: "bg-[#DDEEFE] dark:bg-[#2D3235]" // Açık mavi
            },
            {
                title: "Are you bored?",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
                tags: ["react", "redux", "axios", "router", "vercel"],
                github: "https://github.com/example2",
                live: "https://example.com/app2",
                image: projectImg2,
                bg: "bg-[#D9F6F1] dark:bg-[#495351]" // Açık yeşil
            },
            {
                title: "Random Jokes",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
                tags: ["react", "vercel", "axios", "router"],
                github: "https://github.com/example1",
                live: "https://example.com/app1",
                image: projectImg1,
                bg: "bg-[#DDEEFE] dark:bg-[#2D3235]" // Açık mavi
            },
            {
                title: "Are you bored?",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
                tags: ["react", "redux", "axios", "router", "vercel"],
                github: "https://github.com/example2",
                live: "https://example.com/app2",
                image: projectImg2,
                bg: "bg-[#D9F6F1] dark:bg-[#495351]" // Açık yeşil
            }
        ],
        footerSection: {
            title: "Let’s work together on your next product.",
            titleHighlight: "work together",
            links: [
                { label: "Github", url: "https://github.com/yourusername", color: "text-[#1769FF] dark:text-[#82BBFF]" },
                { label: "Personal Blog", url: "https://yourblog.com", color: "text-[#0A0A14] dark:text-[#FFFFFF]" },
                { label: "Linkedin", url: "https://linkedin.com/in/yourprofile", color: "text-[#0077B5] dark:text-[#419CCB]" },
                { label: "Email", url: "mailto:pratamaiosi@gmail.com", color: "text-[#AF0C48] dark:text-[#EA2678]" }
            ]
        },
    },
    tr: {
        heroSection: {
            greeting:"Merhaba !",
            intro:"Ben Almila. Bir full-stack geliştiriciyim. Güçlü ve ölçeklenebilir frontend ürünleri hazırlayabilirim. Hadi tanışalım!",
            introHighlight:"Ben Almila.",
            profileImage:profileImg,
            socials: [
                {
                    logo:linkedImgIcon,
                    alt_text: "linkedin",
                    link:"http://example.com",
                },
                {
                    logo:githubImgIcon,
                    alt_text: "github",
                    link:"http://github.com",
                }
            ],

            ctaHTML:
            "Şu anda <strong>UX, UI ve Web Tasarımı</strong> projeleri için serbest çalışıyorum. Ekibinize katılmam için davet edebilir misiniz? -> <strong>pratamaiosi@gmail.com</strong>"

        },
        skillsSection:{
            title:"Yetenekler",
            skills:[
                {
                    name:"JAVASCRIPT",
                    icon:jsImgIcon,
                },
                {
                    name:"REACT",
                    icon:reactImgIcon,
                },
                {
                    name:"REDUX",
                    icon:reduxImgIcon,
                },
                {
                    name:"NODE",
                    icon:nodeImgIcon,
                },
                {
                    name:"VS CODE",
                    icon:vsImgIcon,
                },
                {
                    name:"FIGMA",
                    icon:figmaImgIcon,
                }
            ],

        },
        aboutSection:{
            title: "Profile",
            titleBasic:"Temel Bilgiler",
            info: [
                { label: "Doğum Tarihi", value: "24.03.1996" },
                { label: "İkamet Şehri", value: "Ankara" },
                { label: "Eğitim Durumu", value: "Hacettepe Ünv.  Biyoloji Lisans, 2016" },
                { label: "Tercih Ettiği Rol", value: "Frontend, UI" }
            ],
            titleAbout:"Hakkımda",
            titleAboutHightlight:"Hakkımda",
            content:[
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
                "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
            ]
        },
        projects :[
            {
                title: "Rastgele Fıkralar",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
                tags: ["react", "vercel", "axios", "router"],
                github: "https://github.com/example1",
                live: "https://example.com/app1",
                image: projectImg1,
                bg: "bg-[#DDEEFE] dark:bg-[#2D3235]"
            },
            {
                title: "Sıkıldın mı?",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
                tags: ["react", "redux", "axios", "router", "vercel"],
                github: "https://github.com/example2",
                live: "https://example.com/app2",
                image: projectImg2,
                bg: "bg-[#D9F6F1] dark:bg-[#495351]"
            },
            {
                title: "Rastgele Fıkralar",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
                tags: ["react", "vercel", "axios", "router"],
                github: "https://github.com/example1",
                live: "https://example.com/app1",
                image: projectImg1,
                bg: "bg-[#DDEEFE] dark:bg-[#2D3235]"
            },
            {
                title: "Sıkıldın mı?",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
                tags: ["react", "redux", "axios", "router", "vercel"],
                github: "https://github.com/example2",
                live: "https://example.com/app2",
                image: projectImg2,
                bg: "bg-[#D9F6F1] dark:bg-[#495351]"
            }
        ],
        footerSection: {
            title: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
            titleHighlight: "birlikte çalışalım.",
            links: [
                { label: "Github", url: "https://github.com/yourusername", color: "text-[#2867B2]" },
                { label: "Personal Blog", url: "https://yourblog.com", color: "text-black" },
                { label: "Linkedin", url: "https://linkedin.com/in/yourprofile", color: "text-[#0A66C2]" },
                { label: "Email", url: "mailto:pratamaiosi@gmail.com", color: "text-[#B50D3A]" }
            ]
        },

    }
}