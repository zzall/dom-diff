
window.Element = {
  init(){
    console.log('df')
    return this
  },
  render(attr=[]){
    
  },
  renderDom(htmlStr,rootDom){
    if(rootDom.constructor == HTMLElement){
      rootDom.innerHTML = htmlStr;
    }
    return new Error('请确认是否是dom节点')
  }
}
/**
 * 
 * 

`Chinese (Simplified) Language Pack for Visual Studio Code`
    中文插件

![](https://user-gold-cdn.xitu.io/2019/5/6/16a8b1a5a771489a?w=2112&h=1698&f=png&s=972048)
`Color Highlight` 
实现在js中的颜色相关的代码显示相应的背景色

![](https://user-gold-cdn.xitu.io/2019/5/6/16a8b1bdf6529a36?w=2112&h=1688&f=png&s=738543)

`Color Picker`
颜色拾取器

![](https://user-gold-cdn.xitu.io/2019/5/6/16a8b1d22ad7679e?w=2124&h=1650&f=png&s=1551312)

`Highlight Matching Tag`
标签高亮

```!
对于写html的小伙伴来说，最痛苦的莫过于控制台报少标签的错误，有了这个插件，再碰到这种问题直接对比颜色就可以啦
```

![](https://user-gold-cdn.xitu.io/2019/5/6/16a8b22366ede584?w=2120&h=1530&f=png&s=908696)

`Path Intellisense` 路径提醒插件

![](https://user-gold-cdn.xitu.io/2019/5/6/16a8b243178709ba?w=2118&h=1560&f=png&s=658748)

`Auto Close Tag` 
自动关闭标签，可以在你输入首标签的时候自动补全尾标签，省时省力

![](https://user-gold-cdn.xitu.io/2019/5/6/16a8b27e3e45dbf0?w=2122&h=1656&f=png&s=597561)

`Auto Rename Tag` 
在你更改标签名时该插件自动更改对应标签名

![](https://user-gold-cdn.xitu.io/2019/5/6/16a8b2c62869f67b?w=2116&h=1678&f=png&s=708727)

`Bracket Pair Colorizer`
语句块染色器

![](https://user-gold-cdn.xitu.io/2019/5/6/16a8b2d070aea05e?w=2118&h=1600&f=png&s=948599)

`vscode-icons`
vscode的文件图标插件

![](https://user-gold-cdn.xitu.io/2019/5/6/16a8b2db9ed86862?w=2126&h=1726&f=png&s=1208727)

`Subtle Match Brackets`

![](https://user-gold-cdn.xitu.io/2019/5/6/16a8b305d1434d30?w=2118&h=1698&f=png&s=882222)

`Simple React Snippets`
react的snippet，轻松书写react代码

![](https://user-gold-cdn.xitu.io/2019/5/6/16a8b31e47c79271?w=2120&h=1684&f=png&s=1205593)

`ESLint`
代码检查 规范代码必备

![](https://user-gold-cdn.xitu.io/2019/5/6/16a8b3268944b93d?w=2130&h=1676&f=png&s=1478462)

`Code Runner`
在vscode的控制台中运行代码 支持多种语言 
```!
以后再也不用新建html文件然后写script标签啦，当然也可以直接在浏览器控制台中书写js代码，如果你用习惯的话..
```

![](https://user-gold-cdn.xitu.io/2019/5/6/16a8b33a998ef4b9?w=2120&h=1696&f=png&s=1156871)


还有 `各种snippets`

![](https://user-gold-cdn.xitu.io/2019/5/6/16a8b36e258f91f7?w=672&h=1800&f=png&s=908984)


https://blog.hhking.cn/2018/08/15/extensions-for-vsc/   道友的优秀推荐 

 */