const db=wx.cloud.database()
// pages/divide/ridepet/ridepet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current_data:"",
    pet_data:[{'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/毒液龙王.png', 'name': '毒液龙王', 'food': '龟蛋+毒蘑菇饲喂料+罕见饲喂肉\n保底25包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/毒液龙.png', 'name': '毒液龙', 'food': '鸡蛋+毒蘑菇饲喂料+稀有饲喂肉\n保底20包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/暴力兔王.png', 'name': '暴力兔王', 'food': '竹笋饲喂料+胡萝卜饲喂料+罕见肉\n保底25包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/暴力兔.png', 'name': '暴力兔', 'food': '胡萝卜饲喂料+稀有饲喂肉+牛奶\n保底20包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/大角牛王.png', 'name': '大角牛王', 'food': '小麦饲喂料+白莲饲喂料+罕见肉\n保底23包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/大角牛.png', 'name': '大角牛', 'food': '小麦饲喂料+白莲饲喂料+稀有饲喂肉\n保底20包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/岩火剑齿虎王.png', 'name': '岩火剑齿虎王', 'food': '稀有饲喂肉+罕见饲喂肉+大扇贝饲喂料\n保底35包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/岩火剑齿虎.png', 'name': '岩火剑齿虎', 'food': '优质饲喂肉+稀有饲喂肉+大扇贝饲喂料\n保底30包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/剑齿虎王.png', 'name': '剑齿虎王', 'food': '小龙虾+优质肉+牛肉\n保底13包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/剑齿虎.png', 'name': '剑齿虎', 'food': '生牛排+小龙虾+饲喂肉块\n保底17包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/狼王.png', 'name': '狼王', 'food': '优质饲喂肉+生羊排\n保底14包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/沙漠狼.png', 'name': '沙漠狼', 'food': '饲喂肉块+生羊排+土豆饲喂料\n保底13包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/沙漠狼王.png', 'name': '沙漠狼王', 'food': '优质饲喂肉+生羊排+土豆饲喂料\n保底15包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/雪原狼.png', 'name': '雪原狼', 'food': '饲喂肉块+生羊排+小麦饲喂料\n暂未开放'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/雪原狼王.png', 'name': '雪原狼王', 'food': '优质饲喂肉+生羊排+小麦饲喂料\n暂未开放'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/棕熊大.png', 'name': '棕熊大', 'food': '海带+带鱼+小麦饲喂料\n保底16包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/棕熊.png', 'name': '棕熊', 'food': '草莓+蜂蜜饲喂料+饲喂肉\n保底13包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/蓝熊大.png', 'name': '蓝熊大', 'food': '蜂蜜饲喂料+优质饲喂肉块\n保底12包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/蓝熊.png', 'name': '蓝熊', 'food': '蜂蜜\n?-'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/红蜥蜴.png', 'name': '红蜥蜴', 'food': '红蘑菇+饲喂肉块\n保底5包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/蓝蜥蜴.png', 'name': '蓝蜥蜴', 'food': '蓝蘑菇+饲喂肉块\n保底5包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/狼.png', 'name': '狼', 'food': '优质饲喂肉块\n-'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/黄蜥蜴.png', 'name': '黄蜥蜴', 'food': '优质饲喂肉块\n-'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/绿蜥蜴.png', 'name': '绿蜥蜴', 'food': '优质饲喂肉块\n-'}],


    rid_data:[{'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/北境骨龙.png', 'name': '北境骨龙', 'food': '冰龙涎草+北极鳕鱼+冰精\n95包稳'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/冰毒液龙.png', 'name': '冰毒液龙', 'food': '北极冰鱼饲料包+鸡蛋饲料包+冰精\n50包稳'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/冰毒液龙王.png', 'name': '冰毒液龙王', 'food': '冰精+乌龟蛋饲料包+霜冻之花\n55包稳'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/北境犀鸟.png', 'name': '北境犀鸟', 'food': '冰精+北极松果饲料包+鳐鱼\n110包稳'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/云斑鹦鸟.png', 'name': '云斑鹦鸟', 'food': '鲍鱼+辣椒饲料包+小麦饲料包\n55包打底'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/幼鲭鲨.png', 'name': '幼鲭鲨', 'food': '优质肉+生羊排+象拔蚌\n25包稳'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/虎皮鲨.png', 'name': '虎皮鲨', 'food': '罕见肉+金龙鱼+小丑鱼\n110包保底'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/灰鲭鲨.png', 'name': '灰鲭鲨', 'food': '稀有肉+蓝莲饲喂包+小丑鱼\n60包保底'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/狮鹫.png', 'name': '狮鹫', 'food': '鲨鱼心脏+精灵鱼+罕见肉\n110包保底'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/熔火龙.png', 'name': '熔火龙', 'food': '精灵鱼+龙涎果+罕见肉\n100包保底'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/黑马.png', 'name': '黑马', 'food': '小麦饲喂料+蓝莲饲喂料+鲍鱼\n200包左右'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/独角兽.png', 'name': '独角兽', 'food': '精灵鱼+草莓饲喂料+帝王蟹\n保底120包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/蓝马.png', 'name': '蓝马', 'food': '河豚+小麦饲喂料+玉米饲喂料\n保底8包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/红马.png', 'name': '红马', 'food': '小麦饲喂料+辣椒饲喂料+优质饲喂肉\n保底13包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/灰马.png', 'name': '灰马', 'food': '胡萝卜\n5个'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/青色陆行鸟.png', 'name': '青色陆行鸟', 'food': '红莲饲喂料+洋葱饲喂料+罕见饲喂肉\n保底110包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/陆行鸟.png', 'name': '陆行鸟', 'food': '小麦饲喂料+胡萝卜饲喂料\n保底12包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/骆驼.png', 'name': '骆驼', 'food': '小麦饲喂料+玉米饲喂料\n保底7包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/岩火剑齿虎王.png', 'name': '岩火剑齿虎王', 'food': '大扇贝包+罕见包+稀有肉\n24包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/剑齿虎王.png', 'name': '剑齿虎王', 'food': '小龙虾+优质肉+生牛排\n13包稳'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/孤狼.png', 'name': '孤狼', 'food': '羊排+优质肉\n '}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/沙狼王.png', 'name': '沙狼王', 'food': '土豆饲料包+生羊排+优质肉\n14包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/暗黑霸王龙.png', 'name': '暗黑霸王龙', 'food': '象拔蚌+罕见肉+稀有肉\n55包稳'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/大角牛王.png', 'name': '大角牛王', 'food': '小麦饲料包+白莲饲料包+罕见肉\n23包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/剑齿虎.png', 'name': '剑齿虎', 'food': '小龙虾+牛排+饲喂肉\n13包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/沙漠狼.png', 'name': '沙漠狼', 'food': '土豆包+羊排+饲喂肉\n '}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/狼.png', 'name': '狼', 'food': '饲喂肉\n '}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/荒原牛.png', 'name': '荒原牛', 'food': '小麦包+甘蔗+苹果\n '}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/公牛.png', 'name': '公牛', 'food': '小麦\n '}],
    boss_data:[{'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/暗黑霸王龙.png', 'name': '暗黑霸王龙', 'food': '象拔蚌+罕见肉+稀有饲喂肉\n保底55包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/霸王龙.png', 'name': '霸王龙', 'food': '松露+土豆饲喂料+优质饲喂肉块\n保底15包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/雪猛犸象.png', 'name': '雪猛犸象', 'food': '大龙虾+玉米饲喂料+土豆饲喂料\n保底15包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/猛犸象.png', 'name': '猛犸象', 'food': '大龙虾+胡萝卜饲喂料+松果\n保底15包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/熔岩龟.png', 'name': '熔岩龟', 'food': '鲤鱼+大闸蟹\n保底15包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/水池龟.png', 'name': '水池龟', 'food': '三文鱼+鲶鱼\n保底14包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/巨猿.png', 'name': '巨猿', 'food': '大闸蟹+香蕉+松果\n保底16包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/上古鳄龙.png', 'name': '上古鳄龙', 'food': '鲍鱼+桂鱼+章鱼\n保底55包'}],
    home_data:[{'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/荒原牛.png', 'name': '荒原牛', 'food': '小麦饲料包+甘蔗+苹果\n保底6包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/乌龟.png', 'name': '乌龟', 'food': '饲喂料小麦+鲤鱼\n保底4包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/红猪.png', 'name': '红猪', 'food': '饲喂料黄豆+饲喂料小麦\n保底10包'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/蓝猪.png', 'name': '蓝猪', 'food': '黄豆\n-'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/鸡.png', 'name': '鸡', 'food': '小麦\n-'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/奶牛.png', 'name': '奶牛', 'food': '小麦\n-'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/公牛.png', 'name': '公牛', 'food': '小麦\n-'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/绵羊.png', 'name': '绵羊', 'food': '小麦\n-'}],
    other_data:[{'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/奶牛.png', 'name': '奶牛', 'food': '小麦\n-'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/公牛.png', 'name': '公牛', 'food': '小麦\n-'}, {'img_path': 'cloud://creationdream-ltv8a.6372-creationdream-ltv8a-1302449196/坐骑/绵羊.png', 'name': '绵羊', 'food': '小麦\n-'}],
    class:'',
    
  },
  test:function()
  {
   
    db.collection("rid").get().then(res=>{
      this.setData({
        current_data:res.data,
        class:'rid'
      })
      
    })
    

  },
  select_rids:function(e)
  {
    var rid_name=e.currentTarget.dataset.name;
    console.log(rid_name)
    var result=[]
    this.setData({
      current_data:result
    })
    if(rid_name=="宠物")
    {
      db.collection("pet").get().then(res=>{
        this.setData({
          current_data:res.data,
          class:'pet'
        })
        
      })
    }
    else if(rid_name=="坐骑")
    {
      db.collection("rid").get().then(res=>{
        this.setData({
          current_data:res.data,
          class:'rid'
        })
        
      })
    }
    else if(rid_name=="BOSS")
    {
      db.collection("boss").get().then(res=>{
        this.setData({
          current_data:res.data,
          class:'boss'
        })
        
      })
    }
    else if(rid_name=="家畜")
    {
      db.collection("hom").get().then(res=>{
        this.setData({
          current_data:res.data,
          class:'hom'
        })
      })
    }
   
  },
  goto_detail:function(e){
    wx.navigateTo({
      url: '/pages/divide/rid_detail/rid_detail',

    })
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

  }
})