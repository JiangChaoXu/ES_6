// // // // function test(){
// // // //
// // // //   // for(let  i=1; i<3;i++){
// // // //   //   console.log(i)
// // // //   // }
// // // //   // console.log(i);
// // // //   let a = 1;
// // // //   let a = 2;
// // // // }
// // // // test();
// // // // function last(){
// // // //   const PI=3.1415926;
// // // //   const k={
// // // //     a:1
// // // //   }
// // // //   k.b=3;
// // // //   console.log(PI,k);
// // // // }
// // // // last();
// // // // 对象的解构赋值
// // // // {
// // // //   let a,b;
// // // //   ({a,b}={a:1,b:2})
// // // //   console.log(a,b)
// // // // }
// // // //
// // // // {
// // // //   let a=1; let b=2;
// // // //   [a,b]=[b,a]
// // // //   console.log(a,b)
// // // // }
// // // //
// // // // {
// // // //   function f(){
// // // //     return [1,2]
// // // //   }
// // // //   let a,b;
// // // //   [a,b]=f();
// // // //   console.log(a,b)
// // // // }
// // // //
// // // // {
// // // //   function f(){
// // // //     return [1,2,3,4,5,6]
// // // //   }
// // // //   let a,b,c;
// // // //   [a,,,b]=f();
// // // //   console.log(a,b)
// // // // }
// // // //
// // // // {
// // // //   function f(){
// // // //     return [1,2,3,4,5,6]
// // // //   }
// // // //   let a,b,c;
// // // //   [a,...b]=f();
// // // //   console.log(a,b)
// // // // }
// // // //
// // // // {
// // // //   let o={p:42,q:true}
// // // //   let {p,q}=o;
// // // //   console.log(p,q);
// // // // }
// // // //
// // // //
// // // // {
// // // //   let {a=10,b=5}={a:3};
// // // //   console.log(a,b);
// // // // }
// // // //
// // // // {
// // // //   let metaData={
// // // //     title:'abc',
// // // //     test:[{
// // // //       title:'test',
// // // //       desc:'desc'
// // // //     }]
// // // //   }
// // // //   let {title:estitle,test:[{title:enTitle}]}=metaData;
// // // //   console.log(estitle)
// // // //   console.log(enTitle)
// // // // }
// // //
// // // //正则扩展
// // //
// // // {
// // //   let regex=new RegExp('xyz','i');
// // //   let regex2= new RegExp(/xyz/i);
// // //   console.log(regex.test('xyz123'),regex2.test('xyz123'));
// // //
// // //
// // //   let regex3=new RegExp(/xyz/ig,'i');
// // //   console.log(regex3.flags);
// // // }
// // //
// // // {
// // //   let s='bbb_bb_b';
// // //   let a1=/b+/g;
// // //   let a2=/b+/y;
// // //   console.log('one',a1.exec(s),a2.exec(s))
// // //   console.log('two',a1.exec(s),a2.exec(s))
// // // }
// // // //字符串的扩展
// // //
// // // {
// // //   console.log('a',`\u0061`);
// // //   console.log('s','\u20BB7');
// // //   console.log('s',`\u{20BB7}`)
// // // }
// // //
// // // {
// // //   let a='𠮷';
// // //   console.log('length',a.length);
// // //   console.log('0',a.charAt(0));
// // //   console.log('1',a.charAt(1));
// // //   console.log('2',a.charCodeAt(0))
// // //   console.log('3',a.charCodeAt(1))
// // //
// // //   let s1='𠮷a';
// // //   console.log('length',s1.length)
// // //   console.log('code',s1.codePointAt(0).toString(16))
// // // }
// // //
// // //
// // // {
// // //   // console.log(String.fromCharCode());
// // //   let str='\u{20BB7}abc';
// // //   for (let i = 0; i < str.length; i++) {
// // //     console.log(str[i])
// // //   }
// // //   for (let code of str) {
// // //       console.log(code);
// // //   }
// // // }
// // //
// // // {
// // //   let str='string';
// // //   console.log('includes',str.includes('r'))
// // //   console.log('static',str.startsWith('str'))
// // //   console.log('end',str.endsWith('g'));
// // // }
// // //
// // // {
// // //   let str='abc';
// // //   console.log(str.repeat(3));
// // // }
// // // // 模板字符串
// // //
// // // {
// // //   let name='list';
// // //   let info="hello world";
// // //   let m=`i am ${name},${info}`
// // //   console.log(m);
// // // }
// // //
// // // {
// // //   console.log('1'.padStart(3,'0'));
// // // }
// // //
// // // {
// // //   let user={
// // //     name:'list',
// // //     info:'hello world'
// // //   };
// // //   console.log(abc`i am ${user.name},${user.info}`);
// // //   function abc(s,v1,v2){
// // //     console.log(s,v1,v2)
// // //     return s+v1+v2
// // //   }
// // //
// // // }
// // // //数值的扩展
// // // {
// // //   console.log(0b111110111);
// // //   console.log(0o767);
// // // }
// // //
// // // {
// // //   console.log(Number.isFinite(15));
// // //   console.log(Number.isFinite(NaN));
// // //   console.log(Number.isFinite(1/0));
// // //   console.log(Number.isNaN(NaN))
// // // }
// // //
// // // {
// // //   console.log('25',Number.isInteger(25))
// // //   console.log('25.1',Number.isInteger(25.1))
// // // }
// // //
// // // {
// // //   console.log('4.5',Math.trunc(4.9));
// // // }
// // //
// // // {
// // //   console.log('-5',Math.sign(-5))
// // //   console.log('0',Math.sign(0))
// // //   console.log('5',Math.sign(5))
// // // }
// //
// //
// // //数组的扩展
// // {
// //   let arr = Array.of(3,4,7,'9','11')
// //   console.log(arr)
// //   let empty=Array.of();
// //   console.log(empty);
// // }
// // {
// //   let p=document.querySelectorAll('p');
// //   let pArr=Array.from(p)
// //   pArr.forEach(function(item){
// //     console.log(item.textContent);
// //   })
// //
// //   console.log(Array.from([1,3,5],function (item) {
// //     return item*2
// //   }));
// // }
// //
// // {
// //   console.log('fill',[1,'a',undefined].fill(7))
// //   console.log('fill-s',['a','b','c'].fill(7,1,3))
// // }
// //
// // {
// //   for(let index of ['1','c','ks'].keys()){
// //     console.log('keys',index)
// //   }
// //   for(let value of ['1','c','ks'].values()){
// //     console.log('values',value)
// //   }
// //   for(let [index,value] of ['1','c','ks'].entries()){
// //     console.log('index,value',index,value)
// //   }
// // }
// // // 函数扩展
// // {
// //   function test(x,y="world") {
// //     console.log('默认值',x,y)
// //   }
// //   test('hello')
// //   test('hello','kill')
// // }
// //
// // {
// //   let x='test';
// //   function test2(c,y=x) {
// //     console.log('作用域',c,y);
// //   }
// //   test2('kill')
// // }
// //
// // {
// //   function test3(...arg) {
// //     for (let v of arg) {
// //       console.log('rest',v)
// //     }
// //   }
// //   test3(1,2,3,4,'a');
// // }
// // {
// //   console.log('a',...[1,2,4]);
// // }
// //
// // {
// //   let arrow = v => v*2;
// //   console.log(arrow(3))
// //   let arrow2=()=>5
// //   console.log(arrow2())
// // }
// //
// // {
// //   function tail(x) {
// //     console.log('tail',x)
// //   }
// //   function fx(x) {
// //     return tail(x)
// //   }
// //   fx(123);
// // }
// // {
// //   //简介表达
// //   let o =1;
// //   let k =2;
// //   let es5={
// //     o:o,
// //     k:k
// //   }
// //   let es6={
// //     o,k
// //   }
// //   console.log('es5',es5)
// //   console.log('es6',es6)
// //
// //   let es5_method={
// //     hellow:function(){
// //       console.log('hellow')
// //     }
// //   }
// //   let es6_method={
// //     hellow(){
// //       console.log('hellow')
// //     }
// //   }
// //   es5_method.hellow();
// //   es6_method.hellow();
// //
// // }
// // {
// //   //属性表达式
// //     let a='b';
// //     let es5_obj={
// //         a:'c',
// //         b:'c'
// //     }
// //     let es6_obj={
// //         [a]:'c'
// //     }
// //     console.log(es5_obj,es6_obj)
// // }
// //
// // {
// //   console.log("字符串",Object.is('abc','abc'),'abc'==='abc')
// //   console.log('copy',Object.assign({a:'a'},{b:'b'}));
// //
// //   let test={k:123,o:456}
// //   for(let [key,value] of Object.entries(test)){
// //     console.log([key,value])
// //   }
// // }
// //
// // {
// //   //声名
// //   let a1=Symbol();
// //   let a2=Symbol();
// //   console.log(a1===a2);
// //   let a3= Symbol.for('a3');
// //   let a4=Symbol.for('a3');
// //   console.log(a3===a4)
// // }
// //
// //
// // {
// //   let a1=Symbol.for('abc');
// //   let obj={
// //     [a1]:'123',
// //     "abc":345,
// //     'c':456
// //   };
// //   for (let [key,value] of Object.entries(obj)){
// //       console.log(key,value)
// //   }
// //
// //   Object.getOwnPropertySymbols(obj).forEach(function(item){
// //     console.log(obj[item])
// //   })
// //
// //
// //   Reflect.ownKeys(obj).forEach(function(item){
// //     console.log(item,obj[item])
// //   })
// // }
//
// {
//   let  list = new Set();
//   list.add(5);
//   list.add(7);
//   console.log(list)
// }
//
// {
//   let arr = [1,2,3,4,5];
//   let list= new Set(arr);
//   console.log(list.size)
// }
//
// {
//   let list = new Set();
//   list.add(1);
//   list.add(2);
//   list.add(1);
//
//   let arr=[1,2,3,1,2];
//   let list2=new Set(arr);
//   console.log(list2);
// }
//
// {
//   let arr=['add','delete','clear','has'];
//   let list=new Set(arr);
//   console.log(list.has('has'));
//   console.log(list.delete('clear'),list);
//   list.clear()
//   console.log(list)
// }
// {
//   let arr=['add','delete','clear','has'];
//   let list=new Set(arr);
//   for(let key of list.keys()){
//     console.log('key',key);
//   }
//
//   for(let value of list.values()){
//     console.log('value',value);
//   }
//
//   for(let [key,value] of list.entries()){
//     console.log('value',key,value);
//   }
//
// }
//
// {
//   let map=new Map();
//   let arr=['abc'];
//   map.set(arr,'456');
//   console.log('map',map,map.get(arr));
// }
//
// {
//   let map =new Map([['a','123'],['b','456']]);
//   console.log(map)
// }
//
//
// {
//   let map = new Map();
//   let arr=[];
//   map.set('t',1);
//   arr.push({t:1});
//   console.info('map-array',map,arr)
//
//   let map_exist=map.has('t');
//   let array_exist=arr.find(item=>item.t);
//   console.info('map-array',map_exist,array_exist);
//   map.set('t',2);
//   arr.forEach(item=>item.t?item.t=2:'');
//   console.info('map-array-m',map,arr)
//
//   map.delete('t');
//   let index=arr.findIndex(itme=>itme.t);
//   arr.splice(index,1)
//     console.info('map-array-emy',map,arr)
//
// }
//
//
// {
//   let set =new Set();
//   let array=[];
//   set.add({t:1});
//   array.push({t:1});
//   console.info('set-array',set,array);
//
//
//   let set_ex=set.has({t:1});
//   let array_exist=array.find(item=>item.t);
//
//   console.info('set-array',set_ex,array_exist);
//
//
//   set.forEach(item=>item.t?set.delete(item):'');
//   console.log(set)
//
// }
// {
//   let item={t:1};
//   let set=new Set();
//   let map= new Map();
//   let obj={};
//   map.set('t',1);
//   set.add(item);
//   obj['t']=1;
//   console.log('map-set-obj',set,map,obj)
//
//   console.info({
//     map_ex:map.has('t'),
//     set_ex:set.has(item),
//     obj_ex:'t' in obj,
//   })
//   map.set('t',2);
//   set.forEach(item=>item.t?item.t=2:'');
//   obj.t=2;
//   console.info(map,set,obj)
//
//   map.delete('t');
//   set.delete(item);
//   delete obj['t'];
//
//   console.info(map,set,obj)
//
// }
// proxy 代理 链接和用户和真实对象中间的层
// Reflect 反射

