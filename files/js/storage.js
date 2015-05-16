/* =======================================================================
Localstrage
========================================================================== */
(function($,_) {
	
	var _this, _dataBox;
	
	(function(){
		
		_.storage = _this = {};
		
	})();
	
	_this.save     = save;
	_this.loadData   = loadData;
	_this.clearData  = clearData;
	
	/* -------------------------
	Save
	------------------------- */
	function save(id, s, e, o, g) {
		
		_dataBox = {
			"start" : s,
			"end"   : e,
			"over"  : o,
			"group" : g
		}
		
		localStorage.setItem(id, JSON.stringify(_dataBox));
		localStorage.setItem("total", JSON.stringify(getTotal(g)));
		
		return false;
	}
	
	/* -------------------------
	Get Total
	------------------------- */
	function getTotal(g) {
		
		var total   = (loadData("total")) ? loadData("total") : {};
		var num   = 0;
		var regData = $(".regist");
		for(var i = 0; i < regData.length; i++) {
			num += Number(String(regData.eq(i).find(".ovt").text()).split("h")[0]);
		}
		
		total[g] = num;
		_.ui.setTotalTime(num);
		
		return total;
	}
	
	/* -------------------------
	Load Data
	------------------------- */
	function loadData(id) {
		return JSON.parse(localStorage.getItem(id));
	}
	
	/* -------------------------
	All clear
	------------------------- */
	function clearData() {
		if(showConfirm('全部消しますか？')) {
			if(showConfirm('本当にいいですね？')) {
				if(showConfirm('後悔しませんね？')) {
					localStorage.clear();
					$(".ovt").text("-");
					$(".regist").removeClass("regist");
					
					alert("あ〜あ、消えちゃった……\nでも大丈夫！思い出しながら1つずつ入力すれば元通り！\nあ！合計だけなら給与明細にも書いてあるよ！");
					$("#bar").stop().animate({"width" : 0}, 600);
					$("#overtime").find("span").text(0);
				}
			}
		}
		
		function showConfirm(txt) {
			return window.confirm(txt);
		}
		return false;
	}
	
	return false;
	
})(jQuery,Manager);