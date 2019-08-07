import {citylist_now_api} from "api/citylist.js"
const state={
    hotCity:[],
    moreCity:[]
}
const mutations={
    hotCityMutations(state,params) {
        state.hotCity=params;
        
    },
    moreCityMutations(state,params) {
        state.moreCity=params;
        console.log(state.moreCity)
    }
}
const actions={
    async hotCityHandler({commit}){
        let data=await citylist_now_api();
       console.log(data)
        commit("hotCityMutations",data.data.hotCitys)
       
    },
    async moreCityHandler({commit}) {
        let data =await citylist_now_api();
        commit("moreCityMutations",data.data.fcitys)
    }
}
export default {
    state,
    mutations,
    actions,
    namespaced:true
}