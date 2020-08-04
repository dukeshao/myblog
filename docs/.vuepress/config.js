module.exports = {
    title: '你的名字',
    description: '持续学习那些不变的底层知识',
    theme: 'reco',
    themeConfig: {
        // 博客配置
        type: 'blog',
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: 'Tag'      // 默认文案 “标签”
            }
        },
        nav: [
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
        ],
        head: [
            ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
            ['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
        ],
        // 备案
        record: '粤ICP备19055048号',
        // 项目开始时间，只填写年份
        startYear: '2017',
        // author
        author: 'Duke Shao',
        logo: '/head.png',
        authorAvatar: '/head.png',
        sidebar: 'auto'//在所有页面中启用自动生成侧栏
    },
}