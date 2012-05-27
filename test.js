

var c1 = new Ext.Panel({color:"orange",items:[new Ext.Panel({color:"pink"}),new Ext.Panel({color:"grey"}),new Ext.Panel({color:"cyan"})]});
	
var c2 = new Ext.Panel({color:"white",items:[new Ext.Panel({color:"cyan"}),new Ext.Panel({color:"pink"}),new Ext.Panel({color:"grey"})]});
	
var c3 = new Ext.Panel({color:"green",items:[new Ext.Panel({color:"grey"}),new Ext.Panel({color:"cyan"}),new Ext.Panel({color:"pink"})]});



var p = new Ext.Panel({
	container:"body",
	layout:"hbox",
	items:[c1,c2,c3]
	});




