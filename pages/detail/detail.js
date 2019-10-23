// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{},
    loading:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.loadData(options.id)
  },
loadData(id){
wx.showLoading({
    title:"加载中，请稍后"
})
this.setData({loading:true})
  wx.request({
    url:` `,
    success:msg=>{
   
    console.log(msg.data,'没有请求到数据，该接口可能已关闭');
    // wx.setNavigationBarTitle({
    //   title: msg.data.title,
    //   success: (result) => {
    //   }
    // });
      
      this.setData({
        detail:msg.data,
        loading:false
      })
     wx.hideLoading();
     
    }
  })
}
  
})