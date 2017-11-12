{
  // 基本定义，生成实例
  class Parent {
    constructor(name='mukewang') {
      this.name=name;
    }
  }
  let v_parent=new Parent('s')
  console.log('构造函数和实例',v_parent);

}

{
  // 基本定义，生成实例
  class Parent {
    constructor(name='mukewang') {
      this.name=name;
    }
  }


  class Child extends Parent{

  }
  console.log('继承父类',new Child());
}
{
  // 基本定义，生成实例
  class Parent {
    constructor(name='mukewang') {
      this.name=name;
    }
  }


  class Child extends Parent{
    constructor(name='child'){
        super(name);
        this.type='child'
    }
  }
  console.log('继承父类',new Child());
}

{
  // getter,setter
  class Parent {
    constructor(name='mukewang') {
      this.name=name;
    }
    //属性 不是函数
    get longName(){
      return 'mk'+this.name
    }
    set longName(value){
      this.name=value;
    }
  }
  let v=new Parent();
  console.log(v.longName)
  v.longName='hello';
  console.log(v.longName)

}

{
  class Parent {
    constructor(name='mukewang') {
      this.name=name;
    }
    static tell(){
      console.log('tell');
    }
  }
  let v=new Parent();
  console.log(v)
  Parent.tell();
}

{
  class Parent {
    constructor(name='mukewang') {
      this.name=name;
    }
    static tell(){
      console.log('tell');
    }
  }
  Parent.type='test';
  console.log(typeof Parent);

}
