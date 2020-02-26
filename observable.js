Observable = function() {
  //без изменений
  this.observers = [];
};

Observable.prototype.deliver = function(data) {
  for (var i in this.observers) {
    this.observers[i].func.call(this.observers[i].context, data); //функция теперь вызывается в нужном контексте
  }
};

Function.prototype.subscribe = function(observable, context) {
  var ctx = context || this; //если контекст вызова не задан, то контекстом считается this «по-умолчанию», то есть текущая функция
  var observer = {
    //теперь наблюдатель будет сообщать, в каком контексте нужно вызвать функцию
    context: ctx,
    func: this
  };
  observable.observers.push(observer);
  return this;
};

myClass = function() {
  this.value = 0;
  this.onChange = new Observable();
};

myClass.prototype.change = function(new_value) {
  this.value = new_value;
  this.onChange.deliver(this.value);
};

Logger = function(logtype) {
  this.type = !!logtype ? logtype : "alert";
};

Logger.prototype.write = function(value) {
  if (this.type == "console") {
    console.log(value);
    return;
  }
  alert(value);
};

var c = new myClass();

var logger = new Logger("console");
var logger2 = new Logger("console");
logger.write.subscribe(c.onChange, logger);
logger2.write.subscribe(c.onChange, logger);

c.change(111);
