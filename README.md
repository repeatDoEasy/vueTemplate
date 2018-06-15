结构说明:

build/whichProject.js用于配置不同项目的开发和打包路径，目的在于多个当页面共用一套VUE系统框架，并且各个项目单独配置，打包，互相不影响
  
const root={
	chat:"./root/chat/"
}
module.exports=root.chat;
在root对象下配置你的项目文件夹，改文件夹对于两个文件，开发的时候只需要模块到处你想要的项目路径
   main.js是你自己项目的主入口文件，
   index.html是你自己项目的模板文件
   
   
root目录用于不同项目的主入口文件和模板文件

src目录为所有项目共用目录
  assets为静态资源文件
  commonents为组件库
  store为vuex的状态管理目录
  units为工具库
  router为路由管理目录
 
changeVue.js对Vue进行ajax集成，以及其他集成扩展


static目录为打包后的项目文件，用于生产环境，一个项目对应一个目录


clone改项目之后，只需进入跟目录，运行npm install命令即可
也可以运行cnpm install命令（推荐），安装项目所需要的依赖包，推荐使用国内镜像进行安装

接下来运行，npm run dev即可运行该项目，在浏览器里输入http://localhost:8080即可
   
   



