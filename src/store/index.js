import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer/index'
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

const store = createStore(reducer, applyMiddleware(reduxLogger,reduxThunk,reduxPromise));
export default store;
/*
redux-logger输入redux开发日志
redux-thunk在action行为中管控异步操作
redux-promise在action行为中使用promise设计模式
*/
