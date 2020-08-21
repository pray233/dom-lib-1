let test = jQuery('#test');
//添加类
// const api = jQuery('.test')     //获取.test对应的所有元素
//遍历所有刚刚获取到的元素，添加.red类名
// api.addClass('red')
//链式操作 => addClass return this(api)
// api.addClass('red').addClass('blue')

//添加类(简洁版)
// jQuery('.test')
//     .addClass('red')
//     .addClass('blue')
//     .addClass('green')

//查找元素
// jQuery('.test').find('.child').addClass('yellow').addClass("blue");


//返回上级API
// jQuery('.test').find('.child').addClass('yellow').addClass("blue").end().addClass('orange');

test.parent().print();
test.children().print();