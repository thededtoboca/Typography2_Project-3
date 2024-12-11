document.addEventListener('DOMContentLoaded', () => {
    const gamesData = [
        {
            date: "2024.03.29",
            opponent: "KT 위즈",
            eaglesScore: 3,
            opponentScore: 2,
            image: "assets/games/20240329.svg",
            teamLogo: "assets/logos/kt-wiz.svg",
            scoreboardImage: "assets/games/20240329_gb.png",
            isWin: true
        },
        {
            date: "2024.03.30",
            opponent: "KT 위즈",
            eaglesScore: 8,
            opponentScore: 5,
            image: "assets/games/20240330.jpg",
            teamLogo: "assets/logos/kt-wiz.svg",
            scoreboardImage: "assets/games/20240330_gb.png",
            isWin: true
        },
        {
            date: "2024.03.31",
            opponent: "KT 위즈",
            eaglesScore: 14,
            opponentScore: 3,
            image: "assets/games/20240331.jpg",
            teamLogo: "assets/logos/kt-wiz.svg",
            scoreboardImage: "assets/games/20240331_gb.png",
            isWin: true
        },
        {
            date: "2024.04.02",
            opponent: "롯데 자이언츠",
            eaglesScore: 0,
            opponentScore: 1,
            teamLogo: "assets/logos/lotte.svg",
            isWin: false
        },
        {
            date: "2024.04.03",
            opponent: "롯데 자이언츠",
            teamLogo: "assets/logos/lotte.svg",
            isCanceled: true
        },
        {
            date: "2024.04.04",
            opponent: "롯데 자이언츠",
            eaglesScore: 6,
            opponentScore: 5,
            image: "assets/games/20240404.jpg",
            teamLogo: "assets/logos/lotte.svg",
            scoreboardImage: "assets/games/20240404_gb.png",
            isWin: true
        },
        {
            date: "2024.04.05",
            opponent: "키움 히어로즈",
            eaglesScore: 7,
            opponentScore: 11,
            teamLogo: "assets/logos/kiwoom.svg",
            isWin: false
        }
        ,
        {
            date: "2024.04.06",
            opponent: "키움 히어로즈",
            eaglesScore: 6,
            opponentScore: 7,
            teamLogo: "assets/logos/kiwoom.svg",
            isWin: false
        },
        {
            date: "2024.04.07",
            opponent: "키움 히어로즈",
            eaglesScore: 3,
            opponentScore: 4,
            teamLogo: "assets/logos/kiwoom.svg",
            isWin: false
        },
        {
            date: "2024.04.09",
            opponent: "두산 베어스",
            eaglesScore: 3,
            opponentScore: 5,
            teamLogo: "assets/logos/doosan.svg",
            isWin: false
        },
        {
            date: "2024.04.10",
            opponent: "두산 베어스",
            eaglesScore: 4,
            opponentScore: 7,
            teamLogo: "assets/logos/doosan.svg",
            isWin: false
        },
        {
            date: "2024.04.11",
            opponent: "두산 베어스",
            eaglesScore: 3,
            opponentScore: 0,
            teamLogo: "assets/logos/doosan.svg",
            image: "assets/games/20240411.webp",
            scoreboardImage: "assets/games/20240411_gb.png",
            isWin: true
        },
        {
            date: "2024.04.12",
            opponent: "기아 타이거즈",
            eaglesScore: 4,
            opponentScore: 8,
            teamLogo: "assets/logos/kia.svg",
            isWin: false
        }
        ,
        {
            date: "2024.04.13",
            opponent: "기아 타이거즈",
            eaglesScore: 9,
            opponentScore: 11,
            teamLogo: "assets/logos/kia.svg",
            isWin: false
        },
        {
            date: "2024.04.14",
            opponent: "기아 타이거즈",
            eaglesScore: 2,
            opponentScore: 5,
            teamLogo: "assets/logos/kia.svg",
            isWin: false
        },
        {
            date: "2024.04.16",
            opponent: "NC 다이노스",
            eaglesScore: 7,
            opponentScore: 4,
            teamLogo: "assets/logos/nc.svg",
            image: "assets/games/20240416.webp",
            scoreboardImage: "assets/games/20240416_gb.png",
            isWin: true
        },
        {
            date: "2024.04.17",
            opponent: "NC 다이노스",
            eaglesScore: 3,
            opponentScore: 4,
            teamLogo: "assets/logos/nc.svg",
            isWin: false
        },
        {
            date: "2024.04.18",
            opponent: "NC 다이노스",
            teamLogo: "assets/logos/nc.svg",
            isCanceled: true
        },
        {
            date: "2024.04.19",
            opponent: "삼성 라이온스",
            eaglesScore: 6,
            opponentScore: 1,
            teamLogo: "assets/logos/samsung.svg",
            image: "assets/games/20240419.jpg",
            scoreboardImage: "assets/games/20240419_gb.png",
            isWin: true
        },
        {
            date: "2024.04.20",
            opponent: "삼성 라이온스",
            eaglesScore: 0,
            opponentScore: 1,
            teamLogo: "assets/logos/samsung.svg",
            isWin: false
        },
        {
            date: "2024.04.21",
            opponent: "삼성 라이온스",
            eaglesScore: 3,
            opponentScore: 5,
            teamLogo: "assets/logos/samsung.svg",
            isWin: false
        },
        {
            date: "2024.04.23",
            opponent: "KT 위즈",
            eaglesScore: 6,
            opponentScore: 9,
            teamLogo: "assets/logos/kt-wiz.svg",
            isWin: false
        },
        {
            date: "2024.04.24",
            opponent: "KT 위즈",
            eaglesScore: 1,
            opponentScore: 7,
            teamLogo: "assets/logos/kt-wiz.svg",
            isWin: false
        },
        {
            date: "2024.04.24",
            opponent: "KT 위즈",
            eaglesScore: 0,
            opponentScore: 9,
            teamLogo: "assets/logos/kt-wiz.svg",
            isWin: false
        },
        {
            date: "2024.04.26",
            opponent: "두산 베어스",
            eaglesScore: 5,
            opponentScore: 10,
            teamLogo: "assets/logos/doosan.svg",
            isWin: false
        },
        {
            date: "2024.04.27",
            opponent: "두산 베어스",
            eaglesScore: 10,
            opponentScore: 5,
            teamLogo: "assets/logos/doosan.svg",
            image: "assets/games/20240427.jpg",
            scoreboardImage: "assets/games/20240427_gb.jpg",
            isWin: true
        },
        {
            date: "2024.04.28",
            opponent: "두산 베어스",
            eaglesScore: 8,
            opponentScore: 17,
            teamLogo: "assets/logos/doosan.svg",
            isWin: false
        },
        {
            date: "2024.04.30",
            opponent: "SSG 랜더스",
            eaglesScore: 8,
            opponentScore: 2,
            teamLogo: "assets/logos/ssg.svg",
            image: "assets/games/20240430.jpg",
            scoreboardImage: "assets/games/20240430_gb.png",
            isWin: true
        },
        {
            date: "2024.05.01",
            opponent: "SSG 랜더스",
            eaglesScore: 8,
            opponentScore: 7,
            teamLogo: "assets/logos/ssg.svg",
            isWin: false
        },
        {
            date: "2024.05.02",
            opponent: "SSG 랜더스",
            eaglesScore: 3,
            opponentScore: 4,
            teamLogo: "assets/logos/ssg.svg",
            isWin: false
        },
        {
            date: "2024.05.03",
            opponent: "기아 타이거즈",
            eaglesScore: 4,
            opponentScore: 2,
            teamLogo: "assets/logos/kia.svg",
            image: "assets/games/20240503.png",
            scoreboardImage: "assets/games/20240503_gb.png",
            isWin: true
        },
        {
            date: "2024.05.04",
            opponent: "기아 타이거즈",
            eaglesScore: 2,
            opponentScore: 10,
            teamLogo: "assets/logos/kia.svg",
            isWin: false
        },
        {
            date: "2024.05.05",
            opponent: "기아 타이거즈",
            teamLogo: "assets/logos/kia.svg",
            isCanceled: true
        },
        {
            date: "2024.05.07",
            opponent: "롯데 자이언츠",
            teamLogo: "assets/logos/lotte.svg",
            isCanceled: true
        },
        {
            date: "2024.05.08",
            opponent: "롯데 자이언츠",
            eaglesScore: 1,
            opponentScore: 6,
            teamLogo: "assets/logos/lotte.svg",
            isWin: false
        },
        {
            date: "2024.05.09",
            opponent: "롯데 자이언츠",
            eaglesScore: 5,
            opponentScore: 18,
            teamLogo: "assets/logos/lotte.svg",
            isWin: false
        },
        {
            date: "2024.05.10",
            opponent: "키움 히어로즈",
            eaglesScore: 5,
            opponentScore: 4,
            teamLogo: "assets/logos/kiwoom.svg",
            image: "assets/games/20240510.jpg",
            scoreboardImage: "assets/games/20240510_gb.png",
            isWin: true
        },
        {
            date: "2024.05.11",
            opponent: "키움 히어로즈",
            eaglesScore: 1,
            opponentScore: 7,
            teamLogo: "assets/logos/kiwoom.svg",
            isWin: false
        },
        {
            date: "2024.05.12",
            opponent: "키움 히어로즈",
            eaglesScore: 8,
            opponentScore: 3,
            teamLogo: "assets/logos/kiwoom.svg",
            image: "assets/games/20240512.jpg",
            scoreboardImage: "assets/games/20240512_gb.png",
            isWin: true
        },
        {
            date: "2024.05.14",
            opponent: "NC 다이노스",
            eaglesScore: 5,
            opponentScore: 5,
            teamLogo: "assets/logos/nc.svg",
            isDraw: true
        },
        {
            date: "2024.05.15",
            opponent: "NC 다이노스",
            eaglesScore: 1,
            opponentScore: 16,
            teamLogo: "assets/logos/nc.svg",
            isWin: false
        },
        {
            date: "2024.05.16",
            opponent: "NC 다이노스",
            eaglesScore: 3,
            opponentScore: 4,
            teamLogo: "assets/logos/nc.svg",
            isWin: false
        },
        {
            date: "2024.05.17",
            opponent: "삼성 라이온스",
            eaglesScore: 5,
            opponentScore: 7,
            teamLogo: "assets/logos/samsung.svg",
            isWin: false
        },
        {
            date: "2024.05.18",
            opponent: "삼성 라이온스",
            eaglesScore: 8,
            opponentScore: 9,
            teamLogo: "assets/logos/samsung.svg",
            isWin: false
        },
        {
            date: "2024.05.19",
            opponent: "삼성 라이온스",
            eaglesScore: 12,
            opponentScore: 2,
            teamLogo: "assets/logos/samsung.svg",
            image: "assets/games/20240519.jpg",
            scoreboardImage: "assets/games/20240519_gb.png",
            isWin: true
        },
        {
            date: "2024.05.21",
            opponent: "LG 트윈스",
            eaglesScore: 8,
            opponentScore: 4,
            teamLogo: "assets/logos/lg.svg",
            image: "assets/games/20240520.jpg",
            scoreboardImage: "assets/games/20240520_gb.png",
            isWin: true
        },
        {
            date: "2024.05.22",
            opponent: "LG 트윈스",
            eaglesScore: 7,
            opponentScore: 5,
            teamLogo: "assets/logos/lg.svg",
            image: "assets/games/20240522.jpg",
            scoreboardImage: "assets/games/20240522_gb.png",
            isWin: true
        },
        {
            date: "2024.05.23",
            opponent: "LG 트윈스",
            teamLogo: "assets/logos/lg.svg",
            eaglesScore: 4,
            opponentScore: 8,
            isWin: false
        },
        {
            date: "2024.05.24",
            opponent: "SSG 랜더스",
            eaglesScore: 7,
            opponentScore: 5,
            teamLogo: "assets/logos/ssg.svg",
            image: "assets/games/20240524.jpg",
            scoreboardImage: "assets/games/20240524_gb.png",
            isWin: true
        },
        {
            date: "2024.05.25",
            opponent: "SSG 랜더스",
            eaglesScore: 4,
            opponentScore: 2,
            teamLogo: "assets/logos/ssg.svg",
            image: "assets/games/20240525.jpg",
            scoreboardImage: "assets/games/20240525_gb.png",
            isWin: true
        },
        {
            date: "2024.05.26",
            opponent: "SSG 랜더스",
            teamLogo: "assets/logos/ssg.svg",
            isCanceled: true
        },
        {
            date: "2024.05.28",
            opponent: "롯데 자이언츠",
            eaglesScore: 12,
            opponentScore: 3,
            teamLogo: "assets/logos/lotte.svg",
            image: "assets/games/20240528.jpeg",
            scoreboardImage: "assets/games/20240528_gb.png",
            isWin: true
        },
        {
            date: "2024.05.29",
            opponent: "롯데 자이언츠",
            eaglesScore: 3,
            opponentScore: 0,
            teamLogo: "assets/logos/lotte.svg",
   