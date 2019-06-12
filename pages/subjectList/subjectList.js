// pages/index/index.js
Page({

  data:{
    list:[],
    start:0,
    loading:false,
    type:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){
    let { type } = options;
    wx.setNavigationBarTitle({
      title: type,
      success: (result) => {
        
      }
    });
      
    this.setData({
      type
    })
    this.loadDate(type);

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
   this.loadDate(this.data.type);
  },
  loadDate(type){
    let {start,list} = this.data;
    console.log(start,...list)
    wx.showLoading({
     title:"拼命加载中",
     mask:true
    })
    this.setData({
      loading:true
    })
    wx.request({
      url:`https://www.koocv.com/h5-view/v/movie/list?tag=${this.data.type}`,
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