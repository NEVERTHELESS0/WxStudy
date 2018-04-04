Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    
  },
  Click1 : function () {
    console.log('按钮1被点击了')
    wx.navigateTo({
      url: '../firstPage/first'
    })
  },
  Click2 : function () {
    console.log('按钮2被点击了')
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
  ,
  Click3: function () {
    console.log('按钮3被点击了')
    wx.navigateTo({
      url: '../index/index'
    })
  }
  ,
  Click4: function () {
    console.log('按钮4被点击了')
    wx.navigateTo({
      url: '../express/express'
    })
  
  },
  Click5: function () {
    console.log('按钮5被点击了')
  } ,
  Click6: function () {
    console.log('按钮6被点击了')
    wx.navigateTo({
      url: '../wxDrawer/index',
    })
  },
  Click7: function () {
    console.log('按钮7被点击了')
    wx.navigateTo({
      url: '../scrollableTabView/index',
    })
  },
  Click8: function () {
    console.log('按钮8被点击了')
    wx.navigateTo({
      url: '../getStudentInfo/index',
    })
  }

})