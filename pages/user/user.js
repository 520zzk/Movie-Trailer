// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:null,
    list:[],
    loading:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      success:msg=>{
        if(msg.userInfo){
          let user = msg.userInfo;
          this.setData({
            user
          })
          }
      } 
    });
    // this.getlist();
    console.log('x')
  },

  onShow(){
    this.getlist();
    console.log('b')
  },
getUser(e){
if(e.detail.userInfo){
  let user = e.detail.userInfo;
  this.setData({
    user
  })
  }
},
getlist(){
  this.data.list=[];
  wx.getStorage({
    key:"all",
    success:msg=>{
      msg.data.forEach(item=>{
        wx.getStorage({
          key:item,
          success:res=>{
            this.data.list.push(res.data[0])
          }
        })
      })
      
    }
  })

  setTimeout(()=>{
    this.setData({
      list:this.data.list
    })
  },500)
}

})