//author:denry
//date:2017.07.05

$(function(){ 
        //新增用户
        $('.add').click(function(){

      $("input[name='name']").val("");
      $("input[name='phone']").val("");
      $("input[name='addr']").val("");
      $("input[name='job']").val("");


          // $('.nav #index').removeClass('active');
          // $(this).css("background","#428bca");
          // (this).css("color","#428bca");
        $('#butt').show();//显现保存
        $('#butt0').hide();//隐藏更新

        })
      $('#butt').bind('click',function(){//点击保存
        //表单值赋予给变量
     var name = $("input[name='name']").val();
     var phone = $("input[name='phone']").val();
     var addr = $("input[name='addr']").val();
     var job = $("input[name='job']").val();

     //创建表格节点
    var tr = $('<tr><td  class="tdname"></td><td  class="tdphone"></td><td class="tdaddr"></td><td class="tdjob"></td> </tr>');
        $('.table').append(tr);
          //值在赋予给表格
            $('.tdname').text(name).removeClass();
            $('.tdphone').text(phone).removeClass();
            $('.tdaddr').text(addr).removeClass();
            $('.tdjob').text(job).removeClass();
       
   });

    //选定表格变色+删除+修改（就是用户选择）
     $("body").on("click", '.table tr:not(.tr1)', function(){//绑定事件，用于新加入的数据可以引用
    $(this).css("background","#428bca").siblings().css("background","");
    //赋予选中的表格一个del1样式，非常重要，作为标记导航定位一般的存在
    $(this).addClass('del1').siblings().removeClass('del1');

     })


         //用户删除
     $('.delete').click(function(){
      //检查表格中有没有del1 class
       if($('tr').hasClass('del1')){
          $('.del1').remove();
  
        }//第一个if--end
        else{
          $('#alert0').css("marginTop","-60px").show().delay(2000).hide(0);
        }

    });

     //用户修改
    $('.change').click(function(){
        if($('tr').hasClass('del1')){

          //获取表格中的值给变量
      var name = $('.del1 td:eq(0) ').text();
      var phone = $('.del1 td:eq(1) ').text(); 
      var addr = $('.del1 td:eq(2) ').text(); 
      var job = $('.del1 td:eq(3) ').text();

        $('  #butt').hide();//隐藏保存
        $(' #butt0').show();//显现更新


        //把变量中的值赋予表单
        $("input[name='name']").val(name); 
       $("input[name='phone']").val(phone); 
        $("input[name='addr']").val(addr);
        $("input[name='job']").val(job);

        $('#about').modal('show');


    //用户修改的更新按钮
      $('#butt0').click(function(){

        //从表单中获取值
     var name = $("input[name='name']").val();
     var phone = $("input[name='phone']").val();
     var addr = $("input[name='addr']").val();
     var job = $("input[name='job']").val();
     //把值赋予给表格
       $('.del1 td:eq(0) ').text(name) ;
       $('.del1 td:eq(1) ').text(phone) ; 
       $('.del1 td:eq(2) ').text(addr) ; 
       $('.del1 td:eq(3) ').text(job) ;

      })


        }else{
          // alert('请选择数据在进行修改操作');
                 // $('#about').modal('show');
                $('#alert1').css("marginTop","-60px").show().delay(4000).hide(0);
                //刷新页面，干掉爱恨交加的模态框
                // setTimeout("location.reload()",10);
              // setTimeout("alert('88')",2000);

         // $('.modal').hide();//遮罩藏
        }
    })//修改end


//取消选择
  $('.reset').click(function(){

    var num = 0;

    //遍历循环看tr中有没有del1 class
    $(".table  tr").each(function(){
      //如果有
           if($(this).hasClass('del1')){
            //移除这个样式
              $(this).css("background","").removeClass('del1');
              //显示移除成功信息
              $('#alert11').css("marginTop","-60px").show().delay(2000).hide(0);
              //flag+1
               num = num+1;
          }

    })//each end

//如果flag=0，那就是没有喽，输出不存在
if(num == 0){$('#alert12').css("marginTop","-60px").show().delay(2000).hide(0);}      
        
  })

})//function结束
