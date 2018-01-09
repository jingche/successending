var jsonObj = null;
var headName = new Array("Eriref","Registered By","Registered Date","Finished Date","Turnaround Time","Answer Code","Valid","Heading");
var seqlist = new Array("id","eriref","registered_by","registered_date","finished_date","turnaround_time","answer_code","valid","heading");
$(function(){
    //数据，实际情况是从后台获取的，格式json
	
          $.ajax({
            type: "POST",
            url: "/mavenSSM/TR_list/getAllList",
            dataType: "json",
            success: function(data){
            	jsonObj = data;
                $("#tableArea").createTable(data,{
                    rows:10,
                    needKey:true,
                    headName:headName,
                    needseqlist: true,
                    seqlist: seqlist,
                    link: true,
                    linkcols:"eriref",
                    linkdata: "https://mhweb.ericsson.se/TREditWeb/faces/oo/object.xhtml?mode=VIEW&eriref=",
                });
            }
          });
<<<<<<< HEAD
//针对选择输入框的选项的改变来决定显示多少行数的设置问题，这里createtable是一个自己写的画图插件，非常有实用意义，对于这个需求的table的实现。
=======

>>>>>>> 2358d0961dccc0bad857e047bbfb0dd1801d40a1
           $("#selectpage").bind("change",function(){
            var r = parseInt($(this).val());
              if($(this).val()=="All"){
              r=parseInt(jsonObj.length);
              }
            $("#tableArea").createTable(jsonObj,{
              rows : r
            

            });
          });
           //这边是针对search部分，实现筛选功能的代码部分
          $("#inputNumber").bind("input",function(){
            var  r=parseInt($("#selectpage").val());
            if($("#selectpage").val()=="All"){
             r=parseInt(jsonObj.length);
            }
            var value = $(this).val();
<<<<<<< HEAD
            var temp = [];//这边是自己定义的一个数组用于存放被筛选出来的数据行，x是对应的满足条件的对应的table的td部分内容。
=======
            var temp = [];
>>>>>>> 2358d0961dccc0bad857e047bbfb0dd1801d40a1
            for(var i = 0;i < jsonObj.length;i++){
              for(x in jsonObj[i]){
                if(x != "id" && jsonObj[i][x] != null && jsonObj[i][x].indexOf(value) > -1){
                  temp.push(jsonObj[i]);
                  break;
                }
              }
            }
            $("#tableArea").createTable(temp,{
              rows : r
            });
        });


});
//实现自动的日期值相减，分别针对add按钮和edit按钮的点击之后出现的弹窗中的时间自动相减的过程。
$(function(){
   $("#time1").bind("blur",function(){
        calDays($(this).val(), $("#time2").val(),"time3");
   });
   $("#time2").bind("blur",function(){
       calDays($("#time1").val(),$(this).val(),"time3");
   });
   $("#editdate1").bind("blur",function(){
        calDays($(this).val(), $("#editdate2").val(),"editdate3");
   });
   $("#editdate2").bind("blur",function(){
       calDays($("#editdate1").val(),$(this).val(),"editdate3");
   });
   $("#time3").bind("click blur",function(){
       calDays($("#time1").val(),$("#time2").val(),"time3");
   });
   $("#editdate3").bind("click blur",function(){
       calDays($("#editdate1").val(),$("#editdate2").val(),"editdate3");
   });
});

$(function(){
	//让cancel按钮实现清空输入框的结果
	$("#cancelButton").bind("click",function(){
  	  $("#addGroup").find("input").val("");
     });
	 
     $("#sureAdd").bind("click",function(){
          $("#addError").text("").hide();
          $("#time3").trigger(" blur");
          var $inputs =$("#addGroup").find("input");
          if($inputs[0].value== ""){
            showError("Eriref can not be null !");
            return false;
          }
          else if($inputs[1].value== ""){
            showError("Registerded by can not be null !");
            return false;
          }
         else  if($inputs[2].value== ""){
            showError("Registerded date can not be null !");
            return false;
          }
          else if($inputs[4].value== ""){
            showError(" Turnaround Time can not be null !");
            return false;
          }
          else if($inputs[7].value== ""){
            showError(" Heading can not be null !");
            return false;
          }
          var datas = {"id": 0,"eriref":$inputs[0].value,"registered_by":$inputs[1].value,"registered_date":$inputs[2].value,
        		  "finished_date":$inputs[3].value,"turnaround_time":$inputs[4].value,
        		  "answer_code":$inputs[5].value,"valid":$inputs[6].value,"heading":$inputs[7].value};
          
     	  var cpage = parseInt($("#currentPage").val());
          $.ajax({
        	  type:"POST",
        	  url: "/mavenSSM/TR_list/addItem",
        	  dataType: "json",
        	  data:JSON.stringify(datas),
        	  contentType:"application/json",
        	  success:function(data){
        		  datas.id = data.id;
        		  jsonObj.push(datas);
        		  $("#tableArea").createTable(jsonObj,{
        			  rows:10,
                      needKey:true,
                      headName:headName,
                      needseqlist: true,
                      seqlist: seqlist,
                      link: true,
                      linkcols:"eriref",
                      linkdata: "https://mhweb.ericsson.se/TREditWeb/faces/oo/object.xhtml?mode=VIEW&eriref=",
                      pages:cpage
                  });
        		  $("#cancelButton").click();
<<<<<<< HEAD
        		  $("#addGroup").find("input").val("");//使每次实现add按钮之后，点击submit输入提交到后台之后使下次的add输入内容自动清空，方便下次的输入
=======
        		  $("#addGroup").find("input").val("");
>>>>>>> 2358d0961dccc0bad857e047bbfb0dd1801d40a1
        	  }
          });
         

     });
<<<<<<< HEAD
     
     
     //点击edit按钮的弹框submit按钮点击之后的实现过程 
=======
      
>>>>>>> 2358d0961dccc0bad857e047bbfb0dd1801d40a1
     $("#sureEdit").bind("click", function(){
          $("#editError").text("").hide();
          $("#editdate3").trigger(" blur");
          var $inputs= $("#EditTable").find("input");
          var datas = {"id": $("#editID").val(),"eriref":$inputs[0].value,"registered_by":$inputs[1].value,"registered_date":$inputs[2].value,
        		  "finished_date":$inputs[3].value,"turnaround_time":$inputs[4].value,
        		  "answer_code":$inputs[5].value,"valid":$inputs[6].value,"heading":$inputs[7].value};
          /*var $inputs =$("#EditTable").find("input");
          if($inputs[0].value== ""){
            showError("Eriref can not be null !");
            return false;
          }
          else if($inputs[1].value== ""){
            showError("Registerded by can not be null !");
            return false;
          }
         else  if($inputs[2].value== ""){
            showError("Registerded date can not be null !");
            return false;
          }
          else if($inputs[4].value== ""){
            showError(" Turnaround Time can not be null !");
            return false;
          }
          else if($inputs[7].value== ""){
            showError(" Heading can not be null !");
            return false;
          }*/

        //  验证完后ajax,最后把$("#cancelButton").click(),写入ajax的success中
          var cpage = parseInt($("#currentPage").val());
          $.ajax({
        	  type: "POST",
        	  url: "/mavenSSM/TR_list/editItem",
        	  data: JSON.stringify(datas),
        	  contentType:"application/json",
        	  dataType: "json",
        	  success: function(data){
        		  changeItem(datas);
        		  $("#tableArea").createTable(jsonObj,{
        			  rows:10,
                      needKey:true,
                      headName:headName,
                      needseqlist: true,
                      seqlist: seqlist,
                      link: true,
                      linkcols:"eriref",
                      linkdata: "https://mhweb.ericsson.se/TREditWeb/faces/oo/object.xhtml?mode=VIEW&eriref=",
                      pages:cpage
                  });
        		  $("#cancelEdit").click();
        	  }
          });
     });

});
<<<<<<< HEAD
//用于把edit部分改变的对应输入框的值可以准确的对应到对应的table图标的相应位置显示出来
=======

