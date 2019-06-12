// pages/subject/subject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        type:'爱情',
        url:"/assets/image/aiqing.png"
      },
      {
        type:'动画',
        url:"/assets/image/donghua.png"
      },
      {
        type:'动作',
        url:"/assets/image/dongzuo.png"
      },
      {
        type:'喜剧',
        url:"/assets/image/xiju.png"
      },
      {
        type:'科幻',
        url:"/assets/image/kehuan.png"
      }
    ]
  },
  clickThis(e){
    let type  = e.currentTarget.dataset.type;
    wx.navigateTo({
      url:`/pages/subjectList/subjectList?type=${type}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


})