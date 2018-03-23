import React from "react";
import ReactDom from "react-dom";
import './staic/css/bootstrap.css';
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom';
import Home from "./routers/Home";
import Custom from "./routers/Custom";
import Plan from "./routers/Plan";
import App from "./routers/App";
import {Provider} from "react-redux";
import store from './store/index';

ReactDom.render(<Provider store={store}>
        <HashRouter>
            <App>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/custom" component={Custom}/>
                    <Route path="/plan" component={Plan}/>
                    {/*<Route render={()=>{*/}
                    {/*return <h2>HELLO WORLD</h2>*/}
                    {/*}}/>*/}
                    {/*redirect:重定向,重新定向到一个新的地址*/}
                    <Redirect to="/"/>
                </Switch>
            </App>
        </HashRouter>
    </Provider>
    ,window.root);

/*
* 基于REACT的ROUTER实现SPA单页面应用,我们会按照如下的工程目录开发:
*   |-SRC
*   |--component  存放的是各个组件(组件:可被公共使用的才是准确意义上的组件)
*   |--container(routers)  这里一般存放的是页面(也是基于REACT组件创建的JSX元素)
*   |---app.js    当前项目的主页面(外层盒子),所有的其他页面都是嵌套到这里的
*   |---xxx.js
*   |
*   |--store      REDUX这一套
*   |--index.js   入口文件
* */
/*
* Switch :react-router中提供的一个组件,这个组件使用来约束路由的(只要有一个router被匹配到,直接渲染对应的组件,后面不管是否还能被匹配到,都不在继续渲染了,类似switch case中的机制)
*  真实项目中,我们一般都会在router外面包一层switch,因为加入了它之后我们可以做一些处理
*  <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/custom" component={Custom}/>
            <Route path="/plan" component={Plan}/>
            <Route render={()=>{
                return <h2>HELLO WORLD</h2>
            }}/>
    </Switch>

    如果请求的地址和上面两个path都不匹配,则执行最后一个route (route不设置path,所有的路径都可以匹配),如果上面有匹配的,switch会中断下面的匹配的操作(也就是下面的都不执行了)
* */