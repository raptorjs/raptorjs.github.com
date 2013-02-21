define("raptor/widgets/WidgetsContext",function(e,t,n){"use strict";var r=e("raptor/widgets/WidgetDef"),i=function(e){this.context=e,this.widgets=[],this.widgetStack=[]};return i.prototype={beginWidget:function(e,t){var n=this,i=n.widgetStack,s=i.length,o=s?i[s-1]:null;e.id||(e.id=n._nextWidgetId());if(e.assignedId&&!e.scope)throw raptor.createError(new Error('Widget with an assigned ID "'+e.assignedId+'" is not scoped within another widget.'));e.parent=o;var u=new r(e);o?o.addChild(u):n.widgets.push(u),i.push(u);try{t(u)}finally{i.splice(s,1)}},hasWidgets:function(){return this.widgets.length!==0},clearWidgets:function(){this.widgets=[],this.widgetStack=[]},_nextWidgetId:function(){return"w"+this.context.uniqueId()}},i});