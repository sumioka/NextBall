(function($){

	var URL        = 'https://vs.pacificleague.jp/packathon/apiv0/dp/data/';
	var video = document.getElementById('video');

	var _packathon = {
		'ball'         : 'mashup/pitch_data?pretty',						//一球データ検索
		'teamMaster'   : 'master/team_master',						//チームマスタ
		'playerMaster' : 'player_master',									//選手マスタ
		'pRecord'      : 'record/season_pitcher_record',	//シーズン投手成績
		'bRecord'      : 'record/season_batter_record'	//シーズン打者成績
	};

	var _query = {};

	$("#get").on('click', getJson);

	/* -------------------------
	Get JSON
	------------------------- */
	function getJson() {
		
		var html    = "";
		var result  = $("#getdata");

		load();

		function load() {
			var $this = $(this);

			var team  = $this.data('team');
			var vs    = $this.data('vs');
			var date  = $this.data('date');
			var limit = 20;

			var request = '&filter=game_date+gt+1427900400000+and+game_date+lt+1427986800000+and+inning_no+eq+7+and+top_bottom_code+eq+%272%27&count&sort=at_bat_id&attack_team_code+eq+%272005002';

			var JSON = URL + _packathon.ball + '?limit=' + limit + request;

			$.ajax({
			  type: "GET",
			  url: JSON,
			  headers  : { "Accept": "application/json" },
			  dataType : "json",
			  async    : true,
			  success: function(data, dataType){
			  	var data   = data.results;
			  	var length = data.length;

			  	video.src = data[10].movie_file_path;
			  	video.currentTime = data[10].movie_start_time;
			  	video.play();
			  }
			});

			$("#stop").on("click", function(){
				video.pause();
			})

			return false;
    }
		return false;
	}

	/* -------------------------
	Sey Movie
	------------------------- */
	function setMovie() {
		return false;
	}
	
	return false;
	
})(jQuery);