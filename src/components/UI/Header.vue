<script>
export default {
    name: "Header",
    props: {
        width: { type: String },
        border: { type: String, required: true },
        background: { type: String, required: true },
        color: { type: String, required: true },
    },
}
</script>

<template>
    <header>
        <img class="nav" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/1024px-Home-icon.svg.png" alt="">
        <div class="header  ">
            <div class="header-logo">
                <a href="/main">
                    <svg width="72" height="31" viewBox="0 0 72 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 8.8315H7.10074V25.0331H10.1531C17.0021 25.0331 20.4253 21.7054 20.4227 15.0499C20.4227 8.53044 17.2445 5.27189 10.8881 5.27428H9.60581V0L10.5226 0C15.99 0 20.2379 1.31201 23.2662 3.93603C26.2944 6.56004 27.8072 10.2134 27.8045 14.8961C27.8045 19.8817 26.2369 23.6985 23.1015 26.3463C19.9661 28.9942 15.4278 30.3265 9.48639 30.3432H0V8.8315Z"
                            fill="#00C65E" />
                        <path d="M7.10475 0H0V6.32985H7.10475V0Z" fill="#00C65E" />
                        <path
                            d="M34.5967 12.3477H32.1621V21.1719H34.5967V12.3477ZM34.7725 9.83398C34.7725 9.42969 34.6406 9.0957 34.3857 8.84961C34.1221 8.60352 33.7705 8.48047 33.3311 8.48047C32.9268 8.48047 32.6016 8.60352 32.3555 8.84961C32.1094 9.0957 31.9863 9.42969 31.9863 9.83398C31.9863 10.2383 32.1006 10.5635 32.3467 10.8096C32.5928 11.0557 32.918 11.1787 33.3311 11.1787C33.7705 11.1787 34.1221 11.0557 34.3857 10.8096C34.6406 10.5635 34.7725 10.2383 34.7725 9.83398ZM39.5537 8.56836H37.1191V21.1719H39.5537V8.56836ZM44.0537 21.708C43.7637 22.376 43.2539 22.7012 42.5244 22.7012C42.1641 22.7012 41.8652 22.6484 41.6279 22.5254V24.6787L41.8037 24.7402C41.9268 24.793 42.1113 24.8369 42.375 24.8809C42.6299 24.9336 42.8936 24.9512 43.1572 24.9512C44.6338 24.9512 45.7676 23.8701 46.5762 21.708L50.083 12.3477H47.5693L45.4951 18.2012L43.4297 12.3477H40.9072L44.3262 21.084L44.0537 21.708ZM49.9775 20.0029C49.9775 20.3633 50.1182 20.6797 50.3994 20.9434C50.6807 21.2158 51.0146 21.3477 51.4189 21.3477C51.8145 21.3477 52.1572 21.2158 52.4385 20.9434C52.7197 20.6797 52.8604 20.3633 52.8604 20.0029C52.8604 19.6426 52.7197 19.3262 52.4385 19.0537C52.1572 18.79 51.8145 18.6494 51.4189 18.6494C51.0146 18.6494 50.6807 18.79 50.3994 19.0537C50.1182 19.3262 49.9775 19.6426 49.9775 20.0029ZM60.0586 12.2598H59.6982C59.2148 12.2598 58.7578 12.374 58.3184 12.585C57.8789 12.8047 57.5977 12.9805 57.4658 13.1123C57.3428 13.2441 57.2373 13.3496 57.167 13.4287V12.3477H54.7412V21.1719H57.167V16.9443C57.167 16.1885 57.3604 15.6084 57.7295 15.2041C58.0986 14.7998 58.6084 14.5977 59.2412 14.5977C59.6016 14.6064 59.874 14.6416 60.0498 14.7031L60.0586 12.2598ZM67.3535 21.1719H69.7793V12.3477H67.3535V17.0322C67.3535 17.7002 67.1865 18.21 66.8613 18.5615C66.5361 18.9219 66.0967 19.0977 65.5518 19.0977C65.0596 19.0977 64.6465 18.9395 64.3213 18.6143C63.9961 18.2979 63.8379 17.8848 63.8379 17.3926V12.3477H61.4121V17.6299C61.4121 18.7549 61.7285 19.6602 62.3613 20.3369C62.9941 21.0137 63.8203 21.3477 64.8311 21.3477C65.3057 21.3477 65.7627 21.251 66.2021 21.0576C66.6416 20.8643 66.9229 20.7061 67.0547 20.583C67.1777 20.46 67.2832 20.3633 67.3535 20.2754V21.1719Z"
                            fill="#00C65E" />
                    </svg>
                </a>
            </div>
            <ul class="header-links">
                <li><a class="header-links__link" href="/agents">Агенты</a></li>
                <li><a class="header-links__link" href="/maps">Карты</a></li>
                <li><a class="header-links__link" href="/bundles">Коллекции</a></li>
                <li><a class="header-links__link" href="/forum">Форум</a></li>
            </ul>
            <div class="header-profile">
                <a href="/profile"><svg xmlns="http://www.w3.org/2000/svg" width="72" height="30" viewBox="0 0 12 12"
                        fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M1 12C1 12 0 12 0 11C0 10 1 7 6 7C11 7 12 10 12 11C12 12 11 12 11 12H1ZM6 6C6.79565 6 7.55871 5.68393 8.12132 5.12132C8.68393 4.55871 9 3.79565 9 3C9 2.20435 8.68393 1.44129 8.12132 0.87868C7.55871 0.316071 6.79565 0 6 0C5.20435 0 4.44129 0.316071 3.87868 0.87868C3.31607 1.44129 3 2.20435 3 3C3 3.79565 3.31607 4.55871 3.87868 5.12132C4.44129 5.68393 5.20435 6 6 6Z"
                            fill="#00C65E" />
                    </svg></a>
            </div>
        </div>
    </header>
