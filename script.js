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
            image: "assets/games/20240529.jpg",
            scoreboardImage: "assets/games/20240529_gb.png",
            isWin: true
        },
        {
            date: "2024.05.30",
            opponent: "롯데 자이언츠",
            eaglesScore: 15,
            opponentScore: 0,
            teamLogo: "assets/logos/lotte.svg",
            image: "assets/games/20240530.jpg",
            scoreboardImage: "assets/games/20240530_gb.png",
            isWin: true
        },
        {
            date: "2024.05.31",
            opponent: "삼성 라이온스",
            eaglesScore: 6,
            opponentScore: 8,
            teamLogo: "assets/logos/samsung.svg",
            isWin: false
        }
        ,
        {
            date: "2024.06.01",
            opponent: "삼성 라이온스",
            eaglesScore: 4,
            opponentScore: 6,
            teamLogo: "assets/logos/samsung.svg",
            isWin: false
        }
        ,
        {
            date: "2024.06.02",
            opponent: "삼성 라이온스",
            eaglesScore: 0,
            opponentScore: 1,
            teamLogo: "assets/logos/samsung.svg",
            isWin: false
        },
        {
            date: "2024.06.04",
            opponent: "KT 위즈",
            eaglesScore: 8,
            opponentScore: 2,
            image: "assets/games/20240604.jpg",
            teamLogo: "assets/logos/kt-wiz.svg",
            scoreboardImage: "assets/games/20240604_gb.png",
            isWin: true
        },
        {
            date: "2024.06.05",
            opponent: "KT 위즈",
            eaglesScore: 12,
            opponentScore: 2,
            image: "assets/games/20240605.jpeg",
            teamLogo: "assets/logos/kt-wiz.svg",
            scoreboardImage: "assets/games/20240605_gb.png",
            isWin: true
        },
        {
            date: "2024.06.06",
            opponent: "KT 위즈",
            eaglesScore: 6,
            opponentScore: 0,
            image: "assets/games/20240606.webp",
            teamLogo: "assets/logos/kt-wiz.svg",
            scoreboardImage: "assets/games/20240606_gb.png",
            isWin: true
        },
        {
            date: "2024.06.07",
            opponent: "NC 다이노스",
            eaglesScore: 2,
            opponentScore: 6,
            teamLogo: "assets/logos/nc.svg",
            isWin: false
        },
        {
            date: "2024.06.08",
            opponent: "NC 다이노스",
            eaglesScore: 2,
            opponentScore: 4,
            teamLogo: "assets/logos/nc.svg",
            isWin: false
        },
        {
            date: "2024.06.09",
            opponent: "NC 다이노스",
            eaglesScore: 3,
            opponentScore: 3,
            teamLogo: "assets/logos/nc.svg",
            isDraw: true
        },
        {
            date: "2024.06.11",
            opponent: "두산 베어스",
            eaglesScore: 6,
            opponentScore: 1,
            image: "assets/games/20240611.jpg",
            teamLogo: "assets/logos/doosan.svg",
            scoreboardImage: "assets/games/20240611_gb.png",
            isWin: true
        },
        {
            date: "2024.06.12",
            opponent: "두산 베어스",
            eaglesScore: 4,
            opponentScore: 3,
            image: "assets/games/20240612.jpg",
            teamLogo: "assets/logos/doosan.svg",
            scoreboardImage: "assets/games/20240612_gb.png",
            isWin: true
        },
        {
            date: "2024.06.13",
            opponent: "두산 베어스",
            eaglesScore: 6,
            opponentScore: 9,
            teamLogo: "assets/logos/doosan.svg",
            isWin: false
        },
        {
            date: "2024.06.14",
            opponent: "SSG 랜더스",
            eaglesScore: 4,
            opponentScore: 11,
            teamLogo: "assets/logos/ssg.svg",
            isWin: false
        },
        {
            date: "2024.06.15",
            opponent: "SSG 랜더스",
            eaglesScore: 1,
            opponentScore: 9,
            teamLogo: "assets/logos/ssg.svg",
            isWin: false
        },
        {
            date: "2024.06.16",
            opponent: "SSG 랜더스",
            eaglesScore: 4,
            opponentScore: 1,
            image: "assets/games/20240616.jpg",
            teamLogo: "assets/logos/ssg.svg",
            scoreboardImage: "assets/games/20240616_gb.png",
            isWin: true
        },
        {
            date: "2024.06.18",
            opponent: "키움 히어로즈",
            eaglesScore: 3,
            opponentScore: 0,
            image: "assets/games/20240618.jpg",
            teamLogo: "assets/logos/ssg.svg",
            scoreboardImage: "assets/games/20240618_gb.jpg",
            isWin: true
        },
        {
            date: "2024.06.19",
            opponent: "키움 히어로즈",
            eaglesScore: 14,
            opponentScore: 11,
            image: "assets/games/20240619.jpg",
            teamLogo: "assets/logos/ssg.svg",
            scoreboardImage: "assets/games/20240619_gb.png",
            isWin: true
        },
        {
            date: "2024.06.20",
            opponent: "키움 히어로즈",
            eaglesScore: 0,
            opponentScore: 7,
            teamLogo: "assets/logos/ssg.svg",
            isWin: false
        },
        {
            date: "2024.06.21",
            opponent: "기아 타이거즈",
            eaglesScore: 3,
            opponentScore: 8,
            teamLogo: "assets/logos/kia.svg",
            isWin: false
        },
        {
            date: "2024.06.22",
            opponent: "기아 타이거즈",
            teamLogo: "assets/logos/kia.svg",
            isCanceled: true
        },
        {
            date: "2024.06.23",
            opponent: "기아 타이거즈",
            eaglesScore: 9,
            opponentScore: 8,
            image: "assets/games/20240623.jpg",
            teamLogo: "assets/logos/kia.svg",
            scoreboardImage: "assets/games/20240623_gb.png",
            isWin: true
        },
        {
            date: "2024.06.23",
            opponent: "기아 타이거즈",
            eaglesScore: 1,
            opponentScore: 4,
            teamLogo: "assets/logos/kia.svg",
            isWin: false
        },
        {
            date: "2024.06.25",
            opponent: "두산 베어스",
            eaglesScore: 5,
            opponentScore: 4,
            image: "assets/games/20240625.jpg",
            teamLogo: "assets/logos/doosan.svg",
            scoreboardImage: "assets/games/20240625_gb.png",
            isWin: true
        },
        {
            date: "2024.06.26",
            opponent: "두산 베어스",
            eaglesScore: 8,
            opponentScore: 15,
            teamLogo: "assets/logos/doosan.svg",
            isWin: false
        },
        {
            date: "2024.06.27",
            opponent: "두산 베어스",
            eaglesScore: 8,
            opponentScore: 3,
            image: "assets/games/20240627.jpg",
            teamLogo: "assets/logos/doosan.svg",
            scoreboardImage: "assets/games/20240627_gb.png",
            isWin: true
        },
        {
            date: "2024.06.28",
            opponent: "롯데 자이언츠",
            eaglesScore: 4,
            opponentScore: 6,
            teamLogo: "assets/logos/lotte.svg",
            isWin: false
        },
        {
            date: "2024.06.29",
            opponent: "롯데 자이언츠",
            teamLogo: "assets/logos/lotte.svg",
            isCanceled: true
        },
        {
            date: "2024.06.30",
            opponent: "롯데 자이언츠",
            teamLogo: "assets/logos/lotte.svg",
            isCanceled: true
        },
        {
            date: "2024.07.02",
            opponent: "KT 위즈",
            eaglesScore: 5,
            opponentScore: 6,
            teamLogo: "assets/logos/kt-wiz.svg",
            isWin: false
        },
        {
            date: "2024.07.03",
            opponent: "KT 위즈",
            eaglesScore: 2,
            opponentScore: 3,
            teamLogo: "assets/logos/kt-wiz.svg",
            isWin: false
        },
        {
            date: "2024.07.04",
            opponent: "KT 위즈",
            eaglesScore: 13,
            opponentScore: 5,
            image: "assets/games/20240704.jpg",
            teamLogo: "assets/logos/kt-wiz.svg",
            scoreboardImage: "assets/games/20240704_gb.png",
            isWin: true
        },
        {
            date: "2024.07.09",
            opponent: "키움 히어로즈",
            eaglesScore: 3,
            opponentScore: 5,
            teamLogo: "assets/logos/kiwoom.svg",
            isWin: false
        },
        {
            date: "2024.07.10",
            opponent: "키움 히어로즈",
            eaglesScore: 7,
            opponentScore: 0,
            image: "assets/games/20240710.jpg",
            teamLogo: "assets/logos/kiwoom.svg",
            scoreboardImage: "assets/games/20240710_gb.png",
            isWin: true
        },
        {
            date: "2024.07.11",
            opponent: "키움 히어로즈",
            eaglesScore: 4,
            opponentScore: 5,
            teamLogo: "assets/logos/kiwoom.svg",
            isWin: false
        },
        {
            date: "2024.07.12",
            opponent: "LG 트윈스",
            eaglesScore: 6,
            opponentScore: 0,
            image: "assets/games/20240712.jpg",
            teamLogo: "assets/logos/lg.svg",
            scoreboardImage: "assets/games/20240712_gb.png",
            isWin: true
        },
        {
            date: "2024.07.13",
            opponent: "LG 트윈스",
            eaglesScore: 3,
            opponentScore: 7,
            teamLogo: "assets/logos/lg.svg",
            isWin: false
        },
        {
            date: "2024.07.14",
            opponent: "LG 트윈스",
            eaglesScore: 4,
            opponentScore: 8,
            teamLogo: "assets/logos/lg.svg",
            isWin: false
        },
        {
            date: "2024.07.16",
            opponent: "NC 다이노스",
            teamLogo: "assets/logos/nc.svg",
            isCanceled: true
        },
        {
            date: "2024.07.17",
            opponent: "NC 다이노스",
            eaglesScore: 1,
            opponentScore: 5,
            teamLogo: "assets/logos/lg.svg",
            isWin: false
        },
        {
            date: "2024.07.18",
            opponent: "NC 다이노스",
            eaglesScore: 3,
            opponentScore: 4,
            teamLogo: "assets/logos/lg.svg",
            isWin: false
        },
        {
            date: "2024.07.19",
            opponent: "기아 타이거즈",
            eaglesScore: 3,
            opponentScore: 7,
            teamLogo: "assets/logos/kia.svg",
            isWin: false
        },
        {
            date: "2024.07.20",
            opponent: "기아 타이거즈",
            eaglesScore: 4,
            opponentScore: 8,
            teamLogo: "assets/logos/kia.svg",
            isWin: false
        },
        {
            date: "2024.07.21",
            opponent: "기아 타이거즈",
            eaglesScore: 7,
            opponentScore: 8,
            teamLogo: "assets/logos/kia.svg",
            isWin: false
        },
        {
            date: "2024.07.23",
            opponent: "삼성 라이온스",
            eaglesScore: 6,
            opponentScore: 5,
            image: "assets/games/20240723.jpeg",
            teamLogo: "assets/logos/samsung.svg",
            scoreboardImage: "assets/games/20240723_gb.png",
            isWin: true
        },
        {
            date: "2024.07.24",
            opponent: "삼성 라이온스",
            eaglesScore: 3,
            opponentScore: 2,
            image: "assets/games/20240724.jpg",
            teamLogo: "assets/logos/samsung.svg",
            scoreboardImage: "assets/games/20240724_gb.png",
            isWin: true
        },
        {
            date: "2024.07.25",
            opponent: "삼성 라이온스",
            teamLogo: "assets/logos/samsung.svg",
            isCanceled: true
        },
        {
            date: "2024.07.26",
            opponent: "LG 트윈스",
            teamLogo: "assets/logos/lg.svg",
            isCanceled: true
        },
        {
            date: "2024.07.27",
            opponent: "LG 트윈스",
            teamLogo: "assets/logos/lg.svg",
            isCanceled: true
        },
        {
            date: "2024.07.28",
            opponent: "LG 트윈스",
            eaglesScore: 9,
            opponentScore: 6,
            image: "assets/games/20240728.jpg",
            teamLogo: "assets/logos/lg.svg",
            scoreboardImage: "assets/games/20240728_gb.png",
            isWin: true
        },
        {
            date: "2024.07.30",
            opponent: "KT 위즈",
            eaglesScore: 6,
            opponentScore: 4,
            image: "assets/games/20240730.jpg",
            teamLogo: "assets/logos/kt-wiz.svg",
            scoreboardImage: "assets/games/20240730_gb.png",
            isWin: true
        },
        {
            date: "2024.07.31",
            opponent: "KT 위즈",
            eaglesScore: 18,
            opponentScore: 7,
            image: "assets/games/20240731.jpg",
            teamLogo: "assets/logos/kt-wiz.svg",
            scoreboardImage: "assets/games/20240731_gb.png",
            isWin: true
        },
        {
            date: "2024.08.01",
            opponent: "KT 위즈",
            eaglesScore: 14,
            opponentScore: 8,
            image: "assets/games/20240801.jpeg",
            teamLogo: "assets/logos/kt-wiz.svg",
            scoreboardImage: "assets/games/20240801_gb.png",
            isWin: true
        },
        {
            date: "2024.08.02",
            opponent: "기아 타이거즈",
            eaglesScore: 10,
            opponentScore: 3,
            image: "assets/games/20240802.jpg",
            teamLogo: "assets/logos/kia.svg",
            scoreboardImage: "assets/games/20240802_gb.png",
            isWin: true
        },
        {
            date: "2024.08.03",
            opponent: "기아 타이거즈",
            eaglesScore: 3,
            opponentScore: 10,
            teamLogo: "assets/logos/kia.svg",
            isWin: false
        },
        {
            date: "2024.08.04",
            opponent: "기아 타이거즈",
            teamLogo: "assets/logos/kia.svg",
            isCanceled: true
        },
        {
            date: "2024.08.06",
            opponent: "삼성 라이온스",
            eaglesScore: 8,
            opponentScore: 5,
            image: "assets/games/20240806.jpg",
            teamLogo: "assets/logos/samsung.svg",
            scoreboardImage: "assets/games/20240806_gb.png",
            isWin: true
        },
        {
            date: "2024.08.06",
            opponent: "삼성 라이온스",
            eaglesScore: 6,
            opponentScore: 10,
            teamLogo: "assets/logos/samsung.svg",
            isWin: false
        },
        {
            date: "2024.08.08",
            opponent: "삼성 라이온스",
            eaglesScore: 6,
            opponentScore: 4,
            image: "assets/games/20240808.jpg",
            teamLogo: "assets/logos/samsung.svg",
            scoreboardImage: "assets/games/20240808_gb.png",
            isWin: true
        },
        {
            date: "2024.08.09",
            opponent: "키움 히어로즈",
            eaglesScore: 7,
            opponentScore: 5,
            image: "assets/games/20240809.jpg",
            teamLogo: "assets/logos/kiwoom.svg",
            scoreboardImage: "assets/games/20240809_gb.png",
            isWin: true
        },
        {
            date: "2024.08.10",
            opponent: "키움 히어로즈",
            eaglesScore: 1,
            opponentScore: 3,
            teamLogo: "assets/logos/kiwoom.svg",
            isWin: false
        },
        {
            date: "2024.08.11",
            opponent: "키움 히어로즈",
            eaglesScore: 3,
            opponentScore: 7,
            teamLogo: "assets/logos/kiwoom.svg",
            isWin: false
        },
        {
            date: "2024.08.13",
            opponent: "LG 트윈스",
            eaglesScore: 2,
            opponentScore: 3,
            teamLogo: "assets/logos/lg.svg",
            isWin: false
        },
        {
            date: "2024.08.14",
            opponent: "LG 트윈스",
            eaglesScore: 9,
            opponentScore: 5,
            image: "assets/games/20240814.jpg",
            scoreboardImage: "assets/games/20240814_gb.png",
            teamLogo: "assets/logos/lg.svg",
            isWin: true
        },
        {
            date: "2024.08.15",
            opponent: "LG 트윈스",
            eaglesScore: 3,
            opponentScore: 17,
            teamLogo: "assets/logos/lg.svg",
            isWin: false
        },
        {
            date: "2024.08.16",
            opponent: "SSG 랜더스",
            eaglesScore: 2,
            opponentScore: 1,
            image: "assets/games/20240816.jpg",
            teamLogo: "assets/logos/ssg.svg",
            scoreboardImage: "assets/games/20240816_gb.png",
            isWin: true
        },
        {
            date: "2024.08.17",
            opponent: "SSG 랜더스",
            eaglesScore: 8,
            opponentScore: 5,
            image: "assets/games/20240817.jpg",
            teamLogo: "assets/logos/ssg.svg",
            scoreboardImage: "assets/games/20240817_gb.png",
            isWin: true
        },
        {
            date: "2024.08.18",
            opponent: "SSG 랜더스",
            eaglesScore: 7,
            opponentScore: 1,
            image: "assets/games/20240818.jpg",
            teamLogo: "assets/logos/ssg.svg",
            scoreboardImage: "assets/games/20240818_gb.png",
            isWin: true
        },
        {
            date: "2024.08.20",
            opponent: "NC 다이노스",
            eaglesScore: 3,
            opponentScore: 2,
            image: "assets/games/20240820.webp",
            teamLogo: "assets/logos/nc.svg",
            scoreboardImage: "assets/games/20240820_gb.png",
            isWin: true
        },
        {
            date: "2024.08.21",
            opponent: "NC 다이노스",
            eaglesScore: 2,
            opponentScore: 8,
            teamLogo: "assets/logos/nc.svg",
            isWin: false
        },
        {
            date: "2024.08.22",
            opponent: "NC 다이노스",
            teamLogo: "assets/logos/nc.svg",
            isCanceled: true
        },
        {
            date: "2024.08.23",
            opponent: "두산 베어스",
            eaglesScore: 7,
            opponentScore: 4,
            image: "assets/games/20240823.jpg",
            teamLogo: "assets/logos/doosan.svg",
            scoreboardImage: "assets/games/20240823_gb.png",
            isWin: true
        },
        {
            date: "2024.08.24",
            opponent: "두산 베어스",
            eaglesScore: 7,
            opponentScore: 6,
            image: "assets/games/20240824.jpeg",
            teamLogo: "assets/logos/doosan.svg",
            scoreboardImage: "assets/games/20240824_gb.png",
            isWin: true
        },
        {
            date: "2024.08.25",
            opponent: "두산 베어스",
            eaglesScore: 3,
            opponentScore: 1,
            image: "assets/games/20240825.jpg",
            teamLogo: "assets/logos/doosan.svg",
            scoreboardImage: "assets/games/20240825_gb.png",
            isWin: true
        },
        {
            date: "2024.08.27",
            opponent: "롯데 자이언츠",
            eaglesScore: 1,
            opponentScore: 3,
            teamLogo: "assets/logos/lotte.svg",
            isWin: false
        },
        {
            date: "2024.08.28",
            opponent: "롯데 자이언츠",
            eaglesScore: 7,
            opponentScore: 0,
            image: "assets/games/20240828.jpg",
            teamLogo: "assets/logos/lotte.svg",
            scoreboardImage: "assets/games/20240828_gb.png",
            isWin: true
        },
        {
            date: "2024.08.29",
            opponent: "롯데 자이언츠",
            eaglesScore: 11,
            opponentScore: 14,
            teamLogo: "assets/logos/lotte.svg",
            isWin: false
        },
        {
            date: "2024.08.31",
            opponent: "KT 위즈",
            eaglesScore: 2,
            opponentScore: 6,
            teamLogo: "assets/logos/kt-wiz.svg",
            isWin: false
        },
        {
            date: "2024.09.03",
            opponent: "두산 베어스",
            eaglesScore: 7,
            opponentScore: 1,
            image: "assets/games/20240903.png",
            teamLogo: "assets/logos/lotte.svg",
            scoreboardImage: "assets/games/20240903_gb.jpg",
            isWin: true
        },
        {
            date: "2024.09.04",
            opponent: "기아 타이거즈",
            eaglesScore: 5,
            opponentScore: 4,
            image: "assets/games/20240904.jpg",
            teamLogo: "assets/logos/kia.svg",
            scoreboardImage: "assets/games/20240904_gb.png",
            isWin: true
        },
        {
            date: "2024.09.05",
            opponent: "기아 타이거즈",
            eaglesScore: 3,
            opponentScore: 4,
            teamLogo: "assets/logos/kia.svg",
            isWin: false
        },
        {
            date: "2024.09.06",
            opponent: "LG 트윈스",
            eaglesScore: 3,
            opponentScore: 1,
            image: "assets/games/20240906.jpg",
            teamLogo: "assets/logos/lg.svg",
            scoreboardImage: "assets/games/20240906_gb.png",
            isWin: true
        },
        {
            date: "2024.09.07",
            opponent: "LG 트윈스",
            eaglesScore: 3,
            opponentScore: 9,
            teamLogo: "assets/logos/lg.svg",
            isWin: false
        },
        {
            date: "2024.09.08",
            opponent: "LG 트윈스",
            eaglesScore: 3,
            opponentScore: 14,
            teamLogo: "assets/logos/lg.svg",
            isWin: false
        },
        {
            date: "2024.09.10",
            opponent: "SSG 랜더스",
            eaglesScore: 0,
            opponentScore: 5,
            teamLogo: "assets/logos/ssg.svg",
            isWin: false
        },
        {
            date: "2024.09.11",
            opponent: "삼성 라이온스",
            eaglesScore: 1,
            opponentScore: 10,
            teamLogo: "assets/logos/samsung.svg",
            isWin: false
        },
        {
            date: "2024.09.12",
            opponent: "삼성 라이온스",
            eaglesScore: 1,
            opponentScore: 7,
            teamLogo: "assets/logos/samsung.svg",
            isWin: false
        },
        {
            date: "2024.09.13",
            opponent: "롯데 자이언츠",
            eaglesScore: 8,
            opponentScore: 4,
            image: "assets/games/20240913.jpg",
            teamLogo: "assets/logos/lotte.svg",
            scoreboardImage: "assets/games/20240913_gb.png",
            isWin: true
        },
        {
            date: "2024.09.14",
            opponent: "롯데 자이언츠",
            eaglesScore: 9,
            opponentScore: 12,
            teamLogo: "assets/logos/lotte.svg",
            isWin: false
        },
        {
            date: "2024.09.15",
            opponent: "롯데 자이언츠",
            eaglesScore: 9,
            opponentScore: 16,
            teamLogo: "assets/logos/lotte.svg",
            isWin: false
        },
        {
            date: "2024.09.17",
            opponent: "NC 다이노스",
            eaglesScore: 4,
            opponentScore: 1,
            image: "assets/games/20240917.jpg",
            teamLogo: "assets/logos/nc.svg",
            scoreboardImage: "assets/games/20240917_gb.png",
            isWin: true
        },
        {
            date: "2024.09.18",
            opponent: "NC 다이노스",
            eaglesScore: 2,
            opponentScore: 5,
            teamLogo: "assets/logos/nc.svg",
            isWin: false
        },
        {
            date: "2024.09.19",
            opponent: "NC 다이노스",
            eaglesScore: 7,
            opponentScore: 6,
            image: "assets/games/20240919.png",
            teamLogo: "assets/logos/nc.svg",
            scoreboardImage: "assets/games/20240919_gb.png",
            isWin: true
        },
        {
            date: "2024.09.21",
            opponent: "롯데 자이언츠",
            teamLogo: "assets/logos/lotte.svg",
            isCanceled: true
        },
        {
            date: "2024.09.22",
            opponent: "롯데 자이언츠",
            eaglesScore: 8,
            opponentScore: 4,
            image: "assets/games/20240922.jpeg",
            teamLogo: "assets/logos/lotte.svg",
            scoreboardImage: "assets/games/20240922_gb.jpg",
            isWin: true
        },
        {
            date: "2024.09.23",
            opponent: "롯데 자이언츠",
            eaglesScore: 2,
            opponentScore: 3,
            teamLogo: "assets/logos/lotte.svg",
            isWin: false
        },
        {
            date: "2024.09.24",
            opponent: "키움 히어로즈",
            eaglesScore: 4,
            opponentScore: 5,
            teamLogo: "assets/logos/kiwoom.svg",
            isWin: false
        },
        {
            date: "2024.09.25",
            opponent: "LG 트윈스",
            eaglesScore: 4,
            opponentScore: 2,
            image: "assets/games/20240925.jpg",
            teamLogo: "assets/logos/lg.svg",
            scoreboardImage: "assets/games/20240925_gb.png",
            isWin: true
        },
        {
            date: "2024.09.27",
            opponent: "기아 타이거즈",
            eaglesScore: 8,
            opponentScore: 0,
            image: "assets/games/20240927.jpg",
            teamLogo: "assets/logos/kia.svg",
            scoreboardImage: "assets/games/20240927_gb.png",
            isWin: true
        },
        {
            date: "2024.09.28",
            opponent: "SSG 랜더스",
            eaglesScore: 2,
            opponentScore: 6,
            teamLogo: "assets/logos/ssg.svg",
            isWin: false
        },
        {
            date: "2024.09.29",
            opponent: "NC 다이노스",
            eaglesScore: 2,
            opponentScore: 7,
            teamLogo: "assets/logos/nc.svg",
            isWin: false
        }
        
    ];

    const container = document.getElementById('games-container');
    
