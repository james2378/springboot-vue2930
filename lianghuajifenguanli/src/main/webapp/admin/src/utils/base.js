const base = {
    get() {
        return {
            url : "http://localhost:8080/lianghuajifenguanli/",
            name: "lianghuajifenguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/lianghuajifenguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "量化积分管理系统"
        } 
    }
}
export default base