</template>

<style>
.nav{
    visibility: hidden;
    width: 30px;
}
header {
    background-color: rgb(43, 43, 43);
    color: white;
    font-size: 30px;
    display: flex;
    border-bottom: 3px solid #DADCDC;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 14px;
}

.header {
    display: flex;
    width: 1169px;
    height: 49px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
}

.header-logo {
    width: 72px;
    height: 31px;
}

.header-links {
    display: flex;
    list-style: none;
    width: 488px;
    justify-content: space-between;

}

.header-links__link {
    text-decoration: none;
    color: white;
    cursor: pointer;
    transition: 0.4s all ease;
    display: inline-block;
    position: relative;
}

.header-links__link:hover {
    transition: 0.4s all ease;
}

.header-links__link::after {
    content: '  ';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #00C65E;
    transform-origin: bottom right;
    transition: transform 0.5s ease-out;
}

.header-links__link:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.header-profile {
    height: 30px;
}

@media only screen and (max-width: 768px) {
    header {
        background-color: rgb(43, 43, 43);
        color: white;
        font-size: 30px;    
        display: flex;
        border-bottom: 3px solid #DADCDC;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        width: 768px;
        font-size: 8px;
    }

    .header {
        display: flex;
        width: 768px;
        height: 49px;
        margin: 0 auto;
        justify-content: center;
    }

    .header-logo {
        width: 72px;
        height: 31px;
    }

    .header-links {
        display: flex;
        list-style: none;
        width: 200px;
        justify-content: space-around;
    }

    .header-links__link {
        text-decoration: none;
        color: white;
        cursor: pointer;
        transition: 0.4s all ease;
        display: inline-block;
        position: relative;
    }

    .header-links__link:hover {
        transition: 0.4s all ease;
    }

    .header-links__link::after {
        content: '  ';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: -5px;
        left: 0;
        background-color: #00C65E;
        transform-origin: bottom right;
        transition: transform 0.5s ease-out;
    }

    .header-links__link:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    .header-profile {
        width: 72px;
    }

    @media only screen  and (max-width:320px) {
        .nav{
            visibility: visible;
            cursor: pointer;
        }
        header {
            background-color: rgb(43, 43, 43);
            color: white;
            font-size: 30px;
            display: flex;
            border: none;
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            width: 320px;
            font-size: 8px;
        }

        .header {
            display: flex;
            width: 768px;
            height: 49px;
            margin: 0 auto;
            justify-content: center;
            display: none;
        }

        .header-logo {
            width: 72px;
            height: 31px;
        }

        .header-links {
            display: flex;
            list-style: none;
            width: 200px;
            justify-content: space-around;
        }

        .header-links__link {
            text-decoration: none;
            color: white;
            cursor: pointer;
            transition: 0.4s all ease;
            position: relative;
        }

        .header-links__link:hover {
            transition: 0.4s all ease;
        }

        .header-links__link::after {
            content: '  ';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: -5px;
            left: 0;
            background-color: #00C65E;
            transform-origin: bottom right;
            transition: transform 0.5s ease-out;
        }

        .header-links__link:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }

        .header-profile {
            width: 72px;
        }
    }
}
</style>