//点击显示消失切换效果
var btn = document.querySelector(".header-btn");
var content = document.querySelector(".header-content");
var sum = 0;
    content.style.display="none";
if(btn!=null){
    btn.addEventListener("click",function(){
        if (sum++%2 == 0) {
            content.style.display="block";
        }else{
            content.style.display="none";
        }
    })
}
//点击显示消失切换效果

//数据传输
new Vue({
    el:"#header",
    data:{
        lists:""
    },
    mounted:function(){
        this.$http.get('json/data.json').then(function(res){
            console.log(res.body);
            this.lists=res.body;
        },function(){
            console.log('请求失败处理');
        })
    },
    methods:{
        thisclick:function(q,w){
            this.lists[q][w].bool = !this.lists[q][w].bool;
        }
    }
})
//数据传输