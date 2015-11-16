function Data() {
	this.dataId = 0;
	this.dataType = "";
	this.dataTimestamp = "";
	this.dataField = "";
}

Data.prototype = {
	setFields: function(params) {
		this.dataId = params.dataId;
		this.dataType = params.dataType;
		this.dataTimestamp = params.dataTimestamp;
		this.dataField = params.dataField;
	}
}
