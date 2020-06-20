// pages/divide/plant/plant.js
const db=wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:[{'img_path': 'https://www.cncn.com/data/pic/201905/a95bf545f851205d15584176412885.jpg', 'name': '红莲', 'reset': '12小时','application':'主要作用是制作青鸟的饲料','map1_path':'http://newsimg.5054399.com/uploads/userup/1812/11113PO442.jpg','map2':''}],
    plant_data:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const promise=db.collection("plant").get({success:res=>{
    this.setData({
          plant_data:res
          
          
        })
      }
    })
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})