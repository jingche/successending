<<<<<<< HEAD
//artifacts和TR-list部分的实现过程基本一致，除了一个下拉框的实现有点不一样，相应更改的部分备有适当的注释
=======
>>>>>>> 2358d0961dccc0bad857e047bbfb0dd1801d40a1
var jsonObj = null;
var headName = new Array("Owner","Started date","Finished date","Used days","Category","Description");
var seqlist = new Array("id","owner","started_date","finished_date","used_days","category","description");
$(function(){
    //数据，实际情况是从后台获取的，格式json
      
          $.ajax({
        	  type:"POST",
        	  url:"/mavenSSM/Artifacts/getAllList",
        	  dataType:"json",
        	  success: function(data){
        		  jsonObj=data;
        		  $("#tableArea").createTable(data,{
        			  rows:10,
        			  needKey:true,
                      headName:headName,
                      needseqlist: true,
                      seqlist: seqlist,
        			  link:true,
        			  linkcols:"description",
        			  linkdata:"https://openalm.lmera.ericsson.se/plugins/tracker/?aid=",
        		   
        		 });
        		  
        	  }
              
        	  
          });

           $("#selectpage").bind("change",function(){
            var r = parseInt($(this).val());
             if($(this).val()=="All"){
              r=jsonObj.length;
             }
             $("#tableArea").createTable(jsonObj,{
   			     rows:r,
   			     needKey:true,
                 headName:headName,
                 needseqlist: true,
                 seqlist: seqlist,
   			     link:true,
   			     linkcols:"description",
   			     linkdata:"https://openalm.lmera.ericsson.se/plugins/tracker/?aid=",
   		   
   		 });
      });

          $("#inputNumber").bind("input",function(){   
            var  r=parseInt($("#selectpage").val());
              if($("#selectpage").val()=="All"){
<<<<<<< HEAD
               r= parseInt(jsonObj.length);
=======
               r= parseInt(jsonObj.length) ;
>>>>>>> 2358d0961dccc0bad857e047bbfb0dd1801d40a1
              }
            var value = $(this).val();
            var temp = [];
            for(var i = 0;i < jsonObj.length;i++){
              for(x in jsonObj[i]){
<<<<<<< HEAD
                if(x != "id" && jsonObj[i][x] != null && (""+jsonObj[i][x]).indexOf(value) > -1) {
=======
                if(x != "id" && jsonObj[i][x] != null && jsonObj[i][x].indexOf(value) > -1) {
>>>>>>> 2358d0961dccc0bad857e047bbfb0dd1801d40a1
                  temp.push(jsonObj[i]);
                  break;
                }
              }
            }
            $("#tableArea").createTable(temp,{
  			  rows:10,
  			  needKey:true,
                headName:headName,
                needseqlist: true,
                seqlist: seqlist,
  			  link:true,
  			  linkcols:"description",
  			  linkdata:"https://openalm.lmera.ericsson.se/plugins/tracker/?aid=",
  		   
  		 });
        });

});
$(function(){
       $("#time1").bind("blur",function(){
           calDays($(this).val(), $("#time2").val(),"time3");
       });
       $("#time2").bind("blur",function(){
           calDays($("#time1").val(),$(this).val(),"time3");
       });
       $("#editdate1").bind("blur",function(){
           calDays($(this).val(),$("#editdate2").val(), "editdate3");
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
	//让cancel按钮实现清空输入框和选择框的结果
	   $("#cancelButton").bind("click",function(){
	  	  $("#addGroup").find("input").val("");
	  	  $("#Select2 option:eq(0)").attr("selected",true);
	     });
		 
	
     $("#sureAdd").bind("click",function(){
          $("#addError").text("").hide();
          $("#time3").trigger(" blur");
         
          var $inputs =$("#addGroup").find("input");
          if($inputs[0].value== ""){
            showError("Owner can not be null !");
            return false;
          }
          else if($inputs[1].value== ""){
            showError(" Started date can not be null !");
            return false;
          }
         else  if($inputs[3].value== ""){
            showError(" Used Days can not be null !");
            return false;
          }

          else if($inputs[4].value== ""){
            showError(" Description can not be null !");
            return false;
          }
          var datas = {"id": 0,"owner":$inputs[0].value,"started_date":$inputs[1].value,"finished_date":$inputs[2].value,
        		  "used_days":$inputs[3].value,"category":$("#Select2").find(':selected').text(),"description":$inputs[4].value};
          
          var cpage = parseInt($("#currentPage").val());
          $.ajax({
        	  type:"POST",
        	  url:"/mavenSSM/Artifacts/addItem",
        	  dataType:"json",
        	  data:JSON.stringify(datas),
        	  contentType:"application/json",
        	  success:function(data){
        		  datas.id=data.id;
        		  jsonObj.push(datas);
        		  $("#tableArea").createTable(jsonObj,{
        			  rows:10,
                      needKey:true,
                      headName:headName,
                      needseqlist: true,
                      seqlist: seqlist,
                      link: true,
                      linkcols:"description",
                      linkdata: "https://openalm.lmera.ericsson.se/plugins/tracker/?aid=",
                      pages:cpage
        		  });
<<<<<<< HEAD
        		     $("#Select2 option:eq(0)").attr("selected",true);
=======
>>>>>>> 2358d0961dccc0bad857e047bbfb0dd1801d40a1
        		//  验证完后ajax,最后把$("#cancelButton").click(),写入ajax的success中
        	         $("#cancelButton").click();
        	         
        	       //成功提交后切换模态框数据
        	         $("#addGroup").find("input").val("");
        	  }
        	  
          });
     });
     $("#sureEdit").bind("click",function(){
          $("#editError").text("").hide();
          $("#editdate3").trigger(" blur");
           
          var $inputs =$("#EditTable").find("input");
          /*if($inputs[0].value== ""){
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
          var datas = {"id": $("#editID").val(),"owner":$inputs[0].value,"started_date":$inputs[1].value,"finished_date":$inputs[2].value,
<<<<<<< HEAD
        		  "used_days":$inputs[3].value,"category":$("#editSelect").find(':selected').text(),"description":$inputs[4].value};
=======
        		  "used_days":$inputs[3].value,"category":$("#Select2").find(':selected').text(),"description":$inputs[4].value};
>>>>>>> 2358d0961dccc0bad857e047bbfb0dd1801d40a1
          var cpage = parseInt($("#currentPage").val());
          $.ajax({
        	  type: "POST",
        	  url: "/mavenSSM/Artifacts/editItem",
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
                      linkcols:"description",
                      linkdata: "https://openalm.lmera.ericsson.se/plugins/tracker/?aid=",
                      pages:cpage
                  });
        		  //验证完后ajax,最后把$("#cancelButton").click(),写入ajax的success中
        	         $("#cancelEdit").click();  
        		   
        	  }
          });

        
     });

});

function changeItem(data){
	for(var i=0; i< jsonObj.length;i++){
		if(jsonObj[i].id==data.id){
			jsonObj[i]=data;
			break;
		}
	}
}

$(function(){
         $("#changeUser").bind("click",function(){
                 $(this).hide(360);
                 $("#newGroup").hide(360);
                 $("#closeEdit").show();
            $("#tableArea").bind("click",function(evt){
                 var which = evt.target;
                 var  $tr = $(which).closest("tr");
                 $("#editID").val($tr.find("input:hidden").val());
                 createEditModel($tr);
                 $("#edit").trigger("click");
            });
         });
          $("#closeEdit").bind("click",function(){
                $(this).hide(360);
                $("#newGroup").show();
                $("#changeUser").show();
                $("#tableArea").unbind("click");
          });
         function createEditModel($tr){
                var $input = $("#EditTable").find("input");
                var $tds = $tr.find("td");
                for(var i= 0;i<4;i++){
                  $($input[i]).val($tds[i].innerText);
                }
                //var option = $("#Select2").find("option[text='"+$tds[4].innerText+"']");
                //$("#Select2").find("option[text='"+$tds[4].innerText+"']").attr("selected",true);
                var options = $("#editSelect").find("option");
                for(var i = 0;i < options.length;i++){
                	if($(options[i]).val().trim() == $tds[4].innerText.trim()){
                		$(options[i]).prop("selected", true);//使table中对应的选择框中内容对应到edit弹框，使选择框中的输入项被正确显示
                		break;
                	}
                }
               $($input[4]).val($tds[5].innerText);
         }
});

  function showError(msg){
    $("#addError").text(msg).show();
  }
   function calDays (d1,d2,which){
       var reg=/^(\d{4})(-|\/)(\d{1,2})(-|\/)(\d{1,2})$/;
       if(reg.test(d1) && reg.test(d2)){
         reg.exec(d1);
         var td1= RegExp.$1 +"-" + RegExp.$3 + "-"+ RegExp.$5;
         reg.exec(d2);
         var td2= RegExp.$1 +"-"+ RegExp.$3 + "-"+ RegExp.$5;
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
