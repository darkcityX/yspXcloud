import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: { // 初始化数据及状态
        isLogin : false,    // 登陆状态
        userList: []        // 所有用户数据
    },
    getters: { // 相当于store的计算属性
        getUser : state => state.isLogin,
        getUserList : state => state.userList
    },
    mutations: { // 同步函数
        CHANGElOGIN(state,value){
            state.isLogin = value;
        },
        SAVEUSERlIST(state,newList){
            state.userList = [...newList];
        } 
    },
    actions: { // 异步函数
        changeisLogin({ commit }, value){
            commit("CHANGElOGIN",value)
        },
        saveUserLists({ commit }, newList){
            commit("SAVEUSERlIST",newList);    
        }
    }
});