>>>>>>> 2358d0961dccc0bad857e047bbfb0dd1801d40a1
 function changeItem(data){
	for(var i = 0;i < jsonObj.length;i++){
		if(jsonObj[i].id == data.id){
			jsonObj[i] = data;
			break;
		}
	}
}
<<<<<<< HEAD
//当edit按钮被点击之后发生的add按钮，close按钮的改变过程
=======

>>>>>>> 2358d0961dccc0bad857e047bbfb0dd1801d40a1
$(function(){
         $("#changeUser").bind("click",function(){
             $(this).hide(360);
             $("#newGroup").hide(360);
             $("#closeEdit").show();
             $("#tableArea").bind("click",function(evt){
                  var which=evt.target;
                  var $tr=$(which).closest("tr");
                  $("#editID").val($tr.find("input:hidden").val());
                  createEditModel($tr);
                  $("#edit").trigger("click");
             });
         });
          $("#closeEdit").bind("click",function(){
               $(this).hide(360);
               $("#newGroup").show();
               $("#changeUser").show();
               $("#tableArea").unbind("click");//解除对table的输入框的点击，使整个table不能被修改，方便提供给别人看测试结果
          });
          //使点击table中的任意一个方框都可以使对应的行里面的内容，对应的放入edit按钮实现的弹窗的输入框中；
          function createEditModel ($tr){
            var $input= $("#EditTable").find("input");
            var $tds= $tr.find("td");
            for(var i=0;i<$tds.length;i++){
              $($input[i]).val($tds[i].innerText);
            }

          }
});
    function showError(msg){
        $("#addError").text(msg).show();
    }
//用正则表达式对日期值进行划分，使时间自动相减，当结束日期没有输入时，即表示ongoing
   function calDays(d1,d2,which){
     var reg=/^(\d{4})(-|\/)(\d{1,2})(-|\/)(\d{1,2})$/;
     if(reg.test(d1) && reg.test(d2)){
       reg.exec(d1);
       var td1=RegExp.$1 +"-"+ RegExp.$3 +"-"+ RegExp.$5;
       reg.exec(d2);
       var td2=RegExp.$1 +"-"+ RegExp.$3 +"-"+ RegExp.$5;
       $("#"+which).val(dateDiff(td2,td1));
     }
     else if(reg.test(d1) && d2==""){
       $("#"+which).val("ongoing");
     }

   }
   function dateDiff(date1, date2) {
            var type1 = typeof date1, type2 = typeof date2;
            if (type1 == 'string')
                date1 = stringToTime(date1);
            else if (date1.getTime)
                date1 = date1.getTime();
            if (type2 == 'string')
                date2 = stringToTime(date2);
            else if (date2.getTime)
                date2 = date2.getTime();
            //alert((date1 - date2) / (1000*60*60));
            return (date1 - date2) / (1000 * 60 * 60 * 24); //结果是小时
        }
        //字符串转成Time(dateDiff)所需方法
        function stringToTime(string) {
            var f = string.split(' ', 2);
            var d = (f[0] ? f[0] : '').split('-', 3);
            var t = (f[1] ? f[1] : '').split(':', 3);
            return (new Date(
           parseInt(d[0], 10) || null,
           (parseInt(d[1], 10) || 1) - 1,
            parseInt(d[2], 10) || null,
            parseInt(t[0], 10) || null,
            parseInt(t[1], 10) || null,
            parseInt(t[2], 10) || null
            )).getTime();
        }
