export const WebName: string = "Elaborate";
export interface ProfileConfig {
    name: string;
    bio: string;
    imageSrc: string;
}
//favicon.ico 图标直接替换/src/app文件夹中的图片即可 以favicon.ico命名
export const profileConfig: ProfileConfig = {
    name: "Yearn",
    bio: "Bystander",
    imageSrc: "/avatar2.jpg",
    //如果放在public文件夹下，则直接/即可
    //如果图片是链接请在next.config.js中配置images:{domains: ["masttf.fun"],}
};

export interface friend {
    name: string;
    url: string;
    avatar: string;
    bio: string;
}
export const friends: friend[] = [
    {
        name: "Masttf",
        url: "https://epiphyllum.masttf.fun/",
        avatar: "https://masttf.fun/static/img/1f3cc55c3d0693d0583f4e7fff5c7aab.b_6dbd850baa93eeacc9c174faafb1e29b.webp",
        bio: "Masttf",
    },
];

export interface link {
    name: string;
    url: string;
    symbolId: string;
}
export const links: link[] = [
    {
        name: "github",
        url: "https://github.com/Masttf",
        symbolId: "ai:fa6-brands:github",
    },
    {
        name: "bilibili",
        url: "https://space.bilibili.com/158090842",
        symbolId: "ai:fa6-brands:bilibili",
    },
    {
        name: "music",
        url: "https://music.163.com/#/user/home?id=1403156707",
        symbolId: "ai:fa6:music",
    },
    // symbolId  定义在Icon 组件内， /src/components/Icon.tsx 用来管理svg图标
    // 没有的图标可以去找path https://fontawesome.com/
];

export interface linkItem {
    name: string;
    url: string;
}
export const linkList: linkItem[] = [
    { name: "首页", url: "/" },
    { name: "归档", url: "/archive" },
    { name: "友链", url: "/friends" },
    { name: "关于", url: "/about" },
];