{
  let obj={
    time:'2017-03-01',
    name:'net',
    _r:123
  }
  //拦截对象属性的读取
  let monitor=new Proxy(obj,{
    get(target,key){
      return target[key].replace('2017','2018');
    },
    //拦截设置属性
    set(target,key,value){
      if(key==='name'){
        return target[key]=value;
      }else{
        return target[key]
      }
    },
    //拦截key in object操作
      has(target,key){
        if(key==='name'){
          return target[key]
        }else{
          return false
        }
      },
      deleteProperty(target,key){
        if(key.indexOf('_')>-1){
          delete target[key]
          return true
        }else{
          return false
        }
      },
      ownKeys(target){
        return Object.keys(target).filter(item=>item!='time');
      }
  })



  console.log('get',monitor.time);
  monitor.time='2019';
  console.log('set',monitor.time);
  monitor.name='蘑菇街';
  console.log('set',monitor.name);
  console.log(monitor);


  console.log('has','name' in monitor,'time' in monitor);

  // delete monitor.time
  // console.log(monitor)

  // delete monitor._r
  // console.log(monitor)

  console.log(Object.keys(monitor))

}

{
  let obj={
    time:'2017-03-01',
    name:'net',
    _r:123
  }
  console.log('re',Reflect.get(obj,'time'))
  Reflect.set(obj,'name','慕课网')
  console.log(Reflect.has(obj,'name'));
}
{
  function validator(target,validator) {
    return new Proxy(target,{
      _validator:validator,
      set(target,key,value,proxy){
        if(target.hasOwnProperty(key)){
          let va=this._validator[key];
          console.log(va)
          if(!!va(value)){
            return Reflect.set(target,key,value,proxy)
          }else{
              throw Error(`不能设置${key}到${value}`);
          }
        }else{
          throw Error(`${key} 不存在`)
        }
      }
    })
  }
  const presonValidators={
    name(val){
      return typeof val==='string'
    },
    age(val){
      return typeof val==='number'&& val>18
    }
  }
  console.log(presonValidators)
  class Preson {
    constructor(name,age) {
      this.name=name;
      this.age=age;
      return validator(this,presonValidators)
    }
  }
  const preson=new Preson('lilei',30)
  preson.name='李磊'
}
