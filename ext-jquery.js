Ext = {};
Ext.Panel = function(config){
	this.div = null;
	var events = {
		beforeload:function(){},
		afterload:function(){}
	};
	var defaultSettings = {
		'background-color' : 'white',
		'height':'100%',
		'width':'100%'
	};
	this.init = function(){
		
		if(config.beforeload)events.beforeload = config.beforeload;
		if(config.afterload)events.afterload = config.afterload;
		events.beforeload();
		
		this.div = document.createElement("div");
		
		var d = $(this.div);
		
		d.css(defaultSettings);
		
		if(config.id)d.attr('id',config.id);
		if(config.height)d.height(config.height);
		if(config.width)d.width(config.width);
		if(config.color)d.css('background-color',config.color);
		if(config.container)$(config.container).append(this.div);
		if(config.items){
			$.each(config.items,function(index,value){
				if(config.layout !== "hbox")
					$(value.div).height(($(value.div).height()/config.items.length)+"%");
				else{
					$(value.div).css("float","left"); 
					$(value.div).width(($(value.div).width()/config.items.length)+"%");}
				d.append(value.div);
			});
		}
		events.afterload();
	};
	this.init();
};
