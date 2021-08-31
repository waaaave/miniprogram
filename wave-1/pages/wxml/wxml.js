// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      '中国',
      '老鹰',
      '泡菜'
    ],
    picka:['江西省','南昌市','东湖区']
    // pickd:'2000-01-01',
    // pick:'09:00:00'
/**
    nodes:[
      {
        name:'img',
        attrs:{
          class:'image',
          src:'../../assets/images/muntain.jpg'
        }
    },
    {
      name:'h3',
      attrs:{
        class:'header'
      },
      children:[{
        type:'text',
        text:'hello!'
      }]
    }
  ]
 */
    /**
    images:[
      '../../assets/images/landscape.png',
      '../../assets/images/muntain.jpg',
      '../../assets/images/ruins.jpg'
    ]
     */
  },
  formSubmit(event){
    console.log(event.detail.value)
  },
  inputHandler(event){
    this.setData({
      pick:event.detail.value,
      pickd:event.detail.value,
      picka:event.detail.value
    })
    console.log(event.detail.value)
  },
  /**
  setScrollView(event){
    this.setData({
      currentView:event.target.dataset.view
    })
  },
   */
   /**
      header:{
      content:'views',
      class:'header',
      show:true
    },
    fruits:[
      'apple',
      'banana',
      'lemon'
    ]
    */


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

  }
})