let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function(){
    card.setAttribute("style","opacity:0");
    let x = document.createElement("audio");
     x.setAttribute("src", "qlx.mp3");
     x.setAttribute("autoplay","autoplay");

// 打字效果
let i =0
let str = '我厉不厉害，你喜欢吗？可能你根本不会看，没关系。<情不知所起，一往而深 <好怀念那段我们一起骑车一起玩的日子，后来你仿佛再没爱过我<爱你四年了，你的喜怒哀乐深深的印在我的心房 <我好希望你的每一次的笑容都是为了我 <我的小铎铎，你要开心 <如果可以爱我一次就好了 <我第一次写情书哦 <我会让你成为我人生中的唯一例外 <我会等你的 等到等不动 <我永远都爱你，这不是谎话，是诺言，我这辈子绝对不会骗你 <与君相向转向卿，与君双栖共一生 <既许一人以偏爱，愿尽余生之慷慨 '
let strp = ''
function print()
{
 if(str[i]=='<')
 {
     document.getElementById("box").innerHTML=strp+"<br><br>+'|'";
     strp+="<br><br>";
 }
 else
 {
     strp+=str[i];
     box.innerHTML=strp + '|';
 }
 i++;
}
setTimeout(() => {
    let printid=setInterval(() => {
        print();
        if(i==str.length)
        clearInterval(printid);
        },190);  // 190毫秒打一个字，其实细心发现的话，这个项目还是有个小小的bug，无法用语言描述这个bug，如果你想优化的话 有一种简单的方法就是调快打字的速度，这样那个bug看起来就不会很明显,我太菜了 不会改那个bug
}, 5500);  //5500毫秒开始打字
// 背景出现
function appearBackground(){
setTimeout(()=>{
box.style.opacity=1
},1500)
}
appearBackground()

})
