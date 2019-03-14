// 页面状态管理
const state={
    currPageIndex:0,
}

const getter={

}

//mutations 不支持异步
const  mutations={
        pageOnChange(state,index){
            state.currPageIndex=index;
        }
}


//在action中调用支持异步
const  actions={
    pageOnChange({commit},index){
         commit('pageOnChange',index);
    }
}

export default  {
    namespaced: true,
    state,
    getter,
    actions,
    mutations
}

