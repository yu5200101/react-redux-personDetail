import React from 'react';
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import CustomList from "./custom/List";
import CustomCreate from "./custom/Create";
import CustomDetail from "./custom/Detail";
import './Custorm.css'
export default class Custom extends React.Component{
    render(){
        return(
            <div>
                <ul className="nav nav-pills nav-stacked col-md-2">
                    <li role="presentation">
                        <NavLink to="/custom/list">客户列表</NavLink>
                    </li>
                    <li role="presentation">
                        <NavLink to="/custom/create">增加客户</NavLink>
                    </li>
                </ul>
                <div className="col-md-10">
                    <Switch>
                        {/*二级路由(子路由)*/}
                        {/*<Route path="/custom" exact render={()=>{*/}
                            {/*return <Redirect to="custom/list"/>;*/}
                        {/*}}/>*/}
                        <Redirect from="/custom" exact to="/custom/list"/>
                        <Route path="/custom/list" component={CustomList}/>
                        <Route path="/custom/create" component={CustomCreate}/>
                        {/*<Route path="/custom/detail" component={CustomDetail}/>*/}
                        {/*问号传参*/}
                        <Route path="/custom/detail/:id?" component={CustomDetail}/>
                        {/*路径传参*/}
                    </Switch>
                </div>
            </div>
        )
    }
}