module.exports = function(Event) {
	var isStatic = true;
	Event.disableRemoteMethod('deleteById', isStatic);
	Event.disableRemoteMethod('createChangeStream', isStatic);
	Event.disableRemoteMethod("updateAttributes", isStatic); 
	Event.disableRemoteMethod("upsert",isStatic);
	Event.disableRemoteMethod("prototype.updateAttributes",isStatic);

};
