module.exports = function(RED) {
    function UpperCaseNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
	var globalContext = this.context().global;
	if(globalContext.flicClients == null){
		global.flicClients = {};
		console.log("init flicClients");
	}
	console.log(Object.keys(globalContext));
        this.on('input', function(msg) {
            msg.payload = msg.payload.toUpperCase();
            node.send(msg);
        });
    }
    RED.nodes.registerType("uppercase",UpperCaseNode);
}
