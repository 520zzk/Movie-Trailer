// pages/index/index.js
Page({

  data:{
    list:[],
    start:0,
    loading:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){ 
    this.loadDate();

  },
  onbindClick(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url:`/pages/detail/detail?id=${id}`,
      success:msg=>{
         

      let appArr =  getApp().data.arr;
      wx.getStorage({
        key:'all',
        success:(s)=>{
          appArr = s.data;
        }
      })
      appArr.unshift(id)
      let a =[...new Set(appArr)];
      wx.setStorage({
            key:"all",
            data:a
          })
          let b = this.data.list.filter(item=>{
            return item.id==id
          })
          wx.setStorage({
            key:id,
            data:b
          })


      }
    })
  },
  scrollNew(){
   if(this.data.loading){
     return 
   }
   this.loadDate();
  },
  loadDate(){
    let {start,list} = this.data;
    
    wx.showLoading({
     title:"拼命加载中",
     mask:true
    })
    this.setData({
      loading:true
    })
    wx.request({
      url:`https://www.koocv.com/h5-view/v/movie/list?page_start=${this.data.start}`,
      success:(msg)=>{
        // console.log(msg.data)
        start+=10;
          this.setData({
            list:[...list,...msg.data.subjects],
            start,
            loading:false
          });
          wx.hideLoading();
          
      }
    })
  }

})