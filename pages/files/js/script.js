(function($){
	getJson();
	/* -------------------------
	Get JSON
	------------------------- */
	function getJson() {
		
		var html    = "";
		var result  = $("#getdata");

		load();

		function load() {
			var JSON   = 'https://vs.pacificleague.jp/packathon/apiv0/dp/data/mashup/pitch_data/';
			$.ajax({
			  type: "GET",
			  url: JSON,
			  headers : { "Accept": "application/json" },
			  dataType: "json",
			  async: true,
			  success: function(data, dataType){
			  	var length    = data.length;
					for(var i = 0; i < length; i++){
			    	var data      = data[i];
			    	var event_id  = data.event_id;
			    }
			    console.log(data)
			  }
			});

			return false;
    }
		return false;
	}
	
	return false;
	
})(jQuery);