import React from 'react';
import * as Types from '../action-types'

const customAction = {
    /*create(payload) {
        return dispatch=>{
            setTimeout(()=>{
                dispatch({type: Types.CUSTOM_CREATE,
                    payload: payload});
            },1000);
        }
        //=>默认情况下，dispatch在派发任务(action)的时候，是不支持异步的，例如，执行create并没有立即返回一个action对象，使用派发到reducer中的时候，缺乏type属性，报错
    }*/
    create(payload) {
        return {
            type: Types.CUSTOM_CREATE,
            payload:new Promise((resolve,reject)=>{
              setTimeout(()=>{
                  resolve({
                      id:6,
                      name:'fff'
                  })
              },1000);
            })
        }

    }
};
export default customAction