gamesData.forEach(game => {
    const card = document.createElement('div');
    
    if (game.isCanceled) {
        card.className = 'game-card canceled-card';
        card.innerHTML = `
            <div class="game-info">
                <div class="left-info">
                    <div class="game-date">${game.date}</div>
                    <div class="vs-team">
                        <span class="vs-text">VS.</span>
                        <img src="${game.teamLogo}" class="team-logo" alt="${game.opponent}">
                        <span class="team-name opponent-name">${game.opponent}</span>
                    </div>
                </div>
                <div class="score">경기취소</div>
            </div>
        `;
    } else {
        card.className = `game-card ${game.isWin ? 'win-card' : game.isDraw ? 'draw-card' : 'loss-card'}`;
        
        if (game.isWin && game.image) {
            card.style.backgroundImage = `url(${game.image})`;
            card.style.backgroundSize = 'cover';
            card.style.backgroundPosition = 'center';
            
            if (game.scoreboardImage) {
                card.style.setProperty('--scoreboard-image', `url(${game.scoreboardImage})`);
            }
        }
        
        // Remove the duplicate innerHTML assignment and keep only this one
        card.innerHTML = `
            <div class="game-info">
                <div class="left-info">
                    <div class="game-date">${game.date}</div>
                    <div class="vs-team">
                        <span class="vs-text">VS.</span>
                        <img src="${game.teamLogo}" class="team-logo" alt="${game.opponent}">
                        <span class="team-name opponent-name">${game.opponent}</span>
                    </div>
                </div>
                <div class="score">
                    ${game.eaglesScore}<span class="opponent">-${game.opponentScore}</span>
                </div>
                ${game.isWin && game.mvp ? `<div class="mvp-name">${game.mvp}</div>` : ''}
            </div>
        `;
    }
    
    container.appendChild(card);
    });    
});