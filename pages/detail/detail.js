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
    url:`https://www.koocv.com/h5-view/v/movie/detail/?id=${id}`,
    success:msg=>{
      
    wx.setNavigationBarTitle({
      title: msg.data.title,
      success: (result) => {
        
      }
    });
      
      this.setData({
        detail:msg.data,
        loading:false
      })
     wx.hideLoading();
     
    }
  })
}
  
})