//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    id1: "clear",
    id2: "back",
    id3: "negative",
    id4: "+",
    id5: "7",
    id6: "8",
    id7: "9",
    id8: "-",
    id9: "4",
    id10: "5",
    id11: "6",
    id12: "×",
    id13: "1",
    id14: "2",
    id15: "3",
    id16: "÷",
    id17: "0",
    id18: ".",
    id19: "history",
    id20: "=",
    screenData:"0"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  clickButton: function(event){
    
    var sd=this.data.screenData;
    var id = event.target.id;
    console.log(id);
    if(id==this.data.id2){
      var data = this.data.screenData;
      if(data==0){
        return;
      }
      data=data.substring(0,data.length-1);
      if(data==""||data=="-"){
        data=0;
      }
      this.setData({screenDta:"0"});
    }
    else if(id==this.data.id1){
      this.setData({screenData:"0"});
    }else if(id==this.data.id3){
      var data = this.data.screenData;
      if(data==0){
        return;
      }
      var firstWord=data.substring(0,1);
      if(firstWord=="-"){
        data=data.substring(1,data.length);
      }else{
        data="-"+data;
      }
      this.setData({screenData:data});
    }else{
      var sd = this.data.screenData;
    var data;
    if(sd==0){
      data = id;
    }else{
       data=sd+id;
    }
    }
    
    this.setData({screenData:data});
  }
})
