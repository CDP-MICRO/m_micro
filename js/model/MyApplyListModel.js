
define(['AbstractModel'],function(AbstractModel){
  var Model= _.inherit(AbstractModel,{

    propertys: function ($super) {
      $super();
//      this.url = "fakedata/my_apply_list_data.json";
      this.url = "hra/mob/widget/getApplyList.do";
      this.param = {};
      this.dataformat = null;
      this.validates = [];
      this.protocol = 'http';
//      this.contentType = 'json';
      this.contentType = 'jsonp';
//      this.method = 'POST';

//      this.baseurl = {
//        domain: '192.168.102.118:8080',
//        path: ''
//      };
    },
    buildurl: function ($super) {
        $super();
//      alert(window.location.host+window.location.pathname.substring(0,window.location.pathname.lastIndexOf('/')))
      if(this.baseurl.domain=='')
        this.baseurl.domain = window.location.host+window.location.pathname.substring(0,window.location.pathname.lastIndexOf('/'));
      if(window.location.host!=undefined&&window.location.host!='')
        return this.protocol + '://' + this.baseurl.domain + '/' + this.baseurl.path + (typeof this.url === 'function' ? this.url() : this.url);
      else
          return this.protocol + '://' + this.baseurl.domain + '/' + this.baseurl.path + (typeof this.url === 'function' ? this.url() : this.url);
    }
  });

  //单例模式
  var modelClass = {};

  return modelClass.getInstance = function(){
    return this.instance instanceof Model ? this.instance: this.instance = new Model()
  },modelClass.createInstance = function(){
    return new Model();
  },modelClass;
});