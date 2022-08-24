// pages/my/my.js
//var common = require('../../utils/common.js')
Page({

  data: {
    //临时微信用户昵称和头像
    nickName:'未登录',
    src:'/images/index.png',
    //临时收藏夹新闻数据
    newsList:[]
  },

  getMyInfo:function(e){ 
    //console.log(e.detail.userInfo)
    let info = e.detail.userInfo
    this.setData({
      src:info.avatarUrl,
      nickName:info.nickName,
      isLogin:true
    })
        //获取收藏列表
    this.getMyFavourites();
  },

  //获取收藏列表
  getMyFavourites:function(){
    let info = wx.getStorageSync();
    let keys = info.keys;
    let num = keys.length;
      
    let myList = [];
    for(var i = 0; i < num; i++){
      let obj = wx.getStorageSync(keys[i]);
      myList.push(obj);
    }
    //更新收藏列表
    this.setData({
      newsList:myList,
      num:num
    })
  },

  goToDetail: function (e) {
    //获取携带data-id的数据
    let id = e.currentTarget.dataset.id
    //console.log(e)
    //携带新闻ID进行页面跳转
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow:function() {
    //如果已经登录
    if(this.data.isLogin){
      //更新收藏列表
      this.getMyFavourites()
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})